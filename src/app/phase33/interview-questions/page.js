"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function InterviewQuestionsPage() {
  return (
    <SectionLayout
      title="33.1 JavaScript Interview Questions & Solutions"
      description="Common JavaScript interview questions with multiple solution approaches, optimizations, and best practices"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            💼 Complete JavaScript Interview Questions - Easy to Expert
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            <strong>Comprehensive collection</strong> of JavaScript interview
            questions organized by difficulty level. Covers ALL concepts from
            fundamentals to advanced patterns, including mixed-concept problems.
            Master these and you can solve any JavaScript interview question!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="bg-green-500/20 border border-green-500/30 rounded p-2">
              <div className="text-green-400 font-bold text-sm">
                Level 1: Easy
              </div>
              <div className="text-gray-400 text-xs mt-1">
                Fundamentals, Types, Basics
              </div>
            </div>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded p-2">
              <div className="text-yellow-400 font-bold text-sm">
                Level 2: Intermediate
              </div>
              <div className="text-gray-400 text-xs mt-1">
                Functions, Objects, Closures
              </div>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded p-2">
              <div className="text-orange-400 font-bold text-sm">
                Level 3: Advanced
              </div>
              <div className="text-gray-400 text-xs mt-1">
                Async, Prototypes, Patterns
              </div>
            </div>
            <div className="bg-red-500/20 border border-red-500/30 rounded p-2">
              <div className="text-red-400 font-bold text-sm">
                Level 4: Expert
              </div>
              <div className="text-gray-400 text-xs mt-1">
                Mixed Concepts, Complex
              </div>
            </div>
          </div>
        </div>

        {/* LEVEL 1: EASY - FUNDAMENTALS */}
        <section>
          <div className="bg-green-500/10 border-l-4 border-green-500 rounded p-4 mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-2">
              📚 Level 1: Easy - Fundamentals
            </h2>
            <p className="text-gray-300">
              Variables, types, operators, basic functions, arrays, objects,
              type coercion, hoisting basics
            </p>
          </div>

          {/* Question 1: Type Coercion Basics */}
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 1: Type Coercion Basics
          </h3>
        </section>

        <section>
          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Predict the output of type coercion scenarios. Understand how
              JavaScript converts between types.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Type Coercion Examples"
              initialCode={`// Problem 1: String + Number
console.log("'5' + 3:", "5" + 3); // "53"
console.log("'5' - 3:", "5" - 3); // 2
console.log("'5' * '2':", "5" * "2"); // 10

// Problem 2: Array coercion
console.log("[] + 1:", [] + 1); // "1"
console.log("[1, 2] + 3:", [1, 2] + 3); // "1,23"
console.log("[1] - 1:", [1] - 1); // 0

// Problem 3: Boolean coercion
console.log("true + true:", true + true); // 2
console.log("true + false:", true + false); // 1
console.log("true - false:", true - false); // 1

// Problem 4: null and undefined
console.log("null + 1:", null + 1); // 1
console.log("undefined + 1:", undefined + 1); // NaN
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// Problem 5: Comparison operators
console.log("'0' == false:", "0" == false); // true
console.log("'' == false:", "" == false); // true
console.log("[] == false:", [] == false); // true
console.log("[1] == 1:", [1] == 1); // true

// Best Practice: Always use === for comparisons`}
            />
          </div>
        </section>

        {/* Question 2: Hoisting Basics */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 2: Hoisting Behavior
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Understand hoisting: function declarations vs expressions, var vs
              let/const, and Temporal Dead Zone.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Hoisting Examples"
              initialCode={`// Function hoisting - works!
hoisted(); // "I'm hoisted"

function hoisted() {
  console.log("I'm hoisted");
}

// Variable hoisting with var
console.log("Before:", typeof x); // "undefined" (not ReferenceError)
var x = 5;
console.log("After:", x); // 5

// let/const hoisting (TDZ)
// console.log(y); // ReferenceError: Cannot access before initialization
let y = 10;

// Function expression - NOT hoisted
// notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
  console.log("I'm not hoisted");
};

// Arrow function - NOT hoisted
// arrowNotHoisted(); // TypeError
var arrowNotHoisted = () => {
  console.log("Arrow not hoisted");
};

// Order matters
console.log("\\nOrder example:");
var a = 1;
function a() {}
console.log(typeof a); // "number" (function is hoisted first, then overwritten)`}
            />
          </div>
        </section>

        {/* Question 3: Scope & Variable Shadowing */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 3: Scope & Variable Shadowing
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Understand global, function, and block scope. Variable shadowing
              with var, let, and const.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Scope Examples"
              initialCode={`var globalVar = "global";

function testScope() {
  var functionVar = "function";
  let blockVar = "block (let)";
  
  if (true) {
    var functionScoped = "function scoped";
    let blockScoped = "block scoped";
    const blockConst = "block const";
    
    console.log("Inside block:", functionScoped); // OK
    console.log("Inside block:", blockScoped); // OK
    console.log("Inside block:", blockConst); // OK
  }
  
  console.log("Outside block:", functionScoped); // OK (var is function scoped)
  // console.log(blockScoped); // ReferenceError
  // console.log(blockConst); // ReferenceError
  
  console.log("Global:", globalVar); // "global"
}

testScope();

// Variable shadowing
let shadowed = "outer";
{
  let shadowed = "inner";
  console.log("Inner scope:", shadowed); // "inner"
}
console.log("Outer scope:", shadowed); // "outer"`}
            />
          </div>
        </section>

        {/* Question 4: Array Basics */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 4: Array Methods - Basics
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Use array methods to transform data. Understand map, filter,
              reduce, and their differences.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Array Methods Examples"
              initialCode={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map: Transform each element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Filter: Keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6, 8, 10]

// Reduce: Accumulate to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum); // 55

// Chaining
const result = numbers
  .filter(n => n > 5)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);
console.log("Chained:", result); // 42 (6*2 + 7*2 + 8*2 + 9*2 + 10*2)

// Find vs Filter
const firstEven = numbers.find(n => n % 2 === 0);
console.log("First even:", firstEven); // 2 (returns first match)

const allEvens = numbers.filter(n => n % 2 === 0);
console.log("All evens:", allEvens); // [2, 4, 6, 8, 10] (returns all matches)

// Some vs Every
const hasEven = numbers.some(n => n % 2 === 0);
console.log("Has even:", hasEven); // true

const allEven = numbers.every(n => n % 2 === 0);
console.log("All even:", allEven); // false`}
            />
          </div>
        </section>

        {/* Question 5: Object Basics */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 5: Object Manipulation - Basics
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Manipulate objects: access properties, iterate, copy, merge. Use
              Object methods.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Object Operations"
              initialCode={`const obj = { a: 1, b: 2, c: 3 };

// Get keys, values, entries
console.log("Keys:", Object.keys(obj)); // ["a", "b", "c"]
console.log("Values:", Object.values(obj)); // [1, 2, 3]
console.log("Entries:", Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Create from entries
const newObj = Object.fromEntries([["x", 10], ["y", 20]]);
console.log("From entries:", newObj); // { x: 10, y: 20 }

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged1 = Object.assign({}, obj1, obj2);
const merged2 = { ...obj1, ...obj2 };
console.log("Merged:", merged1, merged2); // Both same

// Copy object (shallow)
const copied = { ...obj };
const copied2 = Object.assign({}, obj);

// Check properties
console.log("Has 'a':", "a" in obj); // true
console.log("hasOwnProperty:", obj.hasOwnProperty("a")); // true
console.log("Object.hasOwn:", Object.hasOwn(obj, "a")); // true (ES2022)`}
            />
          </div>
        </section>

        {/* Question 6: Data Transformation - Your Example */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 6: Merge Employee Data (Your Example)
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Given two arrays: <code className="text-green-400">salaries</code>{" "}
              and <code className="text-green-400">positions</code>, combine
              them into a single array where each employee has their total
              salary and position.
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-300 text-sm space-y-1">
              <li>An employee can have multiple salary entries (sum them)</li>
              <li>Each employee has one position</li>
              <li>
                Return an array of objects with employeeId, salary, and position
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Approach 1: Traditional Loop (Given Example)"
              initialCode={`// Given arrays
const salaries = [
  { employeeId: 1, salary: 5000 },
  { employeeId: 2, salary: 6000 },
  { employeeId: 1, salary: 3000 },
  { employeeId: 3, salary: 7000 }
];

const positions = [
  { employeeId: 1, position: "Developer" },
  { employeeId: 2, position: "Manager" },
  { employeeId: 3, position: "Designer" }
];

// Approach 1: Traditional for loops
function mergeEmployeeData1(salaries, positions) {
  const resultObj = {};
  
  // Add salaries
  for (let i = 0; i < salaries.length; i++) {
    const { employeeId, salary } = salaries[i];
    if (!resultObj[employeeId]) {
      resultObj[employeeId] = {
        employeeId,
        salary: 0,
        position: ""
      };
    }
    resultObj[employeeId].salary += salary;
  }
  
  // Add positions
  for (let i = 0; i < positions.length; i++) {
    const { employeeId, position } = positions[i];
    if (resultObj[employeeId]) {
      resultObj[employeeId].position = position;
    }
  }
  
  // Convert object to array
  const finalArray = [];
  for (let key in resultObj) {
    finalArray.push(resultObj[key]);
  }
  
  return finalArray;
}

console.log("Approach 1:", mergeEmployeeData1(salaries, positions));
// Time: O(n + m), Space: O(n)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Approach 2: Modern ES6+ (Best Practice)"
              initialCode={`const salaries = [
  { employeeId: 1, salary: 5000 },
  { employeeId: 2, salary: 6000 },
  { employeeId: 1, salary: 3000 },
  { employeeId: 3, salary: 7000 }
];

const positions = [
  { employeeId: 1, position: "Developer" },
  { employeeId: 2, position: "Manager" },
  { employeeId: 3, position: "Designer" }
];

// Approach 2: Modern ES6+ - More concise and readable
function mergeEmployeeData2(salaries, positions) {
  // Create Map for O(1) lookups
  const salaryMap = new Map();
  
  // Aggregate salaries
  salaries.forEach(({ employeeId, salary }) => {
    const current = salaryMap.get(employeeId) || { employeeId, salary: 0 };
    current.salary += salary;
    salaryMap.set(employeeId, current);
  });
  
  // Add positions
  positions.forEach(({ employeeId, position }) => {
    const employee = salaryMap.get(employeeId);
    if (employee) {
      employee.position = position;
    }
  });
  
  // Convert to array
  return Array.from(salaryMap.values());
}

console.log("Approach 2:", mergeEmployeeData2(salaries, positions));

// Approach 3: Using reduce (Functional Style)
function mergeEmployeeData3(salaries, positions) {
  // Aggregate salaries using reduce
  const salaryMap = salaries.reduce((acc, { employeeId, salary }) => {
    acc[employeeId] = (acc[employeeId] || 0) + salary;
    return acc;
  }, {});
  
  // Create position map
  const positionMap = positions.reduce((acc, { employeeId, position }) => {
    acc[employeeId] = position;
    return acc;
  }, {});
  
  // Combine into final array
  return Object.entries(salaryMap).map(([employeeId, salary]) => ({
    employeeId: parseInt(employeeId),
    salary,
    position: positionMap[employeeId] || ""
  }));
}

console.log("Approach 3:", mergeEmployeeData3(salaries, positions));

// Comparison:
// Approach 1: Traditional, explicit, easy to understand
// Approach 2: Modern, uses Map, clean and efficient
// Approach 3: Functional, most concise, uses reduce`}
            />
          </div>
        </section>

        {/* Question 7: Tree Traversal - Recursion Basics */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 7: Tree Traversal (Your Example) - Recursion Basics
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Given a tree structure, extract all string values using recursion.
              Understand basic recursive patterns.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Approach 1: Traditional Recursion (Given Example)"
              initialCode={`const tree = {
  value: "A",
  children: [
    "B",
    {
      value: "C",
      children: ["D", "E"]
    },
    {
      value: "F",
      children: [
        {
          value: "G",
          children: ["H"]
        }
      ]
    }
  ]
};

// Approach 1: Traditional recursion
function extract1(value) {
  // String node value
  if (typeof value === "string") {
    console.log(value);
    return;
  }

  // Array of children
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      extract1(value[i]);
    }
    return;
  }

  // Object node
  if (typeof value === "object" && value !== null) {
    console.log(value.value);

    if (value.children) {
      extract1(value.children);
    }
  }
}

console.log("Approach 1:");
extract1(tree);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Approach 2: Modern ES6+ (Best Practice)"
              initialCode={`const tree = {
  value: "A",
  children: [
    "B",
    {
      value: "C",
      children: ["D", "E"]
    },
    {
      value: "F",
      children: [
        {
          value: "G",
          children: ["H"]
        }
      ]
    }
  ]
};

// Approach 2: Modern ES6+ with for...of and arrow functions
function extract2(node) {
  const values = [];
  
  function traverse(current) {
    if (typeof current === "string") {
      values.push(current);
      return;
    }
    
    if (Array.isArray(current)) {
      current.forEach(item => traverse(item));
      return;
    }
    
    if (current && typeof current === "object") {
      if (current.value) {
        values.push(current.value);
      }
      if (current.children) {
        traverse(current.children);
      }
    }
  }
  
  traverse(node);
  return values;
}

console.log("Approach 2:", extract2(tree));

// Approach 3: Functional style with flatMap
function extract3(node) {
  if (typeof node === "string") {
    return [node];
  }
  
  if (Array.isArray(node)) {
    return node.flatMap(extract3);
  }
  
  if (node && typeof node === "object") {
    const values = node.value ? [node.value] : [];
    const children = node.children ? extract3(node.children) : [];
    return [...values, ...children];
  }
  
  return [];
}

console.log("Approach 3:", extract3(tree));

// Approach 4: Iterative (Avoid stack overflow for deep trees)
function extract4(root) {
  const values = [];
  const stack = [root];
  
  while (stack.length > 0) {
    const current = stack.pop();
    
    if (typeof current === "string") {
      values.push(current);
    } else if (Array.isArray(current)) {
      stack.push(...current.reverse());
    } else if (current && typeof current === "object") {
      if (current.value) {
        values.push(current.value);
      }
      if (current.children) {
        stack.push(current.children);
      }
    }
  }
  
  return values;
}

console.log("Approach 4 (Iterative):", extract4(tree));`}
            />
          </div>
        </section>

        {/* Question 8: Flatten Array - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 8: Flatten Nested Array (Recursion)
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Flatten a nested array of any depth using recursion. Understand
              recursive array manipulation.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Multiple Approaches"
              initialCode={`const nested = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];

// Approach 1: Recursive
function flatten1(arr) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatten1(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log("Approach 1 (Recursive):", flatten1(nested));

// Approach 2: Using reduce (Functional)
function flatten2(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten2(val) : val);
  }, []);
}

console.log("Approach 2 (Reduce):", flatten2(nested));

// Approach 3: Built-in flat (ES2019) - Best for production
function flatten3(arr) {
  return arr.flat(Infinity);
}

console.log("Approach 3 (flat):", flatten3(nested));

// Approach 4: Iterative with stack
function flatten4(arr) {
  const result = [];
  const stack = [...arr];
  
  while (stack.length > 0) {
    const current = stack.pop();
    
    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      result.unshift(current);
    }
  }
  
  return result;
}

console.log("Approach 4 (Iterative):", flatten4(nested));

// Performance comparison:
// - flat(Infinity): Fastest, native implementation
// - Recursive: Clean but can cause stack overflow
// - Iterative: No stack overflow, but more complex`}
            />
          </div>
        </section>

        {/* Question 9: Deep Clone - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 9: Deep Clone Object
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Create a deep copy of an object handling nested objects, arrays,
              dates, and circular references.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Multiple Approaches"
              initialCode={`const original = {
  name: "John",
  age: 30,
  address: {
    city: "NYC",
    zip: 10001
  },
  hobbies: ["reading", "coding"],
  date: new Date()
};

// Approach 1: JSON.parse/stringify (Limited - no functions, dates, etc.)
function deepClone1(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const cloned1 = deepClone1(original);
console.log("Approach 1:", cloned1);
console.log("Date is string?", typeof cloned1.date); // string, not Date

// Approach 2: Recursive with proper type handling
function deepClone2(obj) {
  // Handle null
  if (obj === null) return null;
  
  // Handle Date
  if (obj instanceof Date) return new Date(obj);
  
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone2(item));
  }
  
  // Handle Object
  if (typeof obj === "object") {
    const cloned = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone2(obj[key]);
      }
    }
    return cloned;
  }
  
  // Primitive types
  return obj;
}

const cloned2 = deepClone2(original);
console.log("Approach 2:", cloned2);
console.log("Date is Date?", cloned2.date instanceof Date); // true

// Approach 3: Structured Clone (Modern - ES2022)
function deepClone3(obj) {
  return structuredClone(obj);
}

const cloned3 = deepClone3(original);
console.log("Approach 3 (structuredClone):", cloned3);

// Approach 4: Using Map to handle circular references
function deepClone4(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  
  // Handle circular references
  if (map.has(obj)) return map.get(obj);
  
  const cloned = Array.isArray(obj) ? [] : {};
  map.set(obj, cloned);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone4(obj[key], map);
    }
  }
  
  return cloned;
}

const circular = { a: 1 };
circular.self = circular;
console.log("Approach 4 (handles circular):", deepClone4(circular));`}
            />
          </div>
        </section>

        {/* Question 10: Debounce & Throttle - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 10: Debounce & Throttle
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Implement debounce and throttle using closures and higher-order
              functions. Essential for performance optimization.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Debounce & Throttle Implementations"
              initialCode={`// Debounce: Execute function after delay, reset on each call
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttle: Execute function at most once per delay period
function throttle(func, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example usage
let callCount = 0;
const expensiveFunction = () => {
  callCount++;
  console.log("Called", callCount, "times");
};

const debounced = debounce(expensiveFunction, 300);
const throttled = throttle(expensiveFunction, 300);

console.log("Debounce test:");
// Will only execute once after 300ms of no calls
debounced();
debounced();
debounced();

console.log("\\nThrottle test:");
// Will execute immediately, then at most once every 300ms
throttled();
throttled();
throttled();

// Advanced: Throttle with leading and trailing options
function advancedThrottle(func, delay, options = {}) {
  let timeoutId;
  let lastCall = 0;
  const { leading = true, trailing = true } = options;
  
  return function(...args) {
    const now = Date.now();
    const remaining = delay - (now - lastCall);
    
    if (remaining <= 0 || remaining > delay) {
      if (leading) {
        lastCall = now;
        func.apply(this, args);
      }
    } else if (trailing) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func.apply(this, args);
      }, remaining);
    }
  };
}

console.log("\\nAdvanced throttle:");
const advThrottled = advancedThrottle(expensiveFunction, 300, {
  leading: true,
  trailing: true
});`}
            />
          </div>
        </section>

        {/* Question 32: Promise Implementation - Level 3 Advanced */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟠 Question 32: Implement Promise from Scratch
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="orange">
            <p className="text-gray-300">
              Implement a Promise class with then/catch. Understand async
              programming internals.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Custom Promise Implementation"
              initialCode={`// Simplified Promise implementation
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };
    
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        try {
          const result = onFulfilled ? onFulfilled(this.value) : this.value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else if (this.state === "rejected") {
        try {
          const result = onRejected ? onRejected(this.reason) : this.reason;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        this.onFulfilledCallbacks.push(() => {
          try {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
        
        this.onRejectedCallbacks.push(() => {
          try {
            const result = onRejected ? onRejected(this.reason) : this.reason;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Example usage
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise
  .then(value => {
    console.log("Value:", value);
    return value.toUpperCase();
  })
  .then(value => {
    console.log("Uppercase:", value);
  })
  .catch(error => {
    console.error("Error:", error);
  });

console.log("Promise created, waiting for resolution...");`}
            />
          </div>
        </section>

        {/* Question 14: Currying - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 14: Implement Currying
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Convert a function that takes multiple arguments into a sequence
              of functions. Functional programming pattern.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Currying Implementation"
              initialCode={`// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example: Add function
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log("Curried add:");
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// Real-world example: Event handler with preset values
const createEventHandler = curry((eventType, element, handler) => {
  element.addEventListener(eventType, handler);
});

const addClickHandler = createEventHandler("click");
const addMouseOverHandler = createEventHandler("mouseover");

// Usage
// addClickHandler(element, handler);
// addMouseOverHandler(element, handler);

// Partial application vs currying
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

const multiply = (a, b, c) => a * b * c;
const multiplyBy2 = partial(multiply, 2);
console.log("\\nPartial application:");
console.log(multiplyBy2(3, 4)); // 24`}
            />
          </div>
        </section>

        {/* Question 15: Array Methods Implementation - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 15: Implement Array Methods
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Implement map, filter, reduce, forEach from scratch. Understand
              how these methods work internally.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Array Methods Implementation"
              initialCode={`// Implement map
Array.prototype.myMap = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// Implement filter
Array.prototype.myFilter = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Implement reduce
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;
  
  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }
  
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  
  return accumulator;
};

// Implement forEach
Array.prototype.myForEach = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};

// Test implementations
const numbers = [1, 2, 3, 4, 5];

console.log("Map (double):", numbers.myMap(x => x * 2));
console.log("Filter (even):", numbers.myFilter(x => x % 2 === 0));
console.log("Reduce (sum):", numbers.myReduce((acc, x) => acc + x, 0));
console.log("Reduce (product):", numbers.myReduce((acc, x) => acc * x, 1));

let sum = 0;
numbers.myForEach(x => { sum += x; });
console.log("ForEach sum:", sum);`}
            />
          </div>
        </section>

        {/* Question 16: Memoization - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 16: Memoization
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Implement memoization using closures to cache function results.
              Optimization technique using closures and Maps.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Memoization Implementation"
              initialCode={`// Basic memoization
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log("Cache hit!");
      return cache.get(key);
    }
    
    console.log("Computing...");
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example: Expensive fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);

console.log("First call (computes):", memoizedFib(10));
console.log("Second call (cached):", memoizedFib(10));

// Advanced: Memoization with custom key generator
function advancedMemoize(fn, keyGenerator) {
  const cache = new Map();
  
  return function(...args) {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Memoization decorator for recursive functions
function memoizeRecursive(fn) {
  const cache = new Map();
  
  function memoized(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  }
  
  return memoized;
}

// Optimized fibonacci with memoization
const optimizedFib = memoizeRecursive(function(n) {
  if (n <= 1) return n;
  return optimizedFib(n - 1) + optimizedFib(n - 2);
});

console.log("\\nOptimized fibonacci:");
console.log(optimizedFib(40)); // Fast!`}
            />
          </div>
        </section>

        {/* Question 33: Event Emitter - Level 3 Advanced */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟠 Question 33: Event Emitter
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="orange">
            <p className="text-gray-300">
              Implement EventEmitter class. Understand observer pattern and
              event-driven architecture.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Event Emitter Implementation"
              initialCode={`class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  
  off(event, listenerToRemove) {
    if (!this.events[event]) return this;
    
    this.events[event] = this.events[event].filter(
      listener => listener !== listenerToRemove
    );
    
    return this;
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return false;
    
    this.events[event].forEach(listener => {
      listener(...args);
    });
    
    return true;
  }
  
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    
    this.on(event, onceWrapper);
    return this;
  }
  
  removeAllListeners(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }
}

// Example usage
const emitter = new EventEmitter();

const listener1 = (data) => console.log("Listener 1:", data);
const listener2 = (data) => console.log("Listener 2:", data);

emitter.on("test", listener1);
emitter.on("test", listener2);
emitter.once("once", (data) => console.log("Once listener:", data));

console.log("Emitting 'test':");
emitter.emit("test", "Hello");

console.log("\\nEmitting 'once' twice:");
emitter.emit("once", "First");
emitter.emit("once", "Second"); // Won't fire

console.log("\\nRemoving listener1:");
emitter.off("test", listener1);
emitter.emit("test", "After removal");`}
            />
          </div>
        </section>

        {/* LEVEL 2: INTERMEDIATE - CORE CONCEPTS */}
        <section>
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">
              📖 Level 2: Intermediate - Core Concepts
            </h2>
            <p className="text-gray-300">
              Functions, closures, this binding, prototypes, call/apply/bind,
              destructuring, spread, classes
            </p>
          </div>

          {/* Question 11: Closure - Classic Problem */}
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 11: Classic Closure Problem
          </h3>
        </section>

        <section>
          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Fix the classic setTimeout in loop problem. Understand closures
              and how to preserve variable values.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Closure Problem & Solutions"
              initialCode={`// ❌ Problem: All log 3, 3, 3
console.log("Problem with var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var i:", i); // 3, 3, 3
  }, 100);
}

// ✅ Solution 1: Use let (block scope)
console.log("\\nSolution 1 - let:");
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let i:", i); // 0, 1, 2
  }, 200);
}

// ✅ Solution 2: IIFE (Immediately Invoked Function Expression)
console.log("\\nSolution 2 - IIFE:");
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => {
      console.log("IIFE i:", j); // 0, 1, 2
    }, 300);
  })(i);
}

// ✅ Solution 3: Bind
console.log("\\nSolution 3 - bind:");
for (var i = 0; i < 3; i++) {
  setTimeout(function(j) {
    console.log("bind i:", j); // 0, 1, 2
  }.bind(null, i), 400);
}

// ✅ Solution 4: setTimeout with third parameter
console.log("\\nSolution 4 - setTimeout third param:");
for (var i = 0; i < 3; i++) {
  setTimeout((j) => {
    console.log("setTimeout param i:", j); // 0, 1, 2
  }, 500, i);
}`}
            />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 12: this Binding Scenarios
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Understand different this binding contexts: global, method, arrow
              functions, call/apply/bind, and class methods.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="this Binding Examples"
              initialCode={`// Problem 1: Method extraction
const obj = {
  name: "Object",
  getName: function() {
    return this.name;
  }
};

console.log("obj.getName():", obj.getName()); // "Object"
const extracted = obj.getName;
console.log("extracted():", extracted()); // undefined (lost context)

// Solution: bind
const bound = obj.getName.bind(obj);
console.log("bound():", bound()); // "Object"

// Problem 2: Arrow function in object
const obj2 = {
  name: "Object",
  getName: () => {
    return this.name; // undefined (lexical this)
  }
};

console.log("Arrow function:", obj2.getName()); // undefined

// Problem 3: Callback losing context
class Button {
  constructor(name) {
    this.name = name;
  }
  
  click() {
    console.log(this.name + " clicked");
  }
  
  addEventListener() {
    setTimeout(this.click, 100); // undefined clicked
  }
  
  addEventListenerFixed() {
    setTimeout(this.click.bind(this), 200);
    setTimeout(() => this.click(), 300);
    const self = this;
    setTimeout(function() {
      self.click();
    }, 400);
  }
}

const btn = new Button("MyButton");
btn.addEventListener();
btn.addEventListenerFixed();

// Problem 4: call, apply, bind
function greet(greeting, punctuation) {
  return greeting + " " + this.name + punctuation;
}

const person = { name: "John" };
console.log("Call:", greet.call(person, "Hello", "!"));
console.log("Apply:", greet.apply(person, ["Hi", "?"]));
const boundGreet = greet.bind(person, "Hey");
console.log("Bind:", boundGreet("."));`}
            />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 13: Type Coercion Quirks (Intermediate)
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Predict outputs of tricky type coercion scenarios. Understand when
              JavaScript converts types and why.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Type Coercion Scenarios"
              initialCode={`// Problem 1: Array + Number
console.log("[] + 1:", [] + 1); // "1"
console.log("[1, 2] + 3:", [1, 2] + 3); // "1,23"
console.log("[1] - 1:", [1] - 1); // 0

// Problem 2: Object coercion
console.log("{} + []:", {} + []); // "[object Object]"
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("{} - []:", {} - []); // NaN

// Problem 3: String + Number
console.log("'5' + 3:", "5" + 3); // "53"
console.log("'5' - 3:", "5" - 3); // 2
console.log("'5' * '2':", "5" * "2"); // 10

// Problem 4: Boolean coercion
console.log("true + true:", true + true); // 2
console.log("true + false:", true + false); // 1
console.log("true - false:", true - false); // 1

// Problem 5: null and undefined
console.log("null + 1:", null + 1); // 1
console.log("undefined + 1:", undefined + 1); // NaN
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// Problem 6: Comparison operators
console.log("'0' == false:", "0" == false); // true
console.log("'' == false:", "" == false); // true
console.log("[] == false:", [] == false); // true
console.log("[1] == 1:", [1] == 1); // true

// Problem 7: Object comparisons
const obj1 = {};
const obj2 = {};
console.log("obj1 == obj2:", obj1 == obj2); // false
console.log("obj1 === obj2:", obj1 === obj2); // false
console.log("obj1 == obj1:", obj1 == obj1); // true

// Best Practice: Always use === and explicit type conversion
function safeAdd(a, b) {
  return Number(a) + Number(b);
}

console.log("Safe add:", safeAdd("5", "3")); // 8`}
            />
          </div>
        </section>

        {/* Question 19: Classes & Private Fields - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 19: ES6 Classes & Private Fields
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Use ES6 classes, inheritance, private fields, static members, and
              getters/setters. Modern OOP in JavaScript.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Classes & Private Fields"
              initialCode={`// Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return "Hello, I'm " + this.name;
  }
  
  static create(name, age) {
    return new Person(name, age);
  }
}

const person = new Person("John", 30);
console.log("Person:", person.greet());

// Inheritance
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  
  greet() {
    return super.greet() + ", " + this.role;
  }
}

const emp = new Employee("Jane", 25, "Developer");
console.log("Employee:", emp.greet());

// Private fields (ES2022)
class BankAccount {
  #balance = 0;
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log("Balance:", account.getBalance());

// Getters and Setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area() {
    return this.width * this.height;
  }
  
  set area(value) {
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area);`}
            />
          </div>
        </section>

        {/* Question 20: Optional Chaining & Nullish Coalescing - Level 1 Easy */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟢 Question 20: Optional Chaining & Nullish Coalescing
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="green">
            <p className="text-gray-300">
              Use optional chaining (?.) and nullish coalescing (??) operators
              for safe property access and default values.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Optional Chaining & Nullish Coalescing"
              initialCode={`// Optional chaining
const user = {
  name: "John",
  address: {
    city: "NYC",
    street: {
      name: "Main St"
    }
  }
};

console.log("City:", user?.address?.city); // "NYC"
console.log("Zip:", user?.address?.zip); // undefined
console.log("Street:", user?.address?.street?.name); // "Main St"

// Safe method calls
const obj = {
  method() {
    return "Called";
  }
};

console.log("Method:", obj?.method?.()); // "Called"
console.log("Missing:", obj?.missing?.()); // undefined

// Nullish coalescing
const value1 = null ?? "default";
console.log("Null coalesce:", value1); // "default"

const value2 = undefined ?? "default";
console.log("Undefined coalesce:", value2); // "default"

const value3 = 0 ?? "default";
console.log("Zero coalesce:", value3); // 0 (not "default")

const value4 = "" ?? "default";
console.log("Empty string:", value4); // "" (not "default")

// Combined usage
const config = {
  timeout: null,
  retries: 0
};

const timeout = config?.timeout ?? 5000;
const retries = config?.retries ?? 3;
console.log("Config:", timeout, retries);`}
            />
          </div>
        </section>

        {/* LEVEL 3: ADVANCED - COMPLEX PATTERNS */}
        <section>
          <div className="bg-orange-500/10 border-l-4 border-orange-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              📚 Level 3: Advanced - Complex Patterns
            </h2>
            <p className="text-gray-300">
              Promises, async/await, generators, Proxy, Reflect, Symbols,
              iterators, advanced patterns
            </p>
          </div>

          {/* Question 21: Promise Patterns - Level 3 Advanced */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🟠 Question 21: Promise Patterns & Async/Await
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="orange">
              <p className="text-gray-300">
                Use Promise.all, Promise.race, Promise.allSettled, async/await,
                and error handling patterns.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Promise Patterns"
                initialCode={`// Promise.all - all must succeed
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log("All:", values));

// Promise.allSettled - wait for all
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
]).then(results => console.log("AllSettled:", results));

// Promise.race - first to settle
Promise.race([
  new Promise(r => setTimeout(() => r("Fast"), 50)),
  new Promise(r => setTimeout(() => r("Slow"), 100))
]).then(value => console.log("Race:", value));

// Promise.any - first to succeed
Promise.any([
  Promise.reject("Error1"),
  Promise.resolve("Success"),
  Promise.reject("Error2")
]).then(value => console.log("Any:", value));

// Async/await
async function fetchData() {
  try {
    const data = await Promise.resolve("Data");
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData().then(console.log);`}
              />
            </div>
          </section>

          {/* Question 22: Proxy & Reflect */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🟠 Question 22: Proxy & Reflect
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="orange">
              <p className="text-gray-300">
                Use Proxy to intercept object operations and Reflect to call
                default behavior. Meta-programming in JavaScript.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Proxy & Reflect Usage"
                initialCode={`// Problem 1: Validation proxy
const validator = {
  set(target, property, value) {
    if (property === "age" && (typeof value !== "number" || value < 0)) {
      throw new TypeError("Age must be a positive number");
    }
    if (property === "email" && !value.includes("@")) {
      throw new TypeError("Invalid email");
    }
    return Reflect.set(target, property, value);
  }
};

const person = new Proxy({}, validator);
person.name = "John";
person.age = 30;
person.email = "john@example.com";

console.log("Person:", person);

// Problem 2: Logging proxy
const logging = {
  get(target, property) {
    console.log("Getting", property);
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    console.log("Setting", property, "to", value);
    return Reflect.set(target, property, value);
  }
};

const obj = new Proxy({}, logging);
obj.x = 10;
console.log(obj.x);

// Problem 3: Default values proxy
const defaults = (target, defaultValues) => {
  return new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : defaultValues[prop];
    }
  });
};

const config = defaults({}, {
  host: "localhost",
  port: 3000,
  timeout: 5000
});

console.log("Config:", config.host, config.port);

// Problem 4: Negative array indices
function negativeArray(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      if (typeof prop === "string" && prop.startsWith("-")) {
        const index = parseInt(prop);
        return target[target.length + index];
      }
      return Reflect.get(target, prop);
    }
  });
}

const arr = negativeArray([1, 2, 3, 4, 5]);
console.log("Negative index:", arr[-1]);`}
              />
            </div>
          </section>

          {/* Question 30: Symbols & Well-Known Symbols */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🟠 Question 30: Symbols & Well-Known Symbols
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="orange">
              <p className="text-gray-300">
                Use Symbols for private properties and well-known symbols to
                customize object behavior.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Symbols Usage"
                initialCode={`// Problem 1: Private properties with symbols
const _private = Symbol("private");
const _secret = Symbol("secret");

class MyClass {
  constructor(publicValue, privateValue, secretValue) {
    this.public = publicValue;
    this[_private] = privateValue;
    this[_secret] = secretValue;
  }
  
  getPrivate() {
    return this[_private];
  }
  
  getSecret() {
    return this[_secret];
  }
}

const instance = new MyClass("public", "private", "secret");
console.log("Public:", instance.public); // "public"
console.log("Private:", instance.getPrivate()); // "private"
console.log("Symbol property:", Object.getOwnPropertySymbols(instance));

// Problem 2: Well-known Symbol.iterator
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}

const range = new Range(1, 5);
console.log("\\nRange:", [...range]); // [1, 2, 3, 4, 5]

// Problem 3: Symbol.toStringTag
class MyArray {
  constructor(...items) {
    this.items = items;
  }
  
  get [Symbol.toStringTag]() {
    return "MyArray";
  }
  
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
}

const myArr = new MyArray(1, 2, 3);
console.log("\\nToString:", Object.prototype.toString.call(myArr)); // [object MyArray]
console.log("Spread:", [...myArr]); // [1, 2, 3]

// Problem 4: Symbol.toPrimitive
const obj = {
  value: 10,
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.value;
    }
    if (hint === "string") {
      return "Value: " + this.value;
    }
    return this.value;
  }
};

console.log("\\nToPrimitive:");
console.log("Number:", +obj); // 10
console.log("String:", String(obj)); // "Value: 10"
console.log("Default:", obj + 5); // 15

// Problem 5: Global symbol registry
const sym1 = Symbol.for("shared");
const sym2 = Symbol.for("shared");
console.log("\\nSymbol.for same?", sym1 === sym2); // true
console.log("Symbol.keyFor:", Symbol.keyFor(sym1)); // "shared"`}
              />
            </div>
          </section>

          {/* Question 35: Event Loop - Level 3 Advanced */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🟠 Question 35: Event Loop & Execution Order
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="orange">
              <p className="text-gray-300">
                Predict execution order in async JavaScript code. Understand
                microtasks, macrotasks, and the event loop.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Event Loop Scenarios"
                initialCode={`// Problem 1: Basic execution order
console.log("1. Sync");

setTimeout(() => console.log("2. setTimeout"), 0);

Promise.resolve().then(() => console.log("3. Promise"));

queueMicrotask(() => console.log("4. queueMicrotask"));

console.log("5. Sync end");

// Output: 1, 5, 3, 4, 2

// Problem 2: Nested promises
Promise.resolve()
  .then(() => {
    console.log("\\n6. Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("7. Promise 2");
    queueMicrotask(() => console.log("8. Microtask in Promise"));
  })
  .then(() => {
    console.log("9. Promise 3");
  });

// Problem 3: setTimeout vs setImmediate (Node.js) / requestAnimationFrame (Browser)
console.log("\\n10. Before setTimeout");
setTimeout(() => console.log("11. setTimeout 0"), 0);
setTimeout(() => console.log("12. setTimeout 1"), 1);

Promise.resolve().then(() => {
  console.log("13. Promise in chain");
  setTimeout(() => console.log("14. setTimeout in Promise"), 0);
});

// Problem 4: async/await execution
async function asyncFunction() {
  console.log("15. Async start");
  
  await Promise.resolve();
  console.log("16. After await");
  
  await new Promise(resolve => {
    console.log("17. In Promise constructor");
    resolve();
  });
  
  console.log("18. After second await");
}

asyncFunction();
console.log("19. After async call");

// Problem 5: Promise.all vs sequential
async function fetchData(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data " + id), 100);
  });
}

async function sequential() {
  const data1 = await fetchData(1);
  const data2 = await fetchData(2);
  return [data1, data2]; // Takes ~200ms
}

async function parallel() {
  const [data1, data2] = await Promise.all([
    fetchData(1),
    fetchData(2)
  ]);
  return [data1, data2]; // Takes ~100ms
}

// Problem 6: Error in promise chain
Promise.resolve()
  .then(() => {
    throw new Error("Error in promise");
  })
  .catch(err => {
    console.log("20. Caught:", err.message);
    return "Recovered";
  })
  .then(value => {
    console.log("21. After catch:", value);
  });`}
              />
            </div>
          </section>

          {/* Question 17: Destructuring & Spread - Level 2 Intermediate */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🟡 Question 17: Destructuring & Spread Operator
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="yellow">
              <p className="text-gray-300">
                Use destructuring and spread operator for array/object
                manipulation, function parameters, and data transformation.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Destructuring & Spread"
                initialCode={`// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log("Array destructure:", a, b, rest); // 1, 2, [3, 4, 5]

// Object destructuring
const { name, age, ...other } = { name: "John", age: 30, city: "NYC" };
console.log("Object destructure:", name, age, other);

// Default values
const { x = 10, y = 20 } = { x: 5 };
console.log("Defaults:", x, y); // 5, 20

// Renaming
const { name: userName } = { name: "John" };
console.log("Renamed:", userName);

// Nested destructuring
const { user: { id, email } } = { user: { id: 1, email: "test@test.com" } };
console.log("Nested:", id, email);

// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// Rest in function parameters
function sum(first, ...rest) {
  return first + rest.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));`}
              />
            </div>
          </section>

          {/* Question 18: Prototype Chain - Level 2 Intermediate */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🟡 Question 18: Prototype Chain & Inheritance
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="yellow">
              <p className="text-gray-300">
                Implement inheritance using prototypes. Understand prototype
                chain and property lookup.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Prototype Chain Examples"
                initialCode={`// Create inheritance chain
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + " makes a sound";
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return this.name + " barks";
};

const dog = new Dog("Buddy", "Golden");
console.log("Dog speaks:", dog.speak());
console.log("Is Animal?", dog instanceof Animal);
console.log("Is Dog?", dog instanceof Dog);

// ES6 Class syntax
class AnimalES6 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

class DogES6 extends AnimalES6 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    return this.name + " barks";
  }
}

const dog2 = new DogES6("Max", "Labrador");
console.log("ES6 Class:", dog2.speak());`}
              />
            </div>
          </section>
        </section>

        {/* Question 29: Iterators & Iterables - Level 3 Advanced */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟠 Question 29: Iterators & Iterables
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="orange">
            <p className="text-gray-300">
              Implement custom iterators using Symbol.iterator. Understand
              iterable protocol, iterator protocol, and for...of loops.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Iterators & Iterables"
              initialCode={`// Iterable protocol: object with Symbol.iterator method
// Iterator protocol: object with next() method returning {value, done}

// Custom iterable
const myIterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const value of myIterable) {
  console.log("Iterable value:", value);
}

// Range iterator
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  return {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    }
  };
}

const range = makeRangeIterator(1, 5);
console.log(range.next()); // {value: 1, done: false}
console.log(range.next()); // {value: 2, done: false}
console.log(range.next()); // {value: 3, done: false}
console.log(range.next()); // {value: 4, done: false}
console.log(range.next()); // {value: 4, done: true}

// Custom iterable class
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 0;
    const limit = this.limit;
    return {
      next() {
        if (count < limit) {
          return { value: count++, done: false };
        }
        return { done: true };
      }
    };
  }
}

const counter = new Counter(3);
for (const num of counter) {
  console.log("Counter:", num); // 0, 1, 2
}

// Array destructuring works with iterables
const [first, second] = counter;
console.log("Destructured:", first, second); // 0, 1

// Spread operator works with iterables
console.log("Spread:", [...counter]); // [0, 1, 2]

// Infinite iterator
function makeInfiniteIterator() {
  let value = 0;
  return {
    next() {
      return { value: value++, done: false };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

const infinite = makeInfiniteIterator();
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2

// Built-in iterables: Array, String, Map, Set, NodeList
const str = "Hello";
for (const char of str) {
  console.log("Char:", char);
}

// Using for...of vs for...in
const arr = [10, 20, 30];
arr.foo = "bar";

console.log("for...of (values):");
for (const value of arr) {
  console.log(value); // 10, 20, 30
}

console.log("for...in (keys):");
for (const key in arr) {
  console.log(key, arr[key]); // 0 10, 1 20, 2 30, foo bar
}

// Converting array-like to iterable
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

// Array.from works with iterables
const realArray = Array.from(arrayLike);
console.log("Array.from:", realArray);

// Manual iteration
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}`}
            />
          </div>
        </section>

        {/* Question 31: Object Property Descriptors - Level 3 Advanced */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟠 Question 31: Object Property Descriptors
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="orange">
            <p className="text-gray-300">
              Work with property descriptors: getters, setters, enumerable,
              writable, configurable, seal, freeze.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Property Descriptors"
              initialCode={`const obj = {};

// Define property with descriptor
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log("obj.name:", obj.name);
obj.name = "Jane";
console.log("After change:", obj.name); // Still "John"

// Getters and Setters
Object.defineProperty(obj, "age", {
  get() {
    return this._age || 0;
  },
  set(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  },
  enumerable: true,
  configurable: true
});

obj.age = 30;
console.log("obj.age:", obj.age);

// Seal and Freeze
const sealed = { x: 1, y: 2 };
Object.seal(sealed); // Can modify, but can't add/delete
sealed.x = 10; // OK

const frozen = { x: 1, y: 2 };
Object.freeze(frozen); // Cannot modify, add, or delete`}
            />
          </div>
        </section>

        {/* Question 27: Map & Set - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 27: Map & Set Data Structures
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Use Map and Set for efficient data storage. Understand when to use
              Map vs Object, Set vs Array. WeakMap and WeakSet for memory
              management.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Map & Set Usage"
              initialCode={`// Map - key-value pairs, any type keys
const map = new Map();
map.set("name", "John");
map.set(1, "One");
map.set({ id: 1 }, "Object key");
map.set(true, "Boolean key");

console.log("Map size:", map.size); // 4
console.log("Get value:", map.get("name")); // "John"
console.log("Has key?", map.has(1)); // true

// Iterate Map
for (const [key, value] of map) {
  console.log(key, "->", value);
}

// Map vs Object
const obj = {};
const map2 = new Map();

// Object keys are strings (coerced)
obj[1] = "one";
obj["1"] = "one-string";
console.log("Object keys:", Object.keys(obj)); // ["1"]

// Map preserves types
map2.set(1, "one");
map2.set("1", "one-string");
console.log("Map entries:", map2.size); // 2

// Set - unique values
const set = new Set([1, 2, 3, 3, 4, 4]);
console.log("Set:", set); // Set(4) {1, 2, 3, 4}
console.log("Set size:", set.size); // 4

set.add(5);
set.add(2); // Duplicate, ignored
console.log("After add:", set.size); // 5

// Set operations
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// Union
const union = new Set([...set1, ...set2]);
console.log("Union:", union); // {1, 2, 3, 4, 5}

// Intersection
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log("Intersection:", intersection); // {3}

// Difference
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log("Difference:", difference); // {1, 2}

// WeakMap - weak references, keys must be objects
const weakMap = new WeakMap();
const objKey = { id: 1 };
weakMap.set(objKey, "Private data");
console.log("WeakMap get:", weakMap.get(objKey));

// WeakSet - weak references, values must be objects
const weakSet = new WeakSet();
const obj1 = { id: 1 };
weakSet.add(obj1);
console.log("WeakSet has:", weakSet.has(obj1));`}
            />
          </div>
        </section>

        {/* Question 28: Error Handling - Level 2 Intermediate */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟡 Question 28: Error Handling & Custom Errors
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="yellow">
            <p className="text-gray-300">
              Handle errors with try/catch/finally. Create custom error classes.
              Understand error propagation and async error handling.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Error Handling Patterns"
              initialCode={`// Basic try/catch
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("Always executes");
}

// Custom Error Class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class DatabaseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "DatabaseError";
    this.code = code;
  }
}

// Use custom errors
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required", "name");
  }
  if (!user.email) {
    throw new ValidationError("Email is required", "email");
  }
  return true;
}

try {
  validateUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation error:", error.field, error.message);
  }
}

// Error handling in async functions
async function fetchData() {
  try {
    const response = await Promise.resolve({ data: "success" });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw
  }
}

// Promise error handling
Promise.reject(new Error("Promise error"))
  .catch(error => {
    console.log("Caught in promise:", error.message);
    return "recovered";
  })
  .then(value => console.log("After catch:", value));

// Multiple catch blocks (different error types)
function processData(data) {
  try {
    if (!data) throw new ValidationError("Data required");
    if (data.type === "invalid") throw new DatabaseError("Invalid type", 400);
    return "processed";
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Validation failed:", error.field);
    } else if (error instanceof DatabaseError) {
      console.log("Database error:", error.code);
    } else {
      console.log("Unknown error:", error.message);
    }
    throw error;
  }
}

// Finally always runs
function riskyOperation() {
  try {
    console.log("Attempting operation");
    throw new Error("Operation failed");
  } catch (error) {
    console.log("Caught error");
    throw error; // Re-throw
  } finally {
    console.log("Cleanup in finally"); // Always runs
  }
}

try {
  riskyOperation();
} catch (error) {
  console.log("Error propagated:", error.message);
}`}
            />
          </div>
        </section>

        {/* Question 33: Generator Functions - Level 3 Advanced */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">
            🟠 Question 33: Generator Functions
          </h3>

          <ConceptCard title="Problem Statement" icon="📝" color="orange">
            <p className="text-gray-300">
              Implement generator functions for lazy evaluation, infinite
              sequences, and two-way communication.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Generator Functions"
              initialCode={`// Simple generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log("gen.next():", gen.next());

// Infinite generator
function* infiniteNumbers() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

const infinite = infiniteNumbers();
console.log("Infinite:", infinite.next().value);

// Fibonacci generator
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
console.log("Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

// Two-way communication
function* twoWayGenerator() {
  const x = yield "First";
  const y = yield x + 10;
  return x + y;
}

const twoWay = twoWayGenerator();
console.log(twoWay.next());
console.log(twoWay.next(5));
console.log(twoWay.next(3));`}
            />
          </div>
        </section>

        {/* LEVEL 4: EXPERT - MIXED CONCEPTS */}
        <section>
          <div className="bg-red-500/10 border-l-4 border-red-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-red-400 mb-2">
              🏆 Level 4: Expert - Mixed Concepts
            </h2>
            <p className="text-gray-300">
              Complex problems combining multiple concepts: closures +
              prototypes, async + generators, Proxy + Symbols, real-world
              scenarios
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
            <p className="text-gray-300">
              <strong>Note:</strong> Expert level questions combine 2-3+
              concepts. These test your deep understanding of how JavaScript
              features work together. Master these and you can solve any
              JavaScript interview question!
            </p>
          </div>

          {/* Expert Question 36: Closure + Prototype + this */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🔴 Question 36: Closure + Prototype + this (Mixed)
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="red">
              <p className="text-gray-300">
                Create a counter factory using closures, then extend it using
                prototypes, ensuring this binding works correctly. Combine three
                concepts.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Mixed Concepts: Closure + Prototype + this"
                initialCode={`// Step 1: Closure-based counter factory
function createCounter(initial = 0) {
  let count = initial; // Closure
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    }
  };
}

const counter1 = createCounter(10);
console.log("Closure counter:", counter1.increment()); // 11

// Step 2: Add prototype methods
function Counter(initial = 0) {
  this.count = initial; // Instance property
}

Counter.prototype.increment = function() {
  return ++this.count;
};

Counter.prototype.decrement = function() {
  return --this.count;
};

Counter.prototype.getCount = function() {
  return this.count;
};

const counter2 = new Counter(10);
console.log("Prototype counter:", counter2.increment()); // 11

// Step 3: Combine - Factory with prototype enhancement
function createAdvancedCounter(initial = 0) {
  const counter = Object.create(counterMethods);
  counter.count = initial;
  return counter;
}

const counterMethods = {
  increment() {
    this.count++;
    return this;
  },
  decrement() {
    this.count--;
    return this;
  },
  getCount() {
    return this.count;
  },
  reset() {
    this.count = 0;
    return this;
  }
};

const counter3 = createAdvancedCounter(5);
console.log("Chained:", counter3.increment().increment().getCount()); // 7

// Step 4: Arrow function issue with this
const badCounter = {
  count: 0,
  increment: () => {
    this.count++; // Won't work - arrow function
  },
  incrementFixed() {
    this.count++; // Works - regular method
  }
};

badCounter.increment();
console.log("Arrow function issue:", badCounter.count); // 0
badCounter.incrementFixed();
console.log("Fixed:", badCounter.count); // 1`}
              />
            </div>
          </section>

          {/* Expert Question 37: Async + Generator + Iterator */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🔴 Question 37: Async Generator + Iterator (Mixed)
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="red">
              <p className="text-gray-300">
                Create an async generator that yields data from multiple async
                sources. Combine async/await, generators, and iterators.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Mixed: Async + Generator"
                initialCode={`// Async generator that fetches data
async function* asyncDataGenerator(urls) {
  for (const url of urls) {
    try {
      // Simulate async fetch
      const data = await new Promise(resolve => {
        setTimeout(() => resolve("Data from " + url), 100);
      });
      yield data;
    } catch (error) {
      yield { error: error.message };
    }
  }
}

// Use async generator
async function processAsyncData() {
  const urls = ["api1", "api2", "api3"];
  const generator = asyncDataGenerator(urls);
  
  for await (const data of generator) {
    console.log("Received:", data);
  }
}

processAsyncData();

// Combine with regular iterator
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.resolvers = [];
  }
  
  async *[Symbol.asyncIterator]() {
    while (true) {
      if (this.queue.length > 0) {
        yield this.queue.shift();
      } else {
        await new Promise(resolve => {
          this.resolvers.push(resolve);
        });
      }
    }
  }
  
  push(value) {
    if (this.resolvers.length > 0) {
      const resolve = this.resolvers.shift();
      resolve();
    }
    this.queue.push(value);
  }
}

const queue = new AsyncQueue();
setTimeout(() => queue.push("Item 1"), 200);
setTimeout(() => queue.push("Item 2"), 400);

(async () => {
  for await (const item of queue) {
    console.log("Queue item:", item);
    if (item === "Item 2") break;
  }
})();`}
              />
            </div>
          </section>

          {/* Expert Question 38: Proxy + Symbol + Descriptor */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🔴 Question 38: Proxy + Symbol + Property Descriptors (Mixed)
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="red">
              <p className="text-gray-300">
                Create a reactive object using Proxy, Symbols for private
                properties, and property descriptors for validation. Combine
                three advanced concepts.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Mixed: Proxy + Symbol + Descriptors"
                initialCode={`const _private = Symbol("private");
const _listeners = Symbol("listeners");

// Reactive object with Proxy, Symbols, and descriptors
function createReactiveObject(initial) {
  const listeners = new Map();
  
  const obj = {
    [_private]: initial,
    [_listeners]: listeners
  };
  
  // Use Proxy to intercept operations
  return new Proxy(obj, {
    get(target, prop) {
      if (prop === _private || prop === _listeners) {
        return Reflect.get(target, prop);
      }
      return Reflect.get(target[_private], prop);
    },
    
    set(target, prop, value) {
      const oldValue = Reflect.get(target[_private], prop);
      const result = Reflect.set(target[_private], prop, value);
      
      if (result && oldValue !== value) {
        // Notify listeners
        const propListeners = target[_listeners].get(prop) || [];
        propListeners.forEach(fn => fn(value, oldValue));
      }
      
      return result;
    },
    
    defineProperty(target, prop, descriptor) {
      // Add validation through descriptor
      if (descriptor.value !== undefined) {
        const validator = target[_private].__validators?.[prop];
        if (validator && !validator(descriptor.value)) {
          throw new Error("Validation failed for " + prop);
        }
      }
      return Reflect.defineProperty(target[_private], prop, descriptor);
    }
  });
}

const reactive = createReactiveObject({ name: "John", age: 30 });

// Add listener using Symbol
reactive[_listeners].set("name", [(newVal, oldVal) => {
  console.log("Name changed from", oldVal, "to", newVal);
}]);

reactive.name = "Jane"; // Triggers listener

// Add validator
Object.defineProperty(reactive[_private], "__validators", {
  value: {
    age: (val) => val > 0 && val < 150
  },
  enumerable: false
});

console.log("Reactive object:", reactive);`}
              />
            </div>
          </section>

          {/* Expert Question 39: Module + Closure + Singleton */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🔴 Question 39: Module Pattern + Closure + Singleton (Mixed)
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="red">
              <p className="text-gray-300">
                Create a module system using closures, implement singleton
                pattern, and manage private state. Combine module pattern,
                closures, and design patterns.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Mixed: Module + Closure + Singleton"
                initialCode={`// Module pattern with closure
const UserModule = (function() {
  // Private state (closure)
  let users = [];
  let userIdCounter = 1;
  
  // Private functions
  function generateId() {
    return userIdCounter++;
  }
  
  // Public API
  return {
    addUser(name, email) {
      const user = {
        id: generateId(),
        name,
        email,
        createdAt: new Date()
      };
      users.push(user);
      return user;
    },
    
    getUser(id) {
      return users.find(u => u.id === id);
    },
    
    getAllUsers() {
      return [...users]; // Return copy
    },
    
    deleteUser(id) {
      users = users.filter(u => u.id !== id);
    },
    
    getCount() {
      return users.length;
    }
  };
})();

// Usage
UserModule.addUser("John", "john@example.com");
UserModule.addUser("Jane", "jane@example.com");
console.log("Users:", UserModule.getAllUsers());
console.log("Count:", UserModule.getCount());

// Singleton with closure
const Database = (function() {
  let instance = null;
  
  function createConnection() {
    return {
      connected: true,
      query(sql) {
        console.log("Executing:", sql);
        return { results: [] };
      },
      close() {
        this.connected = false;
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createConnection();
      }
      return instance;
    }
  };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log("Same instance?", db1 === db2); // true

// ES6 Module Singleton (modern approach)
class ConfigManager {
  constructor() {
    if (ConfigManager.instance) {
      return ConfigManager.instance;
    }
    this.settings = {};
    ConfigManager.instance = this;
  }
  
  set(key, value) {
    this.settings[key] = value;
  }
  
  get(key) {
    return this.settings[key];
  }
}

const config1 = new ConfigManager();
const config2 = new ConfigManager();
console.log("Same config?", config1 === config2); // true`}
              />
            </div>
          </section>

          {/* Expert Question 40: Promise + Generator + Iterator */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🔴 Question 40: Promise Pool + Generator (Mixed)
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="red">
              <p className="text-gray-300">
                Implement a promise pool that limits concurrent async operations
                using generators and promises. Combine async patterns with
                generators for flow control.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Mixed: Promise Pool + Generator"
                initialCode={`// Promise pool with concurrency limit
async function* promisePool(tasks, limit) {
  const executing = [];
  
  for (const task of tasks) {
    const promise = Promise.resolve(task()).then(
      result => ({ status: "fulfilled", value: result }),
      error => ({ status: "rejected", reason: error })
    );
    
    executing.push(promise);
    
    if (executing.length >= limit) {
      yield await Promise.race(executing);
      executing.splice(executing.findIndex(p => p === promise), 1);
    }
  }
  
  while (executing.length > 0) {
    yield await Promise.race(executing);
    const index = executing.findIndex(p => p.done !== true);
    if (index !== -1) executing.splice(index, 1);
  }
}

// Usage
async function runTasks() {
  const tasks = [
    () => new Promise(r => setTimeout(() => r("Task 1"), 100)),
    () => new Promise(r => setTimeout(() => r("Task 2"), 200)),
    () => new Promise(r => setTimeout(() => r("Task 3"), 150)),
    () => new Promise(r => setTimeout(() => r("Task 4"), 50))
  ];
  
  const pool = promisePool(tasks, 2); // Limit to 2 concurrent
  
  for await (const result of pool) {
    console.log("Result:", result);
  }
}

runTasks();

// Alternative: Using async generator for sequential processing
async function* sequentialProcessor(items, processor) {
  for (const item of items) {
    yield await processor(item);
  }
}

async function processItems() {
  const items = [1, 2, 3, 4, 5];
  const processor = async (item) => {
    await new Promise(r => setTimeout(r, 100));
    return item * 2;
  };
  
  const gen = sequentialProcessor(items, processor);
  
  for await (const result of gen) {
    console.log("Processed:", result);
  }
}`}
              />
            </div>
          </section>

          {/* Expert Question 41: Class + Symbol + Proxy */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🔴 Question 41: Class + Symbol + Proxy (Mixed)
            </h3>

            <ConceptCard title="Problem Statement" icon="📝" color="red">
              <p className="text-gray-300">
                Create a class with private properties using Symbols, then wrap
                it with Proxy for interception. Combine ES6 classes, Symbols,
                and Proxy for advanced object manipulation.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Mixed: Class + Symbol + Proxy"
                initialCode={`const _data = Symbol("data");
const _callbacks = Symbol("callbacks");

class Observable {
  constructor(initialValue) {
    this[_data] = initialValue;
    this[_callbacks] = [];
  }
  
  get value() {
    return this[_data];
  }
  
  set value(newValue) {
    const oldValue = this[_data];
    this[_data] = newValue;
    this[_callbacks].forEach(cb => cb(newValue, oldValue));
  }
  
  subscribe(callback) {
    this[_callbacks].push(callback);
    return () => {
      const index = this[_callbacks].indexOf(callback);
      if (index > -1) this[_callbacks].splice(index, 1);
    };
  }
}

// Wrap with Proxy for additional functionality
function createReactiveObservable(initialValue) {
  const observable = new Observable(initialValue);
  
  return new Proxy(observable, {
    get(target, prop) {
      if (prop === "subscribe" || prop === "value") {
        return Reflect.get(target, prop);
      }
      // Intercept property access
      return Reflect.get(target, prop);
    },
    
    set(target, prop, value) {
      if (prop === "value") {
        target.value = value;
        return true;
      }
      return Reflect.set(target, prop, value);
    },
    
    ownKeys(target) {
      // Hide Symbol properties
      return ["value", "subscribe"];
    }
  });
}

const state = createReactiveObservable(0);

state.subscribe((newVal, oldVal) => {
  console.log("Changed from", oldVal, "to", newVal);
});

state.value = 10;
state.value = 20;

// Combined: Class with private Symbols and Proxy validation
const _validate = Symbol("validate");

class ValidatedProperty {
  constructor(value, validator) {
    this[_validate] = validator;
    this._value = value;
  }
  
  get value() {
    return this._value;
  }
  
  set value(newValue) {
    if (this[_validate](newValue)) {
      this._value = newValue;
    } else {
      throw new Error("Validation failed");
    }
  }
}

const validated = new Proxy(new ValidatedProperty(0, v => v >= 0), {
  set(target, prop, value) {
    if (prop === "value") {
      target.value = value;
      return true;
    }
    return Reflect.set(target, prop, value);
  }
});

validated.value = 10;
console.log("Validated value:", validated.value);`}
              />
            </div>
          </section>
        </section>

        {/* Best Practices Summary */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ✅ Interview Best Practices
          </h2>

          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Start with a simple solution:</strong> Get it working
                  first, then optimize
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Discuss trade-offs:</strong> Time vs space complexity,
                  readability vs performance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Handle edge cases:</strong> Empty arrays, null values,
                  single elements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Think out loud:</strong> Explain your approach and
                  reasoning
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Ask clarifying questions:</strong> Input format,
                  expected output, constraints
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Write clean code:</strong> Meaningful variable names,
                  proper formatting
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Test your solution:</strong> Walk through examples
                  manually
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>
                  <strong>Know complexity:</strong> Be able to analyze time and
                  space complexity
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
