"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function TestingPage() {
  return (
    <SectionLayout
      title="27.1 Testing JavaScript - Complete"
      description="Master testing frameworks, assertion libraries, test types, mocking, and testing tools"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🧪 Complete JavaScript Testing Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Master <strong>testing frameworks</strong>,{" "}
            <strong>assertion libraries</strong>, <strong>test types</strong>,
            and <strong>testing tools</strong> for building reliable,
            well-tested applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Jest",
              "Mocha",
              "Vitest",
              "Chai",
              "Unit Tests",
              "Integration Tests",
              "E2E Tests",
              "Mocking",
              "Spying",
              "Coverage",
              "TDD/BDD",
              "Testing Library",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-yellow-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Testing Frameworks */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🧪 Testing Frameworks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="Jest" icon="✅" color="green">
              Facebook's all-in-one testing framework with built-in mocking and
              coverage
            </ConceptCard>
            <ConceptCard title="Mocha" icon="☕" color="yellow">
              Flexible testing framework with extensive plugin ecosystem
            </ConceptCard>
            <ConceptCard title="Vitest" icon="⚡" color="purple">
              Vite-powered test runner with Jest-compatible API
            </ConceptCard>
            <ConceptCard title="Jasmine" icon="🌸" color="pink">
              BDD framework with no dependencies required
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Jest - Complete Example"
              initialCode={`// Jest - most popular testing framework

console.log("Basic Test Structure:");
console.log(\`
describe('Math operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
  
  it('multiplies 2 * 3 to equal 6', () => {
    expect(2 * 3).toBe(6);
  });
});
\`);

console.log("\\nMatchers:");
console.log(\`
// Equality
expect(value).toBe(4);              // Strict equality (===)
expect(value).toEqual({ a: 1 });    // Deep equality
expect(value).not.toBe(null);       // Negation

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThanOrEqual(4.5);
expect(0.1 + 0.2).toBeCloseTo(0.3); // Floating point

// Strings
expect('team').toMatch(/ea/);
expect('coffee').not.toMatch(/tea/);

// Arrays/Iterables
expect(['apple', 'banana']).toContain('apple');
expect(new Set([1, 2, 3])).toContain(2);

// Exceptions
expect(() => { throw new Error('oops') }).toThrow();
expect(() => fn()).toThrow('error message');
expect(() => fn()).toThrow(Error);

// Async
await expect(fetchData()).resolves.toBe('data');
await expect(fetchData()).rejects.toThrow();
\`);

console.log("\\nSetup & Teardown:");
console.log(\`
beforeAll(() => {
  // Runs once before all tests
  console.log('Setup database');
});

afterAll(() => {
  // Runs once after all tests
  console.log('Cleanup database');
});

beforeEach(() => {
  // Runs before each test
  initializeData();
});

afterEach(() => {
  // Runs after each test
  cleanupData();
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Mocha + Chai Example"
              initialCode={`// Mocha + Chai - flexible testing

console.log("Mocha Test Structure:");
console.log(\`
const { expect } = require('chai');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});
\`);

console.log("\\nChai Assertion Styles:");

console.log("\\n1. BDD (expect/should):");
console.log(\`
const { expect } = require('chai');

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
  .with.lengthOf(3);
\`);

console.log("\\n2. TDD (assert):");
console.log(\`
const assert = require('chai').assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3);
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
\`);

console.log("\\nAsync Tests:");
console.log(\`
it('should complete async operation', function(done) {
  setTimeout(() => {
    expect(true).to.be.true;
    done(); // Signal completion
  }, 100);
});

// Or with promises
it('should resolve promise', function() {
  return fetchData().then(data => {
    expect(data).to.equal('result');
  });
});

// Or with async/await
it('should fetch data', async function() {
  const data = await fetchData();
  expect(data).to.equal('result');
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Vitest Example"
              initialCode={`// Vitest - Vite-powered testing

console.log("Vitest Features:");
console.log(\`
import { describe, it, expect, vi } from 'vitest';

describe('Calculator', () => {
  it('adds numbers', () => {
    expect(1 + 2).toBe(3);
  });
  
  // Works with TypeScript out of the box
  it('works with types', () => {
    const result: number = add(2, 3);
    expect(result).toBe(5);
  });
});
\`);

console.log("\\nVitest Benefits:");
console.log("  ✓ Lightning fast with Vite");
console.log("  ✓ Jest-compatible API");
console.log("  ✓ Native ESM support");
console.log("  ✓ TypeScript out of the box");
console.log("  ✓ Hot Module Reload for tests");
console.log("  ✓ Component testing built-in");

console.log("\\nTest Modes:");
console.log(\`
// Run once
vitest run

// Watch mode
vitest

// UI mode
vitest --ui

// Coverage
vitest --coverage
\`);`}
            />
          </div>
        </section>

        {/* Test Types */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🎯 Test Types</h2>

          <div className="mt-6">
            <CodePlayground
              title="Unit Tests"
              initialCode={`// Unit Tests - test individual functions/components

console.log("Unit Test Example:");
console.log(\`
// Function to test
function add(a, b) {
  return a + b;
}

// Unit test
describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  it('should add negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
  
  it('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});
\`);

console.log("\\nUnit Test Characteristics:");
console.log("  ✓ Fast execution");
console.log("  ✓ Isolated (no dependencies)");
console.log("  ✓ Test single unit of code");
console.log("  ✓ Easy to debug");
console.log("  ✓ Many tests per feature");

console.log("\\nReact Component Unit Test:");
console.log(\`
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Integration Tests"
              initialCode={`// Integration Tests - test multiple units together

console.log("Integration Test Example:");
console.log(\`
// Testing UserService that depends on API
describe('UserService Integration', () => {
  let userService;
  let apiClient;
  
  beforeEach(() => {
    apiClient = new APIClient();
    userService = new UserService(apiClient);
  });
  
  it('should fetch and process user data', async () => {
    // Test real integration between UserService and APIClient
    const user = await userService.getUser(123);
    
    expect(user.id).toBe(123);
    expect(user.name).toBeDefined();
    expect(user.email).toContain('@');
  });
  
  it('should handle API errors', async () => {
    // Test error handling across components
    await expect(
      userService.getUser(999)
    ).rejects.toThrow('User not found');
  });
});
\`);

console.log("\\nIntegration Test Characteristics:");
console.log("  ✓ Test component interactions");
console.log("  ✓ May use real dependencies");
console.log("  ✓ Slower than unit tests");
console.log("  ✓ More realistic scenarios");
console.log("  ✓ Catch integration bugs");

console.log("\\nAPI Integration Test:");
console.log(\`
describe('API Integration', () => {
  it('should create and retrieve user', async () => {
    // Create user
    const createResponse = await api.post('/users', {
      name: 'Alice',
      email: 'alice@test.com'
    });
    
    expect(createResponse.status).toBe(201);
    const userId = createResponse.data.id;
    
    // Retrieve user
    const getResponse = await api.get(\`/users/\${userId}\`);
    expect(getResponse.data.name).toBe('Alice');
  });
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="E2E (End-to-End) Tests"
              initialCode={`// E2E Tests - test complete user workflows

console.log("Cypress E2E Example:");
console.log(\`
describe('Login Flow', () => {
  it('should login successfully', () => {
    // Visit page
    cy.visit('https://example.com/login');
    
    // Fill form
    cy.get('input[name="email"]').type('user@test.com');
    cy.get('input[name="password"]').type('password123');
    
    // Submit
    cy.get('button[type="submit"]').click();
    
    // Verify redirect
    cy.url().should('include', '/dashboard');
    
    // Check welcome message
    cy.contains('Welcome back').should('be.visible');
  });
});
\`);

console.log("\\nPlaywright E2E Example:");
console.log(\`
import { test, expect } from '@playwright/test';

test('user can complete checkout', async ({ page }) => {
  // Navigate
  await page.goto('https://example.com');
  
  // Add to cart
  await page.click('text=Add to Cart');
  await page.click('text=Checkout');
  
  // Fill shipping info
  await page.fill('#name', 'John Doe');
  await page.fill('#address', '123 Main St');
  
  // Complete order
  await page.click('text=Place Order');
  
  // Verify success
  await expect(page.locator('.success')).toContainText('Order placed');
});
\`);

console.log("\\nE2E Test Characteristics:");
console.log("  ✓ Test complete user workflows");
console.log("  ✓ Use real browser");
console.log("  ✓ Slowest tests");
console.log("  ✓ Most realistic");
console.log("  ✓ Catch UI/UX issues");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Snapshot & Performance Tests"
              initialCode={`// Snapshot Tests

console.log("Jest Snapshot Testing:");
console.log(\`
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button>Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// First run creates snapshot file
// Subsequent runs compare against snapshot
// Update with: jest --updateSnapshot
\`);

console.log("\\nPerformance Tests:");
console.log(\`
describe('Performance', () => {
  it('should complete under 100ms', async () => {
    const start = performance.now();
    
    await expensiveOperation();
    
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(100);
  });
  
  it('should handle large datasets', () => {
    const data = generateData(10000);
    const start = performance.now();
    
    processData(data);
    
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(1000); // 1 second
  });
});
\`);

console.log("\\nBenchmark Testing:");
console.log(\`
import Benchmark from 'benchmark';

const suite = new Benchmark.Suite;

suite
  .add('Array#forEach', () => {
    [1,2,3,4,5].forEach(x => x * 2);
  })
  .add('Array#map', () => {
    [1,2,3,4,5].map(x => x * 2);
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
\`);`}
            />
          </div>
        </section>

        {/* Mocking & Spying */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎭 Mocking, Stubbing & Spying
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Jest Mocking"
              initialCode={`// Mocking in Jest

console.log("Mock Functions:");
console.log(\`
// Create mock
const mockFn = jest.fn();

// Call it
mockFn('hello', 123);
mockFn('world');

// Check calls
expect(mockFn).toHaveBeenCalledTimes(2);
expect(mockFn).toHaveBeenCalledWith('hello', 123);
expect(mockFn).toHaveBeenLastCalledWith('world');

// Mock implementation
mockFn.mockReturnValue(42);
mockFn.mockReturnValueOnce(1).mockReturnValueOnce(2);

mockFn.mockImplementation((x) => x * 2);
\`);

console.log("\\nMock Modules:");
console.log(\`
// Mock entire module
jest.mock('./api');
import { fetchUser } from './api';

fetchUser.mockResolvedValue({ id: 1, name: 'Alice' });

test('fetches user', async () => {
  const user = await getUser(1);
  expect(user.name).toBe('Alice');
  expect(fetchUser).toHaveBeenCalledWith(1);
});
\`);

console.log("\\nPartial Mocks:");
console.log(\`
jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  getCurrentTime: jest.fn(() => '12:00:00')
}));
\`);

console.log("\\nSpy on Methods:");
console.log(\`
const spy = jest.spyOn(object, 'method');

// Use real implementation but track calls
spy.mockImplementation(() => 'mocked');

expect(spy).toHaveBeenCalled();

// Restore original
spy.mockRestore();
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Sinon - Stubs & Spies"
              initialCode={`// Sinon.js - comprehensive mocking library

console.log("Sinon Spies:");
console.log(\`
const sinon = require('sinon');

// Create spy
const spy = sinon.spy();
spy('hello');

console.log(spy.callCount); // 1
console.log(spy.firstCall.args); // ['hello']
console.log(spy.calledWith('hello')); // true
\`);

console.log("\\nSinon Stubs:");
console.log(\`
// Stubs replace functions
const stub = sinon.stub();

// Control return values
stub.returns(42);
stub.withArgs('foo').returns(1);
stub.withArgs('bar').returns(2);

console.log(stub('foo')); // 1
console.log(stub('bar')); // 2
console.log(stub('baz')); // 42

// Throw errors
stub.throws(new Error('Not allowed'));

// Async
stub.resolves('data');
stub.rejects(new Error('Failed'));
\`);

console.log("\\nSinon Mocks:");
console.log(\`
const mock = sinon.mock(object);

// Set expectations
mock.expects('method')
  .once()
  .withArgs('param')
  .returns('value');

// Verify expectations
mock.verify();

// Restore
mock.restore();
\`);

console.log("\\nFake Timers:");
console.log(\`
const clock = sinon.useFakeTimers();

setTimeout(() => console.log('fired'), 1000);

clock.tick(500); // Nothing happens
clock.tick(500); // Callback fires

clock.restore();
\`);`}
            />
          </div>
        </section>

        {/* Testing Tools */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🛠️ Testing Tools
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="React Testing Library"
              initialCode={`// React Testing Library - user-centric testing

console.log("Testing Library Philosophy:");
console.log("  ✓ Test behavior, not implementation");
console.log("  ✓ Find elements like users do");
console.log("  ✓ Avoid testing internal state");

console.log("\\nBasic Example:");
console.log(\`
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('counter increments', () => {
  render(<Counter />);
  
  // Find by text (user-facing)
  const button = screen.getByText('Increment');
  const count = screen.getByText(/count:/i);
  
  expect(count).toHaveTextContent('Count: 0');
  
  // User interaction
  fireEvent.click(button);
  expect(count).toHaveTextContent('Count: 1');
});
\`);

console.log("\\nQueries:");
console.log(\`
// By Role (most accessible)
screen.getByRole('button', { name: /submit/i });

// By Label Text
screen.getByLabelText('Email');

// By Placeholder
screen.getByPlaceholderText('Enter email');

// By Text
screen.getByText('Hello');

// By Test ID (last resort)
screen.getByTestId('custom-element');

// Query variants:
// getBy* - throws if not found
// queryBy* - returns null if not found
// findBy* - returns promise (waits)
\`);

console.log("\\nAsync Testing:");
console.log(\`
test('loads data', async () => {
  render(<DataComponent />);
  
  // Wait for element to appear
  const data = await screen.findByText('Data loaded');
  expect(data).toBeInTheDocument();
  
  // Or use waitFor
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="E2E Tools Overview"
              initialCode={`// E2E Testing Tools

console.log("Cypress:");
console.log(\`
describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('adds new todo', () => {
    cy.get('input').type('New task{enter}');
    cy.contains('New task').should('be.visible');
  });
  
  it('completes todo', () => {
    cy.contains('New task').click();
    cy.contains('New task').should('have.class', 'completed');
  });
});

// Cypress features:
// ✓ Time travel debugging
// ✓ Automatic waiting
// ✓ Real-time reloads
// ✓ Network stubbing
\`);

console.log("\\nPlaywright:");
console.log(\`
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});

// Playwright features:
// ✓ Cross-browser (Chrome, Firefox, Safari)
// ✓ Auto-wait
// ✓ Network interception
// ✓ Video recording
// ✓ Parallel execution
\`);

console.log("\\nPuppeteer:");
console.log(\`
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  await page.pdf({ path: 'page.pdf' });
  
  await browser.close();
})();

// Puppeteer features:
// ✓ Chrome/Chromium control
// ✓ Headless by default
// ✓ Screenshot/PDF generation
// ✓ Performance testing
\`);`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Testing Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-yellow-400">
                  1. Test behavior, not implementation
                </strong>
                <p className="ml-4 mt-1">
                  Focus on what code does, not how it does it
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  2. Write descriptive test names
                </strong>
                <p className="ml-4 mt-1">
                  Test names should explain what is being tested
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  3. Follow AAA pattern
                </strong>
                <p className="ml-4 mt-1">
                  Arrange (setup), Act (execute), Assert (verify)
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  4. Keep tests independent
                </strong>
                <p className="ml-4 mt-1">
                  Tests should not depend on each other
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">5. Test edge cases</strong>
                <p className="ml-4 mt-1">
                  Empty inputs, null, undefined, max values, etc.
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  6. Use appropriate test types
                </strong>
                <p className="ml-4 mt-1">
                  Many unit tests, some integration, few E2E
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  7. Mock external dependencies
                </strong>
                <p className="ml-4 mt-1">
                  Isolate unit tests from APIs, databases, etc.
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  8. Maintain test code quality
                </strong>
                <p className="ml-4 mt-1">
                  Test code is as important as production code
                </p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  9. Run tests in CI/CD
                </strong>
                <p className="ml-4 mt-1">Automate testing on every commit/PR</p>
              </div>
              <div>
                <strong className="text-yellow-400">
                  10. Aim for good coverage
                </strong>
                <p className="ml-4 mt-1">
                  80%+ coverage, but focus on critical paths
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TDD/BDD */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              🔄 TDD & BDD Methodologies
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Test-Driven Development (TDD)
                </h3>
                <p className="mb-2">
                  Write tests before implementation following
                  Red-Green-Refactor:
                </p>
                <ol className="ml-4 space-y-2 list-decimal list-inside">
                  <li>
                    <strong>Red:</strong> Write failing test
                  </li>
                  <li>
                    <strong>Green:</strong> Write minimal code to pass
                  </li>
                  <li>
                    <strong>Refactor:</strong> Improve code while keeping tests
                    green
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-2">
                  Behavior-Driven Development (BDD)
                </h3>
                <p className="mb-2">
                  Describe behavior in natural language using Given-When-Then:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Given:</strong> Initial context
                  </li>
                  <li>
                    <strong>When:</strong> Action occurs
                  </li>
                  <li>
                    <strong>Then:</strong> Expected outcome
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 27 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>JavaScript Testing</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Frameworks
                </div>
                <div className="text-gray-400">Jest, Mocha, Vitest</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Test Types
                </div>
                <div className="text-gray-400">Unit, Integration, E2E</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Mocking
                </div>
                <div className="text-gray-400">Spies, Stubs, Mocks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Tools
                </div>
                <div className="text-gray-400">Cypress, Playwright</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-yellow-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY
              </p>
              <p className="text-gray-300">
                <strong>27 Phases</strong> • <strong>33 Sections</strong> •{" "}
                <strong>1900+ Concepts</strong> •{" "}
                <strong>1350+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                From Fundamentals to Professional Testing
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-amber-600 transition-all"
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
