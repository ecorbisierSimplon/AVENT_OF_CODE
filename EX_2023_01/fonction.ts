export function addArray(val: number[]): number {
  let add = function (arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  };

  return add(val);
}

export function multiArray(val: number[]): number {
  let add = function (arr: number[]) {
    return arr.reduce((a, b) => a * b, 1);
  };

  return add(val);
}

export function isNumberBetween(
  value: number,
  lower: number,
  upper: number
): boolean {
  return lower <= value && value <= upper;
}

export function parseTextToObject(text: string): Record<string, number[][]> {
  const lines = text.split("\n").filter(Boolean);
  const result: Record<string, number[][]> = {};

  let currentKey = "";
  let currentData: number[][] = [];

  lines.forEach((line, index) => {
    if (line.endsWith(":")) {
      // Found a key, set it as the current key
      currentKey = line.replace(":", "").trim();
      currentData = [];
    } else if (line.trim() !== "") {
      // Split the line into numbers and convert them to an array
      const numbers = line.split(/\s+/).map(Number);
      currentData.push(numbers);
    }

    // If the line ends with a colon, it's the end of the data for the current key
    // or it's the last line, and there is no data for the last key
    const isLastLine = index === lines.length - 1;
    if (line.endsWith(":") || isLastLine) {
      // Store the current data for the current key
      result[currentKey] = currentData;
    }
  });

  return result;
}

export function parseTextToTitle(text: string): string[] {
  const lines = text.split("\n").filter(Boolean);
  const result: string[] = [];
  lines.forEach((line, index) => {
    if (line.endsWith(":")) {
      // Found a key, set it as the current key
      result.push(line.replace(":", "").trim());
    }
  });

  return result;
}

export function parseNumberToObject(text: string): number[][] {
  const lines = text.split("\n").filter(Boolean);
  let currentData: number[][] = [];

  lines.forEach((line, index) => {
    const numLine = line.split(":").filter(Boolean);
    const numbers = numLine[1].trim().split(/\s+/).map(Number);
    currentData.push(numbers);

    // const isLastLine = index === lines.length - 1;
    // if (isLastLine) {
    //   // Store the current data for the current key
    //   result.push(currentData);
    // }
  });

  return currentData;
}

export function stringNumberToObject(text: string): number[][] {
  const lines = text.split("\n").filter(Boolean);
  let currentData: number[][] = [];

  lines.forEach((line, index) => {
    const numLine = line.split(":").filter(Boolean);
    console.log(Number(numLine[1].trim().replace(/ /g, "")));
    const numbers = [Number(numLine[1].trim().replace(/ /g, ""))];
    currentData.push(numbers);

    // const isLastLine = index === lines.length - 1;
    // if (isLastLine) {
    //   // Store the current data for the current key
    //   result.push(currentData);
    // }
  });

  return currentData;
}
