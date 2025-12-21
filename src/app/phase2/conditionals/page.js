"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function ConditionalsPage() {
  return (
    <SectionLayout
      title="2.1 Conditional Statements"
      description="Master if, else, switch, and control flow in JavaScript"
      nextSection={{
        title: "Loops - All Types",
        path: "/phase2/loops",
      }}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔀 Conditional Statements
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Conditional statements allow your code to make decisions and execute
            different blocks based on conditions. JavaScript provides{" "}
            <span className="text-blue-400 font-mono">if</span>,{" "}
            <span className="text-purple-400 font-mono">else</span>, and{" "}
            <span className="text-green-400 font-mono">switch</span> statements
            for control flow.
          </p>
        </div>

        {/* if Statement */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ✅ if Statement
          </h2>

          <ConceptCard title="if Statement Basics" icon="🎯" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> if (condition) {"{"}...{"}"}
              </li>
              <li>
                <strong>Condition:</strong> Any expression that evaluates to
                true/false
              </li>
              <li>
                <strong>Truthy/Falsy:</strong> Non-boolean values are coerced
              </li>
              <li>
                <strong>Block:</strong> Use curly braces for multiple statements
              </li>
              <li>
                <strong>Single line:</strong> Braces optional for one statement
                (not recommended)
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Basic if Statements"
              initialCode={`// Simple if statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// if with boolean
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}

// if with comparison
let score = 85;

if (score > 60) {
  console.log("You passed!");
}

// if with complex condition
let temperature = 25;
let isSunny = true;

if (temperature > 20 && isSunny) {
  console.log("Perfect weather for a picnic!");
}

// Single line (braces optional, but not recommended)
if (age >= 18) console.log("Adult (single line)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Truthy and Falsy Values"
              initialCode={`// Falsy values (only 8!)
console.log("=== FALSY VALUES ===");

if (false) { console.log("This won't run"); }
if (0) { console.log("This won't run"); }
if (-0) { console.log("This won't run"); }
if (0n) { console.log("This won't run"); }
if ("") { console.log("This won't run"); }
if (null) { console.log("This won't run"); }
if (undefined) { console.log("This won't run"); }
if (NaN) { console.log("This won't run"); }

console.log("All falsy values skipped");

// Truthy values (everything else!)
console.log("\\n=== TRUTHY VALUES ===");

if (true) { console.log("✓ true"); }
if (1) { console.log("✓ Any non-zero number"); }
if (-1) { console.log("✓ Negative numbers"); }
if ("0") { console.log("✓ String '0' (not 0!)"); }
if ("false") { console.log("✓ String 'false'"); }
if (" ") { console.log("✓ String with space"); }
if ([]) { console.log("✓ Empty array"); }
if ({}) { console.log("✓ Empty object"); }
if (function(){}) { console.log("✓ Functions"); }
if (Infinity) { console.log("✓ Infinity"); }`}
            />
          </div>
        </section>

        {/* if...else Statement */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 if...else Statement
          </h2>

          <ConceptCard title="if...else Basics" icon="⚡" color="purple">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Syntax:</strong> if (condition) {"{"} ... {"}"} else{" "}
                {"{"} ... {"}"}
              </li>
              <li>
                <strong>else block:</strong> Executes when condition is false
              </li>
              <li>
                <strong>Only one block:</strong> Either if OR else, never both
              </li>
              <li>
                <strong>No condition:</strong> else doesn't take a condition
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="if...else Examples"
              initialCode={`// Basic if...else
let age = 15;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

// if...else with expressions
let number = 7;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

// if...else with multiple statements
let temperature = 10;

if (temperature > 25) {
  console.log("It's hot outside");
  console.log("Wear light clothes");
  console.log("Stay hydrated");
} else {
  console.log("It's cold outside");
  console.log("Wear a jacket");
  console.log("Drink hot coffee");
}

// Nested if...else
let score = 85;
let hasBonus = true;

if (score >= 90) {
  console.log("Grade: A");
} else {
  if (hasBonus) {
    console.log("Grade: A- (with bonus)");
  } else {
    console.log("Grade: B");
  }
}`}
            />
          </div>
        </section>

        {/* if...else if...else Chains */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔗 if...else if...else Chains
          </h2>

          <ConceptCard title="Multiple Conditions" icon="🎯" color="green">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>else if:</strong> Check multiple conditions in sequence
              </li>
              <li>
                <strong>Short-circuit:</strong> Stops at first true condition
              </li>
              <li>
                <strong>Order matters:</strong> More specific conditions first
              </li>
              <li>
                <strong>Optional else:</strong> Final else catches all remaining
                cases
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="if...else if...else Chains"
              initialCode={`// Grade calculator
let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
  console.log("Excellent!");
} else if (score >= 80) {
  grade = "B";
  console.log("Good job!");
} else if (score >= 70) {
  grade = "C";
  console.log("Satisfactory");
} else if (score >= 60) {
  grade = "D";
  console.log("Needs improvement");
} else {
  grade = "F";
  console.log("Failed");
}

console.log("Grade:", grade);

// Time of day greeting
let hour = 14;
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else if (hour < 22) {
  greeting = "Good evening";
} else {
  greeting = "Good night";
}

console.log("\\n" + greeting + "!");

// Order matters example
let value = 85;

console.log("\\nOrder matters:");
if (value > 50) {
  console.log("Greater than 50"); // This runs
} else if (value > 80) {
  console.log("Greater than 80"); // This never runs!
}

// Correct order
if (value > 80) {
  console.log("Greater than 80"); // This runs
} else if (value > 50) {
  console.log("Greater than 50"); // This is skipped
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Complex Conditions with if...else if"
              initialCode={`// Multiple conditions in each branch
let age = 25;
let hasLicense = true;
let hasInsurance = true;

if (age < 16) {
  console.log("Too young to drive");
} else if (age < 18) {
  console.log("Can drive with supervision");
} else if (!hasLicense) {
  console.log("Need to get a license first");
} else if (!hasInsurance) {
  console.log("Need insurance to drive");
} else {
  console.log("You can drive!");
}

// Combining conditions
let temperature = 28;
let humidity = 80;

if (temperature > 30 && humidity > 70) {
  console.log("\\nHot and humid");
} else if (temperature > 30) {
  console.log("\\nHot but dry");
} else if (temperature > 20 && temperature <= 30) {
  console.log("\\nWarm weather");
} else if (temperature > 10) {
  console.log("\\nCool weather");
} else {
  console.log("\\nCold weather");
}

// No final else (optional)
let number = 7;

if (number % 3 === 0) {
  console.log("\\nDivisible by 3");
} else if (number % 5 === 0) {
  console.log("\\nDivisible by 5");
}
// If neither condition is true, nothing happens
console.log("Done checking");`}
            />
          </div>
        </section>

        {/* switch Statement */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎚️ switch Statement
          </h2>

          <ConceptCard title="switch Basics" icon="🔀" color="orange">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Purpose:</strong> Check one value against multiple cases
              </li>
              <li>
                <strong>Strict equality:</strong> Uses === for comparison
              </li>
              <li>
                <strong>break:</strong> Exit switch (optional but usually
                needed)
              </li>
              <li>
                <strong>Fall-through:</strong> Without break, continues to next
                case
              </li>
              <li>
                <strong>default:</strong> Catches all cases not matched
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Basic switch Statement"
              initialCode={`// Simple switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Tuesday":
    console.log("Second day");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Thursday":
    console.log("Almost there");
    break;
  case "Friday":
    console.log("Last work day!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}

// With numbers
let grade = 2;

switch (grade) {
  case 1:
    console.log("\\nFirst grade");
    break;
  case 2:
    console.log("\\nSecond grade");
    break;
  case 3:
    console.log("\\nThird grade");
    break;
  default:
    console.log("\\nOther grade");
}

// Strict equality (===)
let value = "2";

switch (value) {
  case 2: // Number 2
    console.log("Number 2");
    break;
  case "2": // String "2"
    console.log("String '2'"); // This runs
    break;
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="switch with Fall-through"
              initialCode={`// Fall-through example (no break)
let month = 2;
let days;

switch (month) {
  case 1: case 3: case 5: case 7:
  case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    days = 28; // Simplified (ignoring leap years)
    break;
  default:
    days = 0;
    console.log("Invalid month");
}

console.log("Days in month:", days);

// Intentional fall-through with comments
let animal = "cat";

switch (animal) {
  case "dog":
  case "cat":
    console.log("\\nCommon pet");
    // Fall through intentionally
  case "lion":
  case "tiger":
    console.log("Part of the cat family");
    break;
  case "fish":
    console.log("\\nAquatic animal");
    break;
}

// Fall-through for multiple actions
let level = 3;

console.log("\\nPowers unlocked:");
switch (level) {
  case 5:
    console.log("- Super strength");
    // Fall through
  case 4:
    console.log("- Flight");
    // Fall through
  case 3:
    console.log("- Speed");
    // Fall through
  case 2:
    console.log("- Jump");
    // Fall through
  case 1:
    console.log("- Basic attack");
    break;
  default:
    console.log("No powers yet");
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="switch with default Case"
              initialCode={`// default case handles unmatched values
let color = "purple";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color signal");
}

// default can be placed anywhere (but usually last)
let fruit = "grape";

switch (fruit) {
  case "apple":
    console.log("\\nRed or green");
    break;
  default:
    console.log("\\nSome other fruit"); // This runs first
    break;
  case "banana":
    console.log("\\nYellow");
    break;
}

// default with fall-through
let action = "pause";

switch (action) {
  case "play":
    console.log("\\nPlaying media");
    break;
  case "stop":
    console.log("\\nStopping media");
    break;
  default:
    console.log("\\nUnknown action, treating as pause");
    // Fall through to pause
  case "pause":
    console.log("Pausing media");
    break;
}

// No default (optional)
let status = "pending";

switch (status) {
  case "success":
    console.log("\\nOperation succeeded");
    break;
  case "error":
    console.log("\\nOperation failed");
    break;
}
// No default, so nothing happens for "pending"
console.log("Done");`}
            />
          </div>
        </section>

        {/* switch vs if...else */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚖️ switch vs if...else
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConceptCard title="Use switch when:" icon="✅" color="green">
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Comparing one variable to many values</li>
                <li>Values are discrete (specific values)</li>
                <li>Strict equality (===) is sufficient</li>
                <li>Want cleaner syntax for many cases</li>
                <li>Need fall-through behavior</li>
              </ul>
            </ConceptCard>

            <ConceptCard title="Use if...else when:" icon="✅" color="blue">
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Complex conditions (ranges, combinations)</li>
                <li>Different variables in each condition</li>
                <li>Need comparison operators (&gt;, &lt;, etc.)</li>
                <li>Boolean logic (&&, ||)</li>
                <li>Checking truthy/falsy values</li>
              </ul>
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Comparing switch vs if...else"
              initialCode={`// Same logic with switch
let dayNum = 3;
let dayName1;

switch (dayNum) {
  case 1:
    dayName1 = "Monday";
    break;
  case 2:
    dayName1 = "Tuesday";
    break;
  case 3:
    dayName1 = "Wednesday";
    break;
  default:
    dayName1 = "Unknown";
}

console.log("switch result:", dayName1);

// Same logic with if...else
let dayName2;

if (dayNum === 1) {
  dayName2 = "Monday";
} else if (dayNum === 2) {
  dayName2 = "Tuesday";
} else if (dayNum === 3) {
  dayName2 = "Wednesday";
} else {
  dayName2 = "Unknown";
}

console.log("if...else result:", dayName2);

// Better with if...else (ranges)
let score = 85;

if (score >= 90) {
  console.log("\\nA grade");
} else if (score >= 80) {
  console.log("\\nB grade");
} else if (score >= 70) {
  console.log("\\nC grade");
}

// Can't easily do ranges with switch
// (would need many cases)

// Better with if...else (complex conditions)
let age = 25;
let hasID = true;

if (age >= 21 && hasID) {
  console.log("Can enter club");
} else if (age >= 21) {
  console.log("Need ID");
} else {
  console.log("Too young");
}

// switch can't handle complex conditions easily`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Always use braces {} for if statements
                </strong>
                <p className="ml-4 mt-1">
                  Even for single statements. Makes code more maintainable and
                  prevents bugs.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Put most specific conditions first
                </strong>
                <p className="ml-4 mt-1">
                  In if...else if chains, check more specific conditions before
                  general ones.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Always use break in switch statements
                </strong>
                <p className="ml-4 mt-1">
                  Unless you specifically want fall-through. Add a comment if
                  intentional.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Include a default case in switch
                </strong>
                <p className="ml-4 mt-1">
                  Even if it just logs an error. Catches unexpected values.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Avoid deeply nested conditionals
                </strong>
                <p className="ml-4 mt-1">
                  Use early returns, extract functions, or simplify logic. Max
                  2-3 levels deep.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use explicit comparisons
                </strong>
                <p className="ml-4 mt-1">
                  Prefer if (value === true) over if (value) when clarity
                  matters.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Consider ternary for simple cases
                </strong>
                <p className="ml-4 mt-1">
                  For simple if...else, ternary operator can be cleaner: let
                  status = age &gt;= 18 ? "adult" : "minor"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
