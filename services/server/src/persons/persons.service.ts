import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { capitalize } from 'src/common/utils';
import { DeleteResult, Like, Repository } from 'typeorm';
import { Person } from './entity';
import { PersonDTO, PersonsFilterDTO, EditPersonDTO } from './dtos';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async getAllPersons(
    filter: PersonsFilterDTO,
  ): Promise<{
    data: PersonDTO[];
    count: number;
  }> {
    const [result, total] = await this.personRepository.findAndCount({
      where: [
        { firstName: Like('%' + capitalize(filter.search) + '%') },
        { lastName: Like('%' + capitalize(filter.search) + '%') },
        { phoneNumber: Like('%' + filter.search + '%') },
      ],
      order: { firstName: 'DESC', lastName: 'DESC', phoneNumber: 'DESC' },
      take: filter.take,
      skip: filter.skip,
    });

    return {
      data: result,
      count: total,
    };
  }

  async createPerson(data: PersonDTO): Promise<PersonDTO> {
    const personExist = await this.personRepository.findOne({
      phoneNumber: data.phoneNumber,
    });
    if (personExist)
      throw new NotFoundException('Person already registered with phone');

    const newPerson = await this.personRepository.create({
      ...data,
      firstName: capitalize(data.firstName),
      lastName: capitalize(data.lastName),
    });

    const person = await this.personRepository.save(newPerson);

    delete person.phoneNumber;
    return person;
  }

  async getPerson(id: number): Promise<PersonDTO> {
    const person = await this.personRepository.findOne(id);
    if (!person) throw new NotFoundException('user dont exists');

    return person;
  }

  async updatePerson(id: number, data: EditPersonDTO): Promise<PersonDTO> {
    const person = await this.getPerson(id);
    const editPerson = Object.assign(person, data);
    const savePerson = await this.personRepository.save(editPerson);

    delete savePerson.phoneNumber;
    return savePerson;
  }

  async deletePerson(id: number): Promise<DeleteResult> {
    const persone = await this.getPerson(id);
    return await this.personRepository.delete(persone);
  }
}
