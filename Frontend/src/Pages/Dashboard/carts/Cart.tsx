import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
import { useAppDispatch, useAppSelector } from "../../../Hooks/redux";
import { getOrderProducts } from "../../../redux/slice/order-slice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { orderProducts } = useAppSelector((store) => store.order);

  useEffect(() => {
    dispatch(getOrderProducts());
  }, [dispatch]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">SN</TableHead> */}
            <TableHead>Product Name</TableHead>
            <TableHead>Product Price</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Total Order</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderProducts.map((order) => (
          <TableRow key={order._id}>
            <TableCell className="font-medium">{order.product.productName}</TableCell>
            <TableCell>{order.product.productPrice}</TableCell>
            <TableCell>{Number(order.product.productPrice)*Number(order.totalOrder)}</TableCell>
            <TableCell className="text-right">{order.totalOrder}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Cart;
