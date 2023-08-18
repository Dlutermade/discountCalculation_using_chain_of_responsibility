import { checkout } from "./checkout.js";

it("Should get 0 if nothing is purchased", () => {
  expect(checkout([])).toBe(0);
});

const mockProducts = {
  100: { price: 100 },
  200: { price: 200 },
  300: { price: 300 },
  400: { price: 400 },
  500: { price: 500 },
  600: { price: 600 },
};

it(`
Given:
  No match discount event 
    ["100", "200"]
When:
  Calculate price
Then:
  100 + 200
`, () => {
  const example = ["100", "200"];

  const expected = 100 + 200;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Only match discount event 1 
    ["100", "200", "300"]
When:
  Calculate price
Then:
  95 + 195 + 295 
`, () => {
  const example = ["100", "200", "300"];

  const expected = 95 + 195 + 295;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Only match discount event 2
    ["100", "200", "200"]
When:
  Calculate price
Then:
  100 + 200 + 100
`, () => {
  const example = ["100", "200", "200"];

  const expected = 100 + 200 + 100;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Only match discount event 2, and the events are not continuous
    ["300", "200", "300"]
When:
  Calculate price
Then:
  300 + 200 + (300 * 0.5)
`, () => {
  const example = ["300", "200", "300"];

  const expected = 300 + 200 + 300 * 0.5;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Only match discount event 2 twice, and the events are not continuous
    ["300", "200", "100", "300", "100"]
When:
  Calculate price
Then:
  300 + 200 + 100 + (300 * 0.5) + (100 * 0.5)
`, () => {
  const example = ["300", "200", "100", "300", "100"];

  const expected = 300 + 200 + 100 + 300 * 0.5 + 100 * 0.5;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Match discount event 1 and discount event 2
    ["100", "200", "300", "300", "400"]
When:
  Calculate price
Then:
  95 + 195 + 300 + (300 * 0.5) + 395
`, () => {
  const example = ["100", "200", "300", "300", "400"];

  const expected = 95 + 195 + 300 + 300 * 0.5 + 395;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Match discount event 1 and discount event 2, and the events are not continuous
    ["100", "200", "300", "400", "300"]
When:
  Calculate price
Then:
  95 + 195 + 300 + 395 + (300 * 0.5)
`, () => {
  const example = ["100", "200", "300", "400", "300"];

  const expected = 95 + 195 + 300 + 395 + 300 * 0.5;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Match discount event 1 twice and discount event 2, and the events are not continuous
    ["100", "200", "300", "400", "300", "500", "500"]
When:
  Calculate price
Then:
  95 + 195 + 300 + 395 + (300 * 0.5) + 500 + (500 * 0.5)
`, () => {
  const example = ["100", "200", "300", "400", "300", "500", "500"];

  const expected = 95 + 195 + 300 + 395 + 300 * 0.5 + 500 + 500 * 0.5;
  expect(checkout(example, mockProducts)).toBe(expected);
});

it(`
Given:
  Match discount event 1 twice and discount event 2, and the events are not continuous, and an additional unduplicated item
    ["100", "200", "300", "400", "300", "500", "500", "600"]
When:
  Calculate price
Then:
  95 + 195 + 300 + 395 + (300 * 0.5) + 500 + (500 * 0.5) + 595
`, () => {
  const example = ["100", "200", "300", "400", "300", "500", "500", "600"];

  const expected = 95 + 195 + 300 + 395 + 300 * 0.5 + 500 + 500 * 0.5 + 595;
  expect(checkout(example, mockProducts)).toBe(expected);
});
