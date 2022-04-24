import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  Nombres: string;

  @Column({ length: 500 })
  Apellidos: string;

  @Column({ length: 500 })
  Clave: string;

  @Column({ length: 500 })
  Ci: string;

  @Column({ length: 500 })
  foto: string;

  @Column({ default: 1 })
  estado: number;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
