import { getDiscountTwoFunction } from "./getDiscountTwo.js";

it("Should get empty array if no product", () => {
  const getDiscountTwo = getDiscountTwoFunction();
  const expected = [];

  expect(getDiscountTwo([])).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      id: '100',
      price: 100,
      activated: false,
    }
  ]
When:
  Calculate Price
Then:
  [
    { 
      id: '100',
      price: 100 ,
      activated: false,
    }
  ]
`, () => {
  const getDiscountTwo = getDiscountTwoFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
  ];

  expect(getDiscountTwo(example)).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    },
  ]
When:
  Calculate Price
Then:
  [
    { 
      id: '100',
      price: 100 ,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    }
  ]
`, () => {
  const getDiscountTwo = getDiscountTwoFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: false,
    },
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: false,
    },
  ];

  expect(getDiscountTwo(example)).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: true,
    },
  ]
When:
  Calculate Price
Then:
  [
    { 
      id: '100',
      price: 100 ,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: true,
    },
  ]
`, () => {
  const getDiscountTwo = getDiscountTwoFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: true,
    },
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: true,
    },
  ];

  expect(getDiscountTwo(example)).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    },
  ]
When:
  Calculate Price
Then:
  [
    { 
      id: '100',
      price: 95 ,
      activated: true,
    },
    {
      id: '100',
      price: 95,
      activated: true,
    }
    {
      id: '100',
      price: 95,
      activated: true,
    },
  ]
`, () => {
  const getDiscountTwo = getDiscountTwoFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "100",
      price: 100,
      activated: false,
    },
  ];

  const expected = [
    {
      id: "100",
      price: 95,
      activated: true,
    },
    {
      id: "100",
      price: 95,
      activated: true,
    },
    {
      id: "100",
      price: 95,
      activated: true,
    },
  ];

  expect(getDiscountTwo(example)).toStrictEqual(expected);
});

it(`
Given:
  [
    {
      id: '100',
      price: 100,
      activated: false,
    },
    {
      id: '200',
      price: 200,
      activated: false,
    },
    {
      id: '300',
      price: 300,
      activated: false,
    },
  ]
When:
  Calculate Price
Then:
  [
    { 
      id: '100',
      price: 95 ,
      activated: true,
    },
    {
      id: '200',
      price: 195,
      activated: true,
    }
    {
      id: '300',
      price:295,
      activated: true,
    },
  ]
`, () => {
  const getDiscountTwo = getDiscountTwoFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false,
    },
    {
      id: "200",
      price: 200,
      activated: false,
    },
    {
      id: "300",
      price: 300,
      activated: false,
    },
  ];

  const expected = [
    {
      id: "100",
      price: 95,
      activated: true,
    },
    {
      id: "200",
      price: 195,
      activated: true,
    },
    {
      id: "300",
      price: 295,
      activated: true,
    },
  ];

  expect(getDiscountTwo(example)).toStrictEqual(expected);
});
