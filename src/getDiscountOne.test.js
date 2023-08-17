import { getDiscountOneFunction } from "./getDiscountOne.js";

it("Should get empty array if no product", () => {
  const getDiscountOne = getDiscountOneFunction();
  const expected = [];

  expect(getDiscountOne([])).toStrictEqual(expected);
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
  const getDiscountOne = getDiscountOneFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false
    }
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: false
    }
  ];

  expect(getDiscountOne(example)).toStrictEqual(expected);
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
  ]
When:
  Calculate Price
Then:
  [
    { 
      id: '100',
      price: 100,
      activated: true,
    },
    { 
      id: '200',
      price: 200,
      activated: true,
    }
  ]
`, () => {
  const getDiscountOne = getDiscountOneFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false
    },
    {
      id: "200",
      price: 200,
      activated: false
    }
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: false
    },
    {
      id: "200",
      price: 200,
      activated: false
    }
  ];

  expect(getDiscountOne(example)).toStrictEqual(expected);
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
      price: 100,
      activated: true,
    },
    { 
      id: '100',
      price: 50,
      activated: true,
    }
  ]
`, () => {
  const getDiscountOne = getDiscountOneFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false
    },
    {
      id: "100",
      price: 100,
      activated: false
    }
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: true
    },
    {
      id: "100",
      price: 50,
      activated: true
    }
  ];

  expect(getDiscountOne(example)).toStrictEqual(expected);
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
      price: 100,
      activated: true,
    },
    { 
      id: '100',
      price: 50,
      activated: true,
    },
    {
      id: '100',
      price: 100,
      activated: false,
    },
  ]
`, () => {
  const getDiscountOne = getDiscountOneFunction();
  const example = [
    {
      id: "100",
      price: 100,
      activated: false
    },
    {
      id: "100",
      price: 100,
      activated: false
    },
    {
      id: "100",
      price: 100,
      activated: false
    }
  ];

  const expected = [
    {
      id: "100",
      price: 100,
      activated: true
    },
    {
      id: "100",
      price: 50,
      activated: true
    },
    {
      id: "100",
      price: 100,
      activated: false
    }
  ];

  expect(getDiscountOne(example)).toStrictEqual(expected);
});
