import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonDTO, PersonsFilter } from './dtos';
import { Person } from './entity';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private personeService: PersonsService) {}

  @Post('/filter')
  getAllPersons(
    @Body() filter: PersonsFilter,
  ): Promise<{
    data: Person[];
    count: number;
  }> {
    return this.personeService.getAllPersons(filter);
  }

  @Post()
  createPerson(@Body() data: PersonDTO): Promise<Person> {
    return this.personeService.createPerson(data);
  }

  @Get(':id')
  getPerson(@Param('id') id: number): Promise<Person> {
    return this.personeService.getPerson(id);
  }

  @Put(':id')
  updatePerson(
    @Param('id') id: number,
    @Body() data: Partial<PersonDTO>,
  ): Promise<Person> {
    return this.personeService.updatePerson(id, data);
  }

  @Delete(':id')
  deletePerson(
    @Param('id') id: number,
  ): Promise<{
    deleted: boolean;
  }> {
    return this.personeService.deletePerson(id);
  }
}
