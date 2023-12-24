import * as fs from "fs";
import { addArray, multiArray } from "../EX_2023_01/fonction";

function isNumberBetween(value: number, lower: number, upper: number): boolean {
  return lower <= value && value <= upper;
}

export function exo(filePath: string): number {
  const result: number[] = [];
  const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
  const content: string[] = fileContent.split("\n") || [];
  const numCar: number = content[0].length;
  const linePoint: string = ".".repeat(numCar);
  content.unshift(linePoint);
  content.push(linePoint);

  console.log(content);

  const line: string[] = [];
  let i = 0;
  for (let num = 0; num <= content.length - 1; num++) {
    // console.log(num);
    if (num < 2) {
      line[num + 1] = content[num];
      continue;
    }
    line[0] = line[1];
    line[1] = line[2];
    line[2] = content[num];
    // console.log(line);
    i++;
    console.log(result);
    // console.log(i);
    result.push(testLine(line));
    console.log(result);
  }

  console.log(addArray(result));
  return 4;
}

function testLine(line: string[]): number {
  let result: number[] = [];
  let resultTemp: number[] = [];
  const regex = /\d+/g;
  const regexStart = /[*]/g;
  let match;
  let match1;
  let find: number[] = [];

  while ((match = regexStart.exec(line[1])) !== null) {
    let test: number = 0;
    find[0] = Number(match.index);

    console.log(match);

    test = 0;
    regex.lastIndex = 0;
    while ((match1 = regex.exec(line[0])) !== null) {
      // console.log(match1);
      find[1] = Number(match1[0]);
      find[2] = match1.index;
      find[3] = regex.lastIndex - 1;
      if (
        isNumberBetween(find[2], find[0] - 1, find[0] + 1) ||
        isNumberBetween(find[3], find[0] - 1, find[0] + 1)
      ) {
        // console.log(find);
        resultTemp.push(find[1]);
        test += 1;
        // break;
      }
    }

    regex.lastIndex = 0;
    while ((match1 = regex.exec(line[2])) !== null) {
      // console.log(match1);
      find[1] = Number(match1[0]);
      find[2] = match1.index;
      find[3] = regex.lastIndex - 1;
      if (
        isNumberBetween(find[2], find[0] - 1, find[0] + 1) ||
        isNumberBetween(find[3], find[0] - 1, find[0] + 1)
      ) {
        // console.log(find);
        resultTemp.push(find[1]);
        test += 1;
        // break;
      }
    }

    regex.lastIndex = 0;
    while ((match1 = regex.exec(line[1])) !== null) {
      console.log(match1);
      find[1] = Number(match1[0]);
      find[2] = match1.index;
      find[3] = regex.lastIndex - 1;
      if (find[2] == find[0] + 1 || find[3] == find[0] - 1) {
        console.log(find);
        resultTemp.push(find[1]);
        test += 1;
        // break;
      }
    }

    console.log("resultTemp");
    console.log(resultTemp);

    if (test > 1) result.push(multiArray(resultTemp));
    find = [];
    resultTemp = [];
  }
  // console.log(result);
  return addArray(result);
}
