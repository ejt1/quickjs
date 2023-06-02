/* example of JS module importing a C module */

import { fib } from "fib.dll";

console.log("Hello World");
console.log("fib(10)=", fib(10));
