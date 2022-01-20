"use strict";

module.exports = class Dice {
  constructor(upperBound = 6) {
    //upperBound = 6 is default value
    if (!Number.isInteger(upperBound)) {
      throw new Error("upper bound must be integer");
    }
    if (upperBound > 20) {
      throw new Error("upper bound too big");
    }
    if (upperBound < 2) {
      throw new Error("upper bound too small");
    }
    this.dotCount = 0;
    this.upperBound = upperBound;
  }
  //it is getter and return something otherwise undefined in test
  get minimumValue() {
    return 1;
  }
  get maximumValue() {
    return this.upperBound;
  }
  get dots() {
    return this.dotCount;
  }
  roll() {
    this.dotCount = Math.ceil(Math.random() * this.upperBound);
  }
};
