import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Person } from '../persons/entity/person.entity';
// import { Record } from '../records/entity/record.entity';
import settings from 'settings';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "postgres",
    "host": settings.postgres.host,
    "port": 5432,
    "username": settings.postgres.user,
    "password": settings.postgres.password,
    "database": settings.postgres.database,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  })],
})
export class DbConnect {}
