"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function PrimitivesPage() {
  return (
    <SectionLayout
      title="1.2 Data Types - Primitives"
      description="Master all 7 primitive types: String, Number, BigInt, Boolean, Undefined, Null, Symbol"
      prevSection={{
        title: "Variables & Constants",
        path: "/phase1/variables",
      }}
      nextSection={{
        title: "Reference Types",
        path: "/phase1/reference-types",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🧱 Primitive Data Types
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            JavaScript has{" "}
            <strong className="text-purple-400">7 primitive data types</strong>.
            Primitives are
            <strong> immutable</strong> (cannot be changed) and are stored by
            value.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-purple-300">
              String
            </div>
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-blue-300">
              Number
            </div>
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-green-300">
              BigInt
            </div>
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-yellow-300">
              Boolean
            </div>
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-gray-400">
              Undefined
            </div>
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-gray-500">
              Null
            </div>
            <div className="bg-gray-800/50 px-3 py-2 rounded border border-gray-700 text-center text-sm font-mono text-pink-300">
              Symbol
            </div>
          </div>
        </div>

        {/* STRING TYPE */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">📝 String</h2>

          <ConceptCard title="String Basics" icon="💬" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Definition:</strong> Sequence of characters used for
                text
              </li>
              <li>
                <strong>Creation:</strong> Literal (quotes) or String()
                constructor
              </li>
              <li>
                <strong>Immutable:</strong> Cannot change existing strings, only
                create new ones
              </li>
              <li>
                <strong>Encoding:</strong> UTF-16 (each character is 16-bit)
              </li>
              <li>
                <strong>Zero-indexed:</strong> First character is at position 0
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="String Creation Methods"
              initialCode={`// Three ways to create strings
let single = 'Single quotes';
let double = "Double quotes";
let backtick = \`Template literal (backticks)\`;

console.log(single);
console.log(double);
console.log(backtick);

// String() constructor
let constructed = String(123);
console.log("Constructed:", constructed, typeof constructed);

// All are equivalent
console.log(single === 'Single quotes'); // true
console.log(typeof single); // "string"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="String Immutability"
              initialCode={`// Strings are immutable
let message = "Hello";
console.log("Original:", message);

// Trying to change a character does nothing
message[0] = "h"; // Doesn't work (fails silently)
console.log("After trying to change:", message); // Still "Hello"

// You must create a NEW string
message = "h" + message.slice(1);
console.log("New string:", message); // "hello"

// String operations always create new strings
let greeting = "Hello";
let upper = greeting.toUpperCase();
console.log("Original unchanged:", greeting); // "Hello"
console.log("New string:", upper); // "HELLO"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Escape Sequences"
              initialCode={`// Common escape sequences
let newline = "Line 1\\nLine 2";
console.log(newline);

let tab = "Column1\\tColumn2\\tColumn3";
console.log(tab);

let quote = "He said, \\"Hello!\\"";
console.log(quote);

let singleQuote = 'It\\'s working!';
console.log(singleQuote);

let backslash = "Path: C:\\\\Users\\\\Name";
console.log(backslash);

// All escape sequences
console.log("Carriage return: \\r");
console.log("Form feed: \\f");
console.log("Backspace: \\b (rare)");
console.log("Unicode: \\u0041 =", "\\u0041"); // A
console.log("Hex: \\x41 =", "\\x41"); // A`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Unicode and UTF-16"
              initialCode={`// Unicode characters
let emoji = "😀🎉🚀";
console.log("Emoji:", emoji);

// UTF-16 encoding (most chars = 16 bits)
let char = "A";
console.log("Character:", char);
console.log("Char code:", char.charCodeAt(0)); // 65
console.log("From code:", String.fromCharCode(65)); // "A"

// Some emoji need surrogate pairs (32 bits)
let rocket = "🚀";
console.log("Length:", rocket.length); // 2 (surrogate pair!)
console.log("Code unit 1:", rocket.charCodeAt(0));
console.log("Code unit 2:", rocket.charCodeAt(1));

// Use codePointAt for full Unicode
console.log("Code point:", rocket.codePointAt(0));
console.log("From code point:", String.fromCodePoint(0x1F680)); // 🚀

// International characters
let chinese = "你好世界";
let arabic = "مرحبا";
let greek = "Γειά σου";
console.log(chinese, arabic, greek);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Template Literals (Backticks)"
              initialCode={`// Template literals with \${} interpolation
let name = "Alice";
let age = 25;

let message = \`My name is \${name} and I am \${age} years old.\`;
console.log(message);

// Expressions inside \${}
let a = 5;
let b = 10;
console.log(\`\${a} + \${b} = \${a + b}\`);

// Multi-line strings
let multiline = \`
  This is line 1
  This is line 2
  This is line 3
\`;
console.log(multiline);

// Function calls
function greet(name) { return "Hello, " + name; }
console.log(\`Greeting: \${greet("Bob")}\`);

// Nested template literals
let outer = \`Outer \$\{\`Inner \$\{1 + 1\}\`\}\`;
console.log(outer);`}
            />
          </div>
        </section>

        {/* NUMBER TYPE */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔢 Number</h2>

          <ConceptCard title="Number Basics" icon="➗" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>64-bit floating point:</strong> IEEE 754 double
                precision
              </li>
              <li>
                <strong>Range:</strong> ±(2<sup>-1074</sup> to 2<sup>1024</sup>)
              </li>
              <li>
                <strong>Integers:</strong> Safe up to ±2<sup>53</sup>-1
              </li>
              <li>
                <strong>Special values:</strong> Infinity, -Infinity, NaN
              </li>
              <li>
                <strong>Multiple formats:</strong> Decimal, binary, octal,
                hexadecimal
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Number Formats"
              initialCode={`// Decimal (base 10)
let decimal = 42;
console.log("Decimal:", decimal);

// Binary (base 2) - prefix 0b
let binary = 0b101010; // 42 in binary
console.log("Binary 0b101010 =", binary);

// Octal (base 8) - prefix 0o
let octal = 0o52; // 42 in octal
console.log("Octal 0o52 =", octal);

// Hexadecimal (base 16) - prefix 0x
let hex = 0x2A; // 42 in hex
console.log("Hex 0x2A =", hex);

// Floating point
let float = 3.14159;
let scientific = 2.5e6; // 2.5 * 10^6
let smallScientific = 1.23e-5; // 0.0000123

console.log("Float:", float);
console.log("Scientific:", scientific);
console.log("Small scientific:", smallScientific);

// Underscores for readability (ES2021)
let billion = 1_000_000_000;
let binary_readable = 0b1010_0001_1000_0101;
console.log("Billion:", billion);
console.log("Binary readable:", binary_readable);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Special Number Values"
              initialCode={`// Infinity
console.log("Infinity:", Infinity);
console.log("1 / 0 =", 1 / 0); // Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// -Infinity
console.log("-Infinity:", -Infinity);
console.log("-1 / 0 =", -1 / 0); // -Infinity

// NaN (Not-a-Number)
console.log("NaN:", NaN);
console.log("0 / 0 =", 0 / 0); // NaN
console.log("'text' * 2 =", "text" * 2); // NaN
console.log("typeof NaN:", typeof NaN); // "number" (surprisingly!)

// NaN is special: not equal to anything, even itself!
console.log("NaN === NaN:", NaN === NaN); // false!
console.log("NaN == NaN:", NaN == NaN); // false!

// Check for NaN properly
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (better)

// isNaN vs Number.isNaN
console.log("isNaN('hello'):", isNaN("hello")); // true (coerces)
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (strict)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number Constants (Number.* Properties)"
              initialCode={`// Maximum and minimum values
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE); // Smallest positive number

// Safe integer range
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -(2^53 - 1)

// Infinity constants
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

// NaN constant
console.log("Number.NaN:", Number.NaN);

// Epsilon (smallest difference between two numbers)
console.log("EPSILON:", Number.EPSILON);
console.log("Used for:", "0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3); // false!
console.log("With epsilon:", Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Floating Point Precision Issues"
              initialCode={`// Classic floating point problem
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 !
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!

// Why? Binary representation limitation
console.log("0.1 in binary is infinite repeating");

// Solution 1: Use Number.EPSILON
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log("areEqual(0.1 + 0.2, 0.3):", areEqual(0.1 + 0.2, 0.3)); // true

// Solution 2: Use toFixed() or toPrecision()
let sum = 0.1 + 0.2;
console.log("Fixed to 1 decimal:", parseFloat(sum.toFixed(1))); // 0.3

// Solution 3: Work with integers (cents instead of dollars)
let price1 = 10; // 10 cents
let price2 = 20; // 20 cents
let total = price1 + price2; // 30 cents
console.log("In cents:", total, "=> $" + (total / 100));

// More examples
console.log("0.3 - 0.2 =", 0.3 - 0.2); // 0.09999999999999998
console.log("0.2 - 0.1 =", 0.2 - 0.1); // 0.1 (works by chance)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number Static Methods"
              initialCode={`// Number.isNaN() - strict NaN check
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false

// Number.isFinite() - check if finite number
console.log("Number.isFinite(100):", Number.isFinite(100)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isFinite('100'):", Number.isFinite("100")); // false (strict)

// Number.isInteger() - check if integer
console.log("Number.isInteger(42):", Number.isInteger(42)); // true
console.log("Number.isInteger(42.0):", Number.isInteger(42.0)); // true
console.log("Number.isInteger(42.1):", Number.isInteger(42.1)); // false

// Number.isSafeInteger() - check if safe integer
console.log("Number.isSafeInteger(42):", Number.isSafeInteger(42)); // true
console.log("Number.isSafeInteger(2**53):", Number.isSafeInteger(2**53)); // false
console.log("Number.isSafeInteger(2**53 - 1):", Number.isSafeInteger(2**53 - 1)); // true

// Number.parseInt() and Number.parseFloat()
console.log("Number.parseInt('42px'):", Number.parseInt("42px")); // 42
console.log("Number.parseFloat('3.14text'):", Number.parseFloat("3.14text")); // 3.14
console.log("Number.parseInt('101', 2):", Number.parseInt("101", 2)); // 5 (binary)`}
            />
          </div>
        </section>

        {/* BIGINT TYPE */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔢 BigInt (ES2020)
          </h2>

          <ConceptCard title="BigInt Basics" icon="💯" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Purpose:</strong> Represent integers larger than 2
                <sup>53</sup>-1
              </li>
              <li>
                <strong>Syntax:</strong> Add 'n' suffix to number (123n) or
                BigInt()
              </li>
              <li>
                <strong>No limit:</strong> Can represent arbitrarily large
                integers
              </li>
              <li>
                <strong>Cannot mix:</strong> Cannot mix with regular Numbers in
                operations
              </li>
              <li>
                <strong>No decimals:</strong> Only integers, no floating point
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="BigInt Creation and Operations"
              initialCode={`// Creating BigInt
let big1 = 123456789012345678901234567890n;
console.log("BigInt literal:", big1);
console.log("typeof:", typeof big1); // "bigint"

// Using BigInt() constructor
let big2 = BigInt("999999999999999999999999");
console.log("BigInt constructor:", big2);

// From regular number
let big3 = BigInt(100);
console.log("From number:", big3);

// BigInt operations
let a = 100n;
let b = 50n;

console.log("Addition:", a + b); // 150n
console.log("Subtraction:", a - b); // 50n
console.log("Multiplication:", a * b); // 5000n
console.log("Division:", a / b); // 2n (integer division!)
console.log("Remainder:", a % b); // 0n
console.log("Exponentiation:", 2n ** 100n);

// Integer division (truncates)
console.log("9n / 2n =", 9n / 2n); // 4n, not 4.5n`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="BigInt Limitations and Mixing with Number"
              initialCode={`// Cannot mix BigInt and Number
let bigInt = 100n;
let number = 50;

// This would error (uncomment to see):
// console.log(bigInt + number); // TypeError!

// Must convert explicitly
console.log("BigInt + Number:", bigInt + BigInt(number)); // 150n
console.log("Number + BigInt:", Number(bigInt) + number); // 150

// Be careful with Number() conversion
let huge = 123456789012345678901234567890n;
console.log("Original BigInt:", huge);
console.log("Converted to Number:", Number(huge)); // Loses precision!

// Cannot use Math methods with BigInt
// Math.max(10n, 20n); // Error!

// No decimal/float support
// let decimal = 3.14n; // SyntaxError!

// Comparison works across types
console.log("10n == 10:", 10n == 10); // true (loose equality)
console.log("10n === 10:", 10n === 10); // false (different types)
console.log("10n < 20:", 10n < 20); // true

// BigInt static methods
console.log("BigInt.asIntN(8, 300n):", BigInt.asIntN(8, 300n));
console.log("BigInt.asUintN(8, -1n):", BigInt.asUintN(8, -1n));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="When to Use BigInt"
              initialCode={`// Use case 1: Very large integers
let googleNum = 10n ** 100n; // Googol
console.log("Googol (10^100):", googleNum);

// Use case 2: Cryptography
let largeKey = 2n ** 256n - 1n;
console.log("256-bit key:", largeKey);

// Use case 3: Precise integer calculations
function factorial(n) {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("20! =", factorial(20n));
console.log("50! =", factorial(50n)); // Huge number!

// Use case 4: Financial calculations requiring precision
let cents = 1000000000000n; // 10 trillion cents
let dollars = cents / 100n;
console.log("Dollars:", dollars);

// When NOT to use BigInt:
// - Don't need numbers > 2^53-1
// - Need decimal/float support
// - Working with existing Number APIs`}
            />
          </div>
        </section>

        {/* BOOLEAN TYPE */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">✅ Boolean</h2>

          <ConceptCard title="Boolean Basics" icon="🔘" color="yellow">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Two values:</strong> true or false
              </li>
              <li>
                <strong>Logical operations:</strong> Used in conditionals and
                logic
              </li>
              <li>
                <strong>Coercion:</strong> Many values convert to true/false
              </li>
              <li>
                <strong>Truthy/Falsy:</strong> Values that act as true/false in
                boolean context
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Boolean Values and Creation"
              initialCode={`// Literal booleans
let isTrue = true;
let isFalse = false;

console.log("true:", isTrue, typeof isTrue);
console.log("false:", isFalse, typeof isFalse);

// Boolean() constructor
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('text'):", Boolean("text")); // true
console.log("Boolean(''):", Boolean("")); // false

// Comparison operations return boolean
console.log("5 > 3:", 5 > 3); // true
console.log("10 === 10:", 10 === 10); // true
console.log("'a' < 'b':", "a" < "b"); // true

// Logical operations return boolean
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true
console.log("!true:", !true); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Falsy Values (Only 8!)"
              initialCode={`// Only 8 falsy values in JavaScript!
console.log("Boolean(false):", Boolean(false)); // false
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(-0):", Boolean(-0)); // false
console.log("Boolean(0n):", Boolean(0n)); // false (BigInt zero)
console.log("Boolean(''):", Boolean("")); // false (empty string)
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false

// Everything else is truthy!
console.log("\\nTruthy examples:");
console.log("Boolean(true):", Boolean(true));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean(-1):", Boolean(-1));
console.log("Boolean('false'):", Boolean("false")); // string is truthy!
console.log("Boolean(' '):", Boolean(" ")); // space is truthy
console.log("Boolean([]):", Boolean([])); // empty array is truthy!
console.log("Boolean({}):", Boolean({})); // empty object is truthy!
console.log("Boolean(Infinity):", Boolean(Infinity));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Boolean Coercion in Practice"
              initialCode={`// Implicit coercion in if statements
let value = "Hello";

if (value) {
  console.log("value is truthy:", value);
}

// Double NOT (!!) trick to convert to boolean
console.log("!!'Hello':", !!"Hello"); // true
console.log("!!'':", !!""); // false
console.log("!!0:", !!0); // false
console.log("!!{}:", !!{}); // true

// Logical operators with coercion
console.log("'Hello' && 'World':", "Hello" && "World"); // "World"
console.log("0 && 'Hello':", 0 && "Hello"); // 0
console.log("null || 'default':", null || "default"); // "default"
console.log("'text' || 'default':", "text" || "default"); // "text"

// Ternary operator
let age = 18;
let status = (age >= 18) ? "adult" : "minor";
console.log("Status:", status);

// Common pattern: default values
let userInput = "";
let result = userInput || "default value";
console.log("Result:", result);`}
            />
          </div>
        </section>

        {/* UNDEFINED TYPE */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">❓ Undefined</h2>

          <ConceptCard title="Undefined Basics" icon="🤷" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Default value:</strong> Variables declared but not
                assigned
              </li>
              <li>
                <strong>Missing properties:</strong> Accessing non-existent
                object properties
              </li>
              <li>
                <strong>Missing parameters:</strong> Function parameters not
                provided
              </li>
              <li>
                <strong>No return:</strong> Functions that don't return a value
              </li>
              <li>
                <strong>Type and value:</strong> Both type and value are
                "undefined"
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Undefined - Common Cases"
              initialCode={`// Case 1: Variable declared but not initialized
let x;
console.log("Declared but not initialized:", x); // undefined
console.log("typeof x:", typeof x); // "undefined"

// Case 2: Object property doesn't exist
let obj = { name: "Alice" };
console.log("Existing property:", obj.name); // "Alice"
console.log("Non-existent property:", obj.age); // undefined

// Case 3: Function parameter not provided
function greet(name) {
  console.log("Parameter:", name);
}
greet(); // undefined

// Case 4: Function with no return
function noReturn() {
  console.log("Executing...");
}
let result = noReturn();
console.log("Function result:", result); // undefined

// Case 5: Array element doesn't exist
let arr = [1, 2, 3];
console.log("arr[0]:", arr[0]); // 1
console.log("arr[10]:", arr[10]); // undefined`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="void Operator"
              initialCode={`// void operator evaluates expression and returns undefined
console.log("void 0:", void 0); // undefined
console.log("void(1 + 1):", void(1 + 1)); // undefined
console.log("void 'hello':", void "hello"); // undefined

// Any expression becomes undefined
let x = 5;
console.log("void x:", void x); // undefined
console.log("x is still:", x); // 5 (not affected)

// Common use: void 0 as safe undefined
// (undefined can be redefined in old browsers)
let myVar = void 0; // Guaranteed undefined
console.log("myVar:", myVar);

// In links: javascript:void(0)
// Used to prevent navigation
// <a href="javascript:void(0)">Click</a>

// Comparing to undefined
console.log("x === undefined:", x === undefined); // false
console.log("void 0 === undefined:", void 0 === undefined); // true`}
            />
          </div>
        </section>

        {/* NULL TYPE */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⭕ Null</h2>

          <ConceptCard title="Null Basics" icon="∅" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Intentional absence:</strong> Explicitly set to indicate
                "no value"
              </li>
              <li>
                <strong>Not automatic:</strong> Must be assigned by programmer
              </li>
              <li>
                <strong>typeof bug:</strong> typeof null returns "object"
                (historical bug!)
              </li>
              <li>
                <strong>Primitive:</strong> Despite typeof, null is a primitive
              </li>
              <li>
                <strong>Only one value:</strong> Just null
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Null vs Undefined"
              initialCode={`// Undefined: automatically assigned
let notAssigned;
console.log("Not assigned:", notAssigned); // undefined

// Null: explicitly assigned
let intentionallyEmpty = null;
console.log("Intentionally empty:", intentionallyEmpty); // null

// typeof (note the bug!)
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object" (BUG!)

// Checking for null/undefined
console.log("null == undefined:", null == undefined); // true (loose)
console.log("null === undefined:", null === undefined); // false (strict)

// Checking specifically for null
console.log("x === null:", intentionallyEmpty === null); // true

// Nullish check (null or undefined)
function isNullish(value) {
  return value == null; // catches both null and undefined
}
console.log("isNullish(null):", isNullish(null)); // true
console.log("isNullish(undefined):", isNullish(undefined)); // true
console.log("isNullish(0):", isNullish(0)); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="When to Use Null vs Undefined"
              initialCode={`// Use undefined: for "not yet set" or "missing"
let user;
console.log("User not initialized:", user); // undefined

// Use null: for "intentionally empty" or "no object"
let selectedItem = null; // Nothing selected
console.log("Nothing selected:", selectedItem); // null

// Example: DOM API
// document.getElementById() returns null if not found
// (Not undefined!)

// Example: JSON
let config = {
  theme: null, // Explicitly no theme
  language: undefined // Will be omitted in JSON
};
console.log("Config:", config);
console.log("JSON:", JSON.stringify(config)); // undefined omitted!

// Resetting a value
let data = { name: "Alice" };
console.log("Before reset:", data);
data = null; // Clear the reference
console.log("After reset:", data);

// Best practice
// - Use undefined for automatic/"not there"
// - Use null for intentional/"deliberately empty"`}
            />
          </div>
        </section>

        {/* SYMBOL TYPE */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔣 Symbol (ES2015)
          </h2>

          <ConceptCard title="Symbol Basics" icon="⚛️" color="pink">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Unique identifiers:</strong> Every symbol is unique
              </li>
              <li>
                <strong>Immutable:</strong> Cannot be changed
              </li>
              <li>
                <strong>Hidden properties:</strong> Don't appear in for...in or
                Object.keys()
              </li>
              <li>
                <strong>No auto-conversion:</strong> Cannot convert to
                string/number
              </li>
              <li>
                <strong>Global registry:</strong> Symbol.for() creates global
                symbols
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Symbol Creation and Uniqueness"
              initialCode={`// Create unique symbols
let sym1 = Symbol();
let sym2 = Symbol();

console.log("sym1:", sym1);
console.log("sym2:", sym2);
console.log("typeof sym1:", typeof sym1); // "symbol"

// Every symbol is unique!
console.log("sym1 === sym2:", sym1 === sym2); // false

// Optional description
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("id1:", id1);
console.log("id2:", id2);
console.log("Same description, still unique:", id1 === id2); // false

// Get description
console.log("id1.description:", id1.description); // "id"

// Symbols as object keys
let obj = {
  name: "Alice",
  [sym1]: "secret value 1",
  [id1]: "secret value 2"
};

console.log("obj.name:", obj.name);
console.log("obj[sym1]:", obj[sym1]);
console.log("Object.keys(obj):", Object.keys(obj)); // Only "name"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Symbol Global Registry"
              initialCode={`// Symbol.for() - global symbol registry
let globalSym1 = Symbol.for("app.id");
let globalSym2 = Symbol.for("app.id");

console.log("Global symbols are equal:", globalSym1 === globalSym2); // true!

// Get key from global symbol
console.log("Symbol.keyFor():", Symbol.keyFor(globalSym1)); // "app.id"

// Local symbols don't have keys
let localSym = Symbol("local");
console.log("Local symbol key:", Symbol.keyFor(localSym)); // undefined

// Practical use: shared constants across files
// File 1: const USER_ID = Symbol.for('user.id');
// File 2: const USER_ID = Symbol.for('user.id'); // Same symbol!

// Regular Symbol() vs Symbol.for()
let s1 = Symbol("test");
let s2 = Symbol("test");
let s3 = Symbol.for("test");
let s4 = Symbol.for("test");

console.log("s1 === s2:", s1 === s2); // false
console.log("s3 === s4:", s3 === s4); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Well-Known Symbols"
              initialCode={`// JavaScript has built-in "well-known" symbols
// that customize object behavior

console.log("Built-in Symbols:");
console.log("Symbol.iterator:", Symbol.iterator);
console.log("Symbol.toStringTag:", Symbol.toStringTag);
console.log("Symbol.hasInstance:", Symbol.hasInstance);

// Example: Symbol.toStringTag
let obj = {
  [Symbol.toStringTag]: "MyCustomObject"
};
console.log("Object.prototype.toString.call(obj):", 
  Object.prototype.toString.call(obj)); // [object MyCustomObject]

// Example: Symbol.iterator (make object iterable)
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log("Iterating custom object:");
for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="All Well-Known Symbols"
              initialCode={`// Complete list of well-known symbols
const wellKnownSymbols = [
  "asyncIterator",     // for await...of
  "hasInstance",       // instanceof behavior
  "isConcatSpreadable", // Array.concat behavior
  "iterator",          // for...of iteration
  "match",             // String.match()
  "matchAll",          // String.matchAll()
  "replace",           // String.replace()
  "search",            // String.search()
  "species",           // Constructor for derived objects
  "split",             // String.split()
  "toPrimitive",       // Type conversion
  "toStringTag",       // Object.prototype.toString
  "unscopables"        // with statement exclusions
];

console.log("Well-known symbols exist:");
wellKnownSymbols.forEach(name => {
  console.log(\`Symbol.\${name}:\`, typeof Symbol[name]); // symbol
});

// Practical example: Symbol.toPrimitive
let obj = {
  value: 100,
  [Symbol.toPrimitive](hint) {
    console.log("hint:", hint);
    if (hint === "number") return this.value;
    if (hint === "string") return \`Value: \${this.value}\`;
    return this.value;
  }
};

console.log("As number:", +obj); // hint: "number"
console.log("As string:", String(obj)); // hint: "string"
console.log("Default:", obj + ""); // hint: "default"`}
            />
          </div>
        </section>

        {/* Primitive Immutability */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔒 Primitive Immutability
          </h2>

          <ConceptCard
            title="Why Primitives are Immutable"
            icon="🛡️"
            color="blue"
          >
            <p className="mb-2">
              All primitive values are <strong>immutable</strong>. This means:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Cannot modify the value itself</li>
              <li>Operations create new values</li>
              <li>Stored by value, not reference</li>
              <li>Copying creates independent copy</li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Demonstrating Immutability"
              initialCode={`// Strings are immutable
let str = "Hello";
console.log("Original:", str);

// Cannot change characters
str[0] = "h"; // Doesn't work
console.log("After trying to change:", str); // Still "Hello"

// Must create new string
let newStr = "h" + str.slice(1);
console.log("New string:", newStr);

// Numbers are immutable
let num = 5;
let num2 = num;
num2 = 10;
console.log("num:", num); // Still 5
console.log("num2:", num2); // 10

// Primitives are copied by value
let a = "test";
let b = a; // Copy
b = "changed";
console.log("a:", a); // "test" (unchanged)
console.log("b:", b); // "changed"

// Compare with objects (reference type)
let obj1 = { value: 5 };
let obj2 = obj1; // Reference
obj2.value = 10;
console.log("obj1.value:", obj1.value); // 10 (changed!)
console.log("obj2.value:", obj2.value); // 10`}
            />
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Primitives Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Example Values
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    typeof Result
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Key Feature
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-purple-400">
                    String
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">
                    "hello", 'world', \`template\`
                  </td>
                  <td className="px-3 py-2 font-mono">"string"</td>
                  <td className="px-3 py-2">Text data, UTF-16</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-blue-400">Number</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    42, 3.14, NaN, Infinity
                  </td>
                  <td className="px-3 py-2 font-mono">"number"</td>
                  <td className="px-3 py-2">
                    64-bit float, ±2<sup>53</sup>
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-green-400">BigInt</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    123n, 9007199254740991n
                  </td>
                  <td className="px-3 py-2 font-mono">"bigint"</td>
                  <td className="px-3 py-2">Arbitrary precision integers</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-yellow-400">
                    Boolean
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">true, false</td>
                  <td className="px-3 py-2 font-mono">"boolean"</td>
                  <td className="px-3 py-2">Logical true/false</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-gray-400">
                    Undefined
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">undefined</td>
                  <td className="px-3 py-2 font-mono">"undefined"</td>
                  <td className="px-3 py-2">Not assigned</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-gray-500">Null</td>
                  <td className="px-3 py-2 font-mono text-sm">null</td>
                  <td className="px-3 py-2 font-mono">"object" (bug!)</td>
                  <td className="px-3 py-2">Intentionally empty</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-pink-400">Symbol</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Symbol(), Symbol('desc')
                  </td>
                  <td className="px-3 py-2 font-mono">"symbol"</td>
                  <td className="px-3 py-2">Unique identifiers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
