"use client";
import React from "react";
import { Product } from "../types/types";

const Card: React.FC<Product> = ( item) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  duration-300 border w-11/12 hover:shadow-2xl  ">
      <div className="w-full0 h-48 sm:h-56 md:h-64 lg:h-72 flex justify-center items-center p-4">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2">${item.price}</p>

        <div className="mt-3">
          {item.isAvailable ? (
            <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              En stock
            </span>
          ) : (
            <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              Sin stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
