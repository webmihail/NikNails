import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Record } from '../../records/entity/record.entity';

@Entity({name: 'persons'})
export class Person extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Record, (record: Record) => record.person)
  public records: Record[];
}