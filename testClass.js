// @flow

export class TestClass {
  firstThing: string;
  secondThing: string;

  constructor() {
    this.firstThing = "first";
    this.secondThing = "second";
  }

  doStuff() {
    console.log("stuff", this.firstThing, this.secondThing);
  }
}
