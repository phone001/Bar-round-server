import { DATETIME, INTEGER } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn ,DeleteDateColumn} from "typeorm"

/**
 * 주문 테이블
 */
@Entity("ORDER")
export class Order {
    @PrimaryGeneratedColumn({name:'ORDER_ID',type:INTEGER})
    orderId: number;

    @Column({name:'TABLE_ID',nullable:false,type:INTEGER})
    tableId:number

    @Column({name:'PAYMENT_COMPLATED_AT',type:DATETIME,default:null})
    paymentComplatedAt:string;

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true })
    deletedAt: Date | null;
}