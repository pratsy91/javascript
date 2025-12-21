"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ClassesPage() {
  return (
    <SectionLayout
      title="15.1 Classes - Complete"
      description="Master class syntax, inheritance, private fields, static members, and all class features"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🎓 Complete Classes Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Classes provide a cleaner syntax for creating objects and
            inheritance. This section covers <strong>EVERYTHING</strong> about
            ES2015+ classes, including ES2022 private fields and static blocks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Class Syntax",
              "Constructor",
              "Instance Members",
              "Private Fields",
              "Static Members",
              "Getters/Setters",
              "Inheritance",
              "Class Patterns",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-fuchsia-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Class Syntax */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📝 Class Syntax
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Class Declaration & Expression"
              initialCode={`// 1. Class declaration
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}

const person1 = new Person("Alice");
console.log(person1.greet());

// 2. Class expression (anonymous)
const Animal = class {
  constructor(type) {
    this.type = type;
  }
  
  describe() {
    return \`This is a \${this.type}\`;
  }
};

const dog = new Animal("dog");
console.log("\\n" + dog.describe());

// 3. Named class expression
const Vehicle = class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  info() {
    return \`Car brand: \${this.brand}\`;
  }
};

const car = new Vehicle("Toyota");
console.log("\\n" + car.info());
console.log("Constructor name:", car.constructor.name); // "Car"

// Classes are NOT hoisted (TDZ)
console.log("\\nClass hoisting:");
console.log("Classes are not hoisted like function declarations");
console.log("Must define before use");

// Classes are in strict mode automatically
console.log("\\nStrict mode:");
console.log("Classes run in strict mode automatically");
console.log("No 'use strict' needed");`}
            />
          </div>
        </section>

        {/* Constructor & Instance */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Constructor & Instance Members
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Constructor Method"
              initialCode={`class User {
  constructor(name, age) {
    console.log("Constructor called");
    
    // Initialize instance properties
    this.name = name;
    this.age = age;
    this.createdAt = new Date();
  }
  
  getInfo() {
    return \`\${this.name}, \${this.age} years old\`;
  }
}

const user1 = new User("Alice", 25);
console.log(user1.getInfo());
console.log("Created:", user1.createdAt);

const user2 = new User("Bob", 30);
console.log("\\n" + user2.getInfo());

// Constructor is optional
class Simple {
  sayHello() {
    return "Hello!";
  }
}

const simple = new Simple();
console.log("\\n" + simple.sayHello());

// Returning from constructor
class CustomReturn {
  constructor(value) {
    // Returning object replaces this
    if (value === "custom") {
      return { custom: true };
    }
    this.value = value;
  }
}

const normal = new CustomReturn("normal");
console.log("\\nNormal:", normal.value);

const custom = new CustomReturn("custom");
console.log("Custom:", custom.custom);
console.log("Is CustomReturn:", custom instanceof CustomReturn); // false!`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Instance Methods & Fields (ES2022)"
              initialCode={`class Counter {
  // Public field (ES2022) - initialized for every instance
  count = 0;
  name = "Counter";
  
  constructor(initialCount = 0) {
    this.count = initialCount;
  }
  
  // Instance methods
  increment() {
    this.count++;
    return this.count;
  }
  
  decrement() {
    this.count--;
    return this.count;
  }
  
  reset() {
    this.count = 0;
  }
  
  getValue() {
    return this.count;
  }
}

const counter = new Counter(5);
console.log("Initial:", counter.getValue());
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Name:", counter.name);

// Fields vs constructor properties
class Example {
  // Field (ES2022) - runs before constructor
  field = "Field value";
  
  constructor() {
    console.log("\\nField before constructor:", this.field);
    this.prop = "Constructor property";
  }
}

const ex = new Example();
console.log("Field:", ex.field);
console.log("Prop:", ex.prop);

// Fields can use expressions
class WithExpression {
  timestamp = Date.now();
  id = Math.random();
  
  getInfo() {
    return { timestamp: this.timestamp, id: this.id };
  }
}

const obj1 = new WithExpression();
const obj2 = new WithExpression();
console.log("\\nDifferent instances have different values:");
console.log("obj1.id !== obj2.id:", obj1.id !== obj2.id);`}
            />
          </div>
        </section>

        {/* Private Fields */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔒 Private Fields & Methods (ES2022)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Private Fields (#)"
              initialCode={`class BankAccount {
  // Private field (ES2022) - # prefix
  #balance = 0;
  #pin;
  
  constructor(initialBalance, pin) {
    this.#balance = initialBalance;
    this.#pin = pin;
  }
  
  // Public method accessing private field
  getBalance(pin) {
    if (pin !== this.#pin) {
      throw new Error("Invalid PIN");
    }
    return this.#balance;
  }
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    this.#balance += amount;
    return this.#balance;
  }
  
  withdraw(amount, pin) {
    if (pin !== this.#pin) {
      throw new Error("Invalid PIN");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#balance;
  }
  
  // Private method
  #validatePin(pin) {
    return pin === this.#pin;
  }
  
  changePin(oldPin, newPin) {
    if (!this.#validatePin(oldPin)) {
      throw new Error("Invalid PIN");
    }
    this.#pin = newPin;
    return true;
  }
}

const account = new BankAccount(1000, "1234");
console.log("Initial balance:", account.getBalance("1234"));
console.log("After deposit:", account.deposit(500));
console.log("After withdraw:", account.withdraw(200, "1234"));

// Private fields are truly private
console.log("\\nPrivate access:");
console.log("account.balance:", account.balance); // undefined
// console.log(account.#balance); // SyntaxError!

try {
  account.getBalance("wrong"); // Error
} catch (e) {
  console.log("Wrong PIN:", e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Private Methods & Accessors"
              initialCode={`class SecretKeeper {
  #secret;
  #attempts = 0;
  #maxAttempts = 3;
  
  constructor(secret) {
    this.#secret = secret;
  }
  
  // Private method
  #checkAttempts() {
    if (this.#attempts >= this.#maxAttempts) {
      throw new Error("Too many attempts");
    }
  }
  
  // Private getter
  #get isLocked() {
    return this.#attempts >= this.#maxAttempts;
  }
  
  // Public method using private
  guess(value) {
    this.#checkAttempts();
    this.#attempts++;
    
    if (value === this.#secret) {
      console.log("Correct! Attempts:", this.#attempts);
      return true;
    }
    
    console.log(\`Wrong! Attempts left: \${this.#maxAttempts - this.#attempts}\`);
    return false;
  }
  
  isLocked() {
    return this.#isLocked;
  }
}

const keeper = new SecretKeeper(42);
console.log("Guess 10:", keeper.guess(10));
console.log("Guess 20:", keeper.guess(20));
console.log("Guess 42:", keeper.guess(42));

console.log("\\nIs locked:", keeper.isLocked());`}
            />
          </div>
        </section>

        {/* Static Members */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Static Members
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Static Methods & Fields (ES2022)"
              initialCode={`class MathUtils {
  // Static field (ES2022)
  static PI = 3.14159;
  static E = 2.71828;
  
  // Static method
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

// Call static methods on class (not instance)
console.log("Static method:");
console.log("add(5, 3):", MathUtils.add(5, 3));
console.log("multiply(4, 5):", MathUtils.multiply(4, 5));

// Access static fields
console.log("\\nStatic fields:");
console.log("PI:", MathUtils.PI);
console.log("E:", MathUtils.E);
console.log("Circle area (r=5):", MathUtils.circleArea(5));

// Instance doesn't have static members
const util = new MathUtils();
console.log("\\nInstance access:");
console.log("util.add:", util.add); // undefined
console.log("util.PI:", util.PI); // undefined

// Static private fields
class Config {
  static #apiKey = "secret-key-12345";
  static #maxRetries = 3;
  
  static getApiKey(password) {
    if (password !== "admin") {
      throw new Error("Unauthorized");
    }
    return this.#apiKey;
  }
  
  static getMaxRetries() {
    return this.#maxRetries;
  }
}

console.log("\\nStatic private:");
console.log("Max retries:", Config.getMaxRetries());
try {
  console.log("API key:", Config.getApiKey("admin"));
} catch (e) {
  console.log(e.message);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Static Initialization Blocks (ES2022)"
              initialCode={`class Database {
  static #connection;
  static #initialized = false;
  
  // Static initialization block (ES2022)
  static {
    console.log("Static block 1: Initializing...");
    this.#connection = "Connected";
    this.#initialized = true;
  }
  
  // Multiple static blocks allowed
  static {
    console.log("Static block 2: Additional setup");
  }
  
  static getConnection() {
    return this.#connection;
  }
  
  static isInitialized() {
    return this.#initialized;
  }
}

console.log("\\nAfter class definition:");
console.log("Initialized:", Database.isInitialized());
console.log("Connection:", Database.getConnection());

// Use case: complex static initialization
class Logger {
  static #logLevels;
  static #defaultLevel;
  
  static {
    // Complex initialization logic
    this.#logLevels = {
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3
    };
    this.#defaultLevel = this.#logLevels.INFO;
    console.log("\\nLogger initialized");
  }
  
  static log(message, level = this.#defaultLevel) {
    console.log(\`[\${Object.keys(this.#logLevels)[level]}] \${message}\`);
  }
}

Logger.log("Test message");`}
            />
          </div>
        </section>

        {/* Getters & Setters */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎛️ Getters & Setters
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="get & set Accessors"
              initialCode={`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Getter - accessed like property
  get area() {
    return this.width * this.height;
  }
  
  get perimeter() {
    return 2 * (this.width + this.height);
  }
  
  // Setter - assigned like property
  set dimensions(dimensions) {
    [this.width, this.height] = dimensions;
  }
}

const rect = new Rectangle(5, 10);
console.log("Width:", rect.width);
console.log("Height:", rect.height);
console.log("Area:", rect.area); // Calls getter
console.log("Perimeter:", rect.perimeter);

// Use setter
rect.dimensions = [8, 12];
console.log("\\nNew dimensions:", rect.width, "x", rect.height);
console.log("New area:", rect.area);

// Validation in setter
class Temperature {
  #celsius = 0;
  
  get celsius() {
    return this.#celsius;
  }
  
  set celsius(value) {
    if (typeof value !== "number") {
      throw new TypeError("Temperature must be a number");
    }
    if (value < -273.15) {
      throw new RangeError("Below absolute zero");
    }
    this.#celsius = value;
  }
  
  get fahrenheit() {
    return (this.#celsius * 9/5) + 32;
  }
  
  set fahrenheit(value) {
    this.celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log("\\n25°C =", temp.fahrenheit.toFixed(1) + "°F");

temp.fahrenheit = 100;
console.log("100°F =", temp.celsius.toFixed(1) + "°C");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Private Accessors"
              initialCode={`class User {
  #firstName;
  #lastName;
  
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  
  // Private getter
  get #fullName() {
    return \`\${this.#firstName} \${this.#lastName}\`;
  }
  
  // Public getter using private
  get displayName() {
    return this.#fullName;
  }
  
  // Private setter
  set #fullName(value) {
    const parts = value.split(" ");
    this.#firstName = parts[0];
    this.#lastName = parts[1] || "";
  }
  
  // Public setter using private
  set displayName(value) {
    this.#fullName = value;
  }
}

const user = new User("John", "Doe");
console.log("Display name:", user.displayName);

user.displayName = "Jane Smith";
console.log("After update:", user.displayName);

// Private fields not accessible
console.log("\\nuser.firstName:", user.firstName); // undefined
// console.log(user.#firstName); // SyntaxError!`}
            />
          </div>
        </section>

        {/* Inheritance */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 Inheritance (extends & super)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic Inheritance"
              initialCode={`// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
  
  move() {
    return \`\${this.name} moves\`;
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // MUST call super() first!
    this.breed = breed;
  }
  
  // Override method
  speak() {
    return \`\${this.name} barks\`;
  }
  
  // New method
  fetch() {
    return \`\${this.name} fetches the ball\`;
  }
}

const dog = new Dog("Rex", "Golden Retriever");
console.log(dog.speak()); // Overridden
console.log(dog.move()); // Inherited
console.log(dog.fetch()); // New
console.log("\\nBreed:", dog.breed);

// instanceof checks
console.log("\\ninstanceof:");
console.log("dog instanceof Dog:", dog instanceof Dog); // true
console.log("dog instanceof Animal:", dog instanceof Animal); // true
console.log("dog instanceof Object:", dog instanceof Object); // true

// Prototype chain
console.log("\\nPrototype chain:");
console.log("Dog.prototype.__proto__ === Animal.prototype:",
  Object.getPrototypeOf(Dog.prototype) === Animal.prototype);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="super Keyword"
              initialCode={`class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  start() {
    return \`\${this.brand} vehicle starting...\`;
  }
  
  static getType() {
    return "Vehicle";
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    // super() in constructor - call parent constructor
    super(brand);
    this.model = model;
  }
  
  start() {
    // super.method() - call parent method
    const parentStart = super.start();
    return \`\${parentStart}\\n\${this.model} engine ready!\`;
  }
  
  info() {
    return \`\${this.brand} \${this.model}\`;
  }
  
  static getType() {
    // super in static method
    const parentType = super.getType();
    return \`\${parentType} > Car\`;
  }
}

const car = new Car("Toyota", "Camry");
console.log(car.start());
console.log("\\nInfo:", car.info());

// Static super
console.log("\\nStatic:");
console.log("Car.getType():", Car.getType());

// super must be called before accessing this
class Example extends Vehicle {
  constructor() {
    // console.log(this.brand); // ReferenceError!
    super("Test");
    console.log("\\nNow this is accessible:", this.brand);
  }
}

new Example();`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Multi-level Inheritance"
              initialCode={`class LivingBeing {
  constructor(name) {
    this.name = name;
  }
  
  breathe() {
    return \`\${this.name} is breathing\`;
  }
}

class Animal extends LivingBeing {
  constructor(name, species) {
    super(name);
    this.species = species;
  }
  
  move() {
    return \`\${this.name} is moving\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Canine");
    this.breed = breed;
  }
  
  bark() {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog("Buddy", "Labrador");

console.log(dog.breathe()); // From LivingBeing
console.log(dog.move()); // From Animal
console.log(dog.bark()); // From Dog

console.log("\\nInheritance chain:");
console.log("instanceof Dog:", dog instanceof Dog);
console.log("instanceof Animal:", dog instanceof Animal);
console.log("instanceof LivingBeing:", dog instanceof LivingBeing);
console.log("instanceof Object:", dog instanceof Object);

console.log("\\nProperties:");
console.log("name:", dog.name); // From LivingBeing
console.log("species:", dog.species); // From Animal
console.log("breed:", dog.breed); // From Dog`}
            />
          </div>
        </section>

        {/* Class Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎨 Class Patterns
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Abstract Class Pattern"
              initialCode={`// Abstract class pattern (no native support, use convention)

class Shape {
  constructor(color) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.color = color;
  }
  
  // Abstract method (must be implemented by subclass)
  getArea() {
    throw new Error("Must implement getArea()");
  }
  
  // Concrete method
  describe() {
    return \`A \${this.color} shape with area \${this.getArea()}\`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }
  
  getArea() {
    return this.side * this.side;
  }
}

// Can't instantiate abstract class
try {
  new Shape("red");
} catch (e) {
  console.log("Abstract error:", e.message);
}

// Can instantiate concrete classes
const circle = new Circle("blue", 5);
console.log("\\nCircle:", circle.describe());
console.log("Area:", circle.getArea().toFixed(2));

const square = new Square("green", 4);
console.log("\\nSquare:", square.describe());
console.log("Area:", square.getArea());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Mixin Pattern"
              initialCode={`// Mixins - compose behavior from multiple sources

const Flyable = {
  fly() {
    return \`\${this.name} is flying\`;
  },
  
  land() {
    return \`\${this.name} is landing\`;
  }
};

const Swimmable = {
  swim() {
    return \`\${this.name} is swimming\`;
  }
};

// Apply mixins to class
function applyMixins(targetClass, ...mixins) {
  mixins.forEach(mixin => {
    Object.assign(targetClass.prototype, mixin);
  });
}

class Bird {
  constructor(name) {
    this.name = name;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Duck {
  constructor(name) {
    this.name = name;
  }
}

// Apply mixins
applyMixins(Bird, Flyable);
applyMixins(Fish, Swimmable);
applyMixins(Duck, Flyable, Swimmable);

const bird = new Bird("Eagle");
console.log(bird.fly());

const fish = new Fish("Salmon");
console.log("\\n" + fish.swim());

const duck = new Duck("Donald");
console.log("\\n" + duck.fly());
console.log(duck.swim());

// Mixin factory
const EventEmitterMixin = Base => class extends Base {
  #listeners = new Map();
  
  on(event, callback) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    this.#listeners.get(event).push(callback);
  }
  
  emit(event, data) {
    const callbacks = this.#listeners.get(event) || [];
    callbacks.forEach(cb => cb(data));
  }
};

class Button extends EventEmitterMixin(Object) {
  click() {
    this.emit("click", { timestamp: Date.now() });
  }
}

const btn = new Button();
btn.on("click", data => console.log("\\nClicked at:", data.timestamp));
btn.click();`}
            />
          </div>
        </section>

        {/* Class vs Function */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚖️ Class vs Constructor Function
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Comparison"
              initialCode={`// Constructor function (old way)
function PersonFunc(name) {
  this.name = name;
}

PersonFunc.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

PersonFunc.species = "Homo sapiens"; // Static

// Class (new way)
class PersonClass {
  static species = "Homo sapiens";
  
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

const p1 = new PersonFunc("Alice");
const p2 = new PersonClass("Bob");

console.log("Function:", p1.greet());
console.log("Class:", p2.greet());

console.log("\\nBoth work the same way!");
console.log("Under the hood, classes use prototypes");

// Key differences:
console.log("\\nDifferences:");
console.log("1. Classes must use 'new'");
// PersonClass(); // TypeError!
console.log("2. Class methods non-enumerable");
console.log("3. Classes always in strict mode");
console.log("4. Classes not hoisted");
console.log("5. Classes have better syntax for:");
console.log("   - Inheritance (extends/super)");
console.log("   - Private fields (#)");
console.log("   - Static members");

// Classes are syntactic sugar
console.log("\\nClass is a function:");
console.log("typeof PersonClass:", typeof PersonClass); // "function"
console.log("Has prototype:", "prototype" in PersonClass); // true`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Class Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use classes for object-oriented code
                </strong>
                <p className="ml-4 mt-1">
                  Clearer syntax than constructor functions
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Always call super() first in derived constructors
                </strong>
                <p className="ml-4 mt-1">Must call before accessing this</p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use private fields for encapsulation
                </strong>
                <p className="ml-4 mt-1">
                  # prefix makes fields truly private (ES2022)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use static for utility methods
                </strong>
                <p className="ml-4 mt-1">
                  Methods that don't need instance data
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Getters/setters for computed properties
                </strong>
                <p className="ml-4 mt-1">
                  Use for validation and derived values
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Prefer composition over inheritance
                </strong>
                <p className="ml-4 mt-1">
                  Deep inheritance hierarchies are hard to maintain
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Use public fields for simple properties
                </strong>
                <p className="ml-4 mt-1">
                  Cleaner than setting in constructor (ES2022)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Document your class API
                </strong>
                <p className="ml-4 mt-1">
                  Use JSDoc for constructor, methods, and properties
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Be careful with this binding
                </strong>
                <p className="ml-4 mt-1">
                  Arrow functions or bind() for event handlers
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Use mixins for cross-cutting concerns
                </strong>
                <p className="ml-4 mt-1">
                  Share functionality across unrelated classes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 15 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Class Features</strong> in JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Class Syntax
                </div>
                <div className="text-gray-400">Declaration & Expression</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Private Fields
                </div>
                <div className="text-gray-400">ES2022</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Inheritance
                </div>
                <div className="text-gray-400">extends & super</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Patterns
                </div>
                <div className="text-gray-400">Abstract, Mixins</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-lg font-semibold hover:from-fuchsia-600 hover:to-pink-600 transition-all"
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
