import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecordsService } from './records.service';
import { DataRecordDTO, FormatRecordsDTO, RecordDTO } from './dtos';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Put } from '@nestjs/common';

@Controller('records')
@UsePipes(new ValidationPipe())
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Get()
  getAllRecords(): Promise<FormatRecordsDTO[]> {
    return this.recordsService.getAllRecords();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getRecord(@Param('id') id: number): Promise<RecordDTO> {
    return this.recordsService.getRecord(id);
  }

  @Post()
  createRecord(@Body() data: DataRecordDTO): Promise<RecordDTO> {
    return this.recordsService.createRecord(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateRecord(
    @Param('id') id: number,
    @Body() data: { status: string },
  ): Promise<RecordDTO> {
    return this.recordsService.updateRecord(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteRecord(@Param('id') id: number): Promise<DeleteResult> {
    return this.recordsService.deleteRecord(id);
  }
}
