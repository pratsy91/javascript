"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function IteratorsGeneratorsPage() {
  return (
    <SectionLayout
      title="12.1 Iterators & Generators - Complete"
      description="Master Iterator Protocol, Generator Functions, Async Iterators, and Async Generators"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔄 Complete Iterators & Generators Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Iterators and Generators provide powerful ways to create custom
            iteration behavior. This section covers <strong>EVERYTHING</strong>{" "}
            about iteration protocols, generator functions, and async variants.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Iterator Protocol",
              "Generators",
              "Async Iterators",
              "Async Generators",
              "yield & yield*",
              "for await...of",
              "Lazy Evaluation",
              "Infinite Sequences",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-amber-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Iterator Protocol */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔁 Iterator Protocol
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">Iterator Protocol:</strong> An
              object is an iterator when it implements a{" "}
              <code className="text-blue-300">next()</code> method that returns{" "}
              <code className="text-blue-300">{`{ value, done }`}</code>.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Built-in Iterators"
              initialCode={`// Arrays are iterable
const arr = [1, 2, 3];

// Get iterator
const iterator = arr[Symbol.iterator]();
console.log("Iterator:", iterator);

// Call next() manually
console.log("\\nManual iteration:");
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for...of uses iterator protocol
console.log("\\nfor...of:");
for (const value of arr) {
  console.log(value);
}

// Other built-in iterables
console.log("\\nStrings are iterable:");
for (const char of "hello") {
  console.log(char);
}

console.log("\\nMaps are iterable:");
const map = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}

console.log("\\nSets are iterable:");
const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Custom Iterator"
              initialCode={`// Create custom iterable object
const range = {
  from: 1,
  to: 5,
  
  // Make it iterable
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    
    // Return iterator object
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// Use with for...of
console.log("range object:");
for (const num of range) {
  console.log(num);
}

// Use with spread
console.log("\\nSpread:", [...range]);

// Use with Array.from
console.log("Array.from:", Array.from(range));

// Manual iteration
const iter = range[Symbol.iterator]();
console.log("\\nManual:");
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Iterator with State"
              initialCode={`// Fibonacci iterator
class FibonacciIterator {
  constructor(limit) {
    this.limit = limit;
  }
  
  [Symbol.iterator]() {
    let prev = 0;
    let curr = 1;
    let count = 0;
    const max = this.limit;
    
    return {
      next() {
        if (count < max) {
          const value = prev;
          [prev, curr] = [curr, prev + curr];
          count++;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
}

const fib = new FibonacciIterator(10);
console.log("First 10 Fibonacci numbers:");
for (const num of fib) {
  console.log(num);
}

// Can iterate again (creates new iterator)
console.log("\\nSum:", [...fib].reduce((a, b) => a + b, 0));

// Iterable vs Iterator
console.log("\\nIterable:", typeof fib[Symbol.iterator]); // "function"
console.log("Iterator:", typeof fib[Symbol.iterator]().next); // "function"`}
            />
          </div>
        </section>

        {/* Generator Functions */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Generator Functions
          </h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">Generator Functions:</strong>{" "}
              Special functions that can pause execution and resume later,
              defined with <code className="text-purple-300">function*</code>{" "}
              and using <code className="text-purple-300">yield</code>.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Basic Generator"
              initialCode={`// Generator function (note the *)
function* numberGenerator() {
  console.log("Start");
  yield 1;
  console.log("After 1");
  yield 2;
  console.log("After 2");
  yield 3;
  console.log("End");
}

// Calling generator returns generator object
const gen = numberGenerator();
console.log("Generator:", gen);
console.log("Is iterable:", Symbol.iterator in gen); // true

// Manual iteration
console.log("\\nManual next():");
console.log(gen.next()); // "Start", { value: 1, done: false }
console.log(gen.next()); // "After 1", { value: 2, done: false }
console.log(gen.next()); // "After 2", { value: 3, done: false }
console.log(gen.next()); // "End", { value: undefined, done: true }

// Use with for...of
console.log("\\nfor...of:");
for (const num of numberGenerator()) {
  console.log(num);
}

// Generators are lazy (code runs on demand)
function* lazy() {
  console.log("This runs when next() is called");
  yield 1;
}
const lazyGen = lazy(); // No output yet!
console.log("\\nGenerator created, no execution yet");
lazyGen.next(); // Now it runs`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Generator Methods: next(), return(), throw()"
              initialCode={`function* generator() {
  try {
    const a = yield 1;
    console.log("Received:", a);
    
    const b = yield 2;
    console.log("Received:", b);
    
    const c = yield 3;
    console.log("Received:", c);
  } catch (error) {
    console.log("Caught:", error.message);
  }
}

// next(value) - pass value to yield
const gen1 = generator();
console.log("next():", gen1.next()); // { value: 1, done: false }
console.log("next('A'):", gen1.next("A")); // Received: A, { value: 2, done: false }
console.log("next('B'):", gen1.next("B")); // Received: B, { value: 3, done: false }

// return(value) - ends generator
const gen2 = generator();
console.log("\\nnext():", gen2.next());
console.log("return('DONE'):", gen2.return("DONE")); // { value: 'DONE', done: true }
console.log("next():", gen2.next()); // { value: undefined, done: true }

// throw(error) - throw error into generator
const gen3 = generator();
console.log("\\nnext():", gen3.next());
try {
  gen3.throw(new Error("Test error"));
} catch (e) {
  console.log("Error not caught in generator:", e.message);
}

// Error caught in generator
const gen4 = generator();
gen4.next();
console.log("\\nthrow() in generator:");
gen4.throw(new Error("Generator error")); // Caught in try/catch`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="yield* Delegation"
              initialCode={`// yield* delegates to another generator or iterable

function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield "a";
  yield* gen1(); // Delegate to gen1
  yield "b";
}

console.log("With yield*:");
console.log([...gen2()]); // ["a", 1, 2, "b"]

// yield* works with any iterable
function* gen3() {
  yield "start";
  yield* [1, 2, 3]; // Delegate to array
  yield* "hi"; // Delegate to string
  yield "end";
}

console.log("\\nDelegate to array & string:");
console.log([...gen3()]); // ["start", 1, 2, 3, "h", "i", "end"]

// yield* returns value from delegated generator
function* inner() {
  yield 1;
  yield 2;
  return "DONE"; // This is returned!
}

function* outer() {
  const result = yield* inner();
  yield result; // "DONE"
}

console.log("\\nyield* return value:");
console.log([...outer()]); // [1, 2, "DONE"]

// Recursive generator with yield*
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item); // Recursive
    } else {
      yield item;
    }
  }
}

const nested = [1, [2, [3, 4], 5], 6];
console.log("\\nFlatten nested array:");
console.log([...flatten(nested)]); // [1, 2, 3, 4, 5, 6]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Infinite Sequences"
              initialCode={`// Generators excel at infinite sequences

function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

// Take first N values
function take(n, iterable) {
  const result = [];
  for (const value of iterable) {
    if (result.length >= n) break;
    result.push(value);
  }
  return result;
}

console.log("First 10 numbers:");
console.log(take(10, infiniteSequence()));

// Infinite Fibonacci
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}

console.log("\\nFirst 15 Fibonacci:");
console.log(take(15, fibonacci()));

// Random numbers
function* randomNumbers() {
  while (true) {
    yield Math.random();
  }
}

console.log("\\n5 random numbers:");
console.log(take(5, randomNumbers()));

// Counter with step
function* counter(start = 0, step = 1) {
  let n = start;
  while (true) {
    yield n;
    n += step;
  }
}

console.log("\\nCount by 5:");
console.log(take(8, counter(0, 5)));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Generator Composition & Pipelines"
              initialCode={`// Composing generators

function* map(iterable, fn) {
  for (const value of iterable) {
    yield fn(value);
  }
}

function* filter(iterable, predicate) {
  for (const value of iterable) {
    if (predicate(value)) {
      yield value;
    }
  }
}

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Create pipeline
const numbers = range(1, 10);
const doubled = map(numbers, x => x * 2);
const evenOnly = filter(doubled, x => x % 4 === 0);

console.log("Pipeline result:");
console.log([...evenOnly]); // [4, 8, 12, 16, 20]

// All in one expression
const result = [
  ...filter(
    map(range(1, 20), x => x * x),
    x => x % 2 === 0
  )
];
console.log("\\nSquares that are even:");
console.log(result);

// Take n items
function* take(n, iterable) {
  let count = 0;
  for (const value of iterable) {
    if (count++ >= n) break;
    yield value;
  }
}

// Skip n items
function* skip(n, iterable) {
  let count = 0;
  for (const value of iterable) {
    if (count++ < n) continue;
    yield value;
  }
}

console.log("\\nTake 5, skip 2:");
console.log([...take(5, skip(2, range(1, 20)))]); // [3, 4, 5, 6, 7]`}
            />
          </div>
        </section>

        {/* Async Iterators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏳ Async Iterators (ES2018)
          </h2>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-green-400">Async Iterators:</strong>{" "}
              Iterators that return Promises. Use{" "}
              <code className="text-green-300">[Symbol.asyncIterator]()</code>{" "}
              and <code className="text-green-300">for await...of</code>.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Custom Async Iterator"
              initialCode={`// Async iterator example
const asyncRange = {
  from: 1,
  to: 5,
  
  [Symbol.asyncIterator]() {
    let current = this.from;
    const last = this.to;
    
    return {
      async next() {
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// Use with for await...of
async function example() {
  console.log("Async iteration:");
  for await (const num of asyncRange) {
    console.log(num);
  }
  console.log("Done!");
}

example();

// Manual async iteration
async function manual() {
  const iter = asyncRange[Symbol.asyncIterator]();
  
  console.log("\\nManual async iteration:");
  console.log(await iter.next()); // Promise resolves to { value: 1, done: false }
  console.log(await iter.next()); // { value: 2, done: false }
}

manual();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="for await...of with Promises"
              initialCode={`// for await...of works with arrays of Promises

async function fetchData(id) {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return { id, data: \`Data for \${id}\` };
}

async function processAll() {
  const promises = [1, 2, 3, 4, 5].map(id => fetchData(id));
  
  console.log("Processing promises:");
  for await (const result of promises) {
    console.log(result);
  }
  
  console.log("\\nAll done!");
}

processAll();

// Compare with Promise.all
async function withPromiseAll() {
  const promises = [1, 2, 3].map(id => fetchData(id));
  
  // Wait for all
  const results = await Promise.all(promises);
  console.log("\\nPromise.all results:", results);
}

withPromiseAll();

// for await...of processes sequentially
// Promise.all processes in parallel`}
            />
          </div>
        </section>

        {/* Async Generators */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄⏳ Async Generators (ES2018)
          </h2>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-orange-400">Async Generators:</strong>{" "}
              Combine generators with async/await. Use{" "}
              <code className="text-orange-300">async function*</code> and{" "}
              <code className="text-orange-300">yield</code> with{" "}
              <code className="text-orange-300">await</code>.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Basic Async Generator"
              initialCode={`// Async generator function
async function* asyncNumberGenerator() {
  console.log("Start");
  
  await new Promise(resolve => setTimeout(resolve, 100));
  yield 1;
  
  await new Promise(resolve => setTimeout(resolve, 100));
  yield 2;
  
  await new Promise(resolve => setTimeout(resolve, 100));
  yield 3;
  
  console.log("End");
}

async function example() {
  console.log("Async generator:");
  
  for await (const num of asyncNumberGenerator()) {
    console.log(num);
  }
  
  console.log("Done!");
}

example();

// Manual iteration
async function manual() {
  const gen = asyncNumberGenerator();
  
  console.log("\\nManual:");
  console.log(await gen.next()); // { value: 1, done: false }
  console.log(await gen.next()); // { value: 2, done: false }
  console.log(await gen.next()); // { value: 3, done: false }
  console.log(await gen.next()); // { value: undefined, done: true }
}

manual();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Async Generator Practical Examples"
              initialCode={`// Paginated API fetching
async function* fetchPages(totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    yield {
      page,
      data: \`Content of page \${page}\`,
      items: Array(5).fill(0).map((_, i) => \`Item \${(page - 1) * 5 + i + 1}\`)
    };
  }
}

async function loadAllPages() {
  console.log("Loading pages:");
  
  for await (const page of fetchPages(3)) {
    console.log(\`Page \${page.page}:\`, page.items);
  }
  
  console.log("\\nAll pages loaded!");
}

loadAllPages();

// Stream processing
async function* processStream(items) {
  for (const item of items) {
    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 50));
    
    yield {
      original: item,
      processed: item.toUpperCase(),
      timestamp: Date.now()
    };
  }
}

async function processAll() {
  const items = ["apple", "banana", "cherry"];
  
  console.log("\\nStream processing:");
  for await (const result of processStream(items)) {
    console.log(result);
  }
}

processAll();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Async Generator with Error Handling"
              initialCode={`async function* dataGenerator() {
  try {
    yield 1;
    
    // Simulate error on second yield
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Network error")), 100);
    });
    
    yield 2; // Won't reach here
  } catch (error) {
    console.log("Caught in generator:", error.message);
    yield "error-recovery-value";
  } finally {
    console.log("Cleanup in generator");
  }
}

async function handleErrors() {
  console.log("With error handling:");
  
  try {
    for await (const value of dataGenerator()) {
      console.log("Value:", value);
    }
  } catch (error) {
    console.log("Caught outside:", error.message);
  }
  
  console.log("\\nContinued execution");
}

handleErrors();

// Retry logic with async generator
async function* retry(fn, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      yield await fn();
      break; // Success, exit
    } catch (error) {
      console.log(\`Attempt \${attempt} failed:\`, error.message);
      
      if (attempt === maxRetries) {
        throw error; // Last attempt, propagate error
      }
      
      // Wait before retry
      await new Promise(r => setTimeout(r, 100 * attempt));
    }
  }
}

async function testRetry() {
  let calls = 0;
  
  async function unreliable() {
    if (++calls < 3) throw new Error("Not yet");
    return "Success!";
  }
  
  console.log("\\nRetry example:");
  for await (const result of retry(unreliable, 5)) {
    console.log("Result:", result);
  }
}

testRetry();`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Iterators & Generators Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use generators for lazy evaluation
                </strong>
                <p className="ml-4 mt-1">
                  Generate values on-demand, perfect for large or infinite
                  sequences
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Generators are single-use
                </strong>
                <p className="ml-4 mt-1">
                  Once exhausted, create a new generator to iterate again
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use yield* for delegation
                </strong>
                <p className="ml-4 mt-1">
                  Cleaner than manual iteration when delegating to other
                  iterables
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Async iterators for async data streams
                </strong>
                <p className="ml-4 mt-1">
                  Perfect for paginated APIs, file streams, websockets
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Error handling in generators
                </strong>
                <p className="ml-4 mt-1">
                  Use try/catch inside generators to handle errors gracefully
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Generator composition for pipelines
                </strong>
                <p className="ml-4 mt-1">
                  Chain generators (map, filter) for efficient data processing
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use for await...of with async iterables
                </strong>
                <p className="ml-4 mt-1">
                  Cleaner syntax than manual Promise handling
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Don't forget cleanup
                </strong>
                <p className="ml-4 mt-1">
                  Use finally blocks in generators for resource cleanup
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 12 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Iterators & Generators</strong> in
              JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Iterator Protocol
                </div>
                <div className="text-gray-400">Symbol.iterator</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Generators
                </div>
                <div className="text-gray-400">function* & yield</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Async Iterators
                </div>
                <div className="text-gray-400">for await...of</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Async Generators
                </div>
                <div className="text-gray-400">async function*</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all"
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
