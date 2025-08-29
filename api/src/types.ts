export interface Product {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  category: string;
  image: string;
}

export interface QueryParams {
  search: string;
  sort: string;
  order: string;
  page: number;
  limit: number;
  available: true | false;
}

// export type Products = Product[];
