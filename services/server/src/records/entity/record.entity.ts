import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from '../../persons/entity/person.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  price: number;

  @ManyToOne(() => Person, (assignee: Person) => assignee.record)
  public assignee: Person
}