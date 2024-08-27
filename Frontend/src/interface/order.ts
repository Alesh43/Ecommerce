import { Iproduct } from "./product";

export interface IOrder{
    _id: string
    product:Iproduct
    totalOrder:number
    createdAt: string
    updatedAt: number

}