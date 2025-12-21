"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function NumberMathPage() {
  return (
    <SectionLayout
      title="4.1 Number & Math - Complete Coverage"
      description="Master ALL Number properties, methods, Math methods (40+), and BigInt"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔢 Complete Number & Math Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            This section covers <strong>EVERY</strong> number-related method and
            property in JavaScript: Number static properties (8), Number methods
            (12), Math properties (8), Math methods (34), and BigInt methods
            (5).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            {[
              "Number Props (8)",
              "Number Methods (12)",
              "Math Props (8)",
              "Math Methods (34)",
              "BigInt Methods (5)",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-yellow-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Number Static Properties */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 Number Static Properties (8)
          </h2>

          <ConceptCard title="Number Constants" icon="🔢" color="blue">
            <p className="mb-2">
              JavaScript provides 8 static properties on the Number object for
              important numeric constants and limits.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Number.EPSILON"
              initialCode={`// EPSILON - smallest difference between two representable numbers
console.log("Number.EPSILON:", Number.EPSILON);
console.log("Value:", Number.EPSILON.toExponential()); // ~2.22e-16

// Why it exists: floating point precision
console.log("\\n0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!

// Use EPSILON for equality comparison
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log("\\nWith EPSILON:");
console.log("areEqual(0.1 + 0.2, 0.3):", areEqual(0.1 + 0.2, 0.3)); // true!

// Practical use
const result = 0.1 + 0.2;
const expected = 0.3;

if (Math.abs(result - expected) < Number.EPSILON) {
  console.log("Numbers are equal (within precision)");
}

// Without EPSILON (wrong)
if (0.1 + 0.2 === 0.3) {
  console.log("This won't run!");
} else {
  console.log("Direct comparison fails");
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number.MAX_VALUE and Number.MIN_VALUE"
              initialCode={`// MAX_VALUE - largest positive number
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Scientific:", Number.MAX_VALUE.toExponential()); // ~1.798e+308

// MIN_VALUE - smallest positive number (not most negative!)
console.log("\\nNumber.MIN_VALUE:", Number.MIN_VALUE);
console.log("Scientific:", Number.MIN_VALUE.toExponential()); // ~5e-324

// MIN_VALUE is positive!
console.log("\\nMIN_VALUE > 0:", Number.MIN_VALUE > 0); // true

// Beyond MAX_VALUE = Infinity
console.log("\\nBeyond MAX_VALUE:");
console.log("MAX_VALUE * 2:", Number.MAX_VALUE * 2); // Infinity

// Below MIN_VALUE = 0 (underflow)
console.log("\\nBelow MIN_VALUE:");
console.log("MIN_VALUE / 2:", Number.MIN_VALUE / 2); // 0

// Range of representable numbers
console.log("\\nRange:");
console.log("Positive: MIN_VALUE to MAX_VALUE");
console.log("Negative: -MAX_VALUE to -MIN_VALUE");

// Practical: check if in range
function isInRange(num) {
  return Math.abs(num) <= Number.MAX_VALUE && 
         (num === 0 || Math.abs(num) >= Number.MIN_VALUE);
}

console.log("\\nisInRange(100):", isInRange(100));
console.log("isInRange(Infinity):", isInRange(Infinity));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number Safe Integer Range"
              initialCode={`// MAX_SAFE_INTEGER - largest safe integer (2^53 - 1)
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Value:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Binary:", (2 ** 53 - 1)); // Same

// MIN_SAFE_INTEGER - smallest safe integer (-(2^53 - 1))
console.log("\\nNumber.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Value:", Number.MIN_SAFE_INTEGER); // -9007199254740991

// Why "safe"? Beyond this, integers lose precision
console.log("\\nPrecision loss beyond safe range:");
console.log("MAX_SAFE_INTEGER + 1:", Number.MAX_SAFE_INTEGER + 1); // OK
console.log("MAX_SAFE_INTEGER + 2:", Number.MAX_SAFE_INTEGER + 2); // OK
console.log("MAX_SAFE_INTEGER + 3:", Number.MAX_SAFE_INTEGER + 3); // SAME as +1!

// Check equality
const big1 = Number.MAX_SAFE_INTEGER + 1;
const big2 = Number.MAX_SAFE_INTEGER + 3;
console.log("\\n+1 === +3:", big1 === big2); // false (still different)

const big3 = Number.MAX_SAFE_INTEGER + 100;
const big4 = Number.MAX_SAFE_INTEGER + 102;
console.log("+100 === +102:", big3 === big4); // true! (LOST PRECISION)

// Use BigInt for larger integers
console.log("\\nWith BigInt:");
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + 100n;
console.log("BigInt value:", bigInt); // Exact!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number.POSITIVE_INFINITY, NEGATIVE_INFINITY, NaN"
              initialCode={`// POSITIVE_INFINITY
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Same as Infinity:", Number.POSITIVE_INFINITY === Infinity); // true

// NEGATIVE_INFINITY
console.log("\\nNumber.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Same as -Infinity:", Number.NEGATIVE_INFINITY === -Infinity); // true

// Operations resulting in Infinity
console.log("\\n1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity
console.log("Number.MAX_VALUE * 2:", Number.MAX_VALUE * 2); // Infinity

// Number.NaN
console.log("\\nNumber.NaN:", Number.NaN);
console.log("Same as NaN:", Number.NaN === NaN); // false! (NaN ≠ NaN)
console.log("Object.is(Number.NaN, NaN):", Object.is(Number.NaN, NaN)); // true

// Operations resulting in NaN
console.log("\\n0 / 0:", 0 / 0); // NaN
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN
console.log("parseInt('hello'):", parseInt("hello")); // NaN

// Checking for special values
console.log("\\nChecking values:");
console.log("isFinite(100):", isFinite(100)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("isNaN(100):", isNaN(100)); // false`}
            />
          </div>
        </section>

        {/* Number Static Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Number Static Methods (6)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Number.isNaN() - Strict NaN Check"
              initialCode={`// Number.isNaN() - strict check (doesn't coerce)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN(0/0):", Number.isNaN(0/0)); // true

// Doesn't coerce (unlike global isNaN)
console.log("\\nNo coercion:");
console.log("Number.isNaN('NaN'):", Number.isNaN("NaN")); // false
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false
console.log("Number.isNaN(undefined):", Number.isNaN(undefined)); // false

// Compare with global isNaN (coerces to number first)
console.log("\\nGlobal isNaN (with coercion):");
console.log("isNaN('hello'):", isNaN("hello")); // true (coerces)
console.log("isNaN('NaN'):", isNaN("NaN")); // true (coerces)
console.log("isNaN(undefined):", isNaN(undefined)); // true (coerces)

// Only true for actual NaN value
console.log("\\nStrict checking:");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN(Number.NaN):", Number.isNaN(Number.NaN)); // true
console.log("Number.isNaN(0 / 0):", Number.isNaN(0 / 0)); // true

// Best practice: use Number.isNaN()
function safeCalculate(a, b) {
  const result = a / b;
  if (Number.isNaN(result)) {
    return "Invalid calculation";
  }
  return result;
}

console.log("\\n0 / 0:", safeCalculate(0, 0));
console.log("10 / 2:", safeCalculate(10, 2));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number.isFinite() - Strict Finite Check"
              initialCode={`// Number.isFinite() - check if finite number
console.log("Number.isFinite(100):", Number.isFinite(100)); // true
console.log("Number.isFinite(0):", Number.isFinite(0)); // true
console.log("Number.isFinite(-42):", Number.isFinite(-42)); // true
console.log("Number.isFinite(3.14):", Number.isFinite(3.14)); // true

// Not finite
console.log("\\nNot finite:");
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isFinite(-Infinity):", Number.isFinite(-Infinity)); // false
console.log("Number.isFinite(NaN):", Number.isFinite(NaN)); // false

// Doesn't coerce (strict)
console.log("\\nNo coercion:");
console.log("Number.isFinite('100'):", Number.isFinite("100")); // false
console.log("Number.isFinite(null):", Number.isFinite(null)); // false

// Compare with global isFinite (coerces)
console.log("\\nGlobal isFinite (with coercion):");
console.log("isFinite('100'):", isFinite("100")); // true (coerces)
console.log("isFinite(null):", isFinite(null)); // true (null -> 0)

// Practical: validation
function validateNumber(value) {
  if (!Number.isFinite(value)) {
    return "Not a valid finite number";
  }
  return "Valid number: " + value;
}

console.log("\\n" + validateNumber(42));
console.log(validateNumber(Infinity));
console.log(validateNumber("42")); // Not valid (string)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number.isInteger() and Number.isSafeInteger()"
              initialCode={`// Number.isInteger() - check if integer
console.log("Number.isInteger(42):", Number.isInteger(42)); // true
console.log("Number.isInteger(42.0):", Number.isInteger(42.0)); // true (same as 42)
console.log("Number.isInteger(42.1):", Number.isInteger(42.1)); // false
console.log("Number.isInteger(-42):", Number.isInteger(-42)); // true

// Not integers
console.log("\\nNot integers:");
console.log("Number.isInteger(NaN):", Number.isInteger(NaN)); // false
console.log("Number.isInteger(Infinity):", Number.isInteger(Infinity)); // false
console.log("Number.isInteger('42'):", Number.isInteger("42")); // false

// Number.isSafeInteger() - check if safe integer
console.log("\\nNumber.isSafeInteger(42):", Number.isSafeInteger(42)); // true
console.log("Number.isSafeInteger(2 ** 53 - 1):", Number.isSafeInteger(2 ** 53 - 1)); // true
console.log("Number.isSafeInteger(2 ** 53):", Number.isSafeInteger(2 ** 53)); // false

// Not safe
console.log("\\nNot safe:");
console.log("Number.isSafeInteger(42.1):", Number.isSafeInteger(42.1)); // false (not integer)
console.log("Number.isSafeInteger('42'):", Number.isSafeInteger("42")); // false (not number)
console.log("Number.isSafeInteger(Infinity):", Number.isSafeInteger(Infinity)); // false

// Check safe range
console.log("\\nSafe range:");
console.log("MIN:", Number.MIN_SAFE_INTEGER);
console.log("MAX:", Number.MAX_SAFE_INTEGER);

// When to use BigInt
const bigNum = 9007199254740992; // Beyond safe range
console.log("\\nBeyond safe:", Number.isSafeInteger(bigNum)); // false
console.log("Use BigInt:", 9007199254740992n); // Exact!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number.parseInt() and Number.parseFloat()"
              initialCode={`// Number.parseInt(string, radix)
console.log("Number.parseInt('42'):", Number.parseInt("42")); // 42
console.log("Number.parseInt('42px'):", Number.parseInt("42px")); // 42
console.log("Number.parseInt('  42  '):", Number.parseInt("  42  ")); // 42

// With radix (base)
console.log("\\nWith radix:");
console.log("Binary: parseInt('101', 2):", Number.parseInt("101", 2)); // 5
console.log("Octal: parseInt('77', 8):", Number.parseInt("77", 8)); // 63
console.log("Hex: parseInt('FF', 16):", Number.parseInt("FF", 16)); // 255

// Leading zeros (always specify radix!)
console.log("\\nparseInt('010'):", Number.parseInt("010")); // 10
console.log("parseInt('010', 8):", Number.parseInt("010", 8)); // 8
console.log("parseInt('010', 10):", Number.parseInt("010", 10)); // 10

// Can't parse
console.log("\\nCannot parse:");
console.log("parseInt('abc'):", Number.parseInt("abc")); // NaN
console.log("parseInt(''):", Number.parseInt("")); // NaN

// Number.parseFloat(string)
console.log("\\nNumber.parseFloat('3.14'):", Number.parseFloat("3.14")); // 3.14
console.log("parseFloat('3.14abc'):", Number.parseFloat("3.14abc")); // 3.14
console.log("parseFloat('.5'):", Number.parseFloat(".5")); // 0.5
console.log("parseFloat('5.'):", Number.parseFloat("5.")); // 5

// Scientific notation
console.log("\\nScientific:");
console.log("parseFloat('1.5e3'):", Number.parseFloat("1.5e3")); // 1500

// Same as global functions
console.log("\\nSame as global:");
console.log("Number.parseInt === parseInt:", Number.parseInt === parseInt); // true
console.log("Number.parseFloat === parseFloat:", Number.parseFloat === parseFloat); // true`}
            />
          </div>
        </section>

        {/* Number Instance Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Number Instance Methods (6)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="toExponential(), toFixed(), toPrecision()"
              initialCode={`const num = 12345.6789;

// toExponential(fractionDigits) - scientific notation
console.log("toExponential():", num.toExponential()); // "1.23456789e+4"
console.log("toExponential(2):", num.toExponential(2)); // "1.23e+4"
console.log("toExponential(4):", num.toExponential(4)); // "1.2346e+4"

// toFixed(digits) - fixed decimal places
console.log("\\ntoFixed():", num.toFixed()); // "12346" (rounds, no decimals)
console.log("toFixed(2):", num.toFixed(2)); // "12345.68"
console.log("toFixed(5):", num.toFixed(5)); // "12345.67890"

// toPrecision(precision) - significant digits
console.log("\\ntoPrecision():", num.toPrecision()); // "12345.6789"
console.log("toPrecision(3):", num.toPrecision(3)); // "1.23e+4"
console.log("toPrecision(6):", num.toPrecision(6)); // "12345.7"
console.log("toPrecision(10):", num.toPrecision(10)); // "12345.67890"

// All return strings!
console.log("\\nReturn type:");
console.log("typeof toFixed:", typeof num.toFixed(2)); // "string"

// Convert back to number
console.log("\\nBack to number:");
console.log("parseFloat:", parseFloat(num.toFixed(2))); // 12345.68
console.log("Number():", Number(num.toFixed(2))); // 12345.68
console.log("Unary +:", +num.toFixed(2)); // 12345.68

// Practical: display prices
const price = 19.5;
console.log("\\nPrice: $" + price.toFixed(2)); // "$19.50"

const scientificNum = 0.0000123;
console.log("Scientific:", scientificNum.toExponential(2)); // "1.23e-5"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toString(), toLocaleString(), valueOf()"
              initialCode={`const num = 255;

// toString() - convert to string
console.log("toString():", num.toString()); // "255"
console.log("Type:", typeof num.toString()); // "string"

// toString(radix) - with base 2-36
console.log("\\nDifferent bases:");
console.log("Binary (2):", num.toString(2)); // "11111111"
console.log("Octal (8):", num.toString(8)); // "377"
console.log("Hex (16):", num.toString(16)); // "ff"
console.log("Base 36:", num.toString(36)); // "73"

// Decimal places
const decimal = 3.14159;
console.log("\\nDecimal:", decimal.toString()); // "3.14159"

// toLocaleString() - locale-aware formatting
const bigNum = 1234567.89;
console.log("\\ntoLocaleString():", bigNum.toLocaleString()); // "1,234,567.89" (US)
console.log("German:", bigNum.toLocaleString("de-DE")); // "1.234.567,89"
console.log("French:", bigNum.toLocaleString("fr-FR")); // "1 234 567,89"

// Currency formatting
console.log("\\nCurrency:");
console.log("USD:", bigNum.toLocaleString("en-US", { 
  style: "currency", 
  currency: "USD" 
}));

// valueOf() - get primitive value
const numObj = new Number(42);
console.log("\\nvalueOf():", numObj.valueOf()); // 42
console.log("Type:", typeof numObj.valueOf()); // "number"

// Auto-conversion
console.log("\\nAuto:", numObj + 10); // 52 (auto-converted)`}
            />
          </div>
        </section>

        {/* Math Properties */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📐 Math Properties (8)
          </h2>

          <ConceptCard title="Math Constants" icon="π" color="purple">
            <p className="mb-2">
              The Math object provides 8 mathematical constants as static
              properties.
            </p>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="All Math Properties"
              initialCode={`// Math.E - Euler's number
console.log("Math.E:", Math.E); // 2.718281828459045

// Math.PI - Pi
console.log("Math.PI:", Math.PI); // 3.141592653589793

// Natural logarithms
console.log("\\nLogarithm constants:");
console.log("Math.LN2:", Math.LN2); // ln(2) = 0.693...
console.log("Math.LN10:", Math.LN10); // ln(10) = 2.302...

// Logarithm bases
console.log("\\nLogarithm bases:");
console.log("Math.LOG2E:", Math.LOG2E); // log₂(e) = 1.442...
console.log("Math.LOG10E:", Math.LOG10E); // log₁₀(e) = 0.434...

// Square roots
console.log("\\nSquare roots:");
console.log("Math.SQRT2:", Math.SQRT2); // √2 = 1.414...
console.log("Math.SQRT1_2:", Math.SQRT1_2); // √(1/2) = 0.707...

// Practical examples
console.log("\\nCircle area (r=5):");
const radius = 5;
const area = Math.PI * radius ** 2;
console.log("Area:", area.toFixed(2));

console.log("\\nCircle circumference:");
const circumference = 2 * Math.PI * radius;
console.log("Circumference:", circumference.toFixed(2));

// Compound interest with e
const principal = 1000;
const rate = 0.05;
const time = 10;
const amount = principal * Math.E ** (rate * time);
console.log("\\nContinuous compound:", amount.toFixed(2));`}
            />
          </div>
        </section>

        {/* Math Methods - Basic */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🧮 Math Methods - Basic (12)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Math.abs(), Math.sign(), Math.round()"
              initialCode={`// Math.abs(x) - absolute value
console.log("Math.abs(5):", Math.abs(5)); // 5
console.log("Math.abs(-5):", Math.abs(-5)); // 5
console.log("Math.abs(0):", Math.abs(0)); // 0
console.log("Math.abs(-0):", Math.abs(-0)); // 0
console.log("Math.abs('-5'):", Math.abs("-5")); // 5 (coerces)

// Math.sign(x) - ES2015 - sign of number
console.log("\\nMath.sign(5):", Math.sign(5)); // 1 (positive)
console.log("Math.sign(-5):", Math.sign(-5)); // -1 (negative)
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.sign(-0):", Math.sign(-0)); // -0
console.log("Math.sign(NaN):", Math.sign(NaN)); // NaN

// Math.round(x) - round to nearest integer
console.log("\\nMath.round(4.4):", Math.round(4.4)); // 4
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.round(4.6):", Math.round(4.6)); // 5
console.log("Math.round(-4.4):", Math.round(-4.4)); // -4
console.log("Math.round(-4.5):", Math.round(-4.5)); // -4 (rounds toward +∞)
console.log("Math.round(-4.6):", Math.round(-4.6)); // -5

// Practical: distance calculation
function distance(x1, y1, x2, y2) {
  return Math.abs(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
}

console.log("\\nDistance (0,0) to (3,4):", distance(0, 0, 3, 4));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Math.ceil(), Math.floor(), Math.trunc()"
              initialCode={`// Math.ceil(x) - round up
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.ceil(4.9):", Math.ceil(4.9)); // 5
console.log("Math.ceil(-4.1):", Math.ceil(-4.1)); // -4 (toward +∞)
console.log("Math.ceil(-4.9):", Math.ceil(-4.9)); // -4

// Math.floor(x) - round down
console.log("\\nMath.floor(4.1):", Math.floor(4.1)); // 4
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.floor(-4.1):", Math.floor(-4.1)); // -5 (toward -∞)
console.log("Math.floor(-4.9):", Math.floor(-4.9)); // -5

// Math.trunc(x) - ES2015 - remove decimal part
console.log("\\nMath.trunc(4.1):", Math.trunc(4.1)); // 4
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
console.log("Math.trunc(-4.1):", Math.trunc(-4.1)); // -4 (toward 0)
console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4

// Key difference: negative numbers
console.log("\\nNegative number comparison:");
console.log("floor(-4.1):", Math.floor(-4.1)); // -5
console.log("trunc(-4.1):", Math.trunc(-4.1)); // -4
console.log("ceil(-4.1):", Math.ceil(-4.1)); // -4

// Practical uses
console.log("\\nPractical:");
console.log("Pages needed for 47 items (10/page):", Math.ceil(47 / 10)); // 5
console.log("Completed sets of 10:", Math.floor(47 / 10)); // 4
console.log("Integer part of price:", Math.trunc(19.99)); // 19`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Math.min(), Math.max(), Math.pow()"
              initialCode={`// Math.min(...values) - smallest value
console.log("Math.min(5, 10, 3, 8):", Math.min(5, 10, 3, 8)); // 3
console.log("Math.min(-5, -10):", Math.min(-5, -10)); // -10
console.log("Math.min():", Math.min()); // Infinity (no args)

// With array (use spread)
const numbers = [5, 10, 3, 8, 1, 15];
console.log("\\nWith array:");
console.log("Math.min(...numbers):", Math.min(...numbers)); // 1

// Math.max(...values) - largest value
console.log("\\nMath.max(5, 10, 3, 8):", Math.max(5, 10, 3, 8)); // 10
console.log("Math.max(-5, -10):", Math.max(-5, -10)); // -5
console.log("Math.max():", Math.max()); // -Infinity (no args)
console.log("Math.max(...numbers):", Math.max(...numbers)); // 15

// Math.pow(base, exponent) - power
console.log("\\nMath.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.pow(10, 2):", Math.pow(10, 2)); // 100
console.log("Math.pow(2, -1):", Math.pow(2, -1)); // 0.5

// Modern: use ** operator
console.log("\\nModern (** operator):");
console.log("2 ** 3:", 2 ** 3); // 8
console.log("10 ** 2:", 10 ** 2); // 100

// Special cases
console.log("\\nSpecial:");
console.log("Math.pow(0, 0):", Math.pow(0, 0)); // 1
console.log("Math.pow(2, Infinity):", Math.pow(2, Infinity)); // Infinity
console.log("Math.pow(2, -Infinity):", Math.pow(2, -Infinity)); // 0`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Math.sqrt(), Math.cbrt(), Math.hypot()"
              initialCode={`// Math.sqrt(x) - square root
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.sqrt(2):", Math.sqrt(2)); // 1.414...
console.log("Math.sqrt(0):", Math.sqrt(0)); // 0
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN

// Math.cbrt(x) - ES2015 - cube root
console.log("\\nMath.cbrt(27):", Math.cbrt(27)); // 3
console.log("Math.cbrt(8):", Math.cbrt(8)); // 2
console.log("Math.cbrt(-8):", Math.cbrt(-8)); // -2 (works with negative!)

// Math.hypot(...values) - ES2015 - hypotenuse
console.log("\\nMath.hypot(3, 4):", Math.hypot(3, 4)); // 5 (Pythagorean)
console.log("Math.hypot(5, 12):", Math.hypot(5, 12)); // 13
console.log("Math.hypot(1, 1, 1):", Math.hypot(1, 1, 1)); // √3 = 1.732...

// Practical: distance in 2D
function distance2D(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

console.log("\\nDistance (0,0) to (3,4):", distance2D(0, 0, 3, 4)); // 5

// Distance in 3D
function distance3D(x1, y1, z1, x2, y2, z2) {
  return Math.hypot(x2 - x1, y2 - y1, z2 - z1);
}

console.log("Distance 3D:", distance3D(0, 0, 0, 1, 1, 1)); // √3

// Vector magnitude
const vector = [3, 4, 12];
console.log("\\nVector magnitude:", Math.hypot(...vector)); // 13`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Math.random()"
              initialCode={`// Math.random() - random number [0, 1)
console.log("Math.random():", Math.random());
console.log("Again:", Math.random());
console.log("Again:", Math.random());

// Range: [0, 1) - includes 0, excludes 1
console.log("\\nAlways >= 0:", Math.random() >= 0); // true
console.log("Always < 1:", Math.random() < 1); // true

// Random integer in range [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("\\nRandom integers 1-10:");
console.log(randomInt(1, 10));
console.log(randomInt(1, 10));
console.log(randomInt(1, 10));

// Random float in range [min, max)
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

console.log("\\nRandom floats 5.0-10.0:");
console.log(randomFloat(5, 10).toFixed(2));
console.log(randomFloat(5, 10).toFixed(2));

// Random from array
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const colors = ["red", "green", "blue", "yellow"];
console.log("\\nRandom colors:");
console.log(randomElement(colors));
console.log(randomElement(colors));

// Coin flip
console.log("\\nCoin flip:", Math.random() < 0.5 ? "Heads" : "Tails");

// Random boolean
console.log("Random bool:", Math.random() < 0.5);`}
            />
          </div>
        </section>

        {/* Math Methods - Trigonometric */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📐 Math Trigonometric Methods (12)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="sin(), cos(), tan(), atan2()"
              initialCode={`// All trig functions use RADIANS (not degrees)

// Math.sin(x) - sine
console.log("Math.sin(0):", Math.sin(0)); // 0
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.sin(Math.PI):", Math.sin(Math.PI)); // ~0 (floating point)

// Math.cos(x) - cosine
console.log("\\nMath.cos(0):", Math.cos(0)); // 1
console.log("Math.cos(Math.PI / 2):", Math.cos(Math.PI / 2)); // ~0
console.log("Math.cos(Math.PI):", Math.cos(Math.PI)); // -1

// Math.tan(x) - tangent
console.log("\\nMath.tan(0):", Math.tan(0)); // 0
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // ~1
console.log("Math.tan(Math.PI / 2):", Math.tan(Math.PI / 2)); // Very large

// Convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

console.log("\\nWith degrees:");
console.log("sin(30°):", Math.sin(toRadians(30))); // 0.5
console.log("cos(60°):", Math.cos(toRadians(60))); // 0.5
console.log("tan(45°):", Math.tan(toRadians(45))); // 1

// Math.atan2(y, x) - angle from (0,0) to (x,y)
console.log("\\nMath.atan2(1, 1):", Math.atan2(1, 1)); // π/4 radians
console.log("Math.atan2(1, 0):", Math.atan2(1, 0)); // π/2
console.log("Math.atan2(0, 1):", Math.atan2(0, 1)); // 0

// Convert to degrees
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

console.log("\\nIn degrees:");
console.log("atan2(1, 1):", toDegrees(Math.atan2(1, 1))); // 45°`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="asin(), acos(), atan() - Inverse Trig"
              initialCode={`// Math.asin(x) - arcsine (returns radians)
console.log("Math.asin(0):", Math.asin(0)); // 0
console.log("Math.asin(0.5):", Math.asin(0.5)); // ~0.524 (30°)
console.log("Math.asin(1):", Math.asin(1)); // π/2
console.log("Math.asin(2):", Math.asin(2)); // NaN (out of range)

// Math.acos(x) - arccosine
console.log("\\nMath.acos(1):", Math.acos(1)); // 0
console.log("Math.acos(0.5):", Math.acos(0.5)); // ~1.047 (60°)
console.log("Math.acos(0):", Math.acos(0)); // π/2
console.log("Math.acos(-1):", Math.acos(-1)); // π

// Math.atan(x) - arctangent
console.log("\\nMath.atan(0):", Math.atan(0)); // 0
console.log("Math.atan(1):", Math.atan(1)); // π/4
console.log("Math.atan(Infinity):", Math.atan(Infinity)); // π/2

// Convert to degrees
function toDegrees(rad) {
  return rad * (180 / Math.PI);
}

console.log("\\nIn degrees:");
console.log("asin(0.5):", toDegrees(Math.asin(0.5)).toFixed(1), "°"); // 30°
console.log("acos(0.5):", toDegrees(Math.acos(0.5)).toFixed(1), "°"); // 60°
console.log("atan(1):", toDegrees(Math.atan(1)).toFixed(1), "°"); // 45°

// Practical: find angle
const opposite = 3;
const adjacent = 4;
const angle = Math.atan(opposite / adjacent);
console.log("\\nAngle in triangle:", toDegrees(angle).toFixed(2), "°");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Hyperbolic Functions (6) - ES2015"
              initialCode={`// Math.sinh(x) - hyperbolic sine
console.log("Math.sinh(0):", Math.sinh(0)); // 0
console.log("Math.sinh(1):", Math.sinh(1)); // ~1.175

// Math.cosh(x) - hyperbolic cosine
console.log("\\nMath.cosh(0):", Math.cosh(0)); // 1
console.log("Math.cosh(1):", Math.cosh(1)); // ~1.543

// Math.tanh(x) - hyperbolic tangent
console.log("\\nMath.tanh(0):", Math.tanh(0)); // 0
console.log("Math.tanh(1):", Math.tanh(1)); // ~0.762
console.log("Math.tanh(Infinity):", Math.tanh(Infinity)); // 1

// Inverse hyperbolic functions
console.log("\\nMath.asinh(0):", Math.asinh(0)); // 0
console.log("Math.asinh(1):", Math.asinh(1)); // ~0.881

console.log("\\nMath.acosh(1):", Math.acosh(1)); // 0
console.log("Math.acosh(2):", Math.acosh(2)); // ~1.317
console.log("Math.acosh(0.5):", Math.acosh(0.5)); // NaN (< 1)

console.log("\\nMath.atanh(0):", Math.atanh(0)); // 0
console.log("Math.atanh(0.5):", Math.atanh(0.5)); // ~0.549
console.log("Math.atanh(1):", Math.atanh(1)); // Infinity

// Hyperbolic identity: cosh² - sinh² = 1
const x = 2;
const cosh = Math.cosh(x);
const sinh = Math.sinh(x);
console.log("\\nIdentity check:");
console.log("cosh²(2) - sinh²(2):", (cosh ** 2 - sinh ** 2).toFixed(10)); // ~1`}
            />
          </div>
        </section>

        {/* Math Methods - Logarithmic & Exponential */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📈 Math Logarithmic & Exponential (8)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="exp(), expm1(), log(), log1p()"
              initialCode={`// Math.exp(x) - e^x
console.log("Math.exp(0):", Math.exp(0)); // 1
console.log("Math.exp(1):", Math.exp(1)); // e = 2.718...
console.log("Math.exp(2):", Math.exp(2)); // e² = 7.389...

// Math.expm1(x) - ES2015 - e^x - 1 (more accurate for small x)
console.log("\\nMath.expm1(0):", Math.expm1(0)); // 0
console.log("Math.expm1(1):", Math.expm1(1)); // e - 1 = 1.718...

// Why expm1? Better precision for small values
const small = 1e-10;
console.log("\\nSmall value precision:");
console.log("exp(x) - 1:", Math.exp(small) - 1);
console.log("expm1(x):", Math.expm1(small)); // More accurate

// Math.log(x) - natural logarithm (ln)
console.log("\\nMath.log(1):", Math.log(1)); // 0
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1
console.log("Math.log(10):", Math.log(10)); // ~2.303
console.log("Math.log(0):", Math.log(0)); // -Infinity
console.log("Math.log(-1):", Math.log(-1)); // NaN

// Math.log1p(x) - ES2015 - ln(1 + x) (more accurate for small x)
console.log("\\nMath.log1p(0):", Math.log1p(0)); // 0
console.log("Math.log1p(Math.E - 1):", Math.log1p(Math.E - 1)); // ~1

// Better for small values
console.log("\\nlog(1 + x):", Math.log(1 + small));
console.log("log1p(x):", Math.log1p(small)); // More accurate`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="log10(), log2() - ES2015"
              initialCode={`// Math.log10(x) - base-10 logarithm
console.log("Math.log10(1):", Math.log10(1)); // 0
console.log("Math.log10(10):", Math.log10(10)); // 1
console.log("Math.log10(100):", Math.log10(100)); // 2
console.log("Math.log10(1000):", Math.log10(1000)); // 3

// Math.log2(x) - base-2 logarithm
console.log("\\nMath.log2(1):", Math.log2(1)); // 0
console.log("Math.log2(2):", Math.log2(2)); // 1
console.log("Math.log2(8):", Math.log2(8)); // 3
console.log("Math.log2(1024):", Math.log2(1024)); // 10

// Change of base formula
console.log("\\nlog₅(125) using change of base:");
console.log("log(125) / log(5):", Math.log(125) / Math.log(5)); // 3

// Practical: how many digits?
function countDigits(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log("\\nDigit count:");
console.log("123 has", countDigits(123), "digits");
console.log("9999 has", countDigits(9999), "digits");

// Binary representation size
function bitsNeeded(num) {
  return Math.floor(Math.log2(num)) + 1;
}

console.log("\\nBits needed:");
console.log("255 needs", bitsNeeded(255), "bits");
console.log("256 needs", bitsNeeded(256), "bits");`}
            />
          </div>
        </section>

        {/* Math Methods - Rounding & Bitwise */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Math Methods - Advanced (6)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="fround(), imul(), clz32() - ES2015"
              initialCode={`// Math.fround(x) - round to 32-bit float
console.log("Math.fround(1.5):", Math.fround(1.5)); // 1.5
console.log("Math.fround(1.337):", Math.fround(1.337)); // 1.3370000123977661

// Precision loss
const preciseNum = 1.0000001;
console.log("\\nOriginal:", preciseNum);
console.log("fround:", Math.fround(preciseNum)); // May lose precision

// Math.imul(a, b) - 32-bit integer multiplication
console.log("\\nMath.imul(2, 3):", Math.imul(2, 3)); // 6
console.log("Math.imul(-2, 3):", Math.imul(-2, 3)); // -6

// Handles overflow
const large = 0x7fffffff; // Max 32-bit int
console.log("\\nOverflow:");
console.log("Regular:", large * 2); // 4294967294
console.log("imul:", Math.imul(large, 2)); // -2 (32-bit overflow!)

// Math.clz32(x) - count leading zero bits in 32-bit binary
console.log("\\nMath.clz32(1):", Math.clz32(1)); // 31 (0x00000001)
console.log("Math.clz32(2):", Math.clz32(2)); // 30 (0x00000010)
console.log("Math.clz32(8):", Math.clz32(8)); // 28 (0x00001000)

// Binary representation
function showBinary(num) {
  const binary = (num >>> 0).toString(2).padStart(32, "0");
  const zeros = Math.clz32(num);
  console.log(\`\${num}: \${binary} (\${zeros} leading zeros)\`);
}

console.log("\\nBinary representations:");
showBinary(1);
showBinary(255);
showBinary(0x80000000);`}
            />
          </div>
        </section>

        {/* BigInt Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💯 BigInt Methods (5)
          </h2>

          <ConceptCard title="BigInt Methods" icon="🔢" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>asIntN():</strong> Wrap to signed n-bit integer
              </li>
              <li>
                <strong>asUintN():</strong> Wrap to unsigned n-bit integer
              </li>
              <li>
                <strong>toLocaleString():</strong> Locale-aware formatting
              </li>
              <li>
                <strong>toString():</strong> Convert to string with radix
              </li>
              <li>
                <strong>valueOf():</strong> Get primitive value
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="BigInt.asIntN() and BigInt.asUintN()"
              initialCode={`// BigInt.asIntN(bits, bigint) - wrap to signed n-bit
console.log("asIntN(8, 127n):", BigInt.asIntN(8, 127n)); // 127n
console.log("asIntN(8, 128n):", BigInt.asIntN(8, 128n)); // -128n (overflow!)
console.log("asIntN(8, 255n):", BigInt.asIntN(8, 255n)); // -1n

// 8-bit signed range: -128 to 127
console.log("\\n8-bit signed range:");
console.log("asIntN(8, 200n):", BigInt.asIntN(8, 200n)); // -56n

// BigInt.asUintN(bits, bigint) - wrap to unsigned n-bit
console.log("\\nasUintN(8, 127n):", BigInt.asUintN(8, 127n)); // 127n
console.log("asUintN(8, 255n):", BigInt.asUintN(8, 255n)); // 255n
console.log("asUintN(8, 256n):", BigInt.asUintN(8, 256n)); // 0n (overflow!)
console.log("asUintN(8, -1n):", BigInt.asUintN(8, -1n)); // 255n

// 8-bit unsigned range: 0 to 255
console.log("\\n8-bit unsigned range:");
console.log("asUintN(8, 300n):", BigInt.asUintN(8, 300n)); // 44n

// Simulating different integer types
const value = 1000n;
console.log("\\nValue: 1000n in different sizes:");
console.log("8-bit signed:", BigInt.asIntN(8, value));
console.log("8-bit unsigned:", BigInt.asUintN(8, value));
console.log("16-bit signed:", BigInt.asIntN(16, value));
console.log("16-bit unsigned:", BigInt.asUintN(16, value));
console.log("32-bit signed:", BigInt.asIntN(32, value));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="BigInt toString(), toLocaleString(), valueOf()"
              initialCode={`const big = 123456789012345678901234567890n;

// toString(radix) - convert to string
console.log("toString():", big.toString());
console.log("Type:", typeof big.toString()); // "string"

// Different bases
const num = 255n;
console.log("\\nDifferent bases:");
console.log("Binary (2):", num.toString(2)); // "11111111"
console.log("Octal (8):", num.toString(8)); // "377"
console.log("Hex (16):", num.toString(16)); // "ff"
console.log("Base 36:", num.toString(36)); // "73"

// toLocaleString() - formatted with separators
console.log("\\ntoLocaleString():", big.toLocaleString());
console.log("US format:", big.toLocaleString("en-US"));
console.log("German:", big.toLocaleString("de-DE"));
console.log("French:", big.toLocaleString("fr-FR"));

// valueOf() - get primitive
const bigObj = Object(100n);
console.log("\\nvalueOf():", bigObj.valueOf()); // 100n
console.log("Type:", typeof bigObj.valueOf()); // "bigint"

// Conversion (be careful!)
const hugeBigInt = 12345678901234567890n;
console.log("\\nConversion:");
console.log("BigInt:", hugeBigInt);
console.log("to Number:", Number(hugeBigInt)); // Loses precision!
console.log("to String:", hugeBigInt.toString()); // Exact`}
            />
          </div>
        </section>

        {/* ALL Math Methods Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete Math Methods Reference (34)
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
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-blue-400">
                    BASIC
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">abs(x)</td>
                  <td className="px-3 py-2">Absolute value</td>
                  <td className="px-3 py-2 font-mono text-xs">abs(-5) = 5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">sign(x)</td>
                  <td className="px-3 py-2">Sign (-1, 0, 1)</td>
                  <td className="px-3 py-2 font-mono text-xs">sign(-5) = -1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">round(x)</td>
                  <td className="px-3 py-2">Round to nearest</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    round(4.5) = 5
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">ceil(x)</td>
                  <td className="px-3 py-2">Round up</td>
                  <td className="px-3 py-2 font-mono text-xs">ceil(4.1) = 5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">floor(x)</td>
                  <td className="px-3 py-2">Round down</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    floor(4.9) = 4
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">trunc(x)</td>
                  <td className="px-3 py-2">Remove decimals</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    trunc(4.9) = 4
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">min(...vals)</td>
                  <td className="px-3 py-2">Smallest value</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    min(2,5,1) = 1
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">max(...vals)</td>
                  <td className="px-3 py-2">Largest value</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    max(2,5,1) = 5
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">random()</td>
                  <td className="px-3 py-2">Random [0, 1)</td>
                  <td className="px-3 py-2 font-mono text-xs">0 ≤ x {"<"} 1</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    POWER & ROOT
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">pow(b,e)</td>
                  <td className="px-3 py-2">Power b^e</td>
                  <td className="px-3 py-2 font-mono text-xs">pow(2,3) = 8</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">sqrt(x)</td>
                  <td className="px-3 py-2">Square root</td>
                  <td className="px-3 py-2 font-mono text-xs">sqrt(16) = 4</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">cbrt(x)</td>
                  <td className="px-3 py-2">Cube root</td>
                  <td className="px-3 py-2 font-mono text-xs">cbrt(27) = 3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">hypot(...v)</td>
                  <td className="px-3 py-2">Hypotenuse</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    hypot(3,4) = 5
                  </td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    TRIGONOMETRIC
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">sin(x)</td>
                  <td className="px-3 py-2">Sine</td>
                  <td className="px-3 py-2 font-mono text-xs">sin(π/2) = 1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">cos(x)</td>
                  <td className="px-3 py-2">Cosine</td>
                  <td className="px-3 py-2 font-mono text-xs">cos(0) = 1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">tan(x)</td>
                  <td className="px-3 py-2">Tangent</td>
                  <td className="px-3 py-2 font-mono text-xs">tan(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">asin(x)</td>
                  <td className="px-3 py-2">Arcsine</td>
                  <td className="px-3 py-2 font-mono text-xs">asin(1) = π/2</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">acos(x)</td>
                  <td className="px-3 py-2">Arccosine</td>
                  <td className="px-3 py-2 font-mono text-xs">acos(1) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">atan(x)</td>
                  <td className="px-3 py-2">Arctangent</td>
                  <td className="px-3 py-2 font-mono text-xs">atan(1) = π/4</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">atan2(y,x)</td>
                  <td className="px-3 py-2">Angle from origin</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    atan2(1,1) = π/4
                  </td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-orange-400"
                  >
                    HYPERBOLIC
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">sinh(x)</td>
                  <td className="px-3 py-2">Hyperbolic sine</td>
                  <td className="px-3 py-2 font-mono text-xs">sinh(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">cosh(x)</td>
                  <td className="px-3 py-2">Hyperbolic cosine</td>
                  <td className="px-3 py-2 font-mono text-xs">cosh(0) = 1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">tanh(x)</td>
                  <td className="px-3 py-2">Hyperbolic tangent</td>
                  <td className="px-3 py-2 font-mono text-xs">tanh(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">asinh(x)</td>
                  <td className="px-3 py-2">Inverse sinh</td>
                  <td className="px-3 py-2 font-mono text-xs">asinh(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">acosh(x)</td>
                  <td className="px-3 py-2">Inverse cosh</td>
                  <td className="px-3 py-2 font-mono text-xs">acosh(1) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">atanh(x)</td>
                  <td className="px-3 py-2">Inverse tanh</td>
                  <td className="px-3 py-2 font-mono text-xs">atanh(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-yellow-400"
                  >
                    EXPONENTIAL & LOG
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">exp(x)</td>
                  <td className="px-3 py-2">e^x</td>
                  <td className="px-3 py-2 font-mono text-xs">exp(1) = e</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">expm1(x)</td>
                  <td className="px-3 py-2">e^x - 1</td>
                  <td className="px-3 py-2 font-mono text-xs">expm1(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">log(x)</td>
                  <td className="px-3 py-2">Natural log (ln)</td>
                  <td className="px-3 py-2 font-mono text-xs">log(e) = 1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">log1p(x)</td>
                  <td className="px-3 py-2">ln(1 + x)</td>
                  <td className="px-3 py-2 font-mono text-xs">log1p(0) = 0</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">log10(x)</td>
                  <td className="px-3 py-2">Base-10 log</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    log10(100) = 2
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">log2(x)</td>
                  <td className="px-3 py-2">Base-2 log</td>
                  <td className="px-3 py-2 font-mono text-xs">log2(8) = 3</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-red-400">
                    BITWISE
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">clz32(x)</td>
                  <td className="px-3 py-2">Count leading zeros</td>
                  <td className="px-3 py-2 font-mono text-xs">clz32(1) = 31</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">imul(a,b)</td>
                  <td className="px-3 py-2">32-bit multiply</td>
                  <td className="px-3 py-2 font-mono text-xs">imul(2,3) = 6</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">fround(x)</td>
                  <td className="px-3 py-2">32-bit float</td>
                  <td className="px-3 py-2 font-mono text-xs">fround(1.5)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Number Applications
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Random Number Utilities"
              initialCode={`// Random integer [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random 1-100:");
console.log(randomInt(1, 100));
console.log(randomInt(1, 100));
console.log(randomInt(1, 100));

// Random float [min, max)
function randomFloat(min, max, decimals = 2) {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(decimals));
}

console.log("\\nRandom 0.0-10.0:");
console.log(randomFloat(0, 10));
console.log(randomFloat(0, 10));

// Random from array
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const fruits = ["apple", "banana", "orange"];
console.log("\\nRandom fruit:", randomChoice(fruits));

// Shuffle array (Fisher-Yates)
function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

console.log("\\nOriginal:", fruits);
console.log("Shuffled:", shuffle(fruits));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Number Formatting Utilities"
              initialCode={`// Format currency
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currency
  });
}

console.log("Currency:");
console.log(formatCurrency(1234.56)); // "$1,234.56"
console.log(formatCurrency(1234.56, "EUR", "de-DE")); // "1.234,56 €"
console.log(formatCurrency(1234.56, "JPY", "ja-JP")); // "¥1,235"

// Format percentage
function formatPercent(value, decimals = 2) {
  return (value * 100).toFixed(decimals) + "%";
}

console.log("\\nPercentages:");
console.log(formatPercent(0.1234)); // "12.34%"
console.log(formatPercent(0.5)); // "50.00%"

// Format file size
function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return size.toFixed(2) + " " + units[unitIndex];
}

console.log("\\nFile sizes:");
console.log(formatBytes(1024)); // "1.00 KB"
console.log(formatBytes(1048576)); // "1.00 MB"
console.log(formatBytes(1234567890)); // "1.15 GB"

// Clamp number in range
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

console.log("\\nClamp:");
console.log("clamp(5, 0, 10):", clamp(5, 0, 10)); // 5
console.log("clamp(-5, 0, 10):", clamp(-5, 0, 10)); // 0
console.log("clamp(15, 0, 10):", clamp(15, 0, 10)); // 10`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Mathematical Calculations"
              initialCode={`// Calculate percentage
function percentage(value, total) {
  return (value / total * 100).toFixed(2) + "%";
}

console.log("Percentage:");
console.log("25 of 200:", percentage(25, 200)); // "12.50%"
console.log("75 of 300:", percentage(75, 300)); // "25.00%"

// Calculate percentage change
function percentChange(oldVal, newVal) {
  const change = ((newVal - oldVal) / oldVal * 100).toFixed(2);
  return (change >= 0 ? "+" : "") + change + "%";
}

console.log("\\nPercent change:");
console.log("50 to 75:", percentChange(50, 75)); // "+50.00%"
console.log("100 to 80:", percentChange(100, 80)); // "-20.00%"

// Calculate compound interest
function compoundInterest(principal, rate, time, n = 1) {
  return principal * Math.pow(1 + rate / n, n * time);
}

console.log("\\nCompound interest:");
const amount = compoundInterest(1000, 0.05, 10, 12);
console.log("$1000 at 5% for 10 years:", "$" + amount.toFixed(2));

// Pythagorean theorem
function pythagorean(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

console.log("\\nPythagorean (3, 4):", pythagorean(3, 4)); // 5

// Degrees/radians conversion
const toDegrees = (rad) => rad * (180 / Math.PI);
const toRadians = (deg) => deg * (Math.PI / 180);

console.log("\\n90° to radians:", toRadians(90));
console.log("π/2 to degrees:", toDegrees(Math.PI / 2));`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Number & Math Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use Number.isNaN() instead of isNaN()
                </strong>
                <p className="ml-4 mt-1">
                  Strict checking without type coercion.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use Number.EPSILON for floating-point comparisons
                </strong>
                <p className="ml-4 mt-1">
                  0.1 + 0.2 !== 0.3, use EPSILON for safe comparison.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use BigInt for integers beyond safe range
                </strong>
                <p className="ml-4 mt-1">
                  Beyond ±2^53-1, use BigInt for exact integers.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use ** operator instead of Math.pow()
                </strong>
                <p className="ml-4 mt-1">
                  More readable: 2 ** 3 instead of Math.pow(2, 3)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. toFixed() returns string, not number
                </strong>
                <p className="ml-4 mt-1">
                  Convert back if needed: +num.toFixed(2)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Always specify radix in parseInt()
                </strong>
                <p className="ml-4 mt-1">
                  parseInt("010", 10) to avoid ambiguity.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use Math.trunc() to remove decimals
                </strong>
                <p className="ml-4 mt-1">
                  More explicit than Math.floor() for this purpose.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Math.random() is NOT cryptographically secure
                </strong>
                <p className="ml-4 mt-1">
                  Use crypto.getRandomValues() for security-sensitive code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 4 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Number & Math methods</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">8</div>
                <div className="text-gray-400">Number Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  12
                </div>
                <div className="text-gray-400">Number Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">42</div>
                <div className="text-gray-400">Math Props & Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">5</div>
                <div className="text-gray-400">BigInt Methods</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
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
