import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { PersonDTO, PersonsFilterDTO, EditPersonDTO } from './dtos';
import { PersonsService } from './persons.service';

@Controller('persons')
@UsePipes(new ValidationPipe())
export class PersonsController {
  constructor(private personeService: PersonsService) {}

  @Post('/filter')
  getAllPersons(
    @Body() filter: PersonsFilterDTO,
  ): Promise<{
    data: PersonDTO[];
    count: number;
  }> {
    return this.personeService.getAllPersons(filter);
  }

  @Post()
  createPerson(@Body() data: PersonDTO): Promise<PersonDTO> {
    return this.personeService.createPerson(data);
  }

  @Get(':id')
  getPerson(@Param('id') id: number): Promise<PersonDTO> {
    return this.personeService.getPerson(id);
  }

  @Put(':id')
  updatePerson(
    @Param('id') id: number,
    @Body() data: EditPersonDTO,
  ): Promise<PersonDTO> {
    return this.personeService.updatePerson(id, data);
  }

  @Delete(':id')
  deletePerson(@Param('id') id: number): Promise<DeleteResult> {
    return this.personeService.deletePerson(id);
  }
}
