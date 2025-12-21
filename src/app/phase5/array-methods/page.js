"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ArrayMethodsPage() {
  return (
    <SectionLayout
      title="5.1 Array - ALL Methods"
      description="Master every array method (40+), iteration patterns, and array concepts"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📚 Complete Array Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Arrays are fundamental data structures in JavaScript. This section
            covers <strong>ALL 40+ array methods</strong> - static methods,
            mutating, non-mutating, iteration, searching, and modern ES2023
            methods.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            {[
              "Static (3)",
              "Mutating (9)",
              "Non-Mutating (7)",
              "Iteration (11)",
              "Searching (3)",
              "ES2023 New (5)",
              "Iteration Protocol (4)",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-pink-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Array Static Methods */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Array Static Methods (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Array.from() - ES2015"
              initialCode={`// Array.from(arrayLike) - create array from array-like or iterable
console.log("From string:");
console.log(Array.from("Hello")); // ["H", "e", "l", "l", "o"]

// From Set
const set = new Set([1, 2, 3, 3, 4]);
console.log("\\nFrom Set:");
console.log(Array.from(set)); // [1, 2, 3, 4]

// From Map
const map = new Map([["a", 1], ["b", 2]]);
console.log("\\nFrom Map:");
console.log(Array.from(map)); // [["a", 1], ["b", 2]]

// From array-like object
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log("\\nFrom array-like:");
console.log(Array.from(arrayLike)); // ["a", "b", "c"]

// With map function
console.log("\\nWith map function:");
console.log(Array.from("12345", x => Number(x))); // [1, 2, 3, 4, 5]
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]

// Generate sequence
console.log("\\nGenerate 1-5:");
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5]

// NodeList to Array (DOM)
// const divs = Array.from(document.querySelectorAll('div'));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Array.isArray()"
              initialCode={`// Array.isArray() - reliable array check
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray([1, 2, 3]):", Array.isArray([1, 2, 3])); // true

// Not arrays
console.log("\\nNot arrays:");
console.log("Array.isArray({}):", Array.isArray({})); // false
console.log("Array.isArray('array'):", Array.isArray("array")); // false
console.log("Array.isArray(null):", Array.isArray(null)); // false
console.log("Array.isArray(undefined):", Array.isArray(undefined)); // false

// Array-like objects (not arrays!)
const arrayLike = { 0: "a", 1: "b", length: 2 };
console.log("\\nArray-like:", Array.isArray(arrayLike)); // false

// Arguments object
function test() {
  console.log("\\narguments:", Array.isArray(arguments)); // false
}
test(1, 2, 3);

// Why typeof doesn't work
console.log("\\ntypeof []:", typeof []); // "object"
console.log("typeof {}:", typeof {}); // "object"

// Array.isArray is the reliable way
function processArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Not an array!");
  }
  return arr.length;
}

console.log("\\nprocessArray([1,2,3]):", processArray([1, 2, 3]));
// processArray({}); // Error!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Array.of() - ES2015"
              initialCode={`// Array.of(...elements) - create array from arguments
console.log("Array.of(1, 2, 3):", Array.of(1, 2, 3)); // [1, 2, 3]
console.log("Array.of('a', 'b'):", Array.of("a", "b")); // ["a", "b"]

// Single element
console.log("\\nSingle element:");
console.log("Array.of(7):", Array.of(7)); // [7]

// vs Array constructor (confusing!)
console.log("\\nArray(7):", Array(7)); // [ , , , , , , ] (7 empty slots!)
console.log("Array(7).length:", Array(7).length); // 7

// Array.of is consistent
console.log("\\nConsistent:");
console.log("Array.of():", Array.of()); // []
console.log("Array.of(undefined):", Array.of(undefined)); // [undefined]
console.log("Array.of(1, 2, 3):", Array.of(1, 2, 3)); // [1, 2, 3]

// Practical: create array from values
const colors = Array.of("red", "green", "blue");
console.log("\\nColors:", colors);

// vs array literal (usually better)
const colors2 = ["red", "green", "blue"];
console.log("Literal:", colors2);

// Use case: when you need Array constructor behavior but consistent
function createArray(...items) {
  return Array.of(...items);
}

console.log("\\ncreateArray(5):", createArray(5)); // [5], not 5 empty slots`}
            />
          </div>
        </section>

        {/* Mutating Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚠️ Mutating Methods (9) - Modify Original Array
          </h2>

          <ConceptCard title="Mutating Methods" icon="🔄" color="orange">
            <p className="mb-2 text-orange-300">
              <strong>Warning:</strong> These methods modify the original array!
            </p>
            <p className="text-sm">
              push, pop, shift, unshift, splice, reverse, sort, fill, copyWithin
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="push() and pop() - End Operations"
              initialCode={`const arr = [1, 2, 3];

// push(...elements) - add to end
console.log("Original:", arr);
arr.push(4);
console.log("After push(4):", arr); // [1, 2, 3, 4]

// Push multiple
arr.push(5, 6, 7);
console.log("After push(5,6,7):", arr); // [1, 2, 3, 4, 5, 6, 7]

// Returns new length
const newLength = arr.push(8);
console.log("Returns length:", newLength); // 8

// pop() - remove from end
console.log("\\npop():", arr.pop()); // 8 (returns removed element)
console.log("After pop:", arr); // [1, 2, 3, 4, 5, 6, 7]

// Pop from empty array
const empty = [];
console.log("\\nPop empty:", empty.pop()); // undefined

// Stack operations (LIFO)
console.log("\\nStack (LIFO):");
const stack = [];
stack.push("first");
stack.push("second");
stack.push("third");
console.log("Stack:", stack);
console.log("Pop:", stack.pop()); // "third" (last in, first out)
console.log("Pop:", stack.pop()); // "second"
console.log("Stack now:", stack);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="shift() and unshift() - Start Operations"
              initialCode={`const arr = [1, 2, 3];

// unshift(...elements) - add to beginning
console.log("Original:", arr);
arr.unshift(0);
console.log("After unshift(0):", arr); // [0, 1, 2, 3]

// Unshift multiple
arr.unshift(-2, -1);
console.log("After unshift(-2,-1):", arr); // [-2, -1, 0, 1, 2, 3]

// Returns new length
const newLength = arr.unshift(-3);
console.log("Returns length:", newLength);

// shift() - remove from beginning
console.log("\\nshift():", arr.shift()); // -3 (returns removed)
console.log("After shift:", arr); // [-2, -1, 0, 1, 2, 3]

// Queue operations (FIFO)
console.log("\\nQueue (FIFO):");
const queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
console.log("Queue:", queue);
console.log("Shift:", queue.shift()); // "first" (first in, first out)
console.log("Shift:", queue.shift()); // "second"
console.log("Queue now:", queue);

// Performance note
console.log("\\nNote: shift/unshift are slower than push/pop");
console.log("They need to reindex all elements");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="splice() - Swiss Army Knife"
              initialCode={`// splice(start, deleteCount, ...items) - add/remove at any index
const arr = ["a", "b", "c", "d", "e"];

// Remove elements
console.log("Original:", arr);
const removed = arr.splice(2, 2); // Remove 2 elements from index 2
console.log("Removed:", removed); // ["c", "d"]
console.log("After remove:", arr); // ["a", "b", "e"]

// Insert elements (deleteCount = 0)
arr.splice(2, 0, "C", "D");
console.log("\\nAfter insert:", arr); // ["a", "b", "C", "D", "e"]

// Replace elements
arr.splice(2, 2, "c", "d");
console.log("After replace:", arr); // ["a", "b", "c", "d", "e"]

// Negative index (from end)
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(-2, 1); // Remove second from end
console.log("\\nNegative index:", arr2); // [1, 2, 3, 5]

// No deleteCount = remove all from start
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(2); // Remove from index 2 to end
console.log("\\nNo deleteCount:", arr3); // [1, 2]

// Insert at start
const arr4 = [3, 4, 5];
arr4.splice(0, 0, 1, 2);
console.log("\\nInsert at start:", arr4); // [1, 2, 3, 4, 5]

// Remove and insert
const arr5 = [1, 2, 5, 6];
arr5.splice(2, 0, 3, 4);
console.log("Insert middle:", arr5); // [1, 2, 3, 4, 5, 6]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="reverse() and sort()"
              initialCode={`// reverse() - reverse array in place
const arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);
arr.reverse();
console.log("After reverse:", arr); // [5, 4, 3, 2, 1]

// Returns the array
const result = arr.reverse();
console.log("Returns array:", result);
console.log("Same reference:", result === arr); // true

// sort() - sort in place (lexicographic by default!)
const nums = [10, 5, 40, 25, 1000, 1];
console.log("\\nNumbers:", nums);
nums.sort();
console.log("Default sort:", nums); // [1, 10, 1000, 25, 40, 5] WRONG!

// Correct number sort
const nums2 = [10, 5, 40, 25, 1000, 1];
nums2.sort((a, b) => a - b); // Ascending
console.log("Number sort:", nums2); // [1, 5, 10, 25, 40, 1000]

// Descending
const nums3 = [10, 5, 40, 25];
nums3.sort((a, b) => b - a);
console.log("Descending:", nums3); // [40, 25, 10, 5]

// String sort (lexicographic)
const words = ["banana", "apple", "cherry", "date"];
words.sort();
console.log("\\nWords:", words); // ["apple", "banana", "cherry", "date"]

// Case-insensitive sort
const mixed = ["Banana", "apple", "Cherry"];
mixed.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case-insensitive:", mixed);

// Sort objects
const users = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 }
];

users.sort((a, b) => a.age - b.age);
console.log("\\nBy age:", users.map(u => u.name)); // ["Alice", "Bob", "Charlie"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="fill() and copyWithin() - ES2015"
              initialCode={`// fill(value, start, end) - fill with value
const arr1 = [1, 2, 3, 4, 5];
console.log("Original:", arr1);
arr1.fill(0);
console.log("fill(0):", arr1); // [0, 0, 0, 0, 0]

// Fill range
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2, 4); // Fill indices 2-3
console.log("\\nfill(0, 2, 4):", arr2); // [1, 2, 0, 0, 5]

// Fill from index
const arr3 = [1, 2, 3, 4, 5];
arr3.fill(9, 2);
console.log("fill(9, 2):", arr3); // [1, 2, 9, 9, 9]

// Create initialized array
const zeros = new Array(5).fill(0);
console.log("\\nZeros:", zeros); // [0, 0, 0, 0, 0]

// copyWithin(target, start, end) - copy within same array
const arr4 = [1, 2, 3, 4, 5];
arr4.copyWithin(0, 3); // Copy from index 3 to index 0
console.log("\\ncopyWithin(0, 3):", arr4); // [4, 5, 3, 4, 5]

const arr5 = [1, 2, 3, 4, 5];
arr5.copyWithin(2, 0, 2); // Copy indices 0-1 to position 2
console.log("copyWithin(2, 0, 2):", arr5); // [1, 2, 1, 2, 5]

// Negative indices
const arr6 = [1, 2, 3, 4, 5];
arr6.copyWithin(-2, 0); // Copy from start to second-last position
console.log("copyWithin(-2, 0):", arr6); // [1, 2, 3, 1, 2]`}
            />
          </div>
        </section>

        {/* Non-Mutating Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✅ Non-Mutating Methods (7) - Return New Array/Value
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="concat(), slice(), join()"
              initialCode={`// concat(...items) - merge arrays (returns new)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const merged = arr1.concat(arr2, arr3);
console.log("concat:", merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Original arr1:", arr1); // [1, 2, 3] (unchanged!)

// Concat with values
const combined = arr1.concat(99, arr2, 100);
console.log("\\nWith values:", combined); // [1, 2, 3, 99, 4, 5, 6, 100]

// Modern: spread operator (preferred)
const spread = [...arr1, ...arr2, ...arr3];
console.log("With spread:", spread);

// slice(start, end) - extract section
const arr = [1, 2, 3, 4, 5];
console.log("\\nslice(1, 4):", arr.slice(1, 4)); // [2, 3, 4]
console.log("slice(2):", arr.slice(2)); // [3, 4, 5]
console.log("slice(-2):", arr.slice(-2)); // [4, 5]
console.log("Original:", arr); // [1, 2, 3, 4, 5] (unchanged!)

// Clone array
const clone = arr.slice();
console.log("Clone:", clone);

// join(separator) - array to string
console.log("\\njoin(','):", arr.join(",")); // "1,2,3,4,5"
console.log("join(' - '):", arr.join(" - ")); // "1 - 2 - 3 - 4 - 5"
console.log("join(''):", arr.join("")); // "12345"
console.log("join():", arr.join()); // "1,2,3,4,5" (default: ",")`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="flat() and flatMap() - ES2019"
              initialCode={`// flat(depth) - flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];

console.log("flat():", nested.flat()); // [1, 2, 3, 4, [5, 6]] (depth 1)
console.log("flat(2):", nested.flat(2)); // [1, 2, 3, 4, 5, 6] (depth 2)
console.log("flat(Infinity):", nested.flat(Infinity)); // Fully flattened

// Removes empty slots
const sparse = [1, 2, , 4, 5];
console.log("\\nSparse:", sparse);
console.log("flat():", sparse.flat()); // [1, 2, 4, 5] (removed hole!)

// flatMap(callback) - map then flat(1)
const arr = [1, 2, 3];

const doubled = arr.flatMap(x => [x, x * 2]);
console.log("\\nflatMap:", doubled); // [1, 2, 2, 4, 3, 6]

// vs map + flat
const mapped = arr.map(x => [x, x * 2]).flat();
console.log("map + flat:", mapped); // Same result

// Practical: split strings
const sentences = ["hello world", "foo bar"];
const words = sentences.flatMap(s => s.split(" "));
console.log("\\nWords:", words); // ["hello", "world", "foo", "bar"]

// Filter and map in one
const numbers = [1, 2, 3, 4, 5];
const result = numbers.flatMap(x => 
  x % 2 === 0 ? [x * 2] : [] // Return empty array to filter
);
console.log("\\nEven doubled:", result); // [4, 8]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toString() and toLocaleString()"
              initialCode={`// toString() - convert to comma-separated string
const arr = [1, 2, 3, 4, 5];
console.log("toString():", arr.toString()); // "1,2,3,4,5"
console.log("Type:", typeof arr.toString()); // "string"

// Nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("\\nNested:", nested.toString()); // "1,2,3,4,5,6"

// Mixed types
const mixed = [1, "two", true, null, undefined];
console.log("Mixed:", mixed.toString()); // "1,two,true,,"

// toLocaleString(locales, options) - locale-aware
const numbers = [1234.56, 7890.12];
console.log("\\ntoLocaleString():", numbers.toLocaleString());
console.log("German:", numbers.toLocaleString("de-DE"));

// With dates
const dates = [new Date("2024-01-15"), new Date("2024-12-25")];
console.log("\\nDates:", dates.toLocaleString("en-US"));

// Currency formatting
const prices = [19.99, 49.99, 99.99];
const formatted = prices.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
});
console.log("\\nPrices:", formatted);

// join() vs toString()
console.log("\\njoin() vs toString():");
console.log("join(','):", arr.join(",")); // "1,2,3,4,5"
console.log("toString():", arr.toString()); // "1,2,3,4,5"
console.log("Same result:", arr.join(",") === arr.toString()); // true`}
            />
          </div>
        </section>

        {/* Iteration Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 Iteration Methods (11)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="forEach() - Iterate Over Elements"
              initialCode={`const arr = ["apple", "banana", "orange"];

// forEach(callback) - execute function for each element
arr.forEach((item, index) => {
  console.log(\`\${index}: \${item}\`);
});

// With all parameters
console.log("\\nWith all params:");
arr.forEach((element, index, array) => {
  console.log(\`element: \${element}, index: \${index}, length: \${array.length}\`);
});

// No return value (returns undefined)
const result = arr.forEach(item => item.toUpperCase());
console.log("\\nforEach returns:", result); // undefined

// Can't break (use for...of or for loop instead)
console.log("\\nCan't break:");
arr.forEach(item => {
  if (item === "banana") {
    // return; // Only skips this iteration, doesn't break loop
  }
  console.log("Processing:", item);
});

// thisArg parameter
const obj = {
  prefix: "Item: ",
  print(item) {
    console.log(this.prefix + item);
  }
};

console.log("\\nWith thisArg:");
arr.forEach(function(item) {
  obj.print(item);
});

// Modern: use for...of for better control
console.log("\\nfor...of (can break):");
for (const item of arr) {
  if (item === "banana") break;
  console.log(item);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="map() - Transform Elements"
              initialCode={`// map(callback) - create new array with transformed elements
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]
console.log("Original:", numbers); // [1, 2, 3, 4, 5] (unchanged)

// String transformation
const names = ["alice", "bob", "charlie"];
const capitalized = names.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1)
);
console.log("\\nCapitalized:", capitalized);

// Object transformation
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const userNames = users.map(user => user.name);
console.log("\\nNames:", userNames); // ["Alice", "Bob"]

const aged = users.map(user => ({
  ...user,
  age: user.age + 1
}));
console.log("Aged:", aged);

// With index
const indexed = numbers.map((num, i) => ({
  index: i,
  value: num,
  doubled: num * 2
}));
console.log("\\nIndexed:", indexed);

// Chain operations
const result = numbers
  .map(x => x * 2)
  .map(x => x + 1)
  .map(x => x.toString());
console.log("\\nChained:", result);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="filter() - Select Elements"
              initialCode={`// filter(callback) - create array with elements that pass test
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(x => x % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6, 8, 10]

const odds = numbers.filter(x => x % 2 !== 0);
console.log("Odds:", odds); // [1, 3, 5, 7, 9]

const greaterThan5 = numbers.filter(x => x > 5);
console.log("Greater than 5:", greaterThan5); // [6, 7, 8, 9, 10]

// Filter objects
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 30 }
];

const adults = users.filter(user => user.age >= 18);
console.log("\\nAdults:", adults.map(u => u.name)); // ["Bob", "David"]

// With index
const selected = numbers.filter((num, index) => index % 2 === 0);
console.log("\\nEven indices:", selected); // [1, 3, 5, 7, 9]

// Remove falsy values
const mixed = [1, 0, "hello", "", null, "world", undefined, false, NaN];
const truthy = mixed.filter(Boolean);
console.log("\\nTruthy:", truthy); // [1, "hello", "world"]

// Remove duplicates
const duplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unique = duplicates.filter((value, index, arr) => 
  arr.indexOf(value) === index
);
console.log("\\nUnique:", unique); // [1, 2, 3, 4, 5]

// Chain with map
const result = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 2);
console.log("\\nFilter + map:", result);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="reduce() and reduceRight()"
              initialCode={`// reduce(callback, initialValue) - reduce to single value
const numbers = [1, 2, 3, 4, 5];

// Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

// Product
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 120

// Max value
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
console.log("Max:", max); // 5

// Without initial value (uses first element)
const sum2 = numbers.reduce((acc, curr) => acc + curr);
console.log("\\nWithout initial:", sum2); // 15

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("\\nCount:", count); // {apple: 3, banana: 2, orange: 1}

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("\\nFlattened:", flat);

// Group by property
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

const grouped = users.reduce((acc, user) => {
  (acc[user.role] = acc[user.role] || []).push(user);
  return acc;
}, {});
console.log("\\nGrouped:", grouped);

// reduceRight() - right to left
const arr = [1, 2, 3, 4];
const rightToLeft = arr.reduceRight((acc, curr) => acc + curr, "");
console.log("\\nRight to left:", rightToLeft); // "4321"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="every() and some()"
              initialCode={`// every(callback) - test if ALL elements pass
const numbers = [2, 4, 6, 8, 10];

console.log("All even:", numbers.every(x => x % 2 === 0)); // true
console.log("All > 0:", numbers.every(x => x > 0)); // true
console.log("All > 5:", numbers.every(x => x > 5)); // false

// Short-circuits on first false
console.log("\\nShort-circuit:");
const result = [2, 4, 5, 8].every(x => {
  console.log("Checking:", x);
  return x % 2 === 0;
}); // Stops at 5
console.log("Result:", result); // false

// some(callback) - test if ANY element passes
const mixed = [1, 3, 5, 6, 7];

console.log("\\nAny even:", mixed.some(x => x % 2 === 0)); // true
console.log("Any > 10:", mixed.some(x => x > 10)); // false

// Short-circuits on first true
console.log("\\nShort-circuit:");
const found = [1, 3, 4, 7].some(x => {
  console.log("Checking:", x);
  return x % 2 === 0;
}); // Stops at 4
console.log("Found:", found); // true

// Practical: validation
const ages = [18, 21, 25, 30];
console.log("\\nAll adults:", ages.every(age => age >= 18)); // true

const hasMinor = ages.some(age => age < 18);
console.log("Has minor:", hasMinor); // false

// Empty array edge cases
console.log("\\nEmpty array:");
console.log("every on []:", [].every(x => x > 0)); // true (vacuously true)
console.log("some on []:", [].some(x => x > 0)); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="find(), findIndex(), findLast(), findLastIndex()"
              initialCode={`const numbers = [5, 12, 8, 130, 44];

// find() - ES2015 - first element that passes test
const found = numbers.find(x => x > 10);
console.log("find(x > 10):", found); // 12

const notFound = numbers.find(x => x > 200);
console.log("find(x > 200):", notFound); // undefined

// findIndex() - ES2015 - index of first match
const index = numbers.findIndex(x => x > 10);
console.log("\\nfindIndex(x > 10):", index); // 1

const indexNotFound = numbers.findIndex(x => x > 200);
console.log("findIndex(x > 200):", indexNotFound); // -1

// findLast() - ES2023 - last element that passes test
const lastFound = numbers.findLast(x => x > 10);
console.log("\\nfindLast(x > 10):", lastFound); // 44 (last match)

// findLastIndex() - ES2023 - index of last match
const lastIndex = numbers.findLastIndex(x => x > 10);
console.log("findLastIndex(x > 10):", lastIndex); // 4

// Practical: find object
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
console.log("\\nFound user:", user); // {id: 2, name: "Bob"}

// With index and array parameters
const result = numbers.find((element, index, array) => {
  console.log(\`Checking \${element} at \${index}\`);
  return element > 10;
});
console.log("Result:", result);`}
            />
          </div>
        </section>

        {/* Searching Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔍 Searching Methods (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="indexOf(), lastIndexOf(), includes()"
              initialCode={`const arr = [1, 2, 3, 2, 1];

// indexOf(searchElement, fromIndex) - first occurrence
console.log("indexOf(2):", arr.indexOf(2)); // 1
console.log("indexOf(2, 2):", arr.indexOf(2, 2)); // 3 (from index 2)
console.log("indexOf(99):", arr.indexOf(99)); // -1 (not found)

// Negative fromIndex
console.log("\\nindexOf(1, -2):", arr.indexOf(1, -2)); // 4 (from end)

// lastIndexOf(searchElement, fromIndex) - last occurrence
console.log("\\nlastIndexOf(2):", arr.lastIndexOf(2)); // 3
console.log("lastIndexOf(1):", arr.lastIndexOf(1)); // 4
console.log("lastIndexOf(2, 2):", arr.lastIndexOf(2, 2)); // 1 (search backwards from 2)

// includes(searchElement, fromIndex) - ES2016 - check if contains
console.log("\\nincludes(2):", arr.includes(2)); // true
console.log("includes(99):", arr.includes(99)); // false
console.log("includes(1, 2):", arr.includes(1, 2)); // true (from index 2)

// Key difference: includes finds NaN, indexOf doesn't
const withNaN = [1, NaN, 3];
console.log("\\nWith NaN:");
console.log("indexOf(NaN):", withNaN.indexOf(NaN)); // -1 (can't find)
console.log("includes(NaN):", withNaN.includes(NaN)); // true (can find!)

// Practical: check existence
function hasItem(arr, item) {
  return arr.includes(item);
}

console.log("\\nhasItem([1,2,3], 2):", hasItem([1, 2, 3], 2)); // true

// Find all indices
function findAllIndices(arr, value) {
  const indices = [];
  let idx = -1;
  while ((idx = arr.indexOf(value, idx + 1)) !== -1) {
    indices.push(idx);
  }
  return indices;
}

console.log("\\nAll indices of 2:", findAllIndices(arr, 2));`}
            />
          </div>
        </section>

        {/* ES2023 New Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✨ ES2023 New Methods (5) - Immutable Versions
          </h2>

          <ConceptCard title="ES2023 Methods" icon="🆕" color="blue">
            <p className="mb-2">
              ES2023 introduced immutable versions of mutating methods. They
              return a <strong>new array</strong> instead of modifying the
              original.
            </p>
            <p className="text-sm text-blue-300">
              toReversed(), toSorted(), toSpliced(), with(), at()
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="at() - ES2022 - Negative Indexing"
              initialCode={`const arr = ["a", "b", "c", "d", "e"];

// at(index) - get element (supports negative indices!)
console.log("at(0):", arr.at(0)); // "a"
console.log("at(2):", arr.at(2)); // "c"

// Negative indices (from end)
console.log("\\nat(-1):", arr.at(-1)); // "e" (last)
console.log("at(-2):", arr.at(-2)); // "d" (second last)
console.log("at(-5):", arr.at(-5)); // "a" (first)

// Out of range
console.log("\\nat(10):", arr.at(10)); // undefined
console.log("at(-10):", arr.at(-10)); // undefined

// vs bracket notation
console.log("\\nvs bracket:");
console.log("arr[0]:", arr[0]); // "a"
console.log("arr[-1]:", arr[-1]); // undefined (doesn't work!)
console.log("arr.at(-1):", arr.at(-1)); // "e" (works!)

// Practical: get last element
console.log("\\nLast element:");
console.log("Old way:", arr[arr.length - 1]); // "e"
console.log("New way:", arr.at(-1)); // "e"

// Get second to last
console.log("\\nSecond to last:");
console.log("Old way:", arr[arr.length - 2]); // "d"
console.log("New way:", arr.at(-2)); // "d"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toReversed(), toSorted() - ES2023"
              initialCode={`const arr = [3, 1, 4, 1, 5, 9, 2, 6];

// toReversed() - returns reversed copy
console.log("Original:", arr);
const reversed = arr.toReversed();
console.log("Reversed:", reversed);
console.log("Original unchanged:", arr); // Still [3, 1, 4, 1, 5, 9, 2, 6]

// vs reverse() (mutating)
const arr2 = [1, 2, 3];
arr2.reverse(); // Modifies original
console.log("\\nAfter reverse():", arr2); // [3, 2, 1]

// toSorted(compareFn) - returns sorted copy
const sorted = arr.toSorted((a, b) => a - b);
console.log("\\nSorted:", sorted); // [1, 1, 2, 3, 4, 5, 6, 9]
console.log("Original unchanged:", arr); // Still [3, 1, 4, 1, 5, 9, 2, 6]

// Default lexicographic sort
const words = ["banana", "apple", "cherry"];
console.log("\\nWords sorted:", words.toSorted());
console.log("Original words:", words); // Unchanged

// Descending
const desc = arr.toSorted((a, b) => b - a);
console.log("\\nDescending:", desc);

// Chain operations without mutation
const result = arr
  .toSorted((a, b) => a - b)
  .toReversed();
console.log("\\nSorted then reversed:", result);
console.log("Original still:", arr);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="with() and toSpliced() - ES2023"
              initialCode={`const arr = ["a", "b", "c", "d", "e"];

// with(index, value) - copy with replaced element
console.log("Original:", arr);
const withNew = arr.with(2, "X");
console.log("with(2, 'X'):", withNew); // ["a", "b", "X", "d", "e"]
console.log("Original:", arr); // ["a", "b", "c", "d", "e"] (unchanged)

// Negative index
const withLast = arr.with(-1, "Z");
console.log("\\nwith(-1, 'Z'):", withLast); // ["a", "b", "c", "d", "Z"]

// vs mutation
const arr2 = ["a", "b", "c"];
arr2[1] = "X"; // Mutates
console.log("\\nMutated:", arr2); // ["a", "X", "c"]

// toSpliced(start, deleteCount, ...items) - splice without mutation
const numbers = [1, 2, 3, 4, 5];

// Remove elements
const removed = numbers.toSpliced(2, 2);
console.log("\\ntoSpliced(2, 2):", removed); // [1, 2, 5]
console.log("Original:", numbers); // [1, 2, 3, 4, 5]

// Insert elements
const inserted = numbers.toSpliced(2, 0, 99, 100);
console.log("\\nInserted:", inserted); // [1, 2, 99, 100, 3, 4, 5]

// Replace elements
const replaced = numbers.toSpliced(2, 2, 99);
console.log("Replaced:", replaced); // [1, 2, 99, 5]

// Chain immutable operations
const result = numbers
  .toSpliced(1, 2, 99)
  .toReversed()
  .with(0, 100);
console.log("\\nChained:", result);
console.log("Original still:", numbers);`}
            />
          </div>
        </section>

        {/* Iterator Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔁 Iterator Protocol (4)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="keys(), values(), entries()"
              initialCode={`const arr = ["a", "b", "c"];

// keys() - iterator of indices
console.log("keys():");
for (const key of arr.keys()) {
  console.log(key); // 0, 1, 2
}

// values() - iterator of values
console.log("\\nvalues():");
for (const value of arr.values()) {
  console.log(value); // "a", "b", "c"
}

// entries() - iterator of [index, value] pairs
console.log("\\nentries():");
for (const [index, value] of arr.entries()) {
  console.log(\`\${index}: \${value}\`);
}

// Convert to array
console.log("\\nAs arrays:");
console.log("Array.from(arr.keys()):", Array.from(arr.keys())); // [0, 1, 2]
console.log("Array.from(arr.values()):", Array.from(arr.values())); // ["a", "b", "c"]
console.log("Array.from(arr.entries()):", Array.from(arr.entries())); // [[0,"a"], [1,"b"], [2,"c"]]

// With spread
console.log("\\nWith spread:");
console.log("keys:", [...arr.keys()]); // [0, 1, 2]
console.log("entries:", [...arr.entries()]); // [[0,"a"], [1,"b"], [2,"c"]]

// Symbol.iterator (default for for...of)
console.log("\\nSymbol.iterator:");
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // {value: "a", done: false}
console.log(iterator.next()); // {value: "b", done: false}
console.log(iterator.next()); // {value: "c", done: false}
console.log(iterator.next()); // {value: undefined, done: true}`}
            />
          </div>
        </section>

        {/* Array Concepts */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💡 Array Concepts
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Sparse Arrays and Array Holes"
              initialCode={`// Sparse array - has holes (empty slots)
const sparse = [1, , 3, , 5]; // Two holes at indices 1 and 3

console.log("Sparse array:", sparse);
console.log("Length:", sparse.length); // 5
console.log("sparse[1]:", sparse[1]); // undefined

// Create sparse array
const arr1 = new Array(5); // 5 empty slots
console.log("\\nEmpty slots:", arr1);
console.log("Length:", arr1.length); // 5
console.log("arr1[0]:", arr1[0]); // undefined

// Holes vs undefined
const withUndefined = [1, undefined, 3];
const withHole = [1, , 3];

console.log("\\nWith undefined:", withUndefined);
console.log("With hole:", withHole);

// Different behavior
console.log("\\nhasOwnProperty:");
console.log("withUndefined[1]:", withUndefined.hasOwnProperty(1)); // true
console.log("withHole[1]:", withHole.hasOwnProperty(1)); // false

// How methods handle holes
console.log("\\nforEach (skips holes):");
sparse.forEach((item, i) => console.log(\`\${i}: \${item}\`));
// Skips indices 1 and 3

console.log("\\nmap (keeps holes):");
const mapped = sparse.map(x => x * 2);
console.log(mapped); // [2, , 6, , 10]

// filter removes holes
console.log("\\nfilter (removes holes):");
const filtered = sparse.filter(() => true);
console.log(filtered); // [1, 3, 5]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Array Destructuring"
              initialCode={`// Basic destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log("first:", first); // 1
console.log("second:", second); // 2

// Skip elements
const [a, , c] = arr;
console.log("\\nSkip middle:");
console.log("a:", a, "c:", c); // 1, 3

// Rest pattern
const [head, ...tail] = arr;
console.log("\\nRest:");
console.log("head:", head); // 1
console.log("tail:", tail); // [2, 3, 4, 5]

// Default values
const [x, y, z = 99] = [1, 2];
console.log("\\nDefaults:");
console.log("x:", x, "y:", y, "z:", z); // 1, 2, 99

// Nested destructuring
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log("\\nNested:");
console.log(one, two, three, four); // 1, 2, 3, 4

// Swapping variables
let var1 = "a";
let var2 = "b";
[var1, var2] = [var2, var1];
console.log("\\nAfter swap:");
console.log("var1:", var1, "var2:", var2); // "b", "a"

// Function return destructuring
function getCoordinates() {
  return [10, 20];
}

const [xPos, yPos] = getCoordinates();
console.log("\\nCoords:", xPos, yPos);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Spread and Rest in Arrays"
              initialCode={`// Spread operator - expand array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Clone array (shallow)
const clone = [...arr1];
console.log("\\nClone:", clone);
clone.push(4);
console.log("Modified clone:", clone);
console.log("Original:", arr1); // Unchanged

// Insert in middle
const inserted = [...arr1, 99, ...arr2];
console.log("\\nInserted:", inserted);

// Spread in function call
const numbers = [5, 10, 3, 8];
console.log("\\nMath.max(...numbers):", Math.max(...numbers)); // 10

// Rest parameter - collect into array
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log("\\nsum(1, 2, 3):", sum(1, 2, 3)); // 6
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15

// Rest in destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("\\nfirst:", first); // 1
console.log("rest:", rest); // [3, 4, 5]

// Shallow copy warning
const nested = [[1, 2], [3, 4]];
const copy = [...nested];
copy[0].push(99); // Modifies nested array
console.log("\\nOriginal nested:", nested); // [[1, 2, 99], [3, 4]] - Changed!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Multi-dimensional Arrays"
              initialCode={`// 2D array (array of arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Element [1][2]:", matrix[1][2]); // 6

// Iterate 2D array
console.log("\\nAll elements:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(\`[\${i}][\${j}] = \${matrix[i][j]}\`);
  }
}

// Flatten 2D array
const flat = matrix.flat();
console.log("\\nFlattened:", flat); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3D array
const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
];

console.log("\\nCube[0][1][1]:", cube[0][1][1]); // 4

// Sum all elements in 2D array
const sum = matrix.flat().reduce((a, b) => a + b, 0);
console.log("\\nSum of matrix:", sum); // 45

// Transpose matrix
function transpose(matrix) {
  return matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );
}

console.log("\\nTransposed:");
console.log(transpose(matrix));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Array-like Objects"
              initialCode={`// Array-like: has length and indexed elements, but not an array
const arrayLike = {
  0: "first",
  1: "second",
  2: "third",
  length: 3
};

console.log("Array-like:", arrayLike);
console.log("Is array:", Array.isArray(arrayLike)); // false

// Can't use array methods directly
// arrayLike.forEach(...); // Error!

// Convert to real array
const realArray = Array.from(arrayLike);
console.log("\\nConverted:", realArray);
realArray.forEach(item => console.log(item));

// Alternative conversion
const withSpread = [...arrayLike]; // Error! Not iterable
// Use Array.from for array-like objects

const withSlice = Array.prototype.slice.call(arrayLike);
console.log("\\nWith slice:", withSlice);

// Common array-like objects
function demo() {
  // arguments is array-like
  console.log("\\narguments:", arguments);
  console.log("Is array:", Array.isArray(arguments)); // false
  
  // Convert to array
  const args = Array.from(arguments);
  console.log("Converted:", args);
  
  // Use array methods
  args.forEach(arg => console.log("Arg:", arg));
}

demo("a", "b", "c");

// DOM NodeLists are array-like
// const divs = document.querySelectorAll('div'); // array-like
// const divsArray = Array.from(divs); // real array`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Common Array Patterns"
              initialCode={`// Remove duplicates
const withDups = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const unique = [...new Set(withDups)];
console.log("Unique:", unique); // [1, 2, 3, 4, 5]

// Flatten deeply nested
const deepNested = [1, [2, [3, [4, [5]]]]];
const flattened = deepNested.flat(Infinity);
console.log("\\nFlattened:", flattened); // [1, 2, 3, 4, 5]

// Chunk array
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("\\nChunked (3):", chunk(numbers, 3));

// Shuffle array
function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

console.log("\\nOriginal:", numbers);
console.log("Shuffled:", shuffle(numbers));

// Range
function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log("\\nRange 1-10:", range(1, 10));
console.log("Range 0-20 step 5:", range(0, 20, 5));

// Partition
function partition(arr, predicate) {
  const pass = [];
  const fail = [];
  arr.forEach(item => {
    (predicate(item) ? pass : fail).push(item);
  });
  return [pass, fail];
}

const [evens, odds] = partition(numbers, x => x % 2 === 0);
console.log("\\nEvens:", evens);
console.log("Odds:", odds);`}
            />
          </div>
        </section>

        {/* Method Chaining */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⛓️ Method Chaining & Composition
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Chaining Array Methods"
              initialCode={`const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "David", age: 22, active: true },
  { name: "Eve", age: 16, active: false }
];

// Chain: filter -> map -> sort
const result = users
  .filter(u => u.active) // Active users only
  .filter(u => u.age >= 18) // Adults only
  .map(u => u.name) // Get names
  .sort(); // Alphabetical

console.log("Active adults:", result);

// More complex chain
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processed = numbers
  .filter(x => x % 2 === 0) // Evens: [2, 4, 6, 8, 10]
  .map(x => x * 2) // Double: [4, 8, 12, 16, 20]
  .filter(x => x > 10) // > 10: [12, 16, 20]
  .reduce((sum, x) => sum + x, 0); // Sum: 48

console.log("\\nProcessed:", processed);

// Chain with flat
const groups = [[1, 2], [3, 4], [5, 6]];

const sumOfAll = groups
  .flat() // [1, 2, 3, 4, 5, 6]
  .reduce((a, b) => a + b, 0); // 21

console.log("\\nSum of all:", sumOfAll);

// Immutable chain (ES2023)
const original = [3, 1, 4, 1, 5, 9, 2, 6];

const immutableResult = original
  .toSorted((a, b) => a - b) // Sort
  .toSpliced(0, 2) // Remove first 2
  .with(0, 99); // Replace first

console.log("\\nResult:", immutableResult);
console.log("Original:", original); // Unchanged!`}
            />
          </div>
        </section>

        {/* All Methods Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete Array Methods (40+)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Method
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Purpose
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Mutates
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Returns
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700 bg-red-900/20">
                  <td colSpan={4} className="px-3 py-2 font-bold text-red-400">
                    MUTATING (9)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">push()</td>
                  <td className="px-3 py-2">Add to end</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">New length</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">pop()</td>
                  <td className="px-3 py-2">Remove from end</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">Removed element</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">unshift()</td>
                  <td className="px-3 py-2">Add to start</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">New length</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">shift()</td>
                  <td className="px-3 py-2">Remove from start</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">Removed element</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">splice()</td>
                  <td className="px-3 py-2">Add/remove at index</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">Removed elements</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">reverse()</td>
                  <td className="px-3 py-2">Reverse in place</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">The array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">sort()</td>
                  <td className="px-3 py-2">Sort in place</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">The array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">fill()</td>
                  <td className="px-3 py-2">Fill with value</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">The array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">copyWithin()</td>
                  <td className="px-3 py-2">Copy within</td>
                  <td className="px-3 py-2 text-red-400">✅</td>
                  <td className="px-3 py-2">The array</td>
                </tr>
                <tr className="border-t border-gray-700 bg-green-900/20">
                  <td
                    colSpan={4}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    ITERATION (11)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">forEach()</td>
                  <td className="px-3 py-2">Iterate</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">undefined</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">map()</td>
                  <td className="px-3 py-2">Transform</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">New array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">filter()</td>
                  <td className="px-3 py-2">Select</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">New array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">reduce()</td>
                  <td className="px-3 py-2">Reduce</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Single value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">reduceRight()</td>
                  <td className="px-3 py-2">Reduce R→L</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Single value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">every()</td>
                  <td className="px-3 py-2">Test all</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Boolean</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">some()</td>
                  <td className="px-3 py-2">Test any</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Boolean</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">find()</td>
                  <td className="px-3 py-2">Find first</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Element or undefined</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">findIndex()</td>
                  <td className="px-3 py-2">Find first index</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Index or -1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">findLast()</td>
                  <td className="px-3 py-2">Find last (ES2023)</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Element or undefined</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">findLastIndex()</td>
                  <td className="px-3 py-2">Find last index (ES2023)</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Index or -1</td>
                </tr>
                <tr className="border-t border-gray-700 bg-blue-900/20">
                  <td colSpan={4} className="px-3 py-2 font-bold text-blue-400">
                    ES2023 IMMUTABLE (5)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">at()</td>
                  <td className="px-3 py-2">Get with negative index</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">Element</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">with()</td>
                  <td className="px-3 py-2">Replace element</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">New array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toReversed()</td>
                  <td className="px-3 py-2">Reverse copy</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">New array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toSorted()</td>
                  <td className="px-3 py-2">Sort copy</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">New array</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toSpliced()</td>
                  <td className="px-3 py-2">Splice copy</td>
                  <td className="px-3 py-2">❌</td>
                  <td className="px-3 py-2">New array</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Array Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Prefer immutable methods
                </strong>
                <p className="ml-4 mt-1">
                  Use toSorted(), toReversed() over sort(), reverse() when
                  possible.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use array methods over loops
                </strong>
                <p className="ml-4 mt-1">
                  map(), filter(), reduce() are more declarative and functional.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use at() for negative indexing
                </strong>
                <p className="ml-4 mt-1">
                  arr.at(-1) is cleaner than arr[arr.length - 1]
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use includes() instead of indexOf() !== -1
                </strong>
                <p className="ml-4 mt-1">
                  More readable and handles NaN correctly.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use spread instead of concat()
                </strong>
                <p className="ml-4 mt-1">
                  [...arr1, ...arr2] is more modern and flexible.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Avoid mutating methods in shared code
                </strong>
                <p className="ml-4 mt-1">
                  Clone first if you need to modify: [...arr].sort()
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Remember sort() is lexicographic by default
                </strong>
                <p className="ml-4 mt-1">
                  Always use compare function for numbers: .sort((a, b) =&gt; a
                  - b)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Use flatMap() instead of map().flat()
                </strong>
                <p className="ml-4 mt-1">
                  More efficient for map + flatten operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 5 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL 40+ Array methods</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
                <div className="text-gray-400">Static Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">9</div>
                <div className="text-gray-400">Mutating Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  20+
                </div>
                <div className="text-gray-400">Non-Mutating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  11
                </div>
                <div className="text-gray-400">Iteration Methods</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all"
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
