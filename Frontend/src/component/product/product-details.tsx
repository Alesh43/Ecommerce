import { useCallback, useEffect, useState } from "react";
import { Iproduct } from "../../interface/product";
import useSWR from "swr";
import { getProductById } from "../../API/productApi";
import { displayImage, errorMessage } from "../../utils/helper";
import RelatedProducts from "./related-products";
import Button from "../reusable/button/button";
import { toast } from "sonner";
import axios from "axios";
import { addProductToCart } from "../../redux/slice/order-slice";
import { useAppDispatch } from "../../Hooks/redux";

interface Props {
  id: string;
}

const ProductDetail = ({ id }: Props) => {
  const {data:product} = useSWR(`getproduct/${id}`,getProductById);
  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(async()=>{
    const product={
      productId: id,
      totalOrder: 1
    }
    
    dispatch(addProductToCart(product))
    toast.message("Added to cart")
 
  },[dispatch,id])
  // const [product, setProduct] = useState<Iproduct>();

  // useEffect(() => {
  //   const productDetail = async () => {
  //     try {
  //       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const product = await res.json();
  //       console.log(product);
  //       setProduct(product);
  //     } catch (error: any) {
  //       console.log(error);
  //     }
  //   };
  //   productDetail();
  // }, [id]);
  return (
    <div>
      <div className="border p-5 space-y-5 max-w-screen-sm shadow-lg rounded-xl mx-auto">
        <div className="flex items-center justify-center">
          <img
            src={displayImage(product?.productImage)}
            alt={product?.productName}
            className="h-52 w-52"
          />
        </div>
        <div className="border-t mt-2">
          <p className="font-bold capitalize">{product?.productCategory?.categoryName}</p>
          <p className="line-clamp-1">{product?.productName}</p>
          <div>
            <span className="font-bold">Rating:</span> {product?.productRating},
            
          </div>
          <p>
            <span className="font-bold">Price:</span> {product?.productPrice}
          </p>
          <p className="line-clamp-2">{product?.productDescription}</p>
        </div>
        <div>
          <Button 
          buttonType="button"
          buttonColor={{primary:true}}
          onClick={handleAddToCart}
          >
            
            Add to Cart
          </Button>
        </div>
      </div>
      {/* <RelatedProducts id={id}/> */}
    </div>
  );
};

export default ProductDetail;
