import { Product, SortType } from "../types";

export type Options = {
  limit?: string;
  sort: SortType;
};

class ProductService {
  private baseURL: string;

  constructor() {
    this.baseURL = "https://fakestoreapi.com/products";
  }

  private getQueryParams(options?: Options): URLSearchParams {
    const opts: Options =
      options && Object.keys(options).length > 0 ? options : { sort: "asc" };
    const query = new URLSearchParams(opts);

    // To handle limit server side
    // if (opts.limit && Number.isNaN(parseInt(`${opts.limit}`, 10)))
    //   query.delete("limit");
    return query;
  }

  getCategories(): Promise<string[]> {
    return fetch(`${this.baseURL}/categories`)
      .then((res) => res.json())
      .catch((error) => {
        console.log("Looks like there was a problem: ", error);
      });
  }

  getAllProducts(options?: Options): Promise<Product[]> {
    return fetch(`${this.baseURL}?${this.getQueryParams(options)}`)
      .then((res) => res.json())
      .catch((error) => {
        console.log("Looks like there was a problem: ", error);
      });
  }

  getCategoryProducts(category: string, options?: Options): Promise<Product[]> {
    return fetch(
      `${this.baseURL}/category/${encodeURIComponent(
        category
      )}?${this.getQueryParams(options)}`
    )
      .then<Product[], any>((res) => res.json())
      .catch((error) => {
        console.log("Looks like there was a problem: ", error);
      });
  }

  getProduct(id: string): Promise<Product> {
    return fetch(`${this.baseURL}/${id}`)
      .then<Product, any>((res) => res.json())
      .catch((error) => {
        console.log("Looks like there was a problem: ", error);
      });
  }
}

export default new ProductService();
