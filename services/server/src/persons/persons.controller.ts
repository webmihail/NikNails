import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonDTO } from './persons.dto';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private personeService: PersonsService){}

  @Get()
  getAllPersons() {
    return this.personeService.getAllPersons();
  }

  @Post()
  createPerson(@Body() data: PersonDTO) {
    return this.personeService.createPerson(data);
  }

  @Get(':id')
  getPerson(@Param('id') id: number) {
    return this.personeService.getPerson(id);
  }

  @Put(':id')
  updatePerson(@Param('id') id: number, @Body() data: Partial<PersonDTO>) {
    return this.personeService.updatePerson(id, data);
  }

  @Delete(':id')
  deletePerson(@Param('id') id: number) {
    return this.personeService.deletePerson(id);
  }
}
