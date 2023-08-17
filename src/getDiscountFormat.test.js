import { getDiscountFormatFunction } from "./getDiscountFormat..js";

it("Should get empty array if no product", () => {
  const getDiscountPrice = getDiscountFormatFunction();
  const expected = [];

  expect(getDiscountPrice([])).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      price: 100
    }
  ]
When:
  format data
Then:
  [
    { 
      activated: false,
      price: 100 
    }
  ]
`, () => {
  const getDiscountPrice = getDiscountFormatFunction();
  const example = [{ price: 100 }];

  const expected = [{ activated: false, price: 100 }];

  expect(getDiscountPrice(example)).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      price: 100
    },
    {
      price: 200
    }
  ]
When:
  format data
Then:
  [
    { 
      activated: false,
      price: 100 
    },
    {
      activated: false,
      price: 200
    }
  ]
`, () => {
  const getDiscountPrice = getDiscountFormatFunction();
  const example = [{ price: 100 }, { price: 200 }];

  const expected = [
    { activated: false, price: 100 },
    { activated: false, price: 200 },
  ];

  expect(getDiscountPrice(example)).toStrictEqual(expected);
});
