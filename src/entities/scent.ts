import { DATETIME, INTEGER, VARCAHR } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn ,DeleteDateColumn} from "typeorm"

/**
 * 죄석 테이블
 */
@Entity("SCENT")
export class SCENT {
    @PrimaryGeneratedColumn({name:'SCENT_ID',type:INTEGER})
    scentId: number;

    @Column({name:'NAME',type:VARCAHR,length:50})
    name:string

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true })
    deletedAt: Date | null;
}