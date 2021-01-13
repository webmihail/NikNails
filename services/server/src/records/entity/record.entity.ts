import { GenericEntity } from 'src/generic';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Person } from '../../persons/entity/person.entity';

@Entity({ name: 'records' })
export class Record extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  type: string;

  @Column()
  status: string;

  @ManyToOne(
    () => Person,
    (person: Person) => person.records,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'personId' })
  public person: Person;
}
