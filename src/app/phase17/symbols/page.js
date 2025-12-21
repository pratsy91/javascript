"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function SymbolsPage() {
  return (
    <SectionLayout
      title="17.1 Symbols - Complete"
      description="Master Symbol basics, global registry, and all 13 well-known symbols"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔣 Complete Symbols Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Symbols are unique, immutable primitive values introduced in ES2015.
            This section covers <strong>EVERYTHING</strong> about Symbols,
            including all 13 well-known symbols.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Symbol()",
              "Global Registry",
              "13 Well-Known",
              "Symbol.iterator",
              "Property Keys",
              "Uniqueness",
              "Meta-programming",
              "Protocols",
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

        {/* Symbol Basics */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔤 Symbol Basics
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Creating Symbols"
              initialCode={`// Symbol(description) - create unique symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("description");
const sym4 = Symbol("description");

console.log("Type:", typeof sym1); // "symbol"

// Every symbol is unique
console.log("\\nUniqueness:");
console.log("sym1 === sym2:", sym1 === sym2); // false
console.log("sym3 === sym4:", sym3 === sym4); // false (same desc, different symbol)

// Description is optional
console.log("\\nDescriptions:");
console.log("sym1:", sym1.toString()); // "Symbol()"
console.log("sym3:", sym3.toString()); // "Symbol(description)"
console.log("Description:", sym3.description); // "description"

// Cannot use new keyword
try {
  new Symbol(); // TypeError
} catch (e) {
  console.log("\\nError with new:", e.message);
}

// Symbols are primitive, not objects
console.log("\\nIs primitive:", typeof sym1 === "symbol"); // true
console.log("Is object:", sym1 instanceof Object); // false

// Coercion
console.log("\\nCoercion:");
console.log("String:", String(sym1)); // "Symbol()"
console.log("Boolean:", Boolean(sym1)); // true
// console.log("Number:", Number(sym1)); // TypeError!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Symbols as Object Keys"
              initialCode={`// Symbols can be used as property keys

const id = Symbol("id");
const name = Symbol("name");

const user = {
  [id]: 123,
  [name]: "Alice",
  age: 25
};

console.log("Object with symbol keys:");
console.log("user[id]:", user[id]); // 123
console.log("user[name]:", user[name]); // "Alice"
console.log("user.age:", user.age); // 25

// Symbol properties are not enumerable
console.log("\\nEnumeration:");
console.log("Object.keys:", Object.keys(user)); // ["age"] - no symbols!
console.log("for...in:", Object.keys(user)); // Same

for (const key in user) {
  console.log("  " + key); // Only "age"
}

// But they're not truly private
console.log("\\nSymbol properties are visible with:");
console.log("Object.getOwnPropertySymbols:", Object.getOwnPropertySymbols(user));
console.log("Reflect.ownKeys:", Reflect.ownKeys(user)); // All keys

// Useful for "hidden" properties
const _privateData = Symbol("privateData");

class Person {
  constructor(name) {
    this.name = name;
    this[_privateData] = { secret: "data" };
  }
  
  getPrivate() {
    return this[_privateData];
  }
}

const person = new Person("Bob");
console.log("\\nPublic:", person.name);
console.log("Private:", person.getPrivate());
console.log("Keys:", Object.keys(person)); // ["name"] only`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Global Symbol Registry"
              initialCode={`// Symbol.for(key) - get/create global symbol
// Symbol.keyFor(symbol) - get key from global symbol

// Create or get global symbol
const sym1 = Symbol.for("app.id");
const sym2 = Symbol.for("app.id");

console.log("Global symbols:");
console.log("sym1 === sym2:", sym1 === sym2); // true! (same registry key)

// Different from local symbols
const local1 = Symbol("app.id");
const local2 = Symbol("app.id");
console.log("\\nLocal symbols:");
console.log("local1 === local2:", local1 === local2); // false

// Mixed
const global = Symbol.for("shared");
const local = Symbol("shared");
console.log("\\nGlobal vs local:");
console.log("global === local:", global === local); // false

// Symbol.keyFor() - get registry key
console.log("\\nSymbol.keyFor:");
console.log("Global key:", Symbol.keyFor(sym1)); // "app.id"
console.log("Local key:", Symbol.keyFor(local1)); // undefined (not in registry)

// Cross-realm sharing (iframes, workers)
console.log("\\nGlobal registry use case:");
console.log("Share symbols across realms (iframes, workers)");
console.log("Symbol.for('shared') is the same everywhere");

// Conventional naming
const APP_ID = Symbol.for("com.myapp.id");
const APP_NAME = Symbol.for("com.myapp.name");

const obj = {
  [APP_ID]: 123,
  [APP_NAME]: "MyApp"
};

console.log("\\nWith naming convention:");
console.log("ID:", obj[Symbol.for("com.myapp.id")]);
console.log("Name:", obj[Symbol.for("com.myapp.name")]);`}
            />
          </div>
        </section>

        {/* Well-Known Symbols */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⭐ Well-Known Symbols (ALL 13)
          </h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">Well-Known Symbols:</strong>{" "}
              Built-in symbols that customize object behavior in JavaScript.
              They define protocols for iteration, type conversion, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="Symbol.iterator" icon="🔄" color="blue">
              Default iterator protocol
            </ConceptCard>
            <ConceptCard title="Symbol.asyncIterator" icon="⏳" color="green">
              Async iterator protocol (ES2018)
            </ConceptCard>
            <ConceptCard title="Symbol.hasInstance" icon="✓" color="yellow">
              Customize instanceof
            </ConceptCard>
            <ConceptCard title="Symbol.toStringTag" icon="🏷️" color="orange">
              Customize Object.prototype.toString
            </ConceptCard>
            <ConceptCard title="Symbol.toPrimitive" icon="🔄" color="red">
              Type conversion behavior
            </ConceptCard>
            <ConceptCard title="Symbol.species" icon="🧬" color="pink">
              Constructor for derived objects
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="1. Symbol.iterator - Custom Iterator"
              initialCode={`// Symbol.iterator defines default iteration behavior

const range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

// Works with for...of
console.log("for...of:");
for (const num of range) {
  console.log("  " + num);
}

// Works with spread
console.log("\\nSpread:", [...range]);

// Works with destructuring
const [first, second, ...rest] = range;
console.log("\\nDestructure:");
console.log("first:", first, "second:", second, "rest:", rest);

// Built-in iterables
console.log("\\nBuilt-in iterables:");
console.log("Array has iterator:", Symbol.iterator in []);
console.log("String has iterator:", Symbol.iterator in "");
console.log("Map has iterator:", Symbol.iterator in new Map());
console.log("Object has iterator:", Symbol.iterator in {}); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="2. Symbol.asyncIterator - Async Iterator (ES2018)"
              initialCode={`// Symbol.asyncIterator for async iteration

const asyncRange = {
  from: 1,
  to: 5,
  
  [Symbol.asyncIterator]() {
    let current = this.from;
    const last = this.to;
    
    return {
      async next() {
        await new Promise(r => setTimeout(r, 100));
        
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

async function demo() {
  console.log("for await...of:");
  
  for await (const num of asyncRange) {
    console.log("  " + num);
  }
  
  console.log("Done!");
}

demo();

// Async generator is simpler
async function* asyncGen() {
  for (let i = 1; i <= 5; i++) {
    await new Promise(r => setTimeout(r, 100));
    yield i;
  }
}

async function demo2() {
  console.log("\\nAsync generator:");
  
  for await (const num of asyncGen()) {
    console.log("  " + num);
  }
}

demo2();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="3. Symbol.hasInstance - Custom instanceof"
              initialCode={`// Symbol.hasInstance customizes instanceof behavior

class MyArray {
  static [Symbol.hasInstance](instance) {
    // Custom instanceof logic
    return Array.isArray(instance);
  }
}

console.log("Custom instanceof:");
console.log("[1,2,3] instanceof MyArray:", [1, 2, 3] instanceof MyArray); // true
console.log("{} instanceof MyArray:", {} instanceof MyArray); // false

// Practical: type checking
class Numeric {
  static [Symbol.hasInstance](instance) {
    return typeof instance === "number" || instance instanceof Number;
  }
}

console.log("\\nNumeric instanceof:");
console.log("42 instanceof Numeric:", 42 instanceof Numeric); // true
console.log("new Number(42) instanceof Numeric:", new Number(42) instanceof Numeric); // true
console.log("'42' instanceof Numeric:", "42" instanceof Numeric); // false

// Duck typing
class Quackable {
  static [Symbol.hasInstance](instance) {
    return typeof instance.quack === "function";
  }
}

const duck = { quack: () => "Quack!" };
const person = { speak: () => "Hello" };

console.log("\\nDuck typing:");
console.log("duck instanceof Quackable:", duck instanceof Quackable); // true
console.log("person instanceof Quackable:", person instanceof Quackable); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="4. Symbol.toStringTag - Custom toString"
              initialCode={`// Symbol.toStringTag customizes Object.prototype.toString

class Person {
  get [Symbol.toStringTag]() {
    return "Person";
  }
}

const person = new Person();
console.log("toString:", Object.prototype.toString.call(person));
// "[object Person]" instead of "[object Object]"

// Built-in examples
console.log("\\nBuilt-in toStringTag:");
console.log("Array:", Object.prototype.toString.call([])); // [object Array]
console.log("Map:", Object.prototype.toString.call(new Map())); // [object Map]
console.log("Promise:", Object.prototype.toString.call(Promise.resolve())); // [object Promise]

// Custom tag
const myObj = {
  [Symbol.toStringTag]: "MyCustomType"
};

console.log("\\nCustom:", Object.prototype.toString.call(myObj));
// "[object MyCustomType]"

// Useful for debugging
class API {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  
  get [Symbol.toStringTag]() {
    return \`API(\${this.endpoint})\`;
  }
}

const api = new API("/users");
console.log("\\nAPI toString:", Object.prototype.toString.call(api));
console.log("String(api):", String(api));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="5. Symbol.toPrimitive - Type Conversion"
              initialCode={`// Symbol.toPrimitive customizes type conversion

const obj = {
  value: 100,
  
  [Symbol.toPrimitive](hint) {
    console.log(\`Hint: \${hint}\`);
    
    if (hint === "number") {
      return this.value;
    }
    if (hint === "string") {
      return \`Value: \${this.value}\`;
    }
    // default (e.g., +obj or obj + "")
    return this.value;
  }
};

console.log("Number context:");
console.log(+obj); // Hint: "number", returns 100

console.log("\\nString context:");
console.log(String(obj)); // Hint: "string", returns "Value: 100"

console.log("\\nDefault context:");
console.log(obj + ""); // Hint: "default", returns 100

// Comparison
console.log("\\nComparison:");
console.log(obj == 100); // Hint: "default", true

// Custom money object
class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.amount;
    }
    return \`\${this.amount} \${this.currency}\`;
  }
}

const price = new Money(99.99, "USD");
console.log("\\nMoney object:");
console.log("As number:", +price); // 99.99
console.log("As string:", String(price)); // "99.99 USD"
console.log("In template:", \`Price: \${price}\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="6. Symbol.isConcatSpreadable - Array concat"
              initialCode={`// Symbol.isConcatSpreadable controls array spreading in concat

const arr1 = [1, 2, 3];

// Default behavior - arrays spread
console.log("Default:");
console.log([0].concat(arr1)); // [0, 1, 2, 3]

// Make array not spreadable
arr1[Symbol.isConcatSpreadable] = false;
console.log("\\nNot spreadable:");
console.log([0].concat(arr1)); // [0, [1, 2, 3]]

// Make array-like object spreadable
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  [Symbol.isConcatSpreadable]: true
};

console.log("\\nArray-like spreadable:");
console.log([0].concat(arrayLike)); // [0, "a", "b"]

// Without flag
const arrayLike2 = {
  length: 2,
  0: "x",
  1: "y"
};

console.log("\\nArray-like default:");
console.log([0].concat(arrayLike2)); // [0, {length: 2, 0: "x", 1: "y"}]

// Reset
arr1[Symbol.isConcatSpreadable] = true;
console.log("\\nReset to spreadable:");
console.log([0].concat(arr1)); // [0, 1, 2, 3]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="7. Symbol.species - Derived Constructors"
              initialCode={`// Symbol.species specifies constructor for derived objects

class MyArray extends Array {
  // Override species to return regular Array
  static get [Symbol.species]() {
    return Array;
  }
}

const myArr = new MyArray(1, 2, 3);
console.log("myArr:", myArr);
console.log("Is MyArray:", myArr instanceof MyArray); // true

// map() uses species constructor
const mapped = myArr.map(x => x * 2);
console.log("\\nmapped:", mapped);
console.log("Is Array:", mapped instanceof Array); // true
console.log("Is MyArray:", mapped instanceof MyArray); // false (used Array!)

// Without species override
class MyArray2 extends Array {
  // Uses default (returns MyArray2)
}

const myArr2 = new MyArray2(1, 2, 3);
const mapped2 = myArr2.map(x => x * 2);

console.log("\\nWithout species override:");
console.log("Is MyArray2:", mapped2 instanceof MyArray2); // true

// Methods that use species:
console.log("\\nMethods using species:");
console.log("- map(), filter(), slice()");
console.log("- concat(), splice()");
console.log("- Promise.then() for Promise subclasses");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="8-11. Symbol.match/matchAll/replace/search/split"
              initialCode={`// String methods use these symbols

// Symbol.match - String.prototype.match()
const regexp1 = /test/;
console.log("Symbol.match:");
console.log("'test'.match(regexp):", "test".match(regexp1));

// Custom matcher
const customMatcher = {
  [Symbol.match](string) {
    return string.includes("custom") ? ["found!"] : null;
  }
};

console.log("\\nCustom matcher:");
console.log("'custom'.match:", "custom text".match(customMatcher));

// Symbol.replace - String.prototype.replace()
const customReplacer = {
  [Symbol.replace](string, replacement) {
    return string.toUpperCase();
  }
};

console.log("\\nSymbol.replace:");
console.log("'hello'.replace:", "hello".replace(customReplacer, ""));

// Symbol.search - String.prototype.search()
const customSearcher = {
  [Symbol.search](string) {
    return string.indexOf("world");
  }
};

console.log("\\nSymbol.search:");
console.log("'hello world'.search:", "hello world".search(customSearcher));

// Symbol.split - String.prototype.split()
const customSplitter = {
  [Symbol.split](string) {
    return string.split(" ");
  }
};

console.log("\\nSymbol.split:");
console.log("'a b c'.split:", "a b c".split(customSplitter));

// Symbol.matchAll (ES2020)
console.log("\\nThese symbols allow custom:");
console.log("- Pattern matching");
console.log("- String manipulation");
console.log("- Search algorithms");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="12. Symbol.unscopables - with Statement"
              initialCode={`// Symbol.unscopables - exclude properties from with

const obj = {
  a: 1,
  b: 2,
  c: 3
};

// By default, all properties available in with
console.log("Without unscopables:");
with (obj) {
  console.log("  a:", a); // 1
  console.log("  b:", b); // 2
}

// Make 'b' unscopable
obj[Symbol.unscopables] = {
  b: true
};

console.log("\\nWith unscopables:");
try {
  with (obj) {
    console.log("  a:", a); // 1
    // console.log("  b:", b); // ReferenceError!
  }
} catch (e) {
  console.log("  b is unscopable");
}

// Array.prototype uses this
const arr = [1, 2, 3];
console.log("\\nArray unscopables:");
console.log(Array.prototype[Symbol.unscopables]);

// Note: with statement is deprecated
console.log("\\nNote: 'with' is deprecated");
console.log("Avoid using it in new code");
console.log("Symbol.unscopables mainly for compatibility");`}
            />
          </div>
        </section>

        {/* Practical Use Cases */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Symbol Use Cases
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Private-like Properties"
              initialCode={`// Symbols for "private" properties (pre-# syntax)

const _balance = Symbol("balance");
const _transactions = Symbol("transactions");

class BankAccount {
  constructor(initialBalance) {
    this[_balance] = initialBalance;
    this[_transactions] = [];
  }
  
  deposit(amount) {
    this[_balance] += amount;
    this[_transactions].push({ type: "deposit", amount });
  }
  
  withdraw(amount) {
    if (amount > this[_balance]) {
      throw new Error("Insufficient funds");
    }
    this[_balance] -= amount;
    this[_transactions].push({ type: "withdraw", amount });
  }
  
  getBalance() {
    return this[_balance];
  }
  
  getHistory() {
    return [...this[_transactions]];
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log("Balance:", account.getBalance());
console.log("History:", account.getHistory());

// Symbol properties not in Object.keys
console.log("\\nObject.keys:", Object.keys(account)); // []

// But accessible if you have the symbol
console.log("Direct access:", account[_balance]); // 1300

console.log("\\nSymbols provide 'soft privacy'");
console.log("Not truly private, but hidden from enumeration");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Avoiding Property Collisions"
              initialCode={`// Symbols prevent property name collisions

// Library A
const LibA_id = Symbol("id");
const libA = {
  [LibA_id]: "lib-a-123"
};

// Library B (different symbol even with same description)
const LibB_id = Symbol("id");
const libB = {
  [LibB_id]: "lib-b-456"
};

// Merge objects - no collision!
const merged = { ...libA, ...libB };

console.log("Merged object:");
console.log("LibA id:", merged[LibA_id]); // "lib-a-123"
console.log("LibB id:", merged[LibB_id]); // "lib-b-456"

// vs string keys (collision!)
const obj1 = { id: "obj1" };
const obj2 = { id: "obj2" };
const merged2 = { ...obj1, ...obj2 };

console.log("\\nString key collision:");
console.log("id:", merged2.id); // "obj2" (obj1.id lost!)

// Framework metadata
const REACT_ELEMENT = Symbol.for("react.element");
const VUE_COMPONENT = Symbol.for("vue.component");

const element = {
  type: "div",
  [REACT_ELEMENT]: true
};

console.log("\\nFramework markers:");
console.log("Is React element:", element[REACT_ELEMENT]);

function isReactElement(obj) {
  return obj && obj[Symbol.for("react.element")] === true;
}

console.log("Check:", isReactElement(element));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Custom Protocols with Symbols"
              initialCode={`// Define custom protocols using symbols

const Serializable = Symbol("Serializable");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  [Serializable]() {
    return {
      type: "User",
      data: {
        name: this.name,
        email: this.email
      }
    };
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  [Serializable]() {
    return {
      type: "Product",
      data: {
        name: this.name,
        price: this.price
      }
    };
  }
}

// Generic serializer
function serialize(obj) {
  if (obj && typeof obj[Serializable] === "function") {
    return JSON.stringify(obj[Serializable]());
  }
  return JSON.stringify(obj);
}

const user = new User("Alice", "alice@example.com");
const product = new Product("Widget", 29.99);

console.log("User:", serialize(user));
console.log("\\nProduct:", serialize(product));

// Comparable protocol
const Comparable = Symbol("Comparable");

class Version {
  constructor(major, minor, patch) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }
  
  [Comparable](other) {
    if (this.major !== other.major) return this.major - other.major;
    if (this.minor !== other.minor) return this.minor - other.minor;
    return this.patch - other.patch;
  }
}

const v1 = new Version(1, 2, 3);
const v2 = new Version(1, 3, 0);

console.log("\\nVersion comparison:");
console.log("v1 < v2:", v1[Comparable](v2) < 0); // true`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Symbol Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use Symbols for unique property keys
                </strong>
                <p className="ml-4 mt-1">
                  Prevent naming collisions in shared objects
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use Symbol.for() for cross-realm symbols
                </strong>
                <p className="ml-4 mt-1">
                  When symbols need to be shared (iframes, workers)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Symbols provide soft privacy
                </strong>
                <p className="ml-4 mt-1">
                  Not truly private, but hidden from Object.keys()
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use well-known symbols for protocols
                </strong>
                <p className="ml-4 mt-1">
                  Implement Symbol.iterator, Symbol.toPrimitive, etc.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Add descriptions for debugging
                </strong>
                <p className="ml-4 mt-1">
                  Symbol("description") helps identify symbols
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use symbols for metadata
                </strong>
                <p className="ml-4 mt-1">
                  Framework/library metadata that shouldn't conflict
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Don't use symbols for actual privacy
                </strong>
                <p className="ml-4 mt-1">
                  Use # private fields (ES2022) for true privacy
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Remember symbols are primitives
                </strong>
                <p className="ml-4 mt-1">Not objects, can't use new Symbol()</p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 17 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Symbol</strong> features in
              JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Symbol()
                </div>
                <div className="text-gray-400">Create unique symbols</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Global
                </div>
                <div className="text-gray-400">Symbol.for/keyFor</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">13</div>
                <div className="text-gray-400">Well-Known Symbols</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Protocols
                </div>
                <div className="text-gray-400">Custom behaviors</div>
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
