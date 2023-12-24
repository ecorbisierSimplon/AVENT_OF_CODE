import * as fs from "fs";

export function exo(filePath: string): number {
  try {
    const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
    const result: number[] = [];

    for (const line of fileContent.split("\n")) {
      const numbers: number[] = line.match(/\d+/g)?.map(Number) || [];

      if (numbers.length > 0) {
        result.push(numbers[0] + numbers[numbers.length - 1]);
      }
    }

    let add = function (arr: number[]) {
      return arr.reduce((a, b) => a + b, 0);
    };

    let sum = add(result);
    console.log(sum);

    return 4;
  } catch (error) {
    throw error;
  }
}

export function nextAfter(content: string): number {
  const result: number[] = [];
  try {
    for (const line of content.split("\n")) {
      const numbers = line.match(/[1-9]/g) || [];
      // console.log(numbers);
      if (numbers.length > 0) {
        result.push(
          Number(numbers[0]) * 10 + Number(numbers[numbers.length - 1])
        );
      }
    }

    console.log(result);

    let add = function (arr: number[]) {
      return arr.reduce((a, b) => a + b, 0);
    };

    let sum = add(result);

    return sum;
  } catch (error) {
    throw error;
  }
}
