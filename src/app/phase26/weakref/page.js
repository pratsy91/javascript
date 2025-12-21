"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function WeakRefPage() {
  return (
    <SectionLayout
      title="26.1 WeakRef & FinalizationRegistry"
      description="Master WeakRef and FinalizationRegistry for advanced memory management and cleanup callbacks"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔗 WeakRef & FinalizationRegistry (ES2021)
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            <strong>WeakRef</strong> and <strong>FinalizationRegistry</strong>{" "}
            provide advanced memory management capabilities. WeakRef allows
            holding weak references to objects, while FinalizationRegistry
            enables cleanup callbacks when objects are garbage collected.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "WeakRef",
              "deref()",
              "FinalizationRegistry",
              "register()",
              "unregister()",
              "Garbage Collection",
              "Memory Management",
              "Cleanup Callbacks",
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

        {/* WeakRef */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 WeakRef - Weak References
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="WeakRef Basics"
              initialCode={`// WeakRef - hold weak reference to an object

console.log("Create WeakRef:");
let target = { name: "Alice", age: 30 };

// Create weak reference
const weakRef = new WeakRef(target);

console.log("deref() - dereference:");
const obj = weakRef.deref();
if (obj) {
  console.log("Object exists:", obj); // { name: "Alice", age: 30 }
  console.log("Name:", obj.name); // Alice
} else {
  console.log("Object was garbage collected");
}

console.log("\\nKey difference from strong reference:");
console.log("Strong reference:");
console.log("  const ref = target;");
console.log("  // target cannot be GC'd while ref exists");
console.log("");
console.log("Weak reference:");
console.log("  const weakRef = new WeakRef(target);");
console.log("  // target CAN be GC'd even if weakRef exists");
console.log("");

console.log("Important notes:");
console.log("  • WeakRef doesn't prevent garbage collection");
console.log("  • deref() may return undefined if object was GC'd");
console.log("  • Always check deref() result before using");
console.log("  • GC timing is unpredictable");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakRef Use Cases"
              initialCode={`// WeakRef use cases

console.log("Use Case 1: Cache without memory leaks");
console.log(\`
class ImageCache {
  constructor() {
    this.cache = new Map();
  }
  
  cacheImage(url, imageData) {
    // Store weak reference
    this.cache.set(url, new WeakRef(imageData));
  }
  
  getImage(url) {
    const weakRef = this.cache.get(url);
    if (!weakRef) return null;
    
    const imageData = weakRef.deref();
    if (!imageData) {
      // Object was GC'd, remove from cache
      this.cache.delete(url);
      return null;
    }
    
    return imageData;
  }
}

const cache = new ImageCache();
let largeImage = { data: new Uint8Array(1000000) };
cache.cacheImage('photo.jpg', largeImage);

// Later...
largeImage = null; // Allow GC
// If memory pressure occurs, image can be GC'd
// Cache won't prevent it
\`);

console.log("\\nUse Case 2: Observer pattern without leaks");
console.log(\`
class Observable {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    // Store weak reference to observer
    this.observers.push(new WeakRef(observer));
  }
  
  notify(data) {
    // Clean up and notify
    this.observers = this.observers.filter(weakRef => {
      const observer = weakRef.deref();
      if (observer) {
        observer.update(data);
        return true; // Keep this observer
      }
      return false; // Remove GC'd observer
    });
  }
}
\`);

console.log("\\nUse Case 3: Metadata without preventing GC");
console.log(\`
const metadata = new Map();

function attachMetadata(obj, data) {
  metadata.set(obj, new WeakRef({ data, timestamp: Date.now() }));
}

function getMetadata(obj) {
  const weakRef = metadata.get(obj);
  return weakRef?.deref();
}
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="WeakRef vs WeakMap/WeakSet"
              initialCode={`// Comparison: WeakRef vs WeakMap/WeakSet

console.log("WeakMap:");
console.log(\`
const weakMap = new WeakMap();
const obj = { id: 1 };

weakMap.set(obj, "metadata");
// obj is the KEY
// When obj is GC'd, entry is automatically removed
\`);

console.log("\\nWeakSet:");
console.log(\`
const weakSet = new WeakSet();
const obj = { id: 1 };

weakSet.add(obj);
// obj is stored weakly
// When obj is GC'd, it's automatically removed
\`);

console.log("\\nWeakRef:");
console.log(\`
const obj = { id: 1 };
const weakRef = new WeakRef(obj);

// We hold a weak reference to obj
// obj can be GC'd
// But weakRef.deref() might return undefined
\`);

console.log("\\nKey differences:");
console.log("WeakMap/WeakSet:");
console.log("  ✓ Automatic cleanup");
console.log("  ✓ No way to check if object exists");
console.log("  ✓ Object is the key/value");
console.log("");
console.log("WeakRef:");
console.log("  ✓ Can check if object exists (deref())");
console.log("  ✓ Manual cleanup needed");
console.log("  ✓ More flexible");
console.log("  ✓ Can be stored anywhere");`}
            />
          </div>
        </section>

        {/* FinalizationRegistry */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🧹 FinalizationRegistry - Cleanup Callbacks
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="FinalizationRegistry Basics"
              initialCode={`// FinalizationRegistry - run cleanup when objects are GC'd

console.log("Create FinalizationRegistry:");
console.log(\`
const registry = new FinalizationRegistry((heldValue) => {
  console.log('Object was garbage collected!');
  console.log('Held value:', heldValue);
  // Perform cleanup here
});
\`);

console.log("\\nRegister object for finalization:");
console.log(\`
let obj = { name: "Important Data" };

// Register object with cleanup value
registry.register(
  obj,                    // Target object
  { id: 123, type: 'user' }, // Held value (passed to callback)
  obj                     // Unregister token (optional)
);

// When obj is GC'd, callback will be called with held value
\`);

console.log("\\nUnregister before GC:");
console.log(\`
// If you want to prevent cleanup
registry.unregister(obj);

// Now when obj is GC'd, callback won't be called
\`);

console.log("\\nImportant notes:");
console.log("  • Callback runs AFTER object is GC'd");
console.log("  • Cannot access original object in callback");
console.log("  • Use held value for cleanup info");
console.log("  • Timing is unpredictable");
console.log("  • Don't rely on specific GC timing");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="FinalizationRegistry Use Cases"
              initialCode={`// FinalizationRegistry practical use cases

console.log("Use Case 1: File Handle Cleanup");
console.log(\`
const fileHandleRegistry = new FinalizationRegistry((handleId) => {
  console.log(\`Closing file handle: \${handleId}\`);
  // Close file handle in native code
  nativeAPI.closeFile(handleId);
});

class FileHandle {
  constructor(path) {
    this.id = nativeAPI.openFile(path);
    
    // Register for cleanup
    fileHandleRegistry.register(
      this,
      this.id, // Pass ID to cleanup callback
      this     // Token for unregister
    );
  }
  
  close() {
    nativeAPI.closeFile(this.id);
    // Unregister since we manually closed
    fileHandleRegistry.unregister(this);
  }
}
\`);

console.log("\\nUse Case 2: Database Connection Pool");
console.log(\`
const connectionRegistry = new FinalizationRegistry((connId) => {
  console.log(\`Returning connection \${connId} to pool\`);
  connectionPool.release(connId);
});

class DatabaseConnection {
  constructor() {
    this.id = connectionPool.acquire();
    connectionRegistry.register(this, this.id, this);
  }
  
  disconnect() {
    connectionPool.release(this.id);
    connectionRegistry.unregister(this);
  }
}
\`);

console.log("\\nUse Case 3: WebGL Resource Cleanup");
console.log(\`
const glResourceRegistry = new FinalizationRegistry((resourceId) => {
  console.log(\`Deleting GL buffer: \${resourceId}\`);
  gl.deleteBuffer(resourceId);
});

class GLBuffer {
  constructor(gl, data) {
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    
    glResourceRegistry.register(this, this.buffer, this);
  }
  
  destroy(gl) {
    gl.deleteBuffer(this.buffer);
    glResourceRegistry.unregister(this);
  }
}
\`);

console.log("\\nUse Case 4: Event Listener Cleanup");
console.log(\`
const listenerRegistry = new FinalizationRegistry((listenerId) => {
  console.log(\`Removing event listener: \${listenerId}\`);
  eventSystem.removeListener(listenerId);
});

class Component {
  constructor() {
    this.listenerId = eventSystem.addListener('update', this.onUpdate);
    listenerRegistry.register(this, this.listenerId, this);
  }
  
  destroy() {
    eventSystem.removeListener(this.listenerId);
    listenerRegistry.unregister(this);
  }
}
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Combined WeakRef + FinalizationRegistry"
              initialCode={`// Using WeakRef and FinalizationRegistry together

console.log("Advanced pattern: Cache with cleanup");
console.log(\`
class ManagedCache {
  constructor() {
    this.cache = new Map();
    
    // Registry to clean up cache entries
    this.registry = new FinalizationRegistry((key) => {
      console.log(\`Cleaning up cache entry: \${key}\`);
      this.cache.delete(key);
    });
  }
  
  set(key, value) {
    // Store weak reference
    const weakRef = new WeakRef(value);
    this.cache.set(key, weakRef);
    
    // Register for cleanup
    this.registry.register(
      value,  // Target object
      key,    // Held value (cache key)
      value   // Unregister token
    );
  }
  
  get(key) {
    const weakRef = this.cache.get(key);
    if (!weakRef) return undefined;
    
    const value = weakRef.deref();
    if (!value) {
      // Object was GC'd, clean up immediately
      this.cache.delete(key);
      return undefined;
    }
    
    return value;
  }
  
  delete(key) {
    const weakRef = this.cache.get(key);
    if (weakRef) {
      const value = weakRef.deref();
      if (value) {
        // Unregister to prevent cleanup callback
        this.registry.unregister(value);
      }
    }
    this.cache.delete(key);
  }
  
  clear() {
    // Note: Can't unregister all, so cleanup callbacks may still run
    this.cache.clear();
  }
}

// Usage
const cache = new ManagedCache();

let data = { large: new Array(1000000) };
cache.set('myData', data);

console.log(cache.get('myData')); // Returns data

data = null; // Allow GC
// Later, when GC occurs:
// - WeakRef.deref() returns undefined
// - FinalizationRegistry cleans up cache entry
\`);`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ WeakRef & FinalizationRegistry Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-teal-400">
                  1. Always check deref() result
                </strong>
                <p className="ml-4 mt-1">
                  Object may be GC'd at any time; never assume it exists
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  2. Don't rely on cleanup timing
                </strong>
                <p className="ml-4 mt-1">
                  GC is unpredictable; provide manual cleanup methods
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  3. Use held values wisely
                </strong>
                <p className="ml-4 mt-1">
                  Don't store the target object itself in held value
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  4. Unregister when manually cleaning up
                </strong>
                <p className="ml-4 mt-1">
                  Prevent duplicate cleanup by unregistering
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  5. Keep cleanup callbacks lightweight
                </strong>
                <p className="ml-4 mt-1">
                  They run during GC; avoid heavy operations
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  6. Don't create strong references in cleanup
                </strong>
                <p className="ml-4 mt-1">
                  Avoid storing new references to GC'd objects
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  7. Use for native resource cleanup
                </strong>
                <p className="ml-4 mt-1">
                  Perfect for file handles, DB connections, GPU resources
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  8. Consider WeakMap/WeakSet first
                </strong>
                <p className="ml-4 mt-1">
                  Simpler for most use cases; use WeakRef when needed
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  9. Test memory behavior carefully
                </strong>
                <p className="ml-4 mt-1">
                  Use memory profilers; don't assume GC behavior
                </p>
              </div>
              <div>
                <strong className="text-teal-400">
                  10. Document GC expectations
                </strong>
                <p className="ml-4 mt-1">
                  Make it clear what happens if object is GC'd
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warnings */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ⚠️ Important Warnings
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-red-400">
                  GC Timing is Unpredictable
                </strong>
                <p className="ml-4 mt-1">
                  Never write code that depends on specific GC timing. Objects
                  may be collected immediately or never.
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  Not a Replacement for Manual Cleanup
                </strong>
                <p className="ml-4 mt-1">
                  Always provide explicit cleanup methods (close(), destroy(),
                  etc.). FinalizationRegistry is a safety net, not primary
                  mechanism.
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  Avoid in Performance-Critical Paths
                </strong>
                <p className="ml-4 mt-1">
                  WeakRef.deref() and FinalizationRegistry have overhead. Don't
                  use in hot loops.
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  Be Careful with Closures
                </strong>
                <p className="ml-4 mt-1">
                  Cleanup callbacks can create accidental strong references
                  through closures.
                </p>
              </div>
              <div>
                <strong className="text-red-400">
                  Limited Browser Support
                </strong>
                <p className="ml-4 mt-1">
                  ES2021 features; check compatibility or use polyfills for
                  older browsers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 26 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>WeakRef & FinalizationRegistry</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  WeakRef
                </div>
                <div className="text-gray-400">Weak References</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  deref()
                </div>
                <div className="text-gray-400">Safe Access</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  FinalizationRegistry
                </div>
                <div className="text-gray-400">Cleanup Callbacks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Memory
                </div>
                <div className="text-gray-400">Advanced Management</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-teal-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY
              </p>
              <p className="text-gray-300">
                <strong>26 Phases</strong> • <strong>32 Sections</strong> •{" "}
                <strong>1850+ Concepts</strong> •{" "}
                <strong>1320+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                From Fundamentals to Advanced Memory Management
              </p>
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
