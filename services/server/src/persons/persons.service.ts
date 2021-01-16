import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { capitalize } from 'src/common/utils';
import { DeleteResult, Like, Repository } from 'typeorm';
import { Person } from './entity';
import { PersonDTO, PersonsFilterDTO, EditPersonDTO, PersonFormatDTO } from './dtos';
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
    data: PersonFormatDTO[];
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

    const formatResult = result.map((person: PersonDTO) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const{phoneNumber, ...rest} = person;
      return rest
    })

    return {
      data: formatResult,
      count: total,
    };
  }

  async getPerson(id: number): Promise<PersonDTO> {
    const person = await this.personRepository.findOne(id);
    if (!person) throw new NotFoundException('user dont exists');

    return person;
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
