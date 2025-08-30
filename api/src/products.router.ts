import type { QueryParams } from './types.js';
import express from "express";
import productsFile from "./data/products.json" with { type: "json" };
import { findObjectById,findByName ,orderArray,paginateArray,findObjectAvailable} from "./utils/functions.js";




const router = express.Router();

router.get("/products/all", (req, res) => {
  res.send(productsFile);
});

router.get("/products/:id", (req, res) => {
  const returnObject = findObjectById(productsFile, req.params.id);
  if (returnObject == undefined) {
    res.json({ error: "Producto no encontrado" });
  } else {
    res.json(returnObject);
  }
});


router.get("/products/",(req,res)=>{
    const queryParams : QueryParams = {
      search: req.query.search?.toString() || "",
      sort: req.query.sort?.toString() || "price",
      order: req.query.order?.toString()  || "asc",
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
      available: req.query.available === "true"
    }

    let returnObject = findByName(productsFile, queryParams.search);
    returnObject = findObjectAvailable(returnObject, queryParams.available);

    returnObject = orderArray(returnObject, queryParams.sort, queryParams.order)

    returnObject = paginateArray(returnObject, queryParams.page, queryParams.limit)
    
    res.json(returnObject)

    
})




export default router;
