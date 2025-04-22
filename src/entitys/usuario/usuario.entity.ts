import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('professores')// nome da tabela no banco de dados
export class Usuario {
@PrimaryGeneratedColumn()
id: number;
@Column()
nome: string;
@Column()
email: string;
@Column()
id_escola: string;
@Column()
senha: string;
}