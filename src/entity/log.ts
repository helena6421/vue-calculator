import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Log extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    log: string
}