"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function CollectionsPage() {
  return (
    <SectionLayout
      title="10.1 Collections - Complete"
      description="Master Map, Set, WeakMap, WeakSet with all methods including ES2024 Set operations"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📦 Complete Collections Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            ES2015 introduced powerful collection types beyond Array and Object.
            This section covers <strong>EVERYTHING</strong> about Map, Set,
            WeakMap, and WeakSet, including ES2024 Set operations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Map (10 methods)",
              "Set (16 methods)",
              "WeakMap (4 methods)",
              "WeakSet (3 methods)",
              "ES2024 Set Ops",
              "Iteration",
              "Weak References",
              "Use Cases",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-emerald-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🗺️ Map (ES2015)
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">Map:</strong> A collection of
              key-value pairs where keys can be <strong>any type</strong> (not
              just strings/symbols). Maintains insertion order.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Map Constructor & Basic Operations"
              initialCode={`// Creating Maps
const map1 = new Map();
console.log("Empty Map:", map1);
console.log("Size:", map1.size);

// From iterable (array of [key, value] pairs)
const map2 = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "NYC"]
]);
console.log("\\nFrom array:", map2);
console.log("Size:", map2.size);

// set(key, value) - add or update
map1.set("key1", "value1");
map1.set("key2", "value2");
map1.set(123, "number key");
map1.set(true, "boolean key");
console.log("\\nAfter set:", map1);

// Chaining
map1.set("a", 1).set("b", 2).set("c", 3);
console.log("After chaining:", map1.size);

// get(key) - retrieve value
console.log("\\nget('name'):", map2.get("name"));
console.log("get('age'):", map2.get("age"));
console.log("get(123):", map1.get(123));
console.log("get('nonexistent'):", map1.get("nonexistent")); // undefined

// has(key) - check existence
console.log("\\nhas('name'):", map2.has("name")); // true
console.log("has('salary'):", map2.has("salary")); // false

// delete(key) - remove entry
console.log("\\nBefore delete:", map2.size);
map2.delete("city");
console.log("After delete('city'):", map2.size);
console.log("has('city'):", map2.has("city")); // false

// clear() - remove all entries
const tempMap = new Map([["a", 1], ["b", 2]]);
console.log("\\nBefore clear:", tempMap.size);
tempMap.clear();
console.log("After clear:", tempMap.size);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Map Keys - Any Type"
              initialCode={`const map = new Map();

// String keys
map.set("string", "String key");

// Number keys
map.set(42, "Number key");
map.set(NaN, "NaN key"); // NaN works!

// Boolean keys
map.set(true, "True key");
map.set(false, "False key");

// Object keys
const obj1 = { id: 1 };
const obj2 = { id: 2 };
map.set(obj1, "Object 1");
map.set(obj2, "Object 2");

// Array keys
const arr1 = [1, 2, 3];
map.set(arr1, "Array key");

// Function keys
const func = () => {};
map.set(func, "Function key");

// Symbol keys
const sym = Symbol("key");
map.set(sym, "Symbol key");

// null/undefined keys
map.set(null, "Null key");
map.set(undefined, "Undefined key");

console.log("Map size:", map.size);

// Retrieve by reference
console.log("\\nget(obj1):", map.get(obj1));
console.log("get(arr1):", map.get(arr1));
console.log("get(func):", map.get(func));
console.log("get(NaN):", map.get(NaN));

// Different objects (even if similar) are different keys
const obj3 = { id: 1 }; // Same structure as obj1
console.log("\\nget(obj3):", map.get(obj3)); // undefined!
console.log("obj1 === obj3:", obj1 === obj3); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Map Iteration Methods"
              initialCode={`const map = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["role", "Developer"]
]);

// keys() - iterator of keys
console.log("keys():");
for (const key of map.keys()) {
  console.log("  " + key);
}

// values() - iterator of values
console.log("\\nvalues():");
for (const value of map.values()) {
  console.log("  " + value);
}

// entries() - iterator of [key, value] pairs
console.log("\\nentries():");
for (const [key, value] of map.entries()) {
  console.log(\`  \${key}: \${value}\`);
}

// Symbol.iterator (default) - same as entries()
console.log("\\nfor...of (default):");
for (const [key, value] of map) {
  console.log(\`  \${key} = \${value}\`);
}

// forEach(callback, thisArg)
console.log("\\nforEach():");
map.forEach((value, key, mapObj) => {
  console.log(\`  \${key}: \${value}\`);
  console.log("    Same map?", mapObj === map); // true
});

// Convert to Array
console.log("\\nConversions:");
console.log("Array from keys:", Array.from(map.keys()));
console.log("Array from values:", Array.from(map.values()));
console.log("Array from entries:", Array.from(map.entries()));
console.log("[...map]:", [...map]);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Map vs Object"
              initialCode={`// Comparison: Map vs Object

// 1. Key types
const map = new Map();
const obj = {};

map.set(1, "number key in Map"); // Any type
obj[1] = "converted to string in Object"; // Coerced to string

console.log("Map key type:", typeof [...map.keys()][0]); // "number"
console.log("Object key type:", typeof Object.keys(obj)[0]); // "string"

// 2. Accidental keys
console.log("\\nAccidental keys:");
console.log("obj.toString:", obj.toString); // Inherited
console.log("map.get('toString'):", map.get("toString")); // undefined

// 3. Size
console.log("\\nSize:");
console.log("Map size:", map.size); // Direct property
console.log("Object size:", Object.keys(obj).length); // Must count

// 4. Iteration
console.log("\\nIteration:");
console.log("Map is iterable:", Symbol.iterator in map); // true
console.log("Object is iterable:", Symbol.iterator in obj); // false

// 5. Order
const map2 = new Map();
map2.set("z", 1);
map2.set("a", 2);
map2.set("m", 3);
console.log("\\nMap keys:", [...map2.keys()]); // ["z", "a", "m"] - insertion order

const obj2 = {};
obj2.z = 1;
obj2.a = 2;
obj2.m = 3;
console.log("Object keys:", Object.keys(obj2)); // May be sorted in some engines

// 6. Performance
console.log("\\nWhen to use:");
console.log("Map: frequent add/remove, non-string keys, ordered");
console.log("Object: simple string keys, JSON, property access");`}
            />
          </div>
        </section>

        {/* Set */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Set (ES2015)
          </h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">Set:</strong> A collection of{" "}
              <strong>unique values</strong> of any type. No duplicates allowed.
              Maintains insertion order.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Set Constructor & Basic Operations"
              initialCode={`// Creating Sets
const set1 = new Set();
console.log("Empty Set:", set1);
console.log("Size:", set1.size);

// From iterable
const set2 = new Set([1, 2, 3, 4, 5]);
console.log("\\nFrom array:", set2);

// Automatic deduplication
const set3 = new Set([1, 2, 2, 3, 3, 3]);
console.log("\\nWith duplicates:", set3); // Only [1, 2, 3]
console.log("Size:", set3.size); // 3

// From string (characters)
const set4 = new Set("hello");
console.log("\\nFrom string:", set4); // ['h', 'e', 'l', 'o']

// add(value) - add value
set1.add(1);
set1.add(2);
set1.add(3);
console.log("\\nAfter add:", set1);

// Chaining
set1.add(4).add(5).add(6);
console.log("After chaining:", set1.size);

// Duplicates ignored
set1.add(1).add(2).add(3); // Already exist
console.log("After adding duplicates:", set1.size); // Still 6

// has(value) - check existence
console.log("\\nhas(3):", set1.has(3)); // true
console.log("has(10):", set1.has(10)); // false

// delete(value) - remove value
console.log("\\nBefore delete:", set1.size);
set1.delete(3);
console.log("After delete(3):", set1.size);
console.log("has(3):", set1.has(3)); // false

// clear() - remove all
const tempSet = new Set([1, 2, 3]);
console.log("\\nBefore clear:", tempSet.size);
tempSet.clear();
console.log("After clear:", tempSet.size);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Set Value Types & Equality"
              initialCode={`const set = new Set();

// Primitives
set.add(1);
set.add("1"); // Different from number 1
set.add(true);
set.add(null);
set.add(undefined);
set.add(NaN);
set.add(NaN); // Only one NaN (special case!)

console.log("Primitives:");
console.log(set);
console.log("Size:", set.size);

// Objects (by reference)
const obj1 = { id: 1 };
const obj2 = { id: 1 }; // Same structure, different reference
set.add(obj1);
set.add(obj2); // Both added!

console.log("\\nWith objects:", set.size);
console.log("has(obj1):", set.has(obj1)); // true
console.log("has(obj2):", set.has(obj2)); // true
console.log("has({id:1}):", set.has({ id: 1 })); // false (new object)

// Arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
set.add(arr1);
set.add(arr2); // Both added!

console.log("\\nWith arrays:", set.size);

// NaN special case
const nanSet = new Set();
nanSet.add(NaN);
nanSet.add(NaN); // Only one
nanSet.add(Number.NaN); // Same
console.log("\\nNaN count:", nanSet.size); // 1

// +0 and -0 are considered equal
const zeroSet = new Set();
zeroSet.add(+0);
zeroSet.add(-0); // Same as +0
console.log("Zero count:", zeroSet.size); // 1`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Set Iteration"
              initialCode={`const set = new Set(["apple", "banana", "cherry"]);

// values() - iterator of values
console.log("values():");
for (const value of set.values()) {
  console.log("  " + value);
}

// keys() - same as values() (for symmetry with Map)
console.log("\\nkeys() (same as values):");
for (const key of set.keys()) {
  console.log("  " + key);
}

// entries() - [value, value] pairs (for symmetry with Map)
console.log("\\nentries() [value, value]:");
for (const [key, value] of set.entries()) {
  console.log(\`  [\${key}, \${value}]\`);
}

// Symbol.iterator (default) - same as values()
console.log("\\nfor...of (default):");
for (const value of set) {
  console.log("  " + value);
}

// forEach(callback, thisArg)
console.log("\\nforEach():");
set.forEach((value, valueAgain, setObj) => {
  console.log(\`  \${value} (value === key: \${value === valueAgain})\`);
});

// Convert to Array
console.log("\\nConversions:");
console.log("Array.from():", Array.from(set));
console.log("[...set]:", [...set]);

// Array methods on Set
const doubled = [...set].map(item => item.toUpperCase());
console.log("\\nMapped:", doubled);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Set Practical Use Cases"
              initialCode={`// 1. Remove duplicates from array
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const unique = [...new Set(arr)];
console.log("Remove duplicates:", unique);

// 2. Find unique characters
const str = "hello world";
const uniqueChars = new Set(str.replace(/ /g, ""));
console.log("\\nUnique chars:", [...uniqueChars].join(","));

// 3. Membership testing (faster than array.includes)
const allowedUsers = new Set(["alice", "bob", "charlie"]);
console.log("\\nIs 'alice' allowed:", allowedUsers.has("alice")); // O(1)
console.log("Is 'dave' allowed:", allowedUsers.has("dave"));

// 4. Track unique visitors
const visitors = new Set();
function visit(user) {
  visitors.add(user);
  return visitors.size;
}

console.log("\\nVisitor count:", visit("user1")); // 1
console.log("Visitor count:", visit("user2")); // 2
console.log("Visitor count:", visit("user1")); // 2 (duplicate)

// 5. Find common elements
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const set1 = new Set(arr1);
const common = arr2.filter(x => set1.has(x));
console.log("\\nCommon elements:", common);

// 6. Check if subset
function isSubset(subset, superset) {
  for (const elem of subset) {
    if (!superset.has(elem)) return false;
  }
  return true;
}

const setA = new Set([1, 2]);
const setB = new Set([1, 2, 3, 4]);
console.log("\\nIs [1,2] subset of [1,2,3,4]:", isSubset(setA, setB));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="ES2024 Set Operations (NEW!)"
              initialCode={`// Note: ES2024 Set methods may not be available in all environments
// Check if available before using

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// union(other) - all elements from both sets
if (typeof setA.union === "function") {
  const unionSet = setA.union(setB);
  console.log("union:", [...unionSet]); // [1, 2, 3, 4, 5, 6]
} else {
  // Polyfill
  const union = new Set([...setA, ...setB]);
  console.log("union (polyfill):", [...union]);
}

// intersection(other) - common elements
if (typeof setA.intersection === "function") {
  const intersectionSet = setA.intersection(setB);
  console.log("\\nintersection:", [...intersectionSet]); // [3, 4]
} else {
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  console.log("intersection (polyfill):", [...intersection]);
}

// difference(other) - elements in A but not in B
if (typeof setA.difference === "function") {
  const diffSet = setA.difference(setB);
  console.log("\\ndifference:", [...diffSet]); // [1, 2]
} else {
  const difference = new Set([...setA].filter(x => !setB.has(x)));
  console.log("difference (polyfill):", [...difference]);
}

// symmetricDifference(other) - elements in either A or B but not both
if (typeof setA.symmetricDifference === "function") {
  const symDiffSet = setA.symmetricDifference(setB);
  console.log("\\nsymmetricDifference:", [...symDiffSet]); // [1, 2, 5, 6]
} else {
  const symDiff = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
  ]);
  console.log("symmetricDifference (polyfill):", [...symDiff]);
}

console.log("\\nNote: Use polyfills if methods not available");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="ES2024 Set Comparison Methods (NEW!)"
              initialCode={`const setA = new Set([1, 2, 3]);
const setB = new Set([1, 2, 3, 4, 5]);
const setC = new Set([4, 5]);
const setD = new Set([7, 8]);

// isSubsetOf(other) - A ⊆ B (all elements of A in B)
function isSubsetOf(a, b) {
  if (typeof a.isSubsetOf === "function") {
    return a.isSubsetOf(b);
  }
  // Polyfill
  for (const elem of a) {
    if (!b.has(elem)) return false;
  }
  return true;
}

console.log("isSubsetOf:");
console.log("  [1,2,3] subset of [1,2,3,4,5]:", isSubsetOf(setA, setB)); // true
console.log("  [1,2,3] subset of [4,5]:", isSubsetOf(setA, setC)); // false

// isSupersetOf(other) - A ⊇ B (all elements of B in A)
function isSupersetOf(a, b) {
  if (typeof a.isSupersetOf === "function") {
    return a.isSupersetOf(b);
  }
  // Polyfill
  for (const elem of b) {
    if (!a.has(elem)) return false;
  }
  return true;
}

console.log("\\nisSupersetOf:");
console.log("  [1,2,3,4,5] superset of [1,2,3]:", isSupersetOf(setB, setA)); // true
console.log("  [1,2,3] superset of [4,5]:", isSupersetOf(setA, setC)); // false

// isDisjointFrom(other) - no common elements
function isDisjointFrom(a, b) {
  if (typeof a.isDisjointFrom === "function") {
    return a.isDisjointFrom(b);
  }
  // Polyfill
  for (const elem of a) {
    if (b.has(elem)) return false;
  }
  return true;
}

console.log("\\nisDisjointFrom:");
console.log("  [1,2,3] disjoint from [4,5]:", isDisjointFrom(setA, setC)); // false (no common)
console.log("  [1,2,3] disjoint from [7,8]:", isDisjointFrom(setA, setD)); // true

console.log("\\nNote: Use polyfills if methods not available");`}
            />
          </div>
        </section>

        {/* WeakMap */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 WeakMap (ES2015)
          </h2>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-yellow-400">WeakMap:</strong> Like Map,
              but keys must be <strong>objects</strong> and are{" "}
              <strong>weakly referenced</strong>. Allows garbage collection. No
              iteration or size property.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakMap Basics"
              initialCode={`// Creating WeakMap
const wm = new WeakMap();

// Only object keys allowed!
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

// set(key, value) - key must be object
wm.set(obj1, "value 1");
wm.set(obj2, "value 2");
wm.set(obj3, "value 3");

console.log("WeakMap created");

// get(key) - retrieve value
console.log("\\nget(obj1):", wm.get(obj1));
console.log("get(obj2):", wm.get(obj2));

// has(key) - check existence
console.log("\\nhas(obj1):", wm.has(obj1)); // true
console.log("has({}):", wm.has({})); // false (different object)

// delete(key) - remove entry
wm.delete(obj3);
console.log("After delete(obj3):", wm.has(obj3)); // false

// Primitive keys NOT allowed
try {
  wm.set("string", "value"); // Error!
} catch (e) {
  console.log("\\nError with string key:", e.name);
}

try {
  wm.set(123, "value"); // Error!
} catch (e) {
  console.log("Error with number key:", e.name);
}

try {
  wm.set(Symbol("key"), "value"); // Error!
} catch (e) {
  console.log("Error with symbol key:", e.name);
}

// No size property
console.log("\\nhas size property:", "size" in wm); // false

// No iteration methods
console.log("is iterable:", Symbol.iterator in wm); // false
console.log("has keys():", "keys" in wm); // false
console.log("has values():", "values" in wm); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakMap - Weak References & GC"
              initialCode={`// Weak references allow garbage collection

// Regular Map - prevents GC
const regularMap = new Map();
let obj1 = { data: "large data structure" };
regularMap.set(obj1, "metadata");
// Even if we set obj1 = null, the object stays in memory
// because Map holds a strong reference

console.log("Regular Map:");
console.log("has(obj1):", regularMap.has(obj1)); // true
obj1 = null; // Try to release reference
// Object still in Map! No garbage collection

// WeakMap - allows GC
const weakMap = new WeakMap();
let obj2 = { data: "large data structure" };
weakMap.set(obj2, "metadata");

console.log("\\nWeakMap:");
console.log("has(obj2):", weakMap.has(obj2)); // true
obj2 = null; // Release reference
// Object can now be garbage collected!
// When GC runs, entry automatically removed from WeakMap

console.log("\\nAfter setting obj2 = null:");
console.log("WeakMap entry will be removed by GC");
console.log("(actual removal happens when GC runs)");

// This is why WeakMap has no:
// - size property (size can change due to GC)
// - keys(), values(), entries() (keys can disappear)
// - clear() (entries auto-clear when GC runs)
// - iteration (can't iterate over disappearing keys)

console.log("\\nWeakMap advantages:");
console.log("- No memory leaks");
console.log("- Automatic cleanup");
console.log("- Private data storage");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakMap Use Cases"
              initialCode={`// 1. Private data storage
class User {
  constructor(name, age) {
    privateData.set(this, { name, age });
  }
  
  getName() {
    return privateData.get(this).name;
  }
  
  getAge() {
    return privateData.get(this).age;
  }
}

const privateData = new WeakMap();

const user = new User("Alice", 25);
console.log("User name:", user.getName());
console.log("User age:", user.getAge());
console.log("Direct access:", user.name); // undefined (private!)

// 2. Caching/Memoization
const cache = new WeakMap();

function expensiveComputation(obj) {
  if (cache.has(obj)) {
    console.log("\\nReturning cached result");
    return cache.get(obj);
  }
  
  console.log("\\nComputing...");
  const result = obj.value * 2; // Expensive operation
  cache.set(obj, result);
  return result;
}

const data = { value: 10 };
console.log("First call:", expensiveComputation(data));
console.log("Second call:", expensiveComputation(data)); // cached!

// 3. Metadata storage
const metadata = new WeakMap();

function addMetadata(obj, meta) {
  metadata.set(obj, meta);
}

function getMetadata(obj) {
  return metadata.get(obj);
}

const element = { type: "button" };
addMetadata(element, { 
  clickCount: 0, 
  lastClicked: null 
});

console.log("\\nMetadata:", getMetadata(element));

// 4. DOM node data (common use case)
const domNodeData = new WeakMap();
// Store data associated with DOM nodes
// When node is removed from DOM, data auto-cleaned up`}
            />
          </div>
        </section>

        {/* WeakSet */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 WeakSet (ES2015)
          </h2>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-orange-400">WeakSet:</strong> Like Set,
              but values must be <strong>objects</strong> and are{" "}
              <strong>weakly referenced</strong>. Allows garbage collection. No
              iteration or size property.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakSet Basics"
              initialCode={`// Creating WeakSet
const ws = new WeakSet();

// Only object values allowed!
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

// add(value) - value must be object
ws.add(obj1);
ws.add(obj2);
ws.add(obj3);

console.log("WeakSet created");

// has(value) - check existence
console.log("\\nhas(obj1):", ws.has(obj1)); // true
console.log("has(obj2):", ws.has(obj2)); // true
console.log("has({}):", ws.has({})); // false (different object)

// delete(value) - remove value
ws.delete(obj3);
console.log("After delete(obj3):", ws.has(obj3)); // false

// Duplicates ignored (like Set)
ws.add(obj1); // Already exists
console.log("After adding obj1 again:", ws.has(obj1)); // true

// Primitive values NOT allowed
try {
  ws.add("string"); // Error!
} catch (e) {
  console.log("\\nError with string:", e.name);
}

try {
  ws.add(123); // Error!
} catch (e) {
  console.log("Error with number:", e.name);
}

// No size property
console.log("\\nhas size property:", "size" in ws); // false

// No iteration
console.log("is iterable:", Symbol.iterator in ws); // false
console.log("has values():", "values" in ws); // false

// No clear() method
console.log("has clear():", "clear" in ws); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakSet Use Cases"
              initialCode={`// 1. Marking objects (tagging)
const processedObjects = new WeakSet();

function processObject(obj) {
  if (processedObjects.has(obj)) {
    console.log("Already processed:", obj.id);
    return;
  }
  
  console.log("Processing:", obj.id);
  // ... process object ...
  processedObjects.add(obj);
}

const obj1 = { id: 1 };
const obj2 = { id: 2 };

processObject(obj1); // Processing
processObject(obj1); // Already processed
processObject(obj2); // Processing

// 2. Keeping track of objects
class EventEmitter {
  constructor() {
    this.listeners = new WeakSet();
  }
  
  register(listener) {
    if (this.listeners.has(listener)) {
      console.log("\\nListener already registered");
      return false;
    }
    this.listeners.add(listener);
    console.log("\\nListener registered");
    return true;
  }
  
  unregister(listener) {
    if (!this.listeners.has(listener)) {
      console.log("\\nListener not found");
      return false;
    }
    this.listeners.delete(listener);
    console.log("\\nListener unregistered");
    return true;
  }
  
  isRegistered(listener) {
    return this.listeners.has(listener);
  }
}

const emitter = new EventEmitter();
const handler = { handle: () => {} };

emitter.register(handler);
emitter.register(handler); // Already registered
console.log("Is registered:", emitter.isRegistered(handler));

// 3. Preventing object reuse
const usedTokens = new WeakSet();

function validateToken(token) {
  if (usedTokens.has(token)) {
    throw new Error("Token already used");
  }
  usedTokens.add(token);
  return true;
}

const token1 = { id: "abc123" };
console.log("\\nFirst use:", validateToken(token1)); // true
try {
  validateToken(token1); // Error!
} catch (e) {
  console.log("Second use:", e.message);
}`}
            />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Collections Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Feature
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Map
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Set
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    WeakMap
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    WeakSet
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-semibold">Key/Value Type</td>
                  <td className="px-3 py-2">Any type</td>
                  <td className="px-3 py-2">Any type</td>
                  <td className="px-3 py-2">Objects only</td>
                  <td className="px-3 py-2">Objects only</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-semibold">Reference Type</td>
                  <td className="px-3 py-2">Strong</td>
                  <td className="px-3 py-2">Strong</td>
                  <td className="px-3 py-2">Weak</td>
                  <td className="px-3 py-2">Weak</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-semibold">Size Property</td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">❌ No</td>
                  <td className="px-3 py-2">❌ No</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-semibold">Iterable</td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">❌ No</td>
                  <td className="px-3 py-2">❌ No</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-semibold">
                    Garbage Collection
                  </td>
                  <td className="px-3 py-2">Prevents GC</td>
                  <td className="px-3 py-2">Prevents GC</td>
                  <td className="px-3 py-2">Allows GC</td>
                  <td className="px-3 py-2">Allows GC</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-semibold">Use Case</td>
                  <td className="px-3 py-2">Key-value pairs</td>
                  <td className="px-3 py-2">Unique values</td>
                  <td className="px-3 py-2">Private data, cache</td>
                  <td className="px-3 py-2">Tagging objects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Collections Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use Map for key-value pairs
                </strong>
                <p className="ml-4 mt-1">
                  Better than Object when keys are not strings or need frequent
                  add/delete
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use Set for unique values
                </strong>
                <p className="ml-4 mt-1">
                  Perfect for deduplication and membership testing
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use WeakMap for object metadata
                </strong>
                <p className="ml-4 mt-1">
                  Prevents memory leaks when storing data about objects
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use WeakSet for tagging objects
                </strong>
                <p className="ml-4 mt-1">
                  Mark objects without preventing garbage collection
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Remember Map/Set maintain insertion order
                </strong>
                <p className="ml-4 mt-1">
                  Iteration order is guaranteed (unlike Object)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use ES2024 Set operations when available
                </strong>
                <p className="ml-4 mt-1">
                  More efficient than manual implementations
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. WeakMap/WeakSet only accept objects
                </strong>
                <p className="ml-4 mt-1">Primitives will throw TypeError</p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Can't iterate or get size of Weak collections
                </strong>
                <p className="ml-4 mt-1">
                  This is by design - entries can disappear due to GC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 10 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Collection types</strong> in
              JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">10</div>
                <div className="text-gray-400">Map Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  16
                </div>
                <div className="text-gray-400">Set Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">4</div>
                <div className="text-gray-400">WeakMap Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">3</div>
                <div className="text-gray-400">WeakSet Methods</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all"
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
