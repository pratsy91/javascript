"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ConsoleAPIPage() {
  return (
    <SectionLayout
      title="21.1 Console API - Complete"
      description="Master all console methods for debugging, logging, timing, and performance analysis"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 border border-slate-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🖥️ Complete Console API Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            The Console API provides debugging and logging capabilities. This
            section covers <strong>ALL console methods</strong> for logging,
            timing, grouping, and performance analysis.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Logging (5 methods)",
              "Timing (3 methods)",
              "Counting (2 methods)",
              "Grouping (3 methods)",
              "Tables",
              "Assertions",
              "Stack Traces",
              "Formatting",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-slate-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Logging Methods */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📝 Logging Methods (5)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="console.log/info/warn/error/debug"
              initialCode={`// 1. console.log() - general logging
console.log("Simple message");
console.log("Multiple", "arguments", 123, true);
console.log("Object:", { name: "Alice", age: 25 });
console.log("Array:", [1, 2, 3, 4, 5]);

// 2. console.info() - informational (same as log in most browsers)
console.info("Information message");

// 3. console.warn() - warning (usually yellow)
console.warn("Warning message");

// 4. console.error() - error (usually red)
console.error("Error message");
console.error("Error object:", new Error("Something went wrong"));

// 5. console.debug() - debug info (may be hidden by default)
console.debug("Debug information");

// Multiple arguments
console.log("\\nMultiple args:");
console.log("Name:", "Alice", "Age:", 25);

// Objects are expandable in browser console
console.log("\\nExpandable object:");
const user = {
  name: "Bob",
  profile: {
    email: "bob@example.com",
    settings: { theme: "dark" }
  }
};
console.log(user);

// Circular references are handled
const obj = { name: "Test" };
obj.self = obj;
console.log("\\nCircular:", obj); // Shows [Circular]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="String Substitution & Formatting"
              initialCode={`// String substitution patterns

// %s - string
console.log("String: %s", "Hello");
console.log("Name: %s, Age: %s", "Alice", 25);

// %d or %i - integer
console.log("\\nInteger: %d", 42);
console.log("Count: %d items", 10);

// %f - float
console.log("\\nFloat: %f", 3.14159);
console.log("Price: $%f", 99.99);

// %o - object
console.log("\\nObject: %o", { x: 1, y: 2 });

// %O - object (formatted)
console.log("Object formatted: %O", { a: 1, b: 2 });

// %c - CSS styling (browser only)
console.log(
  "%cStyled Text",
  "color: blue; font-size: 20px; font-weight: bold;"
);

console.log(
  "%cRed %cGreen %cBlue",
  "color: red;",
  "color: green;",
  "color: blue;"
);

// Mixed formatting
console.log("\\nMixed: %s has %d items worth $%f", "Cart", 3, 49.99);

// Template literals are often clearer
const name = "Alice";
const count = 5;
console.log(\`\${name} has \${count} items\`);`}
            />
          </div>
        </section>

        {/* Assertions */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✅ console.assert()
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Assertions"
              initialCode={`// console.assert(assertion, ...data)
// Logs error message if assertion is false

console.assert(true, "This won't show"); // No output

console.assert(false, "Assertion failed!"); // Shows error

console.assert(1 === 1, "Math works"); // No output
console.assert(1 === 2, "Math broken!"); // Shows error

// With multiple messages
console.assert(
  false,
  "Expected:",
  10,
  "Received:",
  5
);

// Practical: validation
function divide(a, b) {
  console.assert(b !== 0, "Division by zero!");
  return a / b;
}

console.log("\\nDivision:");
console.log("10 / 2 =", divide(10, 2));
console.log("10 / 0 =", divide(10, 0)); // Shows assertion error

// Type checking
function processNumber(n) {
  console.assert(typeof n === "number", "Not a number:", n);
  return n * 2;
}

processNumber(5);
processNumber("invalid");

// Note: assert doesn't throw, just logs
console.log("\\nCode continues after assert");`}
            />
          </div>
        </section>

        {/* Grouping */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📁 Grouping Methods (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="console.group/groupCollapsed/groupEnd"
              initialCode={`// console.group(label) - start group
// console.groupEnd() - end group

console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");
console.log("Email: alice@example.com");
console.groupEnd();

console.log("Outside group");

// Nested groups
console.group("Outer Group");
console.log("Outer message");

console.group("Inner Group");
console.log("Inner message");
console.groupEnd();

console.log("Back to outer");
console.groupEnd();

console.log("\\nOutside all groups");

// console.groupCollapsed(label) - collapsed by default
console.groupCollapsed("Collapsed Details");
console.log("This is collapsed initially");
console.log("Click to expand in browser console");
console.groupEnd();

// Practical: function tracing
function outer() {
  console.group("outer()");
  console.log("Starting outer");
  inner();
  console.log("Ending outer");
  console.groupEnd();
}

function inner() {
  console.group("inner()");
  console.log("Inside inner");
  console.groupEnd();
}

console.log("\\nFunction tracing:");
outer();`}
            />
          </div>
        </section>

        {/* Tables */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 console.table()
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Display Data as Tables"
              initialCode={`// console.table(data, columns) - display as table

// Array of objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];

console.log("Array of objects:");
console.table(users);

// Select columns
console.log("\\nSelected columns:");
console.table(users, ["name", "age"]);

// Object
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  role: "admin"
};

console.log("\\nObject:");
console.table(user);

// Array of arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("\\nMatrix:");
console.table(matrix);

// Map and Set
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);

console.log("\\nMap:");
console.table(map);

const set = new Set([1, 2, 3, 4, 5]);
console.log("\\nSet:");
console.table(set);

// Nested objects (shows [Object] for nested)
const nested = [
  { name: "Alice", address: { city: "NYC" } },
  { name: "Bob", address: { city: "LA" } }
];

console.log("\\nNested objects:");
console.table(nested);`}
            />
          </div>
        </section>

        {/* Timing */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏱️ Timing Methods (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="console.time/timeEnd/timeLog"
              initialCode={`// console.time(label) - start timer
// console.timeEnd(label) - end timer and log duration
// console.timeLog(label, ...data) - log current time

// Basic timing
console.time("operation");

// Simulate work
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}

console.timeEnd("operation"); // Logs: "operation: X ms"

// Multiple timers
console.time("timer1");
console.time("timer2");

setTimeout(() => {
  console.timeEnd("timer1");
}, 100);

setTimeout(() => {
  console.timeEnd("timer2");
}, 200);

// console.timeLog() - check time without ending
console.time("process");

setTimeout(() => {
  console.timeLog("process", "Checkpoint 1");
}, 50);

setTimeout(() => {
  console.timeLog("process", "Checkpoint 2");
}, 100);

setTimeout(() => {
  console.timeEnd("process");
}, 150);

// Practical: performance measurement
function measurePerformance(fn, label = "function") {
  console.time(label);
  fn();
  console.timeEnd(label);
}

console.log("\\nMeasure performance:");
measurePerformance(() => {
  [].concat(...Array(1000).fill([1, 2, 3]));
}, "concat");

// Nested timing
console.time("outer");
console.time("inner");
// ... work ...
console.timeEnd("inner");
// ... more work ...
console.timeEnd("outer");`}
            />
          </div>
        </section>

        {/* Counting */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔢 Counting Methods (2)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="console.count/countReset"
              initialCode={`// console.count(label) - count calls
// console.countReset(label) - reset counter

function processItem(item) {
  console.count("processItem");
  console.log("Processing:", item);
}

console.log("Counting calls:");
processItem("A");
processItem("B");
processItem("C");

// Multiple counters
console.log("\\nMultiple counters:");
console.count("counter1");
console.count("counter2");
console.count("counter1");
console.count("counter2");
console.count("counter1");

// Default label
console.log("\\nDefault label:");
console.count(); // "default: 1"
console.count(); // "default: 2"
console.count(); // "default: 3"

// Reset counter
console.log("\\nReset:");
console.count("reset-demo");
console.count("reset-demo");
console.count("reset-demo");
console.countReset("reset-demo");
console.count("reset-demo"); // Starts from 1 again

// Practical: track function calls
function trackCalls(fnName) {
  return function(...args) {
    console.count(\`Call: \${fnName}\`);
    // ... actual function logic
  };
}

const trackedFunc = trackCalls("myFunction");
trackedFunc();
trackedFunc();
trackedFunc();`}
            />
          </div>
        </section>

        {/* Stack Traces */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📍 console.trace()
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Stack Traces"
              initialCode={`// console.trace(...data) - output stack trace

function level3() {
  console.trace("Trace from level3");
}

function level2() {
  level3();
}

function level1() {
  level2();
}

console.log("Stack trace:");
level1();

// With message
function deepFunction() {
  console.trace("How did we get here?", { context: "debugging" });
}

function middlewareFunction() {
  deepFunction();
}

function entryPoint() {
  middlewareFunction();
}

console.log("\\nCall chain:");
entryPoint();

// Practical: debugging
function buggyFunction() {
  const x = null;
  
  if (x === null) {
    console.trace("x is null - investigating why");
  }
  
  // ... more code
}

buggyFunction();

// Shows:
// - Function call stack
// - File names and line numbers (in browser)
// - Call hierarchy`}
            />
          </div>
        </section>

        {/* Other Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🧹 console.clear()
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Clear Console"
              initialCode={`// console.clear() - clear the console

console.log("Message 1");
console.log("Message 2");
console.log("Message 3");

console.log("\\nNote: console.clear() would clear all messages");
console.log("(Not clearing here to preserve output)");

// In browser console:
// console.clear(); // Clears everything

// May show "Console was cleared" message
// Some consoles preserve on navigation

// Practical: clear before test
function runTest() {
  // console.clear();
  console.log("Test started");
  console.log("Clean console for test output");
}

runTest();

console.log("\\nUse cases:");
console.log("- Clear before test runs");
console.log("- Clear on app restart");
console.log("- Clean up during development");
console.log("- Reset debugging session");`}
            />
          </div>
        </section>

        {/* Complete Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete Console Methods Reference
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
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-mono text-xs">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-blue-400">
                    LOGGING
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.log()</td>
                  <td className="px-3 py-2">General output</td>
                  <td className="px-3 py-2">console.log("msg")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.info()</td>
                  <td className="px-3 py-2">Informational</td>
                  <td className="px-3 py-2">console.info("info")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.warn()</td>
                  <td className="px-3 py-2">Warning</td>
                  <td className="px-3 py-2">console.warn("warn")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.error()</td>
                  <td className="px-3 py-2">Error</td>
                  <td className="px-3 py-2">console.error("error")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.debug()</td>
                  <td className="px-3 py-2">Debug info</td>
                  <td className="px-3 py-2">console.debug("debug")</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    TIMING
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.time()</td>
                  <td className="px-3 py-2">Start timer</td>
                  <td className="px-3 py-2">console.time("task")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.timeLog()</td>
                  <td className="px-3 py-2">Log current time</td>
                  <td className="px-3 py-2">console.timeLog("task")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.timeEnd()</td>
                  <td className="px-3 py-2">End timer</td>
                  <td className="px-3 py-2">console.timeEnd("task")</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    COUNTING
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.count()</td>
                  <td className="px-3 py-2">Count calls</td>
                  <td className="px-3 py-2">console.count("event")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.countReset()</td>
                  <td className="px-3 py-2">Reset counter</td>
                  <td className="px-3 py-2">console.countReset("event")</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-yellow-400"
                  >
                    OTHER
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.table()</td>
                  <td className="px-3 py-2">Display as table</td>
                  <td className="px-3 py-2">console.table(data)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.assert()</td>
                  <td className="px-3 py-2">Conditional log</td>
                  <td className="px-3 py-2">console.assert(test, msg)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.trace()</td>
                  <td className="px-3 py-2">Stack trace</td>
                  <td className="px-3 py-2">console.trace()</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.clear()</td>
                  <td className="px-3 py-2">Clear console</td>
                  <td className="px-3 py-2">console.clear()</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.group()</td>
                  <td className="px-3 py-2">Start group</td>
                  <td className="px-3 py-2">console.group("label")</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.groupCollapsed()</td>
                  <td className="px-3 py-2">Start collapsed</td>
                  <td className="px-3 py-2">console.groupCollapsed()</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">console.groupEnd()</td>
                  <td className="px-3 py-2">End group</td>
                  <td className="px-3 py-2">console.groupEnd()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Console API Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Remove console.log in production
                </strong>
                <p className="ml-4 mt-1">
                  Use build tools to strip console calls
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use appropriate log levels
                </strong>
                <p className="ml-4 mt-1">
                  error for errors, warn for warnings, log for info
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use console.table() for arrays/objects
                </strong>
                <p className="ml-4 mt-1">Much more readable than console.log</p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use console.time() for performance
                </strong>
                <p className="ml-4 mt-1">
                  Measure execution time of operations
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Group related logs
                </strong>
                <p className="ml-4 mt-1">
                  Use console.group() for better organization
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use console.assert() for validation
                </strong>
                <p className="ml-4 mt-1">
                  Quick sanity checks during development
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Add meaningful labels
                </strong>
                <p className="ml-4 mt-1">
                  Use descriptive labels for timers and counters
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Use console.trace() for debugging
                </strong>
                <p className="ml-4 mt-1">Find where function is called from</p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Don't log sensitive data
                </strong>
                <p className="ml-4 mt-1">
                  Passwords, tokens, personal info should not be logged
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Consider using a logging library
                </strong>
                <p className="ml-4 mt-1">
                  For production: winston, pino, or similar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 border border-slate-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 21 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Console API</strong> methods!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
                <div className="text-gray-400">Logging Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">3</div>
                <div className="text-gray-400">Timing Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">3</div>
                <div className="text-gray-400">Grouping Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">6</div>
                <div className="text-gray-400">Other Methods</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-green-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY PLATFORM
              </p>
              <p className="text-gray-300">
                <strong>21 Phases</strong> • <strong>27 Sections</strong> •{" "}
                <strong>1500+ Concepts</strong> •{" "}
                <strong>1150+ Examples</strong>
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-lg font-semibold hover:from-slate-600 hover:to-gray-600 transition-all"
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
