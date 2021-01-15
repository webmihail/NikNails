import { GenericEntity } from 'src/generic';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { hash } from 'bcrypt';

@Entity({ name: 'users' })
export class User extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', type: 'varchar', length: 255 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 128, nullable: false, select: false })
  password: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<null> {
    if (!this.password) {
      return;
    }

    this.password = await hash(this.password, 10);
  }
}
