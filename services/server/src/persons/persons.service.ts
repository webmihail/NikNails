import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { capitalize } from 'src/common/utils';
import { Like, Repository } from 'typeorm';
import { Person } from './entity/person.entity';
import { PersonDTO, PersonsFilter } from './persons.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>
  ) {}

  async getAllPersons(filter: PersonsFilter) {
    const [result, total] = await this.personRepository.findAndCount(
      {
        where: [
          { firstName: Like('%' + capitalize(filter.search) + '%') }, 
          { lastName: Like('%' + capitalize(filter.search) + '%') },
          { phoneNumber: Like('%' + filter.search + '%') }
        ],
        order: { firstName: "DESC", lastName: "DESC", phoneNumber: "DESC"},
        take: filter.take,
        skip: filter.skip
      }
    )

    return {
      data: result, 
      count: total 
    }
  }

  async createPerson(data: PersonDTO) {
    const person = await this.personRepository.create({
      ...data,
      firstName: capitalize(data.firstName),
      lastName: capitalize(data.lastName)
    });
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
