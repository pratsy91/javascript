"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function DesignPatternsPage() {
  return (
    <SectionLayout
      title="31.1 Design Patterns - Complete"
      description="Master all creational, structural, behavioral, and architectural design patterns in JavaScript"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🎨 Complete Design Patterns Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Master <strong>all design patterns</strong> in JavaScript:
            creational (5), structural (9), behavioral (10), and architectural
            (5) patterns. Write maintainable, scalable, professional code.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Singleton",
              "Factory",
              "Observer",
              "Module",
              "Decorator",
              "Strategy",
              "MVC",
              "Redux",
              "Pub/Sub",
              "Facade",
              "Command",
              "29 Total Patterns",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-violet-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Creational Patterns */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Creational Patterns (5)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Singleton Pattern"
              initialCode={`// Singleton - ensure only one instance exists

console.log("ES6 Module Singleton:");
console.log(\`
// database.js
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = this.connect();
    Database.instance = this;
  }
  
  connect() {
    console.log('Connecting to database...');
    return { status: 'connected' };
  }
  
  query(sql) {
    console.log('Executing:', sql);
  }
}

// Export single instance
export default new Database();

// Usage
import db from './database.js';
db.query('SELECT * FROM users');
\`);

console.log("\\nClass-based Singleton:");
console.log(\`
class Singleton {
  static instance;
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
  
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2); // true
\`);

console.log("\\nUse cases:");
console.log("  • Database connections");
console.log("  • Configuration objects");
console.log("  • Logging services");
console.log("  • Cache managers");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Factory Patterns"
              initialCode={`// Factory - create objects without specifying exact class

console.log("Simple Factory:");
console.log(\`
class UserFactory {
  static createUser(type) {
    switch (type) {
      case 'admin':
        return new AdminUser();
      case 'guest':
        return new GuestUser();
      default:
        return new RegularUser();
    }
  }
}

const admin = UserFactory.createUser('admin');
\`);

console.log("\\nFactory Method:");
console.log(\`
class VehicleFactory {
  createVehicle(type) {
    throw new Error('Must implement createVehicle');
  }
}

class CarFactory extends VehicleFactory {
  createVehicle(model) {
    return new Car(model);
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(model) {
    return new Bike(model);
  }
}
\`);

console.log("\\nAbstract Factory:");
console.log(\`
class UIFactory {
  createButton() { throw new Error('Implement'); }
  createCheckbox() { throw new Error('Implement'); }
}

class LightThemeFactory extends UIFactory {
  createButton() { return new LightButton(); }
  createCheckbox() { return new LightCheckbox(); }
}

class DarkThemeFactory extends UIFactory {
  createButton() { return new DarkButton(); }
  createCheckbox() { return new DarkCheckbox(); }
}

// Usage
const factory = isDark ? new DarkThemeFactory() : new LightThemeFactory();
const button = factory.createButton();
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Builder & Prototype Patterns"
              initialCode={`// Builder - construct complex objects step by step

console.log("Builder Pattern:");
console.log(\`
class QueryBuilder {
  constructor() {
    this.query = { select: [], where: [], orderBy: [] };
  }
  
  select(...fields) {
    this.query.select.push(...fields);
    return this; // Chaining
  }
  
  where(condition) {
    this.query.where.push(condition);
    return this;
  }
  
  orderBy(field, direction = 'ASC') {
    this.query.orderBy.push({ field, direction });
    return this;
  }
  
  build() {
    return this.query;
  }
}

// Usage
const query = new QueryBuilder()
  .select('id', 'name', 'email')
  .where('age > 18')
  .where('active = true')
  .orderBy('name', 'ASC')
  .build();
\`);

console.log("\\nPrototype Pattern:");
console.log(\`
// Clone objects
const carPrototype = {
  wheels: 4,
  engine: 'V6',
  clone() {
    return Object.create(this);
  }
};

const car1 = carPrototype.clone();
car1.color = 'red';

const car2 = carPrototype.clone();
car2.color = 'blue';

// Deep clone
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Or use structuredClone (modern)
const cloned = structuredClone(original);
\`);`}
            />
          </div>
        </section>

        {/* Structural Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏛️ Structural Patterns (9)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Module & Revealing Module Patterns"
              initialCode={`// Module Pattern - encapsulation

console.log("Module Pattern (IIFE):");
console.log(\`
const CounterModule = (function() {
  // Private variables
  let count = 0;
  
  // Private function
  function log() {
    console.log('Count:', count);
  }
  
  // Public API
  return {
    increment() {
      count++;
      log();
    },
    decrement() {
      count--;
      log();
    },
    getCount() {
      return count;
    }
  };
})();

CounterModule.increment(); // Count: 1
console.log(CounterModule.count); // undefined (private)
\`);

console.log("\\nRevealing Module Pattern:");
console.log(\`
const Calculator = (function() {
  // Private
  let result = 0;
  
  function add(x) {
    result += x;
    return this;
  }
  
  function subtract(x) {
    result -= x;
    return this;
  }
  
  function getResult() {
    return result;
  }
  
  function reset() {
    result = 0;
  }
  
  // Reveal public methods
  return {
    add,
    subtract,
    getResult,
    reset
  };
})();

Calculator.add(5).subtract(2);
console.log(Calculator.getResult()); // 3
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Decorator, Facade & Adapter Patterns"
              initialCode={`// Decorator - add behavior to objects

console.log("Decorator Pattern:");
console.log(\`
class Coffee {
  cost() { return 5; }
  description() { return 'Coffee'; }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() { return this.coffee.cost() + 2; }
  description() { return this.coffee.description() + ', Milk'; }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() { return this.coffee.cost() + 1; }
  description() { return this.coffee.description() + ', Sugar'; }
}

let order = new Coffee();
order = new MilkDecorator(order);
order = new SugarDecorator(order);
console.log(order.description()); // Coffee, Milk, Sugar
console.log(order.cost()); // 8
\`);

console.log("\\nFacade Pattern:");
console.log(\`
// Simplify complex subsystem
class HomeTheaterFacade {
  constructor() {
    this.dvd = new DVDPlayer();
    this.projector = new Projector();
    this.lights = new Lights();
    this.sound = new SoundSystem();
  }
  
  watchMovie(movie) {
    this.lights.dim(10);
    this.projector.on();
    this.sound.on();
    this.dvd.play(movie);
  }
  
  endMovie() {
    this.dvd.stop();
    this.sound.off();
    this.projector.off();
    this.lights.on();
  }
}

const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie('Inception');
\`);

console.log("\\nAdapter Pattern:");
console.log(\`
// Make incompatible interfaces work together
class OldAPI {
  getData() { return { name: 'John', age: 30 }; }
}

class NewAPIAdapter {
  constructor(oldApi) {
    this.oldApi = oldApi;
  }
  
  fetchUser() {
    const data = this.oldApi.getData();
    return { user: data }; // Adapt format
  }
}

const api = new NewAPIAdapter(new OldAPI());
console.log(api.fetchUser());
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Proxy, Flyweight & Composite Patterns"
              initialCode={`// Proxy Pattern (using Proxy object)

console.log("Proxy Pattern:");
console.log(\`
class Image {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }
  loadFromDisk() {
    console.log('Loading', this.filename);
  }
  display() {
    console.log('Displaying', this.filename);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.image = null; // Lazy loading
  }
  display() {
    if (!this.image) {
      this.image = new Image(this.filename);
    }
    this.image.display();
  }
}

const image = new ImageProxy('photo.jpg');
// Not loaded yet
image.display(); // Loads and displays
\`);

console.log("\\nFlyweight Pattern:");
console.log(\`
// Share common data to save memory
class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = new Map();
  }
  
  getFlyweight(sharedState) {
    const key = JSON.stringify(sharedState);
    if (!this.flyweights.has(key)) {
      this.flyweights.set(key, new Flyweight(sharedState));
    }
    return this.flyweights.get(key);
  }
}

// Reuse objects with same shared state
\`);

console.log("\\nComposite Pattern:");
console.log(\`
// Treat individual and composite objects uniformly
class Component {
  add(component) {}
  remove(component) {}
  execute() {}
}

class Leaf extends Component {
  execute() { console.log('Leaf executed'); }
}

class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }
  add(component) { this.children.push(component); }
  remove(component) { /* remove logic */ }
  execute() {
    this.children.forEach(child => child.execute());
  }
}
\`);`}
            />
          </div>
        </section>

        {/* Behavioral Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎭 Behavioral Patterns (10)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Observer & Pub/Sub Patterns"
              initialCode={`// Observer - notify dependents of state changes

console.log("Observer Pattern:");
console.log(\`
class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Received:', data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify('Hello'); // Observer receives update
\`);

console.log("\\nPub/Sub Pattern:");
console.log(\`
class EventBus {
  constructor() {
    this.events = new Map();
  }
  
  subscribe(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
    
    // Return unsubscribe function
    return () => {
      const callbacks = this.events.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    };
  }
  
  publish(event, data) {
    if (!this.events.has(event)) return;
    this.events.get(event).forEach(callback => callback(data));
  }
}

// Usage
const eventBus = new EventBus();
const unsubscribe = eventBus.subscribe('user:login', (user) => {
  console.log('User logged in:', user);
});

eventBus.publish('user:login', { id: 1, name: 'Alice' });
unsubscribe(); // Stop listening
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Strategy & Command Patterns"
              initialCode={`// Strategy - select algorithm at runtime

console.log("Strategy Pattern:");
console.log(\`
// Different algorithms for same task
class PaymentStrategy {
  pay(amount) {}
}

class CreditCardStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(\`Paid \${amount} with credit card\`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(\`Paid \${amount} with PayPal\`);
  }
}

class BitcoinStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(\`Paid \${amount} with Bitcoin\`);
  }
}

class Checkout {
  constructor(strategy) {
    this.strategy = strategy;
  }
  
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  
  processPayment(amount) {
    this.strategy.pay(amount);
  }
}

const checkout = new Checkout(new CreditCardStrategy());
checkout.processPayment(100);
checkout.setStrategy(new PayPalStrategy());
checkout.processPayment(50);
\`);

console.log("\\nCommand Pattern:");
console.log(\`
// Encapsulate requests as objects
class Command {
  execute() {}
  undo() {}
}

class AddTextCommand extends Command {
  constructor(editor, text) {
    super();
    this.editor = editor;
    this.text = text;
  }
  execute() {
    this.editor.addText(this.text);
  }
  undo() {
    this.editor.removeText(this.text.length);
  }
}

class CommandManager {
  constructor() {
    this.history = [];
  }
  
  execute(command) {
    command.execute();
    this.history.push(command);
  }
  
  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

const manager = new CommandManager();
manager.execute(new AddTextCommand(editor, 'Hello'));
manager.undo();
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="State & Chain of Responsibility"
              initialCode={`// State Pattern - change behavior based on state

console.log("State Pattern:");
console.log(\`
class State {
  handle(context) {}
}

class StartedState extends State {
  handle(context) {
    console.log('Started → Running');
    context.setState(new RunningState());
  }
}

class RunningState extends State {
  handle(context) {
    console.log('Running → Stopped');
    context.setState(new StoppedState());
  }
}

class Context {
  constructor() {
    this.state = new StartedState();
  }
  
  setState(state) {
    this.state = state;
  }
  
  request() {
    this.state.handle(this);
  }
}

const context = new Context();
context.request(); // Started → Running
context.request(); // Running → Stopped
\`);

console.log("\\nChain of Responsibility:");
console.log(\`
class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }
  
  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.isAuthenticated) {
      return 'Authentication required';
    }
    return super.handle(request);
  }
}

class ValidationHandler extends Handler {
  handle(request) {
    if (!request.isValid) {
      return 'Validation failed';
    }
    return super.handle(request);
  }
}

// Chain: Auth → Validation → Process
const auth = new AuthHandler();
const validation = new ValidationHandler();
auth.setNext(validation);

auth.handle(request);
\`);`}
            />
          </div>
        </section>

        {/* Architectural Patterns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Architectural Patterns (5)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="MVC, MVP & MVVM"
              initialCode={`// MVC - Model-View-Controller

console.log("MVC Pattern:");
console.log(\`
// Model - data and business logic
class UserModel {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
  getUsers() {
    return this.users;
  }
}

// View - presentation
class UserView {
  render(users) {
    console.log('Rendering users:', users);
  }
}

// Controller - handles input, updates model
class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  
  addUser(user) {
    this.model.addUser(user);
    this.view.render(this.model.getUsers());
  }
}

const controller = new UserController(new UserModel(), new UserView());
controller.addUser({ name: 'Alice' });
\`);

console.log("\\nMVP - Model-View-Presenter:");
console.log(\`
// View is passive, Presenter handles all logic
class View {
  setPresenter(presenter) {
    this.presenter = presenter;
  }
  onButtonClick() {
    this.presenter.handleClick();
  }
}

class Presenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.setPresenter(this);
  }
  handleClick() {
    const data = this.model.getData();
    this.view.display(data);
  }
}
\`);

console.log("\\nMVVM - Model-View-ViewModel:");
console.log(\`
// ViewModel provides data binding
class ViewModel {
  constructor(model) {
    this.model = model;
    this.data = reactive(model.data); // Vue, React
  }
  
  updateData(newData) {
    this.data.value = newData;
    this.model.save(newData);
  }
}

// View binds to ViewModel
// Changes automatically reflected
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flux & Redux Patterns"
              initialCode={`// Flux - unidirectional data flow

console.log("Flux Pattern:");
console.log(\`
// Action → Dispatcher → Store → View

// Actions
const Actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

// Dispatcher
class Dispatcher {
  constructor() {
    this.callbacks = [];
  }
  
  register(callback) {
    this.callbacks.push(callback);
  }
  
  dispatch(action) {
    this.callbacks.forEach(callback => callback(action));
  }
}

// Store
class TodoStore {
  constructor(dispatcher) {
    this.todos = [];
    dispatcher.register(this.handleAction.bind(this));
  }
  
  handleAction(action) {
    switch (action.type) {
      case Actions.ADD_TODO:
        this.todos.push(action.payload);
        this.emitChange();
        break;
    }
  }
  
  emitChange() {
    // Notify views
  }
}
\`);

console.log("\\nRedux Pattern:");
console.log(\`
// Single store, pure reducers, actions

// Reducer (pure function)
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

// Store
import { createStore } from 'redux';
const store = createStore(todosReducer);

// Dispatch actions
store.dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } });

// Subscribe to changes
store.subscribe(() => {
  console.log(store.getState());
});
\`);`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Design Patterns Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-violet-400">
                  1. Don't overuse patterns
                </strong>
                <p className="ml-4 mt-1">
                  Use patterns when they solve a real problem
                </p>
              </div>
              <div>
                <strong className="text-violet-400">
                  2. Understand the problem first
                </strong>
                <p className="ml-4 mt-1">
                  Choose pattern based on requirements, not familiarity
                </p>
              </div>
              <div>
                <strong className="text-violet-400">3. Keep it simple</strong>
                <p className="ml-4 mt-1">
                  Simple solution beats complex pattern
                </p>
              </div>
              <div>
                <strong className="text-violet-400">
                  4. Use modules for encapsulation
                </strong>
                <p className="ml-4 mt-1">
                  ES6 modules are built-in Module pattern
                </p>
              </div>
              <div>
                <strong className="text-violet-400">
                  5. Prefer composition over inheritance
                </strong>
                <p className="ml-4 mt-1">More flexible, easier to test</p>
              </div>
              <div>
                <strong className="text-violet-400">
                  6. Document pattern usage
                </strong>
                <p className="ml-4 mt-1">Explain why pattern was chosen</p>
              </div>
              <div>
                <strong className="text-violet-400">
                  7. Use native Proxy for proxy pattern
                </strong>
                <p className="ml-4 mt-1">
                  JavaScript has built-in Proxy object
                </p>
              </div>
              <div>
                <strong className="text-violet-400">
                  8. Consider framework patterns
                </strong>
                <p className="ml-4 mt-1">
                  React/Vue already implement many patterns
                </p>
              </div>
              <div>
                <strong className="text-violet-400">
                  9. Test pattern implementations
                </strong>
                <p className="ml-4 mt-1">Patterns should improve testability</p>
              </div>
              <div>
                <strong className="text-violet-400">
                  10. Learn pattern intent, not just code
                </strong>
                <p className="ml-4 mt-1">
                  Understand when and why to use each pattern
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 31 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Design Patterns</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
                <div className="text-gray-400">Creational Patterns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">9</div>
                <div className="text-gray-400">Structural Patterns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">10</div>
                <div className="text-gray-400">Behavioral Patterns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">5</div>
                <div className="text-gray-400">Architectural Patterns</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-violet-400 mb-2">
                🏆 31 PHASES COMPLETE - ULTIMATE MASTERY!
              </p>
              <p className="text-gray-300">
                <strong>31 Phases</strong> • <strong>37 Sections</strong> •{" "}
                <strong>2150+ Concepts</strong> •{" "}
                <strong>1500+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                From Fundamentals to Professional Design Patterns
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all"
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
