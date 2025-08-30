"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import SearchList from "./components/searchList";
import axiosRoutes from "./api/axiosRoutes";
import { SearchParams, Product } from "./types/types";
const Home: React.FC = () => {
  const [fromChildFormInputs, setFromChildFormInputs] = useState<SearchParams>({
    search: "",
    sort: "price",
    order: "asc",
    available: "all",
  });

  const [productData, setProductData] = useState<Product[] | null>(null);
  const [validator,setValidator]=useState(false)
  // Estados para manejar el estado de la API.
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    console.log(validator);
    if(validator === false){
      axiosRoutes
        .getAllProducts()
        .then((res) => {
          setIsLoading(false);
          setProductData(res.data);
        })
    }else{

      axiosRoutes
        .getFilteredObjects(fromChildFormInputs)
        .then((res) => {
          setProductData(res.data);
        })
        .catch((e) => {
          console.error("Error fetching products:", e);
          setError(
            "No se pudieron cargar los productos. Inténtalo de nuevo más tarde."
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [fromChildFormInputs]);



  const handleSearch = (formData: SearchParams) => {
    setValidator(true);
    setFromChildFormInputs(formData);
  };
  return (
    <>
      <SearchBar onSendData={handleSearch} />
    {validator}
       {isLoading ? (
        <p className="text-center my-8 text-gray-600">Cargando productos...</p>
      ) : error ? (
        <p className="text-center my-8 text-red-500">{error}</p>
      ) : (
        <SearchList data={productData} />
      )}
    </>
  );
};
export default Home;
