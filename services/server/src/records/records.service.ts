import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/persons/entity/person.entity';
import { Repository, getConnectionManager } from 'typeorm';
import { Record } from './entity/record.entity';
import { RecordDTO } from './records.dto';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>
  ) {}

  async getAllRecords() {
    return this.recordRepository.find();
  }

  async createRecord(data: RecordDTO) {
    const connection = getConnectionManager().get("default");
    const personRepository = connection.getRepository(Person)
    const person = await personRepository.findOne({where: {id: data.personId}});
    const record = await this.recordRepository.create({
      type:data.type,
      status: data.status,
      date: data.time
    })
    
    record.person = person;
    await this.recordRepository.save(record);
    return record;
  }
}
