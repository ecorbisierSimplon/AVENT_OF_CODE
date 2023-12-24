import * as fs from "fs";
import { string } from "yargs";
import { nextAfter } from "../EX_2023_01/ex_01";

export function exo(filePath: string): number {
  try {
    const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
    let content: string = "";
    const result: number[] = [];
    const colors: string[] = ["red", "green", "blue"];
    const colorsMax: Record<string, number> = { red: 0, green: 0, blue: 0 };
    let colorsCubes: Record<string, number[]> = {
      red: [],
      green: [],
      blue: [],
    };

    for (let line of fileContent.split("\n")) {
      let play: string[] = line.split(":");
      let test: boolean = false;
      colorsCubes["red"] = [];
      colorsCubes["green"] = [];
      colorsCubes["blue"] = [];
      const party: string[] = play[1].split(";");
      for (let j of party) {
        partyPlay(j);
      }
      result.push(
        Math.max(...colorsCubes["red"]) *
          Math.max(...colorsCubes["green"]) *
          Math.max(...colorsCubes["blue"])
      );

      // console.log(colorsCubes);
      // if (!test) result.push(Number(play[0]));
    }

    function partyPlay(party: string): void {
      try {
        const cubes: string[] = party.trim().split(",");
        for (let numCubes of cubes) {
          const cube: string[] = numCubes.trim().split(" ");
          // console.log(cube[1].trim() + " : " + cube[0].trim());
          let color: string = cube[1].trim();
          let num: number = Number(cube[0].trim());
          colorsCubes[color].push(num);
        }
      } catch (error) {}
      // control value play and value max
    }

    console.log("Content : ");
    console.log(result);

    let add = function (arr: number[]) {
      return arr.reduce((a, b) => a + b, 0);
    };

    let sum = add(result);

    console.log("Sommes : " + sum);

    return 4;
  } catch (error) {
    throw error;
  }
}
