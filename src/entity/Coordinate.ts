import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Coordinate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    latitude: string;

    @Column()
    longitude: string;
}