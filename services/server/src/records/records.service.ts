import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { Person } from 'src/persons/entity';
import { Repository, getConnectionManager } from 'typeorm';
import { Record } from './entity';
import { DataRecordDTO, FormatRecordsDTO, RecordDTO } from './dtos';
import { formatRecords, telegramMesenger } from './utils';

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

    return record;
  }
}
