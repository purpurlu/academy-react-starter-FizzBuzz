// export function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

function isFizz(num: number): boolean {
  if (num % 3 === 0) {
    return true;
  }
  return false;
}
function isBuzz(num: number): boolean {
  if (num % 5 === 0) {
    return true;
  }
  return false;
}
function isFizzBuzz(num: number): boolean {
  if (isFizz(num) && isBuzz(num)) {
    return true;
  }
  return false;
}

export function asFizzBuzz(num: number): string | number {
  if (isFizzBuzz(num)) {
    return "FizzBuzz";
  } else if (isBuzz(num)) {
    return "Buzz";
  } else if (isFizz(num)) {
    return "Fizz";
  }
  return num;
}
