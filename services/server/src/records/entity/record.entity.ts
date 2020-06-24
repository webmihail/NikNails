import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from '../../persons/entity/person.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  type: string;

  @Column()
  status: string;

  @ManyToOne(() => Person, (person: Person) => person.records)
  public person: Person
}