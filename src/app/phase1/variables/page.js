"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function VariablesPage() {
  return (
    <SectionLayout
      title="1.1 Variables & Constants"
      description="Master var, let, const, hoisting, Temporal Dead Zone, and scope"
      nextSection={{
        title: "Data Types - Primitives",
        path: "/phase1/primitives",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📦 Understanding Variables
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Variables are containers that store data values. JavaScript has
            three ways to declare variables:
            <span className="text-blue-400 font-mono"> var</span>,
            <span className="text-purple-400 font-mono"> let</span>, and
            <span className="text-green-400 font-mono"> const</span>. Each has
            different scoping rules and behaviors.
          </p>
        </div>

        {/* var - Function Scoped */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            🔵 var (Function-Scoped)
          </h2>

          <ConceptCard title="Key Characteristics" icon="📌" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Function-scoped:</strong> Visible throughout the entire
                function
              </li>
              <li>
                <strong>Hoisted:</strong> Declaration moved to top of scope
              </li>
              <li>
                <strong>Can be redeclared:</strong> Same variable can be
                declared multiple times
              </li>
              <li>
                <strong>Can be updated:</strong> Value can be changed
              </li>
              <li>
                <strong>Global object property:</strong> Creates property on
                window (browser)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="var - Basic Declaration and Reassignment"
              initialCode={`// Basic var declaration
var message = "Hello World";
console.log(message);

// Reassignment
var message = "Hello JavaScript"; // Redeclaration allowed!
console.log(message);

// Update without var
message = "Updated message";
console.log(message);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="var - Function Scope Example"
              initialCode={`function demoScope() {
  if (true) {
    var x = 10;  // var is function-scoped
    console.log("Inside if:", x);
  }
  console.log("Outside if:", x); // Still accessible!
}

demoScope();

// Try accessing x here (will error if uncommented)
// console.log(x);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="var - Hoisting Behavior"
              initialCode={`// Variable hoisting
console.log(name); // undefined (not an error!)

var name = "Alice";
console.log(name); // "Alice"

/* How JavaScript sees it:
var name; // Declaration hoisted
console.log(name); // undefined
name = "Alice"; // Assignment stays in place
console.log(name);
*/`}
            />
          </div>
        </section>

        {/* let - Block Scoped */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            🟣 let (Block-Scoped)
          </h2>

          <ConceptCard title="Key Characteristics" icon="🎯" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Block-scoped:</strong> Only visible within the {"{}"}{" "}
                block
              </li>
              <li>
                <strong>Temporal Dead Zone:</strong> Cannot access before
                declaration
              </li>
              <li>
                <strong>Cannot be redeclared:</strong> In same scope
              </li>
              <li>
                <strong>Can be updated:</strong> Value can be changed
              </li>
              <li>
                <strong>Not hoisted (technically):</strong> Hoisted but in TDZ
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="let - Block Scope Example"
              initialCode={`// Block scope demonstration
if (true) {
  let blockVar = "I'm in the block";
  console.log("Inside:", blockVar);
}

// Try to access outside the block (will error if uncommented)
// console.log(blockVar); // ReferenceError!

// let in different blocks
let count = 1;
console.log("Outer count:", count);

if (true) {
  let count = 2; // Different variable!
  console.log("Inner count:", count);
}

console.log("Outer count again:", count);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="let - Cannot Redeclare"
              initialCode={`let age = 25;
console.log(age);

// This would cause an error (commented out):
// let age = 30; // SyntaxError: Identifier 'age' has already been declared

// But you CAN update:
age = 30; // This works fine
console.log(age);

// Different scopes = OK
let name = "Outer";
{
  let name = "Inner"; // Different scope, allowed
  console.log(name);
}
console.log(name);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="let - Temporal Dead Zone (TDZ)"
              initialCode={`// TDZ: Period between entering scope and declaration

console.log("Before TDZ");

// If you uncomment this, you'll get ReferenceError:
// console.log(x); // Cannot access 'x' before initialization

let x = 10;
console.log("After declaration:", x);

// Another TDZ example
function demo() {
  // console.log(value); // TDZ! Error if uncommented
  let value = "Hello";
  console.log(value); // Works fine
}

demo();`}
            />
          </div>
        </section>

        {/* const - Block Scoped & Immutable Binding */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            🟢 const (Block-Scoped, Immutable Binding)
          </h2>

          <ConceptCard title="Key Characteristics" icon="🔒" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Block-scoped:</strong> Like let, confined to block
              </li>
              <li>
                <strong>Must be initialized:</strong> Cannot declare without
                value
              </li>
              <li>
                <strong>Cannot be reassigned:</strong> Binding is immutable
              </li>
              <li>
                <strong>Object properties CAN change:</strong> Only binding is
                constant
              </li>
              <li>
                <strong>Temporal Dead Zone:</strong> Same as let
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="const - Basic Usage"
              initialCode={`// Must initialize when declaring
const PI = 3.14159;
console.log("PI:", PI);

// Cannot reassign (error if uncommented):
// PI = 3.14; // TypeError: Assignment to constant variable

// Must initialize:
// const x; // SyntaxError: Missing initializer

// Block scoped like let
const OUTER = "outer";
{
  const OUTER = "inner"; // Different variable
  console.log(OUTER);
}
console.log(OUTER);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="const - Objects and Arrays (Important!)"
              initialCode={`// const with objects - properties CAN be modified!
const person = {
  name: "Alice",
  age: 25
};

console.log("Original:", person);

// Modifying properties is allowed
person.age = 26;
person.city = "New York";
console.log("Modified:", person);

// But cannot reassign the object itself:
// person = {}; // TypeError if uncommented

// Same with arrays
const numbers = [1, 2, 3];
console.log("Original array:", numbers);

numbers.push(4); // Modifying array is OK
console.log("Modified array:", numbers);

// numbers = [5, 6]; // TypeError if uncommented`}
            />
          </div>
        </section>

        {/* Hoisting Deep Dive */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⬆️ Hoisting Behavior
          </h2>

          <ConceptCard title="What is Hoisting?" icon="🎈" color="orange">
            <p>
              Hoisting is JavaScript's behavior of moving declarations to the
              top of their scope before code execution. However,{" "}
              <strong>
                only declarations are hoisted, not initializations
              </strong>
              .
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Comparing Hoisting: var vs let/const"
              initialCode={`// var hoisting
console.log("var:", name); // undefined (hoisted)
var name = "Alice";
console.log("var:", name); // "Alice"

// let/const hoisting (TDZ)
// Uncomment to see error:
// console.log(age); // ReferenceError: Cannot access before initialization
let age = 25;
console.log("let:", age);

// Function declarations are fully hoisted
sayHello(); // Works!

function sayHello() {
  console.log("Hello from hoisted function!");
}

// But function expressions aren't
// greet(); // Error if uncommented
const greet = function() {
  console.log("Hello!");
};
greet(); // Works after declaration`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Complex Hoisting Example"
              initialCode={`var x = 1;

function test() {
  console.log("x at start:", x); // undefined, not 1!
  
  var x = 2; // This declaration is hoisted
  console.log("x after declaration:", x); // 2
}

test();
console.log("x outside:", x); // 1

/* JavaScript interprets test() as:
function test() {
  var x; // Declaration hoisted
  console.log("x at start:", x); // undefined
  x = 2; // Assignment stays here
  console.log("x after declaration:", x);
}
*/`}
            />
          </div>
        </section>

        {/* Temporal Dead Zone (TDZ) */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⏱️ Temporal Dead Zone (TDZ)
          </h2>

          <ConceptCard title="Understanding TDZ" icon="⚠️" color="orange">
            <p className="mb-2">
              The TDZ is the time between entering a scope and the actual
              variable declaration. During this period, the variable exists but
              cannot be accessed.
            </p>
            <p>
              <strong>Why it exists:</strong> To catch potential bugs and make
              code more predictable by preventing access to variables before
              they're properly declared.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="TDZ Visualization"
              initialCode={`// TDZ starts at the beginning of the scope

{
  // TDZ for 'temp' starts here
  // console.log(temp); // ReferenceError: in TDZ
  
  console.log("Before declaration");
  
  // TDZ ends here
  let temp = "value";
  
  console.log("After declaration:", temp); // Works!
}

// TDZ with typeof
console.log(typeof undeclaredVar); // "undefined" - no error
// console.log(typeof declaredLater); // ReferenceError: in TDZ

let declaredLater = "hello";`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="TDZ Trap: Default Parameters"
              initialCode={`// Tricky TDZ example
function createUser(name = firstName, firstName = "Anonymous") {
  // This will error! name tries to use firstName,
  // but firstName is in TDZ when name is evaluated
  return { name, firstName };
}

// Uncomment to see error:
// console.log(createUser());

// Correct way:
function createUserCorrect(firstName = "Anonymous", name = firstName) {
  return { name, firstName };
}

console.log(createUserCorrect());
console.log(createUserCorrect("Alice"));`}
            />
          </div>
        </section>

        {/* Global Variables and window Object */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            🌍 Global Variables & Window Object
          </h2>

          <ConceptCard title="Global Scope Behavior" icon="🔄" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>var in global scope:</strong> Creates property on window
                object (browser)
              </li>
              <li>
                <strong>let/const in global scope:</strong> Does NOT create
                window property
              </li>
              <li>
                <strong>Implicit globals:</strong> Assignment without
                declaration creates global
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Global Variables Comparison"
              initialCode={`// Note: This runs in a different context, 
// so window object might not be available

// var creates global property
var globalVar = "I'm on window";
console.log("var declared:", globalVar);

// let/const don't create window properties
let globalLet = "Not on window";
const globalConst = "Also not on window";

console.log("let declared:", globalLet);
console.log("const declared:", globalConst);

// Implicit global (bad practice!)
function createGlobal() {
  // Without var/let/const, creates global
  implicitGlobal = "Oops, I'm global!";
}

createGlobal();
console.log("Implicit global:", implicitGlobal);

// Always use "use strict" to prevent this!`}
            />
          </div>
        </section>

        {/* Variable Naming Conventions */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            📝 Variable Naming Conventions & Rules
          </h2>

          <ConceptCard
            title="Naming Rules (Must Follow)"
            icon="⚖️"
            color="purple"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Must start with letter, underscore (_), or dollar sign ($)
              </li>
              <li>Can contain letters, digits, underscores, dollar signs</li>
              <li>Cannot use reserved keywords (let, class, if, etc.)</li>
              <li>Case-sensitive (myVar ≠ myvar ≠ MyVar)</li>
            </ul>
          </ConceptCard>

          <ConceptCard
            title="Naming Conventions (Best Practices)"
            icon="✨"
            color="green"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>camelCase:</strong> Standard for variables and functions
                (myVariableName)
              </li>
              <li>
                <strong>PascalCase:</strong> For classes and constructors
                (MyClass)
              </li>
              <li>
                <strong>UPPER_SNAKE_CASE:</strong> For constants (MAX_SIZE,
                API_KEY)
              </li>
              <li>
                <strong>Descriptive names:</strong> user instead of u,
                totalPrice instead of tp
              </li>
              <li>
                <strong>Boolean prefixes:</strong> is, has, can (isActive,
                hasPermission)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Valid and Invalid Variable Names"
              initialCode={`// ✅ Valid names
let userName = "Alice";
let user_name = "Bob";
let $price = 100;
let _private = "hidden";
let name2 = "value";
let π = 3.14159; // Unicode characters work!
let 你好 = "Chinese works too!";

console.log(userName, user_name, $price, _private);

// ❌ Invalid names (would cause errors if uncommented):
// let 2name = "nope"; // Can't start with number
// let user-name = "nope"; // Can't use hyphens
// let let = "nope"; // Can't use keywords
// let user name = "nope"; // Can't have spaces

// Case sensitivity
let myvar = 1;
let myVar = 2;
let MyVar = 3;
console.log(myvar, myVar, MyVar); // All different!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Good Naming Practices"
              initialCode={`// Constants
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";
const PI = 3.14159;

// Regular variables (camelCase)
let userCount = 0;
let totalPrice = 99.99;
let isLoggedIn = false;

// Boolean prefixes
let hasPermission = true;
let canEdit = false;
let isActive = true;

// Arrays (plural)
let users = ["Alice", "Bob"];
let products = [/* ... */];

// Objects (singular)
let user = { name: "Alice" };
let config = { /* ... */ };

// Functions (verb + noun)
function calculateTotal() { return 0; }
function getUserName() { return "Alice"; }
function validateEmail() { return true; }

console.log("Constants:", MAX_LOGIN_ATTEMPTS, API_BASE_URL);
console.log("Variables:", userCount, isLoggedIn);
console.log("Functions exist:", typeof calculateTotal);`}
            />
          </div>
        </section>

        {/* Scope Chains */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">🔗 Scope Chain</h2>

          <ConceptCard title="Understanding Scope Chain" icon="🎯" color="blue">
            <p className="mb-2">
              When JavaScript looks for a variable, it searches in this order:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Current scope</li>
              <li>Parent scope</li>
              <li>Parent's parent scope</li>
              <li>... continues up to global scope</li>
            </ol>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Scope Chain Example"
              initialCode={`let global = "Global";

function outer() {
  let outerVar = "Outer";
  
  function middle() {
    let middleVar = "Middle";
    
    function inner() {
      let innerVar = "Inner";
      
      // Can access all variables in the chain
      console.log("Inner:", innerVar);
      console.log("Middle:", middleVar);
      console.log("Outer:", outerVar);
      console.log("Global:", global);
    }
    
    inner();
    // console.log(innerVar); // Error: can't access inner scope
  }
  
  middle();
  // console.log(middleVar); // Error: can't access middle scope
}

outer();
// console.log(outerVar); // Error: can't access outer scope`}
            />
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
                  1. Use const by default
                </strong>
                <p className="ml-4 mt-1">
                  Use const unless you know the value will change. This prevents
                  accidental reassignment.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use let when you need to reassign
                </strong>
                <p className="ml-4 mt-1">
                  Only use let when you know the variable value will be updated.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Avoid var in modern JavaScript
                </strong>
                <p className="ml-4 mt-1">
                  var has confusing scoping rules and is no longer needed with
                  let and const.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Declare variables at the top of their scope
                </strong>
                <p className="ml-4 mt-1">
                  Makes code easier to read and understand.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use meaningful, descriptive names
                </strong>
                <p className="ml-4 mt-1">
                  Code is read more often than written. Make it clear!
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Avoid global variables
                </strong>
                <p className="ml-4 mt-1">
                  They can cause conflicts and make debugging difficult.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Quick Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-300 font-semibold">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-left text-blue-400 font-semibold">
                    var
                  </th>
                  <th className="px-4 py-3 text-left text-purple-400 font-semibold">
                    let
                  </th>
                  <th className="px-4 py-3 text-left text-green-400 font-semibold">
                    const
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium">Scope</td>
                  <td className="px-4 py-3">Function</td>
                  <td className="px-4 py-3">Block</td>
                  <td className="px-4 py-3">Block</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium">Hoisting</td>
                  <td className="px-4 py-3">✅ Yes (undefined)</td>
                  <td className="px-4 py-3">🚫 TDZ</td>
                  <td className="px-4 py-3">🚫 TDZ</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium">Redeclaration</td>
                  <td className="px-4 py-3">✅ Allowed</td>
                  <td className="px-4 py-3">❌ Error</td>
                  <td className="px-4 py-3">❌ Error</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium">Reassignment</td>
                  <td className="px-4 py-3">✅ Allowed</td>
                  <td className="px-4 py-3">✅ Allowed</td>
                  <td className="px-4 py-3">❌ Error</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium">Must Initialize</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">✅ Yes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium">Window Property</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
