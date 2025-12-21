"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ObjectMethodsPage() {
  return (
    <SectionLayout
      title="6.1 Object - ALL Methods & Concepts"
      description="Master every Object method (30+), prototypes, descriptors, and advanced concepts"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📦 Complete Object Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Objects are the foundation of JavaScript. This section covers{" "}
            <strong>ALL 30+ object methods</strong>, property descriptors,
            prototypes, and advanced object concepts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Creation (8)",
              "Enumeration (6)",
              "State (6)",
              "Comparison (1)",
              "Prototype (11)",
              "Descriptors",
              "Prototypes",
              "Patterns",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-cyan-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Creation & Manipulation */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Object Creation & Manipulation (8)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Object.create()"
              initialCode={`// Object.create(proto, propertiesObject) - create with specific prototype
const person = {
  greet() {
    return "Hello, I'm " + this.name;
  }
};

// Create object with person as prototype
const alice = Object.create(person);
alice.name = "Alice";

console.log(alice.greet()); // "Hello, I'm Alice"
console.log("Has greet:", alice.hasOwnProperty("greet")); // false (inherited)
console.log("Prototype:", Object.getPrototypeOf(alice) === person); // true

// Create with null prototype (no inheritance)
const nullProto = Object.create(null);
console.log("\\nnullProto:", nullProto);
console.log("Has toString:", nullProto.toString); // undefined
// No inherited properties at all!

// With property descriptors
const bob = Object.create(person, {
  name: {
    value: "Bob",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false, // Read-only
    enumerable: true
  }
});

console.log("\\nbob.name:", bob.name);
console.log("bob.age:", bob.age);
bob.age = 31; // Silently fails (strict mode throws)
console.log("After assignment:", bob.age); // Still 30

// Inherit from Array
const arrayLike = Object.create(Array.prototype);
arrayLike.push(1, 2, 3);
console.log("\\nArrayLike:", arrayLike); // Has array methods!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object.assign() - ES2015"
              initialCode={`// Object.assign(target, ...sources) - copy properties
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);
console.log("Result:", result); // {a: 1, b: 3, c: 4}
console.log("Target:", target); // Same object (mutated!)
console.log("Same reference:", result === target); // true

// Multiple sources
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const merged = Object.assign({}, obj1, obj2, obj3);
console.log("\\nMerged:", merged); // {a: 1, b: 2, c: 3}
console.log("obj1 unchanged:", obj1); // {a: 1}

// Later sources override earlier
const overridden = Object.assign({}, {x: 1}, {x: 2}, {x: 3});
console.log("\\nOverridden:", overridden); // {x: 3}

// Clone object (shallow)
const original = { name: "Alice", age: 25 };
const clone = Object.assign({}, original);
console.log("\\nClone:", clone);
clone.age = 26;
console.log("Original:", original); // Unchanged

// Modern: spread operator (preferred)
const spreadClone = { ...original };
console.log("Spread clone:", spreadClone);

// Shallow copy warning
const nested = { user: { name: "Bob" } };
const shallowCopy = Object.assign({}, nested);
shallowCopy.user.name = "Charlie";
console.log("\\nOriginal nested:", nested.user.name); // "Charlie" (changed!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object.defineProperty() and defineProperties()"
              initialCode={`// Object.defineProperty(obj, prop, descriptor)
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false, // Can't change
  enumerable: true, // Shows in for...in
  configurable: false // Can't delete or reconfigure
});

console.log("obj.name:", obj.name);
obj.name = "Bob"; // Silently fails
console.log("After assignment:", obj.name); // Still "Alice"

// Try to delete
delete obj.name; // Fails
console.log("After delete:", obj.name); // Still "Alice"

// Getters and setters
const person = {};
let _age = 0;

Object.defineProperty(person, "age", {
  get() {
    console.log("Getting age");
    return _age;
  },
  set(value) {
    console.log("Setting age to", value);
    if (value < 0) {
      console.log("Age can't be negative!");
      return;
    }
    _age = value;
  },
  enumerable: true
});

console.log("\\nperson.age:", person.age);
person.age = 25;
console.log("person.age:", person.age);
person.age = -5; // Rejected
console.log("person.age:", person.age);

// defineProperties - define multiple at once
const user = {};
Object.defineProperties(user, {
  name: { value: "Bob", writable: true, enumerable: true },
  email: { value: "bob@test.com", enumerable: false }
});

console.log("\\nuser:", user);
console.log("Keys:", Object.keys(user)); // Only "name" (email not enumerable)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object Prototype Methods"
              initialCode={`const parent = { parentProp: "parent value" };
const child = Object.create(parent);
child.childProp = "child value";

// Object.getPrototypeOf(obj)
console.log("getPrototypeOf(child):", Object.getPrototypeOf(child) === parent); // true

// Object.setPrototypeOf(obj, prototype) - ES2015
const obj = { name: "Test" };
Object.setPrototypeOf(obj, parent);
console.log("\\nAfter setPrototypeOf:");
console.log("obj.parentProp:", obj.parentProp); // "parent value"

// Warning: setPrototypeOf is slow! Use Object.create instead

// Object.getOwnPropertyDescriptor(obj, prop)
const descriptor = Object.getOwnPropertyDescriptor(child, "childProp");
console.log("\\nDescriptor:", descriptor);
/*
{
  value: "child value",
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Object.getOwnPropertyDescriptors(obj) - ES2017
const person = {
  name: "Alice",
  get age() { return 25; }
};

const descriptors = Object.getOwnPropertyDescriptors(person);
console.log("\\nAll descriptors:", descriptors);

// Use case: complete object clone with descriptors
function cloneWithDescriptors(obj) {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}

const cloned = cloneWithDescriptors(person);
console.log("\\nCloned:", cloned);`}
            />
          </div>
        </section>

        {/* Property Enumeration */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔑 Property Enumeration (6)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Object.keys(), values(), entries()"
              initialCode={`const obj = {
  name: "Alice",
  age: 25,
  city: "NYC"
};

// Object.keys(obj) - ES5 - array of keys
console.log("keys:", Object.keys(obj)); // ["name", "age", "city"]

// Object.values(obj) - ES2017 - array of values
console.log("values:", Object.values(obj)); // ["Alice", 25, "NYC"]

// Object.entries(obj) - ES2017 - array of [key, value] pairs
console.log("entries:", Object.entries(obj));
// [["name", "Alice"], ["age", 25], ["city", "NYC"]]

// Only own enumerable properties
const parent = { inherited: "value" };
const child = Object.create(parent);
child.own = "own value";

console.log("\\nChild keys:", Object.keys(child)); // ["own"]
console.log("Has inherited:", child.inherited); // "value"

// Iterate with entries
console.log("\\nIterate:");
for (const [key, value] of Object.entries(obj)) {
  console.log(\`\${key}: \${value}\`);
}

// Transform object
const doubled = Object.fromEntries(
  Object.entries({ a: 1, b: 2, c: 3 })
    .map(([k, v]) => [k, v * 2])
);
console.log("\\nDoubled:", doubled); // {a: 2, b: 4, c: 6}

// Non-enumerable properties not included
const hidden = {};
Object.defineProperty(hidden, "secret", {
  value: "hidden",
  enumerable: false
});

console.log("\\nKeys (no secret):", Object.keys(hidden)); // []
console.log("But exists:", hidden.secret); // "hidden"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object.getOwnPropertyNames() and getOwnPropertySymbols()"
              initialCode={`const obj = {
  name: "Alice",
  age: 25
};

// Add non-enumerable property
Object.defineProperty(obj, "secret", {
  value: "hidden",
  enumerable: false
});

// Add symbol property
const sym = Symbol("id");
obj[sym] = 123;

// Object.keys() - only enumerable string keys
console.log("Object.keys():", Object.keys(obj)); // ["name", "age"]

// Object.getOwnPropertyNames() - all string keys (including non-enumerable)
console.log("\\ngetOwnPropertyNames():", Object.getOwnPropertyNames(obj));
// ["name", "age", "secret"]

// Object.getOwnPropertySymbols() - ES2015 - symbol properties
console.log("\\ngetOwnPropertySymbols():", Object.getOwnPropertySymbols(obj));
// [Symbol(id)]

// Get ALL properties (strings + symbols)
function getAllProperties(obj) {
  return [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj)
  ];
}

console.log("\\nAll properties:", getAllProperties(obj));

// Check enumerable
console.log("\\nEnumerable check:");
console.log("name:", obj.propertyIsEnumerable("name")); // true
console.log("secret:", obj.propertyIsEnumerable("secret")); // false
console.log("symbol:", obj.propertyIsEnumerable(sym)); // true

// Built-in object
console.log("\\nArray keys:", Object.getOwnPropertyNames([])); // ["length"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object.fromEntries() - ES2019"
              initialCode={`// Object.fromEntries(iterable) - create object from entries
const entries = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "NYC"]
];

const obj = Object.fromEntries(entries);
console.log("From entries:", obj);

// Reverse of Object.entries()
const original = { a: 1, b: 2, c: 3 };
const entries2 = Object.entries(original);
const restored = Object.fromEntries(entries2);
console.log("\\nOriginal:", original);
console.log("Restored:", restored);

// From Map
const map = new Map([
  ["firstName", "Alice"],
  ["lastName", "Smith"]
]);

const fromMap = Object.fromEntries(map);
console.log("\\nFrom Map:", fromMap);

// Transform object
const prices = { apple: 1.5, banana: 0.8, orange: 2.0 };

const doubled = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => [fruit, price * 2])
);
console.log("\\nDoubled prices:", doubled);

// Filter object
const filtered = Object.fromEntries(
  Object.entries(prices).filter(([fruit, price]) => price >= 1)
);
console.log("\\nFiltered (>=1):", filtered);

// From array to object
const arr = ["a", "b", "c"];
const indexed = Object.fromEntries(
  arr.map((val, idx) => [idx, val])
);
console.log("\\nIndexed:", indexed); // {0: "a", 1: "b", 2: "c"}`}
            />
          </div>
        </section>

        {/* Object State */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔒 Object State Methods (6)
          </h2>

          <ConceptCard
            title="Object Immutability Levels"
            icon="🛡️"
            color="blue"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Extensible (default):</strong> Can add/delete/modify
              </li>
              <li>
                <strong>preventExtensions:</strong> Can't add, can delete/modify
              </li>
              <li>
                <strong>Sealed:</strong> Can't add/delete, can modify
              </li>
              <li>
                <strong>Frozen:</strong> Can't add/delete/modify (immutable)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Object.freeze() - Make Immutable"
              initialCode={`const obj = {
  name: "Alice",
  age: 25,
  address: { city: "NYC" }
};

// Object.freeze(obj) - make immutable
Object.freeze(obj);

// Can't modify
obj.name = "Bob"; // Silently fails
console.log("name:", obj.name); // Still "Alice"

// Can't add
obj.email = "test@test.com"; // Silently fails
console.log("email:", obj.email); // undefined

// Can't delete
delete obj.age; // Silently fails
console.log("age:", obj.age); // Still 25

// Check if frozen
console.log("\\nisFrozen:", Object.isFrozen(obj)); // true

// Shallow freeze only!
obj.address.city = "LA"; // This WORKS!
console.log("\\ncity changed:", obj.address.city); // "LA"

// Deep freeze
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (typeof obj[prop] === "object" && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
}

const deep = { user: { name: "Bob" } };
deepFreeze(deep);
deep.user.name = "Charlie"; // Now fails
console.log("\\nDeep frozen:", deep.user.name); // Still "Bob"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object.seal() and preventExtensions()"
              initialCode={`// Object.seal(obj) - prevent add/delete, allow modify
const sealed = { name: "Alice", age: 25 };
Object.seal(sealed);

// Can modify
sealed.name = "Bob";
console.log("Modified name:", sealed.name); // "Bob"

// Can't add
sealed.email = "test@test.com"; // Fails
console.log("email:", sealed.email); // undefined

// Can't delete
delete sealed.age; // Fails
console.log("age:", sealed.age); // Still 25

// Check
console.log("\\nisSealed:", Object.isSealed(sealed)); // true
console.log("isFrozen:", Object.isFrozen(sealed)); // false

// Object.preventExtensions(obj) - prevent additions only
const limited = { x: 1, y: 2 };
Object.preventExtensions(limited);

// Can modify
limited.x = 10;
console.log("\\nModified x:", limited.x); // 10

// Can delete
delete limited.y;
console.log("Deleted y:", limited.y); // undefined

// Can't add
limited.z = 3; // Fails
console.log("z:", limited.z); // undefined

// Check extensibility
console.log("\\nisExtensible:", Object.isExtensible(limited)); // false

// Summary
console.log("\\nComparison:");
const obj1 = {};
console.log("Default - extensible:", Object.isExtensible(obj1)); // true

Object.preventExtensions(obj1);
console.log("After preventExtensions:", Object.isExtensible(obj1)); // false

console.log("Sealed is extensible:", Object.isExtensible(sealed)); // false
console.log("Frozen is extensible:", Object.isExtensible(sealed)); // false`}
            />
          </div>
        </section>

        {/* Comparison */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚖️ Object.is() - SameValueZero
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Object.is() vs === vs =="
              initialCode={`// Object.is(value1, value2) - ES2015 - same value zero
console.log("Object.is(1, 1):", Object.is(1, 1)); // true
console.log("Object.is('a', 'a'):", Object.is("a", "a")); // true

// Same as ===, except for two cases:
console.log("\\nSpecial cases:");

// Case 1: NaN
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true ✓

// Case 2: +0 and -0
console.log("\\n+0 === -0:", +0 === -0); // true
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false ✓

// Regular comparisons (same as ===)
console.log("\\nRegular:");
console.log("Object.is(1, 1):", Object.is(1, 1)); // true
console.log("Object.is(1, '1'):", Object.is(1, "1")); // false
console.log("Object.is(null, null):", Object.is(null, null)); // true
console.log("Object.is(undefined, undefined):", Object.is(undefined, undefined)); // true

// Objects (reference comparison)
const obj1 = {};
const obj2 = {};
console.log("\\nObjects:");
console.log("Object.is({}, {}):", Object.is(obj1, obj2)); // false
console.log("Object.is(obj1, obj1):", Object.is(obj1, obj1)); // true

// When to use Object.is()
// - When you need to distinguish +0 from -0
// - When you need to check for NaN
// - Otherwise === is fine

// Practical: check for actual NaN
function isActualNaN(value) {
  return Object.is(value, NaN);
}

console.log("\\nisActualNaN(NaN):", isActualNaN(NaN)); // true
console.log("isActualNaN('hello'):", isActualNaN("hello")); // false`}
            />
          </div>
        </section>

        {/* Prototype Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 Object.prototype Methods
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="hasOwnProperty(), propertyIsEnumerable()"
              initialCode={`const parent = { inherited: "parent" };
const obj = Object.create(parent);
obj.own = "own value";

// Hidden property
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false
});

// hasOwnProperty(prop) - check if own property (not inherited)
console.log("obj.hasOwnProperty('own'):", obj.hasOwnProperty("own")); // true
console.log("obj.hasOwnProperty('inherited'):", obj.hasOwnProperty("inherited")); // false
console.log("obj.hasOwnProperty('hidden'):", obj.hasOwnProperty("hidden")); // true

// Safe way (in case hasOwnProperty is overridden)
console.log("\\nSafe way:");
console.log(Object.prototype.hasOwnProperty.call(obj, "own")); // true

// Modern: Object.hasOwn() - ES2022
console.log("\\nObject.hasOwn (ES2022):");
console.log("Object.hasOwn(obj, 'own'):", Object.hasOwn(obj, "own")); // true

// propertyIsEnumerable(prop) - check if enumerable
console.log("\\npropertyIsEnumerable:");
console.log("own:", obj.propertyIsEnumerable("own")); // true
console.log("hidden:", obj.propertyIsEnumerable("hidden")); // false
console.log("inherited:", obj.propertyIsEnumerable("inherited")); // false

// Practical: filter own properties
function getOwnProps(obj) {
  const props = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      props[key] = obj[key];
    }
  }
  return props;
}

console.log("\\nOwn props only:", getOwnProps(obj));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="isPrototypeOf(), toString(), valueOf()"
              initialCode={`// isPrototypeOf(obj) - check if in prototype chain
const parent = { type: "parent" };
const child = Object.create(parent);

console.log("parent.isPrototypeOf(child):", parent.isPrototypeOf(child)); // true

const grandchild = Object.create(child);
console.log("parent.isPrototypeOf(grandchild):", parent.isPrototypeOf(grandchild)); // true

// Check built-in prototypes
console.log("\\nBuilt-in:");
console.log("Object.prototype.isPrototypeOf({}):", 
  Object.prototype.isPrototypeOf({})); // true
console.log("Array.prototype.isPrototypeOf([]):", 
  Array.prototype.isPrototypeOf([])); // true

// toString() - string representation
const obj = { name: "Alice", age: 25 };
console.log("\\ntoString():", obj.toString()); // "[object Object]"

// Custom toString
obj.toString = function() {
  return \`Person: \${this.name}, \${this.age}\`;
};
console.log("Custom toString:", obj.toString());

// Type detection with toString
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log("\\nType detection:");
console.log("getType([]):", getType([])); // "Array"
console.log("getType({}):", getType({})); // "Object"
console.log("getType(new Date()):", getType(new Date())); // "Date"

// valueOf() - primitive value
const num = { value: 42, valueOf() { return this.value; } };
console.log("\\n+num:", +num); // 42 (uses valueOf)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toLocaleString()"
              initialCode={`// toLocaleString(locales, options) - locale-aware string
const obj = {
  date: new Date("2024-10-15"),
  price: 1234.56,
  count: 1000000
};

// Default toString
console.log("toString:", obj.toString()); // "[object Object]"

// Custom toLocaleString
obj.toLocaleString = function(locale) {
  return \`Date: \${this.date.toLocaleDateString(locale)}, Price: \${this.price}\`;
};

console.log("\\ntoLocaleString:");
console.log(obj.toLocaleString("en-US"));
console.log(obj.toLocaleString("de-DE"));

// Array toLocaleString
const numbers = [1234.56, 7890.12];
console.log("\\nArray:");
console.log(numbers.toLocaleString("en-US")); // "1,234.56, 7,890.12"
console.log(numbers.toLocaleString("de-DE")); // "1.234,56, 7.890,12"

// Date array
const dates = [new Date("2024-01-15"), new Date("2024-12-25")];
console.log("\\nDates:");
console.log(dates.toLocaleString("en-US"));

// Nested objects
const data = {
  values: [100, 200, 300],
  date: new Date()
};

// Each element's toLocaleString is called
console.log("\\nNested:", data.toLocaleString());`}
            />
          </div>
        </section>

        {/* Property Descriptors */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Property Descriptors
          </h2>

          <ConceptCard title="Descriptor Attributes" icon="🔧" color="purple">
            <div className="space-y-2 text-sm">
              <div>
                <strong className="text-purple-300">Data Descriptor:</strong>
                <span className="ml-2">value, writable</span>
              </div>
              <div>
                <strong className="text-purple-300">
                  Accessor Descriptor:
                </strong>
                <span className="ml-2">get, set</span>
              </div>
              <div>
                <strong className="text-purple-300">Both:</strong>
                <span className="ml-2">enumerable, configurable</span>
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Property Descriptor Attributes"
              initialCode={`const obj = {};

// Data descriptor
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: true,     // Can change value
  enumerable: true,   // Shows in for...in, Object.keys()
  configurable: true  // Can delete or reconfigure
});

// Get descriptor
const desc = Object.getOwnPropertyDescriptor(obj, "name");
console.log("Descriptor:", desc);

// writable: false
Object.defineProperty(obj, "id", {
  value: 123,
  writable: false // Read-only
});

obj.id = 456; // Silently fails
console.log("\\nid (read-only):", obj.id); // Still 123

// enumerable: false
Object.defineProperty(obj, "secret", {
  value: "hidden",
  enumerable: false
});

console.log("\\nKeys:", Object.keys(obj)); // Only "name" (secret hidden)
console.log("secret exists:", obj.secret); // "hidden"

// configurable: false
Object.defineProperty(obj, "locked", {
  value: "locked",
  configurable: false
});

// Can't delete
delete obj.locked; // Fails
console.log("\\nlocked still exists:", obj.locked); // "locked"

// Can't reconfigure (would error in strict mode)
try {
  Object.defineProperty(obj, "locked", { value: "new" });
} catch (e) {
  console.log("Can't reconfigure:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Accessor Descriptors (Getters & Setters)"
              initialCode={`const obj = {};
let _age = 0;

// Accessor descriptor
Object.defineProperty(obj, "age", {
  get() {
    console.log("Getting age");
    return _age;
  },
  set(value) {
    console.log("Setting age to", value);
    if (value < 0) {
      console.log("Invalid age!");
      return;
    }
    _age = value;
  },
  enumerable: true,
  configurable: true
});

console.log("age:", obj.age); // Calls getter
obj.age = 25; // Calls setter
console.log("age:", obj.age); // 25

obj.age = -5; // Rejected by setter
console.log("age:", obj.age); // Still 25

// Data vs Accessor descriptors
const data = Object.getOwnPropertyDescriptor(obj, "age");
console.log("\\nDescriptor:", data);
console.log("Has get:", "get" in data); // true
console.log("Has value:", "value" in data); // false (accessor, not data!)

// Can't have both!
// Object.defineProperty(obj, "bad", {
//   value: 1,
//   get() { return 1; } // Error! Can't have both
// });

// Practical: computed property
const rectangle = {};
Object.defineProperties(rectangle, {
  width: { value: 10, writable: true, enumerable: true },
  height: { value: 5, writable: true, enumerable: true },
  area: {
    get() { return this.width * this.height; },
    enumerable: true
  }
});

console.log("\\nRectangle:", rectangle);
console.log("area:", rectangle.area); // 50 (computed!)
rectangle.width = 20;
console.log("New area:", rectangle.area); // 100 (auto-updated!)`}
            />
          </div>
        </section>

        {/* Prototypes */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 Prototypes & Inheritance
          </h2>

          <ConceptCard title="Prototype Basics" icon="⛓️" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Prototype chain:</strong> Objects inherit from
                prototypes
              </li>
              <li>
                <strong>__proto__:</strong> Object's prototype (deprecated)
              </li>
              <li>
                <strong>prototype:</strong> Constructor's prototype property
              </li>
              <li>
                <strong>Lookup:</strong> Search up prototype chain
              </li>
              <li>
                <strong>Shared methods:</strong> Add to prototype to share
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Prototype Chain"
              initialCode={`// Prototype chain demonstration
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log("rabbit.eats:", rabbit.eats); // true (inherited)
console.log("rabbit.jumps:", rabbit.jumps); // true (own)

// Prototype chain
console.log("\\nPrototype:");
console.log(Object.getPrototypeOf(rabbit) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (end of chain)

// Property lookup
rabbit.walk(); // Found in prototype
console.log("\\nOwn property:", rabbit.hasOwnProperty("jumps")); // true
console.log("Inherited:", rabbit.hasOwnProperty("eats")); // false

// Add to prototype
animal.sleep = function() {
  console.log("Animal sleeps");
};

rabbit.sleep(); // Available to rabbit!

// Constructor prototype
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hi, I'm " + this.name;
};

const alice = new Person("Alice");
console.log("\\n" + alice.greet());
console.log("Prototype:", Object.getPrototypeOf(alice) === Person.prototype); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="__proto__ vs prototype"
              initialCode={`// prototype: property of constructor functions
function Animal(name) {
  this.name = name;
}

console.log("Animal.prototype:", Animal.prototype);
console.log("typeof:", typeof Animal.prototype); // "object"

// Add methods to prototype
Animal.prototype.speak = function() {
  return this.name + " makes a sound";
};

const dog = new Animal("Dog");

// __proto__: object's prototype (deprecated, use getPrototypeOf)
console.log("\\ndog.__proto__ === Animal.prototype:", 
  dog.__proto__ === Animal.prototype); // true

console.log("getPrototypeOf(dog) === Animal.prototype:",
  Object.getPrototypeOf(dog) === Animal.prototype); // true

// Instance doesn't have prototype property
console.log("\\ndog.prototype:", dog.prototype); // undefined

// Constructor property
console.log("\\ndog.constructor:", dog.constructor === Animal); // true

// Prototype chain visualization
console.log("\\nPrototype chain:");
console.log("dog -> Animal.prototype -> Object.prototype -> null");

// Verify chain
console.log("dog proto:", Object.getPrototypeOf(dog) === Animal.prototype);
console.log("Animal.prototype proto:", 
  Object.getPrototypeOf(Animal.prototype) === Object.prototype);
console.log("Object.prototype proto:", 
  Object.getPrototypeOf(Object.prototype) === null);

// Don't use __proto__ (deprecated)
// Use Object.getPrototypeOf() and Object.setPrototypeOf()`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Prototype Inheritance Patterns"
              initialCode={`// Pattern 1: Constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + " speaks";
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function() {
  return this.name + " barks!";
};

const dog = new Dog("Buddy", "Golden");
console.log(dog.speak()); // Inherited
console.log(dog.bark()); // Own

// Pattern 2: ES6 Class (modern, preferred)
class AnimalClass {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + " speaks";
  }
}

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  bark() {
    return this.name + " barks!";
  }
}

const dog2 = new DogClass("Max", "Labrador");
console.log("\\n" + dog2.speak());
console.log(dog2.bark());

// Check instanceof
console.log("\\ndog instanceof Dog:", dog instanceof Dog); // true
console.log("dog instanceof Animal:", dog instanceof Animal); // true`}
            />
          </div>
        </section>

        {/* Object Property Features */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✨ Modern Property Features (ES2015+)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Property Shorthands and Computed Names"
              initialCode={`// Property shorthand - ES2015
const name = "Alice";
const age = 25;

const person = { name, age }; // Same as { name: name, age: age }
console.log("Shorthand:", person);

// Method shorthand - ES2015
const obj = {
  // Old way
  oldMethod: function() {
    return "old";
  },
  
  // New way
  newMethod() {
    return "new";
  }
};

console.log("\\nMethods:", obj.oldMethod(), obj.newMethod());

// Computed property names - ES2015
const key = "dynamicKey";
const obj2 = {
  [key]: "value",
  ["prop_" + 1]: "first",
  ["prop_" + 2]: "second",
  [2 + 2]: "four"
};

console.log("\\nComputed:", obj2);

// Computed with symbols
const sym = Symbol("id");
const obj3 = {
  [sym]: 123,
  [Symbol.iterator]: function*() {
    yield 1;
    yield 2;
  }
};

console.log("\\nSymbol key:", obj3[sym]);

// Combine all features
const propName = "status";
const value = "active";

const combined = {
  name,
  age,
  [propName]: value,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

console.log("\\nCombined:", combined);
console.log(combined.greet());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Getters and Setters"
              initialCode={`// Getters and setters in object literals
const person = {
  firstName: "John",
  lastName: "Doe",
  
  // Getter
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  
  // Setter
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Use like properties (no parentheses!)
console.log("fullName:", person.fullName); // "John Doe"

person.fullName = "Jane Smith";
console.log("\\nAfter set:", person.fullName); // "Jane Smith"
console.log("firstName:", person.firstName); // "Jane"

// Validation in setter
const account = {
  _balance: 0,
  
  get balance() {
    return this._balance;
  },
  
  set balance(amount) {
    if (amount < 0) {
      console.log("\\nCan't set negative balance");
      return;
    }
    this._balance = amount;
  }
};

account.balance = 100;
console.log("\\nBalance:", account.balance);

account.balance = -50; // Rejected
console.log("After invalid:", account.balance); // Still 100

// Computed getter
const circle = {
  radius: 5,
  
  get area() {
    return Math.PI * this.radius ** 2;
  },
  
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
};

console.log("\\nRadius:", circle.radius);
console.log("Area:", circle.area.toFixed(2));
console.log("Circumference:", circle.circumference.toFixed(2));`}
            />
          </div>
        </section>

        {/* Object Destructuring */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Object Destructuring
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic Destructuring"
              initialCode={`// Basic object destructuring
const user = {
  name: "Alice",
  age: 25,
  city: "NYC"
};

const { name, age } = user;
console.log("name:", name); // "Alice"
console.log("age:", age); // 25

// Rename properties
const { name: userName, age: userAge } = user;
console.log("\\nuserName:", userName); // "Alice"
console.log("userAge:", userAge); // 25

// Default values
const { name: n, email = "no email" } = user;
console.log("\\nn:", n); // "Alice"
console.log("email:", email); // "no email"

// Rename + default
const { city: location = "Unknown" } = user;
console.log("location:", location); // "NYC"

const { country: c = "USA" } = user; // country doesn't exist
console.log("c:", c); // "USA"

// Rest properties - ES2018
const { name: nm, ...rest } = user;
console.log("\\nnm:", nm); // "Alice"
console.log("rest:", rest); // {age: 25, city: "NYC"}

// Nested destructuring
const data = {
  user: {
    name: "Bob",
    address: {
      city: "LA",
      zip: "90001"
    }
  }
};

const { user: { name: personName, address: { city: personCity } } } = data;
console.log("\\npersonName:", personName); // "Bob"
console.log("personCity:", personCity); // "LA"`}
            />
          </div>
        </section>

        {/* Object Comparison */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚖️ Object Comparison
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Reference vs Value Equality"
              initialCode={`// Reference equality (===)
const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };
const obj3 = obj1;

console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// Change through reference
obj3.name = "Bob";
console.log("\\nobj1.name:", obj1.name); // "Bob" (changed!)

// Shallow equality
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  
  return true;
}

console.log("\\nShallow equal:");
console.log(shallowEqual({a: 1, b: 2}, {a: 1, b: 2})); // true
console.log(shallowEqual({a: 1, b: 2}, {a: 1, b: 3})); // false

// Deep equality
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== "object" || typeof obj2 !== "object" ||
      obj1 === null || obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

console.log("\\nDeep equal:");
console.log(deepEqual({a: {b: 1}}, {a: {b: 1}})); // true
console.log(deepEqual({a: {b: 1}}, {a: {b: 2}})); // false

// JSON stringify (simple deep comparison)
const a = {x: 1, y: 2};
const b = {x: 1, y: 2};
console.log("\\nJSON compare:", JSON.stringify(a) === JSON.stringify(b)); // true`}
            />
          </div>
        </section>

        {/* Object Creation Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Object Creation Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="All Creation Patterns"
              initialCode={`// 1. Object literal
const literal = {
  name: "Alice",
  greet() { return "Hi!"; }
};
console.log("Literal:", literal);

// 2. Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return "Hi, I'm " + this.name;
};

const person1 = new Person("Bob", 30);
console.log("\\nConstructor:", person1);

// 3. Object.create()
const proto = {
  greet() { return "Hello from " + this.name; }
};

const obj = Object.create(proto);
obj.name = "Charlie";
console.log("\\nObject.create:", obj.greet());

// 4. Factory function
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return \`I'm \${this.name}, \${this.age}\`;
    }
  };
}

const user = createUser("David", 35);
console.log("\\nFactory:", user.greet());

// 5. ES6 Class (modern, preferred)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

const user2 = new User("Eve", 28);
console.log("\\nClass:", user2.greet());

// Comparison
console.log("\\nAll create objects:");
console.log("All are objects:", typeof literal === "object");`}
            />
          </div>
        </section>

        {/* Property Access */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔓 Property Access Methods
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Dot vs Bracket vs Optional Chaining"
              initialCode={`const obj = {
  name: "Alice",
  age: 25,
  "full name": "Alice Smith",
  address: {
    city: "NYC"
  }
};

// Dot notation
console.log("obj.name:", obj.name); // "Alice"
console.log("obj.age:", obj.age); // 25

// Bracket notation (for special characters, variables)
console.log("\\nBracket:");
console.log("obj['full name']:", obj["full name"]); // "Alice Smith"

const key = "age";
console.log("obj[key]:", obj[key]); // 25 (dynamic access)

// Optional chaining - ES2020
console.log("\\nOptional chaining:");
console.log("obj.address?.city:", obj.address?.city); // "NYC"
console.log("obj.contact?.email:", obj.contact?.email); // undefined (no error!)

// Deep optional chaining
console.log("obj.address?.country?.name:", obj.address?.country?.name); // undefined

// Optional method call
console.log("\\nOptional call:");
console.log("obj.greet?.():", obj.greet?.()); // undefined (method doesn't exist)

// Optional array access
const arr = [1, 2, 3];
console.log("arr?.[0]:", arr?.[0]); // 1

const nullArr = null;
console.log("nullArr?.[0]:", nullArr?.[0]); // undefined (no error!)

// Nullish coalescing with optional chaining
const result = obj.contact?.email ?? "no email";
console.log("\\nWith ??:", result); // "no email"`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Object Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use spread instead of Object.assign()
                </strong>
                <p className="ml-4 mt-1">
                  More concise: const copy = {"{...obj}"} instead of
                  Object.assign({"{}"}, obj)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use Object.hasOwn() over hasOwnProperty()
                </strong>
                <p className="ml-4 mt-1">
                  ES2022 method that's safer and cleaner.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Avoid __proto__ (use getPrototypeOf/setPrototypeOf)
                </strong>
                <p className="ml-4 mt-1">
                  __proto__ is deprecated and can cause performance issues.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use Object.freeze() for true immutability
                </strong>
                <p className="ml-4 mt-1">
                  const only prevents reassignment, not mutation.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use classes instead of constructor functions
                </strong>
                <p className="ml-4 mt-1">
                  ES6 classes are cleaner and less error-prone.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Prefer Object.create(null) for maps
                </strong>
                <p className="ml-4 mt-1">
                  Avoids inherited properties. Or use Map data structure.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use optional chaining (?.) for safe access
                </strong>
                <p className="ml-4 mt-1">
                  Prevents errors when accessing nested undefined properties.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Remember Object.assign() and spread are shallow
                </strong>
                <p className="ml-4 mt-1">
                  Nested objects are still referenced, not copied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Reference Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete Object Methods Reference (30+)
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
                    ES Version
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-blue-400">
                    CREATION & MANIPULATION
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">create()</td>
                  <td className="px-3 py-2">Create with prototype</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">assign()</td>
                  <td className="px-3 py-2">Copy properties</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">defineProperty()</td>
                  <td className="px-3 py-2">Define with descriptor</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">defineProperties()</td>
                  <td className="px-3 py-2">Define multiple props</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getPrototypeOf()</td>
                  <td className="px-3 py-2">Get prototype</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">setPrototypeOf()</td>
                  <td className="px-3 py-2">Set prototype</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    getOwnPropertyDescriptor()
                  </td>
                  <td className="px-3 py-2">Get descriptor</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    getOwnPropertyDescriptors()
                  </td>
                  <td className="px-3 py-2">Get all descriptors</td>
                  <td className="px-3 py-2">ES2017</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    PROPERTY ENUMERATION
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">keys()</td>
                  <td className="px-3 py-2">Enumerable keys</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">values()</td>
                  <td className="px-3 py-2">Enumerable values</td>
                  <td className="px-3 py-2">ES2017</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">entries()</td>
                  <td className="px-3 py-2">Enumerable [k,v] pairs</td>
                  <td className="px-3 py-2">ES2017</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getOwnPropertyNames()</td>
                  <td className="px-3 py-2">All string keys</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    getOwnPropertySymbols()
                  </td>
                  <td className="px-3 py-2">All symbol keys</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">fromEntries()</td>
                  <td className="px-3 py-2">Create from entries</td>
                  <td className="px-3 py-2">ES2019</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    OBJECT STATE
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">freeze()</td>
                  <td className="px-3 py-2">Make immutable</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">seal()</td>
                  <td className="px-3 py-2">Prevent add/delete</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">preventExtensions()</td>
                  <td className="px-3 py-2">Prevent additions</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">isFrozen()</td>
                  <td className="px-3 py-2">Check if frozen</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">isSealed()</td>
                  <td className="px-3 py-2">Check if sealed</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">isExtensible()</td>
                  <td className="px-3 py-2">Check if extensible</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-orange-400"
                  >
                    PROTOTYPE METHODS
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">hasOwnProperty()</td>
                  <td className="px-3 py-2">Check own property</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">isPrototypeOf()</td>
                  <td className="px-3 py-2">Check prototype</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    propertyIsEnumerable()
                  </td>
                  <td className="px-3 py-2">Check enumerable</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toString()</td>
                  <td className="px-3 py-2">To string</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">valueOf()</td>
                  <td className="px-3 py-2">Primitive value</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 6 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Object methods & concepts</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">30+</div>
                <div className="text-gray-400">Object Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">6</div>
                <div className="text-gray-400">Descriptor Attrs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">5</div>
                <div className="text-gray-400">Creation Patterns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Complete
                </div>
                <div className="text-gray-400">Prototype System</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
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
