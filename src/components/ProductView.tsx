import { useCallback, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Product, Pager } from "../types";
import { serializeQueryParams, getPager } from "../utils";
import ProductList from "./Product/ProductList";
import LimitListbox from "./shared/LimitListbox";
import Pagination from "./shared/Pagination";
import SortListbox from "./shared/SortListbox";

type ProductViewProps = {
  products: Product[];
};

const ProductView = ({ products }: ProductViewProps) => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
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
        <SortListbox
          value={searchParams.get("sort") ?? "asc"}
          onChange={handleParams("sort")}
        />
      </div>
      <ProductList products={filtered} />
      {pager.current && pager.current.totalItems > pager.current.pageSize && (
        <Pagination
          disablePrev={page === 1}
          disableNext={page === pager.current?.endPage}
          onPrev={() => setPage((prev) => prev - 1)}
          onNext={() => setPage((prev) => prev + 1)}
        />
      )}
    </div>
  );
};

export default ProductView;
