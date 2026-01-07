"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function DebuggingPage() {
  return (
    <SectionLayout
      title="33.2 JavaScript Debugging Mastery"
      description="Master JavaScript debugging - identify bugs, understand root causes, and fix them correctly"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🐛 JavaScript Debugging Mastery
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            <strong>Complete debugging guide</strong> for JavaScript interviews.
            Learn to identify bugs, understand root causes, and apply exact
            fixes. Master these patterns and you can debug any JavaScript code!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mt-4">
            {[
              "Type Coercion Bugs",
              "Scope & Closure",
              "this Binding",
              "Async/Await",
              "Promise Chains",
              "Hoisting Issues",
              "Reference vs Value",
              "Array/Object Mutation",
            ].map((topic) => (
              <div
                key={topic}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-red-300 font-mono text-xs"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Debugging Question Format Note */}
        <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded p-4 mb-8">
          <h3 className="text-lg font-bold text-blue-400 mb-2">
            📋 Debugging Question Format
          </h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>
              <strong>🔴 What's wrong:</strong> Identify the bug/problem
            </li>
            <li>
              <strong>💡 Why it happens:</strong> Explain the root cause
            </li>
            <li>
              <strong>✅ Exact fix:</strong> Provide the corrected code
            </li>
          </ul>
        </div>

        {/* CATEGORY 1: TYPE COERCION & TYPE ERRORS */}
        <section>
          <div className="bg-green-500/10 border-l-4 border-green-500 rounded p-4 mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-2">
              🟢 Category 1: Type Coercion & Type Errors
            </h2>
            <p className="text-gray-300">
              Bugs related to type coercion, implicit conversions, and type
              mismatches
            </p>
          </div>

          {/* Debugging Question 1 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #1: String Addition Instead of Number Addition
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> The function should add two numbers,
                but it's concatenating strings instead.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Expected: 8, Actual: "53"
console.log(add("5", 3)); // Expected: 8, Actual: "53"
console.log(add(5, "3")); // Expected: 8, Actual: "53"`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                The function concatenates strings instead of adding numbers when
                either parameter is a string. JavaScript's + operator performs
                string concatenation when one operand is a string.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                JavaScript's + operator has two behaviors: arithmetic addition
                (for numbers) and string concatenation (when one operand is a
                string). Type coercion converts the number to a string when
                concatenating, so "5" + 3 becomes "5" + "3" = "53".
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`function add(a, b) {
  return Number(a) + Number(b);
  // OR: return +a + +b;
  // OR: return parseInt(a, 10) + parseInt(b, 10);
}

console.log(add(5, 3)); // 8
console.log(add("5", 3)); // 8
console.log(add(5, "3")); // 8`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 2 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #2: Loose Equality Causing Unexpected Results
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> The condition is true when it should
                be false, causing unexpected behavior.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function checkValue(value) {
  if (value == 0) {
    return "Zero";
  }
  return "Not zero";
}

console.log(checkValue(0)); // "Zero" ✓
console.log(checkValue("0")); // "Zero" (might be unexpected)
console.log(checkValue(false)); // "Zero" (BUG!)
console.log(checkValue("")); // "Zero" (BUG!)
console.log(checkValue([])); // "Zero" (BUG!)
console.log(checkValue(null)); // "Zero" (BUG!)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Using == (loose equality) causes type coercion, so false, "",
                [], and null all coerce to 0, making the condition true
                unexpectedly.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                The == operator performs type coercion before comparison. When
                comparing to 0, JavaScript converts falsy values (false, "", [],
                null, undefined) to 0. This is the Abstract Equality Comparison
                algorithm.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`function checkValue(value) {
  if (value === 0) {
    return "Zero";
  }
  return "Not zero";
}

// OR if you need to handle string "0":
function checkValue(value) {
  if (value === 0 || value === "0") {
    return "Zero";
  }
  return "Not zero";
}

console.log(checkValue(0)); // "Zero" ✓
console.log(checkValue("0")); // "Not zero" or "Zero" (explicit)
console.log(checkValue(false)); // "Not zero" ✓
console.log(checkValue("")); // "Not zero" ✓`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 3 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #3: Array Comparison Always False
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Even with identical arrays, the
                comparison returns false.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

if (arr1 == arr2) {
  console.log("Arrays are equal");
} else {
  console.log("Arrays are not equal"); // This runs
}

if (arr1 === arr2) {
  console.log("Arrays are equal");
} else {
  console.log("Arrays are not equal"); // This also runs
}`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Both == and === compare object references, not contents. Arrays
                are objects, so two different arrays are never equal even if
                they have the same values.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Arrays are reference types (objects). When comparing arrays, JS
                compares memory addresses, not values. Each array literal
                creates a new object in memory, so arr1 and arr2 point to
                different locations, making them never equal.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Option 1: Compare lengths and elements
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, idx) => val === arr2[idx]);
}

// Option 2: JSON.stringify (for simple arrays)
function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Option 3: Deep comparison library (for nested arrays/objects)
// lodash.isEqual(arr1, arr2)

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arraysEqual(arr1, arr2)); // true`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 2: SCOPE & CLOSURE BUGS */}
        <section>
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">
              🟡 Category 2: Scope & Closure Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to variable scope, closures, and hoisting
            </p>
          </div>

          {/* Debugging Question 4 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #4: Loop Variable in Closure - Classic Closure Bug
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> All callbacks log the same value
                instead of different values.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const buttons = [];
for (var i = 0; i < 3; i++) {
  buttons.push({
    onClick: function() {
      console.log("Button", i, "clicked");
    }
  });
}

buttons[0].onClick(); // "Button 3 clicked" (BUG!)
buttons[1].onClick(); // "Button 3 clicked" (BUG!)
buttons[2].onClick(); // "Button 3 clicked"`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                All callbacks reference the same variable i. By the time they're
                called, the loop has finished and i = 3. This is the classic
                closure-in-loop bug.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                var is function-scoped, so all closures share the same i
                variable. The closures capture the variable reference, not the
                value. When callbacks execute, they all see i = 3 (the final
                value after the loop).
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Use let (block-scoped)
const buttons = [];
for (let i = 0; i < 3; i++) {
  buttons.push({
    onClick: function() {
      console.log("Button", i, "clicked");
    }
  });
}

// Fix 2: IIFE to create new scope
const buttons = [];
for (var i = 0; i < 3; i++) {
  (function(index) {
    buttons.push({
      onClick: function() {
        console.log("Button", index, "clicked");
      }
    });
  })(i);
}

// Fix 3: Bind with current value
const buttons = [];
for (var i = 0; i < 3; i++) {
  buttons.push({
    onClick: (function(index) {
      return function() {
        console.log("Button", index, "clicked");
      };
    })(i)
  });
}

buttons[0].onClick(); // "Button 0 clicked" ✓
buttons[1].onClick(); // "Button 1 clicked" ✓`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 5 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #5: Variable Hoisting Causing Undefined
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Variable is undefined when accessed
                before declaration.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`console.log(x); // undefined (not ReferenceError)
var x = 5;

console.log(y); // ReferenceError: Cannot access before initialization
let y = 10;

// In function
function example() {
  console.log(a); // undefined
  var a = 20;
  
  console.log(b); // ReferenceError: Cannot access before initialization
  let b = 30;
}`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Accessing variables before declaration can cause unexpected
                results. var hoists but initializes to undefined, while
                let/const throw ReferenceError in TDZ (Temporal Dead Zone).
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                var declarations are hoisted and initialized to undefined. let
                and const are also hoisted but remain in TDZ until the
                declaration line is executed. Accessing them in TDZ throws
                ReferenceError.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix: Always declare variables before use
var x = 5;
console.log(x); // 5 ✓

let y = 10;
console.log(y); // 10 ✓

// In function
function example() {
  var a = 20;
  console.log(a); // 20 ✓
  
  let b = 30;
  console.log(b); // 30 ✓
}

// Best practice: Use let/const and declare at top of scope
function example() {
  const a = 20;
  const b = 30;
  
  console.log(a); // 20 ✓
  console.log(b); // 30 ✓
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 6 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #6: Closure Not Preserving Expected Value
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> The counter function always returns
                the initial value instead of incrementing.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function createCounter() {
  var count = 0;
  return function() {
    return count; // Forgot to increment!
  };
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 0 (BUG! Should be 1)
console.log(counter()); // 0 (BUG! Should be 2)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                The inner function returns count but never increments it. The
                counter always returns 0.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                The closure captures count, but without incrementing it, the
                value never changes. Each call returns the same value (0).
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`function createCounter() {
  var count = 0;
  return function() {
    return ++count; // Increment before returning
    // OR: count++; return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1 ✓
console.log(counter()); // 2 ✓
console.log(counter()); // 3 ✓`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 3: this BINDING BUGS */}
        <section>
          <div className="bg-orange-500/10 border-l-4 border-orange-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              🟠 Category 3: this Binding Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to incorrect this context binding
            </p>
          </div>

          {/* Debugging Question 7 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #7: Lost this Context in Method Callback
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> this is undefined when calling method
                as callback.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const user = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // "Hello, John" ✓

// But when passed as callback:
setTimeout(user.greet, 1000); 
// "Hello, undefined" (BUG!)

// Or in array method:
const arr = [1, 2, 3];
arr.forEach(user.greet); 
// "Hello, undefined" (BUG!)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                When a method is extracted and called as a function, this loses
                its binding to the object. this becomes undefined (in strict
                mode) or global object (in non-strict mode).
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                this binding is determined by how a function is called, not
                where it's defined. When user.greet is passed as a callback,
                it's called without the object context, so this is undefined.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Arrow function preserves this
const user = {
  name: "John",
  greet: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

// Fix 2: bind() to preserve this
setTimeout(user.greet.bind(user), 1000);

// Fix 3: Wrap in arrow function
setTimeout(() => user.greet(), 1000);

// Fix 4: Use arrow function method
const user = {
  name: "John",
  greet: () => {
    console.log("Hello, " + this.name); 
    // Note: Arrow functions don't have their own this
  }
};

// Fix 5: Store this reference
const user = {
  name: "John",
  greet: function() {
    const self = this;
    setTimeout(function() {
      console.log("Hello, " + self.name);
    }, 1000);
  }
};`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 8 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #8: Arrow Function Loses this Binding
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Using arrow function as object method
                makes this point to wrong context.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const user = {
  name: "John",
  friends: ["Alice", "Bob"],
  
  // Arrow function - BUG!
  greetFriends: () => {
    this.friends.forEach(function(friend) {
      console.log(this.name + " says hi to " + friend);
      // this is undefined here (or global in non-strict)
    });
  }
};

user.greetFriends(); // TypeError: Cannot read property 'name' of undefined`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Arrow functions don't have their own this - they inherit from
                enclosing scope. Here, this refers to global scope (or undefined
                in strict mode), not the user object.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Arrow functions lexically bind this from the enclosing scope. In
                this case, the enclosing scope is global, so this is window (or
                undefined in strict mode). Regular functions would bind this to
                the object calling them.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Use regular function method
const user = {
  name: "John",
  friends: ["Alice", "Bob"],
  greetFriends: function() {
    this.friends.forEach(function(friend) {
      console.log(this.name + " says hi to " + friend);
    }.bind(this));
  }
};

// Fix 2: Arrow function in forEach callback
const user = {
  name: "John",
  friends: ["Alice", "Bob"],
  greetFriends: function() {
    this.friends.forEach(friend => {
      console.log(this.name + " says hi to " + friend);
      // this refers to user object ✓
    });
  }
};

// Fix 3: Store this reference
const user = {
  name: "John",
  friends: ["Alice", "Bob"],
  greetFriends: function() {
    const self = this;
    this.friends.forEach(function(friend) {
      console.log(self.name + " says hi to " + friend);
    });
  }
};`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 4: ASYNC/AWAIT BUGS */}
        <section>
          <div className="bg-purple-500/10 border-l-4 border-purple-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-purple-400 mb-2">
              🟣 Category 4: Async/Await & Promise Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to async/await, promises, and asynchronous code
            </p>
          </div>

          {/* Debugging Question 9 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #9: Forgetting await in Async Function
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> The function returns a Promise instead
                of the actual value.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`async function fetchUser() {
  const response = fetch("https://api.example.com/user");
  // Missing await!
  return response.json(); // TypeError: response.json is not a function
}

// Or:
async function getData() {
  const data = fetch("https://api.example.com/data");
  // Missing await!
  return data; // Returns Promise, not actual data
}

getData().then(result => {
  console.log(result); // Promise object, not data!
});`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Without await, fetch() returns a Promise immediately. Calling
                .json() on a Promise throws an error, or returning without await
                returns the Promise instead of resolved value.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                async/await allows sequential async code, but you must await
                promises to get their resolved values. Without await, the
                Promise object is returned immediately, not the result.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`async function fetchUser() {
  const response = await fetch("https://api.example.com/user");
  return await response.json(); // Wait for JSON parsing too
}

// Or handle errors:
async function fetchUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getData() {
  const data = await fetch("https://api.example.com/data");
  return await data.json(); // Returns actual data ✓
}

// Usage:
const user = await fetchUser(); // Gets actual user object ✓`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 10 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #10: Unhandled Promise Rejection
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Promise rejection is not caught,
                causing unhandled rejection error.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`async function loadData() {
  const data = await fetch("https://api.example.com/data");
  return data.json();
}

// No error handling!
loadData(); // Unhandled promise rejection if fetch fails

// Or:
function processData() {
  return Promise.reject("Error occurred");
}

processData(); // Unhandled promise rejection`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                When a Promise is rejected and no .catch() handler exists, it
                causes an unhandled promise rejection warning/error.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Promises can be rejected (fail), and these rejections must be
                caught. If you don't handle rejections with .catch() or
                try/catch, JavaScript emits an unhandled rejection error.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Try/catch with async/await
async function loadData() {
  try {
    const data = await fetch("https://api.example.com/data");
    return await data.json();
  } catch (error) {
    console.error("Error loading data:", error);
    // Handle error or re-throw
    throw error;
  }
}

// Fix 2: .catch() with promises
function loadData() {
  return fetch("https://api.example.com/data")
    .then(response => response.json())
    .catch(error => {
      console.error("Error loading data:", error);
      // Return default or re-throw
      throw error;
    });
}

// Fix 3: Always catch at call site
loadData()
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// Or with async/await at call site:
try {
  const data = await loadData();
  console.log(data);
} catch (error) {
  console.error("Error:", error);
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 11 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #11: Sequential Await Instead of Parallel
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Async operations run sequentially
                instead of in parallel, making code slower.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`async function loadAllData() {
  const user = await fetchUser(); // Wait for this
  const posts = await fetchPosts(); // Then wait for this
  const comments = await fetchComments(); // Then wait for this
  
  return { user, posts, comments };
  // Total time = user_time + posts_time + comments_time
  // Instead of max(user_time, posts_time, comments_time)
}`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Using await sequentially makes independent async operations wait
                for each other, increasing total execution time unnecessarily.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Each await pauses execution until that promise resolves. When
                operations are independent (don't depend on each other), they
                should run in parallel using Promise.all() or starting them all
                first.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Promise.all() for parallel execution
async function loadAllData() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  
  return { user, posts, comments };
  // Total time = max(user_time, posts_time, comments_time) ✓
}

// Fix 2: Start all promises first, then await
async function loadAllData() {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  const commentsPromise = fetchComments();
  
  const user = await userPromise;
  const posts = await postsPromise;
  const comments = await commentsPromise;
  
  return { user, posts, comments };
}

// Fix 3: Promise.allSettled() if some can fail
async function loadAllData() {
  const results = await Promise.allSettled([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  
  return {
    user: results[0].status === "fulfilled" ? results[0].value : null,
    posts: results[1].status === "fulfilled" ? results[1].value : null,
    comments: results[2].status === "fulfilled" ? results[2].value : null
  };
}`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 5: ARRAY & OBJECT MUTATION BUGS */}
        <section>
          <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-pink-400 mb-2">
              💗 Category 5: Array & Object Mutation Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to accidental mutations and reference issues
            </p>
          </div>

          {/* Debugging Question 12 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #12: Accidental Array Mutation
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Modifying one array also modifies
                another because they share the same reference.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const original = [1, 2, 3];
const copy = original; // Shallow reference, not a copy!

copy.push(4);
console.log(original); // [1, 2, 3, 4] (BUG! Original changed)
console.log(copy); // [1, 2, 3, 4]

// Same with objects:
const user = { name: "John", age: 30 };
const userCopy = user; // Reference, not copy!

userCopy.age = 31;
console.log(user.age); // 31 (BUG! Original changed)
console.log(userCopy.age); // 31`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Arrays and objects are reference types. Assigning one to another
                creates a reference, not a copy. Mutating one affects the other.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                JavaScript passes objects and arrays by reference. Both
                variables point to the same memory location, so changes to one
                affect the other.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Spread operator for shallow copy
const original = [1, 2, 3];
const copy = [...original]; // New array ✓

copy.push(4);
console.log(original); // [1, 2, 3] ✓
console.log(copy); // [1, 2, 3, 4] ✓

// Fix 2: Array.from() or slice()
const copy = Array.from(original);
// OR: const copy = original.slice();

// Fix 3: Object.assign() or spread for objects
const user = { name: "John", age: 30 };
const userCopy = { ...user }; // Shallow copy ✓

// OR:
const userCopy = Object.assign({}, user);

userCopy.age = 31;
console.log(user.age); // 30 ✓
console.log(userCopy.age); // 31 ✓

// Fix 4: Deep copy for nested objects/arrays
const deepCopy = JSON.parse(JSON.stringify(original));
// OR use lodash: _.cloneDeep(original)`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 13 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #13: Modifying Array During Iteration
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Removing items from array during
                iteration causes items to be skipped.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const numbers = [1, 2, 3, 4, 5];

// Bug: Removing items while iterating
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1); // Removes item, shifts indices
    // i doesn't increment, so next item is skipped!
  }
}

console.log(numbers); // [1, 3, 5] but might miss some

// Or with forEach:
numbers.forEach((num, index) => {
  if (num % 2 === 0) {
    numbers.splice(index, 1); // BUG! Index shifts
  }
});`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Modifying an array while iterating causes indices to shift,
                making some elements be skipped or processed incorrectly.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                When you remove an item, all subsequent items shift left. If
                you're iterating forward and don't adjust the index, you skip
                the item that moved into the removed position.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Iterate backwards
const numbers = [1, 2, 3, 4, 5];
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1); // Safe when iterating backwards
  }
}

// Fix 2: Decrement index after removal
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1);
    i--; // Adjust index after removal
  }
}

// Fix 3: Use filter() (best for removing items)
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(num => num % 2 !== 0); // [1, 3, 5] ✓

// Fix 4: Create new array instead of modifying
const numbers = [1, 2, 3, 4, 5];
const result = [];
for (const num of numbers) {
  if (num % 2 !== 0) {
    result.push(num);
  }
}`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 6: EVENT LOOP & TIMING BUGS */}
        <section>
          <div className="bg-cyan-500/10 border-l-4 border-cyan-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">
              🔵 Category 6: Event Loop & Timing Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to execution order, microtasks, and macrotasks
            </p>
          </div>

          {/* Debugging Question 14 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #14: Variable Value Before Async Operation Completes
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Variable is accessed before async
                operation completes, showing wrong value.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`let data = null;

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(result => {
    data = result;
  });

console.log(data); // null (BUG! Fetch hasn't completed yet)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                The console.log executes immediately while fetch is still
                pending. data is still null because the promise hasn't resolved
                yet.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                fetch() is asynchronous - it returns immediately with a Promise.
                The .then() callbacks execute later after the response arrives.
                The console.log runs synchronously before the async operation
                completes.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Use async/await
async function loadData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data); // Logs after data is loaded ✓
  return data;
}

// Fix 2: Put code inside .then()
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Logs after data is loaded ✓
    // Continue processing here
  });

// Fix 3: Use .then() chain
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    data = data; // Update variable
    processData(data); // Process after loading
  });

function processData(data) {
  console.log(data); // ✓
}`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 7: PROTOTYPE & INHERITANCE BUGS */}
        <section>
          <div className="bg-indigo-500/10 border-l-4 border-indigo-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-indigo-400 mb-2">
              🟦 Category 7: Prototype & Inheritance Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to prototype chain, inheritance, and constructor
              issues
            </p>
          </div>

          {/* Debugging Question 15 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #15: Constructor Missing new Keyword
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Constructor function called without
                new, causing this to be undefined or point to global object.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Forgot new keyword!
const person = Person("John", 30);
console.log(person); // undefined (BUG!)
console.log(name); // "John" (leaked to global!)

// In strict mode:
"use strict";
function Person(name, age) {
  this.name = name; // TypeError: Cannot set property of undefined
  this.age = age;
}`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Without new, this doesn't point to a new object instance. In
                non-strict mode, this is the global object. In strict mode, this
                is undefined, causing errors.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                The new keyword creates a new object and sets this to point to
                it. Without new, the function is called as a regular function,
                so this is determined by the call context (global or undefined).
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Always use new
const person = new Person("John", 30); // ✓

// Fix 2: Guard against missing new
function Person(name, age) {
  if (!(this instanceof Person)) {
    return new Person(name, age); // Auto-correct
  }
  this.name = name;
  this.age = age;
}

// Fix 3: Use class syntax (requires new)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("John", 30); // ✓
// Person("John", 30); // TypeError: Class constructor cannot be invoked without 'new'`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 8: TYPE & COMPARISON BUGS */}
        <section>
          <div className="bg-teal-500/10 border-l-4 border-teal-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-teal-400 mb-2">
              🔷 Category 8: Type & Comparison Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to NaN, typeof, instanceof, and special comparisons
            </p>
          </div>

          {/* Debugging Question 16 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #16: NaN Comparison Always False
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> NaN comparison always returns false,
                even NaN === NaN, causing checks to fail.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function checkNaN(value) {
  if (value === NaN) {
    return "Value is NaN";
  }
  return "Value is not NaN";
}

console.log(checkNaN(NaN)); // "Value is not NaN" (BUG!)
console.log(NaN === NaN); // false (BUG! Should be true conceptually)
console.log(NaN == NaN); // false

// In array check:
const arr = [1, 2, NaN, 4];
const index = arr.indexOf(NaN);
console.log(index); // -1 (BUG! NaN not found)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                NaN is the only value in JavaScript that is not equal to itself.
                Both === and == return false for NaN === NaN. This makes NaN
                checks fail.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                NaN is defined by IEEE 754 standard as not equal to itself. This
                is intentional to detect invalid mathematical operations.
                indexOf uses === internally, so it can't find NaN.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Use isNaN() or Number.isNaN()
function checkNaN(value) {
  if (Number.isNaN(value)) { // OR: isNaN(value)
    return "Value is NaN";
  }
  return "Value is not NaN";
}

console.log(checkNaN(NaN)); // "Value is NaN" ✓

// Fix 2: Use Object.is() for NaN
console.log(Object.is(NaN, NaN)); // true ✓

// Fix 3: For array, use findIndex with isNaN
const arr = [1, 2, NaN, 4];
const index = arr.findIndex(val => Number.isNaN(val));
console.log(index); // 2 ✓

// Fix 4: Use includes() with isNaN check
const hasNaN = arr.some(val => Number.isNaN(val));
console.log(hasNaN); // true ✓`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 17 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #17: typeof null Returns "object"
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> typeof null incorrectly returns
                "object" instead of "null", causing type checks to fail.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function checkType(value) {
  if (typeof value === "object") {
    return "It's an object";
  }
  return "It's not an object";
}

console.log(checkType(null)); // "It's an object" (BUG!)
console.log(typeof null); // "object" (BUG! Should be "null")

// In practice:
const obj = null;
if (typeof obj === "object") {
  console.log(obj.name); // TypeError: Cannot read property 'name' of null
}`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                typeof null returns "object" due to a JavaScript bug/design
                quirk from early versions. This makes it impossible to
                distinguish null from objects using typeof alone.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                This is a historical bug in JavaScript that can't be fixed
                without breaking existing code. null is represented with all
                zero bits, which happens to match the object type tag in early
                implementations.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Check for null explicitly
function checkType(value) {
  if (value === null) {
    return "It's null";
  }
  if (typeof value === "object") {
    return "It's an object";
  }
  return "It's not an object";
}

// Fix 2: Check both null and object
function isObject(value) {
  return value !== null && typeof value === "object";
}

console.log(isObject(null)); // false ✓
console.log(isObject({})); // true ✓

// Fix 3: Use nullish check before accessing
const obj = null;
if (obj !== null && typeof obj === "object") {
  console.log(obj.name); // Safe ✓
}

// Fix 4: Use optional chaining
const obj = null;
console.log(obj?.name); // undefined (no error) ✓`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 9: JSON & PARSING BUGS */}
        <section>
          <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-amber-400 mb-2">
              🟨 Category 9: JSON & Parsing Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to JSON parsing, stringifying, and data serialization
            </p>
          </div>

          {/* Debugging Question 18 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #18: JSON.parse Silent Failure with Invalid JSON
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> JSON.parse throws error but it's not
                caught, causing application to crash or fail silently.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function parseData(jsonString) {
  const data = JSON.parse(jsonString);
  return data.name; // Crashes if JSON is invalid
}

// No error handling!
parseData("{ invalid json }"); 
// SyntaxError: Unexpected token 'i', " invalid json }"... is not valid JSON

// Or:
const response = "{name: 'John'}"; // Missing quotes
const user = JSON.parse(response); // SyntaxError`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                JSON.parse throws SyntaxError when given invalid JSON. Without
                try/catch, the error propagates and crashes the application or
                breaks the code flow.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                JSON.parse is strict - it throws errors for invalid JSON syntax
                instead of returning null or undefined. Unhandled exceptions
                propagate up the call stack.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Try/catch around JSON.parse
function parseData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data.name;
  } catch (error) {
    console.error("Invalid JSON:", error);
    return null; // OR: throw error, OR: return default
  }
}

// Fix 2: Safe JSON parse helper
function safeJSONParse(jsonString, defaultValue = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("JSON parse error:", error);
    return defaultValue;
  }
}

const user = safeJSONParse("{ invalid }", {}); // Returns {}
const name = user.name || "Unknown"; // Safe ✓

// Fix 3: Validate before parsing
function parseData(jsonString) {
  if (!jsonString || typeof jsonString !== "string") {
    return null;
  }
  
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

// Fix 4: Use tryParse pattern
function tryParseJSON(jsonString) {
  try {
    return { success: true, data: JSON.parse(jsonString) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

const result = tryParseJSON("{ invalid }");
if (result.success) {
  console.log(result.data);
} else {
  console.error("Parse failed:", result.error);
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 19 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #19: JSON.stringify Loses Data
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> JSON.stringify removes undefined,
                functions, and Symbols, causing data loss.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const user = {
  name: "John",
  age: 30,
  email: undefined, // Removed!
  greet: function() { // Removed!
    return "Hello";
  },
  id: Symbol("id") // Removed!
};

const json = JSON.stringify(user);
console.log(json); 
// {"name":"John","age":30} - Missing email, greet, id!

const parsed = JSON.parse(json);
console.log(parsed); // {name: "John", age: 30} - Data lost!`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                JSON.stringify omits undefined values, functions, and Symbols
                because JSON doesn't support these types. This causes data loss
                when stringifying and then parsing objects.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                JSON format only supports: strings, numbers, booleans, null,
                objects, and arrays. undefined, functions, and Symbols are not
                valid JSON types, so they're silently omitted during
                stringification.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Use replacer function to handle undefined
const user = {
  name: "John",
  age: 30,
  email: undefined
};

const json = JSON.stringify(user, (key, value) => {
  return value === undefined ? null : value; // Convert undefined to null
});
console.log(json); // {"name":"John","age":30,"email":null} ✓

// Fix 2: Use space parameter for readability
const json = JSON.stringify(user, null, 2); // Pretty print

// Fix 3: Custom serialization for functions
const user = {
  name: "John",
  greet: function() { return "Hello"; }
};

const json = JSON.stringify(user, (key, value) => {
  if (typeof value === "function") {
    return value.toString(); // Store as string
  }
  return value;
});

// Fix 4: Separate serializable and non-serializable data
const user = {
  name: "John",
  age: 30,
  greet: function() { return "Hello"; }
};

// Only serialize data, not methods
const serializable = {
  name: user.name,
  age: user.age
};

const json = JSON.stringify(serializable); // ✓

// Fix 5: Use toJSON method for custom serialization
const user = {
  name: "John",
  greet: function() { return "Hello"; },
  toJSON() {
    return {
      name: this.name
      // Exclude functions from JSON
    };
  }
};

console.log(JSON.stringify(user)); // {"name":"John"} ✓`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 10: TIMING & INTERVAL BUGS */}
        <section>
          <div className="bg-rose-500/10 border-l-4 border-rose-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-rose-400 mb-2">
              🌹 Category 10: Timing & Interval Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to setTimeout, setInterval, and timing issues
            </p>
          </div>

          {/* Debugging Question 20 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #20: setInterval Not Clearing - Memory Leak
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> setInterval keeps running after
                component unmounts or function exits, causing memory leaks and
                unexpected behavior.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function startTimer() {
  setInterval(() => {
    console.log("Timer tick");
  }, 1000);
  // No way to stop it!
}

startTimer(); // Timer runs forever

// Or in component:
function Component() {
  useEffect(() => {
    const interval = setInterval(() => {
      updateCount();
    }, 1000);
    // Missing cleanup - interval runs after unmount!
  }, []);
  
  return <div>Component</div>;
}`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                setInterval continues running indefinitely if not cleared. When
                a component unmounts or a function exits, the interval keeps
                running, causing memory leaks and unexpected callbacks.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Timers created by setInterval persist in memory and continue
                executing until cleared with clearInterval(). If the timer ID is
                lost or not stored, there's no way to stop it.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Store interval ID and clear it
function startTimer() {
  const intervalId = setInterval(() => {
    console.log("Timer tick");
  }, 1000);
  
  // Return cleanup function
  return () => clearInterval(intervalId);
}

const cleanup = startTimer();
// Later: cleanup(); // Stops timer ✓

// Fix 2: Clear in React useEffect cleanup
function Component() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCount();
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(intervalId); // ✓
  }, []);
  
  return <div>Component</div>;
}

// Fix 3: Store ID globally/class for manual control
class Timer {
  constructor() {
    this.intervalId = null;
  }
  
  start() {
    this.intervalId = setInterval(() => {
      console.log("Tick");
    }, 1000);
  }
  
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Fix 4: Condition check inside interval
function startTimer() {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log("Tick", count);
    
    if (count >= 10) {
      clearInterval(intervalId); // Auto-stop
    }
  }, 1000);
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 21 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #21: setTimeout with this Context Loss
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> this is undefined when setTimeout
                callback executes, causing errors when accessing object
                properties.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const user = {
  name: "John",
  greet: function() {
    setTimeout(function() {
      console.log("Hello, " + this.name); 
      // TypeError: Cannot read property 'name' of undefined
    }, 1000);
  }
};

user.greet(); // Error after 1 second`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                setTimeout callback is a regular function, so this is lost and
                becomes undefined (in strict mode) or global object
                (non-strict). Accessing this.name fails.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Regular functions have dynamic this binding. When passed as
                callbacks to setTimeout, they're called without object context,
                so this is undefined or global.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Arrow function preserves this
const user = {
  name: "John",
  greet: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name); // "Hello, John" ✓
    }, 1000);
  }
};

// Fix 2: bind() to preserve this
const user = {
  name: "John",
  greet: function() {
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }.bind(this), 1000); // ✓
  }
};

// Fix 3: Store this reference
const user = {
  name: "John",
  greet: function() {
    const self = this;
    setTimeout(function() {
      console.log("Hello, " + self.name); // ✓
    }, 1000);
  }
};

// Fix 4: Pass context as parameter
const user = {
  name: "John",
  greet: function() {
    setTimeout(function(context) {
      console.log("Hello, " + context.name);
    }, 1000, this); // Pass this as argument ✓
  }
};`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 11: DESTRUCTURING & SPREAD BUGS */}
        <section>
          <div className="bg-violet-500/10 border-l-4 border-violet-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-violet-400 mb-2">
              🟣 Category 11: Destructuring & Spread Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to destructuring, spread operator, and rest
              parameters
            </p>
          </div>

          {/* Debugging Question 22 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #22: Destructuring Undefined Causes Error
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Destructuring undefined or null throws
                TypeError, causing application crash.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function getUserName(user) {
  const { name } = user; // TypeError if user is undefined/null
  return name;
}

getUserName(); 
// TypeError: Cannot destructure property 'name' of 'user' as it is undefined

// Or:
const user = null;
const { name, age } = user; 
// TypeError: Cannot destructure property 'name' of 'user' as it is null`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Destructuring undefined or null throws TypeError because you
                can't destructure from non-objects. This crashes the code if the
                value might be undefined/null.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Destructuring requires an iterable object. undefined and null
                are not objects, so destructuring them throws TypeError. This is
                strict behavior to catch bugs early.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Default parameter
function getUserName(user = {}) {
  const { name } = user;
  return name;
}

getUserName(); // undefined (no error) ✓

// Fix 2: Default value in destructuring
function getUserName(user) {
  const { name = "Unknown" } = user || {};
  return name;
}

// Fix 3: Optional chaining with default
function getUserName(user) {
  const { name } = user ?? {};
  return name;
}

// Fix 4: Check before destructuring
function getUserName(user) {
  if (!user) return null;
  const { name } = user;
  return name;
}

// Fix 5: Try/catch for safety
function getUserName(user) {
  try {
    const { name } = user;
    return name;
  } catch (error) {
    return null;
  }
}

// Fix 6: Safe destructuring helper
function safeDestructure(obj, ...keys) {
  if (!obj || typeof obj !== "object") {
    return keys.reduce((acc, key) => ({ ...acc, [key]: undefined }), {});
  }
  return keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});
}

const { name, age } = safeDestructure(user, "name", "age");`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 23 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #23: Spread Operator Shallow Copy Issue
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Spread operator creates shallow copy,
                nested objects still share references.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const original = {
  name: "John",
  address: {
    city: "NYC",
    street: "Main St"
  }
};

const copy = { ...original }; // Shallow copy!

copy.address.city = "LA";
console.log(original.address.city); // "LA" (BUG! Original changed)

// Same with arrays:
const original = [[1, 2], [3, 4]];
const copy = [...original]; // Shallow copy!

copy[0].push(5);
console.log(original[0]); // [1, 2, 5] (BUG! Original changed)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Spread operator only copies one level deep. Nested objects and
                arrays are still references, so mutating them affects the
                original object.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Spread performs shallow copy - it copies top-level properties
                but not nested objects/arrays. Nested values remain as
                references to the original.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Deep copy with JSON (for simple objects)
const original = {
  name: "John",
  address: { city: "NYC" }
};

const copy = JSON.parse(JSON.stringify(original));
copy.address.city = "LA";
console.log(original.address.city); // "NYC" ✓

// Fix 2: Deep copy manually
const original = {
  name: "John",
  address: { city: "NYC" }
};

const copy = {
  ...original,
  address: { ...original.address } // Copy nested object
};

copy.address.city = "LA";
console.log(original.address.city); // "NYC" ✓

// Fix 3: Use structuredClone() (modern browsers)
const copy = structuredClone(original);

// Fix 4: Use lodash cloneDeep
const copy = _.cloneDeep(original);

// Fix 5: Recursive deep copy function
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepCopy(item));
  
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const copy = deepCopy(original);`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* CATEGORY 12: OPTIONAL CHAINING & NULLISH BUGS */}
        <section>
          <div className="bg-sky-500/10 border-l-4 border-sky-500 rounded p-4 mb-8 mt-12">
            <h2 className="text-3xl font-bold text-sky-400 mb-2">
              🌊 Category 12: Optional Chaining & Nullish Bugs
            </h2>
            <p className="text-gray-300">
              Bugs related to optional chaining (?.) and nullish coalescing (??)
              misuse
            </p>
          </div>

          {/* Debugging Question 24 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #24: Optional Chaining Not Stopping on null/undefined
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Optional chaining used incorrectly,
                not actually preventing errors when expected.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`const user = null;

// Wrong: Missing optional chaining
const name = user.name; 
// TypeError: Cannot read property 'name' of null

// Wrong: Optional chaining in wrong place
const name = user?.name.toUpperCase(); 
// TypeError: Cannot read property 'toUpperCase' of undefined
// (user?.name returns undefined, then calling toUpperCase on undefined fails)

// Wrong: Not using optional chaining for method calls
const user = { name: "John" };
const greet = user.greet?.(); // OK
const result = user.greet(); // TypeError if greet doesn't exist`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Optional chaining only protects the immediate property access.
                If the result is undefined, further chaining or method calls
                still fail. Need to use ?. at each level.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                Optional chaining (?.) returns undefined if the left side is
                null/undefined, but you must continue chaining with ?. to
                protect further operations on that undefined value.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Chain optional chaining throughout
const user = null;
const name = user?.name?.toUpperCase(); // undefined (no error) ✓

// Fix 2: Use optional chaining for method calls
const user = { name: "John" };
const greet = user.greet?.(); // undefined if greet doesn't exist ✓

// Fix 3: Combine with nullish coalescing
const user = null;
const name = user?.name ?? "Unknown"; // "Unknown" ✓

// Fix 4: Optional chaining with array access
const users = [{ name: "John" }];
const firstName = users?.[0]?.name; // "John" ✓
const invalid = users?.[100]?.name; // undefined (no error) ✓

// Fix 5: Optional chaining for nested properties
const data = {
  user: {
    profile: {
      name: "John"
    }
  }
};

const name = data?.user?.profile?.name; // "John" ✓
const invalid = data?.user?.profile?.email; // undefined (no error) ✓

// Fix 6: Optional chaining for function parameters
function processUser(user) {
  return user?.profile?.name?.toUpperCase() ?? "Unknown";
}

processUser(null); // "Unknown" ✓`}
                </pre>
              </div>
            </div>
          </section>

          {/* Debugging Question 25 */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">
              🐛 Bug #25: Nullish Coalescing vs Logical OR Confusion
            </h3>

            <ConceptCard title="Buggy Code" icon="❌" color="red">
              <p className="text-gray-300 mb-4">
                <strong>Problem:</strong> Using || instead of ?? causes 0, "",
                false to be replaced with default values unintentionally.
              </p>
            </ConceptCard>

            <div className="mt-6">
              <CodePlayground
                title="Buggy Code"
                initialCode={`function setCount(count) {
  const value = count || 10; // BUG! 0 becomes 10
  return value;
}

console.log(setCount(0)); // 10 (BUG! Should be 0)
console.log(setCount("")); // 10 (BUG! Should be "")
console.log(setCount(false)); // 10 (BUG! Should be false)

// In configuration:
const config = {
  timeout: 0, // Want 0 timeout
  retries: 0
};

const timeout = config.timeout || 5000; 
// 5000 (BUG! Should use 0)`}
              />
            </div>

            <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                🔴 What's wrong:
              </h4>
              <p className="text-gray-300 mb-4">
                Logical OR (||) treats 0, "", false, NaN as falsy and replaces
                them with the default. Nullish coalescing (??) only checks for
                null/undefined, preserving 0, "", and false.
              </p>

              <h4 className="text-lg font-bold text-yellow-400 mb-2 mt-4">
                💡 Why it happens:
              </h4>
              <p className="text-gray-300 mb-4">
                || returns the right operand if the left is any falsy value (0,
                "", false, null, undefined, NaN). ?? only returns the right
                operand if the left is null or undefined, preserving other falsy
                values.
              </p>

              <h4 className="text-lg font-bold text-green-400 mb-2 mt-4">
                ✅ Exact fix:
              </h4>
              <div className="bg-gray-800/50 rounded p-4">
                <pre className="text-green-300 text-sm">
                  {`// Fix 1: Use ?? for null/undefined only
function setCount(count) {
  const value = count ?? 10; // Only if count is null/undefined
  return value;
}

console.log(setCount(0)); // 0 ✓
console.log(setCount("")); // "" ✓
console.log(setCount(false)); // false ✓
console.log(setCount(null)); // 10 ✓
console.log(setCount(undefined)); // 10 ✓

// Fix 2: Use ?? for configuration defaults
const config = {
  timeout: 0,
  retries: 0
};

const timeout = config.timeout ?? 5000; // 0 ✓
const retries = config.retries ?? 3; // 0 ✓

// Fix 3: Combine with optional chaining
function getValue(obj) {
  return obj?.value ?? "default"; // Only if null/undefined
}

// Fix 4: When to use || vs ??
// Use || when you want to replace ALL falsy values
const name = user.name || "Anonymous"; // OK if empty string should be "Anonymous"

// Use ?? when you want to preserve 0, "", false
const count = data.count ?? 0; // Preserve 0 if explicitly set

// Fix 5: Explicit null/undefined check
function setCount(count) {
  const value = count !== null && count !== undefined ? count : 10;
  return value;
}`}
                </pre>
              </div>
            </div>
          </section>
        </section>

        {/* Summary */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Debugging Mastery Checklist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-bold text-purple-400 mb-2">
                  Common Bug Patterns:
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>✓ Type coercion issues</li>
                  <li>✓ Scope and closure bugs</li>
                  <li>✓ this binding problems</li>
                  <li>✓ Async/await mistakes</li>
                  <li>✓ Promise handling errors</li>
                  <li>✓ Array/object mutations</li>
                  <li>✓ Event loop timing</li>
                  <li>✓ Prototype inheritance</li>
                  <li>✓ NaN & typeof bugs</li>
                  <li>✓ JSON parsing errors</li>
                  <li>✓ Timer/interval leaks</li>
                  <li>✓ Destructuring issues</li>
                  <li>✓ Optional chaining misuse</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 mb-2">
                  Debugging Strategy:
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>✓ Identify the bug clearly</li>
                  <li>✓ Understand root cause</li>
                  <li>✓ Apply correct fix</li>
                  <li>✓ Test the solution</li>
                  <li>✓ Learn the pattern</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
