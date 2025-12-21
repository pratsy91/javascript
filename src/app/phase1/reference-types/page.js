"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ReferenceTypesPage() {
  return (
    <SectionLayout
      title="1.3 Data Types - Reference Types"
      description="Master Object, Array, Function, Date, RegExp, Map, Set, and more"
      prevSection={{
        title: "Primitives",
        path: "/phase1/primitives",
      }}
      nextSection={{
        title: "Type Checking & Conversion",
        path: "/phase1/type-checking",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔗 Reference Types
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Reference types are <strong>objects</strong> in JavaScript. Unlike
            primitives, they are <strong>stored by reference</strong> and are{" "}
            <strong>mutable</strong>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Object",
              "Array",
              "Function",
              "Date",
              "RegExp",
              "Map",
              "Set",
              "WeakMap",
              "WeakSet",
              "Promise",
              "Proxy",
              "Error",
            ].map((type) => (
              <div
                key={type}
                className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-green-300"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Reference vs Value */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            📦 Reference vs Value
          </h2>

          <ConceptCard title="Key Difference" icon="🔑" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Primitives:</strong> Stored by value, independent copies
              </li>
              <li>
                <strong>Objects:</strong> Stored by reference, shared references
              </li>
              <li>
                <strong>Mutation:</strong> Objects can be modified in place
              </li>
              <li>
                <strong>Comparison:</strong> Objects compared by reference, not
                content
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Primitives vs Objects - The Fundamental Difference"
              initialCode={`// PRIMITIVES: Pass by value
let a = 10;
let b = a; // Copy the value
b = 20;
console.log("a:", a); // 10 (unchanged)
console.log("b:", b); // 20

// OBJECTS: Pass by reference
let obj1 = { value: 10 };
let obj2 = obj1; // Copy the reference
obj2.value = 20;
console.log("obj1:", obj1); // { value: 20 } (changed!)
console.log("obj2:", obj2); // { value: 20 }
console.log("Same reference:", obj1 === obj2); // true

// Array example
let arr1 = [1, 2, 3];
let arr2 = arr1; // Reference copy
arr2.push(4);
console.log("arr1:", arr1); // [1, 2, 3, 4] (changed!)
console.log("arr2:", arr2); // [1, 2, 3, 4]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object Comparison - By Reference"
              initialCode={`// Objects are compared by reference
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" }; // Same content, different object
let obj3 = obj1; // Same reference

console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// Arrays too
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log("arr1 === arr2:", arr1 === arr2); // false

// Even empty objects
console.log("{} === {}:", {} === {}); // false
console.log("[] === []:", [] === []); // false

// To compare content, need deep equality check
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
console.log("Deep equal:", deepEqual(obj1, obj2)); // true`}
            />
          </div>
        </section>

        {/* Object */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📦 Object</h2>

          <ConceptCard title="Object Basics" icon="🎯" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Key-value pairs:</strong> Store data as properties
              </li>
              <li>
                <strong>Dynamic:</strong> Can add/remove properties anytime
              </li>
              <li>
                <strong>Property access:</strong> Dot notation or bracket
                notation
              </li>
              <li>
                <strong>Methods:</strong> Functions as properties
              </li>
              <li>
                <strong>Prototype chain:</strong> Inherit from Object.prototype
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Object Creation and Manipulation"
              initialCode={`// Object literal
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log("Person:", person);

// Property access
console.log("Dot notation:", person.name);
console.log("Bracket notation:", person["age"]);

// Adding properties
person.email = "alice@example.com";
person["phone"] = "555-1234";
console.log("After adding:", person);

// Deleting properties
delete person.phone;
console.log("After deleting:", person);

// Checking property existence
console.log("Has email:", "email" in person); // true
console.log("Has phone:", "phone" in person); // false
console.log("Has toString:", "toString" in person); // true (inherited!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object Methods and 'this'"
              initialCode={`// Object with methods
let calculator = {
  value: 0,
  
  add(n) {
    this.value += n;
    return this;
  },
  
  subtract(n) {
    this.value -= n;
    return this;
  },
  
  multiply(n) {
    this.value *= n;
    return this;
  },
  
  getResult() {
    return this.value;
  }
};

// Method chaining
calculator.add(10).multiply(2).subtract(5);
console.log("Result:", calculator.getResult()); // 15

// 'this' refers to the object
let obj = {
  name: "Test",
  greet() {
    console.log("Hello, I'm " + this.name);
  }
};

obj.greet(); // "Hello, I'm Test"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Computed Properties and Shorthand"
              initialCode={`// Property shorthand (ES2015)
let name = "Alice";
let age = 25;

let person = { name, age }; // Same as { name: name, age: age }
console.log("Shorthand:", person);

// Computed property names (ES2015)
let key = "dynamicKey";
let obj = {
  [key]: "value",
  ["prop_" + 1]: "first",
  ["prop_" + 2]: "second"
};
console.log("Computed:", obj);

// Method shorthand (ES2015)
let obj2 = {
  // Old way
  oldMethod: function() {
    return "old";
  },
  
  // New way (shorthand)
  newMethod() {
    return "new";
  }
};

console.log("Old:", obj2.oldMethod());
console.log("New:", obj2.newMethod());`}
            />
          </div>
        </section>

        {/* Array */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📚 Array</h2>

          <ConceptCard title="Array Basics" icon="📊" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Ordered collection:</strong> Indexed from 0
              </li>
              <li>
                <strong>Dynamic size:</strong> Can grow or shrink
              </li>
              <li>
                <strong>Mixed types:</strong> Can hold any values
              </li>
              <li>
                <strong>Array methods:</strong> 30+ built-in methods
              </li>
              <li>
                <strong>Iterable:</strong> Can use for...of, spread, etc.
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Array Creation and Access"
              initialCode={`// Array literal
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Mixed types
let mixed = [1, "two", true, null, { key: "value" }, [1, 2]];
console.log("Mixed:", mixed);

// Array constructor
let arr = new Array(5); // Array with 5 empty slots
console.log("Empty array:", arr);
console.log("Length:", arr.length);

// Access by index
console.log("First:", numbers[0]);
console.log("Last:", numbers[numbers.length - 1]);

// Negative indexing with at() (ES2022)
console.log("Last with at():", numbers.at(-1));
console.log("Second to last:", numbers.at(-2));

// Modifying elements
numbers[0] = 10;
console.log("Modified:", numbers);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Common Array Methods"
              initialCode={`let arr = [1, 2, 3, 4, 5];

// Add/Remove from ends
arr.push(6); // Add to end
console.log("After push:", arr);

arr.pop(); // Remove from end
console.log("After pop:", arr);

arr.unshift(0); // Add to beginning
console.log("After unshift:", arr);

arr.shift(); // Remove from beginning
console.log("After shift:", arr);

// Slice (non-mutating)
let sliced = arr.slice(1, 3);
console.log("Sliced:", sliced);
console.log("Original:", arr); // Unchanged

// Splice (mutating)
let numbers = [1, 2, 3, 4, 5];
let removed = numbers.splice(2, 2, 99, 100); // Remove 2, add 99, 100
console.log("Removed:", removed);
console.log("After splice:", numbers);

// Find and filter
let found = arr.find(x => x > 3);
let filtered = arr.filter(x => x > 2);
console.log("Found:", found);
console.log("Filtered:", filtered);`}
            />
          </div>
        </section>

        {/* Function */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⚡ Function</h2>

          <ConceptCard title="Function Basics" icon="🎮" color="orange">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>First-class objects:</strong> Can be assigned, passed,
                returned
              </li>
              <li>
                <strong>Multiple forms:</strong> Declaration, expression, arrow
              </li>
              <li>
                <strong>Closures:</strong> Access outer scope variables
              </li>
              <li>
                <strong>Methods:</strong> call(), apply(), bind()
              </li>
              <li>
                <strong>Properties:</strong> name, length, prototype
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Function Types"
              initialCode={`// Function declaration
function greet(name) {
  return "Hello, " + name;
}
console.log("Declaration:", greet("Alice"));

// Function expression
const sayHi = function(name) {
  return "Hi, " + name;
};
console.log("Expression:", sayHi("Bob"));

// Arrow function (ES2015)
const welcome = (name) => "Welcome, " + name;
console.log("Arrow:", welcome("Charlie"));

// Arrow with block
const greetFormal = (name) => {
  const message = "Good day, " + name;
  return message;
};
console.log("Arrow block:", greetFormal("David"));

// Functions are objects!
console.log("typeof function:", typeof greet); // "function"
console.log("function instanceof Object:", greet instanceof Object); // true
console.log("function.name:", greet.name);
console.log("function.length:", greet.length); // number of parameters`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Higher-Order Functions"
              initialCode={`// Functions that take functions
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, (i) => console.log("Iteration:", i));

// Functions that return functions
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// Practical example: filter, map, reduce
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);`}
            />
          </div>
        </section>

        {/* Date */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📅 Date</h2>

          <ConceptCard title="Date Basics" icon="🕐" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Timestamp:</strong> Milliseconds since Jan 1, 1970
              </li>
              <li>
                <strong>Creation:</strong> new Date() constructor
              </li>
              <li>
                <strong>Get/Set methods:</strong> Access date components
              </li>
              <li>
                <strong>Formatting:</strong> Various toString methods
              </li>
              <li>
                <strong>Timezone:</strong> Local and UTC methods
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Working with Dates"
              initialCode={`// Current date and time
let now = new Date();
console.log("Now:", now);
console.log("Type:", typeof now); // "object"

// Specific date
let date1 = new Date(2024, 0, 15); // Jan 15, 2024 (month is 0-indexed!)
console.log("Specific date:", date1);

// From string
let date2 = new Date("2024-03-15");
console.log("From string:", date2);

// From timestamp
let date3 = new Date(1700000000000);
console.log("From timestamp:", date3);

// Get components
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date (1-31):", now.getDate());
console.log("Day (0-6):", now.getDay()); // 0 = Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());

// Timestamp
console.log("Timestamp:", now.getTime());
console.log("Now timestamp:", Date.now()); // Static method`}
            />
          </div>
        </section>

        {/* RegExp */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔍 RegExp</h2>

          <ConceptCard title="RegExp Basics" icon="🎯" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Pattern matching:</strong> Search and match text
              </li>
              <li>
                <strong>Creation:</strong> Literal /pattern/ or new RegExp()
              </li>
              <li>
                <strong>Flags:</strong> g (global), i (case-insensitive), m
                (multiline)
              </li>
              <li>
                <strong>Methods:</strong> test(), exec()
              </li>
              <li>
                <strong>String methods:</strong> match(), replace(), search()
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Regular Expressions"
              initialCode={`// Literal notation
let regex1 = /hello/i; // i = case-insensitive
console.log("Type:", typeof regex1); // "object"

// Constructor
let regex2 = new RegExp("world", "gi"); // g = global, i = case-insensitive

// Test for match
let text = "Hello World! Hello everyone!";
console.log("Has 'hello':", /hello/i.test(text)); // true
console.log("Has 'goodbye':", /goodbye/i.test(text)); // false

// Find matches
let matches = text.match(/hello/gi);
console.log("All matches:", matches); // ["Hello", "Hello"]

// Replace
let replaced = text.replace(/hello/gi, "Hi");
console.log("Replaced:", replaced);

// Common patterns
let email = "test@example.com";
let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
console.log("Valid email:", emailRegex.test(email));

let phone = "123-456-7890";
let phoneRegex = /^\\d{3}-\\d{3}-\\d{4}$/;
console.log("Valid phone:", phoneRegex.test(phone));`}
            />
          </div>
        </section>

        {/* Map and Set */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🗺️ Map & Set (ES2015)
          </h2>

          <ConceptCard title="Map & Set Basics" icon="🎲" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Map:</strong> Key-value pairs, any type as key
              </li>
              <li>
                <strong>Set:</strong> Unique values collection
              </li>
              <li>
                <strong>Iteration order:</strong> Maintains insertion order
              </li>
              <li>
                <strong>Size property:</strong> Get number of items
              </li>
              <li>
                <strong>Better performance:</strong> For add/delete operations
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Map - Key-Value Store"
              initialCode={`// Create a Map
let map = new Map();

// Set values
map.set("name", "Alice");
map.set("age", 25);
map.set(1, "number key");
map.set(true, "boolean key");

console.log("Map:", map);
console.log("Size:", map.size);

// Get values
console.log("Get 'name':", map.get("name"));
console.log("Get 1:", map.get(1));

// Check existence
console.log("Has 'age':", map.has("age"));

// Delete
map.delete("age");
console.log("After delete:", map);

// Objects as keys (unlike plain objects!)
let obj = { id: 1 };
map.set(obj, "object as key");
console.log("Get object key:", map.get(obj));

// Iterate
console.log("\\nIterating:");
for (let [key, value] of map) {
  console.log(key, "=>", value);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Set - Unique Values"
              initialCode={`// Create a Set
let set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate ignored!

console.log("Set:", set);
console.log("Size:", set.size); // 3

// Check existence
console.log("Has 2:", set.has(2));
console.log("Has 10:", set.has(10));

// Remove duplicates from array
let numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
let unique = [...new Set(numbers)];
console.log("Original:", numbers);
console.log("Unique:", unique);

// Iterate
console.log("\\nIterating:");
for (let value of set) {
  console.log(value);
}

// Set operations (ES2024)
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

// Note: These methods may not be available in all environments yet
console.log("Set A:", Array.from(setA));
console.log("Set B:", Array.from(setB));`}
            />
          </div>
        </section>

        {/* Promise */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Promise (ES2015)
          </h2>

          <ConceptCard title="Promise Basics" icon="🤝" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Asynchronous:</strong> Handle async operations
              </li>
              <li>
                <strong>States:</strong> Pending, fulfilled, rejected
              </li>
              <li>
                <strong>Methods:</strong> then(), catch(), finally()
              </li>
              <li>
                <strong>Static methods:</strong> Promise.all(), Promise.race()
              </li>
              <li>
                <strong>Chaining:</strong> Sequential async operations
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Promise Basics"
              initialCode={`// Create a Promise
let promise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// Use the Promise
promise
  .then(result => {
    console.log("Success:", result);
    return "Next value";
  })
  .then(value => {
    console.log("Chained:", value);
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed");
  });

// Simulating async operation
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

console.log("Starting...");
delay(1000).then(() => {
  console.log("1 second passed!");
});`}
            />
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Reference Types Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Purpose
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Creation
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Mutable
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">Object</td>
                  <td className="px-3 py-2">Key-value collections</td>
                  <td className="px-3 py-2 font-mono text-sm">{"{}"}</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">Array</td>
                  <td className="px-3 py-2">Ordered lists</td>
                  <td className="px-3 py-2 font-mono text-sm">[]</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-orange-400">
                    Function
                  </td>
                  <td className="px-3 py-2">Reusable code blocks</td>
                  <td className="px-3 py-2 font-mono text-sm">function(){}</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">Date</td>
                  <td className="px-3 py-2">Date and time</td>
                  <td className="px-3 py-2 font-mono text-sm">new Date()</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">
                    RegExp
                  </td>
                  <td className="px-3 py-2">Pattern matching</td>
                  <td className="px-3 py-2 font-mono text-sm">/pattern/</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-green-400">Map</td>
                  <td className="px-3 py-2">Key-value with any keys</td>
                  <td className="px-3 py-2 font-mono text-sm">new Map()</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-green-400">Set</td>
                  <td className="px-3 py-2">Unique values</td>
                  <td className="px-3 py-2 font-mono text-sm">new Set()</td>
                  <td className="px-3 py-2">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">Promise</td>
                  <td className="px-3 py-2">Async operations</td>
                  <td className="px-3 py-2 font-mono text-sm">new Promise()</td>
                  <td className="px-3 py-2">❌ No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              🎯 Key Takeaways
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                ✅ <strong>Reference types are objects</strong> - stored by
                reference, not value
              </p>
              <p>
                ✅ <strong>Mutable</strong> - can be modified after creation
              </p>
              <p>
                ✅ <strong>Compared by reference</strong> - not by content
              </p>
              <p>
                ✅ <strong>Multiple references</strong> - changing one affects
                all
              </p>
              <p>
                ✅ <strong>typeof returns "object"</strong> - except for
                functions
              </p>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
