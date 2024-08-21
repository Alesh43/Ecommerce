import useSWR from 'swr'
import React from 'react'
import { getProducts } from '../../../API/productApi'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from  "../../../@/components/ui/table"
import Products from '../../../component/product/products'
import { displayImage } from '../../../utils/helper'
import { Link } from 'react-router-dom'
import Button from '../../../component/reusable/button/button'

const GetProduct = () => {
  const {data:products}= useSWR('viewproduct', getProducts)


  return (
    <div>
      <div className='my-6 flex justify-between items-center pb-4 px-4 border-b '>
        <h6 className="text-2xl font-bold">All Products</h6>
        <Link to={"/dashboard/addProduct"}>
          <Button
            buttonType={'button'}
            buttonColor={{
              primary: true,
            }}>
            Add Product
          </Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SN</TableHead>
            <TableHead>Product name</TableHead>
            <TableHead>Product image</TableHead>
            <TableHead>Product category</TableHead>
            <TableHead>Product price</TableHead>
            <TableHead>Total products</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product, idx) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell className="font-medium w-[400px]">
                <img
                  src={displayImage(product.productImage)}
                  alt={product.productName}
                  className='h-20 w-20'
                />
              </TableCell>
              <TableCell>{product.productCategory.categoryName}</TableCell>
              <TableCell className="">{product.productPrice}</TableCell>
              <TableCell className="">{product.totalProduct}</TableCell>
              <TableCell className="">
                <div className='flex items-center gap-2'>
                  <Link to={`/dashboard/update-product/${product._id}`}>
                    <Button
                      buttonType={'button'}
                      buttonColor={{
                        primary: true,
                      }}>
                      Update
                    </Button>
                  </Link>
                  {/* <DeleteModal /> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default GetProduct