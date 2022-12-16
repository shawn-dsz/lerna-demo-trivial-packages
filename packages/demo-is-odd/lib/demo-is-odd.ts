import { isEven } from "demo-is-even";

export function isOdd(n: number) {
  console.log('updated isOdd')
  return !isEven(n);
}
