"use strict";

const Dice = require("../dice.js");

describe("Methods and getters defined", () => {
  const dice = new Dice();

  test("minimumValue defined", () => {
    expect(dice.minimumValue).toBeDefined();
  });

  test("minimumValue is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });
  test("maximumValue defined", () => {
    expect(dice.minimumValue).toBeDefined();
  });

  test("dots defined", () => {
    expect(dice.dots).toBeDefined();
  });

  //methods
  test("roll defined", () => {
    expect(dice.roll).toBeDefined();
  });
  //   test("toString defined", () => {
  //     expect(dice.toString).toBeDefined();//always defined no need
  //   });
});

describe("Testing constructor", () => {
  describe("Create a dice with no upper bound given", () => {
    const dice = new Dice();
    test("minimumValue is 1", () => {
      expect(dice.minimumValue).toBe(1);
    });
    test("maximumValue is 6", () => {
      expect(dice.maximumValue).toBe(6);
    });
    test("dots is 0", () => {
      expect(dice.dots).toBe(0);
    });
  });

  describe("Create dice with upper bound 12", () => {
    const dice = new Dice(12);

    test("maximumValue is 12", () => {
      expect(dice.maximumValue).toBe(12);
    });
    test("minimumValue is 1", () => {
      expect(dice.minimumValue).toBe(1);
    });
    test("dots is 0", () => {
      expect(dice.dots).toBe(0);
    });
  });

  describe("Create dice with given upper bound 2-20", () => {
    const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);
    test.each(testCases)("test upper bound %s", (upperBound) => {
      const dice = new Dice(upperBound);
      expect(dice.maximumValue).toBe(upperBound);
    });
  });

  describe("Test exceptions", () => {
    const testValues = [
      ["s", "upper bound must be integer"],
      [2.5, "upper bound must be integer"],
      [-4, "upper bound too small"],
      [1, "upper bound too small"],
      [0, "upper bound too small"],
      [21, "upper bound too big"],
      [100, "upper bound too big"],
    ];
    test.each(testValues)(
      "upper bound %s throws an exception %s",
      (ubound, expected) => {
        expect(() => {
          new Dice(ubound);
        }).toThrow(expected);
      }
    );

    //other version
    test.each(testValues)(
      "upper bound %s throws an exception %s",
      (ubound, expected) => {
        expect(() => new Dice(ubound)).toThrow(expected);
      }
    );
  });
});
describe("Test method roll", () => {
  describe("test with default upper bound 6", () => {
    const dice = new Dice();
    test("test when rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(6);
    });
  });

  describe("test with upper bound 12", () => {
    const dice = new Dice(12);
    test("test dice when rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(12);
    });
  });
  describe("test a dice with upper bounds 2-20 after rolling", () => {
    const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);

    test.each(testCases)("test upper bound %s", (upperBound) => {
      const dice = new Dice(upperBound);
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(upperBound);
    });
  });
});
