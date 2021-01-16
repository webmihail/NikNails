import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { Person } from 'src/persons/entity';
import { Repository, getConnectionManager, DeleteResult } from 'typeorm';
import { Record } from './entity';
import { DataRecordDTO, FormatRecordsDTO, RecordDTO } from './dtos';
import { formatRecords, telegramMesenger } from './utils';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
  ) {}

  async getAllRecords(): Promise<FormatRecordsDTO[]> {
    const allRecords = await this.recordRepository.find({
      relations: ['person'],
    });

    return formatRecords(allRecords);
  }

  async getRecord(id: number): Promise<RecordDTO> {
    const record = await this.recordRepository.findOne(id);
    if (!record) throw new NotFoundException('record dont exists');

    return record;
  }

  async createRecord(data: DataRecordDTO): Promise<RecordDTO> {
    const connection = getConnectionManager().get('default');
    const personRepository = connection.getRepository(Person);
    const person = await personRepository.findOne({
      where: { id: data.personId },
    });

    const record = await this.recordRepository.create({
      type: data.type,
      status: data.status,
      date: moment(new Date(data.time))
        .add(3, 'hours')
        .toISOString(),
    });

    record.person = person;
    await this.recordRepository.save(record);
    telegramMesenger(record);

    delete record.person.phoneNumber
    return record;
  }

  async updateRecord(id: number, data: { status: string }): Promise<RecordDTO> {
    const record = await this.getRecord(id);
    const editRecord = Object.assign(record, data);
    const saveRecord: RecordDTO = await this.recordRepository.save(editRecord);

    delete saveRecord.person.phoneNumber;
    return saveRecord;
  }

  async deleteRecord(id: number): Promise<DeleteResult> {
    const record = await this.getRecord(id);
    return await this.recordRepository.delete(record);
  }
}
