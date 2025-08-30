"use client";

import React, { useState, ChangeEvent } from "react";
import { SearchParams } from "../types/types";
interface ChildProps {
  onSendData: (formData: SearchParams) => void;
}

const SearchBar: React.FC<ChildProps> = ({ onSendData }) => {
  const [childFormInputs, setChildFormInputs] = useState({
    search: "",
    sort: "price",
    order: "asc",
    available: "all"
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setChildFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(childFormInputs);
    onSendData(childFormInputs);
  }

  return (
    <form
      method="post"
      action="/"
      className="bg-white shadow-lg p-4"
      onSubmit={handleSubmit}
    >
      <div className="container mx-auto  flex flex-col md:flex-row items-center gap-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            value={childFormInputs.search}
            onChange={handleChange}
            className="w-full px-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
          <div className="w-full flex justify-between space-x-4">
            <div className="flex-1">
              <label
                htmlFor="sort"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Ordenar por:
              </label>
              <select
                name="sort"
                id="sort"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={childFormInputs.sort}
                onChange={handleChange}
              >
                <option value="price">Precio</option>
                <option value="name">Nombre</option>
              </select>
            </div>

            <div className="flex-1">
              <label
                htmlFor="order"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Orden:
              </label>
              <select
                name="order"
                id="order"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={childFormInputs.order}
                onChange={handleChange}
              >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="availability"
                className="block text-gray-700 text-sm font-semibold mb-1"
              >
                Disponibilidad:
              </label>
              <select
                name="available"
                id="available"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={childFormInputs.available}
                onChange={handleChange}
              >
                <option value="all">Todos</option>
                <option value="true">Disponible</option>
                <option value="false">No disponible</option>
              </select>
            </div>
          </div>

          <button className="bg-blue-600 text-white font-semibold py-4 px-2 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300 w-full md:w-1/2 mt-4 md:mt-0">
            Aplicar Filtros
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
