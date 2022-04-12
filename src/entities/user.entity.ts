import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  first_name: string;

  @Column({ length: 150 })
  last_name: string;

  @Column({ length: 16, unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column('text')
  description: string;
}
