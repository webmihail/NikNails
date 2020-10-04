import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entity/person.entity';
import { PersonDTO } from './persons.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>
  ) {}

  async getAllPersons() {
    return await this.personRepository.find();
  }

  async createPerson(data: PersonDTO) {
    const person = await this.personRepository.create(data);
    await this.personRepository.save(person);
    return person;
  }

  async getPerson(id: number) {
    return await this.personRepository.findOne({where: {id}});
  }

  async updatePerson(id: number, data: Partial<PersonDTO>) {
    await this.personRepository.update({id}, data);
    return await this.personRepository.findOne({id});
  }

  async deletePerson(id: number) {
    await this.personRepository.delete({id});
    return { deleted: true };
  }
}
