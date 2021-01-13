import { GenericEntity } from 'src/generic';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Record } from '../../records/entity';

@Entity({ name: 'persons' })
export class Person extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'first_name', type: 'varchar', length:255})
  firstName: string;

  @Column({name: 'last_name', type: 'varchar', length:255})
  lastName: string;

  @Column({name: 'phone_number', type: 'varchar', length:255})
  phoneNumber: string;

  @OneToMany(
    () => Record,
    (record: Record) => record.person,
  )
  public records: Record[];
}
