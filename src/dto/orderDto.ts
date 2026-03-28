import OrderItemDto from "./orderItemDto";

export default class OrderDto {
    tableId: number;
    paymentComplatedAt?: string;
    orderItems: OrderItemDto[];
}