import * as fs from "fs";
import { string } from "yargs";
import { nextAfter } from "../EX_2023_01/ex_01";

export function exo(filePath: string): number {
  try {
    const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
    let content: string = "";
    const result: number[] = [];
    const array: string[] = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    const arrayObj: Record<string, number> = {
      two: 2,
      one: 1,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    };

    let test: boolean = false;
    let a: string = "";
    let b: string = "";
    for (let line of fileContent.split("\n")) {
      for (let i = 0; i < line.length + 1; i++) {
        // console.log(line.slice(0, i));
        for (let num of array) {
          if (line.slice(0, i).indexOf(num) > -1) {
            a = num;
            let b = line.slice(i);
            // console.log(a + b);
            a = a.replace(num, arrayObj[num].toString());
            test = true;
            break;
          }
          if (test) break;
        }
        if (test) break;
      }
      test = false;
      // console.log("first : " + line);
      for (let i = line.length + 1; i >= 0; i--) {
        for (let num of array) {
          if (line.slice(i, line.length + 1).indexOf(num) > -1) {
            b = num;
            // console.log(a + b);
            b = b.replace(num, arrayObj[num].toString());
            test = true;
            break;
            break;
          }
          if (test) break;
        }
        if (test) break;
      }
      test = false;
      console.log("two : " + line);
      content += a + b + "\n";
    }

    console.log(content);

    let sum = nextAfter(content);

    console.log(sum);

    return 4;
  } catch (error) {
    throw error;
  }
}
