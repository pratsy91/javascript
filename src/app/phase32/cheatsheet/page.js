"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function CheatsheetPage() {
  return (
    <SectionLayout
      title="32.1 JavaScript Interview Cheatsheet"
      description="Complete reference guide for JavaScript interviews - all concepts, methods, patterns, and common questions"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📚 JavaScript Interview Cheatsheet
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Your <strong>complete reference guide</strong> for JavaScript
            interviews. Quick access to all concepts, methods, patterns, and
            common interview questions. Perfect for last-minute review before
            your interview!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Core Concepts",
              "Methods Reference",
              "Common Questions",
              "Code Patterns",
              "Tricky Concepts",
              "Best Practices",
              "ES6+ Features",
              "Quick Syntax",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-amber-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Core Concepts Quick Reference */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Core Concepts Quick Reference
          </h2>

          <ConceptCard title="Data Types" icon="📊" color="amber">
            <div className="space-y-3">
              <div>
                <strong className="text-amber-400">Primitives (7):</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-gray-300">
                  <li>
                    String, Number, BigInt, Boolean, Undefined, Null, Symbol
                  </li>
                </ul>
              </div>
              <div>
                <strong className="text-amber-400">Reference Types:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-gray-300">
                  <li>Object, Array, Function, Date, RegExp, Map, Set, etc.</li>
                </ul>
              </div>
              <div>
                <strong className="text-amber-400">Type Checking:</strong>
                <code className="block bg-gray-900 p-2 rounded mt-2 text-sm">
                  typeof x, instanceof, Array.isArray(),
                  Object.prototype.toString.call()
                </code>
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Variable Declarations"
              initialCode={`// var - function scoped, hoisted, can redeclare
var x = 1;
function test() {
  console.log(x); // undefined (hoisted but not initialized)
  var x = 2;
}

// let - block scoped, TDZ, cannot redeclare
let y = 1;
if (true) {
  let y = 2; // different variable
  console.log(y); // 2
}
console.log(y); // 1

// const - block scoped, must initialize, cannot reassign
const z = 1;
// z = 2; // TypeError: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // OK - object properties can change
// obj = {}; // TypeError

console.log("var:", typeof x !== 'undefined' ? x : 'hoisted');
console.log("let:", y);
console.log("const:", z, obj);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Scope & Closures"
              initialCode={`// Global Scope
const global = "I'm global";

// Function Scope
function outer() {
  const outerVar = "I'm in outer";
  
  // Inner function has access to outer scope (closure)
  function inner() {
    const innerVar = "I'm in inner";
    console.log(outerVar); // Access outer scope
    console.log(global); // Access global scope
  }
  
  return inner;
}

// Block Scope (let/const)
if (true) {
  const blockScoped = "I'm block scoped";
  // blockScoped only exists here
}

// Closure Example
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="this Binding"
              initialCode={`// 1. Global context
console.log("Global:", this === window); // true (browser)

// 2. Function call (default binding)
function regular() {
  console.log("Regular function:", this); // window/global
}
regular();

// 3. Method call (implicit binding)
const obj = {
  name: "Object",
  method() {
    console.log("Method:", this.name); // "Object"
  }
};
obj.method();

// 4. Explicit binding (call/apply/bind)
function greet(greeting) {
  console.log(greeting, this.name);
}
const person = { name: "John" };
greet.call(person, "Hello"); // Hello John
greet.apply(person, ["Hi"]); // Hi John
const bound = greet.bind(person);
bound("Hey"); // Hey John

// 5. Arrow functions (lexical this)
const arrowObj = {
  name: "Arrow",
  regular: function() {
    console.log("Regular:", this.name);
    setTimeout(function() {
      console.log("Nested regular:", this.name); // undefined
    }, 10);
  },
  arrow: function() {
    console.log("Arrow:", this.name);
    setTimeout(() => {
      console.log("Nested arrow:", this.name); // "Arrow" (lexical)
    }, 10);
  }
};
arrowObj.regular();
arrowObj.arrow();

// 6. Constructor (new binding)
function Person(name) {
  this.name = name;
}
const p = new Person("Jane");
console.log("Constructor:", p.name); // "Jane"`}
            />
          </div>
        </section>

        {/* Array Methods Cheatsheet */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Array Methods Cheatsheet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="Mutation Methods" icon="🔄" color="amber">
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <code>push()</code> - Add to end
                </li>
                <li>
                  <code>pop()</code> - Remove from end
                </li>
                <li>
                  <code>shift()</code> - Remove from start
                </li>
                <li>
                  <code>unshift()</code> - Add to start
                </li>
                <li>
                  <code>splice()</code> - Add/remove at index
                </li>
                <li>
                  <code>sort()</code> - Sort array
                </li>
                <li>
                  <code>reverse()</code> - Reverse array
                </li>
              </ul>
            </ConceptCard>

            <ConceptCard title="Non-Mutation Methods" icon="✨" color="amber">
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <code>map()</code> - Transform each element
                </li>
                <li>
                  <code>filter()</code> - Filter elements
                </li>
                <li>
                  <code>reduce()</code> - Accumulate to single value
                </li>
                <li>
                  <code>find()</code> - Find first match
                </li>
                <li>
                  <code>some()</code> - Check if any match
                </li>
                <li>
                  <code>every()</code> - Check if all match
                </li>
                <li>
                  <code>slice()</code> - Extract subarray
                </li>
              </ul>
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Common Array Patterns"
              initialCode={`const arr = [1, 2, 3, 4, 5];

// Transform
const doubled = arr.map(x => x * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// Filter
const evens = arr.filter(x => x % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// Reduce
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log("Sum:", sum); // 15

// Find
const found = arr.find(x => x > 3);
console.log("Found:", found); // 4

// Chaining
const result = arr
  .filter(x => x > 2)
  .map(x => x * 2)
  .reduce((acc, x) => acc + x, 0);
console.log("Chained:", result); // 18 (3*2 + 4*2 + 5*2)

// Flatten
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.flat();
console.log("Flat:", flat); // [1, 2, 3, 4, 5]

// Remove duplicates
const duplicates = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(duplicates)];
console.log("Unique:", unique); // [1, 2, 3]`}
            />
          </div>
        </section>

        {/* Object Methods Cheatsheet */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🗂️ Object Methods Cheatsheet
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Object Operations"
              initialCode={`const obj = { a: 1, b: 2, c: 3 };

// Get keys, values, entries
console.log("Keys:", Object.keys(obj)); // ['a', 'b', 'c']
console.log("Values:", Object.values(obj)); // [1, 2, 3]
console.log("Entries:", Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// Create from entries
const newObj = Object.fromEntries([['x', 10], ['y', 20]]);
console.log("From entries:", newObj); // { x: 10, y: 20 }

// Assign (shallow merge)
const merged = Object.assign({}, obj, { d: 4 });
console.log("Merged:", merged); // { a: 1, b: 2, c: 3, d: 4 }

// Spread operator (ES6)
const spread = { ...obj, e: 5 };
console.log("Spread:", spread); // { a: 1, b: 2, c: 3, e: 5 }

// Freeze (immutable)
const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Silent fail in non-strict mode

// Seal (can't add/remove, can modify)
const sealed = Object.seal({ x: 1 });
sealed.x = 2; // OK
// sealed.y = 3; // Error

// Check properties
console.log("Has 'a':", obj.hasOwnProperty('a')); // true
console.log("Has 'a':", 'a' in obj); // true
console.log("Has 'a':", Object.hasOwn(obj, 'a')); // true (ES2022)`}
            />
          </div>
        </section>

        {/* String Methods Cheatsheet */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📝 String Methods Cheatsheet
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Common String Operations"
              initialCode={`const str = "Hello World";

// Basic methods
console.log("Length:", str.length); // 11
console.log("Uppercase:", str.toUpperCase()); // "HELLO WORLD"
console.log("Lowercase:", str.toLowerCase()); // "hello world"
console.log("Trim:", "  hello  ".trim()); // "hello"

// Search
console.log("Includes:", str.includes("World")); // true
console.log("Starts with:", str.startsWith("Hello")); // true
console.log("Ends with:", str.endsWith("World")); // true
console.log("Index of:", str.indexOf("o")); // 4
console.log("Last index:", str.lastIndexOf("o")); // 7

// Extract
console.log("Substring:", str.substring(0, 5)); // "Hello"
console.log("Slice:", str.slice(-5)); // "World"
console.log("Char at:", str.charAt(0)); // "H"

// Split & Join
const words = str.split(" ");
console.log("Split:", words); // ["Hello", "World"]
console.log("Join:", words.join("-")); // "Hello-World"

// Replace
console.log("Replace:", str.replace("World", "JS")); // "Hello JS"
console.log("Replace all:", "a-b-c".replaceAll("-", "_")); // "a_b_c"

// Template literals
const name = "John";
const greeting = \`Hello, \${name}!\`;
console.log("Template:", greeting); // "Hello, John!"`}
            />
          </div>
        </section>

        {/* Function Patterns */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Function Patterns & Types
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="All Function Types"
              initialCode={`// 1. Function Declaration (hoisted)
function declaration() {
  return "declared";
}

// 2. Function Expression
const expression = function() {
  return "expressed";
};

// 3. Arrow Function
const arrow = () => "arrowed";

// 4. IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("IIFE executed");
})();

// 5. Generator Function
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

// 6. Async Function
async function asyncFunc() {
  return await Promise.resolve("async");
}

// 7. Constructor Function
function Person(name) {
  this.name = name;
}

// 8. Method
const obj = {
  method() {
    return "method";
  }
};

// 9. Higher-Order Function
function higherOrder(fn) {
  return function(...args) {
    return fn(...args);
  };
}

console.log("Declaration:", declaration());
console.log("Expression:", expression());
console.log("Arrow:", arrow());
console.log("Generator:", [...generator()]);
console.log("Async:", asyncFunc());
console.log("Constructor:", new Person("John"));
console.log("Method:", obj.method());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Function Parameters & Arguments"
              initialCode={`// Default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Destructuring parameters
function user({ name, age }) {
  return \`\${name} is \${age}\`;
}

// Arguments object (old way)
function oldWay() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

console.log("Default:", greet()); // "Hello, Guest"
console.log("Default:", greet("John")); // "Hello, John"
console.log("Rest:", sum(1, 2, 3, 4)); // 10
console.log("Destructure:", user({ name: "Jane", age: 30 })); // "Jane is 30"
console.log("Arguments:", oldWay(1, 2, 3)); // 6`}
            />
          </div>
        </section>

        {/* Promises & Async */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏳ Promises & Async/Await
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Promise Patterns"
              initialCode={`// Create Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 100);
});

// Promise methods
promise
  .then(value => {
    console.log("Then:", value);
    return value.toUpperCase();
  })
  .then(value => console.log("Chained:", value))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Finally"));

// Promise.all (all must succeed)
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log("All:", values)); // [1, 2, 3]

// Promise.allSettled (wait for all)
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
]).then(results => console.log("AllSettled:", results));

// Promise.race (first to settle)
Promise.race([
  new Promise(r => setTimeout(() => r("Fast"), 50)),
  new Promise(r => setTimeout(() => r("Slow"), 100))
]).then(value => console.log("Race:", value)); // "Fast"

// Promise.any (first to succeed)
Promise.any([
  Promise.reject("Error1"),
  Promise.resolve("Success"),
  Promise.reject("Error2")
]).then(value => console.log("Any:", value)); // "Success"

// Async/Await
async function asyncExample() {
  try {
    const result = await promise;
    console.log("Async:", result);
    return result;
  } catch (error) {
    console.error("Async error:", error);
  }
}
asyncExample();`}
            />
          </div>
        </section>

        {/* ES6+ Features */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🚀 ES6+ Features Quick Reference
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Destructuring"
              initialCode={`// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log("Array:", a, b, rest); // 1, 2, [3, 4, 5]

// Object destructuring
const { name, age, ...other } = { name: "John", age: 30, city: "NYC" };
console.log("Object:", name, age, other); // John, 30, { city: "NYC" }

// Default values
const { x = 10, y = 20 } = { x: 5 };
console.log("Defaults:", x, y); // 5, 20

// Renaming
const { name: userName } = { name: "John" };
console.log("Renamed:", userName); // "John"

// Nested destructuring
const { user: { id, email } } = { user: { id: 1, email: "test@test.com" } };
console.log("Nested:", id, email); // 1, "test@test.com"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Spread & Rest Operators"
              initialCode={`// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Merged:", merged); // { a: 1, b: 2, c: 3, d: 4 }

// Rest in function parameters
function sum(first, ...rest) {
  return first + rest.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3, 4)); // 10

// Rest in destructuring
const [first, ...others] = [1, 2, 3, 4];
console.log("Rest:", first, others); // 1, [2, 3, 4]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Classes & Inheritance"
              initialCode={`// Class declaration
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  static create(name) {
    return new Person(name);
  }
}

// Inheritance
class Developer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  
  code() {
    return \`\${this.name} codes in \${this.language}\`;
  }
}

// Private fields (ES2022)
class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const dev = new Developer("John", "JavaScript");
console.log("Greet:", dev.greet());
console.log("Code:", dev.code());

const account = new BankAccount();
account.deposit(100);
console.log("Balance:", account.getBalance()); // 100`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Modules (ES6)"
              initialCode={`// Export (named)
// export const name = "John";
// export function greet() { return "Hello"; }
// export default class Person {}

// Import
// import { name, greet } from './module.js';
// import Person from './module.js';
// import * as Module from './module.js';

console.log("Module syntax:");
console.log(\`
// Export
export const name = "John";
export function greet() { return "Hello"; }
export default class Person {}

// Import
import { name, greet } from './module.js';
import Person from './module.js';
import * as Module from './module.js';
\`);`}
            />
          </div>
        </section>

        {/* Common Interview Questions */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ❓ Common Interview Questions
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Closure Questions"
              initialCode={`// Classic closure loop problem
console.log("Problem: Loop with var");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100); // 3, 3, 3
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 200); // 0, 1, 2
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log("IIFE:", j), 300); // 0, 1, 2
  })(i);
}

// Solution 3: bind
for (var i = 0; i < 3; i++) {
  setTimeout(function(j) {
    console.log("bind:", j);
  }.bind(null, i), 400); // 0, 1, 2
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="this Binding Questions"
              initialCode={`// What will this print?
const obj = {
  name: "Object",
  regular: function() {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name); // undefined (lexical this)
  },
  nested: function() {
    const inner = function() {
      console.log("Nested regular:", this.name); // undefined
    };
    inner();
    
    const innerArrow = () => {
      console.log("Nested arrow:", this.name); // "Object"
    };
    innerArrow();
  }
};

obj.regular(); // "Object"
obj.arrow(); // undefined
obj.nested(); // undefined, "Object"

// Method extraction
const extracted = obj.regular;
extracted(); // undefined (lost context)

// Solution: bind
const bound = obj.regular.bind(obj);
bound(); // "Object"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Type Coercion Questions"
              initialCode={`// Tricky comparisons
console.log("0 == false:", 0 == false); // true
console.log("0 === false:", 0 === false); // false
console.log("'' == false:", '' == false); // true
console.log("'' === false:", '' === false); // false
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// Array comparisons
console.log("[] == false:", [] == false); // true
console.log("[] == 0:", [] == 0); // true
console.log("[1] == 1:", [1] == 1); // true

// Object comparisons
console.log("{} == {}", {} == {}); // false (different references)
console.log("{} === {}", {} === {}); // false

// NaN
console.log("NaN == NaN:", NaN == NaN); // false
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

// Best practice: Always use ===`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Hoisting Questions"
              initialCode={`// Function hoisting
hoisted(); // Works! "I'm hoisted"

function hoisted() {
  console.log("I'm hoisted");
}

// Variable hoisting
console.log("Before:", typeof x); // undefined (not ReferenceError)
var x = 5;
console.log("After:", x); // 5

// let/const hoisting (TDZ)
// console.log(y); // ReferenceError: Cannot access before initialization
let y = 10;

// Function expression (not hoisted)
// notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
  console.log("I'm not hoisted");
};

// Arrow function (not hoisted)
// arrowNotHoisted(); // TypeError
var arrowNotHoisted = () => {
  console.log("Arrow not hoisted");
};`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Event Loop & Async"
              initialCode={`// Execution order
console.log("1. Sync");

setTimeout(() => console.log("2. setTimeout"), 0);

Promise.resolve().then(() => console.log("3. Promise"));

queueMicrotask(() => console.log("4. Microtask"));

console.log("5. Sync end");

// Output order:
// 1. Sync
// 5. Sync end
// 3. Promise
// 4. Microtask
// 2. setTimeout

// Explanation:
// 1. All sync code runs first
// 2. Microtasks (Promises, queueMicrotask) run before next task
// 3. Macrotasks (setTimeout, setInterval) run after microtasks`}
            />
          </div>
        </section>

        {/* Algorithm Patterns */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🧮 Common Algorithm Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Two Pointers"
              initialCode={`// Find two numbers that sum to target
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log("Two sum:", twoSum([1, 2, 3, 4, 5], 7)); // [2, 3]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Sliding Window"
              initialCode={`// Maximum sum of subarray of size k
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
  // Calculate first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

console.log("Max sum:", maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Hash Map / Set"
              initialCode={`// Find duplicates
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return Array.from(duplicates);
}

// Group by
function groupBy(arr, keyFn) {
  const map = new Map();
  for (const item of arr) {
    const key = keyFn(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  }
  return map;
}

console.log("Duplicates:", findDuplicates([1, 2, 2, 3, 3, 3])); // [2, 3]
console.log("Grouped:", groupBy([1, 2, 3, 4, 5], x => x % 2));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Recursion Patterns"
              initialCode={`// Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Fibonacci (memoized)
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Binary search
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  return binarySearch(arr, target, mid + 1, right);
}

console.log("Factorial(5):", factorial(5)); // 120
console.log("Fibonacci(10):", fibonacci(10)); // 55
console.log("Binary search:", binarySearch([1, 2, 3, 4, 5], 3)); // 2`}
            />
          </div>
        </section>

        {/* Prototypes & Inheritance */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 Prototypes & Inheritance
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Prototype Chain"
              initialCode={`// Constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

// Inheritance
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
  return \`\${this.name} barks\`;
};

const dog = new Dog("Buddy", "Golden");
console.log("Dog speaks:", dog.speak()); // "Buddy barks"
console.log("Is Animal?", dog instanceof Animal); // true
console.log("Is Dog?", dog instanceof Dog); // true

// Prototype chain
console.log("Prototype chain:");
console.log("dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null");`}
            />
          </div>
        </section>

        {/* Error Handling */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚠️ Error Handling Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Try-Catch & Error Types"
              initialCode={`// Basic try-catch
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Caught:", error.message);
}

// Error types
try {
  throw new TypeError("Type error");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("TypeError caught");
  }
}

// Finally
try {
  console.log("Try block");
  throw new Error("Error");
} catch (error) {
  console.log("Catch block");
} finally {
  console.log("Finally always runs");
}

// Async error handling
async function asyncError() {
  try {
    await Promise.reject("Async error");
  } catch (error) {
    console.log("Async caught:", error);
  }
}

// Promise error handling
Promise.reject("Promise error")
  .catch(error => console.log("Promise caught:", error));`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ✅ Best Practices & Tips
          </h2>

          <ConceptCard title="Code Quality Tips" icon="💡" color="amber">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Always use ===</strong> instead of == (strict equality)
              </li>
              <li>
                <strong>Use const by default</strong>, let when needed, avoid
                var
              </li>
              <li>
                <strong>Prefer arrow functions</strong> for callbacks (lexical
                this)
              </li>
              <li>
                <strong>Use template literals</strong> instead of string
                concatenation
              </li>
              <li>
                <strong>Destructure</strong> objects and arrays for cleaner code
              </li>
              <li>
                <strong>Use async/await</strong> instead of promise chains when
                possible
              </li>
              <li>
                <strong>Handle errors</strong> properly with try-catch or
                .catch()
              </li>
              <li>
                <strong>Use meaningful names</strong> for variables and
                functions
              </li>
              <li>
                <strong>Avoid global variables</strong> - use modules
              </li>
              <li>
                <strong>Use optional chaining</strong> (?.) and nullish
                coalescing (??)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Modern JavaScript Best Practices"
              initialCode={`// ✅ Good: const, arrow function, template literal
const greet = (name) => \`Hello, \${name}!\`;

// ❌ Bad: var, function expression, concatenation
var greet = function(name) {
  return "Hello, " + name + "!";
};

// ✅ Good: Destructuring
const { name, age } = user;

// ❌ Bad: Manual property access
const name = user.name;
const age = user.age;

// ✅ Good: Optional chaining & nullish coalescing
const value = obj?.property?.nested ?? "default";

// ❌ Bad: Manual checks
const value = obj && obj.property && obj.property.nested || "default";

// ✅ Good: Array methods
const doubled = numbers.map(n => n * 2);

// ❌ Bad: for loop
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// ✅ Good: async/await
async function fetchData() {
  try {
    const data = await fetch('/api/data');
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}

// ❌ Bad: Promise chains
function fetchData() {
  return fetch('/api/data')
    .then(data => data.json())
    .catch(error => console.error(error));
}`}
            />
          </div>
        </section>

        {/* Quick Reference Tables */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 Quick Reference Tables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConceptCard title="Type Checking" icon="🔍" color="amber">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-2">Method</th>
                    <th className="text-left p-2">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">typeof</td>
                    <td className="p-2">Primitive types</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">instanceof</td>
                    <td className="p-2">Object instances</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">Array.isArray()</td>
                    <td className="p-2">Check if array</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">
                      Object.prototype.toString.call()
                    </td>
                    <td className="p-2">Exact type</td>
                  </tr>
                </tbody>
              </table>
            </ConceptCard>

            <ConceptCard title="Equality Comparison" icon="⚖️" color="amber">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-2">Operator</th>
                    <th className="text-left p-2">Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">==</td>
                    <td className="p-2">Type coercion</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">===</td>
                    <td className="p-2">Strict (no coercion)</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-2 font-mono">Object.is()</td>
                    <td className="p-2">SameValue (handles NaN, -0)</td>
                  </tr>
                </tbody>
              </table>
            </ConceptCard>
          </div>
        </section>

        {/* Final Tips */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Interview Tips
          </h2>

          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-lg p-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Think out loud:</strong> Explain your thought process
                  as you code
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Ask questions:</strong> Clarify requirements before
                  coding
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Start simple:</strong> Get a working solution first,
                  then optimize
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Consider edge cases:</strong> Empty arrays, null
                  values, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Discuss trade-offs:</strong> Time vs space complexity
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Write clean code:</strong> Meaningful names, proper
                  formatting
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">✓</span>
                <span>
                  <strong>Test your code:</strong> Walk through examples
                  manually
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
