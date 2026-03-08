import { DATETIME, INTEGER, VARCAHR } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn ,DeleteDateColumn} from "typeorm"


/**
 * 추천주류 테이블
 */
@Entity("LIQUOR")
export class Liquor {
    @PrimaryGeneratedColumn({name:'LIQUOR_ID',type:INTEGER})
    liquorId: number;

    @Column({name:'FOOD_ID',nullable:false,type:INTEGER})
    foodId:number

    @Column({name:'DRINK_ID',nullable:false,type:INTEGER})
    drinkId:string;
    
    @CreateDateColumn({ name: 'CREATED_AT',type:DATETIME })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT',type:DATETIME })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true,type:DATETIME })
    deletedAt: Date | null;
}