import { Product } from "../../types";

type ProductViewProps = Product;

const ProductView = (props: ProductViewProps) => {
  const { image, title, price, description, category } = props;
  return (
    <div className="container lg:w-1/2 m-auto">
      <article className="flex font-sans">
        <div className="flex-auto p-6 max-h-96">
          <div className="">
            <h1 className="capitalize text-gray-500 font-normal text-base mb-2">
              {category}
            </h1>
            <div className="relative text-center h-60 my-8">
              <img
                src={image}
                alt={title}
                width={655}
                height={937}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="capitalize text-gray-700 font-semibold text-xl mb-2">
              {title}
            </div>
            <div className="capitalize text-gray-700 font-normal text-xl">
              $ {price}
            </div>
          </div>
          <div className="flex space-x-4 mt-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold border border-slate-300 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 text-slate-300 border border-slate-200 hover:text-red-500"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <div className="text-gray-600">
            <h1 className="text-gray-700 font-semibold">Descrizione</h1>
            <p className="my-2">{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductView;
