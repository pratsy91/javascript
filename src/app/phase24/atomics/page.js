"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function AtomicsPage() {
  return (
    <SectionLayout
      title="24.1 Atomics & SharedArrayBuffer"
      description="Master atomic operations, SharedArrayBuffer, concurrent programming, and thread synchronization"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚛️ Atomics & Shared Memory
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            The <strong>Atomics</strong> object provides atomic operations on
            SharedArrayBuffer, enabling safe concurrent programming across
            workers. Master <strong>all 13 atomic methods</strong> and shared
            memory synchronization.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "13 Atomic Methods",
              "SharedArrayBuffer",
              "Thread Safety",
              "Synchronization",
              "Race Conditions",
              "Wait/Notify",
              "Lock-free Algorithms",
              "Concurrent Access",
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

        {/* SharedArrayBuffer */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 SharedArrayBuffer
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="SharedArrayBuffer Basics"
              initialCode={`// SharedArrayBuffer - shared memory between workers

console.log("Create SharedArrayBuffer:");
console.log(\`
// Create 1024 bytes of shared memory
const sab = new SharedArrayBuffer(1024);

console.log('Byte length:', sab.byteLength); // 1024
console.log('Max byte length:', sab.maxByteLength); // 1024

// Create typed array view
const int32Array = new Int32Array(sab);
console.log('Length:', int32Array.length); // 256 (1024/4)

// Share with worker
const worker = new Worker('worker.js');
worker.postMessage({ buffer: sab });
\`);

console.log("\\nKey concepts:");
console.log("  ✓ Shared between main thread and workers");
console.log("  ✓ Fixed size (cannot be resized)");
console.log("  ✓ Requires atomic operations for safety");
console.log("  ✓ Can cause race conditions if not careful");
console.log("");

console.log("Security note:");
console.log("  SharedArrayBuffer requires:");
console.log("  • Cross-Origin-Opener-Policy: same-origin");
console.log("  • Cross-Origin-Embedder-Policy: require-corp");
console.log("  (Disabled by default for security)");
console.log("");

console.log("Difference from ArrayBuffer:");
console.log("  ArrayBuffer → Transferred (moved)");
console.log("  SharedArrayBuffer → Shared (accessed by multiple)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="SharedArrayBuffer with Workers"
              initialCode={`// Main thread sharing memory with workers

console.log("Main thread (main.js):");
console.log(\`
// Create shared memory
const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 10);
const sharedArray = new Int32Array(sab);

// Initialize data
for (let i = 0; i < sharedArray.length; i++) {
  sharedArray[i] = i;
}

// Send to worker
const worker = new Worker('worker.js');
worker.postMessage({ sharedArray });

// Main thread can still access
console.log('Main:', sharedArray[0]); // Both can read/write
\`);

console.log("\\nWorker thread (worker.js):");
console.log(\`
self.onmessage = (event) => {
  const { sharedArray } = event.data;
  
  // Worker can access same memory
  console.log('Worker:', sharedArray[0]);
  
  // Modify shared memory (needs atomic operations!)
  Atomics.add(sharedArray, 0, 10);
  
  // Both main and worker see changes
  console.log('Updated:', sharedArray[0]); // Original value + 10
};
\`);

console.log("\\nRace condition example:");
console.log(\`
// ❌ UNSAFE - race condition
sharedArray[0] = sharedArray[0] + 1;

// ✅ SAFE - atomic operation
Atomics.add(sharedArray, 0, 1);
\`);`}
            />
          </div>
        </section>

        {/* Atomics - Read/Write Operations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📝 Atomics - Read/Write Operations
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.load() & Atomics.store()"
              initialCode={`// Atomic read and write operations

console.log("Atomics.load() - atomic read:");
console.log(\`
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

// Atomic read
const value = Atomics.load(int32, 0);
console.log('Value:', value);
\`);

console.log("\\nAtomics.store() - atomic write:");
console.log(\`
// Atomic write
const oldValue = Atomics.store(int32, 0, 42);
console.log('Stored:', oldValue); // Returns the value stored

// Verify
console.log('Current:', Atomics.load(int32, 0)); // 42
\`);

console.log("\\nWhy use atomic operations?");
console.log(\`
// ❌ Non-atomic (UNSAFE with multiple threads):
const value = sharedArray[0];     // Read
sharedArray[0] = value + 1;       // Write
// Another thread could modify between read and write!

// ✅ Atomic (SAFE):
const value = Atomics.load(sharedArray, 0);
Atomics.store(sharedArray, 0, value + 1);
// Better: use Atomics.add(sharedArray, 0, 1)
\`);

console.log("\\nSupported TypedArrays:");
console.log("  • Int8Array, Uint8Array");
console.log("  • Int16Array, Uint16Array");
console.log("  • Int32Array, Uint32Array");
console.log("  • BigInt64Array, BigUint64Array");`}
            />
          </div>
        </section>

        {/* Atomics - Arithmetic Operations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔢 Atomics - Arithmetic Operations
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.add() & Atomics.sub()"
              initialCode={`// Atomic addition and subtraction

console.log("Atomics.add(typedArray, index, value):");
console.log(\`
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

int32[0] = 10;

// Atomic addition
const oldValue = Atomics.add(int32, 0, 5);
console.log('Old value:', oldValue);  // 10
console.log('New value:', int32[0]);  // 15

// Returns the old value before addition
\`);

console.log("\\nAtomics.sub(typedArray, index, value):");
console.log(\`
const oldValue = Atomics.sub(int32, 0, 3);
console.log('Old value:', oldValue);  // 15
console.log('New value:', int32[0]);  // 12
\`);

console.log("\\nUse case - counter:");
console.log(\`
// Multiple workers incrementing counter safely
function incrementCounter() {
  Atomics.add(sharedCounter, 0, 1);
}

// Even with 1000 workers calling this,
// the final count will be exactly 1000
\`);

console.log("\\nComparison:");
console.log(\`
// ❌ Race condition (UNSAFE):
sharedArray[0] = sharedArray[0] + 1;

// ✅ Thread-safe (SAFE):
Atomics.add(sharedArray, 0, 1);
\`);`}
            />
          </div>
        </section>

        {/* Atomics - Bitwise Operations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔣 Atomics - Bitwise Operations
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.and(), or(), xor()"
              initialCode={`// Atomic bitwise operations

console.log("Atomics.and(typedArray, index, value):");
console.log(\`
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

int32[0] = 0b1111; // 15

// Bitwise AND
const old = Atomics.and(int32, 0, 0b1010); // 10
console.log('Old:', old.toString(2)); // 1111
console.log('New:', int32[0].toString(2)); // 1010
\`);

console.log("\\nAtomics.or(typedArray, index, value):");
console.log(\`
int32[0] = 0b1010; // 10

// Bitwise OR
const old = Atomics.or(int32, 0, 0b0101); // 5
console.log('Old:', old.toString(2)); // 1010
console.log('New:', int32[0].toString(2)); // 1111
\`);

console.log("\\nAtomics.xor(typedArray, index, value):");
console.log(\`
int32[0] = 0b1100; // 12

// Bitwise XOR
const old = Atomics.xor(int32, 0, 0b1010); // 10
console.log('Old:', old.toString(2)); // 1100
console.log('New:', int32[0].toString(2)); // 0110 (6)
\`);

console.log("\\nUse cases:");
console.log("  • Bit flags/masks");
console.log("  • Toggle states");
console.log("  • Cryptography");
console.log("  • Compression");
console.log("");

console.log("All return the OLD value before operation");`}
            />
          </div>
        </section>

        {/* Atomics - Exchange Operations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 Atomics - Exchange Operations
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.exchange() & Atomics.compareExchange()"
              initialCode={`// Atomic exchange operations

console.log("Atomics.exchange(typedArray, index, value):");
console.log(\`
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

int32[0] = 100;

// Atomic exchange - swap values
const oldValue = Atomics.exchange(int32, 0, 200);
console.log('Old:', oldValue); // 100
console.log('New:', int32[0]); // 200
\`);

console.log("\\nAtomics.compareExchange() - compare and swap (CAS):");
console.log(\`
int32[0] = 50;

// compareExchange(array, index, expectedValue, newValue)
const result = Atomics.compareExchange(int32, 0, 50, 75);
console.log('Result:', result);  // 50 (old value)
console.log('Current:', int32[0]); // 75 (updated)

// If expected doesn't match, no change
const result2 = Atomics.compareExchange(int32, 0, 50, 100);
console.log('Result:', result2);  // 75 (current, no change)
console.log('Current:', int32[0]); // 75 (unchanged)
\`);

console.log("\\nCAS use case - lock-free programming:");
console.log(\`
function lockFreeIncrement(array, index) {
  let oldValue, newValue;
  do {
    oldValue = Atomics.load(array, index);
    newValue = oldValue + 1;
  } while (
    Atomics.compareExchange(array, index, oldValue, newValue) !== oldValue
  );
  // Retry if another thread modified value
}
\`);

console.log("\\nCAS pattern:");
console.log("  1. Read current value");
console.log("  2. Compute new value");
console.log("  3. Attempt swap");
console.log("  4. Retry if failed (value changed by other thread)");`}
            />
          </div>
        </section>

        {/* Atomics - Wait/Notify */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏳ Atomics - Wait/Notify (Synchronization)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.wait() & Atomics.notify()"
              initialCode={`// Thread synchronization primitives

console.log("Atomics.wait(typedArray, index, value, timeout):");
console.log(\`
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

int32[0] = 0;

// In worker thread:
// Wait until value at index 0 is NOT 0
const result = Atomics.wait(int32, 0, 0, 1000);
// timeout in milliseconds (optional)

console.log('Result:', result);
// 'ok' - woken by notify
// 'not-equal' - value already changed
// 'timed-out' - timeout reached
\`);

console.log("\\nAtomics.notify(typedArray, index, count):");
console.log(\`
// In main thread:
// Change value
Atomics.store(int32, 0, 1);

// Wake up waiting threads
const wokenCount = Atomics.notify(int32, 0, 1);
console.log('Woken threads:', wokenCount);

// Wake all waiting threads
Atomics.notify(int32, 0, Infinity);
\`);

console.log("\\nProducer-Consumer pattern:");
console.log(\`
// Producer (main thread):
function produce(data) {
  // Write data
  Atomics.store(buffer, 0, data);
  // Notify consumer
  Atomics.notify(buffer, 0, 1);
}

// Consumer (worker):
function consume() {
  // Wait for data
  Atomics.wait(buffer, 0, 0);
  // Read data
  const data = Atomics.load(buffer, 0);
  return data;
}
\`);

console.log("\\nNote: wait() blocked in main thread");
console.log("Use waitAsync() for main thread (ES2024)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.waitAsync() - ES2024"
              initialCode={`// Atomics.waitAsync() - non-blocking wait

console.log("Atomics.waitAsync() - main thread safe:");
console.log(\`
const sab = new SharedArrayBuffer(4);
const int32 = new Int32Array(sab);

int32[0] = 0;

// Returns a promise instead of blocking
const result = Atomics.waitAsync(int32, 0, 0, 1000);

if (result.async) {
  // Returns { async: true, value: Promise }
  result.value.then(status => {
    console.log('Status:', status); // 'ok', 'not-equal', 'timed-out'
  });
} else {
  // Returns { async: false, value: 'not-equal' }
  // Value already different, no need to wait
  console.log('Immediate:', result.value);
}
\`);

console.log("\\nDifference from wait():");
console.log("  wait() → Blocks thread (workers only)");
console.log("  waitAsync() → Returns Promise (main thread OK)");
console.log("");

console.log("Use case:");
console.log(\`
// Main thread can wait without blocking UI
async function waitForWorker() {
  const result = Atomics.waitAsync(sharedArray, 0, 0);
  
  if (result.async) {
    const status = await result.value;
    console.log('Worker finished:', status);
  }
}
\`);`}
            />
          </div>
        </section>

        {/* Atomics - Utility */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🛠️ Atomics - Utility Methods
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Atomics.isLockFree()"
              initialCode={`// Check if size is lock-free

console.log("Atomics.isLockFree(size):");
console.log(\`
// Check if operations on this size are lock-free
console.log('1 byte:', Atomics.isLockFree(1)); // Usually true
console.log('2 bytes:', Atomics.isLockFree(2)); // Usually true
console.log('4 bytes:', Atomics.isLockFree(4)); // Usually true
console.log('8 bytes:', Atomics.isLockFree(8)); // Maybe true

// Lock-free means operation doesn't use locks
// → Better performance
// → No risk of deadlock
\`);

console.log("\\nWhat is lock-free?");
console.log("  ✓ Operations complete in finite steps");
console.log("  ✓ No thread blocking");
console.log("  ✓ Better performance");
console.log("  ✓ Hardware-level atomic instructions");
console.log("");

console.log("Example usage:");
console.log(\`
function chooseArrayType() {
  if (Atomics.isLockFree(4)) {
    return Int32Array; // 4 bytes per element
  } else if (Atomics.isLockFree(2)) {
    return Int16Array; // 2 bytes per element
  } else {
    return Int8Array;  // 1 byte per element
  }
}

const ArrayType = chooseArrayType();
const sab = new SharedArrayBuffer(ArrayType.BYTES_PER_ELEMENT * 100);
const array = new ArrayType(sab);
\`);`}
            />
          </div>
        </section>

        {/* Complete Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete Atomics Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Method
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Operation
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Returns
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-mono text-xs">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-blue-400">
                    READ/WRITE
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.load(arr, i)</td>
                  <td className="px-3 py-2">Read value</td>
                  <td className="px-3 py-2">Current value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.store(arr, i, v)</td>
                  <td className="px-3 py-2">Write value</td>
                  <td className="px-3 py-2">Value written</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    ARITHMETIC
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.add(arr, i, v)</td>
                  <td className="px-3 py-2">Add value</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.sub(arr, i, v)</td>
                  <td className="px-3 py-2">Subtract value</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    BITWISE
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.and(arr, i, v)</td>
                  <td className="px-3 py-2">Bitwise AND</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.or(arr, i, v)</td>
                  <td className="px-3 py-2">Bitwise OR</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.xor(arr, i, v)</td>
                  <td className="px-3 py-2">Bitwise XOR</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-yellow-400"
                  >
                    EXCHANGE
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.exchange(arr, i, v)</td>
                  <td className="px-3 py-2">Swap value</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.compareExchange()</td>
                  <td className="px-3 py-2">CAS operation</td>
                  <td className="px-3 py-2">Old value</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-red-400">
                    SYNCHRONIZATION
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.wait(arr, i, v, t)</td>
                  <td className="px-3 py-2">Block until notify</td>
                  <td className="px-3 py-2">'ok'|'not-equal'|'timed-out'</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.waitAsync()</td>
                  <td className="px-3 py-2">Non-blocking wait</td>
                  <td className="px-3 py-2">Promise or immediate</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.notify(arr, i, c)</td>
                  <td className="px-3 py-2">Wake threads</td>
                  <td className="px-3 py-2">Number woken</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-cyan-400">
                    UTILITY
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Atomics.isLockFree(size)</td>
                  <td className="px-3 py-2">Check lock-free</td>
                  <td className="px-3 py-2">boolean</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💡 Practical Examples
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Example: Thread-Safe Counter"
              initialCode={`// Thread-safe counter using Atomics

console.log("Thread-safe counter implementation:");
console.log(\`
// Main thread
const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
const counter = new Int32Array(sab);

// Initialize to 0
Atomics.store(counter, 0, 0);

// Create multiple workers
const workers = [];
for (let i = 0; i < 4; i++) {
  const worker = new Worker('counter-worker.js');
  worker.postMessage({ counter });
  workers.push(worker);
}

// Wait for all workers to finish
Promise.all(workers.map(w => new Promise(resolve => {
  w.onmessage = resolve;
}))).then(() => {
  const finalCount = Atomics.load(counter, 0);
  console.log('Final count:', finalCount); // Always correct!
});
\`);

console.log("\\nWorker (counter-worker.js):");
console.log(\`
self.onmessage = (event) => {
  const { counter } = event.data;
  
  // Each worker increments 1000 times
  for (let i = 0; i < 1000; i++) {
    Atomics.add(counter, 0, 1);
  }
  
  self.postMessage('done');
};

// With 4 workers × 1000 increments = 4000 total
// Result will always be exactly 4000 (thread-safe!)
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Example: Spinlock (Mutex)"
              initialCode={`// Implement a simple spinlock using Atomics

console.log("Spinlock implementation:");
console.log(\`
class Spinlock {
  constructor(sab, index = 0) {
    this.int32 = new Int32Array(sab);
    this.index = index;
  }
  
  lock() {
    // Try to acquire lock (0 → 1)
    while (Atomics.compareExchange(this.int32, this.index, 0, 1) !== 0) {
      // Spin: keep trying until we get the lock
    }
  }
  
  unlock() {
    // Release lock (1 → 0)
    Atomics.store(this.int32, this.index, 0);
  }
}

// Usage:
const sab = new SharedArrayBuffer(4);
const lock = new Spinlock(sab);

lock.lock();
try {
  // Critical section - only one thread at a time
  console.log('Doing work...');
} finally {
  lock.unlock();
}
\`);

console.log("\\nUse cases:");
console.log("  • Protect shared resources");
console.log("  • Mutual exclusion");
console.log("  • Critical sections");
console.log("  • Short-lived locks");
console.log("");
console.log("Note: Spinlocks waste CPU while waiting");
console.log("Use Atomics.wait/notify for longer waits");`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Atomics Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-red-400">
                  1. Always use atomic operations on shared memory
                </strong>
                <p className="ml-4 mt-1">
                  Never use regular operations on SharedArrayBuffer
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  2. Use Atomics.wait only in workers
                </strong>
                <p className="ml-4 mt-1">
                  It blocks the thread; use waitAsync() in main thread
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  3. Prefer higher-level abstractions
                </strong>
                <p className="ml-4 mt-1">
                  Use libraries when possible; Atomics are low-level
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  4. Test thoroughly with multiple threads
                </strong>
                <p className="ml-4 mt-1">
                  Race conditions are hard to reproduce
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  5. Document synchronization strategies
                </strong>
                <p className="ml-4 mt-1">
                  Concurrent code is complex; explain your approach
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  6. Avoid long spinlocks
                </strong>
                <p className="ml-4 mt-1">
                  Use wait/notify for long waits to save CPU
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  7. Check isLockFree for performance
                </strong>
                <p className="ml-4 mt-1">
                  Use lock-free sizes for better performance
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  8. Be aware of security requirements
                </strong>
                <p className="ml-4 mt-1">
                  SharedArrayBuffer requires specific CORS headers
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  9. Use compareExchange for CAS patterns
                </strong>
                <p className="ml-4 mt-1">Essential for lock-free algorithms</p>
              </div>
              <div>
                <strong className="text-red-400">
                  10. Consider alternatives first
                </strong>
                <p className="ml-4 mt-1">
                  postMessage is simpler for most use cases
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 24 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>Atomics & SharedArrayBuffer</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">13</div>
                <div className="text-gray-400">Atomic Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  SharedArrayBuffer
                </div>
                <div className="text-gray-400">Shared Memory</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Thread-Safe
                </div>
                <div className="text-gray-400">Synchronization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Lock-Free
                </div>
                <div className="text-gray-400">Algorithms</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-red-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY
              </p>
              <p className="text-gray-300">
                <strong>24 Phases</strong> • <strong>30 Sections</strong> •{" "}
                <strong>1750+ Concepts</strong> •{" "}
                <strong>1270+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                Language + DOM + Web APIs + Concurrent Programming
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all"
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
