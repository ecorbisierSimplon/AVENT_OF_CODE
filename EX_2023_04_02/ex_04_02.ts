import * as fs from "fs";
import { addArray } from "../EX_2023_01/fonction";

export function exo(filePath: string): number {
  const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
  const content: string[] = fileContent.split("\n") || [];
  const result: number[] = [];
  const resultTemp: number[] = [];
  resultTemp[0] = 0;
  const numCards: number[] = [];
  let numCard: number = 0;
  numCards[0] = 0;
  for (let line of content) {
    line = line.replaceAll("  ", " ");
    // console.log(line);
    const numbers: string[][] = [];
    const cardLine: string[] = line.trim().split(":");
    numCard += 1;
    result.push(numCard);
    const numLine: string[] = cardLine[1].trim().split("|");
    numbers[0] = numLine[0].trim().split(" ");
    numbers[1] = numLine[1].trim().split(" ");
    const intersection: string[] = numbers[0].filter((val) =>
      numbers[1].includes(val)
    );
    // console.log(intersection);
    // console.log(intersection.length);
    if (
      typeof numCards[numCard] === "undefined" ||
      Number.isNaN(numCards[numCard])
    ) {
      numCards[numCard] = 1;
    } else {
      numCards[numCard] += 1;
    }
    const interTotal: number = intersection.length;
    // console.log(
    //   numCard +
    //     " : numCards[numCard] : " +
    //     numCards[numCard] +
    //     " - length : " +
    //     interTotal
    // );
    resultTemp[numCard] = interTotal;
    if (interTotal >= 1) {
      for (let i = 1; i <= interTotal; i++) {
        for (let j = 1; j <= numCards[numCard]; j++) {
          // console.log("num carte " + (numCard + i) + " - num Tour " + j);
          if (numCard + i <= content.length) {
            if (
              typeof numCards[numCard + i] === "undefined" ||
              Number.isNaN(numCards[numCard + i])
            ) {
              numCards[numCard + i] = 1;
            } else {
              numCards[numCard + i] += 1;
            }
          }
        }
      }
    }
  }
  console.log(resultTemp);
  console.log(numCards);
  console.log(addArray(numCards));

  return 4;
}
