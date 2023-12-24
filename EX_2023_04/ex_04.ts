import * as fs from "fs";
import { addArray } from "../EX_2023_01/fonction";

export function exo(filePath: string): number {
  const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
  const content: string[] = fileContent.split("\n") || [];
  const result: number[] = [];

  for (let line of content) {
    line = line.replaceAll("  ", " ");
    // console.log(line);
    const cardLine: string[] = line.trim().split(":");
    const numLine: string[] = cardLine[1].trim().split("|");
    const numbers: string[][] = [];
    numbers[0] = numLine[0].trim().split(" ");
    numbers[1] = numLine[1].trim().split(" ");
    const intersection: string[] = numbers[0].filter((val) =>
      numbers[1].includes(val)
    );
    // console.log(numbers);
    if (intersection.length >= 1)
      result.push(termeGeometrique(1, 2, intersection.length));
    // console.log(intersection);
  }

  console.log(result);
  console.log(addArray(result));

  return 4;
}

function termeGeometrique(a1: number, r: number, n: number): number {
  if (n < 1) {
    throw new Error("L'indice n doit être un entier positif.");
  }

  return a1 * Math.pow(r, n - 1);
}
