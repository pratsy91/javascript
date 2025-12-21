"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ErrorHandlingPage() {
  return (
    <SectionLayout
      title="9.1 Error Handling - Complete"
      description="Master all error types, handling mechanisms, async errors, and best practices"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚠️ Complete Error Handling Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Error handling is crucial for building robust applications. This
            section covers <strong>EVERYTHING</strong> about errors in
            JavaScript - types, properties, handling, and best practices.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Error Types (9)",
              "Properties (4)",
              "try/catch/finally",
              "throw",
              "Custom Errors",
              "Async Errors",
              "Global Handlers",
              "Best Practices",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-red-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Error Types */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔥 Error Types (9)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="Error" icon="⚠️" color="red">
              Generic error (base class)
            </ConceptCard>
            <ConceptCard title="RangeError" icon="📏" color="orange">
              Value out of range
            </ConceptCard>
            <ConceptCard title="ReferenceError" icon="🔗" color="yellow">
              Invalid reference
            </ConceptCard>
            <ConceptCard title="SyntaxError" icon="📝" color="green">
              Syntax error
            </ConceptCard>
            <ConceptCard title="TypeError" icon="🔤" color="blue">
              Wrong type
            </ConceptCard>
            <ConceptCard title="URIError" icon="🌐" color="purple">
              URI encoding/decoding error
            </ConceptCard>
            <ConceptCard title="EvalError" icon="⚡" color="pink">
              eval() error (rarely used)
            </ConceptCard>
            <ConceptCard title="AggregateError" icon="📦" color="indigo">
              Multiple errors (ES2021)
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Error - Generic Error"
              initialCode={`// Error - generic error constructor
const error1 = new Error("Something went wrong");
console.log("name:", error1.name); // "Error"
console.log("message:", error1.message); // "Something went wrong"

// Without 'new' keyword (works the same)
const error2 = Error("Another error");
console.log("\\nWithout new:", error2.name, error2.message);

// With cause (ES2022)
const error3 = new Error("Failed to process", { 
  cause: new Error("Network timeout") 
});
console.log("\\nWith cause:");
console.log("Main:", error3.message);
console.log("Cause:", error3.cause?.message);

// Throwing errors
try {
  throw new Error("Custom error message");
} catch (e) {
  console.log("\\nCaught:", e.name, "-", e.message);
}

// Stack trace (non-standard but widely supported)
const err = new Error("Stack example");
console.log("\\nStack trace:");
console.log(err.stack);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="RangeError - Out of Range"
              initialCode={`// RangeError occurs when value is out of range

// Array length out of range
try {
  const arr = new Array(-1); // negative length
} catch (e) {
  console.log("RangeError:", e.message);
}

// Number methods with invalid precision
try {
  const num = 42;
  num.toFixed(101); // precision must be 0-100
} catch (e) {
  console.log("\\ntoFixed:", e.message);
}

// toExponential out of range
try {
  (123).toExponential(101); // 0-100 allowed
} catch (e) {
  console.log("\\ntoExponential:", e.message);
}

// toPrecision out of range
try {
  (123).toPrecision(101); // 1-100 allowed
} catch (e) {
  console.log("\\ntoPrecision:", e.message);
}

// Maximum call stack size exceeded
try {
  function recurse() {
    recurse(); // infinite recursion
  }
  recurse();
} catch (e) {
  console.log("\\nStack overflow:", e.name);
  console.log("Is RangeError:", e instanceof RangeError);
}

// Creating RangeError
throw new RangeError("Value must be between 1 and 100");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="ReferenceError - Invalid Reference"
              initialCode={`// ReferenceError occurs when referencing undeclared variable

// Accessing undeclared variable
try {
  console.log(undeclaredVariable);
} catch (e) {
  console.log("ReferenceError:", e.message);
}

// Using variable before declaration (TDZ)
try {
  console.log(x);
  let x = 10;
} catch (e) {
  console.log("\\nTDZ error:", e.message);
}

// Assigning to undeclared variable in strict mode
try {
  "use strict";
  undeclared = 42;
} catch (e) {
  console.log("\\nStrict mode:", e.message);
}

// Invalid left-hand side in assignment
try {
  eval("5 = 10"); // can't assign to literal
} catch (e) {
  console.log("\\nInvalid assignment:", e.name);
}

// Creating ReferenceError
function checkVariable(name) {
  if (!name) {
    throw new ReferenceError("Variable name is required");
  }
}

try {
  checkVariable();
} catch (e) {
  console.log("\\nCustom:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="SyntaxError - Syntax Error"
              initialCode={`// SyntaxError occurs with invalid syntax

// JSON.parse with invalid JSON
try {
  JSON.parse("{invalid json}");
} catch (e) {
  console.log("SyntaxError:", e.message);
}

// eval() with invalid syntax
try {
  eval("const x = ;"); // missing value
} catch (e) {
  console.log("\\neval error:", e.message);
}

// Function constructor with invalid code
try {
  new Function("return }");
} catch (e) {
  console.log("\\nFunction():", e.message);
}

// Invalid regex
try {
  new RegExp("[invalid");
} catch (e) {
  console.log("\\nRegex:", e.message);
}

// Duplicate parameter names in strict mode
try {
  eval('"use strict"; function f(a, a) {}');
} catch (e) {
  console.log("\\nStrict mode:", e.message);
}

// Creating SyntaxError
function parseExpression(expr) {
  if (!expr.includes("=")) {
    throw new SyntaxError("Expression must contain '='");
  }
}

try {
  parseExpression("abc");
} catch (e) {
  console.log("\\nCustom:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="TypeError - Type Error"
              initialCode={`// TypeError occurs with wrong type

// Calling non-function
try {
  const notAFunction = 42;
  notAFunction();
} catch (e) {
  console.log("TypeError:", e.message);
}

// Accessing property of null/undefined
try {
  const obj = null;
  obj.property;
} catch (e) {
  console.log("\\nNull access:", e.message);
}

// Modifying read-only property
try {
  "use strict";
  const obj = {};
  Object.defineProperty(obj, "prop", { value: 42, writable: false });
  obj.prop = 100;
} catch (e) {
  console.log("\\nRead-only:", e.message);
}

// Invalid instanceof
try {
  "string" instanceof "not a constructor";
} catch (e) {
  console.log("\\ninstanceof:", e.message);
}

// Calling method on wrong type
try {
  Array.prototype.push.call(undefined, 1);
} catch (e) {
  console.log("\\nWrong this:", e.message);
}

// Creating TypeError
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a / b;
}

try {
  divide("10", 2);
} catch (e) {
  console.log("\\nCustom:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="URIError - URI Error"
              initialCode={`// URIError occurs with invalid URI encoding/decoding

// decodeURI with malformed URI
try {
  decodeURI("%"); // incomplete percent-encoding
} catch (e) {
  console.log("URIError:", e.message);
}

// decodeURIComponent with malformed sequence
try {
  decodeURIComponent("%E0%A4%A"); // incomplete UTF-8
} catch (e) {
  console.log("\\ndecodeURIComponent:", e.message);
}

// encodeURI with invalid characters (rare)
try {
  // High surrogates without low surrogate
  encodeURI("\\uD800");
} catch (e) {
  console.log("\\nencodeURI:", e.message);
}

// Valid URI operations for comparison
console.log("\\nValid operations:");
console.log("encode:", encodeURI("hello world"));
console.log("decode:", decodeURI("hello%20world"));
console.log("encodeComponent:", encodeURIComponent("?&="));

// Creating URIError
function validateURI(uri) {
  if (uri.includes("%") && !uri.match(/%[0-9A-Fa-f]{2}/)) {
    throw new URIError("Invalid percent-encoding in URI");
  }
}

try {
  validateURI("test%ZZ");
} catch (e) {
  console.log("\\nCustom:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="AggregateError - Multiple Errors (ES2021)"
              initialCode={`// AggregateError groups multiple errors together

// Promise.any rejection
try {
  await Promise.any([
    Promise.reject(new Error("Error 1")),
    Promise.reject(new Error("Error 2")),
    Promise.reject(new Error("Error 3"))
  ]);
} catch (e) {
  console.log("AggregateError:", e.name);
  console.log("Message:", e.message);
  console.log("\\nIndividual errors:");
  e.errors.forEach((err, i) => {
    console.log(\`  \${i + 1}. \${err.message}\`);
  });
}

// Creating custom AggregateError
const errors = [
  new Error("Validation failed"),
  new Error("Network timeout"),
  new Error("Permission denied")
];

const aggregateError = new AggregateError(
  errors,
  "Multiple operations failed"
);

console.log("\\nCustom AggregateError:");
console.log("Main message:", aggregateError.message);
console.log("Error count:", aggregateError.errors.length);

// Practical: batch validation
function validateBatch(items) {
  const errors = [];
  
  items.forEach((item, index) => {
    if (!item.name) {
      errors.push(new Error(\`Item \${index}: name is required\`));
    }
    if (!item.age || item.age < 0) {
      errors.push(new Error(\`Item \${index}: invalid age\`));
    }
  });
  
  if (errors.length > 0) {
    throw new AggregateError(errors, "Validation failed");
  }
}

try {
  validateBatch([
    { name: "John" }, // missing age
    { age: -5 } // missing name, invalid age
  ]);
} catch (e) {
  console.log("\\nValidation errors:", e.errors.length);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="EvalError (Rarely Used)"
              initialCode={`// EvalError was originally for eval() errors
// Modern JS doesn't throw EvalError (throws SyntaxError instead)
// Only included for completeness

// Creating EvalError manually
const evalError = new EvalError("Eval operation failed");
console.log("name:", evalError.name);
console.log("message:", evalError.message);
console.log("Is Error:", evalError instanceof Error);

// eval() now throws SyntaxError, not EvalError
try {
  eval("invalid syntax here");
} catch (e) {
  console.log("\\neval() throws:", e.name); // SyntaxError, not EvalError
}

// You can still create and throw EvalError manually
function safeEval(code) {
  if (typeof code !== "string") {
    throw new EvalError("Code must be a string");
  }
  try {
    return eval(code);
  } catch (e) {
    throw new EvalError(\`Failed to evaluate: \${e.message}\`);
  }
}

try {
  safeEval(123);
} catch (e) {
  console.log("\\nCustom EvalError:", e.message);
}

console.log("\\nNote: EvalError is rarely used in modern JavaScript");
console.log("Most eval-related errors are SyntaxError or other types");`}
            />
          </div>
        </section>

        {/* Error Properties */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Error Properties (4)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="name, message, stack, cause"
              initialCode={`const error = new Error("Something went wrong");

// name - error type name
console.log("name:", error.name); // "Error"
console.log("Type:", typeof error.name); // "string"

// message - error description
console.log("\\nmessage:", error.message); // "Something went wrong"
console.log("Type:", typeof error.message); // "string"

// stack - stack trace (non-standard but widely supported)
console.log("\\nstack:");
console.log(error.stack);
console.log("Has stack:", "stack" in error); // true

// cause - underlying error (ES2022)
const originalError = new Error("Network timeout");
const wrappedError = new Error("Failed to load data", { 
  cause: originalError 
});

console.log("\\nWith cause:");
console.log("Main error:", wrappedError.message);
console.log("Cause:", wrappedError.cause?.message);
console.log("Cause type:", wrappedError.cause?.name);

// Chaining causes
const level3 = new Error("Database connection failed");
const level2 = new Error("Failed to fetch user", { cause: level3 });
const level1 = new Error("Operation failed", { cause: level2 });

console.log("\\nError chain:");
console.log("Level 1:", level1.message);
console.log("Level 2:", level1.cause?.message);
console.log("Level 3:", level1.cause?.cause?.message);

// Custom error properties
const customError = new Error("Custom");
customError.code = "ERR_CUSTOM";
customError.statusCode = 404;

console.log("\\nCustom properties:");
console.log("code:", customError.code);
console.log("statusCode:", customError.statusCode);`}
            />
          </div>
        </section>

        {/* Error Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Error Methods
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="toString()"
              initialCode={`const error = new Error("Test error");

// toString() - convert to string
console.log("toString():", error.toString());
// "Error: Test error"

// Different error types
const rangeError = new RangeError("Out of range");
console.log("\\nRangeError:", rangeError.toString());
// "RangeError: Out of range"

const typeError = new TypeError("Wrong type");
console.log("TypeError:", typeError.toString());
// "TypeError: Wrong type"

// Error without message
const noMessage = new Error();
console.log("\\nNo message:", noMessage.toString());
// "Error"

// String coercion uses toString()
console.log("\\nString coercion:", String(error));
console.log("Template literal:", \`Error: \${error}\`);

// Compare with other properties
console.log("\\nComparison:");
console.log("error.toString():", error.toString());
console.log("error.name + ': ' + error.message:", error.name + ": " + error.message);
console.log("Are same:", error.toString() === error.name + ": " + error.message);`}
            />
          </div>
        </section>

        {/* try...catch...finally */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 try...catch...finally
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic try...catch"
              initialCode={`// try block - code that might throw error
// catch block - error handling
// finally block - always executes

// Basic try...catch
try {
  console.log("Try block starts");
  throw new Error("Something went wrong");
  console.log("This won't execute");
} catch (error) {
  console.log("Caught:", error.message);
}

console.log("\\nProgram continues...");

// Without try...catch (error stops execution)
console.log("\\nBefore error");
try {
  nonExistentFunction();
  console.log("After error - won't execute");
} catch (e) {
  console.log("Caught:", e.name);
}
console.log("After catch block");

// Catching specific errors
try {
  JSON.parse("{invalid}");
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("\\nJSON parsing error:", e.message);
  } else {
    console.log("Unknown error:", e);
  }
}

// Multiple operations in try
try {
  const data = '{"name":"John"}';
  const obj = JSON.parse(data);
  console.log("\\nParsed:", obj.name);
  const result = obj.age.toUpperCase(); // Error: age is undefined
} catch (e) {
  console.log("Error:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="try...catch...finally"
              initialCode={`// finally block always executes

// Basic finally
try {
  console.log("Try block");
  throw new Error("Test error");
} catch (e) {
  console.log("Catch block:", e.message);
} finally {
  console.log("Finally block - always runs");
}

// finally with return (finally wins!)
function testFinally() {
  try {
    return "from try";
  } finally {
    console.log("\\nFinally executes before return");
  }
}
console.log("Returned:", testFinally());

// finally overrides return
function finallyOverride() {
  try {
    return "try value";
  } finally {
    return "finally value"; // This wins!
  }
}
console.log("\\nFinally override:", finallyOverride());

// Resource cleanup with finally
function processFile() {
  let file = null;
  try {
    file = "file handle";
    console.log("\\nProcessing file:", file);
    throw new Error("Processing failed");
  } catch (e) {
    console.log("Error:", e.message);
  } finally {
    if (file) {
      console.log("Cleanup: closing file");
    }
  }
}
processFile();

// finally without catch
try {
  console.log("\\nTry without catch");
} finally {
  console.log("Finally without catch is valid");
}

// finally with re-throw
try {
  try {
    throw new Error("Inner error");
  } finally {
    console.log("\\nInner finally");
  }
} catch (e) {
  console.log("Outer catch:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Nested try...catch"
              initialCode={`// Nested try...catch blocks

try {
  console.log("Outer try");
  
  try {
    console.log("Inner try");
    throw new Error("Inner error");
  } catch (innerError) {
    console.log("Inner catch:", innerError.message);
    throw new Error("Outer error"); // Re-throw or new error
  }
  
} catch (outerError) {
  console.log("Outer catch:", outerError.message);
}

// Selective error handling
function riskyOperation() {
  try {
    // Might throw different error types
    const random = Math.random();
    if (random < 0.33) {
      throw new TypeError("Type error occurred");
    } else if (random < 0.66) {
      throw new RangeError("Range error occurred");
    } else {
      throw new Error("Generic error occurred");
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("\\nHandling TypeError:", e.message);
      // Type-specific handling
    } else if (e instanceof RangeError) {
      console.log("\\nHandling RangeError:", e.message);
      // Range-specific handling
    } else {
      console.log("\\nHandling generic error:", e.message);
      // Generic handling or re-throw
      // throw e;
    }
  }
}

riskyOperation();

// Error propagation
function level3() {
  throw new Error("Error at level 3");
}

function level2() {
  level3(); // Doesn't catch, propagates up
}

function level1() {
  try {
    level2();
  } catch (e) {
    console.log("\\nCaught at level 1:", e.message);
  }
}

level1();`}
            />
          </div>
        </section>

        {/* throw Statement */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💥 throw Statement
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Throwing Errors"
              initialCode={`// throw can throw any value

// Throw Error object (recommended)
try {
  throw new Error("Error message");
} catch (e) {
  console.log("Error:", e.message);
}

// Throw string (not recommended)
try {
  throw "String error";
} catch (e) {
  console.log("\\nString:", e); // Just a string, no stack trace
  console.log("Has stack:", "stack" in e); // false
}

// Throw number
try {
  throw 404;
} catch (e) {
  console.log("\\nNumber:", e);
  console.log("Type:", typeof e);
}

// Throw object
try {
  throw { code: "ERR_CUSTOM", message: "Custom error" };
} catch (e) {
  console.log("\\nObject:", e.code, e.message);
}

// Throw different error types
function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }
  if (age < 0 || age > 150) {
    throw new RangeError("Age must be between 0 and 150");
  }
  return age;
}

try {
  validateAge("25");
} catch (e) {
  console.log("\\n" + e.name + ":", e.message);
}

try {
  validateAge(200);
} catch (e) {
  console.log(e.name + ":", e.message);
}

// Conditional throwing
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

console.log("\\nDivide 10/2:", divide(10, 2));
try {
  divide(10, 0);
} catch (e) {
  console.log("Error:", e.message);
}`}
            />
          </div>
        </section>

        {/* Custom Errors */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎨 Custom Errors
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Creating Custom Error Classes"
              initialCode={`// Custom error by extending Error

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
    this.timestamp = new Date();
  }
}

// Using custom errors
try {
  throw new ValidationError("Email is required");
} catch (e) {
  console.log(e.name + ":", e.message);
  console.log("Is Error:", e instanceof Error);
  console.log("Is ValidationError:", e instanceof ValidationError);
}

try {
  throw new NetworkError("Request failed", 404);
} catch (e) {
  console.log("\\n" + e.name + ":", e.message);
  console.log("Status:", e.statusCode);
}

try {
  throw new DatabaseError("Query failed", "SELECT * FROM users");
} catch (e) {
  console.log("\\n" + e.name + ":", e.message);
  console.log("Query:", e.query);
  console.log("Time:", e.timestamp);
}

// Error factory
function createError(type, message, details) {
  switch (type) {
    case "validation":
      return new ValidationError(message);
    case "network":
      return new NetworkError(message, details?.statusCode);
    case "database":
      return new DatabaseError(message, details?.query);
    default:
      return new Error(message);
  }
}

const error = createError("network", "Connection timeout", { statusCode: 503 });
console.log("\\nFactory:", error.name, error.statusCode);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Advanced Custom Errors"
              initialCode={`// Custom error with validation logic

class HttpError extends Error {
  constructor(statusCode, message) {
    super(message || HttpError.getDefaultMessage(statusCode));
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
  
  static getDefaultMessage(code) {
    const messages = {
      400: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      500: "Internal Server Error"
    };
    return messages[code] || "HTTP Error";
  }
  
  isClientError() {
    return this.statusCode >= 400 && this.statusCode < 500;
  }
  
  isServerError() {
    return this.statusCode >= 500;
  }
}

const error404 = new HttpError(404);
console.log("Message:", error404.message);
console.log("Is client error:", error404.isClientError());

const error500 = new HttpError(500, "Database connection failed");
console.log("\\n" + error500.name + ":", error500.message);
console.log("Is server error:", error500.isServerError());

// Error with metadata
class ApiError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = "ApiError";
    this.code = options.code;
    this.statusCode = options.statusCode || 500;
    this.details = options.details;
    this.retryable = options.retryable || false;
  }
  
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      details: this.details,
      retryable: this.retryable
    };
  }
}

const apiError = new ApiError("Request failed", {
  code: "RATE_LIMIT",
  statusCode: 429,
  details: { limit: 100, remaining: 0 },
  retryable: true
});

console.log("\\nAPI Error:");
console.log(JSON.stringify(apiError.toJSON(), null, 2));`}
            />
          </div>
        </section>

        {/* Async Error Handling */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Async Error Handling
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Promise Error Handling"
              initialCode={`// Promise with .catch()
Promise.reject(new Error("Promise failed"))
  .then(result => console.log(result))
  .catch(error => console.log("Caught:", error.message));

// Promise with .then(onFulfilled, onRejected)
Promise.reject(new Error("Another error"))
  .then(
    result => console.log(result),
    error => console.log("\\nRejected:", error.message)
  );

// Chain with error propagation
Promise.resolve(42)
  .then(value => {
    console.log("\\nValue:", value);
    throw new Error("Chain error");
  })
  .then(value => {
    console.log("This won't run");
  })
  .catch(error => {
    console.log("Chain caught:", error.message);
  });

// Multiple catches
Promise.reject(new Error("First error"))
  .catch(error => {
    console.log("\\nFirst catch:", error.message);
    throw new Error("Second error");
  })
  .catch(error => {
    console.log("Second catch:", error.message);
  });

// finally with promises
Promise.reject(new Error("Test"))
  .catch(error => console.log("\\nCatch:", error.message))
  .finally(() => console.log("Finally always runs"));

// Promise.all with errors
Promise.all([
  Promise.resolve(1),
  Promise.reject(new Error("Failed")),
  Promise.resolve(3)
])
.catch(error => {
  console.log("\\nPromise.all failed:", error.message);
  // Fails on first rejection
});

// Promise.allSettled (doesn't reject)
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(new Error("Failed")),
  Promise.resolve(3)
])
.then(results => {
  console.log("\\nallSettled:");
  results.forEach((result, i) => {
    console.log(\`  \${i}: \${result.status}\`);
  });
});`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="async/await Error Handling"
              initialCode={`// async/await with try...catch

async function fetchData() {
  try {
    const response = await Promise.reject(new Error("Fetch failed"));
    return response;
  } catch (error) {
    console.log("Caught:", error.message);
    return null;
  }
}

fetchData();

// Multiple awaits
async function multipleOperations() {
  try {
    const result1 = await Promise.resolve(1);
    console.log("\\nResult 1:", result1);
    
    const result2 = await Promise.reject(new Error("Step 2 failed"));
    console.log("Result 2:", result2); // Won't execute
    
    const result3 = await Promise.resolve(3);
    console.log("Result 3:", result3); // Won't execute
  } catch (error) {
    console.log("Operation failed:", error.message);
  }
}

multipleOperations();

// Handling specific errors
async function validateUser(id) {
  try {
    if (!id) {
      throw new TypeError("ID is required");
    }
    if (id < 0) {
      throw new RangeError("ID must be positive");
    }
    return { id, name: "User" };
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("\\nType error:", error.message);
    } else if (error instanceof RangeError) {
      console.log("\\nRange error:", error.message);
    } else {
      throw error; // Re-throw unknown errors
    }
  }
}

validateUser(null);
validateUser(-1);

// async with finally
async function withFinally() {
  try {
    await Promise.reject(new Error("Test"));
  } catch (error) {
    console.log("\\nCatch:", error.message);
  } finally {
    console.log("Finally in async");
  }
}

withFinally();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Unhandled Promise Rejections"
              initialCode={`// Unhandled rejections (in browser)

// This would cause unhandled rejection
// Promise.reject(new Error("Unhandled"));

// Proper handling
Promise.reject(new Error("Handled rejection"))
  .catch(error => console.log("Properly handled:", error.message));

// Global handler (browser)
if (typeof window !== "undefined") {
  window.addEventListener("unhandledrejection", event => {
    console.log("\\nUnhandled rejection detected:");
    console.log("Reason:", event.reason);
    event.preventDefault(); // Prevent default logging
  });
}

// Catching late
const promise = Promise.reject(new Error("Late catch"));
setTimeout(() => {
  promise.catch(error => console.log("\\nCaught late:", error.message));
}, 100);

// Promise rejection without Error object
Promise.reject("String rejection")
  .catch(reason => {
    console.log("\\nRejection reason:", reason);
    console.log("Type:", typeof reason);
  });

// Creating rejections
async function createRejection() {
  throw new Error("Async function error");
}

createRejection().catch(error => {
  console.log("\\nAsync error:", error.message);
});

// Wrapper for handling all promise errors
function safePromise(promise) {
  return promise.catch(error => {
    console.log("\\nSafe wrapper caught:", error.message);
    return null; // Return safe default
  });
}

safePromise(Promise.reject(new Error("Test")));`}
            />
          </div>
        </section>

        {/* Global Error Handlers */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🌐 Global Error Handlers
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Global Error Handlers (Browser)"
              initialCode={`// window.onerror - catches uncaught errors

if (typeof window !== "undefined") {
  // Method 1: Property assignment
  window.onerror = function(message, source, lineno, colno, error) {
    console.log("Global error handler:");
    console.log("Message:", message);
    console.log("Source:", source);
    console.log("Line:", lineno, "Column:", colno);
    console.log("Error object:", error);
    return true; // Prevent default error handling
  };
  
  // Method 2: Event listener (preferred)
  window.addEventListener("error", (event) => {
    console.log("\\nError event:");
    console.log("Message:", event.message);
    console.log("Error:", event.error);
    event.preventDefault();
  });
  
  // window.onunhandledrejection - unhandled promise rejections
  window.onunhandledrejection = function(event) {
    console.log("\\nUnhandled rejection:");
    console.log("Reason:", event.reason);
    console.log("Promise:", event.promise);
    event.preventDefault();
  };
  
  // Event listener version
  window.addEventListener("unhandledrejection", (event) => {
    console.log("\\nUnhandled rejection event:");
    console.log("Reason:", event.reason);
  });
}

// Note: These handlers catch errors in browser environment
console.log("Global handlers registered");
console.log("(They catch errors in actual browser environment)");

// Simulate catching
try {
  throw new Error("Simulated error");
} catch (e) {
  console.log("\\nSimulated catch:", e.message);
}

// Error monitoring service integration example
class ErrorMonitor {
  static log(error, context = {}) {
    console.log("\\nError Monitor:");
    console.log("Error:", error.message);
    console.log("Context:", JSON.stringify(context));
    // Send to logging service
  }
}

ErrorMonitor.log(new Error("Test error"), { 
  user: "john", 
  action: "submit" 
});`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Error Handling Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Always use Error objects
                </strong>
                <p className="ml-4 mt-1">
                  throw new Error() instead of strings/numbers for stack traces
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Provide meaningful error messages
                </strong>
                <p className="ml-4 mt-1">
                  Include context: what failed, why, and how to fix
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use specific error types
                </strong>
                <p className="ml-4 mt-1">
                  TypeError for type issues, RangeError for ranges, etc.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Create custom error classes
                </strong>
                <p className="ml-4 mt-1">
                  Extend Error for domain-specific errors (ValidationError,
                  ApiError)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Don't swallow errors silently
                </strong>
                <p className="ml-4 mt-1">
                  Empty catch blocks hide problems - at least log them
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Handle async errors properly
                </strong>
                <p className="ml-4 mt-1">
                  Always use .catch() or try/catch with async/await
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use finally for cleanup
                </strong>
                <p className="ml-4 mt-1">
                  Close files, connections, release resources
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Log errors with context
                </strong>
                <p className="ml-4 mt-1">
                  Include user ID, action, timestamp, environment
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Differentiate user vs system errors
                </strong>
                <p className="ml-4 mt-1">
                  Show friendly messages to users, log technical details
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Use error cause chains (ES2022)
                </strong>
                <p className="ml-4 mt-1">
                  Wrap errors with context while preserving original error
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Error Handling Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Error Handling Utilities"
              initialCode={`// Retry with exponential backoff
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      const isLastAttempt = i === maxRetries - 1;
      if (isLastAttempt) {
        throw error;
      }
      
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      console.log(\`Retry \${i + 1} after \${delay}ms\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Circuit breaker pattern
class CircuitBreaker {
  constructor(threshold = 5) {
    this.failures = 0;
    this.threshold = threshold;
    this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
  }
  
  async execute(fn) {
    if (this.state === "OPEN") {
      throw new Error("Circuit breaker is OPEN");
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failures = 0;
    this.state = "CLOSED";
  }
  
  onFailure() {
    this.failures++;
    if (this.failures >= this.threshold) {
      this.state = "OPEN";
      console.log("Circuit breaker OPEN");
    }
  }
}

const breaker = new CircuitBreaker(3);
console.log("Circuit breaker state:", breaker.state);

// Safe JSON parse
function safeJsonParse(json, defaultValue = null) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.log("\\nJSON parse error:", error.message);
    return defaultValue;
  }
}

console.log("\\nValid JSON:", safeJsonParse('{"name":"John"}'));
console.log("Invalid JSON:", safeJsonParse("{invalid}", {}));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Error Logging & Monitoring"
              initialCode={`// Comprehensive error logger

class ErrorLogger {
  static log(error, context = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause,
      context: context,
      environment: "production",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "N/A"
    };
    
    console.log("Error Log Entry:");
    console.log(JSON.stringify(logEntry, null, 2));
    
    // Send to logging service
    // this.sendToService(logEntry);
  }
  
  static createErrorReport(error) {
    return {
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack?.split("\\n").slice(0, 3).join("\\n")
      },
      context: {
        url: typeof window !== "undefined" ? window.location.href : "N/A",
        timestamp: Date.now()
      }
    };
  }
}

// Usage
try {
  throw new Error("Test error for logging");
} catch (error) {
  ErrorLogger.log(error, {
    action: "submitForm",
    userId: 123,
    formData: { name: "John" }
  });
}

// Error boundary pattern (React-like)
class ErrorBoundary {
  constructor() {
    this.errors = [];
  }
  
  catchError(fn, fallback) {
    try {
      return fn();
    } catch (error) {
      this.errors.push(error);
      console.log("\\nError boundary caught:", error.message);
      return fallback;
    }
  }
  
  getErrors() {
    return this.errors;
  }
}

const boundary = new ErrorBoundary();
const result = boundary.catchError(
  () => { throw new Error("Boundary test"); },
  "Fallback value"
);

console.log("\\nResult:", result);
console.log("Errors caught:", boundary.getErrors().length);`}
            />
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 9 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Error Handling</strong> in JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">9</div>
                <div className="text-gray-400">Error Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">4</div>
                <div className="text-gray-400">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">5</div>
                <div className="text-gray-400">Handling Mechanisms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  10
                </div>
                <div className="text-gray-400">Best Practices</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all"
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
