import { Product } from "../../types";

type ProductCardProps = Product;

const ProductCard = ({
  id,
  image,
  category,
  description,
  price,
  title,
}: ProductCardProps) => {
  return (
    <a href={`/category/${category}/product/${id}`} className="col-span-1">
      <article>
        <div className="mb-2 p-10 shadow-lg bg-white rounded-xl h-60">
          <img
            src={image}
            alt={description}
            width={655}
            height={937}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col p-4">
          <div className="h-12 overflow-hidden mb-2">
            <p>{title}</p>
          </div>
          <div>
            <p className="font-semibold text-lg">$ {price}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProductCard;
