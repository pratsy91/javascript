"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function LoopsPage() {
  return (
    <SectionLayout
      title="2.2 Loops - All Types"
      description="Master for, while, do...while, for...in, for...of, and loop control"
      prevSection={{
        title: "Conditional Statements",
        path: "/phase2/conditionals",
      }}
      nextSection={{
        title: "Functions - Complete",
        path: "/phase2/functions",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">🔁 Loops</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Loops allow you to execute code repeatedly. JavaScript provides
            multiple loop types for different use cases.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              "for",
              "while",
              "do...while",
              "for...in",
              "for...of",
              "for await...of",
            ].map((type) => (
              <div
                key={type}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-purple-300 font-mono"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* for Loop */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">🔄 for Loop</h2>

          <ConceptCard title="for Loop Basics" icon="⚙️" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> for (init; condition; update) {"{"} ...{" "}
                {"}"}
              </li>
              <li>
                <strong>init:</strong> Executed once before loop starts
              </li>
              <li>
                <strong>condition:</strong> Checked before each iteration
              </li>
              <li>
                <strong>update:</strong> Executed after each iteration
              </li>
              <li>
                <strong>Best for:</strong> Known number of iterations
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Basic for Loop"
              initialCode={`// Classic for loop
console.log("Counting up:");
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// Counting down
console.log("\\nCounting down:");
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// Step by 2
console.log("\\nEven numbers:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Multiple variables
console.log("\\nMultiple variables:");
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log("i:", i, "j:", j);
}

// Looping through array
let fruits = ["apple", "banana", "orange"];
console.log("\\nFruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ":", fruits[i]);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="for Loop Variations"
              initialCode={`// Empty initialization (variable exists outside)
let i = 0;
for (; i < 3; i++) {
  console.log("No init:", i);
}

// Infinite loop (be careful!)
// for (;;) {
//   console.log("This runs forever!");
//   break; // Need this to stop!
// }

// Complex condition
console.log("\\nComplex condition:");
for (let i = 0; i < 10 && i !== 5; i++) {
  console.log(i); // Stops at 5
}

// Complex update
console.log("\\nComplex update:");
for (let i = 1; i <= 20; i *= 2) {
  console.log(i); // 1, 2, 4, 8, 16
}

// Nested loops
console.log("\\nNested loops (multiplication table):");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`\${i} × \${j} = \${i * j}\`);
  }
}

// Loop with calculations
console.log("\\nSum of 1-10:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Total:", sum);`}
            />
          </div>
        </section>

        {/* while Loop */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⚡ while Loop</h2>

          <ConceptCard title="while Loop Basics" icon="🔃" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> while (condition) {"{"} ... {"}"}
              </li>
              <li>
                <strong>Condition:</strong> Checked before each iteration
              </li>
              <li>
                <strong>Runs 0+ times:</strong> May not run at all if condition
                is false
              </li>
              <li>
                <strong>Best for:</strong> Unknown number of iterations
              </li>
              <li>
                <strong>Update:</strong> Must be done inside loop body
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="while Loop Examples"
              initialCode={`// Basic while loop
let count = 0;
console.log("Counting to 5:");
while (count < 5) {
  console.log("Count:", count);
  count++; // Don't forget to update!
}

// While with complex condition
let i = 1;
let sum = 0;
console.log("\\nSum until over 50:");
while (sum < 50) {
  sum += i;
  console.log(\`Added \${i}, sum: \${sum}\`);
  i++;
}

// While with user input simulation
let password = "";
let attempts = 0;
console.log("\\nPassword check:");
while (password !== "secret" && attempts < 3) {
  attempts++;
  // Simulating user input
  password = attempts === 2 ? "secret" : "wrong";
  console.log(\`Attempt \${attempts}: \${password}\`);
}

if (password === "secret") {
  console.log("Access granted!");
} else {
  console.log("Access denied!");
}

// While with flag
let found = false;
let numbers = [1, 3, 5, 7, 8, 9];
let index = 0;
console.log("\\nFinding first even:");
while (index < numbers.length && !found) {
  if (numbers[index] % 2 === 0) {
    console.log("Found even number:", numbers[index]);
    found = true;
  }
  index++;
}`}
            />
          </div>
        </section>

        {/* do...while Loop */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 do...while Loop
          </h2>

          <ConceptCard title="do...while Basics" icon="🔁" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> do {"{"} ... {"}"} while (condition);
              </li>
              <li>
                <strong>Runs at least once:</strong> Condition checked after
                iteration
              </li>
              <li>
                <strong>Semicolon:</strong> Required after while(condition);
              </li>
              <li>
                <strong>Best for:</strong> Must run at least once (menus,
                prompts)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="do...while Examples"
              initialCode={`// Basic do...while
let count = 0;
console.log("do...while loop:");
do {
  console.log("Count:", count);
  count++;
} while (count < 5);

// Runs at least once (even if condition is false)
let x = 10;
console.log("\\nRuns once despite false condition:");
do {
  console.log("x:", x);
  x++;
} while (x < 5); // Condition is false, but still ran once

// Menu simulation
let choice = 0;
let menuCount = 0;
console.log("\\nMenu simulation:");
do {
  menuCount++;
  console.log(\`\\nMenu (attempt \${menuCount}):\`);
  console.log("1. Option A");
  console.log("2. Option B");
  console.log("3. Exit");
  
  // Simulate user choosing option 3 on second try
  choice = menuCount === 2 ? 3 : 1;
  console.log("User chose:", choice);
  
} while (choice !== 3);
console.log("Exited menu");

// do...while vs while comparison
console.log("\\n=== while (never runs) ===");
let a = 10;
while (a < 5) {
  console.log("This never runs");
  a++;
}

console.log("\\n=== do...while (runs once) ===");
let b = 10;
do {
  console.log("This runs once! b =", b);
  b++;
} while (b < 5);`}
            />
          </div>
        </section>

        {/* for...in Loop */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔑 for...in Loop
          </h2>

          <ConceptCard title="for...in Basics" icon="📦" color="orange">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> for (key in object) {"{"} ... {"}"}
              </li>
              <li>
                <strong>Iterates:</strong> Over enumerable property keys/indices
              </li>
              <li>
                <strong>For objects:</strong> Gets property names (strings)
              </li>
              <li>
                <strong>For arrays:</strong> Gets indices (strings, not
                numbers!)
              </li>
              <li>
                <strong>Includes inherited:</strong> Prototype properties too
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="for...in with Objects"
              initialCode={`// Basic for...in with object
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log("Object properties:");
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Check own properties (not inherited)
console.log("\\nOwn properties only:");
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ":", person[key]);
  }
}

// With nested object
let car = {
  brand: "Toyota",
  model: "Camry",
  specs: {
    year: 2024,
    color: "blue"
  }
};

console.log("\\nNested object:");
for (let key in car) {
  console.log(key + ":", car[key]);
}

// Modifying values
let scores = {
  math: 80,
  english: 85,
  science: 90
};

console.log("\\nOriginal scores:");
for (let subject in scores) {
  console.log(subject + ":", scores[subject]);
}

// Add 5 points to each
for (let subject in scores) {
  scores[subject] += 5;
}

console.log("\\nBoosted scores:");
for (let subject in scores) {
  console.log(subject + ":", scores[subject]);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="for...in with Arrays (Not Recommended)"
              initialCode={`// for...in with arrays (works but not ideal)
let colors = ["red", "green", "blue"];

console.log("Array with for...in:");
for (let index in colors) {
  console.log(index + ":", colors[index]);
  console.log("Type of index:", typeof index); // "string"!
}

// Problem: indices are strings
console.log("\\nIndex type issue:");
for (let i in colors) {
  console.log("i:", i, "typeof:", typeof i);
  // i is "0", "1", "2" (strings, not numbers)
}

// Problem: includes added properties
colors.customProp = "custom";
console.log("\\nWith custom property:");
for (let i in colors) {
  console.log(i + ":", colors[i]); // Includes customProp!
}

// Solution: Use regular for loop or for...of
console.log("\\nUsing regular for (better):");
for (let i = 0; i < colors.length; i++) {
  console.log(i + ":", colors[i]);
}

// When for...in IS useful for arrays
let sparseArray = [];
sparseArray[0] = "first";
sparseArray[5] = "sixth";
sparseArray[10] = "eleventh";

console.log("\\nSparse array with for...in:");
for (let i in sparseArray) {
  console.log("Index " + i + ":", sparseArray[i]);
}
// Only shows defined indices (0, 5, 10)`}
            />
          </div>
        </section>

        {/* for...of Loop */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⭐ for...of Loop (ES2015)
          </h2>

          <ConceptCard title="for...of Basics" icon="🎁" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> for (value of iterable) {"{"} ... {"}"}
              </li>
              <li>
                <strong>Iterates:</strong> Over iterable values (not keys)
              </li>
              <li>
                <strong>Works with:</strong> Arrays, strings, Maps, Sets, etc.
              </li>
              <li>
                <strong>Cannot iterate:</strong> Plain objects (not iterable)
              </li>
              <li>
                <strong>Modern preferred:</strong> Best for arrays in ES6+
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="for...of with Arrays"
              initialCode={`// Basic for...of with array
let fruits = ["apple", "banana", "orange"];

console.log("Array with for...of:");
for (let fruit of fruits) {
  console.log(fruit); // Gets values directly
}

// Compare with for...in
console.log("\\nArray with for...in:");
for (let index in fruits) {
  console.log(index, fruits[index]); // Gets indices
}

// With array of objects
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

console.log("\\nUsers:");
for (let user of users) {
  console.log(\`\${user.name} is \${user.age} years old\`);
}

// With destructuring
console.log("\\nWith destructuring:");
for (let { name, age } of users) {
  console.log(\`\${name}: \${age}\`);
}

// Getting index with entries()
console.log("\\nWith index:");
for (let [index, fruit] of fruits.entries()) {
  console.log(index + ":", fruit);
}

// Early exit
console.log("\\nFinding orange:");
for (let fruit of fruits) {
  console.log("Checking:", fruit);
  if (fruit === "orange") {
    console.log("Found it!");
    break;
  }
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="for...of with Other Iterables"
              initialCode={`// With strings
let word = "Hello";
console.log("String iteration:");
for (let char of word) {
  console.log(char);
}

// With Set
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);
console.log("\\nSet iteration:");
for (let num of uniqueNumbers) {
  console.log(num);
}

// With Map
let map = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "NYC"]
]);

console.log("\\nMap iteration:");
for (let [key, value] of map) {
  console.log(key + ":", value);
}

// Map keys only
console.log("\\nMap keys:");
for (let key of map.keys()) {
  console.log(key);
}

// Map values only
console.log("\\nMap values:");
for (let value of map.values()) {
  console.log(value);
}

// Cannot iterate plain objects
let obj = { a: 1, b: 2 };
// for (let val of obj) { // Error!
//   console.log(val);
// }

// Solution: Use Object.keys(), values(), or entries()
console.log("\\nObject with for...of:");
for (let key of Object.keys(obj)) {
  console.log(key + ":", obj[key]);
}`}
            />
          </div>
        </section>

        {/* for await...of Loop */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏳ for await...of Loop (ES2018)
          </h2>

          <ConceptCard title="for await...of Basics" icon="⚡" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> for await (value of asyncIterable){" "}
                {"{"} ... {"}"}
              </li>
              <li>
                <strong>Purpose:</strong> Iterate over async iterables
              </li>
              <li>
                <strong>Waits:</strong> For each promise to resolve
              </li>
              <li>
                <strong>Sequential:</strong> Processes items one at a time
              </li>
              <li>
                <strong>Must be:</strong> Inside async function
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="for await...of Example"
              initialCode={`// Simulate async iterable
async function* asyncGenerator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

// Using for await...of
async function processAsync() {
  console.log("Processing async values:");
  
  for await (let value of asyncGenerator()) {
    console.log("Got value:", value);
  }
  
  console.log("Done!");
}

// Run it
processAsync();

// With array of promises
async function processPromises() {
  let promises = [
    Promise.resolve("First"),
    Promise.resolve("Second"),
    Promise.resolve("Third")
  ];
  
  console.log("\\nProcessing promises:");
  for await (let result of promises) {
    console.log("Result:", result);
  }
}

processPromises();

// Note: These are async operations
// The output appears after a brief delay
console.log("Main code continues...");`}
            />
          </div>
        </section>

        {/* Loop Control: break and continue */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏹️ Loop Control: break & continue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConceptCard title="break Statement" icon="🛑" color="red">
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Exits the loop immediately</li>
                <li>Skips remaining iterations</li>
                <li>Control goes to statement after loop</li>
                <li>Works with all loop types</li>
              </ul>
            </ConceptCard>

            <ConceptCard title="continue Statement" icon="⏭️" color="orange">
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Skips current iteration</li>
                <li>Continues with next iteration</li>
                <li>Doesn't exit the loop</li>
                <li>Works with all loop types</li>
              </ul>
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="break Statement"
              initialCode={`// break in for loop
console.log("Finding first even:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Found:", i);
    break; // Exit loop
  }
  console.log("Checking:", i);
}
console.log("Loop ended\\n");

// break in while loop
let count = 0;
console.log("While with break:");
while (true) {
  console.log("Count:", count);
  count++;
  if (count >= 5) {
    break; // Exit infinite loop
  }
}

// break in nested loops (only exits inner loop)
console.log("\\nNested loops:");
for (let i = 1; i <= 3; i++) {
  console.log("Outer:", i);
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break; // Only exits inner loop
    }
    console.log("  Inner:", j);
  }
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="continue Statement"
              initialCode={`// continue in for loop
console.log("Odd numbers only:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}

// continue with complex condition
console.log("\\nSkip multiples of 3:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log("Skipping:", i);
    continue;
  }
  console.log(i);
}

// continue in while loop
let n = 0;
console.log("\\nWhile with continue:");
while (n < 10) {
  n++;
  if (n % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(n);
}

// Processing array with continue
let numbers = [1, -2, 3, -4, 5, -6];
console.log("\\nPositive numbers:");
for (let num of numbers) {
  if (num < 0) {
    continue; // Skip negative
  }
  console.log(num);
}`}
            />
          </div>
        </section>

        {/* Labeled Statements */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏷️ Labeled Statements
          </h2>

          <ConceptCard title="Labels" icon="🎯" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> labelName: statement
              </li>
              <li>
                <strong>Purpose:</strong> Break/continue specific nested loop
              </li>
              <li>
                <strong>Usage:</strong> break labelName; or continue labelName;
              </li>
              <li>
                <strong>Rare:</strong> Usually better to use functions/flags
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="break with Labels"
              initialCode={`// break with label (breaks outer loop)
console.log("Without label:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break; // Only breaks inner loop
    }
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

console.log("\\nWith label:");
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // Breaks outer loop!
    }
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// Finding in 2D array
console.log("\\nFinding in 2D array:");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let found = false;
let target = 5;

search: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === target) {
      console.log(\`Found \${target} at [\${i}][\${j}]\`);
      found = true;
      break search; // Exit both loops
    }
  }
}

if (!found) {
  console.log("Not found");
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="continue with Labels"
              initialCode={`// continue with label
console.log("Skip outer iteration:");

outer: for (let i = 1; i <= 3; i++) {
  console.log("Outer:", i);
  
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("  Skipping rest of outer iteration");
      continue outer; // Skip to next outer iteration
    }
    console.log("  Inner:", j);
  }
  
  console.log("  Completed inner loop");
}

// Complex example
console.log("\\nPrinting pairs (skip when sum > 5):");

mainLoop: for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (i + j > 5) {
      continue mainLoop; // Skip rest and go to next i
    }
    console.log(\`\${i} + \${j} = \${i + j}\`);
  }
}

// Better alternative: extract to function
console.log("\\nBetter: using function:");
function processMatrix() {
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
        return; // Exit entire function
      }
      console.log(\`i=\${i}, j=\${j}\`);
    }
  }
}
processMatrix();`}
            />
          </div>
        </section>

        {/* Loop Comparison */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Loop Comparison Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Loop Type
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Best For
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Iterates Over
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">for</td>
                  <td className="px-3 py-2">Known iterations</td>
                  <td className="px-3 py-2">Counter variable</td>
                  <td className="px-3 py-2">Most versatile</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">while</td>
                  <td className="px-3 py-2">Unknown iterations</td>
                  <td className="px-3 py-2">While condition true</td>
                  <td className="px-3 py-2">May not run</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-green-400">
                    do...while
                  </td>
                  <td className="px-3 py-2">Must run once</td>
                  <td className="px-3 py-2">While condition true</td>
                  <td className="px-3 py-2">Runs at least once</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-orange-400">
                    for...in
                  </td>
                  <td className="px-3 py-2">Object properties</td>
                  <td className="px-3 py-2">Enumerable keys</td>
                  <td className="px-3 py-2">Avoid with arrays</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">
                    for...of
                  </td>
                  <td className="px-3 py-2">Arrays, iterables</td>
                  <td className="px-3 py-2">Values</td>
                  <td className="px-3 py-2">Modern, preferred</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">
                    for await...of
                  </td>
                  <td className="px-3 py-2">Async iterables</td>
                  <td className="px-3 py-2">Promised values</td>
                  <td className="px-3 py-2">Requires async</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use for...of for arrays
                </strong>
                <p className="ml-4 mt-1">
                  Cleaner and more readable than traditional for loop in modern
                  JavaScript.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use for...in only for objects
                </strong>
                <p className="ml-4 mt-1">
                  Avoid for...in with arrays. Use for...of or regular for loop
                  instead.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Avoid infinite loops
                </strong>
                <p className="ml-4 mt-1">
                  Always ensure loop condition can become false. Add safety
                  counters if needed.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Cache array length
                </strong>
                <p className="ml-4 mt-1">
                  For large arrays in performance-critical code: let len =
                  arr.length; for (let i = 0; i &lt; len; i++)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Prefer array methods when appropriate
                </strong>
                <p className="ml-4 mt-1">
                  Use forEach(), map(), filter(), etc. for cleaner functional
                  code.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Avoid labels if possible
                </strong>
                <p className="ml-4 mt-1">
                  Extract nested loops into functions with early returns
                  instead.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Be careful with loop variable scope
                </strong>
                <p className="ml-4 mt-1">
                  Use let instead of var in loops to avoid scope issues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
