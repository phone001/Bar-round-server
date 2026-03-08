import { DATETIME, INTEGER } from "src/types";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn ,DeleteDateColumn} from "typeorm"

/**
 * 죄석 테이블
 */
@Entity("TABLE")
export class Table {
    @PrimaryGeneratedColumn({name:'TABLE_ID',type:INTEGER})
    tableId: number;

    @Column({name:'QR',type:INTEGER})
    qr:number

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'UPDATED_AT' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'DELETED_AT', nullable: true })
    deletedAt: Date | null;
}