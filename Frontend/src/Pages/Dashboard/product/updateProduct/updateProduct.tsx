import { useParams } from "react-router-dom";
import useSWR from "swr";

// 
import UpdateProductForm from "./updateProductForm"
import { getProductById } from "../../../../API/productApi";

const UpdateProductPage = () => {
  const { id } = useParams();
  const { data: product } = useSWR(`getproduct/${id}`, getProductById)

  return (
    <>
      {
        product &&
        <UpdateProductForm product={product} />
      }
    </>
  )
}

export default UpdateProductPage