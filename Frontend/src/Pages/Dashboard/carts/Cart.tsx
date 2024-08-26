import React, { useEffect } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../../@/components/ui/table'
import { useAppDispatch } from '../../../Hooks/redux'
import { getOrderProducts } from '../../../redux/slice/order-slice';

const Cart = () => {
  const dispatch= useAppDispatch();

  useEffect(()=>{
    dispatch(getOrderProducts())
  },[dispatch])

  return (
    <div>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SN</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Product Price</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Total Order</TableHead>


          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
     
    </Table>
    </div>
  )
}

export default Cart
