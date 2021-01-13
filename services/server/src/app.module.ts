import { Module } from '@nestjs/common';
import { PersonsModule } from './persons/persons.module';
import { RecordsModule } from './records/records.module';
import { Connection } from 'typeorm';
import { DbConnect } from './dbConnect/dbConnect.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import 'moment/locale/ru';

@Module({
  imports: [PersonsModule, RecordsModule, DbConnect, UsersModule, AuthModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
