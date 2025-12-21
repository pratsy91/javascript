"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function PromisesAsyncPage() {
  return (
    <SectionLayout
      title="13.1 Promises & Async/Await - Complete"
      description="Master Promise constructor, static methods, async/await, and all async patterns"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚡ Complete Promises & Async Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Promises and async/await revolutionized asynchronous JavaScript.
            This section covers <strong>EVERYTHING</strong> about Promises,
            async/await, and asynchronous programming patterns.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Promise Constructor",
              "Static Methods (7)",
              "Instance Methods (3)",
              "Promise States",
              "async/await",
              "Top-level await",
              "Error Handling",
              "Async Patterns",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-sky-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Promise Constructor */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Promise Constructor
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Creating Promises"
              initialCode={`// Promise constructor: new Promise(executor)
// executor: function(resolve, reject)

const promise1 = new Promise((resolve, reject) => {
  console.log("Executor runs immediately");
  resolve("Success!");
});

promise1.then(result => console.log("Result:", result));

// Async operation example
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Delayed result");
  }, 1000);
});

promise2.then(result => console.log("\\nDelayed:", result));

// Rejecting a promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something went wrong"));
  }, 500);
});

promise3.catch(error => console.log("\\nError:", error.message));

// Both resolve and reject can be called, but only first call matters
const promise4 = new Promise((resolve, reject) => {
  resolve("First");
  resolve("Second"); // Ignored!
  reject("Error"); // Ignored!
});

promise4.then(result => console.log("\\nOnly first:", result));

// Promise states
console.log("\\nPromise states:");
console.log("Pending initially");
console.log("Fulfilled when resolved");
console.log("Rejected when rejected");
console.log("Settled = fulfilled OR rejected");`}
            />
          </div>
        </section>

        {/* Promise Static Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Promise Static Methods (7)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Promise.resolve() & Promise.reject()"
              initialCode={`// Promise.resolve(value) - create fulfilled promise
const resolved1 = Promise.resolve(42);
resolved1.then(value => console.log("resolve(42):", value));

const resolved2 = Promise.resolve("Hello");
resolved2.then(value => console.log("resolve('Hello'):", value));

// Resolving with a promise returns it
const inner = Promise.resolve("inner");
const outer = Promise.resolve(inner);
console.log("\\nSame promise:", inner === outer); // true

// Promise.reject(reason) - create rejected promise
const rejected = Promise.reject(new Error("Failed"));
rejected.catch(error => console.log("\\nreject():", error.message));

// Quick conversion
function asyncOperation(value) {
  if (value < 0) {
    return Promise.reject(new Error("Negative value"));
  }
  return Promise.resolve(value * 2);
}

asyncOperation(5).then(r => console.log("\\nPositive:", r));
asyncOperation(-5).catch(e => console.log("Negative:", e.message));

// Thenable (promise-like object)
const thenable = {
  then(resolve, reject) {
    resolve("Thenable value");
  }
};

Promise.resolve(thenable).then(v => console.log("\\nThenable:", v));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise.all() - All Must Resolve"
              initialCode={`// Promise.all(iterable) - waits for all to resolve

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => {
    console.log("All resolved:", results); // [1, 2, 3]
  });

// With async operations
const promises = [
  new Promise(resolve => setTimeout(() => resolve("A"), 300)),
  new Promise(resolve => setTimeout(() => resolve("B"), 100)),
  new Promise(resolve => setTimeout(() => resolve("C"), 200))
];

Promise.all(promises)
  .then(results => {
    console.log("\\nAsync results:", results); // ["A", "B", "C"]
  });

// Fails if ANY promise rejects
const mixed = [
  Promise.resolve(1),
  Promise.reject(new Error("Failed")),
  Promise.resolve(3)
];

Promise.all(mixed)
  .then(results => console.log("Won't reach"))
  .catch(error => console.log("\\nAll failed:", error.message));

// All rejects immediately on first rejection
const delayed = [
  new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 300)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 100)),
  Promise.resolve(3)
];

Promise.all(delayed)
  .catch(error => console.log("\\nFirst rejection:", error)); // "Error 2"

// Practical: parallel API calls
async function fetchMultiple() {
  const urls = ["/api/user", "/api/posts", "/api/comments"];
  
  const promises = urls.map(url => 
    Promise.resolve({ url, data: \`Data from \${url}\` })
  );
  
  const results = await Promise.all(promises);
  console.log("\\nParallel fetch:", results.length, "items");
}

fetchMultiple();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise.allSettled() - Wait for All (ES2020)"
              initialCode={`// Promise.allSettled(iterable) - waits for all, never rejects

const promises = [
  Promise.resolve(1),
  Promise.reject(new Error("Failed")),
  Promise.resolve(3),
  Promise.reject(new Error("Also failed"))
];

Promise.allSettled(promises)
  .then(results => {
    console.log("allSettled results:");
    results.forEach((result, i) => {
      if (result.status === "fulfilled") {
        console.log(\`  \${i}: fulfilled -\`, result.value);
      } else {
        console.log(\`  \${i}: rejected -\`, result.reason.message);
      }
    });
  });

// Get successful results only
Promise.allSettled(promises)
  .then(results => {
    const successful = results
      .filter(r => r.status === "fulfilled")
      .map(r => r.value);
    
    console.log("\\nSuccessful only:", successful);
  });

// Get failures only
Promise.allSettled(promises)
  .then(results => {
    const failures = results
      .filter(r => r.status === "rejected")
      .map(r => r.reason.message);
    
    console.log("\\nFailures:", failures);
  });

// Practical: batch operations with partial failures
async function batchProcess(items) {
  const operations = items.map(item => 
    Math.random() > 0.5 
      ? Promise.resolve(\`Success: \${item}\`)
      : Promise.reject(new Error(\`Failed: \${item}\`))
  );
  
  const results = await Promise.allSettled(operations);
  
  const summary = {
    succeeded: results.filter(r => r.status === "fulfilled").length,
    failed: results.filter(r => r.status === "rejected").length
  };
  
  console.log("\\nBatch summary:", summary);
  return results;
}

batchProcess(["A", "B", "C", "D"]);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise.any() - First to Resolve (ES2021)"
              initialCode={`// Promise.any(iterable) - resolves with first successful promise

const promises = [
  new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 300)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Success!"), 200)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 100))
];

Promise.any(promises)
  .then(result => {
    console.log("First success:", result); // "Success!"
  });

// Rejects only if ALL promises reject (AggregateError)
const allFail = [
  Promise.reject(new Error("Error 1")),
  Promise.reject(new Error("Error 2")),
  Promise.reject(new Error("Error 3"))
];

Promise.any(allFail)
  .catch(error => {
    console.log("\\nAll failed:", error.name); // AggregateError
    console.log("Errors:", error.errors.map(e => e.message));
  });

// Practical: fastest mirror
async function fetchFromFastestMirror(mirrors) {
  const promises = mirrors.map(mirror =>
    Promise.resolve({ mirror, data: \`Data from \${mirror}\` })
  );
  
  const result = await Promise.any(promises);
  console.log("\\nFastest mirror:", result.mirror);
  return result;
}

fetchFromFastestMirror(["mirror1.com", "mirror2.com", "mirror3.com"]);

// Fallback pattern
async function withFallbacks(operations) {
  try {
    return await Promise.any(operations);
  } catch (error) {
    console.log("\\nAll operations failed");
    throw error;
  }
}

withFallbacks([
  Promise.reject("Primary failed"),
  Promise.reject("Backup failed")
]).catch(() => console.log("No fallbacks worked"));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise.race() - First to Settle"
              initialCode={`// Promise.race(iterable) - resolves/rejects with first to settle

const promises = [
  new Promise(resolve => setTimeout(() => resolve("Slow"), 300)),
  new Promise(resolve => setTimeout(() => resolve("Fast"), 100)),
  new Promise(resolve => setTimeout(() => resolve("Medium"), 200))
];

Promise.race(promises)
  .then(result => {
    console.log("Winner:", result); // "Fast"
  });

// Can reject if first to settle rejects
const mixed = [
  new Promise((_, reject) => setTimeout(() => reject("Quick error"), 50)),
  new Promise(resolve => setTimeout(() => resolve("Slow success"), 200))
];

Promise.race(mixed)
  .catch(error => console.log("\\nRace lost:", error));

// Practical: timeout pattern
function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
}

function withTimeout(promise, ms) {
  return Promise.race([promise, timeout(ms)]);
}

// Simulate slow operation
const slowOp = new Promise(resolve => setTimeout(() => resolve("Done"), 2000));

withTimeout(slowOp, 500)
  .catch(error => console.log("\\nTimeout:", error.message));

// Race with success
const quickOp = new Promise(resolve => setTimeout(() => resolve("Quick!"), 100));

withTimeout(quickOp, 500)
  .then(result => console.log("\\nIn time:", result));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise.withResolvers() - ES2024 (NEW!)"
              initialCode={`// Promise.withResolvers() returns {promise, resolve, reject}
// Useful when you need to resolve/reject outside the executor

// Check if available
if (typeof Promise.withResolvers === "function") {
  const { promise, resolve, reject } = Promise.withResolvers();
  
  console.log("Promise:", promise);
  console.log("Has resolve:", typeof resolve); // "function"
  console.log("Has reject:", typeof reject); // "function"
  
  // Resolve later from outside
  setTimeout(() => resolve("Resolved externally"), 100);
  
  promise.then(value => console.log("\\nValue:", value));
} else {
  // Polyfill
  function withResolvers() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  
  const { promise, resolve, reject } = withResolvers();
  
  console.log("Polyfill version");
  
  setTimeout(() => resolve("Works!"), 100);
  
  promise.then(value => console.log("\\nPolyfill value:", value));
}

// Practical: deferred promise
class Deferred {
  constructor() {
    if (typeof Promise.withResolvers === "function") {
      const { promise, resolve, reject } = Promise.withResolvers();
      this.promise = promise;
      this.resolve = resolve;
      this.reject = reject;
    } else {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  }
}

const deferred = new Deferred();
setTimeout(() => deferred.resolve("Deferred result"), 200);
deferred.promise.then(r => console.log("\\nDeferred:", r));`}
            />
          </div>
        </section>

        {/* Promise Instance Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Promise Instance Methods (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="then(), catch(), finally()"
              initialCode={`// then(onFulfilled, onRejected) - handle result or error
Promise.resolve(42)
  .then(value => {
    console.log("then (fulfilled):", value);
    return value * 2;
  })
  .then(value => {
    console.log("then (chained):", value);
  });

// Rejection in then
Promise.reject(new Error("Error"))
  .then(
    value => console.log("Won't run"),
    error => console.log("\\nthen (rejected):", error.message)
  );

// catch(onRejected) - handle errors (sugar for then(null, onRejected))
Promise.reject(new Error("Failed"))
  .catch(error => {
    console.log("\\ncatch:", error.message);
  });

// finally(onFinally) - always runs (ES2018)
Promise.resolve("Success")
  .then(value => console.log("\\nResult:", value))
  .finally(() => console.log("finally (success)"));

Promise.reject(new Error("Failed"))
  .catch(error => console.log("\\nError:", error.message))
  .finally(() => console.log("finally (error)"));

// finally doesn't receive value/error
Promise.resolve(42)
  .finally(() => {
    console.log("\\nfinally has no arguments");
    return "Ignored"; // Return value ignored
  })
  .then(value => console.log("Original value:", value)); // Still 42

// finally passes through value/error
Promise.resolve(100)
  .finally(() => console.log("\\nCleanup"))
  .then(value => console.log("Value still:", value)); // 100`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise Chaining"
              initialCode={`// then() returns a new promise - enables chaining

Promise.resolve(1)
  .then(value => {
    console.log("Step 1:", value);
    return value + 1;
  })
  .then(value => {
    console.log("Step 2:", value);
    return value * 2;
  })
  .then(value => {
    console.log("Step 3:", value);
    return value + 10;
  })
  .then(value => {
    console.log("Final:", value); // 14
  });

// Returning a promise in then (flattens automatically)
Promise.resolve(1)
  .then(value => {
    return new Promise(resolve => {
      setTimeout(() => resolve(value + 1), 100);
    });
  })
  .then(value => {
    console.log("\\nAfter async:", value); // 2
  });

// Error propagation in chain
Promise.resolve(1)
  .then(value => {
    console.log("\\nChain start:", value);
    throw new Error("Chain error");
  })
  .then(value => {
    console.log("Skipped"); // Skipped!
  })
  .then(value => {
    console.log("Also skipped"); // Skipped!
  })
  .catch(error => {
    console.log("Caught:", error.message);
  })
  .then(() => {
    console.log("Continues after catch");
  });

// Multiple catches
Promise.reject("Error 1")
  .catch(error => {
    console.log("\\nFirst catch:", error);
    throw "Error 2";
  })
  .catch(error => {
    console.log("Second catch:", error);
  });`}
            />
          </div>
        </section>

        {/* Async/Await */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 async/await (ES2017)
          </h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">async/await:</strong>{" "}
              Syntactic sugar over Promises, making async code look synchronous.{" "}
              <code className="text-purple-300">async</code> functions always
              return a Promise. <code className="text-purple-300">await</code>{" "}
              pauses execution until Promise settles.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="async Function Syntax"
              initialCode={`// async function declaration
async function fetchData() {
  return "Data"; // Automatically wrapped in Promise
}

fetchData().then(data => console.log("Declaration:", data));

// async function expression
const fetchData2 = async function() {
  return "More data";
};

fetchData2().then(data => console.log("Expression:", data));

// async arrow function
const fetchData3 = async () => {
  return "Arrow data";
};

fetchData3().then(data => console.log("Arrow:", data));

// async method
const obj = {
  async getData() {
    return "Object method data";
  }
};

obj.getData().then(data => console.log("\\nMethod:", data));

// async always returns Promise
async function returnsValue() {
  return 42;
}

console.log("\\nReturns Promise:", returnsValue() instanceof Promise); // true

// Throwing in async = rejected promise
async function throwsError() {
  throw new Error("Async error");
}

throwsError().catch(error => console.log("\\nThrown:", error.message));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="await Operator"
              initialCode={`// await pauses execution until promise settles

async function example() {
  console.log("Start");
  
  // await Promise
  const result1 = await Promise.resolve(42);
  console.log("Result 1:", result1); // 42
  
  // await can be used with any value (auto-wrapped in Promise)
  const result2 = await "Not a promise";
  console.log("Result 2:", result2); // "Not a promise"
  
  // await with timeout
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log("After delay");
  
  // Multiple awaits (sequential)
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  const c = await Promise.resolve(3);
  console.log("\\nSequential:", a, b, c);
  
  console.log("End");
}

example();

// Parallel awaits (use Promise.all)
async function parallel() {
  const [a, b, c] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
  
  console.log("\\nParallel:", a, b, c);
}

parallel();

// Error with await
async function withError() {
  try {
    const result = await Promise.reject(new Error("Await error"));
  } catch (error) {
    console.log("\\nCaught:", error.message);
  }
}

withError();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Error Handling with async/await"
              initialCode={`// try...catch with async/await

async function fetchUser(id) {
  try {
    if (id < 0) {
      throw new Error("Invalid ID");
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return { id, name: "John" };
  } catch (error) {
    console.log("Error in fetchUser:", error.message);
    throw error; // Re-throw or handle
  }
}

async function example() {
  try {
    const user = await fetchUser(-1);
    console.log("User:", user);
  } catch (error) {
    console.log("Caught in example:", error.message);
  }
}

example();

// Multiple operations with error handling
async function multiStep() {
  try {
    const step1 = await Promise.resolve("Step 1");
    console.log("\\n" + step1);
    
    const step2 = await Promise.reject(new Error("Step 2 failed"));
    console.log(step2); // Won't execute
    
    const step3 = await Promise.resolve("Step 3");
    console.log(step3); // Won't execute
  } catch (error) {
    console.log("Failed at:", error.message);
  } finally {
    console.log("Cleanup");
  }
}

multiStep();

// Catch specific errors
async function handleSpecific() {
  try {
    throw new TypeError("Type error");
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("\\nType error:", error.message);
    } else {
      throw error; // Re-throw unknown errors
    }
  }
}

handleSpecific();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Sequential vs Parallel Execution"
              initialCode={`// Sequential (slow) - awaits one by one
async function sequential() {
  console.log("Sequential start");
  const start = Date.now();
  
  const a = await new Promise(r => setTimeout(() => r("A"), 200));
  const b = await new Promise(r => setTimeout(() => r("B"), 200));
  const c = await new Promise(r => setTimeout(() => r("C"), 200));
  
  const elapsed = Date.now() - start;
  console.log("Results:", a, b, c);
  console.log("Time:", elapsed + "ms"); // ~600ms
}

sequential();

// Parallel (fast) - start all, then await
async function parallel() {
  console.log("\\nParallel start");
  const start = Date.now();
  
  // Start all promises immediately
  const promiseA = new Promise(r => setTimeout(() => r("A"), 200));
  const promiseB = new Promise(r => setTimeout(() => r("B"), 200));
  const promiseC = new Promise(r => setTimeout(() => r("C"), 200));
  
  // Then await all
  const a = await promiseA;
  const b = await promiseB;
  const c = await promiseC;
  
  const elapsed = Date.now() - start;
  console.log("Results:", a, b, c);
  console.log("Time:", elapsed + "ms"); // ~200ms
}

setTimeout(parallel, 700);

// Best: Promise.all for parallel
async function parallelBest() {
  console.log("\\nParallel (best) start");
  const start = Date.now();
  
  const [a, b, c] = await Promise.all([
    new Promise(r => setTimeout(() => r("A"), 200)),
    new Promise(r => setTimeout(() => r("B"), 200)),
    new Promise(r => setTimeout(() => r("C"), 200))
  ]);
  
  const elapsed = Date.now() - start;
  console.log("Results:", a, b, c);
  console.log("Time:", elapsed + "ms"); // ~200ms
}

setTimeout(parallelBest, 1500);`}
            />
          </div>
        </section>

        {/* Practical Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Async Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Retry Logic"
              initialCode={`// Retry failed operations

async function retry(fn, maxAttempts = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      console.log(\`Attempt \${attempt} failed:\`, error.message);
      
      if (attempt === maxAttempts) {
        throw error; // Last attempt, give up
      }
      
      // Wait before retry (exponential backoff)
      await new Promise(r => setTimeout(r, delay * attempt));
    }
  }
}

// Simulate unreliable operation
let calls = 0;
async function unreliable() {
  if (++calls < 3) {
    throw new Error("Not yet");
  }
  return "Success!";
}

retry(unreliable, 5, 100)
  .then(result => console.log("\\nFinal:", result))
  .catch(error => console.log("\\nGave up:", error.message));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Rate Limiting & Throttling"
              initialCode={`// Process items with rate limiting

async function rateLimit(items, maxConcurrent = 3) {
  const results = [];
  
  for (let i = 0; i < items.length; i += maxConcurrent) {
    const batch = items.slice(i, i + maxConcurrent);
    
    console.log(\`Processing batch: \${batch}\`);
    
    const batchResults = await Promise.all(
      batch.map(item => 
        new Promise(resolve => {
          setTimeout(() => resolve(\`Processed: \${item}\`), 100);
        })
      )
    );
    
    results.push(...batchResults);
  }
  
  return results;
}

rateLimit(["A", "B", "C", "D", "E", "F", "G"], 2)
  .then(results => console.log("\\nAll results:", results));

// Queue pattern
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }
  
  async add(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    const { fn, resolve, reject } = this.queue.shift();
    
    try {
      const result = await fn();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.processing = false;
      this.process(); // Process next
    }
  }
}

const queue = new AsyncQueue();
console.log("\\nQueue example:");
queue.add(() => Promise.resolve("Task 1")).then(r => console.log(r));
queue.add(() => Promise.resolve("Task 2")).then(r => console.log(r));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Promise Composition Patterns"
              initialCode={`// Waterfall (sequential with data passing)
async function waterfall(tasks) {
  let result;
  
  for (const task of tasks) {
    result = await task(result);
  }
  
  return result;
}

const tasks = [
  async (input) => {
    console.log("Task 1, input:", input);
    return 10;
  },
  async (input) => {
    console.log("Task 2, input:", input);
    return input * 2;
  },
  async (input) => {
    console.log("Task 3, input:", input);
    return input + 5;
  }
];

waterfall(tasks).then(result => console.log("\\nWaterfall result:", result));

// Map async (process all items)
async function mapAsync(items, fn) {
  return Promise.all(items.map(fn));
}

mapAsync([1, 2, 3], async x => x * 2)
  .then(results => console.log("\\nmapAsync:", results));

// Filter async
async function filterAsync(items, predicate) {
  const results = await Promise.all(
    items.map(async item => ({
      item,
      pass: await predicate(item)
    }))
  );
  
  return results.filter(r => r.pass).map(r => r.item);
}

filterAsync([1, 2, 3, 4, 5], async x => x % 2 === 0)
  .then(results => console.log("\\nfilterAsync:", results));

// Reduce async
async function reduceAsync(items, reducer, initial) {
  let accumulator = initial;
  
  for (const item of items) {
    accumulator = await reducer(accumulator, item);
  }
  
  return accumulator;
}

reduceAsync([1, 2, 3], async (acc, x) => acc + x, 0)
  .then(sum => console.log("\\nreduceAsync:", sum));`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Promises & Async Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Prefer async/await over raw promises
                </strong>
                <p className="ml-4 mt-1">
                  More readable and easier to debug than promise chains
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Always handle errors
                </strong>
                <p className="ml-4 mt-1">
                  Use .catch() or try/catch to prevent unhandled rejections
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use Promise.all for parallel operations
                </strong>
                <p className="ml-4 mt-1">
                  Don't await in sequence when operations can run in parallel
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use Promise.allSettled when you need all results
                </strong>
                <p className="ml-4 mt-1">
                  Better than Promise.all when some failures are acceptable
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use Promise.race for timeouts
                </strong>
                <p className="ml-4 mt-1">
                  Race operation against timeout promise
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Don't forget to await
                </strong>
                <p className="ml-4 mt-1">
                  Common mistake: forgetting await means promise not waited for
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use finally for cleanup
                </strong>
                <p className="ml-4 mt-1">
                  Runs whether promise succeeds or fails
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Be careful with async in loops
                </strong>
                <p className="ml-4 mt-1">
                  Sequential awaits in loops are slow - batch when possible
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Promises are eager, not lazy
                </strong>
                <p className="ml-4 mt-1">
                  Promise executor runs immediately when created
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Use Promise.any for fastest response
                </strong>
                <p className="ml-4 mt-1">
                  Perfect for trying multiple sources (mirrors, fallbacks)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 13 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Promises & Async/Await</strong> in
              JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">1</div>
                <div className="text-gray-400">Promise Constructor</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">7</div>
                <div className="text-gray-400">Static Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">3</div>
                <div className="text-gray-400">Instance Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">4</div>
                <div className="text-gray-400">async/await Syntax</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-blue-600 transition-all"
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
