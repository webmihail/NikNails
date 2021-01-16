import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { DeleteResult } from 'typeorm';
import { PersonDTO, PersonsFilterDTO, EditPersonDTO, PersonFormatDTO } from './dtos';
import { PersonsService } from './persons.service';

@Controller('persons')
@UsePipes(new ValidationPipe())
export class PersonsController {
  constructor(private personeService: PersonsService) {}

  @Post('/filter')
  getAllPersons(
    @Body() filter: PersonsFilterDTO,
  ): Promise<{
    data: PersonFormatDTO[];
    count: number;
  }> {
    return this.personeService.getAllPersons(filter);
  }

  @Get(':id')
  getPerson(@Param('id') id: number): Promise<PersonDTO> {
    return this.personeService.getPerson(id);
  }

  @Post()
  createPerson(@Body() data: PersonDTO): Promise<PersonDTO> {
    return this.personeService.createPerson(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updatePerson(
    @Param('id') id: number,
    @Body() data: EditPersonDTO,
  ): Promise<PersonDTO> {
    return this.personeService.updatePerson(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deletePerson(@Param('id') id: number): Promise<DeleteResult> {
    return this.personeService.deletePerson(id);
  }
}
