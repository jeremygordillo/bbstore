export type ProductRating = {
  rate: number;
  count: number;
};

export type SortType = "asc" | "desc";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: ProductRating;
};

export type Pager = {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
};
