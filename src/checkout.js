import database from "./database.json";
import { getDiscountFormatFunction } from "./getDiscountFormat.js";
import { getDiscountOneFunction } from "./getDiscountOne.js";
import { getDiscountTwoFunction } from "./getDiscountTwo.js";

export const checkout = (productIDs = [], products = database.products) => {
  const getDiscountPrice = [
    getDiscountFormatFunction,
    getDiscountOneFunction,
    getDiscountTwoFunction,
  ].reduceRight(
    (prev, cb) => cb(prev),
    (cb) => cb
  );

  let hasNotFound = false;
  const product = productIDs.map((id) => {
    if (!hasNotFound) {
      hasNotFound = products[id] === undefined;
    }
    return { ...products[id], id };
  });

  if (hasNotFound) {
    return "has not found product";
  }

  const price = getDiscountPrice(product).reduce(
    (acc, currProduct) => acc + currProduct.price,
    0
  );

  return price;
};
