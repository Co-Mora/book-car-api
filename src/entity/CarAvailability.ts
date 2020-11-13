import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CarAvailability {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startAt: string;

    @Column()
    endAt: string;

    @Column()
    isAvailable: string;

}