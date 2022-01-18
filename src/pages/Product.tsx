import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/Product/ProductDetails";
import ProductService from "../service/ProductService";
import { Product } from "../types";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      ProductService.getProduct(id)
        .then((res) => setProduct(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  return product ? <ProductDetails {...product} /> : null;
};

export default ProductPage;
