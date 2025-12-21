"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ModulesPage() {
  return (
    <SectionLayout
      title="14.1 Modules - Complete"
      description="Master ES Modules, CommonJS, dynamic imports, and all module patterns"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📦 Complete Modules Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Modules are reusable pieces of code that can be exported and
            imported. This section covers <strong>EVERYTHING</strong> about ES
            Modules, CommonJS, dynamic imports, and module patterns.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "ES Modules",
              "Export Syntax",
              "Import Syntax",
              "Dynamic Import",
              "CommonJS",
              "Module Scope",
              "Live Bindings",
              "Module Patterns",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-lime-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Export Syntax */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📤 ES Module Export Syntax
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Export Declaration"
              initialCode={`// 1. Named export - export declaration
// export const name = value;
// export function name() {}
// export class Name {}

// Example (conceptual - shown as strings):
console.log("Named exports:");
console.log("export const PI = 3.14159;");
console.log("export const E = 2.71828;");
console.log("");
console.log("export function add(a, b) {");
console.log("  return a + b;");
console.log("}");
console.log("");
console.log("export class Calculator {");
console.log("  multiply(a, b) { return a * b; }");
console.log("}");

// 2. Export list - export { name }
console.log("\\nExport list:");
console.log("const x = 1;");
console.log("const y = 2;");
console.log("export { x, y };");

// 3. Export with alias - export { name as alias }
console.log("\\nExport with alias:");
console.log("const internalName = 'value';");
console.log("export { internalName as publicName };");

// 4. Default export - export default
console.log("\\nDefault export:");
console.log("export default function() { }");
console.log("export default class { }");
console.log("export default 42;");
console.log("export default { name: 'value' };");

console.log("\\nNote: Only ONE default export per module!");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Re-export Syntax"
              initialCode={`// Re-export from another module

// 5. Re-export named - export { name } from 'module'
console.log("Re-export named:");
console.log("export { add, subtract } from './math.js';");
console.log("");

// 6. Re-export all - export * from 'module'
console.log("Re-export all:");
console.log("export * from './utilities.js';");
console.log("");

// 7. Re-export as namespace - export * as name from 'module' (ES2020)
console.log("Re-export as namespace (ES2020):");
console.log("export * as mathUtils from './math.js';");
console.log("");

// Re-export with alias
console.log("Re-export with alias:");
console.log("export { default as MainComponent } from './Component.js';");
console.log("export { oldName as newName } from './module.js';");
console.log("");

// Common pattern: index.js barrel
console.log("Barrel pattern (index.js):");
console.log("export { User } from './User.js';");
console.log("export { Product } from './Product.js';");
console.log("export { Order } from './Order.js';");
console.log("// Then: import { User, Product } from './models';");`}
            />
          </div>
        </section>

        {/* Import Syntax */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📥 ES Module Import Syntax
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Import Syntax Variants"
              initialCode={`// 1. Import default - import name from 'module'
console.log("Default import:");
console.log("import React from 'react';");
console.log("import MyComponent from './MyComponent.js';");
console.log("");

// 2. Import named - import { name } from 'module'
console.log("Named imports:");
console.log("import { useState, useEffect } from 'react';");
console.log("import { add, subtract } from './math.js';");
console.log("");

// 3. Import with alias - import { name as alias } from 'module'
console.log("Import with alias:");
console.log("import { longFunctionName as fn } from './utils.js';");
console.log("import { Component as C } from './Component.js';");
console.log("");

// 4. Import namespace - import * as name from 'module'
console.log("Import namespace:");
console.log("import * as React from 'react';");
console.log("import * as math from './math.js';");
console.log("// Usage: math.add(1, 2)");
console.log("");

// 5. Import for side effects - import 'module'
console.log("Side effects only:");
console.log("import './polyfills.js';");
console.log("import './styles.css';");
console.log("");

// 6. Import default explicitly - import { default as name }
console.log("Default as named:");
console.log("import { default as React } from 'react';");
console.log("");

// 7. Mixed import - import default, { named }
console.log("Mixed import:");
console.log("import React, { useState, useEffect } from 'react';");
console.log("import Component, { helper1, helper2 } from './module.js';");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Import Examples"
              initialCode={`// Example module structure

console.log("=== math.js ===");
console.log("export const PI = 3.14159;");
console.log("export function add(a, b) { return a + b; }");
console.log("export function subtract(a, b) { return a - b; }");
console.log("export default function multiply(a, b) { return a * b; }");
console.log("");

console.log("=== app.js (using math.js) ===");
console.log("");

// Different import styles
console.log("// 1. Default only");
console.log("import multiply from './math.js';");
console.log("multiply(2, 3); // 6");
console.log("");

console.log("// 2. Named only");
console.log("import { add, subtract } from './math.js';");
console.log("add(5, 3); // 8");
console.log("");

console.log("// 3. Mixed (default + named)");
console.log("import multiply, { add, PI } from './math.js';");
console.log("multiply(2, PI); // 6.28...");
console.log("");

console.log("// 4. Namespace");
console.log("import * as math from './math.js';");
console.log("math.default(2, 3); // 6 (default export)");
console.log("math.add(1, 2); // 3 (named export)");
console.log("math.PI; // 3.14159");
console.log("");

console.log("// 5. With aliases");
console.log("import { add as sum, subtract as diff } from './math.js';");
console.log("sum(5, 3); // 8");`}
            />
          </div>
        </section>

        {/* Dynamic Import */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🚀 Dynamic Import (ES2020)
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">Dynamic Import:</strong>{" "}
              <code className="text-blue-300">import(specifier)</code> loads
              modules dynamically at runtime. Returns a Promise that resolves to
              the module namespace.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Dynamic Import Basics"
              initialCode={`// import(specifier) returns a Promise

// Basic usage (conceptual)
console.log("Dynamic import syntax:");
console.log("import('./module.js')");
console.log("  .then(module => {");
console.log("    module.default(); // default export");
console.log("    module.namedExport(); // named export");
console.log("  });");

// With async/await
console.log("\\nWith async/await:");
console.log("async function loadModule() {");
console.log("  const module = await import('./module.js');");
console.log("  module.doSomething();");
console.log("}");

// Conditional loading
console.log("\\nConditional:");
console.log("if (condition) {");
console.log("  const module = await import('./heavy-module.js');");
console.log("}");

// Dynamic path
console.log("\\nDynamic path:");
console.log("const lang = 'en';");
console.log("const module = await import(\`./i18n/\${lang}.js\`);");

// Code splitting benefits
console.log("\\nBenefits:");
console.log("- Lazy loading (load only when needed)");
console.log("- Code splitting (smaller initial bundle)");
console.log("- Conditional imports (load based on condition)");
console.log("- Dynamic paths (computed at runtime)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Dynamic Import Patterns"
              initialCode={`// Pattern 1: Lazy loading on user action
async function handleButtonClick() {
  console.log("Button clicked - loading module...");
  
  // Only load when needed
  const module = await Promise.resolve({ 
    default: () => console.log("Heavy module loaded!") 
  });
  
  module.default();
}

console.log("Module not loaded yet");
setTimeout(handleButtonClick, 1000);

// Pattern 2: Conditional loading
async function loadFeature(featureName) {
  console.log(\`\\nLoading feature: \${featureName}\`);
  
  // Simulate dynamic import
  const features = {
    chat: { init: () => console.log("Chat initialized") },
    video: { init: () => console.log("Video initialized") },
    audio: { init: () => console.log("Audio initialized") }
  };
  
  const module = await Promise.resolve(features[featureName]);
  module.init();
}

loadFeature("chat");

// Pattern 3: Route-based loading (SPA)
async function loadRoute(route) {
  console.log(\`\\nLoading route: \${route}\`);
  
  const routes = {
    '/home': { render: () => "Home page" },
    '/about': { render: () => "About page" },
    '/contact': { render: () => "Contact page" }
  };
  
  const module = await Promise.resolve(routes[route]);
  console.log(module.render());
}

loadRoute("/home");

// Pattern 4: Feature detection
async function loadPolyfill() {
  if (!('fetch' in window)) {
    console.log("\\nLoading fetch polyfill...");
    // await import('./polyfills/fetch.js');
  } else {
    console.log("\\nfetch already available");
  }
}

loadPolyfill();`}
            />
          </div>
        </section>

        {/* Module Concepts */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💡 Module Concepts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="Module Scope" icon="🔒" color="blue">
              Each module has its own scope (not global)
            </ConceptCard>
            <ConceptCard title="Strict Mode" icon="⚠️" color="purple">
              Modules are in strict mode automatically
            </ConceptCard>
            <ConceptCard title="this = undefined" icon="❓" color="green">
              Top-level this is undefined (not window)
            </ConceptCard>
            <ConceptCard title="Live Bindings" icon="🔄" color="yellow">
              Imports are live references, not copies
            </ConceptCard>
            <ConceptCard title="Singleton" icon="1️⃣" color="orange">
              Modules are cached (loaded once)
            </ConceptCard>
            <ConceptCard title="Hoisting" icon="⬆️" color="red">
              Imports are hoisted to top
            </ConceptCard>
            <ConceptCard title="Deferred" icon="⏳" color="pink">
              Scripts defer by default (like defer attribute)
            </ConceptCard>
            <ConceptCard title="CORS" icon="🌐" color="indigo">
              Must respect CORS (can't load file://)
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Module Scope & Strict Mode"
              initialCode={`// Module concepts demonstrated

console.log("1. Module Scope:");
console.log("Variables in modules are not global");
console.log("const x = 1; // Not accessible from other modules");
console.log("unless explicitly exported");
console.log("");

console.log("2. Automatic Strict Mode:");
console.log("'use strict' not needed - modules are strict by default");
console.log("// This would error in module:");
console.log("// undeclaredVar = 42; // ReferenceError");
console.log("// delete Object.prototype; // TypeError");
console.log("");

console.log("3. Top-level 'this':");
console.log("In modules: this === undefined");
console.log("In scripts: this === window (browser)");
console.log("Current:", typeof this); // "undefined" in module
console.log("");

console.log("4. Deferred Execution:");
console.log("<script type='module'> is like <script defer>");
console.log("- Downloads in parallel");
console.log("- Executes after DOM ready");
console.log("- Maintains order");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Live Bindings"
              initialCode={`// ES Modules use live bindings (not copies)

console.log("Live bindings example:");
console.log("");
console.log("=== counter.js ===");
console.log("export let count = 0;");
console.log("export function increment() { count++; }");
console.log("");
console.log("=== app.js ===");
console.log("import { count, increment } from './counter.js';");
console.log("");
console.log("console.log(count); // 0");
console.log("increment();");
console.log("console.log(count); // 1 (LIVE - updated!)");
console.log("");

console.log("vs CommonJS (copies):");
console.log("");
console.log("=== counter.js ===");
console.log("let count = 0;");
console.log("module.exports = { count, increment: () => count++ };");
console.log("");
console.log("=== app.js ===");
console.log("const { count, increment } = require('./counter.js');");
console.log("");
console.log("console.log(count); // 0");
console.log("increment();");
console.log("console.log(count); // 0 (COPY - not updated!)");
console.log("");

console.log("Key difference:");
console.log("ES Modules: Live reference (updates reflect)");
console.log("CommonJS: Copy of value (no updates)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Module Caching & Circular Dependencies"
              initialCode={`// Modules are cached (singleton)

console.log("Module caching:");
console.log("");
console.log("=== counter.js ===");
console.log("let count = 0;");
console.log("export function getCount() { return count++; }");
console.log("");
console.log("=== app.js ===");
console.log("import { getCount } from './counter.js';");
console.log("import { getCount as getCount2 } from './counter.js';");
console.log("");
console.log("console.log(getCount()); // 0");
console.log("console.log(getCount2()); // 1 (same module!)");
console.log("");

console.log("Circular dependencies:");
console.log("");
console.log("=== a.js ===");
console.log("import { b } from './b.js';");
console.log("export const a = 'a';");
console.log("console.log(b); // Works! (TDZ aware)");
console.log("");
console.log("=== b.js ===");
console.log("import { a } from './a.js';");
console.log("export const b = 'b';");
console.log("console.log(a); // Works!");
console.log("");

console.log("ES Modules handle circular deps better than CommonJS");
console.log("Uses 'temporal dead zone' awareness");`}
            />
          </div>
        </section>

        {/* CommonJS */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📦 CommonJS (Node.js)
          </h2>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-orange-400">CommonJS:</strong> The module
              system used in Node.js (before ES Modules). Uses{" "}
              <code className="text-orange-300">require()</code> and{" "}
              <code className="text-orange-300">module.exports</code>.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="CommonJS Syntax"
              initialCode={`// CommonJS module system (Node.js)

console.log("=== math.js (CommonJS) ===");
console.log("function add(a, b) { return a + b; }");
console.log("function subtract(a, b) { return a - b; }");
console.log("");
console.log("// Export object");
console.log("module.exports = { add, subtract };");
console.log("");
console.log("// Or export individual properties");
console.log("exports.add = add;");
console.log("exports.subtract = subtract;");
console.log("");
console.log("// Or export single value");
console.log("module.exports = add;");
console.log("");

console.log("=== app.js (CommonJS) ===");
console.log("");
console.log("// require() - synchronous import");
console.log("const math = require('./math.js');");
console.log("math.add(1, 2); // 3");
console.log("");
console.log("// Destructure");
console.log("const { add, subtract } = require('./math.js');");
console.log("add(5, 3); // 8");
console.log("");

console.log("Module wrapper function:");
console.log("(function(exports, require, module, __filename, __dirname) {");
console.log("  // Your module code here");
console.log("});");
console.log("");

console.log("Special variables:");
console.log("__dirname - directory path");
console.log("__filename - file path");
console.log("module - current module object");
console.log("exports - shorthand for module.exports");
console.log("require - function to import modules");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="ES Modules vs CommonJS"
              initialCode={`// Key differences

console.log("ES Modules vs CommonJS:");
console.log("");

console.log("1. Syntax:");
console.log("ES: import/export");
console.log("CJS: require()/module.exports");
console.log("");

console.log("2. Loading:");
console.log("ES: Asynchronous");
console.log("CJS: Synchronous");
console.log("");

console.log("3. Parsing:");
console.log("ES: Static (analyzed before execution)");
console.log("CJS: Dynamic (evaluated at runtime)");
console.log("");

console.log("4. Tree-shaking:");
console.log("ES: Yes (dead code elimination)");
console.log("CJS: No (all code included)");
console.log("");

console.log("5. this:");
console.log("ES: undefined at top level");
console.log("CJS: exports object");
console.log("");

console.log("6. Bindings:");
console.log("ES: Live (references)");
console.log("CJS: Copy (values)");
console.log("");

console.log("7. Default export:");
console.log("ES: export default x");
console.log("CJS: module.exports = x");
console.log("");

console.log("8. Named exports:");
console.log("ES: export { x }");
console.log("CJS: module.exports = { x } or exports.x = x");
console.log("");

console.log("9. File extension:");
console.log("ES: .mjs or 'type': 'module' in package.json");
console.log("CJS: .js or .cjs");`}
            />
          </div>
        </section>

        {/* Module Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎨 Module Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Singleton Pattern"
              initialCode={`// Singleton - single instance shared across imports

console.log("=== Database.js (Singleton) ===");
console.log("");
console.log("class Database {");
console.log("  constructor() {");
console.log("    if (Database.instance) {");
console.log("      return Database.instance;");
console.log("    }");
console.log("    this.connection = 'Connected';");
console.log("    Database.instance = this;");
console.log("  }");
console.log("}");
console.log("");
console.log("export default new Database(); // Export instance");
console.log("");

console.log("=== app.js ===");
console.log("import db from './Database.js';");
console.log("console.log(db.connection); // 'Connected'");
console.log("");

console.log("Modules are naturally singletons:");
console.log("- Loaded once");
console.log("- Cached");
console.log("- Same instance across imports");
console.log("");

// Simulated singleton
class Counter {
  constructor() {
    this.count = 0;
  }
  
  increment() {
    return ++this.count;
  }
}

const counter = new Counter();

console.log("Singleton counter:");
console.log("First call:", counter.increment()); // 1
console.log("Second call:", counter.increment()); // 2
console.log("All imports share this instance");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Factory Pattern"
              initialCode={`// Factory - create instances

console.log("=== UserFactory.js ===");
console.log("");
console.log("class User {");
console.log("  constructor(name, role) {");
console.log("    this.name = name;");
console.log("    this.role = role;");
console.log("  }");
console.log("}");
console.log("");
console.log("export function createUser(name, role = 'user') {");
console.log("  return new User(name, role);");
console.log("}");
console.log("");
console.log("export function createAdmin(name) {");
console.log("  return new User(name, 'admin');");
console.log("}");
console.log("");

console.log("=== app.js ===");
console.log("import { createUser, createAdmin } from './UserFactory.js';");
console.log("");
console.log("const user1 = createUser('Alice');");
console.log("const admin = createAdmin('Bob');");
console.log("");

// Simulation
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

function createUser(name, role = "user") {
  return new User(name, role);
}

function createAdmin(name) {
  return new User(name, "admin");
}

const user1 = createUser("Alice");
const admin = createAdmin("Bob");

console.log("User:", user1);
console.log("Admin:", admin);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Revealing Module Pattern"
              initialCode={`// Revealing Module - expose only public API

console.log("=== Calculator.js ===");
console.log("");
console.log("// Private");
console.log("let memory = 0;");
console.log("");
console.log("function validateNumber(n) {");
console.log("  if (typeof n !== 'number') throw new Error('Not a number');");
console.log("}");
console.log("");
console.log("// Public");
console.log("export function add(a, b) {");
console.log("  validateNumber(a);");
console.log("  validateNumber(b);");
console.log("  return a + b;");
console.log("}");
console.log("");
console.log("export function saveToMemory(value) {");
console.log("  memory = value;");
console.log("}");
console.log("");
console.log("export function getMemory() {");
console.log("  return memory;");
console.log("}");
console.log("");

// Simulation
let memory = 0;

function validateNumber(n) {
  if (typeof n !== "number") throw new Error("Not a number");
}

const calculator = {
  add(a, b) {
    validateNumber(a);
    validateNumber(b);
    return a + b;
  },
  
  saveToMemory(value) {
    memory = value;
  },
  
  getMemory() {
    return memory;
  }
};

console.log("Public API only:");
console.log("add(5, 3):", calculator.add(5, 3));
calculator.saveToMemory(42);
console.log("getMemory():", calculator.getMemory());
console.log("\\nmemory variable is private (not accessible)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Namespace Pattern"
              initialCode={`// Namespace - group related functionality

console.log("=== Utils.js ===");
console.log("");
console.log("export const string = {");
console.log("  capitalize(str) {");
console.log("    return str.charAt(0).toUpperCase() + str.slice(1);");
console.log("  },");
console.log("  reverse(str) {");
console.log("    return str.split('').reverse().join('');");
console.log("  }");
console.log("};");
console.log("");
console.log("export const array = {");
console.log("  shuffle(arr) {");
console.log("    return arr.sort(() => Math.random() - 0.5);");
console.log("  },");
console.log("  unique(arr) {");
console.log("    return [...new Set(arr)];");
console.log("  }");
console.log("};");
console.log("");
console.log("export const number = {");
console.log("  random(min, max) {");
console.log("    return Math.floor(Math.random() * (max - min + 1)) + min;");
console.log("  }");
console.log("};");
console.log("");

console.log("=== app.js ===");
console.log("import * as utils from './Utils.js';");
console.log("");
console.log("utils.string.capitalize('hello'); // 'Hello'");
console.log("utils.array.unique([1,1,2,3,3]); // [1,2,3]");
console.log("utils.number.random(1, 10); // random 1-10");

// Simulation
const utils = {
  string: {
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: str => str.split("").reverse().join("")
  },
  array: {
    unique: arr => [...new Set(arr)]
  },
  number: {
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  }
};

console.log("\\nNamespace usage:");
console.log(utils.string.capitalize("hello"));
console.log(utils.array.unique([1, 1, 2, 3, 3]));`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Module Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Prefer ES Modules over CommonJS
                </strong>
                <p className="ml-4 mt-1">
                  ES Modules are the standard, support tree-shaking, static
                  analysis
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. One module, one purpose
                </strong>
                <p className="ml-4 mt-1">
                  Keep modules focused on a single responsibility
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use named exports for multiple exports
                </strong>
                <p className="ml-4 mt-1">
                  Better for tree-shaking and refactoring
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use default export for main functionality
                </strong>
                <p className="ml-4 mt-1">When module has one primary export</p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use dynamic import for code splitting
                </strong>
                <p className="ml-4 mt-1">Load heavy modules only when needed</p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Avoid circular dependencies when possible
                </strong>
                <p className="ml-4 mt-1">
                  Can lead to confusing bugs and initialization issues
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use barrel exports (index.js) wisely
                </strong>
                <p className="ml-4 mt-1">
                  Convenient but can prevent tree-shaking if not careful
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Always include file extensions in imports
                </strong>
                <p className="ml-4 mt-1">
                  Explicit is better than relying on module resolution
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Keep module interface small
                </strong>
                <p className="ml-4 mt-1">
                  Export only what's necessary for public API
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Document your module exports
                </strong>
                <p className="ml-4 mt-1">
                  Use JSDoc or comments to describe exported functionality
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 14 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Module Systems</strong> in JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  ES Modules
                </div>
                <div className="text-gray-400">import/export</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  CommonJS
                </div>
                <div className="text-gray-400">require/module.exports</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Dynamic
                </div>
                <div className="text-gray-400">import()</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Patterns
                </div>
                <div className="text-gray-400">4+ patterns</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-lg font-semibold hover:from-lime-600 hover:to-green-600 transition-all"
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
