export const getDiscountOneFunction =
  (next = (item) => item) =>
  (data = []) => {
    const productRecords = new Map();

    const result = data.reduce((prev, currProduct, index) => {
      let productRecord = productRecords.get(currProduct.id);

      if (productRecord) {
        productRecord.count += 1;
        /**
         * 因為只有兩次，未來三次才需要類似的操作
         *
         * productRecords.set(currProduct.id, {
         *   count: productRecords.count,
         *    lastIndex: index
         *  });
         *
         */
      } else {
        productRecords.set(currProduct.id, { count: 1, lastIndex: index });
      }

      if (productRecord && productRecord.count === 2) {
        productRecords.delete(currProduct.id);

        return [
          ...prev.slice(0, productRecord.lastIndex),
          { ...prev[productRecord.lastIndex], activated: true },
          ...prev.slice(productRecord.lastIndex + 1),
          {
            ...currProduct,
            price: currProduct.price / 2,
            activated: true,
          },
        ];
      }
      return [...prev, currProduct];
    }, []);

    return next(result);
  };
