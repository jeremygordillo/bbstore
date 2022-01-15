import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../components/Product/ProductView";
import ProductService from "../service/ProductService";
import { Product } from "../types";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (id) ProductService.getProduct(id).then((res) => setProduct(res));
  }, [id]);

  return product ? <ProductView {...product} /> : null;
};

export default ProductPage;
