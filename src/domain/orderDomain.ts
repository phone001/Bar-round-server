export default class OrderDomain {
    orderId: number;
    tableId: number;
    paymentComplatedAt?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}