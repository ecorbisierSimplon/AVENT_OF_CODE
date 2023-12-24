export function addArray(val: number[]): number {
  let add = function (arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  };

  return add(val);
}

export function multiArray(val: number[]): number {
  let add = function (arr: number[]) {
    return arr.reduce((a, b) => a * b, 1);
  };

  return add(val);
}
