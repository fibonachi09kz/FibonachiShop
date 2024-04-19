import { PRODUCTS } from "../data/placeholder";

export const getProductById = (id) => {
  const existingProductIndex = PRODUCTS.findIndex((item) => item.id === id);
  if (existingProductIndex !== -1) {
    return PRODUCTS[existingProductIndex];
  } else {
    return null;
  }
};
