export const getDiscountTwoFunction = (next = (item) => item) => (
  data = []
) => {
  const notDiscountCount = data.filter((item) => !item.activated).length;

  let result = data;
  if (notDiscountCount >= 3) {
    result = result.map((product) =>
      !product.activated
        ? {
            ...product,
            price: product.price - 5,
            activated: true
          }
        : product
    );
  }

  return next(result);
};
