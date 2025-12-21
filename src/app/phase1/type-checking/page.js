"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function TypeCheckingPage() {
  return (
    <SectionLayout
      title="1.4 Type Checking & Conversion"
      description="Master typeof, instanceof, type coercion, and all conversion methods"
      prevSection={{
        title: "Reference Types",
        path: "/phase1/reference-types",
      }}
      nextSection={{
        title: "Operators - Complete",
        path: "/phase1/operators",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔍 Type Checking & Conversion
          </h2>
          <p className="text-gray-300 leading-relaxed">
            JavaScript provides multiple ways to check types and convert between
            them. Understanding these mechanisms is crucial for writing robust
            code.
          </p>
        </div>

        {/* typeof Operator */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔤 typeof Operator
          </h2>

          <ConceptCard title="typeof Returns" icon="📋" color="orange">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>"string"</strong> - for strings
              </li>
              <li>
                <strong>"number"</strong> - for numbers (including NaN!)
              </li>
              <li>
                <strong>"bigint"</strong> - for BigInt values
              </li>
              <li>
                <strong>"boolean"</strong> - for true/false
              </li>
              <li>
                <strong>"undefined"</strong> - for undefined
              </li>
              <li>
                <strong>"object"</strong> - for objects, arrays, null (bug!)
              </li>
              <li>
                <strong>"function"</strong> - for functions
              </li>
              <li>
                <strong>"symbol"</strong> - for symbols
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="typeof for All Types"
              initialCode={`// Primitives
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 42n:", typeof 42n); // "bigint"
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof Symbol():", typeof Symbol()); // "symbol"

// Special cases
console.log("typeof null:", typeof null); // "object" (FAMOUS BUG!)
console.log("typeof NaN:", typeof NaN); // "number" (surprising!)
console.log("typeof Infinity:", typeof Infinity); // "number"

// Objects
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object"
console.log("typeof new Date():", typeof new Date()); // "object"

// Functions
console.log("typeof function(){}:", typeof function(){}); // "function"
console.log("typeof class{}:", typeof class{}); // "function"

// Undeclared variable
console.log("typeof undeclaredVar:", typeof undeclaredVar); // "undefined" (no error!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="typeof Limitations and Solutions"
              initialCode={`// Problem: typeof can't distinguish between objects
console.log("typeof []:", typeof []); // "object"
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof null:", typeof null); // "object"

// Solution 1: Array.isArray()
console.log("\\nArray.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray({}):", Array.isArray({})); // false

// Solution 2: instanceof
console.log("\\n[] instanceof Array:", [] instanceof Array); // true
console.log("{} instanceof Object:", {} instanceof Object); // true

// Solution 3: Object.prototype.toString.call()
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log("\\nAccurate type detection:");
console.log("getType([]):", getType([])); // "Array"
console.log("getType({}):", getType({})); // "Object"
console.log("getType(null):", getType(null)); // "Null"
console.log("getType(new Date()):", getType(new Date())); // "Date"
console.log("getType(/regex/):", getType(/regex/)); // "RegExp"`}
            />
          </div>
        </section>

        {/* instanceof Operator */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 instanceof Operator
          </h2>

          <ConceptCard title="instanceof Checks" icon="🎯" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Prototype chain:</strong> Checks if object is instance
                of constructor
              </li>
              <li>
                <strong>Works with:</strong> Objects, arrays, custom classes
              </li>
              <li>
                <strong>Doesn't work with:</strong> Primitives (not objects)
              </li>
              <li>
                <strong>Returns:</strong> true or false
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="instanceof Examples"
              initialCode={`// Built-in types
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("[] instanceof Object:", [] instanceof Object); // true (Array inherits from Object)

console.log("{} instanceof Object:", {} instanceof Object); // true
console.log("{} instanceof Array:", {} instanceof Array); // false

console.log("new Date() instanceof Date:", new Date() instanceof Date); // true
console.log("/regex/ instanceof RegExp:", /regex/ instanceof RegExp); // true

// Functions
function MyFunc() {}
console.log("MyFunc instanceof Function:", MyFunc instanceof Function); // true

// Custom classes
class Animal {}
class Dog extends Animal {}

let dog = new Dog();
console.log("dog instanceof Dog:", dog instanceof Dog); // true
console.log("dog instanceof Animal:", dog instanceof Animal); // true (inheritance!)
console.log("dog instanceof Object:", dog instanceof Object); // true

// Primitives return false
console.log("'hello' instanceof String:", "hello" instanceof String); // false
console.log("42 instanceof Number:", 42 instanceof Number); // false
console.log("true instanceof Boolean:", true instanceof Boolean); // false`}
            />
          </div>
        </section>

        {/* Type Coercion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 Type Coercion (Implicit Conversion)
          </h2>

          <ConceptCard title="Coercion Rules" icon="⚙️" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Implicit:</strong> JavaScript converts types
                automatically
              </li>
              <li>
                <strong>Contexts:</strong> Operators, comparisons, conditions
              </li>
              <li>
                <strong>String coercion:</strong> + operator with string
              </li>
              <li>
                <strong>Number coercion:</strong> Math operators (-, *, /, %)
              </li>
              <li>
                <strong>Boolean coercion:</strong> Logical contexts (if, while,
                etc.)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="String Coercion (+ Operator)"
              initialCode={`// + with string converts everything to string
console.log("5 + '5':", 5 + "5"); // "55"
console.log("'Hello' + 42:", "Hello" + 42); // "Hello42"
console.log("'Sum: ' + (5 + 10):", "Sum: " + (5 + 10)); // "Sum: 15"

// All types to string
console.log("true + 'value':", true + "value"); // "truevalue"
console.log("null + 'value':", null + "value"); // "nullvalue"
console.log("undefined + 'value':", undefined + "value"); // "undefinedvalue"
console.log("[1,2] + 'value':", [1,2] + "value"); // "1,2value"
console.log("{} + 'value':", {} + "value"); // "[object Object]value"

// Template literals always coerce to string
let num = 42;
console.log(\`The answer is \${num}\`); // "The answer is 42"

// String concatenation is left-to-right
console.log("1 + 2 + '3':", 1 + 2 + "3"); // "33" (3 + "3")
console.log("'1' + 2 + 3:", "1" + 2 + 3); // "123" ("1" + 2 = "12" + 3)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number Coercion (Math Operators)"
              initialCode={`// Math operators (except +) convert to number
console.log("'5' - 2:", "5" - 2); // 3
console.log("'10' * 2:", "10" * 2); // 20
console.log("'20' / 4:", "20" / 4); // 5
console.log("'10' % 3:", "10" % 3); // 1

// Unary + converts to number
console.log("+'42':", +"42"); // 42
console.log("+'-42':", +"-42"); // -42
console.log("+'3.14':", +"3.14"); // 3.14
console.log("+'hello':", +"hello"); // NaN

// Other types
console.log("'5' - true:", "5" - true); // 4 (true becomes 1)
console.log("'5' - false:", "5" - false); // 5 (false becomes 0)
console.log("'5' - null:", "5" - null); // 5 (null becomes 0)
console.log("'5' - undefined:", "5" - undefined); // NaN

// Arrays and objects
console.log("'10' - [5]:", "10" - [5]); // 5 ([5] becomes "5" then 5)
console.log("'10' - [1,2]:", "10" - [1,2]); // NaN (can't convert [1,2])
console.log("'10' - {}:", "10" - {}); // NaN`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Boolean Coercion"
              initialCode={`// In boolean context, values are coerced to true/false

// Falsy values (only 8!)
console.log("Boolean(false):", Boolean(false)); // false
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(-0):", Boolean(-0)); // false
console.log("Boolean(0n):", Boolean(0n)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false

// Everything else is truthy
console.log("\\nTruthy values:");
console.log("Boolean('0'):", Boolean("0")); // true (string!)
console.log("Boolean('false'):", Boolean("false")); // true (string!)
console.log("Boolean([]):", Boolean([])); // true (empty array!)
console.log("Boolean({}):", Boolean({})); // true (empty object!)
console.log("Boolean(function(){}):", Boolean(function(){})); // true

// Logical operators use coercion
console.log("\\nLogical operators:");
console.log("!0:", !0); // true
console.log("!!'hello':", !!"hello"); // true (double NOT trick)
console.log("null || 'default':", null || "default"); // "default"
console.log("'value' || 'default':", "value" || "default"); // "value"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="The == vs === Comparison"
              initialCode={`// == allows type coercion, === doesn't

// Number vs String
console.log("5 == '5':", 5 == "5"); // true (coerced)
console.log("5 === '5':", 5 === "5"); // false (different types)

// Boolean coercion
console.log("1 == true:", 1 == true); // true
console.log("0 == false:", 0 == false); // true
console.log("1 === true:", 1 === true); // false

// null and undefined
console.log("null == undefined:", null == undefined); // true (special rule)
console.log("null === undefined:", null === undefined); // false

// Null/undefined vs others
console.log("null == 0:", null == 0); // false (special case)
console.log("undefined == 0:", undefined == 0); // false

// Arrays and objects
console.log("[1] == 1:", [1] == 1); // true ([1] becomes "1" then 1)
console.log("[] == 0:", [] == 0); // true ([] becomes "" then 0)
console.log("[] == false:", [] == false); // true
console.log("[] == []:", [] == []); // false (different references!)

// Always use === unless you specifically need coercion!
console.log("\\nBest practice: use ===");
console.log("5 === 5:", 5 === 5); // true
console.log("5 !== '5':", 5 !== "5"); // true`}
            />
          </div>
        </section>

        {/* Explicit Conversion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✨ Explicit Type Conversion
          </h2>

          <ConceptCard title="Conversion Functions" icon="🔧" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>String():</strong> Convert any value to string
              </li>
              <li>
                <strong>Number():</strong> Convert any value to number
              </li>
              <li>
                <strong>Boolean():</strong> Convert any value to boolean
              </li>
              <li>
                <strong>parseInt():</strong> Parse string to integer
              </li>
              <li>
                <strong>parseFloat():</strong> Parse string to float
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="String Conversion Methods"
              initialCode={`// String() function
console.log("String(123):", String(123)); // "123"
console.log("String(true):", String(true)); // "true"
console.log("String(null):", String(null)); // "null"
console.log("String(undefined):", String(undefined)); // "undefined"
console.log("String([1,2,3]):", String([1,2,3])); // "1,2,3"
console.log("String({a:1}):", String({a:1})); // "[object Object]"

// .toString() method (doesn't work on null/undefined)
console.log("(123).toString():", (123).toString()); // "123"
console.log("(true).toString():", (true).toString()); // "true"
console.log("[1,2,3].toString():", [1,2,3].toString()); // "1,2,3"

// toString with radix (for numbers)
console.log("(42).toString(2):", (42).toString(2)); // "101010" (binary)
console.log("(42).toString(16):", (42).toString(16)); // "2a" (hex)

// Template literal (always converts)
console.log(\`Value: \${null}\`); // "Value: null"
console.log(\`Array: \${[1,2,3]}\`); // "Array: 1,2,3"

// Concatenation trick
console.log("42 + '':", 42 + ""); // "42"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number Conversion Methods"
              initialCode={`// Number() function
console.log("Number('123'):", Number("123")); // 123
console.log("Number('3.14'):", Number("3.14")); // 3.14
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
console.log("Number(null):", Number(null)); // 0
console.log("Number(undefined):", Number(undefined)); // NaN
console.log("Number(''):", Number("")); // 0
console.log("Number('hello'):", Number("hello")); // NaN

// parseInt() - parse to integer
console.log("parseInt('123'):", parseInt("123")); // 123
console.log("parseInt('123.99'):", parseInt("123.99")); // 123 (truncates)
console.log("parseInt('123px'):", parseInt("123px")); // 123 (stops at non-digit)
console.log("parseInt('abc123'):", parseInt("abc123")); // NaN

// parseInt with radix (base)
console.log("parseInt('101', 2):", parseInt("101", 2)); // 5 (binary)
console.log("parseInt('FF', 16):", parseInt("FF", 16)); // 255 (hex)

// parseFloat()
console.log("parseFloat('3.14'):", parseFloat("3.14")); // 3.14
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14

// Unary + operator
console.log("+'42':", +"42"); // 42
console.log("+true:", +true); // 1`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Boolean Conversion Methods"
              initialCode={`// Boolean() function
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean({}):", Boolean({})); // true
console.log("Boolean([]):", Boolean([])); // true
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// Double NOT (!!) trick
console.log("!!'text':", !!"text"); // true
console.log("!!0:", !!0); // false
console.log("!![]:", !![]); // true

// Comparison coercion
console.log("'5' > 3:", "5" > 3); // true (string becomes number)
console.log("'10' < '9':", "10" < "9"); // true (string comparison!)
console.log("'10' < 9:", "10" < 9); // false (string becomes number)

// Best practice: explicit conversion
let userInput = "42";
let num = Number(userInput); // Clear intent
console.log("Converted:", num, typeof num);`}
            />
          </div>
        </section>

        {/* Special Conversion Cases */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚠️ Special Conversion Cases
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ToPrimitive Abstract Operation"
              initialCode={`// Objects have [Symbol.toPrimitive] method
let obj = {
  value: 42,
  [Symbol.toPrimitive](hint) {
    console.log("Hint:", hint);
    if (hint === "number") return this.value;
    if (hint === "string") return \`Value: \${this.value}\`;
    return this.value;
  }
};

console.log("Number context:", +obj); // hint: "number"
console.log("String context:", String(obj)); // hint: "string"
console.log("Default context:", obj + ""); // hint: "default"

// Default toString and valueOf
let obj2 = {
  toString() {
    return "I'm a string";
  },
  valueOf() {
    return 100;
  }
};

console.log("\\nWith toString and valueOf:");
console.log("String(obj2):", String(obj2)); // Uses toString
console.log("+obj2:", +obj2); // Uses valueOf
console.log("obj2 + '':", obj2 + ""); // Uses valueOf, then toString

// Array conversion
let arr = [1, 2, 3];
console.log("\\nArray conversion:");
console.log("String(arr):", String(arr)); // "1,2,3"
console.log("Number(arr):", Number(arr)); // NaN
console.log("Number([5]):", Number([5])); // 5 (single element!)
console.log("Number([]):", Number([])); // 0 (empty array!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Tricky Coercion Examples"
              initialCode={`// Addition edge cases
console.log("[] + []:", [] + []); // ""
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("{} + []:", {} + []); // "[object Object]" or 0 (context dependent!)
console.log("{} + {}:", {} + {}); // "[object Object][object Object]" or NaN

// Subtraction edge cases
console.log("[] - []:", [] - []); // 0
console.log("[5] - [2]:", [5] - [2]); // 3
console.log("[1,2] - [1]:", [1,2] - [1]); // NaN

// Comparison edge cases
console.log("null > 0:", null > 0); // false
console.log("null == 0:", null == 0); // false
console.log("null >= 0:", null >= 0); // true (!?)

console.log("undefined > 0:", undefined > 0); // false
console.log("undefined < 0:", undefined < 0); // false
console.log("undefined == 0:", undefined == 0); // false

// Boolean edge cases
console.log("true + true:", true + true); // 2
console.log("true + false:", true + false); // 1
console.log("[] == ![]:", [] == ![]); // true (!?)

// The famous ones
console.log("typeof NaN:", typeof NaN); // "number"
console.log("NaN === NaN:", NaN === NaN); // false
console.log("typeof null:", typeof null); // "object"`}
            />
          </div>
        </section>

        {/* Checking Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔍 Specialized Type Checking
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Array and Number Checks"
              initialCode={`// Array.isArray() - reliable array check
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray({}):", Array.isArray({})); // false
console.log("Array.isArray('array'):", Array.isArray("array")); // false

// Number checks
console.log("\\nNumber.isNaN() vs isNaN():");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (strict)
console.log("isNaN('hello'):", isNaN("hello")); // true (coerces!)

console.log("\\nNumber.isFinite() vs isFinite():");
console.log("Number.isFinite(100):", Number.isFinite(100)); // true
console.log("Number.isFinite('100'):", Number.isFinite("100")); // false (strict)
console.log("isFinite('100'):", isFinite("100")); // true (coerces!)

console.log("\\nNumber.isInteger():");
console.log("Number.isInteger(42):", Number.isInteger(42)); // true
console.log("Number.isInteger(42.0):", Number.isInteger(42.0)); // true
console.log("Number.isInteger(42.1):", Number.isInteger(42.1)); // false

console.log("\\nNumber.isSafeInteger():");
console.log("Number.isSafeInteger(42):", Number.isSafeInteger(42)); // true
console.log("Number.isSafeInteger(2**53):", Number.isSafeInteger(2**53)); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object.prototype.toString - Universal Type Check"
              initialCode={`// Most reliable type checking
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

// Test all types
console.log("getType('hello'):", getType("hello")); // String
console.log("getType(42):", getType(42)); // Number
console.log("getType(42n):", getType(42n)); // BigInt
console.log("getType(true):", getType(true)); // Boolean
console.log("getType(undefined):", getType(undefined)); // Undefined
console.log("getType(null):", getType(null)); // Null
console.log("getType(Symbol()):", getType(Symbol())); // Symbol

console.log("\\nObjects:");
console.log("getType({}):", getType({})); // Object
console.log("getType([]):", getType([])); // Array
console.log("getType(function(){}):", getType(function(){})); // Function
console.log("getType(new Date()):", getType(new Date())); // Date
console.log("getType(/regex/):", getType(/regex/)); // RegExp
console.log("getType(new Map()):", getType(new Map())); // Map
console.log("getType(new Set()):", getType(new Set())); // Set
console.log("getType(new Error()):", getType(new Error())); // Error

// Custom class
class MyClass {}
console.log("getType(new MyClass()):", getType(new MyClass())); // Object`}
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
                  1. Always use === instead of ==
                </strong>
                <p className="ml-4 mt-1">
                  Avoid implicit coercion confusion. Only use == when comparing
                  with null/undefined.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use explicit conversion functions
                </strong>
                <p className="ml-4 mt-1">
                  Number(), String(), Boolean() make your intent clear.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use Array.isArray() for arrays
                </strong>
                <p className="ml-4 mt-1">
                  typeof returns "object" for arrays. Use Array.isArray()
                  instead.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use Number.isNaN() over isNaN()
                </strong>
                <p className="ml-4 mt-1">
                  Number.isNaN() doesn't coerce values, making it more reliable.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Be careful with null and undefined
                </strong>
                <p className="ml-4 mt-1">
                  Use === to distinguish them, or == null to check for both.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Remember typeof null === "object"
                </strong>
                <p className="ml-4 mt-1">
                  This is a bug that won't be fixed. Use value === null to check
                  for null.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Type Checking Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Check For
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Method
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Primitive type</td>
                  <td className="px-3 py-2 font-mono text-sm">typeof</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    typeof x === "string"
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Array</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Array.isArray()
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Array.isArray(x)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">null</td>
                  <td className="px-3 py-2 font-mono text-sm">===</td>
                  <td className="px-3 py-2 font-mono text-sm">x === null</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">undefined</td>
                  <td className="px-3 py-2 font-mono text-sm">===</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    x === undefined
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">null or undefined</td>
                  <td className="px-3 py-2 font-mono text-sm">==</td>
                  <td className="px-3 py-2 font-mono text-sm">x == null</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">NaN</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Number.isNaN()
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Number.isNaN(x)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Finite number</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Number.isFinite()
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Number.isFinite(x)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Integer</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Number.isInteger()
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Number.isInteger(x)
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Instance</td>
                  <td className="px-3 py-2 font-mono text-sm">instanceof</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    x instanceof Date
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Exact type</td>
                  <td className="px-3 py-2 font-mono text-sm">
                    Object.prototype.toString
                  </td>
                  <td className="px-3 py-2 font-mono text-sm">getType(x)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
