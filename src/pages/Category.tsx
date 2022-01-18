import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductView from "../components/ProductView";
import { useCategoryProducts } from "../hooks";
import { Options } from "../service/ProductService";
import { serializeQueryParams } from "../utils";

const Category = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const options = useMemo(
    () => serializeQueryParams(searchParams) as Options,
    [searchParams]
  );
  const products = useCategoryProducts(category as string, options);

  return (
    <div className="w-full p-8">
      <ProductView products={products} />
    </div>
  );
};

export default Category;
