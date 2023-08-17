export const getDiscountPriceFunction = (next = (item) => item) => (
  data = []
) => {
  return next(data.map((item) => ({ ...item, activated: false })));
};
