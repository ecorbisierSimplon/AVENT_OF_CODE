import * as fs from "fs";
import {
  isNumberBetween,
  parseTextToObject,
  parseTextToTitle,
} from "../EX_2023_01/fonction";

export function exo(filePath: string): number {
  const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
  const title: string[] = parseTextToTitle(fileContent);
  const content: Record<string, number[][]> = parseTextToObject(fileContent);
  let result: number = -1;
  const seeds: number[] = content[title[0]][0];
  const seedsTotal: number[] = [];

  let soil: number = 0;
  let fertiliz: number = 0;
  let water: number = 0;
  let ligth: number = 0;
  let temperature: number = 0;
  let humidity: number = 0;
  let location: number = 0;

  // console.log(seeds);

  for (let i = 0; i <= seeds.length - 1; i += 2) {
    for (let j = 0; j <= seeds[i + 1] - 1; j++) {
      soil = convertion(seeds[i] + j, content[title[1]]);
      fertiliz = convertion(soil, content[title[2]]);
      water = convertion(fertiliz, content[title[3]]);
      ligth = convertion(water, content[title[4]]);
      temperature = convertion(ligth, content[title[5]]);
      humidity = convertion(temperature, content[title[6]]);
      location = convertion(humidity, content[title[7]]);

      if (result < 0 || result > location) {
        result = location;
      }

      // console.log(location);
      // console.log("--------------------");
    }
    // console.log("i : " + i + " // " + result);
  }

  // console.log(title);
  console.log(result);
  // console.log(Math.min(...result));
  // console.log(addArray(result));

  return 4;
}

function convertion(element: number, category: number[][]): number {
  let result: number = -1;
  // console.log(category);
  for (const lines of category) {
    if (isNumberBetween(element, lines[1], lines[1] + lines[2])) {
      result = lines[0] + element - lines[1];
      break;
    }
  }
  if (result < 0) {
    result = element;
  }
  return result;
}
