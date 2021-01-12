import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { Person } from '../persons/entity/person.entity';
// import { Record } from '../records/entity/record.entity';
import * as typeOrmConfig from '../../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions)],
})
export class DbConnect {}
