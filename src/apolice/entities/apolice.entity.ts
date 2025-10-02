import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: "tb_apolices"})
export class Apolice {
    @PrimaryGeneratedColumn()
    id: number //id PRIMARY KEY AUTO_INCREMENT

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    numero_apolice: string //titulo VARCHAR (100) NOT NULL

    @IsNotEmpty()
    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    valor_premio: number;

    @IsNotEmpty()
    @Column('decimal', { precision: 12, scale: 2, nullable: false })
    cobertura: number;

    @UpdateDateColumn()
    data: Date // data DATE(6) UPDATE_TIMESTAMP

}