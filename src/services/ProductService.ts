import type { Product,ProductResponse } from "../type/Product";


export async function loadProductListService():Promise<ProductResponse>{
  const APIURL = "https://dummyjson.com/products";
  const response = await fetch(APIURL);

  if(!response.ok){
    throw new Error("Unable to fetch the data from the service");
  }
  return response.json();
}