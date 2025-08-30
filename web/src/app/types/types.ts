interface SearchParams {
  search: string;
  sort: string;
  order: string;
  available: string;
}


 interface Product {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  category: string;
  image: string;
}
export type {Product,SearchParams}