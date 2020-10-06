import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordDTO } from './records.dto';

@Controller('records')
export class RecordsController {
  constructor(private recordsService: RecordsService){}

  @Get()
  getAllRecords(){
    return this.recordsService.getAllRecords();
  }

  @Post()
  createRecords(@Body() data: RecordDTO){
    return this.recordsService.createRecord(data);
  }
}
