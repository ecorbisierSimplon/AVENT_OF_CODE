import * as fs from "fs";
import { addArray } from "../EX_2023_01/fonction";

export function exo(filePath: string): number {
  const result: number[] = [];
  const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
  const content: string[] = fileContent.split("\n") || [];
  const numCar: number = content[0].length;
  const linePoint: string = ".".repeat(numCar);
  content.unshift(linePoint);
  content.push(linePoint);

  const line: string[] = [];

  for (let num = 0; num <= content.length - 1; num++) {
    // console.log(num);
    if (num < 2) {
      line[num + 1] = content[num];
      continue;
    }

    // descructuration de line pour décaller chaque ligne
    [line[0], line[1], line[2]] = [line[1], line[2], content[num]];
    // console.log(line);

    Array.prototype.push.apply(result, testLine(line));
  }

  console.log(addArray(result));
  return 4;
}

function testLine(line: string[]): number[] {
  let testNumber: string = "";
  let result: number[] = [];
  const regex = /\d+/g;
  const regexCar = /[^A-Za-z0-9\s.]/g;
  let match;
  let find: number[] = [];
  while ((match = regex.exec(line[1])) !== null) {
    testNumber = "";
    find[0] = Number(match[0]);
    find[1] = match.index - 1;
    find[2] = regex.lastIndex;
    // console.log(find);
    testNumber += line[1].substring(find[1], find[1] + 1);
    testNumber += line[1].substring(find[2], find[2] + 1);
    testNumber += line[0].substring(find[1], find[2] + 1);
    testNumber += line[2].substring(find[1], find[2] + 1);
    // console.log(testNumber);
    const caracteresSpeciaux = testNumber.match(regexCar);
    if (caracteresSpeciaux) {
      result.push(find[0]);
    }
  }
  return result;
}
