import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryList from "../components/Category/CategoryList";
import ProductView from "../components/ProductView";
import { useCategories, useProducts } from "../hooks";
import { Options } from "../service/ProductService";
import { serializeQueryParams } from "../utils";

function Home() {
  const [searchParams] = useSearchParams();
  const options = useMemo(
    () => serializeQueryParams(searchParams) as Options,
    [searchParams]
  );
  const products = useProducts(options);
  const categories = useCategories();

  return (
    <div className="w-full p-8">
      {categories && <CategoryList categories={categories} />}
      <ProductView products={products} />
    </div>
  );
}

export default Home;
