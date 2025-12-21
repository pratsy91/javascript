"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function FunctionsPage() {
  return (
    <SectionLayout
      title="2.3 Functions - Complete Coverage"
      description="Master ALL function types, parameters, methods, and advanced concepts"
      prevSection={{
        title: "Loops - All Types",
        path: "/phase2/loops",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚡ Functions - The Heart of JavaScript
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Functions are <strong>first-class objects</strong> in JavaScript.
            They can be assigned to variables, passed as arguments, and returned
            from other functions. This section covers EVERY aspect of functions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Declaration",
              "Expression",
              "Arrow",
              "IIFE",
              "Generator",
              "Async",
              "Constructor",
              "Methods",
            ].map((type) => (
              <div
                key={type}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-blue-300 font-mono"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Function Declarations */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📢 Function Declarations
          </h2>

          <ConceptCard
            title="Function Declaration Basics"
            icon="🎯"
            color="blue"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> function name(params) {"{"} ... {"}"}
              </li>
              <li>
                <strong>Hoisted:</strong> Available before declaration in code
              </li>
              <li>
                <strong>Named:</strong> Must have a name
              </li>
              <li>
                <strong>Returns:</strong> undefined if no return statement
              </li>
              <li>
                <strong>Can be:</strong> Called before definition
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Function Declaration Basics"
              initialCode={`// Basic function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Function without parameters
function sayHi() {
  return "Hi there!";
}

console.log(sayHi());

// Function without return (returns undefined)
function logMessage(msg) {
  console.log("Message:", msg);
  // No return statement
}

let result = logMessage("Test");
console.log("Result:", result); // undefined

// Multiple parameters
function add(a, b) {
  return a + b;
}

console.log("5 + 3 =", add(5, 3));

// Early return
function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  if (age > 65) {
    return "Senior";
  }
  return "Adult";
}

console.log(checkAge(15));
console.log(checkAge(30));
console.log(checkAge(70));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Function Hoisting"
              initialCode={`// Functions are hoisted - can call before declaration
console.log("Calling hoisted function:");
sayHello(); // Works!

function sayHello() {
  console.log("Hello from hoisted function!");
}

// Can be called again
sayHello();

// More complex example
greet("Alice");

function greet(name) {
  let message = getMessage(name);
  console.log(message);
}

function getMessage(name) {
  return "Welcome, " + name;
}

// All function declarations are hoisted
// regardless of order

// Conditional hoisting (tricky!)
let condition = true;

if (condition) {
  function conditionalFunc() {
    console.log("In if block");
  }
}

// May or may not work depending on environment
// Best practice: avoid this pattern
try {
  conditionalFunc();
} catch (e) {
  console.log("Conditional hoisting is unreliable");
}`}
            />
          </div>
        </section>

        {/* Function Expressions */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💡 Function Expressions
          </h2>

          <ConceptCard
            title="Function Expression Basics"
            icon="📦"
            color="purple"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> const name = function(params) {"{"} ...{" "}
                {"}"};
              </li>
              <li>
                <strong>Not hoisted:</strong> Cannot use before assignment
              </li>
              <li>
                <strong>Anonymous:</strong> Can omit name (usually do)
              </li>
              <li>
                <strong>Named:</strong> Can have name for recursion/debugging
              </li>
              <li>
                <strong>Assignment:</strong> Treated as any other value
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Function Expression Types"
              initialCode={`// Anonymous function expression
const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Alice"));
console.log("Type:", typeof greet); // "function"

// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can use 'fact' internally
};

console.log("5! =", factorial(5));
// console.log(fact(5)); // Error! 'fact' not in outer scope

// Function expression not hoisted
// sayHi(); // Error! Cannot access before initialization

const sayHi = function() {
  console.log("Hi!");
};

sayHi(); // Works after declaration

// Function in object
const obj = {
  method1: function() {
    return "Old syntax";
  },
  method2() {
    return "Shorthand syntax (ES6)";
  }
};

console.log(obj.method1());
console.log(obj.method2());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Functions as Values"
              initialCode={`// Functions are first-class objects
const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

// Store in array
const operations = [add, subtract];

console.log("Using from array:");
console.log("10 + 5 =", operations[0](10, 5));
console.log("10 - 5 =", operations[1](10, 5));

// Pass as arguments
function execute(operation, a, b) {
  return operation(a, b);
}

console.log("\\nPassing as arguments:");
console.log("Execute add:", execute(add, 20, 10));
console.log("Execute subtract:", execute(subtract, 20, 10));

// Return from functions
function getOperation(type) {
  if (type === "add") {
    return function(a, b) { return a + b; };
  } else {
    return function(a, b) { return a - b; };
  }
}

const myOp = getOperation("add");
console.log("\\nReturned function:", myOp(15, 5));`}
            />
          </div>
        </section>

        {/* Arrow Functions */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏹 Arrow Functions (ES2015)
          </h2>

          <ConceptCard title="Arrow Function Basics" icon="➡️" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> (params) =&gt; expression or {"{"} ...{" "}
                {"}"}
              </li>
              <li>
                <strong>Concise:</strong> Shorter syntax than function
                expression
              </li>
              <li>
                <strong>Implicit return:</strong> Returns expression without
                'return'
              </li>
              <li>
                <strong>Lexical 'this':</strong> Inherits 'this' from parent
                scope
              </li>
              <li>
                <strong>No 'arguments':</strong> Use rest parameters instead
              </li>
              <li>
                <strong>Cannot be constructor:</strong> No 'new' operator
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Arrow Function Syntax Variations"
              initialCode={`// Single parameter (no parentheses needed)
const square = x => x * x;
console.log("square(5):", square(5));

// Multiple parameters
const add = (a, b) => a + b;
console.log("add(3, 7):", add(3, 7));

// No parameters
const greet = () => "Hello!";
console.log("greet():", greet());

// Block body (need return keyword)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("multiply(4, 5):", multiply(4, 5));

// Implicit return of object (need parentheses!)
const createUser = (name, age) => ({ name, age });
console.log("createUser:", createUser("Alice", 25));

// Without parentheses - ERROR
// const wrong = (name) => { name }; // Returns undefined!

// Multiline implicit return
const getInfo = (name) => (
  "Name: " + name + ", " +
  "Length: " + name.length
);
console.log(getInfo("Bob"));

// Single parameter with default
const greetUser = (name = "Guest") => "Hello, " + name;
console.log(greetUser());
console.log(greetUser("Charlie"));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Arrow Functions and 'this' Binding"
              initialCode={`// Regular function: 'this' depends on how it's called
const objRegular = {
  name: "Regular Object",
  greet: function() {
    console.log("this.name:", this.name);
  }
};

objRegular.greet(); // "Regular Object"

// Arrow function: 'this' is lexical (from parent scope)
const objArrow = {
  name: "Arrow Object",
  greet: () => {
    console.log("this:", this); // Not objArrow!
    // 'this' refers to outer scope
  }
};

objArrow.greet(); // undefined or global object

// Practical difference
const counter = {
  count: 0,
  
  incrementRegular: function() {
    setTimeout(function() {
      this.count++; // 'this' is not counter!
      console.log("Regular:", this.count); // NaN or undefined
    }, 10);
  },
  
  incrementArrow: function() {
    setTimeout(() => {
      this.count++; // 'this' is counter!
      console.log("Arrow:", this.count); // Works!
    }, 20);
  }
};

counter.incrementRegular();
counter.incrementArrow();

// Best practice: use arrow for callbacks
const numbers = [1, 2, 3];
const obj = {
  multiplier: 2,
  
  multiply() {
    // Arrow function preserves 'this'
    return numbers.map(n => n * this.multiplier);
  }
};

console.log("\\nMultiplied:", obj.multiply());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Arrow Function Limitations"
              initialCode={`// No 'arguments' object
const regularFunc = function() {
  console.log("arguments:", arguments);
};

regularFunc(1, 2, 3); // Works

const arrowFunc = (...args) => {
  console.log("args:", args); // Use rest parameters
  // console.log(arguments); // Error! No 'arguments'
};

arrowFunc(1, 2, 3);

// Cannot use as constructor
function RegularConstructor() {
  this.value = 42;
}

const obj1 = new RegularConstructor();
console.log("Regular:", obj1.value);

const ArrowConstructor = () => {
  this.value = 42;
};

// const obj2 = new ArrowConstructor(); // TypeError!
console.log("Arrow cannot be constructor");

// No prototype
console.log("\\nRegular has prototype:", RegularConstructor.prototype);
console.log("Arrow has no prototype:", ArrowConstructor.prototype); // undefined

// Cannot use yield (not generators)
// const gen = *() => {}; // Syntax error!

// When NOT to use arrow functions:
// 1. Object methods (if you need 'this')
// 2. Event handlers (if you need 'this')
// 3. Constructors
// 4. When you need 'arguments' object`}
            />
          </div>
        </section>

        {/* Function Parameters */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Function Parameters
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Regular Parameters"
              initialCode={`// Basic parameters
function greet(name, age) {
  console.log(\`Hello \${name}, age \${age}\`);
}

greet("Alice", 25);

// Too many arguments (extras ignored)
greet("Bob", 30, "extra", "args");

// Too few arguments (missing = undefined)
greet("Charlie"); // age is undefined

// Check for undefined parameters
function greetSafe(name, age) {
  if (name === undefined) {
    name = "Guest";
  }
  if (age === undefined) {
    age = "unknown";
  }
  console.log(\`Hello \${name}, age \${age}\`);
}

greetSafe();
greetSafe("David");

// Using || for defaults (old way)
function greetOld(name, age) {
  name = name || "Guest";
  age = age || 18;
  console.log(\`Hello \${name}, age \${age}\`);
}

greetOld();
greetOld("Eve", 0); // Problem: 0 is falsy!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Default Parameters (ES2015)"
              initialCode={`// Default parameters
function greet(name = "Guest", age = 18) {
  console.log(\`Hello \${name}, age \${age}\`);
}

greet(); // Uses defaults
greet("Alice"); // Uses default age
greet("Bob", 25); // Uses provided values
greet(undefined, 30); // undefined triggers default

// Default with expression
function createUser(name, timestamp = Date.now()) {
  return { name, timestamp };
}

console.log(createUser("Alice"));

// Default can reference other parameters
function greetFull(firstName, lastName, fullName = firstName + " " + lastName) {
  console.log("Full name:", fullName);
}

greetFull("John", "Doe");
greetFull("Jane", "Smith", "Jane S. Smith");

// Default with function call
function getDefaultName() {
  console.log("Getting default name...");
  return "Guest";
}

function welcome(name = getDefaultName()) {
  console.log("Welcome,", name);
}

welcome("Alice"); // Doesn't call getDefaultName
welcome(); // Calls getDefaultName

// Defaults are evaluated left-to-right
function test(a = 1, b = a * 2, c = b + 1) {
  console.log("a:", a, "b:", b, "c:", c);
}

test(); // 1, 2, 3
test(5); // 5, 10, 11`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Rest Parameters (ES2015)"
              initialCode={`// Rest parameters collect remaining arguments
function sum(...numbers) {
  console.log("numbers:", numbers); // Array
  return numbers.reduce((total, n) => total + n, 0);
}

console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));

// Rest must be last parameter
function greet(greeting, ...names) {
  console.log("\\nGreeting:", greeting);
  console.log("Names:", names);
}

greet("Hello", "Alice", "Bob", "Charlie");

// Combining with regular and default parameters
function createMessage(prefix = "Info", ...parts) {
  return prefix + ": " + parts.join(" ");
}

console.log(createMessage("Warning", "File", "not", "found"));
console.log(createMessage(undefined, "Using", "default"));

// Rest vs arguments
function compareRest(...args) {
  console.log("\\nRest params (array):", Array.isArray(args)); // true
  console.log("Has array methods:", typeof args.map); // "function"
}

function compareArguments() {
  console.log("arguments (array-like):", Array.isArray(arguments)); // false
  console.log("Has length:", arguments.length);
  // console.log(arguments.map); // undefined - no array methods!
}

compareRest(1, 2, 3);
compareArguments(1, 2, 3);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="arguments Object (Legacy)"
              initialCode={`// arguments is array-like object (not in arrow functions)
function showArguments() {
  console.log("arguments:", arguments);
  console.log("Length:", arguments.length);
  console.log("First arg:", arguments[0]);
  console.log("Is array?", Array.isArray(arguments)); // false
  
  // Convert to real array
  const argsArray = Array.from(arguments);
  console.log("As array:", argsArray);
  
  // Or with spread
  const argsArray2 = [...arguments];
  console.log("With spread:", argsArray2);
}

showArguments("a", "b", "c");

// Use arguments for variable arguments
function max() {
  if (arguments.length === 0) return -Infinity;
  
  let maximum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > maximum) {
      maximum = arguments[i];
    }
  }
  return maximum;
}

console.log("\\nmax(5, 10, 3, 8):", max(5, 10, 3, 8));

// Modern way: use rest parameters
function maxModern(...numbers) {
  if (numbers.length === 0) return -Infinity;
  return Math.max(...numbers);
}

console.log("maxModern(5, 10, 3, 8):", maxModern(5, 10, 3, 8));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Parameter Destructuring"
              initialCode={`// Array destructuring in parameters
function printCoords([x, y]) {
  console.log(\`x: \${x}, y: \${y}\`);
}

printCoords([10, 20]);

// Object destructuring in parameters
function greetUser({ name, age, city = "Unknown" }) {
  console.log(\`\${name}, \${age}, from \${city}\`);
}

greetUser({ name: "Alice", age: 25, city: "NYC" });
greetUser({ name: "Bob", age: 30 }); // Uses default city

// Nested destructuring
function processData({ user: { name, email }, status }) {
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Status:", status);
}

processData({
  user: { name: "Charlie", email: "charlie@test.com" },
  status: "active"
});

// With defaults
function configure({ 
  timeout = 5000, 
  retries = 3,
  debug = false 
} = {}) {
  console.log("\\nConfig:", { timeout, retries, debug });
}

configure({ timeout: 1000 }); // Partial config
configure(); // All defaults

// Rest with destructuring
function analyze({ name, ...otherProps }) {
  console.log("\\nName:", name);
  console.log("Other props:", otherProps);
}

analyze({ name: "Test", x: 1, y: 2, z: 3 });`}
            />
          </div>
        </section>

        {/* Function Properties and Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Function Properties & Methods
          </h2>

          <ConceptCard
            title="Function Object Properties"
            icon="📊"
            color="blue"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>name:</strong> Function's name
              </li>
              <li>
                <strong>length:</strong> Number of parameters (arity)
              </li>
              <li>
                <strong>prototype:</strong> For constructor functions
              </li>
              <li>
                <strong>call():</strong> Call with specific 'this'
              </li>
              <li>
                <strong>apply():</strong> Call with 'this' and array of args
              </li>
              <li>
                <strong>bind():</strong> Create bound function
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Function Properties"
              initialCode={`// function.name
function namedFunc() {}
const expr = function() {};
const named = function myName() {};
const arrow = () => {};

console.log("Declaration name:", namedFunc.name); // "namedFunc"
console.log("Anonymous expr:", expr.name); // "expr"
console.log("Named expr:", named.name); // "myName"
console.log("Arrow:", arrow.name); // "arrow"

// function.length (number of parameters before rest/defaults)
function func1(a, b, c) {}
function func2(a, b, c = 5) {}
function func3(a, ...rest) {}
function func4(a = 1, b, c) {}

console.log("\\nfunc1.length:", func1.length); // 3
console.log("func2.length:", func2.length); // 2 (stops at default)
console.log("func3.length:", func3.length); // 1 (before rest)
console.log("func4.length:", func4.length); // 0 (stops at first default)

// function.prototype
function MyConstructor() {}
console.log("\\nHas prototype:", MyConstructor.prototype);
console.log("Prototype is object:", typeof MyConstructor.prototype);

// Add method to prototype
MyConstructor.prototype.greet = function() {
  return "Hello";
};

const instance = new MyConstructor();
console.log("instance.greet():", instance.greet());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="call() Method"
              initialCode={`// call() - invoke function with specific 'this'
function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Call with different 'this' values
console.log(greet.call(person1, "Hello", "!"));
console.log(greet.call(person2, "Hi", "."));

// Another example
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  }
};

const obj1 = { value: 10 };
const obj2 = { value: 20 };

// Call calculator.add on different objects
calculator.add.call(obj1, 5);
calculator.add.call(obj2, 15);

console.log("\\nobj1.value:", obj1.value); // 15
console.log("obj2.value:", obj2.value); // 35

// Borrowing methods
const arr = [1, 2, 3];
const notArray = { 0: "a", 1: "b", 2: "c", length: 3 };

// Borrow slice from Array
const result = Array.prototype.slice.call(notArray, 1, 3);
console.log("\\nBorrowed slice:", result);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="apply() Method"
              initialCode={`// apply() - like call(), but arguments as array
function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

const person = { name: "Alice" };

// With apply
const args = ["Hello", "!"];
console.log(greet.apply(person, args));

// Compare to call
console.log(greet.call(person, "Hello", "!"));

// Practical use: Math.max/min with arrays
const numbers = [5, 10, 3, 8, 1, 15];

// Without apply (doesn't work)
console.log("\\nMath.max(numbers):", Math.max(numbers)); // NaN

// With apply
console.log("Math.max.apply(null, numbers):", 
  Math.max.apply(null, numbers)); // 15

// Modern way: spread operator
console.log("Math.max(...numbers):", Math.max(...numbers)); // 15

// Concatenating arrays (old way)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2);
console.log("\\nWith apply:", arr1);

// Modern way: spread
const arr3 = [1, 2, 3];
arr3.push(...arr2);
console.log("With spread:", arr3);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="bind() Method"
              initialCode={`// bind() - create new function with fixed 'this'
function greet() {
  return "Hello, " + this.name;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Create bound functions
const greetAlice = greet.bind(person1);
const greetBob = greet.bind(person2);

console.log(greetAlice()); // "Hello, Alice"
console.log(greetBob()); // "Hello, Bob"

// bind() with arguments (partial application)
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log("\\ndouble(5):", double(5)); // 10
console.log("triple(5):", triple(5)); // 15

// Practical use: event handlers
const button = {
  clicks: 0,
  handleClick() {
    this.clicks++;
    console.log("Clicks:", this.clicks);
  }
};

// Without bind (would lose 'this')
// setTimeout(button.handleClick, 100); // Error or undefined!

// With bind (preserves 'this')
setTimeout(button.handleClick.bind(button), 100);

// bind() is permanent
const boundGreet = greet.bind(person1);
console.log("\\nboundGreet():", boundGreet());
console.log("call on bound:", boundGreet.call(person2)); // Still uses person1!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toString() Method"
              initialCode={`// function.toString() returns source code
function example(a, b) {
  return a + b;
}

console.log("Function source:");
console.log(example.toString());

// Arrow function
const arrow = (x) => x * 2;
console.log("\\nArrow source:");
console.log(arrow.toString());

// Built-in functions
console.log("\\nMath.max source:");
console.log(Math.max.toString());

// Bound function
const bound = example.bind(null, 5);
console.log("\\nBound function source:");
console.log(bound.toString());

// Use case: debugging, serialization
function multiply(a, b) {
  return a * b;
}

console.log("\\nFunction name:", multiply.name);
console.log("Function length:", multiply.length);
console.log("Function code:", multiply.toString());`}
            />
          </div>
        </section>

        {/* Special Function Types */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🌟 Special Function Types
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="IIFE - Immediately Invoked Function Expression"
              initialCode={`// Basic IIFE
(function() {
  console.log("I run immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log("Hello,", name);
})("Alice");

// IIFE with return value
const result = (function() {
  return "Returned value";
})();

console.log("Result:", result);

// Arrow IIFE
(() => {
  console.log("Arrow IIFE");
})();

// Use case: Private scope (before modules)
const counter = (function() {
  let count = 0; // Private variable
  
  return {
    increment() {
      count++;
      console.log("Count:", count);
    },
    decrement() {
      count--;
      console.log("Count:", count);
    },
    getCount() {
      return count;
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
console.log("Get count:", counter.getCount()); // 2
// console.log(count); // Error! Private`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Constructor Functions"
              initialCode={`// Constructor function (capitalize name)
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.greet = function() {
    return "Hi, I'm " + this.name;
  };
}

// Create instances with 'new'
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

console.log(alice.greet());
console.log(bob.greet());
console.log("alice instanceof Person:", alice instanceof Person);

// Add method to prototype (shared)
Person.prototype.introduce = function() {
  return \`I'm \${this.name}, \${this.age} years old\`;
};

console.log("\\n" + alice.introduce());
console.log(bob.introduce());

// Without 'new' (problem!)
// const charlie = Person("Charlie", 35); // Error or pollutes global!

// Modern way: use class syntax
class Animal {
  constructor(type) {
    this.type = type;
  }
  
  speak() {
    return \`I'm a \${this.type}\`;
  }
}

const dog = new Animal("dog");
console.log("\\n" + dog.speak());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Generator Functions (function*)"
              initialCode={`// Generator function
function* numberGenerator() {
  console.log("Starting...");
  yield 1;
  console.log("After 1");
  yield 2;
  console.log("After 2");
  yield 3;
  console.log("Done");
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Infinite generator
function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const infinite = infiniteNumbers();
console.log("\\nInfinite:");
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2

// Generator with for...of
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

console.log("\\nRange 1-5:");
for (let num of range(1, 5)) {
  console.log(num);
}

// yield* (delegating)
function* inner() {
  yield "inner1";
  yield "inner2";
}

function* outer() {
  yield "outer1";
  yield* inner(); // Delegate to inner
  yield "outer2";
}

console.log("\\nDelegating:");
for (let val of outer()) {
  console.log(val);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Async Functions (ES2017)"
              initialCode={`// Async function always returns a Promise
async function fetchData() {
  return "Data loaded";
}

console.log("Return value:", fetchData()); // Promise

fetchData().then(data => {
  console.log("Data:", data);
});

// Async with await
async function processData() {
  console.log("\\nStarting...");
  
  // Simulate async operation
  const data = await Promise.resolve("Fetched data");
  console.log("Got:", data);
  
  const processed = await Promise.resolve("Processed: " + data);
  console.log("Result:", processed);
  
  return processed;
}

processData().then(result => {
  console.log("Final:", result);
});

// Error handling
async function fetchWithError() {
  try {
    const data = await Promise.reject("Error occurred!");
    console.log(data);
  } catch (error) {
    console.log("\\nCaught:", error);
  }
}

fetchWithError();

// Multiple awaits
async function sequential() {
  console.log("\\nSequential:");
  const a = await Promise.resolve(1);
  console.log("First:", a);
  const b = await Promise.resolve(2);
  console.log("Second:", b);
  return a + b;
}

sequential();

// Parallel execution
async function parallel() {
  console.log("\\nParallel:");
  const [a, b] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
  ]);
  console.log("Both:", a, b);
  return a + b;
}

parallel();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Async Generator Functions"
              initialCode={`// Async generator combines async + generator
async function* asyncNumberGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

// Use with for await...of
async function consumeAsync() {
  console.log("Async generator:");
  
  for await (let num of asyncNumberGenerator()) {
    console.log("Got:", num);
  }
  
  console.log("Done!");
}

consumeAsync();

// Practical example: paginated API
async function* fetchPages(maxPages = 3) {
  for (let page = 1; page <= maxPages; page++) {
    // Simulate API call
    const data = await Promise.resolve(\`Page \${page} data\`);
    yield data;
  }
}

async function loadAllPages() {
  console.log("\\nLoading pages:");
  
  for await (let pageData of fetchPages()) {
    console.log(pageData);
  }
}

loadAllPages();

// Async generator can yield promises
async function* promiseGenerator() {
  yield 1;
  yield Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function test() {
  console.log("\\nMixed yields:");
  for await (let val of promiseGenerator()) {
    console.log("Value:", val);
  }
}

test();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Getter and Setter Functions"
              initialCode={`// Getters and setters in objects
const person = {
  firstName: "John",
  lastName: "Doe",
  
  // Getter - access like property
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  
  // Setter - assign like property
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
  
  // Regular method for comparison
  getAge() {
    return this.age || "Unknown";
  }
};

// Use getter (no parentheses!)
console.log("Full name:", person.fullName);

// Use setter (like assignment!)
person.fullName = "Jane Smith";
console.log("After set:", person.fullName);
console.log("First:", person.firstName);
console.log("Last:", person.lastName);

// With validation
const account = {
  _balance: 0, // Convention: _ means private
  
  get balance() {
    return this._balance;
  },
  
  set balance(amount) {
    if (amount < 0) {
      console.log("Cannot set negative balance");
      return;
    }
    this._balance = amount;
  }
};

console.log("\\nInitial balance:", account.balance);
account.balance = 100;
console.log("After deposit:", account.balance);
account.balance = -50; // Rejected
console.log("After invalid:", account.balance);`}
            />
          </div>
        </section>

        {/* Higher-Order Functions */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Higher-Order Functions
          </h2>

          <ConceptCard
            title="Higher-Order Function Concepts"
            icon="🔝"
            color="purple"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Definition:</strong> Function that takes/returns
                functions
              </li>
              <li>
                <strong>Callbacks:</strong> Functions passed as arguments
              </li>
              <li>
                <strong>Function factories:</strong> Functions that return
                functions
              </li>
              <li>
                <strong>Composition:</strong> Combining functions
              </li>
              <li>
                <strong>Built-in HOFs:</strong> map, filter, reduce, forEach
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Functions as Arguments (Callbacks)"
              initialCode={`// Function that accepts a callback
function processArray(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}

// Use with different callbacks
const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, x => x * 2);
console.log("Doubled:", doubled);

const squared = processArray(numbers, x => x * x);
console.log("Squared:", squared);

// Named callback
function isEven(n) {
  return n % 2 === 0;
}

const evens = numbers.filter(isEven);
console.log("Evens:", evens);

// Multiple callbacks
function operate(a, b, operation) {
  return operation(a, b);
}

console.log("\\nWith different operations:");
console.log("Add:", operate(10, 5, (x, y) => x + y));
console.log("Multiply:", operate(10, 5, (x, y) => x * y));
console.log("Max:", operate(10, 5, (x, y) => Math.max(x, y)));

// Event simulation
function addEventListener(event, handler) {
  console.log(\`\\nRegistered handler for \${event}\`);
  // Simulate event firing
  setTimeout(() => {
    handler({ type: event, timestamp: Date.now() });
  }, 100);
}

addEventListener("click", (e) => {
  console.log("Event:", e.type);
});`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Functions Returning Functions (Factory Pattern)"
              initialCode={`// Function factory
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("double(5):", double(5)); // 10
console.log("triple(5):", triple(5)); // 15
console.log("quadruple(5):", quadruple(5)); // 20

// Greeter factory
function createGreeter(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
const sayHey = createGreeter("Hey");

console.log("\\n" + sayHello("Alice"));
console.log(sayHi("Bob"));
console.log(sayHey("Charlie"));

// Configuration factory
function createConfig(environment) {
  const configs = {
    development: { debug: true, api: "localhost:3000" },
    production: { debug: false, api: "api.example.com" }
  };
  
  return function(key) {
    return configs[environment][key];
  };
}

const devConfig = createConfig("development");
const prodConfig = createConfig("production");

console.log("\\nDev API:", devConfig("api"));
console.log("Prod debug:", prodConfig("debug"));`}
            />
          </div>
        </section>

        {/* Closures */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔒 Closures</h2>

          <ConceptCard title="Closure Basics" icon="🎁" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Definition:</strong> Function + lexical environment
              </li>
              <li>
                <strong>Access:</strong> Outer variables even after outer
                function returns
              </li>
              <li>
                <strong>Private data:</strong> Create private variables
              </li>
              <li>
                <strong>Scope chain:</strong> Function remembers creation scope
              </li>
              <li>
                <strong>Memory:</strong> Keeps referenced variables alive
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Closure Examples"
              initialCode={`// Basic closure
function outer() {
  let count = 0; // Outer variable
  
  function inner() {
    count++; // Accesses outer variable
    console.log("Count:", count);
  }
  
  return inner;
}

const increment = outer();
increment(); // 1
increment(); // 2
increment(); // 3

// Each closure has its own scope
const increment1 = outer();
const increment2 = outer();

console.log("\\nSeparate closures:");
increment1(); // 1
increment1(); // 2
increment2(); // 1 (different count!)

// Practical: Private counter
function createCounter(initial = 0) {
  let count = initial;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter(10);
console.log("\\nCounter:");
console.log("Value:", counter.getValue()); // 10
console.log("Inc:", counter.increment()); // 11
console.log("Inc:", counter.increment()); // 12
console.log("Dec:", counter.decrement()); // 11
// console.log(count); // Error! Private`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Closures in Loops (Classic Problem)"
              initialCode={`// Common closure mistake with var
console.log("With var (wrong):");
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log("i:", i);
  });
}

funcs[0](); // 3 (not 0!)
funcs[1](); // 3 (not 1!)
funcs[2](); // 3 (not 2!)
// All closures share same 'i'

// Solution 1: Use let (block scope)
console.log("\\nWith let (correct):");
const funcs2 = [];

for (let j = 0; j < 3; j++) {
  funcs2.push(function() {
    console.log("j:", j);
  });
}

funcs2[0](); // 0
funcs2[1](); // 1
funcs2[2](); // 2

// Solution 2: IIFE
console.log("\\nWith IIFE:");
const funcs3 = [];

for (var k = 0; k < 3; k++) {
  funcs3.push((function(index) {
    return function() {
      console.log("k:", index);
    };
  })(k));
}

funcs3[0](); // 0
funcs3[1](); // 1
funcs3[2](); // 2`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Practical Closure Use Cases"
              initialCode={`// Use case 1: Module pattern
const calculator = (function() {
  let memory = 0; // Private
  
  return {
    add(n) {
      memory += n;
      return this;
    },
    subtract(n) {
      memory -= n;
      return this;
    },
    getMemory() {
      return memory;
    },
    clear() {
      memory = 0;
      return this;
    }
  };
})();

calculator.add(10).add(5).subtract(3);
console.log("Memory:", calculator.getMemory()); // 12

// Use case 2: Function configuration
function createFormatter(prefix, suffix) {
  return function(text) {
    return prefix + text + suffix;
  };
}

const bold = createFormatter("<b>", "</b>");
const italic = createFormatter("<i>", "</i>");

console.log("\\n" + bold("Bold text"));
console.log(italic("Italic text"));

// Use case 3: Event handlers with data
function createClickHandler(id) {
  return function() {
    console.log("\\nClicked element:", id);
  };
}

const handler1 = createClickHandler("button1");
const handler2 = createClickHandler("button2");

handler1(); // "Clicked element: button1"
handler2(); // "Clicked element: button2"`}
            />
          </div>
        </section>

        {/* Recursion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔄 Recursion</h2>

          <ConceptCard title="Recursion Basics" icon="♻️" color="orange">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Definition:</strong> Function that calls itself
              </li>
              <li>
                <strong>Base case:</strong> Condition to stop recursion
              </li>
              <li>
                <strong>Recursive case:</strong> Calls itself with different
                input
              </li>
              <li>
                <strong>Stack:</strong> Each call adds to call stack
              </li>
              <li>
                <strong>Stack overflow:</strong> Too many recursive calls
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Basic Recursion"
              initialCode={`// Classic recursion: factorial
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5)); // 120
console.log("3! =", factorial(3)); // 6

// Countdown recursion
function countdown(n) {
  console.log(n);
  
  if (n <= 0) {
    return; // Base case
  }
  
  countdown(n - 1); // Recursive call
}

console.log("\\nCountdown from 5:");
countdown(5);

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("\\nFibonacci:");
console.log("fib(0):", fibonacci(0)); // 0
console.log("fib(1):", fibonacci(1)); // 1
console.log("fib(5):", fibonacci(5)); // 5
console.log("fib(10):", fibonacci(10)); // 55

// Sum array recursively
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log("\\nSum [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Tail Call Optimization (TCO)"
              initialCode={`// Non-tail recursive (not optimized)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Operation after recursive call
}

console.log("Regular factorial(5):", factorial(5));

// Tail recursive (optimizable)
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator); // Last operation is recursive call
}

console.log("Tail factorial(5):", factorialTail(5));

// Non-tail: sum
function sum(n) {
  if (n <= 0) return 0;
  return n + sum(n - 1); // Addition after call
}

console.log("\\nRegular sum(5):", sum(5));

// Tail: sum
function sumTail(n, acc = 0) {
  if (n <= 0) return acc;
  return sumTail(n - 1, acc + n); // Tail call
}

console.log("Tail sum(5):", sumTail(5));

// Benefits of tail recursion:
// - Can be optimized to loop by compiler
// - Doesn't grow call stack
// - Prevents stack overflow for deep recursion
// Note: TCO not widely supported yet in JavaScript`}
            />
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🚀 Advanced Function Concepts
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Currying"
              initialCode={`// Currying: Transform f(a, b, c) to f(a)(b)(c)
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

// Example function to curry
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log("curriedAdd(1)(2)(3):", curriedAdd(1)(2)(3)); // 6
console.log("curriedAdd(1, 2)(3):", curriedAdd(1, 2)(3)); // 6
console.log("curriedAdd(1, 2, 3):", curriedAdd(1, 2, 3)); // 6

// Manual currying
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log("\\nmultiply(2)(3)(4):", multiply(2)(3)(4)); // 24

const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
console.log("multiplyBy2And3(4):", multiplyBy2And3(4)); // 24

// Practical use: specialized functions
function log(level) {
  return function(message) {
    console.log(\`[\${level}] \${message}\`);
  };
}

const error = log("ERROR");
const warn = log("WARN");
const info = log("INFO");

error("Something went wrong");
warn("This is a warning");
info("Just FYI");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Partial Application"
              initialCode={`// Partial application: fix some arguments
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

// Example
function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Fix first argument
const sayHello = partial(greet, "Hello");
console.log(sayHello("Alice", "!")); // "Hello, Alice!"
console.log(sayHello("Bob", ".")); // "Hello, Bob."

// Fix first two arguments
const sayHelloAlice = partial(greet, "Hello", "Alice");
console.log("\\n" + sayHelloAlice("!")); // "Hello, Alice!"
console.log(sayHelloAlice("...")); // "Hello, Alice..."

// Using bind for partial application
function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = multiply.bind(null, 2);
console.log("\\nmultiplyBy2(3, 4):", multiplyBy2(3, 4)); // 24

const double = multiply.bind(null, 2, 1);
console.log("double(5):", double(5)); // 10

// Practical: event handlers with data
function handleClick(component, event) {
  console.log(\`\${component} clicked\`, event);
}

const buttonHandler = partial(handleClick, "Button");
const linkHandler = partial(handleClick, "Link");

buttonHandler({ type: "click" });
linkHandler({ type: "click" });`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Function Composition"
              initialCode={`// Function composition: combine functions
function compose(...fns) {
  return function(value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

// Individual functions
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

// Compose them
const combined = compose(subtract3, multiply2, add5);

console.log("combined(10):", combined(10));
// 10 -> add5 -> 15 -> multiply2 -> 30 -> subtract3 -> 27

// Pipe (left to right)
function pipe(...fns) {
  return function(value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

const piped = pipe(add5, multiply2, subtract3);
console.log("piped(10):", piped(10));
// 10 -> add5 -> 15 -> multiply2 -> 30 -> subtract3 -> 27

// Practical example
const processString = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.split(" "),
  arr => arr.filter(word => word.length > 3),
  arr => arr.join("-")
);

console.log("\\n" + processString("  Hello World From JavaScript  "));
// "hello-world-from-javascript"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Pure Functions"
              initialCode={`// Pure function: same input -> same output, no side effects
function add(a, b) {
  return a + b; // Pure
}

console.log("add(2, 3):", add(2, 3)); // Always 5

// Impure function: uses external state
let total = 0;

function addToTotal(n) {
  total += n; // Side effect!
  return total;
}

console.log("\\naddToTotal(5):", addToTotal(5)); // 5
console.log("addToTotal(5):", addToTotal(5)); // 10 (different!)

// Impure: modifies input
function impureDouble(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2; // Modifies original!
  }
  return arr;
}

const nums1 = [1, 2, 3];
console.log("\\nimpureDouble:", impureDouble(nums1));
console.log("Original changed:", nums1); // Modified!

// Pure version: returns new array
function pureDouble(arr) {
  return arr.map(x => x * 2); // No side effects
}

const nums2 = [1, 2, 3];
console.log("\\npureDouble:", pureDouble(nums2));
console.log("Original unchanged:", nums2); // Unchanged!

// Benefits of pure functions:
// - Predictable
// - Testable
// - Cacheable
// - Parallelizable
// - Easier to debug`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Memoization"
              initialCode={`// Memoization: cache function results
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      console.log("Cached:", key);
      return cache[key];
    }
    
    console.log("Computing:", key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Slow fibonacci (exponential time)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoized fibonacci
const fibMemo = memoize(function fib(n) {
  if (n <= 1) return n;
  return fibMemo(n - 1) + fibMemo(n - 2);
});

console.log("Memoized fib(10):", fibMemo(10));
console.log("Again (cached):", fibMemo(10));
console.log("fib(15):", fibMemo(15));

// Expensive calculation
function expensiveOperation(n) {
  // Simulate heavy computation
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return n * 2;
}

const memoized = memoize(expensiveOperation);

console.log("\\nFirst call:");
memoized(5);
console.log("Second call (instant):");
memoized(5);`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Function Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use arrow functions for callbacks
                </strong>
                <p className="ml-4 mt-1">
                  Cleaner syntax and lexical 'this' binding make them perfect
                  for callbacks.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use function declarations for top-level functions
                </strong>
                <p className="ml-4 mt-1">
                  Hoisting allows any call order. Good for main functions.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Keep functions small and focused
                </strong>
                <p className="ml-4 mt-1">
                  One function = one task. Easier to test and maintain.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Prefer pure functions
                </strong>
                <p className="ml-4 mt-1">
                  No side effects, easier to reason about and test.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use default parameters instead of || operator
                </strong>
                <p className="ml-4 mt-1">
                  Default parameters handle 0 and "" correctly.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use rest parameters instead of arguments
                </strong>
                <p className="ml-4 mt-1">
                  Rest parameters are real arrays with all array methods.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Name your functions
                </strong>
                <p className="ml-4 mt-1">
                  Named functions are easier to debug in stack traces.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Avoid deeply nested functions
                </strong>
                <p className="ml-4 mt-1">
                  Extract nested functions to improve readability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Function Types Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Syntax
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Hoisted
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    'this'
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">
                    Declaration
                  </td>
                  <td className="px-3 py-2 font-mono text-xs">
                    function f(){}"{"}"}
                  </td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">Dynamic</td>
                  <td className="px-3 py-2">Top-level functions</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">
                    Expression
                  </td>
                  <td className="px-3 py-2 font-mono text-xs">
                    const f = function(){}"{"}"}
                  </td>
                  <td className="px-3 py-2">❌ No</td>
                  <td className="px-3 py-2">Dynamic</td>
                  <td className="px-3 py-2">Conditional assignment</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-green-400">Arrow</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    const f = () =&gt; {}"{"}"}
                  </td>
                  <td className="px-3 py-2">❌ No</td>
                  <td className="px-3 py-2">Lexical</td>
                  <td className="px-3 py-2">Callbacks, short functions</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-orange-400">IIFE</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    (function(){"{}"})()
                  </td>
                  <td className="px-3 py-2">N/A</td>
                  <td className="px-3 py-2">Dynamic</td>
                  <td className="px-3 py-2">Immediate execution, scope</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">
                    Generator
                  </td>
                  <td className="px-3 py-2 font-mono text-xs">
                    function*(){}"{"}"}
                  </td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">Dynamic</td>
                  <td className="px-3 py-2">Iterators, lazy evaluation</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">Async</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    async function(){}"{"}"}
                  </td>
                  <td className="px-3 py-2">✅ Yes</td>
                  <td className="px-3 py-2">Dynamic</td>
                  <td className="px-3 py-2">Async operations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 2 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>Control Flow & Functions</strong>!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">Conditionals</strong>
                  <p className="text-sm text-gray-400">
                    if, else, switch, fall-through
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">All Loop Types</strong>
                  <p className="text-sm text-gray-400">
                    for, while, for...of, control flow
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">Functions Complete</strong>
                  <p className="text-sm text-gray-400">
                    All types, closures, advanced concepts
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
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
