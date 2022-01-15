import { Product } from "../../types";
import ProductCard from "./ProductCard";

type ProductListProps = { products: Product[] };

const ProductList = (props: ProductListProps) => {
  const { products } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
