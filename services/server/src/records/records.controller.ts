import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecordsService } from './records.service';
import { DataRecordDTO, FormatRecordsDTO, RecordDTO } from './dtos';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

@Controller('records')
@UsePipes(new ValidationPipe())
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Get()
  getAllRecords(): Promise<FormatRecordsDTO[]> {
    return this.recordsService.getAllRecords();
  }

  @Post()
  createRecords(@Body() data: DataRecordDTO): Promise<RecordDTO> {
    return this.recordsService.createRecord(data);
  }
}
