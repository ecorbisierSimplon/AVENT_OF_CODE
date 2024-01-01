import * as fs from "fs";
import {
  isNumberBetween,
  parseNumberToObject,
  parseTextToObject,
  parseTextToTitle,
  stringNumberToObject,
} from "../EX_2023_01/fonction";

export function exo(filePath: string): number {
  const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });

  // let result: number = 0;
  const content = stringNumberToObject(fileContent);

  // Exemple d'utilisation avec les données fournies
  const times = content[0];
  const distances = content[1];
  console.log(times);
  console.log(distances);
  const result = calculateWaysToBeatRecord(times, distances);
  console.log(result); // Affiche 288

  return 4;
}

function calculateWaysToBeatRecord(
  times: number[],
  distances: number[]
): number {
  const numberOfCourses = times.length;
  let totalWaysToBeatRecord = 1;

  for (let i = 0; i < numberOfCourses; i++) {
    const time = times[i];
    const distance = distances[i];
    let waysToBeatRecord = 0;
    // console.log("time : " + time + " // distance : " + distance);

    for (let j = i; j <= time; j++) {
      if ((time - j) * j > distance) {
        waysToBeatRecord++;
      }
    }
    // console.log(waysToBeatRecord);
    totalWaysToBeatRecord *= waysToBeatRecord;
  }

  return totalWaysToBeatRecord;
}
