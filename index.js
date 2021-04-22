// @flow

import { TestClass } from "./testClass";
import type { First, Second } from "./types";

const testerClass = new TestClass();
// Should show class type on hover?
testerClass.doStuff();

// Should have a flow error for adding the `shouldError` key
const firstThing: First = {
  thing: "a",
  shouldError: true,
};

// Should show hover on firstThing?
console.log(firstThing + "help me");
