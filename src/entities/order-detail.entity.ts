import { DATETIME, INTEGER, VARCAHR } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn ,DeleteDateColumn} from "typeorm"

/**
 * 주문 상세 테이블
 */
@Entity("ORDER_DETAIL")
export class ORDER_DETAIL {
    @PrimaryGeneratedColumn({name:'ORDER_DETAIL_ID',type:INTEGER})
    orderDetailId: number;

    @Column({name:'ORDER_ID',nullable:false,type:INTEGER})
    orderId:number

    @Column({name:'PRODUCT_ID',type:INTEGER})
    productId:number;

    @Column({name:'QUANTITY',type:INTEGER})
    quantity:number;

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true })
    deletedAt: Date | null;
}