import { Module } from '@nestjs/common';
import { PersonsModule } from './persons/persons.module';
import { RecordsModule } from './records/records.module';
import { Connection } from 'typeorm';
import { DbConnect } from './dbConnect/dbConnect.module';

@Module({
  imports: [PersonsModule, RecordsModule, DbConnect],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
