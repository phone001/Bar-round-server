import { DATETIME, INTEGER, TEXT, VARCAHR } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from "typeorm"

/** 
 * 주류 테이블
 */
@Entity("DRINK")
export class Drink {
    @PrimaryGeneratedColumn({name:'DRINK_ID',type:INTEGER})
    orderId: number;

    @Column({name:'NAME',type:VARCAHR,length:100})
    name:string

    @Column({name:'PRICE',type:INTEGER})
    price:number;

    @Column({name:'TYPE',type:VARCAHR,length:50})
    type:string;

    @Column({name:'DESCRIPTION',type:TEXT})
    desc:string;

    @CreateDateColumn({ name: 'CREATED_AT',type:DATETIME })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT',type:DATETIME })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true,type:DATETIME })
    deletedAt: Date | null;
}