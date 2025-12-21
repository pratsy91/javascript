"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function JSONPage() {
  return (
    <SectionLayout
      title="20.1 JSON - Complete"
      description="Master JSON.parse, JSON.stringify, reviver, replacer, and all JSON concepts"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📋 Complete JSON Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            JSON (JavaScript Object Notation) is a lightweight data interchange
            format. This section covers <strong>EVERYTHING</strong> about JSON
            in JavaScript - methods, syntax, serialization, and best practices.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "JSON.parse()",
              "JSON.stringify()",
              "Reviver Function",
              "Replacer Function",
              "Supported Types",
              "Custom toJSON",
              "Pretty Printing",
              "Security",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-teal-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* JSON.parse */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📥 JSON.parse(text, reviver)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic JSON.parse()"
              initialCode={`// JSON.parse(text) - convert JSON string to JavaScript value

// Parse object
const jsonObject = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonObject);
console.log("Parsed object:", obj);
console.log("Type:", typeof obj); // "object"
console.log("Name:", obj.name);

// Parse array
const jsonArray = '[1,2,3,4,5]';
const arr = JSON.parse(jsonArray);
console.log("\\nParsed array:", arr);
console.log("Type:", Array.isArray(arr)); // true

// Parse primitives
console.log("\\nPrimitives:");
console.log(JSON.parse('42')); // 42
console.log(JSON.parse('"hello"')); // "hello"
console.log(JSON.parse('true')); // true
console.log(JSON.parse('null')); // null

// Invalid JSON throws SyntaxError
try {
  JSON.parse('{invalid json}');
} catch (e) {
  console.log("\\nInvalid JSON:", e.name); // SyntaxError
}

// Common errors
try {
  JSON.parse("undefined"); // Not valid JSON!
} catch (e) {
  console.log("undefined not valid:", e.name);
}

// Single quotes not allowed
try {
  JSON.parse("{'key':'value'}"); // Must use double quotes!
} catch (e) {
  console.log("Single quotes:", e.name);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="JSON.parse() with Reviver"
              initialCode={`// Reviver function: transform values during parsing

const json = '{"name":"Alice","created":"2024-10-15T10:00:00.000Z","age":25}';

// Basic parse (dates are strings!)
const obj1 = JSON.parse(json);
console.log("Without reviver:");
console.log("created:", obj1.created);
console.log("Type:", typeof obj1.created); // "string"

// With reviver - convert dates
const obj2 = JSON.parse(json, (key, value) => {
  // key is property name, value is parsed value
  console.log(\`Reviver: \${key} = \${value}\`);
  
  // Convert ISO date strings to Date objects
  if (typeof value === "string" && /^\\d{4}-\\d{2}-\\d{2}T/.test(value)) {
    return new Date(value);
  }
  
  return value;
});

console.log("\\nWith reviver:");
console.log("created:", obj2.created);
console.log("Type:", obj2.created instanceof Date); // true

// Transform values
const json2 = '{"price":"$100","qty":"5"}';

const obj3 = JSON.parse(json2, (key, value) => {
  if (key === "price") {
    return parseFloat(value.slice(1)); // Remove $, parse number
  }
  if (key === "qty") {
    return parseInt(value);
  }
  return value;
});

console.log("\\nTransformed:", obj3); // {price: 100, qty: 5}

// Filter values
const json3 = '{"public":"yes","_private":"hidden","data":"value"}';

const obj4 = JSON.parse(json3, (key, value) => {
  // Skip private properties (starting with _)
  if (key.startsWith("_")) {
    return undefined; // Removes property
  }
  return value;
});

console.log("\\nFiltered:", obj4); // No _private!`}
            />
          </div>
        </section>

        {/* JSON.stringify */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📤 JSON.stringify(value, replacer, space)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic JSON.stringify()"
              initialCode={`// JSON.stringify(value) - convert value to JSON string

// Object
const obj = { name: "Alice", age: 25 };
console.log("Object:", JSON.stringify(obj));

// Array
const arr = [1, 2, 3, 4, 5];
console.log("\\nArray:", JSON.stringify(arr));

// Nested
const nested = {
  user: { name: "Bob", age: 30 },
  items: [1, 2, 3]
};
console.log("\\nNested:", JSON.stringify(nested));

// Primitives
console.log("\\nPrimitives:");
console.log(JSON.stringify(42)); // "42"
console.log(JSON.stringify("hello")); // "\\"hello\\""
console.log(JSON.stringify(true)); // "true"
console.log(JSON.stringify(null)); // "null"

// Unsupported types become undefined or are omitted
const unsupported = {
  func: function() {},
  undef: undefined,
  sym: Symbol("test"),
  date: new Date(),
  valid: "kept"
};

console.log("\\nUnsupported types:");
console.log(JSON.stringify(unsupported));
// {"date":"2024-10-15...","valid":"kept"}
// func, undef, sym are omitted!

// In arrays, unsupported become null
console.log("\\nIn array:");
console.log(JSON.stringify([1, undefined, function() {}, Symbol(), 5]));
// "[1,null,null,null,5]"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="JSON.stringify() with Replacer"
              initialCode={`const obj = {
  name: "Alice",
  age: 25,
  password: "secret123",
  email: "alice@example.com"
};

// Replacer as array - include only these properties
console.log("Replacer array:");
const json1 = JSON.stringify(obj, ["name", "email"]);
console.log(json1); // Only name and email

// Replacer as function - transform/filter
const json2 = JSON.stringify(obj, (key, value) => {
  console.log(\`Replacer: \${key} = \${value}\`);
  
  // Filter out password
  if (key === "password") {
    return undefined; // Omit property
  }
  
  // Transform age
  if (key === "age") {
    return value + " years";
  }
  
  return value;
});

console.log("\\nReplacer function:", json2);

// Add metadata
const withMeta = JSON.stringify(obj, (key, value) => {
  // Root object
  if (key === "") {
    return {
      ...value,
      _timestamp: Date.now(),
      _version: "1.0"
    };
  }
  return value;
});

console.log("\\nWith metadata:", withMeta);

// Number formatting
const data = { price: 99.999, tax: 5.001 };

const formatted = JSON.stringify(data, (key, value) => {
  if (typeof value === "number") {
    return parseFloat(value.toFixed(2));
  }
  return value;
});

console.log("\\nFormatted numbers:", formatted);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="JSON.stringify() Pretty Printing"
              initialCode={`const obj = {
  name: "Alice",
  age: 25,
  address: {
    city: "NYC",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};

// Compact (default)
console.log("Compact:");
console.log(JSON.stringify(obj));

// Pretty print with space parameter (number = indent)
console.log("\\nPretty (2 spaces):");
console.log(JSON.stringify(obj, null, 2));

// 4 spaces
console.log("\\nPretty (4 spaces):");
console.log(JSON.stringify(obj, null, 4));

// Custom indent (string)
console.log("\\nPretty (tabs):");
console.log(JSON.stringify(obj, null, "\\t"));

// Custom prefix
console.log("\\nCustom prefix:");
console.log(JSON.stringify(obj, null, "| "));

// Combining replacer and space
const filtered = JSON.stringify(
  obj,
  (key, value) => key === "age" ? undefined : value,
  2
);

console.log("\\nFiltered + Pretty:");
console.log(filtered);

// For debugging
function debug(data) {
  console.log(JSON.stringify(data, null, 2));
}

console.log("\\nDebug utility:");
debug({ x: 1, y: { z: 2 } });`}
            />
          </div>
        </section>

        {/* JSON Data Types */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 JSON Data Types
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Supported vs Unsupported Types"
              initialCode={`// SUPPORTED JSON types:

const supported = {
  // Primitives
  string: "text",
  number: 42,
  boolean: true,
  null: null,
  
  // Structures
  object: { nested: "value" },
  array: [1, 2, 3]
};

console.log("Supported types:");
console.log(JSON.stringify(supported, null, 2));

// UNSUPPORTED types (omitted or converted):

const unsupported = {
  // Omitted
  func: function() {},
  undef: undefined,
  symbol: Symbol("test"),
  
  // Converted
  date: new Date("2024-10-15"),
  regex: /test/g,
  map: new Map([["key", "value"]]),
  set: new Set([1, 2, 3]),
  
  // Special cases
  nan: NaN,
  infinity: Infinity,
  negInfinity: -Infinity
};

console.log("\\nUnsupported types:");
console.log(JSON.stringify(unsupported, null, 2));

// Results:
console.log("\\nWhat happens:");
console.log("function → omitted");
console.log("undefined → omitted");
console.log("Symbol → omitted");
console.log("Date → ISO string");
console.log("RegExp → empty object {}");
console.log("Map/Set → empty object {}");
console.log("NaN/Infinity → null");

// In arrays, omitted values become null
console.log("\\nIn arrays:");
console.log(JSON.stringify([1, undefined, function() {}, 4]));
// "[1,null,null,4]"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Custom toJSON() Method"
              initialCode={`// Objects can define toJSON() for custom serialization

class User {
  constructor(name, password, createdAt) {
    this.name = name;
    this.password = password;
    this.createdAt = createdAt;
  }
  
  toJSON() {
    return {
      name: this.name,
      // Omit password
      createdAt: this.createdAt.toISOString()
    };
  }
}

const user = new User("Alice", "secret123", new Date());
console.log("With toJSON():");
console.log(JSON.stringify(user, null, 2));

// Date uses toJSON()
const date = new Date("2024-10-15T10:30:00Z");
console.log("\\nDate toJSON:");
console.log(JSON.stringify(date)); // ISO string

// Custom object
const point = {
  x: 10,
  y: 20,
  toJSON() {
    return \`(\${this.x}, \${this.y})\`;
  }
};

console.log("\\nPoint:", JSON.stringify(point)); // \\"(10, 20)\\"

// Nested toJSON
const wrapper = {
  user: new User("Bob", "pass", new Date()),
  timestamp: new Date()
};

console.log("\\nNested toJSON:");
console.log(JSON.stringify(wrapper, null, 2));

// toJSON takes precedence over replacer
const obj = {
  value: 100,
  toJSON() {
    return { customValue: this.value * 2 };
  }
};

console.log("\\ntoJSON precedence:");
console.log(JSON.stringify(obj)); // Uses toJSON`}
            />
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical JSON Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Deep Clone with JSON"
              initialCode={`// Simple deep clone using JSON

const original = {
  name: "Alice",
  age: 25,
  address: {
    city: "NYC",
    zip: "10001"
  },
  hobbies: ["reading", "coding"]
};

// Deep clone
const clone = JSON.parse(JSON.stringify(original));

// Modify clone
clone.name = "Bob";
clone.address.city = "LA";
clone.hobbies.push("gaming");

console.log("Original:", original);
console.log("\\nClone:", clone);
console.log("\\nDifferent objects:", original !== clone);
console.log("Deep clone works:", original.address.city === "NYC");

// Limitations of JSON cloning
const complex = {
  date: new Date(),
  func: function() {},
  undef: undefined,
  regex: /test/,
  map: new Map([["key", "value"]])
};

const cloned = JSON.parse(JSON.stringify(complex));

console.log("\\nJSON clone limitations:");
console.log("Original:", complex);
console.log("Cloned:", cloned);
console.log("Lost: functions, undefined, Maps, etc.");
console.log("Date became string!");

console.log("\\nUse for:");
console.log("✅ Simple objects with primitives");
console.log("✅ Nested objects and arrays");
console.log("❌ Complex objects with methods");
console.log("❌ Objects with Dates, RegExp, Map, Set");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Circular Reference Handling"
              initialCode={`// JSON.stringify throws on circular references

const obj = { name: "Test" };
obj.self = obj; // Circular reference!

try {
  JSON.stringify(obj);
} catch (e) {
  console.log("Error:", e.message);
  // "Converting circular structure to JSON"
}

// Solution 1: Remove circular refs with replacer
const seen = new WeakSet();

const json1 = JSON.stringify(obj, (key, value) => {
  if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
      return "[Circular]";
    }
    seen.add(value);
  }
  return value;
});

console.log("\\nWith circular handling:", json1);

// Solution 2: Use library (like flatted or circular-json)
// or implement custom serialization

// Practical: serialize object graph
const user = { name: "Alice" };
const post = { title: "Post", author: user };
user.posts = [post]; // Circular!

const safeStringify = (obj, indent = 2) => {
  const cache = new WeakSet();
  
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return "[Circular Reference]";
      }
      cache.add(value);
    }
    return value;
  }, indent);
};

console.log("\\nSafe stringify:");
console.log(safeStringify({ user, post }));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="JSON Security"
              initialCode={`// Security considerations with JSON

console.log("JSON Security:");
console.log("");

// 1. JSON.parse() is safe (unlike eval)
console.log("1. JSON.parse vs eval:");
console.log("   JSON.parse: Safe (only data)");
console.log("   eval: Dangerous (executes code!)");
console.log("");

// NEVER use eval for JSON!
// const bad = eval('({key: "value"})'); // DANGEROUS!

// 2. Validate JSON before parsing
function safeJsonParse(text, fallback = null) {
  try {
    return JSON.parse(text);
  } catch (e) {
    console.log("   Invalid JSON:", e.message);
    return fallback;
  }
}

console.log("2. Safe parsing:");
console.log("   Valid:", safeJsonParse('{"key":"value"}'));
console.log("   Invalid:", safeJsonParse("{invalid}"));

// 3. Sanitize user input
function sanitizeForJSON(str) {
  // Remove potential XSS
  return str.replace(/[<>]/g, "");
}

const userInput = "<script>alert('xss')</script>";
const safe = { input: sanitizeForJSON(userInput) };
console.log("\\n3. Sanitized:", JSON.stringify(safe));

// 4. Limit JSON size
function parseWithSizeLimit(text, maxSize = 1000000) {
  if (text.length > maxSize) {
    throw new Error("JSON too large");
  }
  return JSON.parse(text);
}

// 5. Validate schema
function validateUser(json) {
  const user = JSON.parse(json);
  
  if (!user.name || typeof user.name !== "string") {
    throw new Error("Invalid name");
  }
  if (!user.age || typeof user.age !== "number") {
    throw new Error("Invalid age");
  }
  
  return user;
}

console.log("\\n5. Schema validation:");
try {
  validateUser('{"name":"Alice","age":25}');
  console.log("   Valid user");
} catch (e) {
  console.log("   " + e.message);
}`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ JSON Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Always use JSON.parse(), never eval()
                </strong>
                <p className="ml-4 mt-1">
                  eval() executes code, JSON.parse() only parses data
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Handle JSON.parse() errors
                </strong>
                <p className="ml-4 mt-1">
                  Always wrap in try/catch for invalid JSON
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use reviver for Date conversion
                </strong>
                <p className="ml-4 mt-1">JSON doesn't preserve Date objects</p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use replacer to filter sensitive data
                </strong>
                <p className="ml-4 mt-1">
                  Remove passwords, tokens, private fields
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Pretty print for debugging
                </strong>
                <p className="ml-4 mt-1">
                  Use space parameter (2 or 4) for readability
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Handle circular references
                </strong>
                <p className="ml-4 mt-1">
                  Use WeakSet-based replacer to detect/handle
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Implement toJSON() for custom serialization
                </strong>
                <p className="ml-4 mt-1">Control how objects are serialized</p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Don't rely on property order
                </strong>
                <p className="ml-4 mt-1">
                  JSON objects are unordered (though JS maintains insertion
                  order)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Validate JSON schema
                </strong>
                <p className="ml-4 mt-1">
                  Check structure and types after parsing
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Be aware of JSON limitations
                </strong>
                <p className="ml-4 mt-1">
                  No functions, undefined, symbols, or complex types
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 20 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>EVERYTHING about JSON</strong> in
              JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
                <div className="text-gray-400">JSON Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">6</div>
                <div className="text-gray-400">Data Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Reviver
                </div>
                <div className="text-gray-400">Transform on parse</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Replacer
                </div>
                <div className="text-gray-400">Filter on stringify</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all"
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
