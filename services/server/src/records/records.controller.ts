import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecordsService } from './records.service';
import { FormatRecords, RecordDTO } from './dtos';
import { Record } from './entity';

@Controller('records')
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Get()
  getAllRecords(): Promise<FormatRecords[]> {
    return this.recordsService.getAllRecords();
  }

  @Post()
  createRecords(@Body() data: RecordDTO): Promise<Record> {
    return this.recordsService.createRecord(data);
  }
}
