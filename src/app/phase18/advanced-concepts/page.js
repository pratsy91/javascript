"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function AdvancedConceptsPage() {
  return (
    <SectionLayout
      title="18.1 Advanced Concepts - Complete"
      description="Master execution context, scope, closures, this, prototypes, event loop, and advanced patterns"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🧠 Complete Advanced Concepts Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Deep dive into JavaScript's inner workings. This comprehensive
            section covers <strong>15 advanced topics</strong> including
            execution context, scope, closures, this, prototypes, event loop,
            memory management, and programming paradigms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Execution Context",
              "Call Stack",
              "Scope & Closures",
              "this Keyword",
              "Prototypes",
              "Event Loop",
              "Memory & GC",
              "Coercion",
              "Strict Mode",
              "Immutability",
              "Hoisting",
              "Functional Programming",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-indigo-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Execution Context */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚙️ Execution Context
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Execution Context Components"
              initialCode={`// Execution Context has 3 components:
// 1. Variable Environment
// 2. Lexical Environment  
// 3. this binding

console.log("Execution Context Phases:");
console.log("");
console.log("1. CREATION PHASE:");
console.log("   - Create Variable/Lexical Environment");
console.log("   - Set up scope chain");
console.log("   - Determine 'this' value");
console.log("   - Hoist functions and variables");
console.log("");
console.log("2. EXECUTION PHASE:");
console.log("   - Execute code line by line");
console.log("   - Assign values to variables");
console.log("   - Execute function calls");
console.log("");

// Global Execution Context
console.log("Global Execution Context:");
console.log("- Created when code runs");
console.log("- this = window (browser) or global (Node)");
console.log("- Only ONE global context");
console.log("");

// Function Execution Context
function example() {
  console.log("Function Execution Context:");
  console.log("- Created on each function call");
  console.log("- Has its own Variable Environment");
  console.log("- Has reference to outer environment");
  console.log("- Destroyed when function returns");
}

example();

// Nested contexts
function outer() {
  const outerVar = "outer";
  
  function inner() {
    const innerVar = "inner";
    console.log("\\nScope chain:");
    console.log("  innerVar:", innerVar); // Own environment
    console.log("  outerVar:", outerVar); // Outer environment
    // console.log("  globalVar:", globalVar); // Global environment
  }
  
  inner();
}

outer();`}
            />
          </div>
        </section>

        {/* Call Stack */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📚 Call Stack</h2>

          <div className="mt-6">
            <CodePlayground
              title="Call Stack Visualization"
              initialCode={`// Call stack tracks function execution

function first() {
  console.log("1. first() called - added to stack");
  second();
  console.log("5. first() resumes");
  console.log("6. first() completes - removed from stack");
}

function second() {
  console.log("2. second() called - added to stack");
  third();
  console.log("4. second() resumes - removed from stack");
}

function third() {
  console.log("3. third() called - added to stack");
  console.log("   third() completes - removed from stack");
}

console.log("Call stack demonstration:");
first();

console.log("\\nStack frames:");
console.log("Each function call creates a stack frame with:");
console.log("- Function arguments");
console.log("- Local variables");
console.log("- Return address");

// Stack overflow
function recursiveOverflow(n) {
  if (n === 0) return;
  return recursiveOverflow(n - 1);
}

try {
  recursiveOverflow(100000); // May cause stack overflow
  console.log("\\nNo overflow");
} catch (e) {
  console.log("\\nStack overflow:", e.message);
}

// Tail call optimization (not widely supported)
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc); // Tail call
}

console.log("\\nFactorial(5):", factorial(5));`}
            />
          </div>
        </section>

        {/* Scope */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔍 Scope & Scope Chain
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Scope Types"
              initialCode={`// 1. Global Scope
const globalVar = "global";

function demo() {
  // 2. Function Scope
  var functionVar = "function scoped";
  
  // 3. Block Scope
  if (true) {
    let blockVar = "block scoped";
    const alsoBlock = "also block";
    var notBlock = "not block!"; // Still function scoped!
    
    console.log("Inside block:");
    console.log("  blockVar:", blockVar);
    console.log("  functionVar:", functionVar);
    console.log("  globalVar:", globalVar);
  }
  
  // console.log(blockVar); // ReferenceError!
  console.log("\\nOutside block:");
  console.log("  functionVar:", functionVar);
  console.log("  notBlock:", notBlock); // Accessible!
  console.log("  globalVar:", globalVar);
}

demo();

// Lexical scope (static scope)
const x = 10;

function outer() {
  const x = 20;
  
  function inner() {
    console.log("\\nLexical scope:");
    console.log("  x:", x); // 20 (from outer, not global)
  }
  
  inner();
}

outer();

// Scope chain
const a = "global a";

function level1() {
  const b = "level1 b";
  
  function level2() {
    const c = "level2 c";
    
    console.log("\\nScope chain lookup:");
    console.log("  c:", c); // Own scope
    console.log("  b:", b); // Parent scope
    console.log("  a:", a); // Global scope
  }
  
  level2();
}

level1();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Variable Shadowing & TDZ"
              initialCode={`// Variable shadowing
const name = "Global";

function outer() {
  const name = "Outer";
  
  function inner() {
    const name = "Inner";
    console.log("Inner name:", name); // "Inner" (shadows outer)
  }
  
  inner();
  console.log("Outer name:", name); // "Outer" (shadows global)
}

outer();
console.log("Global name:", name); // "Global"

// Temporal Dead Zone (TDZ)
console.log("\\nTemporal Dead Zone:");

function tdzDemo() {
  // console.log(x); // ReferenceError: Cannot access before initialization
  // console.log(y); // ReferenceError: Cannot access before initialization
  
  let x = 10;
  const y = 20;
  
  console.log("After declaration:");
  console.log("  x:", x);
  console.log("  y:", y);
}

tdzDemo();

// vs var (no TDZ)
function varHoisting() {
  console.log("\\nvar hoisting:");
  console.log("  z:", z); // undefined (not error!)
  var z = 30;
  console.log("  z after:", z);
}

varHoisting();`}
            />
          </div>
        </section>

        {/* Closures */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔒 Closures</h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">Closure:</strong> A function
              that has access to variables from an outer function's scope, even
              after the outer function has returned. Closures capture their
              lexical environment.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Basic Closures"
              initialCode={`// Simple closure
function outer() {
  const message = "Hello from outer";
  
  function inner() {
    console.log(message); // Accesses outer variable
  }
  
  return inner;
}

const closureFunc = outer();
closureFunc(); // Still has access to 'message'!

// Counter with closure (data privacy)
function createCounter() {
  let count = 0; // Private variable
  
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

const counter = createCounter();
console.log("\\nCounter:");
console.log("Increment:", counter.increment()); // 1
console.log("Increment:", counter.increment()); // 2
console.log("Decrement:", counter.decrement()); // 1
console.log("Get:", counter.getCount()); // 1

// count is private
console.log("\\ncounter.count:", counter.count); // undefined

// Each closure has its own environment
const counter2 = createCounter();
console.log("\\nCounter2 increment:", counter2.increment()); // 1
console.log("Counter1 count:", counter.getCount()); // Still 1`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Closure Use Cases"
              initialCode={`// 1. Data privacy
function createWallet(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) throw new Error("Insufficient funds");
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const wallet = createWallet(100);
console.log("Deposit 50:", wallet.deposit(50));
console.log("Balance:", wallet.getBalance());

// 2. Partial application
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
const triple = multiply(3);

console.log("\\nPartial application:");
console.log("double(5):", double(5)); // 10
console.log("triple(5):", triple(5)); // 15

// 3. Event handlers
function setupButton(buttonId) {
  let clickCount = 0;
  
  return function handleClick() {
    clickCount++;
    console.log(\`Button \${buttonId} clicked \${clickCount} times\`);
  };
}

const btn1Handler = setupButton("btn1");
const btn2Handler = setupButton("btn2");

console.log("\\nEvent handlers:");
btn1Handler();
btn1Handler();
btn2Handler();

// 4. Memoization
function memoize(fn) {
  const cache = {}; // Closure over cache
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log("  Cache hit!");
      return cache[key];
    }
    
    console.log("  Computing...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveSum = memoize((a, b) => a + b);

console.log("\\nMemoization:");
console.log(expensiveSum(5, 3)); // Computing
console.log(expensiveSum(5, 3)); // Cache hit!`}
            />
          </div>
        </section>

        {/* this Keyword */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            👉 this Keyword
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="this in Different Contexts"
              initialCode={`// 1. Global context
console.log("Global this:", typeof this); // "undefined" in module

// 2. Function context (non-strict)
function regularFunc() {
  console.log("\\nRegular function this:", typeof this);
}
regularFunc(); // window (browser) or global (Node)

// 3. Method context
const obj = {
  name: "Object",
  greet() {
    console.log("\\nMethod this:", this.name);
  }
};
obj.greet(); // "Object"

// 4. Lost this problem
const greet = obj.greet;
// greet(); // undefined or error (this = undefined)

// 5. Arrow functions (lexical this)
const obj2 = {
  name: "Object2",
  greet: () => {
    console.log("\\nArrow this:", this); // Lexical (outer scope)
  },
  regular() {
    const arrow = () => {
      console.log("Arrow in method:", this.name); // Inherits from method
    };
    arrow();
  }
};

obj2.regular();

// 6. Constructor context
function Person(name) {
  this.name = name;
  console.log("\\nConstructor this:", this);
}
new Person("Alice");

// 7. Class context
class User {
  constructor(name) {
    this.name = name;
    console.log("\\nClass constructor this:", this.name);
  }
}
new User("Bob");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Explicit this Binding: call, apply, bind"
              initialCode={`function greet(greeting, punctuation) {
  return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
}

const person = { name: "Alice" };

// call(thisArg, ...args)
console.log("call:");
console.log(greet.call(person, "Hello", "!")); // "Hello, I'm Alice!"

// apply(thisArg, argsArray)
console.log("\\napply:");
console.log(greet.apply(person, ["Hi", "."])); // "Hi, I'm Alice."

// bind(thisArg, ...args) - returns new function
console.log("\\nbind:");
const boundGreet = greet.bind(person);
console.log(boundGreet("Hey", "?")); // "Hey, I'm Alice?"

// Partial application with bind
const sayHello = greet.bind(person, "Hello");
console.log("\\nPartial:");
console.log(sayHello("!")); // "Hello, I'm Alice!"

// Fixing lost this
const obj = {
  name: "Object",
  greet() {
    return \`Hello, \${this.name}\`;
  }
};

const standalone = obj.greet; // Lost this
const bound = obj.greet.bind(obj); // Fixed this

// console.log(standalone()); // Error
console.log("\\nBound:", bound()); // Works!

// Arrow functions ignore bind
const arrow = () => console.log(this);
const boundArrow = arrow.bind({ name: "Test" });
// boundArrow(); // Still uses lexical this (ignores bind)`}
            />
          </div>
        </section>

        {/* Prototypes */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 Prototypes & Prototype Chain
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Prototype Chain"
              initialCode={`// Every object has [[Prototype]] (internal slot)

const obj = { name: "Object" };

// __proto__ accesses [[Prototype]] (deprecated but useful)
console.log("Prototype:");
console.log("obj.__proto__ === Object.prototype:", 
  Object.getPrototypeOf(obj) === Object.prototype);

// Prototype chain
console.log("\\nPrototype chain:");
console.log("obj -> Object.prototype -> null");

// Property lookup
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const rabbit = {
  jumps: true,
  __proto__: animal // Set prototype
};

console.log("\\nrabbit.jumps:", rabbit.jumps); // Own property
console.log("rabbit.eats:", rabbit.eats); // From prototype
rabbit.walk(); // From prototype

// Constructor function pattern
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

const person = new Person("Alice");
console.log("\\n" + person.greet());

console.log("\\nPrototype chain:");
console.log("person -> Person.prototype -> Object.prototype -> null");
console.log("Has greet:", "greet" in person); // true (from prototype)
console.log("Own greet:", person.hasOwnProperty("greet")); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Prototype Methods"
              initialCode={`// Setting and getting prototypes

const animal = {
  eats: true
};

// Object.create() - create with prototype
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log("rabbit.eats:", rabbit.eats); // true (from proto)
console.log("rabbit.jumps:", rabbit.jumps); // true (own)

// Object.getPrototypeOf()
console.log("\\ngetPrototypeOf:");
console.log("Prototype is animal:", 
  Object.getPrototypeOf(rabbit) === animal);

// Object.setPrototypeOf() (slow! avoid in hot paths)
const dog = { barks: true };
Object.setPrototypeOf(rabbit, dog);
console.log("\\nAfter setPrototypeOf:");
console.log("rabbit.barks:", rabbit.barks); // true
console.log("rabbit.eats:", rabbit.eats); // false (changed proto)

// Own vs inherited properties
const obj = Object.create({ inherited: "yes" });
obj.own = "yes";

console.log("\\nProperty check:");
console.log("'own' in obj:", "own" in obj); // true
console.log("'inherited' in obj:", "inherited" in obj); // true
console.log("obj.hasOwnProperty('own'):", obj.hasOwnProperty("own")); // true
console.log("obj.hasOwnProperty('inherited'):", 
  obj.hasOwnProperty("inherited")); // false

// Iterate own properties only
console.log("\\nOwn properties:");
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log("  " + key);
  }
}`}
            />
          </div>
        </section>

        {/* Event Loop */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⚡ Event Loop</h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">Event Loop:</strong> The
              mechanism that handles asynchronous operations. Continuously
              checks the call stack and queues to execute callbacks.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Macrotasks vs Microtasks"
              initialCode={`console.log("1. Synchronous");

// Macrotask (Task Queue)
setTimeout(() => {
  console.log("4. setTimeout (macrotask)");
}, 0);

// Microtask (Microtask Queue)
Promise.resolve().then(() => {
  console.log("3. Promise (microtask)");
});

console.log("2. Synchronous");

// Execution order:
// 1. All synchronous code
// 2. All microtasks
// 3. One macrotask
// 4. All microtasks
// 5. Next macrotask...

console.log("\\n--- Event Loop Demo ---");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 3"));

console.log("Sync code");

// Microtasks have priority over macrotasks!
console.log("\\nExecution order:");
console.log("1. Sync code");
console.log("2. Promise 1, Promise 3, Promise 2 (microtasks)");
console.log("3. Timeout 1, Timeout 2 (macrotasks)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Event Loop Algorithm"
              initialCode={`// Event Loop simplified algorithm:

console.log("Event Loop Steps:");
console.log("");
console.log("1. Execute all synchronous code");
console.log("   - Push to call stack");
console.log("   - Execute");
console.log("   - Pop from stack");
console.log("");
console.log("2. When call stack empty:");
console.log("   a. Process ALL microtasks");
console.log("      - Promise.then/catch/finally");
console.log("      - queueMicrotask()");
console.log("      - MutationObserver");
console.log("   b. Process ONE macrotask");
console.log("      - setTimeout/setInterval");
console.log("      - setImmediate (Node.js)");
console.log("      - I/O operations");
console.log("      - UI rendering");
console.log("");
console.log("3. Repeat step 2");
console.log("");

// Demonstration
console.log("--- Demo Start ---");

queueMicrotask(() => {
  console.log("Microtask 1");
});

setTimeout(() => {
  console.log("Macrotask 1");
  
  queueMicrotask(() => {
    console.log("Microtask from macrotask");
  });
}, 0);

queueMicrotask(() => {
  console.log("Microtask 2");
});

console.log("Sync");

// Order: Sync, Microtask 1, Microtask 2, Macrotask 1, Microtask from macrotask`}
            />
          </div>
        </section>

        {/* Memory Management */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💾 Memory Management & GC
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Memory Leaks & Prevention"
              initialCode={`// Common memory leak patterns

// 1. Accidental global variables
function leak1() {
  // accidentalGlobal = "leak"; // Creates global!
  console.log("Avoid: accidental globals");
}

// 2. Forgotten timers
function leak2() {
  const data = new Array(1000).fill("data");
  
  setInterval(() => {
    console.log(data.length); // Keeps data in memory!
  }, 1000);
  
  // Solution: clear interval
  const id = setInterval(() => {}, 1000);
  clearInterval(id);
}

// 3. Detached event listeners
console.log("\\nMemory leak patterns:");
console.log("1. Accidental globals");
console.log("2. Forgotten timers/intervals");
console.log("3. Event listeners not removed");
console.log("4. Closures holding large objects");
console.log("5. Circular references");

// Prevention with WeakMap
const cache = new WeakMap();

function processObject(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  
  const result = { processed: true };
  cache.set(obj, result);
  return result;
}

let obj = { data: "large" };
processObject(obj);
obj = null; // Object can be garbage collected!

console.log("\\nGarbage Collection:");
console.log("- Automatic in JavaScript");
console.log("- Mark-and-sweep algorithm");
console.log("- Unreachable objects collected");
console.log("- WeakMap/WeakSet help prevent leaks");`}
            />
          </div>
        </section>

        {/* Hoisting */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⬆️ Hoisting</h2>

          <div className="mt-6">
            <CodePlayground
              title="Hoisting Behavior"
              initialCode={`// Function declarations are hoisted
console.log("Function hoisting:");
sayHello(); // Works! (hoisted)

function sayHello() {
  console.log("  Hello!");
}

// var is hoisted (but not initialized)
console.log("\\nvar hoisting:");
console.log("  x before:", x); // undefined (hoisted, not initialized)
var x = 10;
console.log("  x after:", x); // 10

// let/const are hoisted (but in TDZ)
console.log("\\nlet/const hoisting:");
// console.log(y); // ReferenceError: TDZ!
let y = 20;
console.log("  y after:", y);

// Function expressions NOT hoisted
console.log("\\nFunction expression:");
// notHoisted(); // ReferenceError or TypeError
const notHoisted = function() {
  console.log("Not hoisted");
};

// Class declarations NOT hoisted
console.log("\\nClass hoisting:");
// new MyClass(); // ReferenceError!
class MyClass {}

// Imports are hoisted
console.log("\\nImport hoisting:");
console.log("import statements are hoisted to top");
console.log("Can use before import statement in code");

// Hoisting visualization
console.log("\\nHow JS sees code:");
console.log("var x; // Declaration hoisted");
console.log("function sayHello() {...} // Hoisted");
console.log("console.log(x); // undefined");
console.log("x = 10; // Assignment stays in place");`}
            />
          </div>
        </section>

        {/* Coercion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 Type Coercion Deep Dive
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Coercion Rules & Edge Cases"
              initialCode={`// ToBoolean
console.log("ToBoolean (Falsy values):");
console.log("  Boolean(false):", Boolean(false));
console.log("  Boolean(0):", Boolean(0));
console.log("  Boolean(-0):", Boolean(-0));
console.log("  Boolean(0n):", Boolean(0n));
console.log("  Boolean(''):", Boolean(""));
console.log("  Boolean(null):", Boolean(null));
console.log("  Boolean(undefined):", Boolean(undefined));
console.log("  Boolean(NaN):", Boolean(NaN));
console.log("  Everything else is truthy!");

// ToNumber
console.log("\\nToNumber:");
console.log("  Number(true):", Number(true)); // 1
console.log("  Number(false):", Number(false)); // 0
console.log("  Number(null):", Number(null)); // 0
console.log("  Number(undefined):", Number(undefined)); // NaN
console.log("  Number('42'):", Number("42")); // 42
console.log("  Number(''):", Number("")); // 0
console.log("  Number('  '):", Number("  ")); // 0
console.log("  Number([]):", Number([])); // 0
console.log("  Number([5]):", Number([5])); // 5
console.log("  Number([1,2]):", Number([1,2])); // NaN

// ToString
console.log("\\nToString:");
console.log("  String(42):", String(42));
console.log("  String(true):", String(true));
console.log("  String(null):", String(null));
console.log("  String(undefined):", String(undefined));
console.log("  String([1,2,3]):", String([1,2,3]));
console.log("  String({}):", String({}));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Equality Coercion Edge Cases"
              initialCode={`// == (abstract equality) vs === (strict equality)

console.log("Coercion edge cases:");
console.log("");

// Surprising == results
console.log("[] == false:", [] == false); // true!
console.log("[] == ![]:", [] == ![]); // true!
console.log("'' == 0:", "" == 0); // true
console.log("'0' == 0:", "0" == 0); // true
console.log("'0' == false:", "0" == false); // true
console.log("null == undefined:", null == undefined); // true
console.log("null == 0:", null == 0); // false!

// Always false with ===
console.log("\\nStrict equality:");
console.log("[] === false:", [] === false); // false
console.log("'' === 0:", "" === 0); // false
console.log("null === undefined:", null === undefined); // false

// Plus operator
console.log("\\nPlus operator:");
console.log("1 + '2':", 1 + "2"); // "12" (string concatenation)
console.log("'1' + 2:", "1" + 2); // "12"
console.log("1 + 2 + '3':", 1 + 2 + "3"); // "33"
console.log("'1' + 2 + 3:", "1" + 2 + 3); // "123"

// Minus operator
console.log("\\nMinus operator:");
console.log("'5' - 2:", "5" - 2); // 3 (numeric)
console.log("'5' - '2':", "5" - "2"); // 3

// Recommendation
console.log("\\nBest practice:");
console.log("- Always use === instead of ==");
console.log("- Explicitly convert types");
console.log("- Avoid relying on coercion");`}
            />
          </div>
        </section>

        {/* Strict Mode */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⚠️ Strict Mode</h2>

          <div className="mt-6">
            <CodePlayground
              title="Strict Mode Changes"
              initialCode={`// Enable strict mode
"use strict";

console.log("Strict mode changes:");
console.log("");

// 1. No accidental globals
try {
  // undeclaredVar = 42; // ReferenceError
  console.log("1. No accidental globals (throws error)");
} catch (e) {
  console.log("   " + e.constructor.name);
}

// 2. No duplicate parameters
console.log("\\n2. No duplicate parameters");
// function dup(a, a) {} // SyntaxError in strict

// 3. Deleting variables not allowed
try {
  const x = 1;
  // delete x; // SyntaxError
  console.log("3. Cannot delete variables");
} catch (e) {
  console.log("   Error");
}

// 4. this is undefined in functions
function showThis() {
  console.log("\\n4. this in function:", this); // undefined
}
showThis();

// 5. Octal literals not allowed
// const octal = 0123; // SyntaxError
console.log("\\n5. Octal literals not allowed (use 0o123)");

// 6. with statement not allowed
// with (obj) {} // SyntaxError
console.log("\\n6. 'with' statement not allowed");

// 7. eval creates own scope
console.log("\\n7. eval has own scope");

// Modules are automatically strict
console.log("\\nModules:");
console.log("ES modules are automatically strict");
console.log("No need for 'use strict'");

console.log("\\nBenefits:");
console.log("- Catches common mistakes");
console.log("- Prevents unsafe actions");
console.log("- Better performance in some engines");`}
            />
          </div>
        </section>

        {/* Immutability */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔐 Immutability
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Object Immutability Levels"
              initialCode={`const obj = { name: "Alice", age: 25 };

// 1. Object.preventExtensions() - no new properties
Object.preventExtensions(obj);
console.log("preventExtensions:");
console.log("  isExtensible:", Object.isExtensible(obj)); // false

obj.age = 30; // OK (modify existing)
// obj.email = "..."; // Fails (no new properties)
console.log("  Can modify:", obj.age);

// 2. Object.seal() - no add/delete, can modify
const sealed = { x: 1, y: 2 };
Object.seal(sealed);
console.log("\\nseal:");
console.log("  isSealed:", Object.isSealed(sealed)); // true
console.log("  isExtensible:", Object.isExtensible(sealed)); // false

sealed.x = 10; // OK (modify)
// sealed.z = 3; // Fails (no add)
// delete sealed.y; // Fails (no delete)
console.log("  Can modify:", sealed);

// 3. Object.freeze() - completely immutable
const frozen = { a: 1, b: 2 };
Object.freeze(frozen);
console.log("\\nfreeze:");
console.log("  isFrozen:", Object.isFrozen(frozen)); // true

// frozen.a = 10; // Fails (no modify)
// frozen.c = 3; // Fails (no add)
// delete frozen.b; // Fails (no delete)
console.log("  Unchanged:", frozen);

// Shallow freeze (nested objects not frozen)
const obj2 = { user: { name: "Bob" } };
Object.freeze(obj2);
obj2.user.name = "Alice"; // Works! (nested not frozen)
console.log("\\nShallow freeze:", obj2.user.name);

// Deep freeze
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach(val => {
    if (typeof val === "object" && val !== null) {
      deepFreeze(val);
    }
  });
  return obj;
}

const deep = deepFreeze({ user: { name: "Charlie" } });
// deep.user.name = "Dave"; // Fails!
console.log("\\nDeep frozen:", deep);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Immutable Update Patterns"
              initialCode={`// Immutable array operations

const arr = [1, 2, 3, 4, 5];

// Add (don't use push)
const added = [...arr, 6];
console.log("Add:", added);
console.log("Original:", arr); // Unchanged

// Remove (don't use splice)
const removed = arr.filter(x => x !== 3);
console.log("\\nRemove 3:", removed);
console.log("Original:", arr); // Unchanged

// Update (don't modify in place)
const updated = arr.map(x => x === 3 ? 99 : x);
console.log("\\nUpdate 3 to 99:", updated);
console.log("Original:", arr); // Unchanged

// Immutable object operations
const user = { name: "Alice", age: 25 };

// Add property
const withEmail = { ...user, email: "alice@example.com" };
console.log("\\nAdd email:", withEmail);
console.log("Original:", user); // Unchanged

// Update property
const olderUser = { ...user, age: 26 };
console.log("\\nUpdate age:", olderUser);
console.log("Original:", user); // Unchanged

// Nested update
const state = {
  user: { name: "Bob", settings: { theme: "light" } }
};

const newState = {
  ...state,
  user: {
    ...state.user,
    settings: {
      ...state.user.settings,
      theme: "dark"
    }
  }
};

console.log("\\nNested update:");
console.log("New theme:", newState.user.settings.theme);
console.log("Original:", state.user.settings.theme); // Unchanged`}
            />
          </div>
        </section>

        {/* Functional Programming */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Functional Programming Concepts
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Pure Functions & Side Effects"
              initialCode={`// Pure function - same input, same output, no side effects
function add(a, b) {
  return a + b;
}

console.log("Pure function:");
console.log("add(2, 3):", add(2, 3)); // Always 5
console.log("add(2, 3):", add(2, 3)); // Always 5

// Impure function - side effects
let count = 0;

function impureIncrement() {
  count++; // Side effect!
  return count;
}

console.log("\\nImpure function:");
console.log("impureIncrement():", impureIncrement()); // 1
console.log("impureIncrement():", impureIncrement()); // 2 (different!)

// Higher-order function - takes or returns function
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("\\nHigher-order function:");
console.log("double(5):", double(5)); // 10
console.log("triple(5):", triple(5)); // 15

// Function composition
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

const pipeline = compose(square, multiplyByTwo, addOne);

console.log("\\nComposition:");
console.log("pipeline(5):", pipeline(5)); // ((5+1)*2)^2 = 144`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Currying & Partial Application"
              initialCode={`// Currying - transform f(a, b, c) to f(a)(b)(c)

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log("Currying:");
console.log("curriedAdd(1)(2)(3):", curriedAdd(1)(2)(3)); // 6
console.log("curriedAdd(1, 2)(3):", curriedAdd(1, 2)(3)); // 6
console.log("curriedAdd(1)(2, 3):", curriedAdd(1)(2, 3)); // 6

// Partial application
const add5 = curriedAdd(5);
console.log("\\nPartial:");
console.log("add5(3, 2):", add5(3, 2)); // 10

// Practical: logging
const log = curry((level, component, message) => {
  return \`[\${level}] \${component}: \${message}\`;
});

const errorLog = log("ERROR");
const errorAuth = errorLog("Auth");

console.log("\\nLogging:");
console.log(errorAuth("Login failed"));
console.log(errorAuth("Invalid token"));

// Point-free style
const numbers = [1, 2, 3, 4, 5];

// Not point-free
const doubled1 = numbers.map(x => x * 2);

// Point-free
const double = x => x * 2;
const doubled2 = numbers.map(double);

console.log("\\nPoint-free:", doubled2);`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Advanced Concepts Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Understand execution context
                </strong>
                <p className="ml-4 mt-1">
                  Know how scope, hoisting, and closures work
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Master closures for data privacy
                </strong>
                <p className="ml-4 mt-1">
                  Use closures for encapsulation and callbacks
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Understand this binding rules
                </strong>
                <p className="ml-4 mt-1">
                  Know when to use arrow functions vs regular functions
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use prototypes wisely
                </strong>
                <p className="ml-4 mt-1">
                  Understand prototype chain for efficient memory usage
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Understand the event loop
                </strong>
                <p className="ml-4 mt-1">
                  Know difference between microtasks and macrotasks
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Prevent memory leaks
                </strong>
                <p className="ml-4 mt-1">
                  Clear timers, remove listeners, use WeakMap/WeakSet
                </p>
              </div>
              <div>
                <strong className="text-green-400">7. Use strict mode</strong>
                <p className="ml-4 mt-1">
                  Catches errors and prevents bad practices
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Prefer immutable updates
                </strong>
                <p className="ml-4 mt-1">
                  Use spread, map, filter instead of mutation
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Write pure functions when possible
                </strong>
                <p className="ml-4 mt-1">
                  Easier to test, reason about, and parallelize
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Avoid coercion surprises
                </strong>
                <p className="ml-4 mt-1">
                  Use === and explicit type conversion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 18 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Advanced JavaScript Concepts</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-xl font-bold text-blue-400 mb-1">
                  Execution Context
                </div>
                <div className="text-gray-400 text-xs">How JS runs code</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-400 mb-1">
                  Scope & Closures
                </div>
                <div className="text-gray-400 text-xs">Variable access</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-400 mb-1">
                  this & Prototypes
                </div>
                <div className="text-gray-400 text-xs">Object behavior</div>
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-400 mb-1">
                  Event Loop
                </div>
                <div className="text-gray-400 text-xs">Async execution</div>
              </div>
              <div>
                <div className="text-xl font-bold text-orange-400 mb-1">
                  Memory & GC
                </div>
                <div className="text-gray-400 text-xs">Resource management</div>
              </div>
              <div>
                <div className="text-xl font-bold text-red-400 mb-1">
                  FP Concepts
                </div>
                <div className="text-gray-400 text-xs">Functional paradigm</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all"
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
