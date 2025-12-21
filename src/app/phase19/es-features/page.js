"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ESFeaturesPage() {
  return (
    <SectionLayout
      title="19.1 ES2015 - ES2024 Features - Complete Timeline"
      description="Complete timeline of all JavaScript features from ES6 to ES2024 (10 years of evolution)"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📅 Complete ES Features Timeline (2015-2024)
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            A comprehensive chronological guide to <strong>10 years</strong> of
            JavaScript evolution, from ES2015 (ES6) through ES2024 (ES15). Every
            major feature, method, and syntax addition documented with examples.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            {[
              "ES2015 (25+ features)",
              "ES2016 (2 features)",
              "ES2017 (8 features)",
              "ES2018 (9 features)",
              "ES2019 (9 features)",
              "ES2020 (10 features)",
              "ES2021 (7 features)",
              "ES2022 (9 features)",
              "ES2023 (7 features)",
              "ES2024 (10+ features)",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-orange-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* ES2015 */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 ES2015 (ES6) - The Big Release
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">ES2015:</strong> The most
              significant JavaScript update ever. Introduced 25+ major features
              that transformed the language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              "let & const",
              "Arrow functions",
              "Classes",
              "Template literals",
              "Destructuring",
              "Default params",
              "Rest/Spread",
              "for...of",
              "Promises",
              "Modules",
              "Symbol",
              "Map & Set",
              "Proxy & Reflect",
              "Generators",
              "Typed Arrays",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-sm text-blue-300"
              >
                ✅ {feature}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <CodePlayground
              title="ES2015 Key Features Demo"
              initialCode={`// 1. let and const
let mutable = "can change";
const immutable = "cannot reassign";

// 2. Arrow functions
const add = (a, b) => a + b;
console.log("Arrow:", add(5, 3));

// 3. Template literals
const name = "Alice";
console.log(\`Hello, \${name}!\`);

// 4. Destructuring
const [x, y] = [1, 2];
const { prop } = { prop: "value" };
console.log("\\nDestructure:", x, y, prop);

// 5. Default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}\`;
}
console.log(greet()); // "Hello, Guest"

// 6. Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("\\nRest:", sum(1, 2, 3, 4)); // 10

// 7. Spread operator
const arr = [1, 2, 3];
console.log("Spread:", [...arr, 4, 5]);

// 8. Object enhancements
const obj = { x, y, method() {} };
console.log("\\nShorthand:", obj);

// 9. for...of
for (const num of [1, 2, 3]) {
  console.log("for...of:", num);
}

// 10. Promise
Promise.resolve(42).then(v => console.log("\\nPromise:", v));

// 11. Map & Set
const map = new Map([["key", "value"]]);
const set = new Set([1, 2, 2, 3]);
console.log("\\nSet:", [...set]); // [1, 2, 3]`}
            />
          </div>
        </section>

        {/* ES2016 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2016 (ES7) - Small but Powerful
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2016 Features"
              initialCode={`// 1. Array.prototype.includes()
const arr = [1, 2, 3, 4, 5];

console.log("includes(3):", arr.includes(3)); // true
console.log("includes(6):", arr.includes(6)); // false

// Better than indexOf
console.log("\\nWith NaN:");
console.log("[NaN].includes(NaN):", [NaN].includes(NaN)); // true
console.log("[NaN].indexOf(NaN):", [NaN].indexOf(NaN)); // -1 (can't find!)

// 2. Exponentiation operator (**)
console.log("\\nExponentiation:");
console.log("2 ** 3:", 2 ** 3); // 8
console.log("5 ** 2:", 5 ** 2); // 25
console.log("2 ** 10:", 2 ** 10); // 1024

// vs Math.pow
console.log("\\nSame as Math.pow:");
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8

// Exponentiation assignment
let x = 2;
x **= 3;
console.log("x **= 3:", x); // 8

console.log("\\nES2016 Summary:");
console.log("- Array.prototype.includes()");
console.log("- Exponentiation operator (**)");`}
            />
          </div>
        </section>

        {/* ES2017 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2017 (ES8) - Async Revolution
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2017 Features"
              initialCode={`// 1. Async/await
async function fetchData() {
  const result = await Promise.resolve("Data");
  return result;
}

fetchData().then(data => console.log("async/await:", data));

// 2. Object.values()
const obj = { a: 1, b: 2, c: 3 };
console.log("\\nObject.values:", Object.values(obj)); // [1, 2, 3]

// 3. Object.entries()
console.log("Object.entries:", Object.entries(obj)); // [["a",1], ["b",2]...]

// 4. Object.getOwnPropertyDescriptors()
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log("\\nDescriptors:", descriptors);

// 5. String padding
console.log("\\nString padding:");
console.log("'5'.padStart(3, '0'):", "5".padStart(3, "0")); // "005"
console.log("'5'.padEnd(3, '0'):", "5".padEnd(3, "0")); // "500"

// 6. Trailing commas in function params
function withTrailing(a, b,) { // Trailing comma OK
  return a + b;
}
console.log("\\nTrailing comma:", withTrailing(1, 2,)); // 3

console.log("\\nES2017 Summary:");
console.log("- async/await ⭐");
console.log("- Object.values/entries()");
console.log("- String padding");
console.log("- Trailing commas");`}
            />
          </div>
        </section>

        {/* ES2018 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2018 (ES9) - Async & RegExp Improvements
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2018 Features"
              initialCode={`// 1. Object rest/spread
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log("Rest:", rest); // { b: 2, c: 3 }

const newObj = { ...obj, d: 4 };
console.log("Spread:", newObj);

// 2. for await...of
async function demo() {
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
  
  console.log("\\nfor await...of:");
  for await (const value of promises) {
    console.log("  " + value);
  }
}
demo();

// 3. Promise.finally()
Promise.resolve("success")
  .finally(() => console.log("\\nfinally() runs"));

// 4. RegExp named groups
const regex = /(?<year>\\d{4})-(?<month>\\d{2})/;
const match = "2024-10".match(regex);
console.log("\\nNamed groups:", match.groups); // {year: "2024", month: "10"}

// 5. RegExp lookbehind
const text = "$100 €200";
const dollars = text.match(/(?<=\\$)\\d+/g);
console.log("\\nLookbehind:", dollars); // ["100"]

// 6. RegExp s (dotAll) flag
console.log("\\ns flag:");
console.log(/a.b/s.test("a\\nb")); // true (. matches \\n)

console.log("\\nES2018 Summary:");
console.log("- Object rest/spread");
console.log("- for await...of");
console.log("- Promise.finally()");
console.log("- RegExp improvements");`}
            />
          </div>
        </section>

        {/* ES2019 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2019 (ES10) - Array & Object Improvements
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2019 Features"
              initialCode={`// 1. Array.flat()
const nested = [1, [2, [3, [4]]]];
console.log("flat():", nested.flat()); // [1, 2, [3, [4]]]
console.log("flat(2):", nested.flat(2)); // [1, 2, 3, [4]]
console.log("flat(Infinity):", nested.flat(Infinity)); // [1, 2, 3, 4]

// 2. Array.flatMap()
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log("\\nflatMap:", result); // [1, 2, 2, 4, 3, 6]

// 3. Object.fromEntries()
const entries = [["a", 1], ["b", 2]];
const obj = Object.fromEntries(entries);
console.log("\\nfromEntries:", obj); // {a: 1, b: 2}

// 4. String trimStart/trimEnd
const str = "   hello   ";
console.log("\\ntrimStart:", str.trimStart()); // "hello   "
console.log("trimEnd:", str.trimEnd()); // "   hello"

// 5. Optional catch binding
try {
  throw new Error("test");
} catch { // No (e) needed!
  console.log("\\nCaught (no binding)");
}

// 6. Symbol.description
const sym = Symbol("my symbol");
console.log("\\nSymbol description:", sym.description); // "my symbol"

console.log("\\nES2019 Summary:");
console.log("- Array flat/flatMap");
console.log("- Object.fromEntries");
console.log("- String trim methods");
console.log("- Optional catch binding");`}
            />
          </div>
        </section>

        {/* ES2020 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2020 (ES11) - Major Additions
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2020 Features"
              initialCode={`// 1. BigInt
const big = 9007199254740991n;
console.log("BigInt:", big + 1n);

// 2. Nullish coalescing (??)
const value1 = null ?? "default";
const value2 = 0 ?? "default";
console.log("\\nNullish coalescing:");
console.log("null ?? 'default':", value1); // "default"
console.log("0 ?? 'default':", value2); // 0 (not null/undefined!)

// vs OR
console.log("0 || 'default':", 0 || "default"); // "default" (0 is falsy)

// 3. Optional chaining (?.)
const user = { name: "Alice" };
console.log("\\nOptional chaining:");
console.log("user?.name:", user?.name); // "Alice"
console.log("user?.address?.city:", user?.address?.city); // undefined

// 4. Promise.allSettled()
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("error")
]).then(results => console.log("\\nallSettled:", results.length)); // 2

// 5. Dynamic import()
console.log("\\ndynamic import:");
console.log("import('./module.js').then(...)");

// 6. globalThis
console.log("\\nglobalThis:", typeof globalThis); // "object"

// 7. String.matchAll()
const text = "test1 test2";
const matches = [...text.matchAll(/test\\d/g)];
console.log("\\nmatchAll:", matches.length); // 2

console.log("\\nES2020 Summary:");
console.log("- BigInt ⭐");
console.log("- ?? and ?. operators ⭐");
console.log("- Promise.allSettled()");
console.log("- Dynamic import()");
console.log("- globalThis");`}
            />
          </div>
        </section>

        {/* ES2021 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2021 (ES12) - String & Logic Improvements
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2021 Features"
              initialCode={`// 1. String.replaceAll()
const text = "hello world hello";
console.log("replaceAll:", text.replaceAll("hello", "hi"));
// "hi world hi"

// vs replace (only first match)
console.log("replace:", text.replace("hello", "hi"));
// "hi world hello"

// 2. Promise.any()
Promise.any([
  Promise.reject("error 1"),
  Promise.resolve("success"),
  Promise.reject("error 2")
]).then(result => console.log("\\nPromise.any:", result)); // "success"

// 3. AggregateError
const errors = [new Error("Error 1"), new Error("Error 2")];
const aggError = new AggregateError(errors, "Multiple errors");
console.log("\\nAggregateError:", aggError.errors.length);

// 4. Logical assignment operators
let a = null;
let b = 5;
let c = 0;

a ||= 10; // a = a || 10
b &&= 20; // b = b && 20
c ??= 15; // c = c ?? 15

console.log("\\nLogical assignment:");
console.log("a ||= 10:", a); // 10
console.log("b &&= 20:", b); // 20
console.log("c ??= 15:", c); // 0 (not null/undefined)

// 5. Numeric separators
const million = 1_000_000;
const billion = 1_000_000_000;
console.log("\\nNumeric separators:");
console.log("1_000_000:", million);
console.log("0b1010_0001:", 0b1010_0001);

console.log("\\nES2021 Summary:");
console.log("- String.replaceAll()");
console.log("- Promise.any()");
console.log("- Logical assignment (||=, &&=, ??=)");
console.log("- Numeric separators");`}
            />
          </div>
        </section>

        {/* ES2022 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2022 (ES13) - Class Fields & Top-Level Await
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2022 Features"
              initialCode={`// 1. Class fields (public)
class Counter {
  count = 0; // Public field
  
  increment() {
    this.count++;
  }
}

const counter = new Counter();
console.log("Class field:", counter.count);

// 2. Private fields and methods
class Secret {
  #private = "secret";
  
  #privateMethod() {
    return this.#private;
  }
  
  getSecret() {
    return this.#privateMethod();
  }
}

const secret = new Secret();
console.log("\\nPrivate:", secret.getSecret());
// console.log(secret.#private); // SyntaxError!

// 3. Static fields and methods
class Config {
  static version = "1.0.0";
  static #apiKey = "secret";
  
  static getVersion() {
    return this.version;
  }
}

console.log("\\nStatic:", Config.version);

// 4. Static initialization blocks
class App {
  static config;
  
  static {
    this.config = { initialized: true };
    console.log("\\nStatic block executed");
  }
}

// 5. Top-level await (in modules)
console.log("\\nTop-level await:");
console.log("await can be used at top level in modules");
// const data = await fetch('/api');

// 6. .at() method
const arr = [1, 2, 3, 4, 5];
console.log("\\nat() method:");
console.log("arr.at(-1):", arr.at(-1)); // 5
console.log("arr.at(-2):", arr.at(-2)); // 4
console.log("'hello'.at(-1):", "hello".at(-1)); // "o"

// 7. Object.hasOwn()
const obj = { prop: "value" };
console.log("\\nObject.hasOwn:");
console.log("hasOwn('prop'):", Object.hasOwn(obj, "prop")); // true
console.log("hasOwn('toString'):", Object.hasOwn(obj, "toString")); // false

// 8. Error.cause
const error = new Error("Failed", { cause: new Error("Root cause") });
console.log("\\nError.cause:", error.cause.message);`}
            />
          </div>
        </section>

        {/* ES2023 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2023 (ES14) - Array Immutable Methods
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2023 Features - Immutable Array Methods"
              initialCode={`const arr = [3, 1, 4, 1, 5];

// 1. findLast() - find from end
console.log("findLast (> 3):", arr.findLast(x => x > 3)); // 5

// 2. findLastIndex()
console.log("findLastIndex (> 3):", arr.findLastIndex(x => x > 3)); // 4

// 3. toReversed() - immutable reverse
const reversed = arr.toReversed();
console.log("\\ntoReversed:", reversed);
console.log("Original:", arr); // Unchanged!

// 4. toSorted() - immutable sort
const sorted = arr.toSorted();
console.log("\\ntoSorted:", sorted);
console.log("Original:", arr); // Unchanged!

// With comparator
const desc = arr.toSorted((a, b) => b - a);
console.log("toSorted desc:", desc);

// 5. toSpliced() - immutable splice
const spliced = arr.toSpliced(1, 2, 99, 88);
console.log("\\ntoSpliced:", spliced);
console.log("Original:", arr); // Unchanged!

// 6. with() - immutable element update
const updated = arr.with(2, 99);
console.log("\\nwith(2, 99):", updated);
console.log("Original:", arr); // Unchanged!

// Negative index
console.log("with(-1, 99):", arr.with(-1, 99));

console.log("\\nES2023 Summary:");
console.log("- findLast/findLastIndex");
console.log("- toReversed/toSorted/toSpliced");
console.log("- with() ⭐");
console.log("All immutable! (don't modify original)");`}
            />
          </div>
        </section>

        {/* ES2024 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ES2024 (ES15) - Set Operations & Grouping
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ES2024 Features - Set Methods"
              initialCode={`const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Set operations (may need polyfills)
console.log("Set operations:");

// 1-4. Set operations
const checkMethod = (obj, method) => typeof obj[method] === "function";

if (checkMethod(setA, "union")) {
  console.log("union:", [...setA.union(setB)]);
} else {
  console.log("union (polyfill):", [...new Set([...setA, ...setB])]);
}

if (checkMethod(setA, "intersection")) {
  console.log("intersection:", [...setA.intersection(setB)]);
} else {
  console.log("intersection (polyfill):", 
    [...new Set([...setA].filter(x => setB.has(x)))]);
}

if (checkMethod(setA, "difference")) {
  console.log("difference:", [...setA.difference(setB)]);
} else {
  console.log("difference (polyfill):", 
    [...new Set([...setA].filter(x => !setB.has(x)))]);
}

// 5. Promise.withResolvers()
if (typeof Promise.withResolvers === "function") {
  const { promise, resolve } = Promise.withResolvers();
  setTimeout(() => resolve("Done"), 100);
  promise.then(v => console.log("\\nwithResolvers:", v));
} else {
  console.log("\\nPromise.withResolvers (use polyfill)");
}

// 6-7. Object grouping
const items = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "veggie", name: "carrot" }
];

// Object.groupBy (may need polyfill)
if (typeof Object.groupBy === "function") {
  const grouped = Object.groupBy(items, item => item.type);
  console.log("\\nObject.groupBy:", grouped);
} else {
  console.log("\\nObject.groupBy (polyfill available)");
}

console.log("\\nES2024 Summary:");
console.log("- Set operations (7 methods) ⭐");
console.log("- Promise.withResolvers()");
console.log("- Object/Map.groupBy()");
console.log("- Well-formed Unicode strings");`}
            />
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 ES Features Timeline Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Year
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Version
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Key Features
                  </th>
                  <th className="px-3 py-2 text-center text-gray-300 font-semibold">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-xs">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2015</td>
                  <td className="px-3 py-2">ES6</td>
                  <td className="px-3 py-2">
                    let/const, arrows, classes, modules, promises, symbols
                  </td>
                  <td className="px-3 py-2 text-center">25+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2016</td>
                  <td className="px-3 py-2">ES7</td>
                  <td className="px-3 py-2">includes(), ** operator</td>
                  <td className="px-3 py-2 text-center">2</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2017</td>
                  <td className="px-3 py-2">ES8</td>
                  <td className="px-3 py-2">
                    async/await, Object.values/entries, string padding
                  </td>
                  <td className="px-3 py-2 text-center">8</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2018</td>
                  <td className="px-3 py-2">ES9</td>
                  <td className="px-3 py-2">
                    Object rest/spread, for await...of, Promise.finally
                  </td>
                  <td className="px-3 py-2 text-center">9</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2019</td>
                  <td className="px-3 py-2">ES10</td>
                  <td className="px-3 py-2">
                    flat/flatMap, Object.fromEntries, trimStart/End
                  </td>
                  <td className="px-3 py-2 text-center">9</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2020</td>
                  <td className="px-3 py-2">ES11</td>
                  <td className="px-3 py-2">
                    BigInt, ??, ?., Promise.allSettled, globalThis
                  </td>
                  <td className="px-3 py-2 text-center">10</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2021</td>
                  <td className="px-3 py-2">ES12</td>
                  <td className="px-3 py-2">
                    replaceAll, Promise.any, logical assignment, numeric
                    separators
                  </td>
                  <td className="px-3 py-2 text-center">7</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2022</td>
                  <td className="px-3 py-2">ES13</td>
                  <td className="px-3 py-2">
                    Class fields, private methods, top-level await, .at()
                  </td>
                  <td className="px-3 py-2 text-center">9</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2023</td>
                  <td className="px-3 py-2">ES14</td>
                  <td className="px-3 py-2">
                    findLast, toReversed, toSorted, toSpliced, with()
                  </td>
                  <td className="px-3 py-2 text-center">7</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-bold">2024</td>
                  <td className="px-3 py-2">ES15</td>
                  <td className="px-3 py-2">
                    Set methods, Promise.withResolvers, Object.groupBy
                  </td>
                  <td className="px-3 py-2 text-center">10+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 19 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>10 Years of JavaScript Evolution</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-left max-w-6xl mx-auto text-sm">
              <div>
                <div className="text-xl font-bold text-blue-400 mb-1">
                  ES2015
                </div>
                <div className="text-gray-400 text-xs">25+ features</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-400 mb-1">
                  ES2016-19
                </div>
                <div className="text-gray-400 text-xs">28 features</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-400 mb-1">
                  ES2020-21
                </div>
                <div className="text-gray-400 text-xs">17 features</div>
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-400 mb-1">
                  ES2022-23
                </div>
                <div className="text-gray-400 text-xs">16 features</div>
              </div>
              <div>
                <div className="text-xl font-bold text-orange-400 mb-1">
                  ES2024
                </div>
                <div className="text-gray-400 text-xs">10+ features</div>
              </div>
            </div>
            <div className="mt-6 text-gray-300">
              <p className="text-lg">
                <strong className="text-orange-400">90+ Features</strong>{" "}
                documented across 10 years of ECMAScript evolution!
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
              >
                Back to Dashboard
              </a>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
