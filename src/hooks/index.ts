import { useEffect, useState } from "react";
import ProductService, { Options } from "../service/ProductService";
import { Product } from "../types";

export function useProducts(params: Options) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // We handle pagination on client side so remove limit search param
    if (params?.limit) delete params.limit;

    ProductService.getAllProducts(params).then((res) => {
      if (res) setProducts(res);
    });
  }, [params]);

  return products;
}

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    ProductService.getCategories().then((res) => {
      if (res) setCategories(res);
    });
  }, []);

  return categories;
}

export function useCategoryProducts(category: string, options: Options) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    // We handle pagination on client side so remove limit search param
    if (options?.limit) delete options.limit;
    if (category)
      ProductService.getCategoryProducts(category, options).then((res) =>
        setProducts(res)
      );
  }, [category, options]);
  return products;
}
