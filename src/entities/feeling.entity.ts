import { DATETIME, INTEGER, TEXT, VARCAHR } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from "typeorm"

/** 
 * 주류 느낌 테이블
 */
@Entity("FEELING")
export class Feeling {
    @PrimaryGeneratedColumn({name:'FEELING_ID',type:INTEGER})
    feelingId: number;

    @Column({name:'NAME',type:VARCAHR,length:50})
    name:string

    @CreateDateColumn({ name: 'CREATED_AT',type:DATETIME })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT',type:DATETIME })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true,type:DATETIME })
    deletedAt: Date | null;
}