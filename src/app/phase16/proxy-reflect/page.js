"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ProxyReflectPage() {
  return (
    <SectionLayout
      title="16.1 Proxy & Reflect - Complete"
      description="Master all 13 Proxy traps, all 13 Reflect methods, and meta-programming"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🎭 Complete Proxy & Reflect Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Proxy and Reflect enable meta-programming in JavaScript. This
            section covers <strong>ALL 13 Proxy traps</strong> and{" "}
            <strong>ALL 13 Reflect methods</strong> for advanced object
            manipulation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Proxy Constructor",
              "13 Handler Traps",
              "Revocable Proxy",
              "Reflect Methods (13)",
              "Validation",
              "Observable",
              "Meta-programming",
              "Practical Uses",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-rose-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Proxy Basics */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🎭 Proxy Basics
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">Proxy:</strong> A wrapper around
              an object that intercepts and customizes operations. Created with{" "}
              <code className="text-blue-300">new Proxy(target, handler)</code>.
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Creating a Proxy"
              initialCode={`// Basic Proxy syntax: new Proxy(target, handler)

const target = {
  name: "Alice",
  age: 25
};

const handler = {
  get(target, property, receiver) {
    console.log(\`Getting property: \${property}\`);
    return target[property];
  },
  
  set(target, property, value, receiver) {
    console.log(\`Setting \${property} = \${value}\`);
    target[property] = value;
    return true; // Must return true for success
  }
};

const proxy = new Proxy(target, handler);

// Operations are intercepted
console.log("\\nAccessing proxy.name:");
console.log(proxy.name);

console.log("\\nSetting proxy.age:");
proxy.age = 26;

console.log("\\nFinal proxy.age:");
console.log(proxy.age);

// Target and proxy are different objects
console.log("\\nproxy === target:", proxy === target); // false

// Modifying proxy affects target
console.log("target.age:", target.age); // 26`}
            />
          </div>
        </section>

        {/* Proxy Handler Traps */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🪤 Proxy Handler Traps (ALL 13)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="1. get Trap - Property Access"
              initialCode={`const obj = {
  name: "Alice",
  age: 25
};

const handler = {
  get(target, property, receiver) {
    console.log(\`get trap: \${property}\`);
    
    // Default values for missing properties
    if (!(property in target)) {
      return \`Property '\${property}' not found\`;
    }
    
    return target[property];
  }
};

const proxy = new Proxy(obj, handler);

console.log("proxy.name:", proxy.name);
console.log("proxy.age:", proxy.age);
console.log("proxy.missing:", proxy.missing);

// Array negative indexing
const arr = [1, 2, 3, 4, 5];

const arrProxy = new Proxy(arr, {
  get(target, property) {
    const index = Number(property);
    
    if (Number.isInteger(index)) {
      // Support negative indices
      if (index < 0) {
        return target[target.length + index];
      }
    }
    
    return target[property];
  }
});

console.log("\\nArray negative index:");
console.log("arrProxy[-1]:", arrProxy[-1]); // 5
console.log("arrProxy[-2]:", arrProxy[-2]); // 4`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="2. set Trap - Property Assignment"
              initialCode={`const handler = {
  set(target, property, value, receiver) {
    console.log(\`Setting \${property} to \${value}\`);
    
    // Validation
    if (property === "age") {
      if (typeof value !== "number") {
        throw new TypeError("Age must be a number");
      }
      if (value < 0 || value > 150) {
        throw new RangeError("Age must be 0-150");
      }
    }
    
    target[property] = value;
    return true; // Indicate success
  }
};

const person = new Proxy({}, handler);

person.name = "Bob";
person.age = 30;
console.log("\\nValid set:", person);

// Validation errors
try {
  person.age = "thirty";
} catch (e) {
  console.log("\\nType error:", e.message);
}

try {
  person.age = 200;
} catch (e) {
  console.log("Range error:", e.message);
}

// Read-only properties
const readOnlyHandler = {
  set(target, property, value) {
    if (property === "id") {
      throw new Error("Cannot modify id");
    }
    target[property] = value;
    return true;
  }
};

const user = new Proxy({ id: 1, name: "Alice" }, readOnlyHandler);
user.name = "Bob"; // OK
console.log("\\nUpdated name:", user.name);

try {
  user.id = 2; // Error
} catch (e) {
  console.log("Read-only error:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="3. has Trap - in Operator"
              initialCode={`const handler = {
  has(target, property) {
    console.log(\`Checking if '\${property}' exists\`);
    
    // Hide private properties (starting with _)
    if (property.startsWith("_")) {
      return false;
    }
    
    return property in target;
  }
};

const obj = new Proxy({
  name: "Alice",
  _password: "secret123",
  age: 25
}, handler);

console.log("'name' in obj:", "name" in obj); // true
console.log("'_password' in obj:", "_password" in obj); // false (hidden!)
console.log("'age' in obj:", "age" in obj); // true

// But can still access directly
console.log("\\nDirect access still works:");
console.log("obj._password:", obj._password); // "secret123"

// Virtual properties
const virtualHandler = {
  has(target, property) {
    if (property === "virtual") return true;
    return property in target;
  }
};

const virtual = new Proxy({}, virtualHandler);
console.log("\\n'virtual' in virtual:", "virtual" in virtual); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="4. deleteProperty Trap - delete Operator"
              initialCode={`const handler = {
  deleteProperty(target, property) {
    console.log(\`Deleting property: \${property}\`);
    
    // Prevent deletion of certain properties
    if (property === "id") {
      console.log("Cannot delete id");
      return false;
    }
    
    delete target[property];
    return true;
  }
};

const obj = new Proxy({
  id: 1,
  name: "Alice",
  age: 25
}, handler);

// Can delete regular properties
delete obj.age;
console.log("\\nAfter deleting age:", obj);

// Cannot delete protected property
delete obj.id;
console.log("After trying to delete id:", obj);
console.log("id still exists:", obj.id);

// Audit trail
const auditHandler = {
  deleteProperty(target, property) {
    console.log(\`\\nAudit: Deleted '\${property}' = \${target[property]}\`);
    delete target[property];
    return true;
  }
};

const audited = new Proxy({ x: 1, y: 2 }, auditHandler);
delete audited.x;`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="5. apply Trap - Function Calls"
              initialCode={`// apply trap - intercept function calls

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const handler = {
  apply(target, thisArg, argumentsList) {
    console.log(\`Called with: \${argumentsList}\`);
    
    // Validate arguments
    if (!argumentsList.every(n => typeof n === "number")) {
      throw new TypeError("All arguments must be numbers");
    }
    
    const result = target.apply(thisArg, argumentsList);
    console.log(\`Result: \${result}\`);
    
    return result;
  }
};

const proxySum = new Proxy(sum, handler);

console.log("\\nproxySum(1, 2, 3):");
proxySum(1, 2, 3);

console.log("\\nproxySum(5, 10):");
proxySum(5, 10);

// Error on invalid args
try {
  proxySum(1, "2", 3);
} catch (e) {
  console.log("\\nError:", e.message);
}

// Timing function calls
const timeHandler = {
  apply(target, thisArg, args) {
    const start = performance.now();
    const result = target.apply(thisArg, args);
    const end = performance.now();
    console.log(\`\\nExecution time: \${(end - start).toFixed(2)}ms\`);
    return result;
  }
};

const slowFunc = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
};

const timed = new Proxy(slowFunc, timeHandler);
timed(1000000);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="6. construct Trap - new Operator"
              initialCode={`// construct trap - intercept new calls

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const handler = {
  construct(target, argumentsList, newTarget) {
    console.log(\`Constructing with: \${argumentsList}\`);
    
    // Validate arguments
    const [name, age] = argumentsList;
    
    if (!name) {
      throw new Error("Name is required");
    }
    if (age < 0) {
      throw new RangeError("Age must be positive");
    }
    
    return new target(...argumentsList);
  }
};

const ProxyUser = new Proxy(User, handler);

console.log("\\nCreating user:");
const user1 = new ProxyUser("Alice", 25);
console.log(user1);

try {
  const user2 = new ProxyUser("", 30);
} catch (e) {
  console.log("\\nError:", e.message);
}

// Singleton via construct trap
let instance = null;

const SingletonHandler = {
  construct(target, args) {
    if (!instance) {
      instance = new target(...args);
    }
    return instance;
  }
};

class Database {
  constructor(name) {
    this.name = name;
  }
}

const ProxyDB = new Proxy(Database, SingletonHandler);

const db1 = new ProxyDB("DB1");
const db2 = new ProxyDB("DB2");

console.log("\\nSingleton:");
console.log("db1 === db2:", db1 === db2); // true
console.log("Name:", db1.name); // "DB1" (first instance)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="7-13. Other Proxy Traps"
              initialCode={`const obj = { name: "Alice" };

const handler = {
  // 7. getPrototypeOf - Object.getPrototypeOf()
  getPrototypeOf(target) {
    console.log("getPrototypeOf called");
    return Object.getPrototypeOf(target);
  },
  
  // 8. setPrototypeOf - Object.setPrototypeOf()
  setPrototypeOf(target, prototype) {
    console.log("setPrototypeOf called");
    return Object.setPrototypeOf(target, prototype);
  },
  
  // 9. isExtensible - Object.isExtensible()
  isExtensible(target) {
    console.log("isExtensible called");
    return Object.isExtensible(target);
  },
  
  // 10. preventExtensions - Object.preventExtensions()
  preventExtensions(target) {
    console.log("preventExtensions called");
    return Object.preventExtensions(target);
  },
  
  // 11. getOwnPropertyDescriptor
  getOwnPropertyDescriptor(target, property) {
    console.log(\`getOwnPropertyDescriptor: \${property}\`);
    return Object.getOwnPropertyDescriptor(target, property);
  },
  
  // 12. defineProperty
  defineProperty(target, property, descriptor) {
    console.log(\`defineProperty: \${property}\`);
    return Object.defineProperty(target, property, descriptor);
  },
  
  // 13. ownKeys - Object.keys(), Object.getOwnPropertyNames()
  ownKeys(target) {
    console.log("ownKeys called");
    return Object.keys(target);
  }
};

const proxy = new Proxy(obj, handler);

console.log("Testing traps:\\n");
Object.getPrototypeOf(proxy);
Object.isExtensible(proxy);
Object.getOwnPropertyDescriptor(proxy, "name");
Object.keys(proxy);

console.log("\\nAll 13 traps covered!");`}
            />
          </div>
        </section>

        {/* Revocable Proxy */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔐 Revocable Proxy
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Proxy.revocable()"
              initialCode={`// Proxy.revocable() returns { proxy, revoke }

const target = { name: "Alice", age: 25 };

const handler = {
  get(target, property) {
    return target[property];
  }
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log("Before revoke:");
console.log("proxy.name:", proxy.name);
console.log("proxy.age:", proxy.age);

// Revoke the proxy
revoke();

console.log("\\nAfter revoke:");
try {
  console.log(proxy.name); // Error!
} catch (e) {
  console.log("Error:", e.message); // "Cannot perform 'get' on a proxy that has been revoked"
}

try {
  proxy.age = 30; // Error!
} catch (e) {
  console.log("Error:", e.message);
}

// Use case: temporary access
function createTemporaryAccess(obj, duration) {
  const { proxy, revoke } = Proxy.revocable(obj, {
    get(target, property) {
      return target[property];
    }
  });
  
  setTimeout(revoke, duration);
  
  return proxy;
}

const tempProxy = createTemporaryAccess({ secret: "data" }, 1000);
console.log("\\nTemporary access:");
console.log(tempProxy.secret);
setTimeout(() => {
  try {
    console.log(tempProxy.secret);
  } catch (e) {
    console.log("\\nAccess revoked after timeout");
  }
}, 1100);`}
            />
          </div>
        </section>

        {/* Practical Proxy Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Proxy Use Cases
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Observable Object (Reactivity)"
              initialCode={`// Create observable object with change tracking

function createObservable(target, onChange) {
  return new Proxy(target, {
    set(target, property, value, receiver) {
      const oldValue = target[property];
      target[property] = value;
      
      // Notify on change
      if (oldValue !== value) {
        onChange(property, oldValue, value);
      }
      
      return true;
    }
  });
}

const user = createObservable(
  { name: "Alice", age: 25 },
  (property, oldValue, newValue) => {
    console.log(\`\${property} changed: \${oldValue} → \${newValue}\`);
  }
);

console.log("Tracking changes:");
user.name = "Bob";
user.age = 30;
user.age = 31;

// Vue.js / MobX style reactivity
function reactive(obj) {
  const observers = new Set();
  
  return new Proxy(obj, {
    get(target, property) {
      // Track access for dependency tracking
      return target[property];
    },
    
    set(target, property, value) {
      const oldValue = target[property];
      target[property] = value;
      
      if (oldValue !== value) {
        observers.forEach(fn => fn());
      }
      
      return true;
    }
  });
}

const state = reactive({ count: 0 });
console.log("\\nInitial count:", state.count);
state.count++;
console.log("After increment:", state.count);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Validation Proxy"
              initialCode={`// Schema-based validation

function createValidator(schema) {
  return new Proxy({}, {
    set(target, property, value) {
      const validator = schema[property];
      
      if (!validator) {
        throw new Error(\`Unknown property: \${property}\`);
      }
      
      if (!validator(value)) {
        throw new Error(\`Invalid value for \${property}: \${value}\`);
      }
      
      target[property] = value;
      return true;
    }
  });
}

const userSchema = {
  name: (value) => typeof value === "string" && value.length > 0,
  age: (value) => typeof value === "number" && value >= 0 && value <= 150,
  email: (value) => typeof value === "string" && value.includes("@")
};

const user = createValidator(userSchema);

console.log("Valid assignments:");
user.name = "Alice";
user.age = 25;
user.email = "alice@example.com";
console.log(user);

try {
  user.age = -5;
} catch (e) {
  console.log("\\nInvalid age:", e.message);
}

try {
  user.email = "invalid";
} catch (e) {
  console.log("Invalid email:", e.message);
}

try {
  user.phone = "123";
} catch (e) {
  console.log("Unknown property:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Default Values & Property Virtualization"
              initialCode={`// Auto-create nested objects

const handler = {
  get(target, property) {
    if (!(property in target)) {
      // Create nested proxy on-demand
      target[property] = new Proxy({}, handler);
    }
    return target[property];
  }
};

const obj = new Proxy({}, handler);

// Create nested structure automatically
obj.user.profile.settings.theme = "dark";

console.log("Auto-created structure:");
console.log(obj);
console.log("Theme:", obj.user.profile.settings.theme);

// localStorage proxy
const localStorageProxy = new Proxy({}, {
  get(target, property) {
    if (typeof localStorage !== "undefined") {
      const value = localStorage.getItem(property);
      return value ? JSON.parse(value) : undefined;
    }
    return target[property];
  },
  
  set(target, property, value) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(property, JSON.stringify(value));
    }
    target[property] = value;
    return true;
  }
});

console.log("\\nlocalStorage proxy:");
localStorageProxy.user = { name: "Alice" };
console.log("Stored:", localStorageProxy.user);

// Enum-like object
function createEnum(...values) {
  const enumObj = {};
  values.forEach(val => {
    enumObj[val] = val;
  });
  
  return new Proxy(enumObj, {
    set() {
      throw new Error("Enum is read-only");
    },
    deleteProperty() {
      throw new Error("Cannot delete enum value");
    }
  });
}

const Status = createEnum("PENDING", "ACTIVE", "INACTIVE");
console.log("\\nEnum:");
console.log("Status.ACTIVE:", Status.ACTIVE);

try {
  Status.NEW = "NEW";
} catch (e) {
  console.log("Cannot modify:", e.message);
}`}
            />
          </div>
        </section>

        {/* Reflect API */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🪞 Reflect API (ALL 13 Methods)
          </h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">Reflect:</strong> Provides
              methods for interceptable JavaScript operations. Each Reflect
              method corresponds to a Proxy trap. Returns predictable values
              (boolean/value instead of throwing).
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Reflect Methods Overview"
              initialCode={`const obj = {
  name: "Alice",
  age: 25
};

// 1. Reflect.get(target, property, receiver)
console.log("1. Reflect.get:");
console.log("  get 'name':", Reflect.get(obj, "name")); // "Alice"

// 2. Reflect.set(target, property, value, receiver)
console.log("\\n2. Reflect.set:");
console.log("  set 'age':", Reflect.set(obj, "age", 26)); // true
console.log("  new age:", obj.age);

// 3. Reflect.has(target, property)
console.log("\\n3. Reflect.has:");
console.log("  has 'name':", Reflect.has(obj, "name")); // true
console.log("  has 'salary':", Reflect.has(obj, "salary")); // false

// 4. Reflect.deleteProperty(target, property)
console.log("\\n4. Reflect.deleteProperty:");
Reflect.set(obj, "temp", "value");
console.log("  delete 'temp':", Reflect.deleteProperty(obj, "temp")); // true

// 5. Reflect.apply(target, thisArg, argumentsList)
function sum(a, b) { return a + b; }
console.log("\\n5. Reflect.apply:");
console.log("  apply sum:", Reflect.apply(sum, null, [5, 3])); // 8

// 6. Reflect.construct(target, argumentsList, newTarget)
console.log("\\n6. Reflect.construct:");
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const point = Reflect.construct(Point, [10, 20]);
console.log("  constructed:", point);

console.log("\\n7 more Reflect methods for Object operations...");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Reflect Object Operations"
              initialCode={`const obj = { name: "Test" };

// 7. Reflect.getPrototypeOf(target)
console.log("7. getPrototypeOf:");
const proto = Reflect.getPrototypeOf(obj);
console.log("  is Object.prototype:", proto === Object.prototype);

// 8. Reflect.setPrototypeOf(target, prototype)
console.log("\\n8. setPrototypeOf:");
const customProto = { custom: true };
console.log("  success:", Reflect.setPrototypeOf(obj, customProto));

// 9. Reflect.isExtensible(target)
console.log("\\n9. isExtensible:");
console.log("  extensible:", Reflect.isExtensible(obj)); // true

// 10. Reflect.preventExtensions(target)
console.log("\\n10. preventExtensions:");
console.log("  success:", Reflect.preventExtensions(obj)); // true
console.log("  now extensible:", Reflect.isExtensible(obj)); // false

// 11. Reflect.getOwnPropertyDescriptor(target, property)
console.log("\\n11. getOwnPropertyDescriptor:");
const desc = Reflect.getOwnPropertyDescriptor(obj, "name");
console.log("  descriptor:", desc);

// 12. Reflect.defineProperty(target, property, descriptor)
const obj2 = {};
console.log("\\n12. defineProperty:");
const success = Reflect.defineProperty(obj2, "age", {
  value: 25,
  writable: false,
  enumerable: true
});
console.log("  success:", success);
console.log("  age:", obj2.age);

// 13. Reflect.ownKeys(target)
const obj3 = { a: 1, b: 2 };
Object.defineProperty(obj3, "c", { value: 3, enumerable: false });
console.log("\\n13. ownKeys:");
console.log("  keys:", Reflect.ownKeys(obj3)); // ["a", "b", "c"]
console.log("  vs Object.keys:", Object.keys(obj3)); // ["a", "b"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Reflect vs Traditional Operators"
              initialCode={`const obj = { x: 1, y: 2 };

// Traditional vs Reflect

// 1. Property access
console.log("Property access:");
console.log("  obj.x:", obj.x); // Traditional
console.log("  Reflect.get:", Reflect.get(obj, "x")); // Reflect

// 2. Property assignment
console.log("\\nProperty assignment:");
obj.x = 10; // Traditional
console.log("  Assigned:", obj.x);
Reflect.set(obj, "y", 20); // Reflect
console.log("  Reflect.set:", obj.y);

// 3. in operator
console.log("\\nin operator:");
console.log("  'x' in obj:", "x" in obj); // Traditional
console.log("  Reflect.has:", Reflect.has(obj, "x")); // Reflect

// 4. delete operator
console.log("\\ndelete:");
obj.temp = "value";
delete obj.temp; // Traditional
console.log("  deleted:", !("temp" in obj));

obj.temp2 = "value";
Reflect.deleteProperty(obj, "temp2"); // Reflect
console.log("  Reflect.deleteProperty:", !("temp2" in obj));

// Why use Reflect?
console.log("\\nReflect advantages:");
console.log("1. Functional style (no operators)");
console.log("2. Predictable return values (true/false)");
console.log("3. Pairs with Proxy traps");
console.log("4. Receiver parameter for getters/setters");

// Example: return values
const frozen = Object.freeze({});
console.log("\\nWith frozen object:");

// Traditional throws in strict mode
try {
  frozen.x = 1; // Silent fail in non-strict, throws in strict
  console.log("  Traditional: silent fail");
} catch (e) {
  console.log("  Traditional: throws");
}

// Reflect returns false
console.log("  Reflect.set:", Reflect.set(frozen, "x", 1)); // false (no throw!)`}
            />
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🚀 Advanced Proxy & Reflect Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Complete Validation Proxy"
              initialCode={`// Full validation with Reflect in traps

function createValidated(target, validators) {
  return new Proxy(target, {
    set(target, property, value, receiver) {
      // Check validator exists
      const validator = validators[property];
      
      if (validator && !validator(value)) {
        throw new Error(\`Validation failed for '\${property}'\`);
      }
      
      // Use Reflect for actual set
      return Reflect.set(target, property, value, receiver);
    },
    
    get(target, property, receiver) {
      // Use Reflect for actual get
      return Reflect.get(target, property, receiver);
    }
  });
}

const validators = {
  name: (v) => typeof v === "string" && v.length > 0,
  age: (v) => Number.isInteger(v) && v >= 0,
  email: (v) => typeof v === "string" && v.includes("@")
};

const user = createValidated({}, validators);

console.log("Setting valid values:");
user.name = "Alice";
user.age = 25;
user.email = "alice@example.com";
console.log(user);

try {
  user.age = -5;
} catch (e) {
  console.log("\\nValidation error:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Access Control Proxy"
              initialCode={`// Role-based access control

function createSecure(target, permissions) {
  return new Proxy(target, {
    get(target, property) {
      const perm = permissions[property];
      
      if (perm && !perm.read) {
        throw new Error(\`No read access to '\${property}'\`);
      }
      
      return Reflect.get(target, property);
    },
    
    set(target, property, value) {
      const perm = permissions[property];
      
      if (perm && !perm.write) {
        throw new Error(\`No write access to '\${property}'\`);
      }
      
      return Reflect.set(target, property, value);
    }
  });
}

const data = {
  publicData: "visible",
  privateData: "hidden",
  readOnlyData: "constant"
};

const permissions = {
  publicData: { read: true, write: true },
  privateData: { read: false, write: false },
  readOnlyData: { read: true, write: false }
};

const secure = createSecure(data, permissions);

console.log("Public access:");
console.log("  read:", secure.publicData);
secure.publicData = "updated";
console.log("  after write:", secure.publicData);

try {
  console.log("\\nPrivate access:");
  console.log(secure.privateData);
} catch (e) {
  console.log("  Error:", e.message);
}

try {
  console.log("\\nRead-only:");
  console.log("  read:", secure.readOnlyData);
  secure.readOnlyData = "new";
} catch (e) {
  console.log("  Error:", e.message);
}`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Proxy & Reflect Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use Reflect in Proxy traps
                </strong>
                <p className="ml-4 mt-1">
                  Ensures correct default behavior and receiver handling
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Always return appropriate values from traps
                </strong>
                <p className="ml-4 mt-1">
                  set/deleteProperty return boolean, get returns value
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Proxies add overhead
                </strong>
                <p className="ml-4 mt-1">
                  Use for specific needs, not every object
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use revocable proxies for temporary access
                </strong>
                <p className="ml-4 mt-1">
                  Security: revoke access when no longer needed
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Proxy can't intercept private fields
                </strong>
                <p className="ml-4 mt-1">
                  Class private fields (#) bypass proxy traps
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Be careful with this and receiver
                </strong>
                <p className="ml-4 mt-1">
                  Pass receiver to Reflect for correct getter/setter binding
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use Proxy for validation and logging
                </strong>
                <p className="ml-4 mt-1">
                  Perfect for debugging and data integrity
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Reflect is safer than operators
                </strong>
                <p className="ml-4 mt-1">
                  Returns false instead of throwing in many cases
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 16 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Proxy & Reflect</strong> features!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">13</div>
                <div className="text-gray-400">Proxy Traps</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  13
                </div>
                <div className="text-gray-400">Reflect Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Revocable
                </div>
                <div className="text-gray-400">Proxy.revocable()</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Meta
                </div>
                <div className="text-gray-400">Programming</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-red-600 transition-all"
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
