import * as fs from "fs";
import { string } from "yargs";
import { nextAfter } from "../EX_2023_01/ex_01";

export function exo(filePath: string): number {
  try {
    const fileContent: string = fs.readFileSync(filePath, { encoding: "utf8" });
    let content: string = "";
    const result: number[] = [];
    const colors: string[] = ["red", "green", "blue"];
    const colorsMax: Record<string, number> = { red: 12, green: 13, blue: 14 };
    let colorsCubes: Record<string, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };
    colorsCubes["red"] = 0;
    colorsCubes["green"] = 0;
    colorsCubes["blue"] = 0;

    for (let line of fileContent.split("\n")) {
      let play: string[] = [];
      let test: boolean = false;
      play = line.split(":");
      // Récupération du numéro du Game:
      play[0] = play[0].split(" ")[1].trim();
      const party: string[] = play[1].split(";");
      for (let j of party) {
        test = partyPlay(j);
        if (test) {
          break;
        }
      }
      if (!test) result.push(Number(play[0]));
    }

    function partyPlay(party: string): boolean {
      colorsCubes["red"] = 0;
      colorsCubes["green"] = 0;
      colorsCubes["blue"] = 0;
      try {
        const cubes: string[] = party.trim().split(",");
        for (let numCubes of cubes) {
          const cube: string[] = numCubes.trim().split(" ");
          // console.log(cube[1].trim() + " : " + cube[0].trim());
          let color: string = cube[1].trim();
          let num: number = Number(cube[0].trim());
          colorsCubes[color] += num;
        }
      } catch (error) {}
      // control value play and value max
      for (let color of colors) {
        if (colorsCubes[color] > colorsMax[color]) {
          return true;
        }
      }
      return false;
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
