import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductList from "../components/Product/ProductList";
import LimitListbox from "../components/shared/LimitListbox";
import SortListbox from "../components/shared/SortListbox";
import ProductService, { Options } from "../service/ProductService";
import { Product, Pager } from "../types";
import { serializeQueryParams, getPager } from "../utils";

const Category = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const pager = useRef<Pager>();

  const handleParams = useCallback(
    (key: string) => (param: string) => {
      const qs = serializeQueryParams(searchParams);
      if (
        key === "limit" &&
        pager.current &&
        pager.current.totalPages * parseInt(param, 10) >
          pager.current.totalItems
      )
        setPage(1);
      setSearchParams({ ...qs, [key]: param });
    },
    [searchParams, setSearchParams]
  );

  useEffect(() => {
    const qs = serializeQueryParams(searchParams);
    // We handle pagination on client side so remove limit search param
    if (qs?.limit) delete qs.limit;
    if (category)
      ProductService.getCategoryProducts(category, qs as Options).then((res) =>
        setProducts(res)
      );
  }, [category, searchParams]);

  const filtered = useMemo(() => {
    const qs = serializeQueryParams(searchParams);
    if (products.length === 0) return products;
    const pageSize = parseInt(qs?.limit, 10) || 5;
    const newPager = getPager(products.length, pageSize, page);
    pager.current = newPager;
    return products.slice(newPager.startIndex, newPager.endIndex + 1);
  }, [searchParams, products, page]);

  return (
    <div className="w-full p-8">
      <div className="flex flex-row-reverse my-4">
        <LimitListbox
          value={pager.current?.pageSize}
          onChange={handleParams("limit")}
        />
        <SortListbox onChange={handleParams("sort")} />
      </div>
      <ProductList products={filtered} />
      {pager.current && pager.current.totalItems > pager.current.pageSize && (
        <div className="flex items-center justify-center pt-8">
          <button
            disabled={page === 1}
            className="p-4 m-1 border border-sky-300 font-semibold hover:bg-sky-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-white"
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <button
            disabled={page === pager.current?.endPage}
            className="p-4 m-1 border border-sky-300 font-semibold hover:bg-sky-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-white"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
