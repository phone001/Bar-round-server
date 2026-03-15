import { DATETIME, INTEGER } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn ,DeleteDateColumn} from "typeorm"

/**
 * 주문 느낌 매칭 테이블
 */
@Entity("DRINK_SCENT_MAP")
export class Drink_Scent_Map {
    @PrimaryGeneratedColumn({name:'MAP_ID',type:INTEGER})
    mapId: number;

    @Column({name:'DRINK_ID',nullable:false,type:INTEGER})
    drinkId:number

    @Column({name:'SCENT_ID',nullable:false,type:INTEGER})
    feelingId:string;

    @CreateDateColumn({ name: 'CREATED_AT',type:DATETIME })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT',type:DATETIME })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true,type:DATETIME })
    deletedAt: Date | null;
}