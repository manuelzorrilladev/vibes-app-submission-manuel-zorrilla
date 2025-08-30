"use client";
import React from "react";
import { Product } from "../types/types";
import Card from "./card";
import ZoomCard from "./zoomCard";
interface SearchListProps {
  data: Product[] | null;
}

const SearchList: React.FC<SearchListProps> = ({ data }) => {
  const listProducts = data?.map((product: Product) => (
    <Card
      key={product.id}
      id={product.id}
      category={product.category}
      image={product.image}
      name={product.name}
      price={product.price}
      isAvailable={product.isAvailable}
    />
  ));
  return (
    <section className="flex justify-center mt-10 relative">
     

      {data?.length == 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {listProducts}
        </div>
      )}
    </section>
  );
};
export default SearchList;
