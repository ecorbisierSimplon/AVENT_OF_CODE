import { describe, expect, test } from "@jest/globals";
import { exo } from "./ex_04";

describe("Test avent of code", () => {
  test("Test avent of code", () => {
    expect(exo(__dirname + "/test.txt")).toBe(4);
  });
});
