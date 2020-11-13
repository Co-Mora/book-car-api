import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { CarAvailability } from "./CarAvailability";
import { Coordinate } from "./Coordinate";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brandName: string;

    @Column()
    buildNumber: string;

    @Column()
    mode: string;

    @Column()
    modelYear: string;

    @Column("decimal", { precision: 5, scale: 2 })
    priceDay: number;

    @Column()
    featured: string;

    @OneToOne(type => Coordinate)
    @JoinColumn()
    coordinates: Coordinate;

    @OneToOne(type => CarAvailability)
    @JoinColumn()
    carAvailability: CarAvailability;

}