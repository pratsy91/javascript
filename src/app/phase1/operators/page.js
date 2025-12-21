"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function OperatorsPage() {
  return (
    <SectionLayout
      title="1.5 Operators - Complete Guide"
      description="Master ALL JavaScript operators: arithmetic, logical, bitwise, assignment, and more"
      prevSection={{
        title: "Type Checking & Conversion",
        path: "/phase1/type-checking",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚡ Complete Operators Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            JavaScript has <strong>50+ operators</strong> across multiple
            categories. This section covers EVERY operator with practical
            examples.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Arithmetic",
              "Assignment",
              "Comparison",
              "Logical",
              "Bitwise",
              "String",
              "Conditional",
              "Comma",
              "Unary",
              "Relational",
              "Spread/Rest",
              "Optional Chaining",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-indigo-300"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Arithmetic Operators */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ➕ Arithmetic Operators
          </h2>

          <ConceptCard title="Arithmetic Operators" icon="🔢" color="blue">
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              <div>
                <span className="text-blue-400">+</span> Addition
              </div>
              <div>
                <span className="text-blue-400">-</span> Subtraction
              </div>
              <div>
                <span className="text-blue-400">*</span> Multiplication
              </div>
              <div>
                <span className="text-blue-400">/</span> Division
              </div>
              <div>
                <span className="text-blue-400">%</span> Modulus (Remainder)
              </div>
              <div>
                <span className="text-blue-400">**</span> Exponentiation
                (ES2016)
              </div>
              <div>
                <span className="text-blue-400">++</span> Increment
              </div>
              <div>
                <span className="text-blue-400">--</span> Decrement
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Basic Arithmetic"
              initialCode={`// Addition
console.log("10 + 5 =", 10 + 5); // 15
console.log("'10' + 5 =", "10" + 5); // "105" (string concat!)

// Subtraction
console.log("10 - 5 =", 10 - 5); // 5
console.log("'10' - 5 =", "10" - 5); // 5 (coerces to number)

// Multiplication
console.log("10 * 5 =", 10 * 5); // 50
console.log("'10' * '5' =", "10" * "5"); // 50

// Division
console.log("10 / 5 =", 10 / 5); // 2
console.log("10 / 3 =", 10 / 3); // 3.3333...
console.log("10 / 0 =", 10 / 0); // Infinity

// Modulus (remainder)
console.log("10 % 3 =", 10 % 3); // 1
console.log("10 % 5 =", 10 % 5); // 0
console.log("-10 % 3 =", -10 % 3); // -1

// Exponentiation (ES2016)
console.log("2 ** 3 =", 2 ** 3); // 8
console.log("10 ** 2 =", 10 ** 2); // 100
console.log("2 ** -1 =", 2 ** -1); // 0.5`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Increment and Decrement"
              initialCode={`// Post-increment (x++)
let a = 5;
console.log("a =", a); // 5
console.log("a++ =", a++); // 5 (returns old value)
console.log("a =", a); // 6

// Pre-increment (++x)
let b = 5;
console.log("b =", b); // 5
console.log("++b =", ++b); // 6 (returns new value)
console.log("b =", b); // 6

// Post-decrement (x--)
let c = 5;
console.log("c =", c); // 5
console.log("c-- =", c--); // 5 (returns old value)
console.log("c =", c); // 4

// Pre-decrement (--x)
let d = 5;
console.log("d =", d); // 5
console.log("--d =", --d); // 4 (returns new value)
console.log("d =", d); // 4

// In expressions
let x = 10;
let result = x++ + ++x; // 10 + 12
console.log("result =", result); // 22
console.log("x =", x); // 12`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Unary Plus and Negation"
              initialCode={`// Unary plus (+) - converts to number
console.log("+'42' =", +"42"); // 42
console.log("+true =", +true); // 1
console.log("+false =", +false); // 0
console.log("+'hello' =", +"hello"); // NaN
console.log("+'' =", +""); // 0

// Unary negation (-)
console.log("-42 =", -42); // -42
console.log("-'42' =", -"42"); // -42 (converts then negates)
console.log("-true =", -true); // -1

// With variables
let num = "5";
console.log("num =", num, typeof num); // "5" string
console.log("+num =", +num, typeof +num); // 5 number
console.log("-num =", -num, typeof -num); // -5 number

// Double negation
console.log("--5 =", --5); // 5 (NOT decrement!)
let y = 5;
console.log("--y =", --y); // 4 (this IS decrement!)`}
            />
          </div>
        </section>

        {/* Assignment Operators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            = Assignment Operators
          </h2>

          <ConceptCard
            title="All Assignment Operators"
            icon="📝"
            color="purple"
          >
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              <div>
                <span className="text-purple-400">=</span> Assignment
              </div>
              <div>
                <span className="text-purple-400">+=</span> Add and assign
              </div>
              <div>
                <span className="text-purple-400">-=</span> Subtract and assign
              </div>
              <div>
                <span className="text-purple-400">*=</span> Multiply and assign
              </div>
              <div>
                <span className="text-purple-400">/=</span> Divide and assign
              </div>
              <div>
                <span className="text-purple-400">%=</span> Modulus and assign
              </div>
              <div>
                <span className="text-purple-400">**=</span> Exponent and assign
              </div>
              <div>
                <span className="text-purple-400">&lt;&lt;=</span> Left shift
                assign
              </div>
              <div>
                <span className="text-purple-400">&gt;&gt;=</span> Right shift
                assign
              </div>
              <div>
                <span className="text-purple-400">&gt;&gt;&gt;=</span> Unsigned
                right shift
              </div>
              <div>
                <span className="text-purple-400">&=</span> Bitwise AND assign
              </div>
              <div>
                <span className="text-purple-400">|=</span> Bitwise OR assign
              </div>
              <div>
                <span className="text-purple-400">^=</span> Bitwise XOR assign
              </div>
              <div>
                <span className="text-purple-400">&&=</span> Logical AND assign
                (ES2021)
              </div>
              <div>
                <span className="text-purple-400">||=</span> Logical OR assign
                (ES2021)
              </div>
              <div>
                <span className="text-purple-400">??=</span> Nullish coalescing
                assign (ES2021)
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Basic Assignment Operators"
              initialCode={`// Simple assignment
let x = 10;
console.log("x =", x);

// Addition assignment
x += 5; // x = x + 5
console.log("x += 5:", x); // 15

// Subtraction assignment
x -= 3; // x = x - 3
console.log("x -= 3:", x); // 12

// Multiplication assignment
x *= 2; // x = x * 2
console.log("x *= 2:", x); // 24

// Division assignment
x /= 4; // x = x / 4
console.log("x /= 4:", x); // 6

// Modulus assignment
x %= 4; // x = x % 4
console.log("x %= 4:", x); // 2

// Exponentiation assignment (ES2016)
x **= 3; // x = x ** 3
console.log("x **= 3:", x); // 8

// Chaining assignments
let a, b, c;
a = b = c = 5;
console.log("a, b, c:", a, b, c); // 5, 5, 5`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Logical Assignment Operators (ES2021)"
              initialCode={`// Logical AND assignment (&&=)
// Only assigns if left side is truthy
let x = 5;
x &&= 10; // x = x && 10
console.log("x &&= 10:", x); // 10

let y = 0;
y &&= 10; // y is falsy, no assignment
console.log("y &&= 10:", y); // 0

// Logical OR assignment (||=)
// Only assigns if left side is falsy
let a = null;
a ||= "default"; // a = a || "default"
console.log("a ||= 'default':", a); // "default"

let b = "value";
b ||= "default"; // b is truthy, no assignment
console.log("b ||= 'default':", b); // "value"

// Nullish coalescing assignment (??=)
// Only assigns if left side is null or undefined
let m = null;
m ??= "fallback";
console.log("m ??= 'fallback':", m); // "fallback"

let n = 0;
n ??= 10; // n is not null/undefined, no assignment
console.log("n ??= 10:", n); // 0 (kept!)

// Practical use: default values
let config = { timeout: 0 };
config.timeout ??= 5000; // 0 is kept
config.retries ??= 3; // undefined, sets to 3
console.log("config:", config);`}
            />
          </div>
        </section>

        {/* Comparison Operators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔍 Comparison Operators
          </h2>

          <ConceptCard title="Comparison Operators" icon="⚖️" color="green">
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              <div>
                <span className="text-green-400">==</span> Equal (with coercion)
              </div>
              <div>
                <span className="text-green-400">!=</span> Not equal (with
                coercion)
              </div>
              <div>
                <span className="text-green-400">===</span> Strict equal
              </div>
              <div>
                <span className="text-green-400">!==</span> Strict not equal
              </div>
              <div>
                <span className="text-green-400">&gt;</span> Greater than
              </div>
              <div>
                <span className="text-green-400">&lt;</span> Less than
              </div>
              <div>
                <span className="text-green-400">&gt;=</span> Greater or equal
              </div>
              <div>
                <span className="text-green-400">&lt;=</span> Less or equal
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Equality Comparisons"
              initialCode={`// Loose equality (==) - allows coercion
console.log("5 == 5:", 5 == 5); // true
console.log("5 == '5':", 5 == "5"); // true (coerced!)
console.log("1 == true:", 1 == true); // true
console.log("0 == false:", 0 == false); // true
console.log("null == undefined:", null == undefined); // true

// Strict equality (===) - no coercion
console.log("\\n5 === 5:", 5 === 5); // true
console.log("5 === '5':", 5 === "5"); // false
console.log("1 === true:", 1 === true); // false
console.log("0 === false:", 0 === false); // false
console.log("null === undefined:", null === undefined); // false

// Loose inequality (!=)
console.log("\\n5 != 5:", 5 != 5); // false
console.log("5 != '5':", 5 != "5"); // false (coerced!)

// Strict inequality (!==)
console.log("\\n5 !== 5:", 5 !== 5); // false
console.log("5 !== '5':", 5 !== "5"); // true

// Objects compared by reference
console.log("\\n{} === {}:", {} === {}); // false
console.log("[] === []:", [] === []); // false
let obj = {};
console.log("obj === obj:", obj === obj); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Relational Comparisons"
              initialCode={`// Number comparisons
console.log("10 > 5:", 10 > 5); // true
console.log("10 < 5:", 10 < 5); // false
console.log("10 >= 10:", 10 >= 10); // true
console.log("10 <= 9:", 10 <= 9); // false

// String comparisons (lexicographic)
console.log("\\n'apple' < 'banana':", "apple" < "banana"); // true
console.log("'z' > 'a':", "z" > "a"); // true
console.log("'10' < '9':", "10" < "9"); // true (string comparison!)

// Mixed type comparisons (coercion)
console.log("\\n'5' > 3:", "5" > 3); // true (string becomes number)
console.log("'10' < 20:", "10" < 20); // true

// Special cases
console.log("\\nnull > 0:", null > 0); // false
console.log("null == 0:", null == 0); // false
console.log("null >= 0:", null >= 0); // true (!?)

console.log("\\nundefined > 0:", undefined > 0); // false
console.log("undefined < 0:", undefined < 0); // false
console.log("undefined == 0:", undefined == 0); // false

// NaN comparisons
console.log("\\nNaN > 5:", NaN > 5); // false
console.log("NaN < 5:", NaN < 5); // false
console.log("NaN == NaN:", NaN == NaN); // false`}
            />
          </div>
        </section>

        {/* Logical Operators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🧠 Logical Operators
          </h2>

          <ConceptCard title="Logical Operators" icon="💡" color="orange">
            <div className="space-y-2">
              <div className="font-mono">
                <span className="text-orange-400">&&</span> Logical AND
                (short-circuit)
              </div>
              <div className="font-mono">
                <span className="text-orange-400">||</span> Logical OR
                (short-circuit)
              </div>
              <div className="font-mono">
                <span className="text-orange-400">!</span> Logical NOT
              </div>
              <div className="font-mono">
                <span className="text-orange-400">??</span> Nullish coalescing
                (ES2020)
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Logical AND (&&) Operator"
              initialCode={`// AND returns first falsy value or last value
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false

// Short-circuit evaluation
console.log("\\n0 && 'hello':", 0 && "hello"); // 0 (stops at falsy)
console.log("'hello' && 'world':", "hello" && "world"); // "world"
console.log("null && 'hello':", null && "hello"); // null

// Multiple ANDs
console.log("\\n1 && 2 && 3:", 1 && 2 && 3); // 3 (last value)
console.log("1 && 0 && 3:", 1 && 0 && 3); // 0 (first falsy)

// Practical use: conditional execution
let user = { name: "Alice", age: 25 };
user && console.log("User exists:", user.name);

let noUser = null;
noUser && console.log("This won't run");

// Guard pattern
function greet(name) {
  name && console.log("Hello, " + name);
}
greet("Bob"); // Logs
greet(); // Doesn't log`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Logical OR (||) Operator"
              initialCode={`// OR returns first truthy value or last value
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false
console.log("false || true:", false || true); // true

// Short-circuit evaluation
console.log("\\n'hello' || 'world':", "hello" || "world"); // "hello" (stops at truthy)
console.log("0 || 'default':", 0 || "default"); // "default"
console.log("null || 'fallback':", null || "fallback"); // "fallback"

// Multiple ORs
console.log("\\n0 || null || 'found':", 0 || null || "found"); // "found"
console.log("0 || null || undefined:", 0 || null || undefined); // undefined (last value)

// Practical use: default values
function greet(name) {
  name = name || "Guest";
  console.log("Hello, " + name);
}
greet("Alice"); // "Hello, Alice"
greet(); // "Hello, Guest"

// Problem with || and falsy values
function setCount(count) {
  count = count || 10; // Problem: 0 is falsy!
  console.log("Count:", count);
}
setCount(5); // 5
setCount(0); // 10 (not what we want!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Logical NOT (!) and Nullish Coalescing (??)"
              initialCode={`// NOT operator flips boolean
console.log("!true:", !true); // false
console.log("!false:", !false); // true

// NOT with coercion
console.log("\\n!'hello':", !"hello"); // false (truthy becomes false)
console.log("!0:", !0); // true (falsy becomes true)
console.log("!'':", !""); // true
console.log("!null:", !null); // true

// Double NOT (!!) - convert to boolean
console.log("\\n!!'hello':", !!"hello"); // true
console.log("!!0:", !!0); // false
console.log("!!{}:", !!{}); // true

// Nullish coalescing (??) - ES2020
// Returns right side only if left is null or undefined
console.log("\\nnull ?? 'default':", null ?? "default"); // "default"
console.log("undefined ?? 'default':", undefined ?? "default"); // "default"

// Key difference from ||
console.log("\\n0 || 10:", 0 || 10); // 10 (0 is falsy)
console.log("0 ?? 10:", 0 ?? 10); // 0 (0 is not null/undefined!)

console.log("'' || 'default':", "" || "default"); // "default"
console.log("'' ?? 'default':", "" ?? "default"); // ""

// Practical use
function setConfig(timeout) {
  // Use ?? to allow 0 as valid value
  timeout = timeout ?? 5000;
  console.log("Timeout:", timeout);
}
setConfig(0); // 0 (not replaced!)
setConfig(null); // 5000
setConfig(undefined); // 5000`}
            />
          </div>
        </section>

        {/* Bitwise Operators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔣 Bitwise Operators
          </h2>

          <ConceptCard title="Bitwise Operators" icon="💾" color="blue">
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              <div>
                <span className="text-blue-400">&</span> AND
              </div>
              <div>
                <span className="text-blue-400">|</span> OR
              </div>
              <div>
                <span className="text-blue-400">^</span> XOR
              </div>
              <div>
                <span className="text-blue-400">~</span> NOT
              </div>
              <div>
                <span className="text-blue-400">&lt;&lt;</span> Left shift
              </div>
              <div>
                <span className="text-blue-400">&gt;&gt;</span> Sign-propagating
                right shift
              </div>
              <div>
                <span className="text-blue-400">&gt;&gt;&gt;</span> Zero-fill
                right shift
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Bitwise Operations"
              initialCode={`// Bitwise AND (&) - both bits must be 1
console.log("5 & 3:", 5 & 3); // 1
// 101 (5)
// 011 (3)
// 001 (1)

// Bitwise OR (|) - at least one bit must be 1
console.log("5 | 3:", 5 | 3); // 7
// 101 (5)
// 011 (3)
// 111 (7)

// Bitwise XOR (^) - bits must be different
console.log("5 ^ 3:", 5 ^ 3); // 6
// 101 (5)
// 011 (3)
// 110 (6)

// Bitwise NOT (~) - invert all bits
console.log("~5:", ~5); // -6
// ~101 = ...11111010 = -6 (two's complement)

// Left shift (<<) - shift bits left, fill with 0
console.log("5 << 1:", 5 << 1); // 10
console.log("5 << 2:", 5 << 2); // 20 (multiply by 2^n)

// Right shift (>>) - shift bits right, preserve sign
console.log("5 >> 1:", 5 >> 1); // 2
console.log("-5 >> 1:", -5 >> 1); // -3 (sign preserved)

// Unsigned right shift (>>>) - shift right, fill with 0
console.log("5 >>> 1:", 5 >>> 1); // 2
console.log("-5 >>> 1:", -5 >>> 1); // 2147483645 (no sign)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Practical Bitwise Use Cases"
              initialCode={`// Check if number is even/odd
function isEven(n) {
  return (n & 1) === 0;
}
console.log("isEven(4):", isEven(4)); // true
console.log("isEven(5):", isEven(5)); // false

// Fast multiplication/division by powers of 2
console.log("\\n10 << 1 (× 2):", 10 << 1); // 20
console.log("10 << 2 (× 4):", 10 << 2); // 40
console.log("10 >> 1 (÷ 2):", 10 >> 1); // 5
console.log("10 >> 2 (÷ 4):", 10 >> 2); // 2

// Swap without temp variable
let a = 5, b = 10;
console.log("\\nBefore swap:", a, b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("After swap:", a, b);

// Toggle boolean (bitwise NOT)
let flag = 1;
console.log("\\nflag:", flag);
flag = ~flag; // -2
flag = flag + 1; // -1
console.log("toggled:", flag);

// Better: use XOR with 1
flag = 1;
flag = flag ^ 1;
console.log("XOR toggle:", flag); // 0
flag = flag ^ 1;
console.log("XOR toggle:", flag); // 1`}
            />
          </div>
        </section>

        {/* Other Operators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Other Important Operators
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Conditional (Ternary) Operator"
              initialCode={`// condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log("Status:", status); // "adult"

// Nested ternary (use sparingly!)
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log("Grade:", grade); // "B"

// With function calls
let isLoggedIn = true;
let message = isLoggedIn ? getWelcomeMessage() : getLoginPrompt();

function getWelcomeMessage() { return "Welcome back!"; }
function getLoginPrompt() { return "Please log in"; }
console.log("Message:", message);

// Return different types
let value = true ? 42 : "string";
console.log("Value:", value, typeof value); // 42 "number"

// Short-circuit evaluation
let user = null;
let name = user ? user.name : "Guest";
console.log("Name:", name); // "Guest"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Comma Operator"
              initialCode={`// Evaluates each expression, returns last one
let result = (1 + 2, 3 + 4, 5 + 6);
console.log("result:", result); // 11 (last expression)

// In for loops
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log("i:", i, "j:", j);
}

// Multiple variable declarations
let a = 1, b = 2, c = 3;
console.log("a, b, c:", a, b, c);

// In expressions
let x = (console.log("First"), console.log("Second"), 42);
console.log("x:", x); // 42

// Note: parentheses are important
let y = 1 + 2, 3 + 4; // y = 3, then evaluates 3 + 4
console.log("y:", y); // 3 (not 7!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Special Operators: typeof, delete, void, in, instanceof"
              initialCode={`// typeof - type checking
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof {}:", typeof {}); // "object"

// delete - remove property
let obj = { name: "Alice", age: 25 };
console.log("\\nBefore delete:", obj);
delete obj.age;
console.log("After delete:", obj);
console.log("delete obj.age:", delete obj.age); // true

// void - evaluate and return undefined
console.log("\\nvoid 0:", void 0); // undefined
console.log("void(1 + 1):", void(1 + 1)); // undefined

// in - check property existence
let person = { name: "Bob", age: 30 };
console.log("\\n'name' in person:", "name" in person); // true
console.log("'email' in person:", "email" in person); // false
console.log("'toString' in person:", "toString" in person); // true (inherited)

// instanceof - check instance
console.log("\\n[] instanceof Array:", [] instanceof Array); // true
console.log("[] instanceof Object:", [] instanceof Object); // true
console.log("{} instanceof Array:", {} instanceof Array); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Optional Chaining (?.) - ES2020"
              initialCode={`// Safe property access
let user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

// Without optional chaining
console.log("user.address.city:", user.address.city); // "New York"
// console.log(user.email.domain); // Error!

// With optional chaining
console.log("\\nuser.address?.city:", user.address?.city); // "New York"
console.log("user.email?.domain:", user.email?.domain); // undefined (no error!)

// Optional method call
let obj = {};
console.log("\\nobj.method?.():", obj.method?.()); // undefined (no error!)

// Optional array access
let arr = [1, 2, 3];
console.log("arr?.[0]:", arr?.[0]); // 1
console.log("arr?.[10]:", arr?.[10]); // undefined

let nullArr = null;
console.log("nullArr?.[0]:", nullArr?.[0]); // undefined (no error!)

// Chaining
let data = { users: [{ name: "Bob" }] };
console.log("\\ndata?.users?.[0]?.name:", data?.users?.[0]?.name); // "Bob"
console.log("data?.users?.[10]?.name:", data?.users?.[10]?.name); // undefined`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Spread (...) and Rest (...) Operators"
              initialCode={`// Spread in arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined:", combined); // [1, 2, 3, 4, 5, 6]

// Spread in objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged); // { a: 1, b: 2, c: 3, d: 4 }

// Copy arrays/objects (shallow)
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log("\\nOriginal:", original); // [1, 2, 3]
console.log("Copy:", copy); // [1, 2, 3, 4]

// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("\\nsum(1, 2, 3):", sum(1, 2, 3)); // 6
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15

// Rest in destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("\\nfirst:", first); // 1
console.log("rest:", rest); // [3, 4, 5]

let { a, b, ...others } = { a: 1, b: 2, c: 3, d: 4 };
console.log("a, b:", a, b); // 1, 2
console.log("others:", others); // { c: 3, d: 4 }`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="new Operator and this Keyword"
              initialCode={`// new - create instance
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(\`Hello, I'm \${this.name}\`);
  };
}

let person1 = new Person("Alice", 25);
console.log("person1:", person1);
person1.greet();

// ES6 class syntax
class Animal {
  constructor(type) {
    this.type = type;
  }
  
  speak() {
    console.log(\`I'm a \${this.type}\`);
  }
}

let dog = new Animal("dog");
dog.speak();

// 'this' in different contexts
let obj = {
  name: "Object",
  regularFunction: function() {
    console.log("Regular this:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow this:", this); // Lexical this!
  }
};

console.log("\\nCalling methods:");
obj.regularFunction(); // "Object"
obj.arrowFunction(); // undefined or global object`}
            />
          </div>
        </section>

        {/* Operator Precedence */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 Operator Precedence
          </h2>

          <ConceptCard title="Precedence Rules" icon="🎯" color="purple">
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-purple-300 mb-2">
                Higher to Lower (Partial List):
              </p>
              <div className="space-y-1 font-mono">
                <div>1. ( ) - Grouping</div>
                <div>2. . [] () - Member access, call</div>
                <div>3. new (with arguments)</div>
                <div>4. ++ -- - Postfix increment/decrement</div>
                <div>5. ! ~ + - typeof void delete - Unary</div>
                <div>6. ** - Exponentiation</div>
                <div>7. * / % - Multiplication, division, modulus</div>
                <div>8. + - - Addition, subtraction</div>
                <div>9. &lt;&lt; &gt;&gt; &gt;&gt;&gt; - Bitwise shifts</div>
                <div>10. &lt; &lt;= &gt; &gt;= in instanceof - Relational</div>
                <div>11. == != === !== - Equality</div>
                <div>12. & - Bitwise AND</div>
                <div>13. ^ - Bitwise XOR</div>
                <div>14. | - Bitwise OR</div>
                <div>15. && - Logical AND</div>
                <div>16. || ?? - Logical OR, Nullish coalescing</div>
                <div>17. ?: - Conditional</div>
                <div>18. = += -= etc. - Assignment</div>
                <div>19. , - Comma</div>
              </div>
            </div>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Operator Precedence Examples"
              initialCode={`// Multiplication before addition
console.log("2 + 3 * 4:", 2 + 3 * 4); // 14 (not 20)
console.log("(2 + 3) * 4:", (2 + 3) * 4); // 20

// Exponentiation is right-associative
console.log("\\n2 ** 3 ** 2:", 2 ** 3 ** 2); // 512 (2 ** (3 ** 2))
console.log("(2 ** 3) ** 2:", (2 ** 3) ** 2); // 64

// Unary before binary
console.log("\\n-2 + 3:", -2 + 3); // 1
console.log("-(2 + 3):", -(2 + 3)); // -5

// Logical AND before OR
console.log("\\ntrue || false && false:", true || false && false); // true
console.log("(true || false) && false:", (true || false) && false); // false

// Comparison before logical
console.log("\\n5 > 3 && 10 < 20:", 5 > 3 && 10 < 20); // true

// Assignment has low precedence
let x = 2 + 3; // Assigns 5, not (2 + 3)
console.log("\\nx:", x); // 5

// Comma has lowest precedence
let y = (1 + 2, 3 + 4); // Evaluates to 7
console.log("y:", y); // 7

// Complex example
let result = 2 + 3 * 4 ** 2 / 8 - 1;
console.log("\\n2 + 3 * 4 ** 2 / 8 - 1:", result);
// 4 ** 2 = 16
// 3 * 16 = 48
// 48 / 8 = 6
// 2 + 6 = 8
// 8 - 1 = 7`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Operator Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Always use === instead of ==
                </strong>
                <p className="ml-4 mt-1">
                  Avoid unexpected type coercion. Only use == when comparing
                  with null/undefined.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use ?? for default values (not ||)
                </strong>
                <p className="ml-4 mt-1">
                  Nullish coalescing treats 0 and "" as valid values, unlike ||.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use optional chaining (?.) for safe access
                </strong>
                <p className="ml-4 mt-1">
                  Prevents errors when accessing nested properties that might
                  not exist.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use parentheses for clarity
                </strong>
                <p className="ml-4 mt-1">
                  Even if you know precedence, parentheses make code more
                  readable.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Avoid complex ternary expressions
                </strong>
                <p className="ml-4 mt-1">
                  Nested ternaries are hard to read. Use if/else for complex
                  conditions.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Be careful with ++ and -- in expressions
                </strong>
                <p className="ml-4 mt-1">
                  Post/pre increment can be confusing. Use them on separate
                  lines.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use logical assignment operators (ES2021)
                </strong>
                <p className="ml-4 mt-1">
                  &&=, ||=, ??= make code more concise and clear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion Message */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 1 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Congratulations! You've mastered the{" "}
              <strong>absolute fundamentals</strong> of JavaScript:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">Variables & Constants</strong>
                  <p className="text-sm text-gray-400">
                    var, let, const, scoping, hoisting
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">Primitive Types</strong>
                  <p className="text-sm text-gray-400">
                    All 7 primitives with every method
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">Reference Types</strong>
                  <p className="text-sm text-gray-400">
                    Objects, arrays, functions, and more
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">Type System</strong>
                  <p className="text-sm text-gray-400">
                    Checking, conversion, coercion
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <strong className="text-white">All Operators</strong>
                  <p className="text-sm text-gray-400">
                    50+ operators, precedence, usage
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all"
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
