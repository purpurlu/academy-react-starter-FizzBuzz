// import { greet } from "./greet";

// test("greet returns a string, greeting the passed name", () => {
//   expect(greet("World")).toBe("Hello, World!");
//   expect(greet("Richard")).toBe("Hello, Richard!");
//   expect(greet("Academy Scholars")).toBe("Hello, Academy Scholars!");
// });

import { asFizzBuzz } from "./greet";
test("asFizzBuzz returns an array of numbers with strings", () => {
  expect(asFizzBuzz(1)).toBe(1);
  expect(asFizzBuzz(15)).toBe("FizzBuzz");
  expect(asFizzBuzz(105)).toBe("FizzBuzz");
});
