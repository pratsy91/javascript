"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function StringMethodsPage() {
  return (
    <SectionLayout
      title="3.1 String - ALL Methods"
      description="Master every single string method: static, instance, searching, extraction, modification, and more"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📝 Complete String Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Strings are one of the most used data types in JavaScript. This
            section covers <strong>ALL string methods</strong> - static methods,
            instance methods, and template literals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Static (3)",
              "Searching (11)",
              "Extraction (4)",
              "Modification (14)",
              "Comparison (1)",
              "Conversion (2)",
              "Iteration (2)",
              "Templates",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-green-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* String Static Methods */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 String Static Methods (3)
          </h2>

          <ConceptCard title="Static Methods" icon="⚙️" color="blue">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>String.fromCharCode():</strong> Create from UTF-16 codes
              </li>
              <li>
                <strong>String.fromCodePoint():</strong> Create from Unicode
                code points
              </li>
              <li>
                <strong>String.raw():</strong> Raw template literal
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="String.fromCharCode()"
              initialCode={`// Create string from char codes
console.log("String.fromCharCode(65):", String.fromCharCode(65)); // "A"
console.log("String.fromCharCode(72, 101, 108, 108, 111):", 
  String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// Number codes to string
const codes = [87, 111, 114, 108, 100];
const word = String.fromCharCode(...codes);
console.log("From codes:", word); // "World"

// Special characters
console.log("\\nNewline code:", String.fromCharCode(10));
console.log("Tab code:", String.fromCharCode(9));
console.log("Space code:", String.fromCharCode(32));

// Unicode characters (BMP only - up to U+FFFF)
console.log("\\nEmoji (won't work):", String.fromCharCode(128512)); // ❌
console.log("Heart:", String.fromCharCode(9829)); // ♥

// Range example
console.log("\\nA-Z:");
let alphabet = "";
for (let i = 65; i <= 90; i++) {
  alphabet += String.fromCharCode(i);
}
console.log(alphabet);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="String.fromCodePoint() - ES2015"
              initialCode={`// Create string from code points (supports full Unicode!)
console.log("String.fromCodePoint(65):", String.fromCodePoint(65)); // "A"

// Emoji (works!)
console.log("\\nEmoji:");
console.log("😀 code:", String.fromCodePoint(128512)); // 😀
console.log("🚀 code:", String.fromCodePoint(0x1F680)); // 🚀
console.log("❤️ code:", String.fromCodePoint(0x2764)); // ❤

// Multiple code points
console.log("\\nMultiple:");
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // "Hello"
console.log(String.fromCodePoint(0x1F44B, 32, 0x1F30D)); // "👋 🌍"

// High Unicode planes (beyond BMP)
console.log("\\nHigh planes:");
console.log("𝕳𝖊𝖑𝖑𝖔:", String.fromCodePoint(0x1D5F3, 0x1D5F2, 0x1D5F9, 0x1D5F9, 0x1D5FC));

// Comparison with fromCharCode
console.log("\\nfromCharCode(128512):", String.fromCharCode(128512)); // Wrong
console.log("fromCodePoint(128512):", String.fromCodePoint(128512)); // 😀

// Building strings
const codePoints = [72, 101, 121, 33, 0x1F44B];
console.log("\\nFrom array:", String.fromCodePoint(...codePoints));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="String.raw() - ES2015"
              initialCode={`// Get raw string (no escape processing)
console.log("Normal template:", \`Line 1\\nLine 2\`);
console.log("Raw template:", String.raw\`Line 1\\nLine 2\`);

// Backslashes preserved
console.log("\\nPath with String.raw:");
console.log(String.raw\`C:\\Users\\Name\\Documents\`);

// vs regular template
console.log("Normal:", \`C:\\Users\\Name\\Documents\`); // Escapes processed

// With variables (still interpolated!)
const name = "Alice";
console.log("\\nWith variable:");
console.log(String.raw\`Hello \${name}\\n\`); // Variable works, \\n doesn't

// Unicode escapes not processed
console.log("\\nUnicode:");
console.log("Normal \\u0041:", \`\\u0041\`); // "A"
console.log("Raw \\u0041:", String.raw\`\\u0041\`); // "\\u0041"

// Practical use: regex patterns, file paths
const regex = String.raw\`\\d+\\.\\d+\`;
console.log("\\nRegex pattern:", regex);

const filePath = String.raw\`C:\\Program Files\\App\\config.json\`;
console.log("File path:", filePath);`}
            />
          </div>
        </section>

        {/* Searching & Matching Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔍 Searching & Matching Methods (11)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="charAt() and charCodeAt()"
              initialCode={`const str = "Hello World";

// charAt() - get character at index
console.log("charAt(0):", str.charAt(0)); // "H"
console.log("charAt(6):", str.charAt(6)); // "W"
console.log("charAt(100):", str.charAt(100)); // "" (empty)
console.log("charAt(-1):", str.charAt(-1)); // "" (empty)

// Bracket notation (alternative)
console.log("\\nBracket notation:");
console.log("str[0]:", str[0]); // "H"
console.log("str[100]:", str[100]); // undefined

// charCodeAt() - get UTF-16 code
console.log("\\ncharCodeAt(0):", str.charCodeAt(0)); // 72 (H)
console.log("charCodeAt(6):", str.charCodeAt(6)); // 87 (W)
console.log("charCodeAt(100):", str.charCodeAt(100)); // NaN

// Get all char codes
console.log("\\nAll char codes:");
for (let i = 0; i < str.length; i++) {
  console.log(\`'\${str[i]}' = \${str.charCodeAt(i)}\`);
}

// Reverse: from code to char
console.log("\\nFrom code 72:", String.fromCharCode(72)); // "H"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="codePointAt() - ES2015"
              initialCode={`// codePointAt() - get full Unicode code point
const str = "Hello 🚀";

console.log("codePointAt(0):", str.codePointAt(0)); // 72 (H)
console.log("codePointAt(6):", str.codePointAt(6)); // 128640 (🚀)

// vs charCodeAt for emoji
console.log("\\nEmoji 🚀:");
console.log("charCodeAt(6):", str.charCodeAt(6)); // 55357 (high surrogate)
console.log("charCodeAt(7):", str.charCodeAt(7)); // 56896 (low surrogate)
console.log("codePointAt(6):", str.codePointAt(6)); // 128640 (full code point!)

// Reverse
console.log("\\nFrom code point:");
console.log(String.fromCodePoint(128640)); // 🚀

// Iterating with code points
const text = "Hi 👋 World 🌍";
console.log("\\nAll code points:");
for (let char of text) {
  const code = char.codePointAt(0);
  console.log(\`'\${char}' = \${code} (0x\${code.toString(16)})\`);
}

// Get hex representation
console.log("\\nHex codes:");
console.log("A:", "A".codePointAt(0).toString(16)); // "41"
console.log("🚀:", "🚀".codePointAt(0).toString(16)); // "1f680"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="indexOf() and lastIndexOf()"
              initialCode={`const str = "Hello World, Hello JavaScript";

// indexOf() - find first occurrence
console.log("indexOf('Hello'):", str.indexOf("Hello")); // 0
console.log("indexOf('World'):", str.indexOf("World")); // 6
console.log("indexOf('hello'):", str.indexOf("hello")); // -1 (case-sensitive)
console.log("indexOf('xyz'):", str.indexOf("xyz")); // -1 (not found)

// indexOf with fromIndex
console.log("\\nWith fromIndex:");
console.log("indexOf('Hello', 0):", str.indexOf("Hello", 0)); // 0
console.log("indexOf('Hello', 1):", str.indexOf("Hello", 1)); // 13 (second occurrence)

// lastIndexOf() - find last occurrence
console.log("\\nlastIndexOf('Hello'):", str.lastIndexOf("Hello")); // 13
console.log("lastIndexOf('World'):", str.lastIndexOf("World")); // 6

// lastIndexOf with fromIndex (searches backward from index)
console.log("\\nlastIndexOf with fromIndex:");
console.log("lastIndexOf('Hello', 20):", str.lastIndexOf("Hello", 20)); // 13
console.log("lastIndexOf('Hello', 10):", str.lastIndexOf("Hello", 10)); // 0

// Finding all occurrences
console.log("\\nAll occurrences of 'l':");
let pos = -1;
while ((pos = str.indexOf("l", pos + 1)) !== -1) {
  console.log("Found at:", pos);
}

// Check if string contains substring
console.log("\\nContains 'World':", str.indexOf("World") !== -1);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="includes(), startsWith(), endsWith() - ES2015"
              initialCode={`const str = "Hello JavaScript World";

// includes() - check if contains (case-sensitive)
console.log("includes('JavaScript'):", str.includes("JavaScript")); // true
console.log("includes('javascript'):", str.includes("javascript")); // false
console.log("includes('Python'):", str.includes("Python")); // false

// includes with position
console.log("\\nWith position:");
console.log("includes('Hello', 0):", str.includes("Hello", 0)); // true
console.log("includes('Hello', 1):", str.includes("Hello", 1)); // false

// startsWith() - check if starts with
console.log("\\nstartsWith('Hello'):", str.startsWith("Hello")); // true
console.log("startsWith('World'):", str.startsWith("World")); // false
console.log("startsWith('JavaScript', 6):", str.startsWith("JavaScript", 6)); // true

// endsWith() - check if ends with
console.log("\\nendsWith('World'):", str.endsWith("World")); // true
console.log("endsWith('JavaScript'):", str.endsWith("JavaScript")); // false

// endsWith with length (checks first n characters)
console.log("\\nendsWith with length:");
console.log("endsWith('JavaScript', 16):", str.endsWith("JavaScript", 16)); // true
console.log("Full string:", str.substring(0, 16)); // "Hello JavaScript"

// Practical use cases
const url = "https://example.com/api/users";
console.log("\\nURL checks:");
console.log("Is HTTPS:", url.startsWith("https://"));
console.log("Is API:", url.includes("/api/"));
console.log("Users endpoint:", url.endsWith("/users"));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="search(), match(), matchAll()"
              initialCode={`const str = "The rain in Spain stays mainly in the plain";

// search() - find using regex (returns index)
console.log("search(/ain/):", str.search(/ain/)); // 5
console.log("search(/xyz/):", str.search(/xyz/)); // -1

// Case-insensitive search
console.log("\\nsearch(/RAIN/i):", str.search(/RAIN/i)); // 4

// match() - get matches
console.log("\\nmatch(/ain/):", str.match(/ain/)); // ["ain"]
console.log("match(/ain/g):", str.match(/ain/g)); // ["ain", "ain", "ain"]

// match with groups
const email = "user@example.com";
const emailMatch = email.match(/(.+)@(.+)\\.(.+)/);
console.log("\\nEmail match:", emailMatch);
console.log("Username:", emailMatch[1]);
console.log("Domain:", emailMatch[2]);
console.log("TLD:", emailMatch[3]);

// matchAll() - ES2020 (iterator of all matches)
console.log("\\nmatchAll:");
const regex = /a(i)n/g;
const matches = [...str.matchAll(regex)];
console.log("Number of matches:", matches.length);

matches.forEach((match, i) => {
  console.log(\`Match \${i}: '\${match[0]}' at index \${match.index}\`);
  console.log("  Captured group:", match[1]);
});

// Named capture groups
const text = "2024-10-15";
const dateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const dateMatch = text.match(dateRegex);
console.log("\\nDate:", dateMatch.groups);`}
            />
          </div>
        </section>

        {/* Extraction Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✂️ Extraction Methods (4)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="slice()"
              initialCode={`const str = "Hello JavaScript";

// slice(start, end) - extract portion
console.log("slice(0, 5):", str.slice(0, 5)); // "Hello"
console.log("slice(6, 16):", str.slice(6, 16)); // "JavaScript"
console.log("slice(6):", str.slice(6)); // "JavaScript" (to end)

// Negative indices (from end)
console.log("\\nNegative indices:");
console.log("slice(-10):", str.slice(-10)); // "JavaScript"
console.log("slice(-10, -6):", str.slice(-10, -6)); // "Java"
console.log("slice(0, -11):", str.slice(0, -11)); // "Hello"

// Extract last n characters
console.log("\\nLast 6 chars:", str.slice(-6)); // "Script"

// Clone string
console.log("\\nClone:", str.slice()); // "Hello JavaScript"
console.log("Clone with 0:", str.slice(0)); // "Hello JavaScript"

// Negative start and end
console.log("\\nslice(-10, -6):", str.slice(-10, -6)); // "Java"

// Start > end returns empty
console.log("slice(10, 5):", str.slice(10, 5)); // ""

// Out of range
console.log("slice(100):", str.slice(100)); // ""
console.log("slice(-100):", str.slice(-100)); // "Hello JavaScript"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="substring()"
              initialCode={`const str = "Hello JavaScript";

// substring(start, end) - similar to slice
console.log("substring(0, 5):", str.substring(0, 5)); // "Hello"
console.log("substring(6, 16):", str.substring(6, 16)); // "JavaScript"
console.log("substring(6):", str.substring(6)); // "JavaScript"

// Key difference: swaps if start > end
console.log("\\nAuto-swap:");
console.log("substring(10, 5):", str.substring(10, 5)); // "Java" (swapped!)
console.log("slice(10, 5):", str.slice(10, 5)); // "" (not swapped)

// Negative values treated as 0
console.log("\\nNegative = 0:");
console.log("substring(-5):", str.substring(-5)); // "Hello JavaScript" (same as 0)
console.log("substring(-5, 5):", str.substring(-5, 5)); // "Hello" (same as 0, 5)

// vs slice with negative
console.log("\\nCompare with slice:");
console.log("slice(-5):", str.slice(-5)); // "cript"
console.log("substring(-5):", str.substring(-5)); // "Hello JavaScript"

// Which to use?
// - slice() is more intuitive with negative indices
// - substring() is older, less used
// - slice() is generally preferred`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="substr() - DEPRECATED"
              initialCode={`const str = "Hello JavaScript";

// substr(start, length) - DEPRECATED, use slice instead
console.log("substr(6, 10):", str.substr(6, 10)); // "JavaScript"
console.log("substr(0, 5):", str.substr(0, 5)); // "Hello"

// Negative start (from end)
console.log("\\nNegative start:");
console.log("substr(-10, 4):", str.substr(-10, 4)); // "Java"

// No length = to end
console.log("\\nsubstr(6):", str.substr(6)); // "JavaScript"

// Why deprecated?
// - Negative indices inconsistent across browsers
// - Less intuitive than slice
// - Not part of core JavaScript spec

// Use slice instead:
console.log("\\nUse slice instead:");
console.log("slice(6, 16):", str.slice(6, 16)); // "JavaScript"
console.log("slice(-10, -6):", str.slice(-10, -6)); // "Java"

// Migration: substr(start, length) -> slice(start, start + length)
const start = 6;
const length = 10;
console.log("\\nMigration:");
console.log("substr:", str.substr(start, length));
console.log("slice:", str.slice(start, start + length));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="split()"
              initialCode={`const str = "apple,banana,orange,grape";

// split() - string to array
console.log("split(','):", str.split(",")); 

// Split on space
const sentence = "The quick brown fox";
console.log("\\nsplit(' '):", sentence.split(" "));

// Split with limit
console.log("\\nWith limit:");
console.log("split(',', 2):", str.split(",", 2)); // First 2 only

// Split every character
console.log("\\nsplit(''):", "Hello".split("")); // ["H","e","l","l","o"]

// Split with regex
const text = "one1two2three3four";
console.log("\\nsplit(/\\d/):", text.split(/\\d/)); // ["one","two","three","four"]

// Split and preserve delimiters (with capturing group)
console.log("split(/(\\d)/):", text.split(/(\\d)/)); // ["one","1","two","2",...]

// Split on newlines
const multiline = "Line 1\\nLine 2\\nLine 3";
console.log("\\nsplit('\\n'):", multiline.split("\\n"));

// No separator = array with whole string
console.log("\\nsplit():", "Hello".split()); // ["Hello"]

// Empty string
console.log("split(''):", "".split("")); // []

// Practical: CSV parsing
const csv = "name,age,city";
const headers = csv.split(",");
console.log("\\nCSV headers:", headers);`}
            />
          </div>
        </section>

        {/* Modification Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✏️ Modification Methods (14) - All Return New Strings
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="concat() and repeat()"
              initialCode={`// concat() - combine strings
const str1 = "Hello";
const str2 = "World";

console.log("concat(' ', str2):", str1.concat(" ", str2)); // "Hello World"
console.log("concat:", "".concat("a", "b", "c")); // "abc"

// Original unchanged
console.log("\\nOriginal str1:", str1); // "Hello"

// Alternative: + operator (preferred)
console.log("\\nWith +:", str1 + " " + str2); // "Hello World"

// Template literal (most modern)
console.log(\`With template: \${str1} \${str2}\`);

// Multiple concat
console.log("\\nMultiple:", "a".concat("b", "c", "d", "e")); // "abcde"

// repeat() - ES2015
console.log("\\n'abc'.repeat(3):", "abc".repeat(3)); // "abcabcabc"
console.log("'Hi! '.repeat(5):", "Hi! ".repeat(5)); // "Hi! Hi! Hi! Hi! Hi! "
console.log("'-'.repeat(20):", "-".repeat(20)); // "--------------------"

// repeat(0) = empty string
console.log("\\nrepeat(0):", "text".repeat(0)); // ""

// Practical: padding, separators
console.log("\\n" + "=".repeat(30));
console.log("Title".toUpperCase());
console.log("=".repeat(30));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="replace() and replaceAll() - ES2021"
              initialCode={`const str = "Hello World, Hello JavaScript";

// replace() - replace first match
console.log("replace('Hello', 'Hi'):", str.replace("Hello", "Hi"));
// "Hi World, Hello JavaScript"

// replace with regex (global flag for all)
console.log("\\nWith regex:");
console.log("replace(/Hello/, 'Hi'):", str.replace(/Hello/, "Hi")); // First
console.log("replace(/Hello/g, 'Hi'):", str.replace(/Hello/g, "Hi")); // All

// replaceAll() - ES2021 (all occurrences)
console.log("\\nreplaceAll('Hello', 'Hi'):", str.replaceAll("Hello", "Hi"));

// Case-insensitive replace
console.log("\\nCase-insensitive:");
console.log("replace(/hello/gi, 'Hi'):", str.replace(/hello/gi, "Hi"));

// Replace with function
const text = "I have 3 apples and 5 oranges";
const result = text.replace(/\\d+/g, (match) => {
  return parseInt(match) * 2;
});
console.log("\\nDouble numbers:", result); // "I have 6 apples and 10 oranges"

// Replace with capture groups
const date = "2024-10-15";
const formatted = date.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, "$3/$2/$1");
console.log("\\nFormatted date:", formatted); // "15/10/2024"

// Named groups
const swapped = date.replace(
  /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/,
  "$<day>/$<month>/$<year>"
);
console.log("With named groups:", swapped);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toLowerCase(), toUpperCase(), toLocale*()"
              initialCode={`const str = "Hello JavaScript";

// toLowerCase() - convert to lowercase
console.log("toLowerCase():", str.toLowerCase()); // "hello javascript"

// toUpperCase() - convert to uppercase
console.log("toUpperCase():", str.toUpperCase()); // "HELLO JAVASCRIPT"

// Original unchanged
console.log("\\nOriginal:", str);

// Locale-aware versions
console.log("\\ntoLocaleLowerCase():", str.toLocaleLowerCase());
console.log("toLocaleUpperCase():", str.toLocaleUpperCase());

// Special cases (Turkish i)
const turkish = "İstanbul";
console.log("\\nTurkish lowercase:");
console.log("toLowerCase():", turkish.toLowerCase()); // "i̇stanbul"
console.log("toLocaleLowerCase('tr'):", turkish.toLocaleLowerCase("tr")); // "istanbul"

// Greek sigma
const greek = "ΣΣΣΣ";
console.log("\\nGreek lowercase:");
console.log("toLowerCase():", greek.toLowerCase()); // "σσσς" (final sigma!)

// Practical: case-insensitive comparison
const input = "HeLLo";
const expected = "hello";
console.log("\\nCase-insensitive compare:");
console.log("Match:", input.toLowerCase() === expected);

// Title case
function toTitleCase(str) {
  return str.split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log("\\nTitle case:", toTitleCase("hello world from javascript"));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="trim(), trimStart(), trimEnd() - ES2019"
              initialCode={`const str = "   Hello World   ";

// trim() - remove whitespace from both ends
console.log("Original:", "'" + str + "'");
console.log("trim():", "'" + str.trim() + "'"); // "Hello World"

// trimStart() / trimLeft() - ES2019
console.log("\\ntrimStart():", "'" + str.trimStart() + "'"); // "Hello World   "
console.log("trimLeft():", "'" + str.trimLeft() + "'"); // Same as trimStart

// trimEnd() / trimRight() - ES2019
console.log("\\ntrimEnd():", "'" + str.trimEnd() + "'"); // "   Hello World"
console.log("trimRight():", "'" + str.trimRight() + "'"); // Same as trimEnd

// What counts as whitespace?
const whitespace = " \\t\\n\\r\\v\\f  Hello  \\t\\n";
console.log("\\nWhitespace:");
console.log("Original:", JSON.stringify(whitespace));
console.log("Trimmed:", JSON.stringify(whitespace.trim()));

// Practical: user input
function sanitizeInput(input) {
  return input.trim();
}

console.log("\\nSanitize:");
console.log("'" + sanitizeInput("  user@email.com  ") + "'");

// Trim only specific side
const leftPadded = "     Value";
const rightPadded = "Value     ";
console.log("\\nSelective trim:");
console.log("Left trimmed:", "'" + leftPadded.trimStart() + "'");
console.log("Right trimmed:", "'" + rightPadded.trimEnd() + "'");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="padStart() and padEnd() - ES2017"
              initialCode={`const str = "5";

// padStart(targetLength, padString)
console.log("padStart(3, '0'):", str.padStart(3, "0")); // "005"
console.log("padStart(5, '0'):", str.padStart(5, "0")); // "00005"

// Default padString is space
console.log("\\nDefault padding:");
console.log("padStart(5):", "'" + str.padStart(5) + "'"); // "    5"

// If already long enough, returns original
console.log("\\nAlready long:");
console.log("padStart(1, '0'):", "12345".padStart(1, "0")); // "12345"

// padEnd(targetLength, padString)
console.log("\\npadEnd(5, '0'):", str.padEnd(5, "0")); // "50000"
console.log("padEnd(5, '.'):", str.padEnd(5, ".")); // "5...."

// Long padString (truncated)
console.log("\\nLong pad string:");
console.log("padStart(5, 'abc'):", "x".padStart(5, "abc")); // "abcax"
console.log("padEnd(5, 'abc'):", "x".padEnd(5, "abc")); // "xabca"

// Practical: formatting
console.log("\\nPractical uses:");

// Account numbers
console.log("Account:", "123".padStart(10, "0")); // "0000000123"

// Align text
const items = ["Apple", "Banana", "Cherry"];
console.log("\\nAligned:");
items.forEach(item => {
  console.log(item.padEnd(10, ".") + " $5.00");
});

// Progress bar
const percent = 45;
const filled = Math.floor(percent / 5);
const bar = "█".repeat(filled).padEnd(20, "░");
console.log(\`\\nProgress: [\${bar}] \${percent}%\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="normalize() - Unicode Normalization"
              initialCode={`// normalize() - Unicode normalization forms

// Same visual, different code points
const e1 = "café"; // é is one code point
const e2 = "café"; // e + combining accent

console.log("Visual same:", e1 === e2); // May be false!
console.log("Length 1:", e1.length);
console.log("Length 2:", e2.length); // May differ

// Normalize to same form
console.log("\\nNormalized:");
console.log("NFC:", e1.normalize("NFC") === e2.normalize("NFC")); // true

// Normalization forms:
// NFC - Canonical Decomposition, followed by Canonical Composition (default)
// NFD - Canonical Decomposition
// NFKC - Compatibility Decomposition, followed by Canonical Composition
// NFKD - Compatibility Decomposition

const str = "ñ";
console.log("\\nForms:");
console.log("NFC:", str.normalize("NFC"));
console.log("NFD:", str.normalize("NFD"));
console.log("NFKC:", str.normalize("NFKC"));
console.log("NFKD:", str.normalize("NFKD"));

// Default is NFC
console.log("\\nDefault:", str.normalize()); // Same as NFC

// Practical: string comparison
function compareNormalized(s1, s2) {
  return s1.normalize() === s2.normalize();
}

console.log("\\nNormalized compare:", compareNormalized(e1, e2));`}
            />
          </div>
        </section>

        {/* Comparison & Conversion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚖️ Comparison & Conversion (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="localeCompare()"
              initialCode={`// localeCompare() - locale-aware string comparison
const a = "apple";
const b = "banana";
const c = "apple";

// Returns: negative if a < b, positive if a > b, 0 if equal
console.log("'apple'.localeCompare('banana'):", a.localeCompare(b)); // -1
console.log("'banana'.localeCompare('apple'):", b.localeCompare(a)); // 1
console.log("'apple'.localeCompare('apple'):", a.localeCompare(c)); // 0

// Use for sorting
const fruits = ["banana", "cherry", "apple", "date"];
console.log("\\nOriginal:", fruits);

const sorted = fruits.sort((a, b) => a.localeCompare(b));
console.log("Sorted:", sorted);

// Case-insensitive comparison
const names = ["Alice", "bob", "Charlie", "alice"];
console.log("\\nCase-insensitive:");
const sortedNames = names.sort((a, b) => 
  a.localeCompare(b, undefined, { sensitivity: "base" })
);
console.log(sortedNames);

// Numeric sorting
const numbers = ["10", "2", "1", "20"];
console.log("\\nNumeric:");
console.log("Default sort:", numbers.sort()); // ["1", "10", "2", "20"]
console.log("Numeric sort:", numbers.sort((a, b) => 
  a.localeCompare(b, undefined, { numeric: true })
)); // ["1", "2", "10", "20"]

// Locale-specific (German)
console.log("\\nGerman ä:", "ä".localeCompare("z", "de")); // -1 (ä before z)
console.log("Swedish ä:", "ä".localeCompare("z", "sv")); // 1 (ä after z)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toString() and valueOf()"
              initialCode={`// toString() - convert to string primitive
const str = new String("Hello"); // String object
console.log("String object:", str);
console.log("typeof:", typeof str); // "object"

console.log("\\ntoString():", str.toString());
console.log("typeof:", typeof str.toString()); // "string"

// valueOf() - get primitive value
console.log("\\nvalueOf():", str.valueOf());
console.log("typeof:", typeof str.valueOf()); // "string"

// Both return same primitive
console.log("\\nSame?", str.toString() === str.valueOf()); // true

// Rarely needed (auto-conversion happens)
const obj = new String("Test");
console.log("\\nAuto-conversion:");
console.log("obj + ' works':", obj + " works"); // Auto-converted
console.log("obj.length:", obj.length); // Auto-converted

// When explicit conversion matters
console.log("\\nEquality:");
console.log("obj == 'Test':", obj == "Test"); // true (coerced)
console.log("obj === 'Test':", obj === "Test"); // false (different types)
console.log("obj.valueOf() === 'Test':", obj.valueOf() === "Test"); // true

// String literals vs String objects
const literal = "hello";
const object = new String("hello");
console.log("\\nLiteral vs Object:");
console.log("typeof literal:", typeof literal); // "string"
console.log("typeof object:", typeof object); // "object"
console.log("Equal?", literal === object.valueOf()); // true`}
            />
          </div>
        </section>

        {/* Iteration */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 String Iteration
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="String Iteration Methods"
              initialCode={`const str = "Hello 🌍";

// for...of loop (uses Symbol.iterator)
console.log("for...of:");
for (let char of str) {
  console.log(char);
}

// Handles emoji correctly!
console.log("\\nString length:", str.length); // 8 (surrogate pair counts as 2)
console.log("Visual characters:", [...str].length); // 7 (correct!)

// Spread operator (uses Symbol.iterator)
console.log("\\nSpread:");
const chars = [...str];
console.log("Array:", chars);
console.log("Length:", chars.length); // 7

// Symbol.iterator
console.log("\\nManual iterator:");
const iterator = str[Symbol.iterator]();
console.log(iterator.next()); // { value: "H", done: false }
console.log(iterator.next()); // { value: "e", done: false }
console.log(iterator.next()); // { value: "l", done: false }

// Reverse string (handles emoji)
console.log("\\nReverse:");
const reversed = [...str].reverse().join("");
console.log("Reversed:", reversed);

// vs charAt/bracket (breaks emoji)
console.log("\\ncharAt vs for...of:");
console.log("charAt(6):", str.charAt(6)); // High surrogate
console.log("charAt(7):", str.charAt(7)); // Low surrogate
console.log("for...of at 6:", [...str][6]); // 🌍 (correct!)

// Count characters properly
function countChars(str) {
  return [...str].length;
}

console.log("\\nProper count:");
console.log("'Hi 👋' chars:", countChars("Hi 👋")); // 4`}
            />
          </div>
        </section>

        {/* Template Literals */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Template Literals (ES2015)
          </h2>

          <ConceptCard
            title="Template Literal Features"
            icon="✨"
            color="purple"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Backticks:</strong> Use ` instead of quotes
              </li>
              <li>
                <strong>Interpolation:</strong> ${"{expression}"} for dynamic
                values
              </li>
              <li>
                <strong>Multi-line:</strong> Natural multi-line strings
              </li>
              <li>
                <strong>Tagged templates:</strong> Custom processing
              </li>
              <li>
                <strong>Raw strings:</strong> String.raw for raw text
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Template Literal Basics"
              initialCode={`// Basic template literal
const name = "Alice";
const age = 25;

const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting);

// Expressions in interpolation
console.log(\`5 + 3 = \${5 + 3}\`);
console.log(\`Random: \${Math.random()}\`);
console.log(\`Uppercase: \${name.toUpperCase()}\`);

// Function calls
function getGreeting() {
  return "Good morning";
}

console.log(\`\${getGreeting()}, \${name}!\`);

// Conditional expressions
const hour = 14;
console.log(\`Good \${hour < 12 ? "morning" : "afternoon"}\`);

// Object properties
const user = { name: "Bob", role: "admin" };
console.log(\`User: \${user.name} (\${user.role})\`);

// Array methods
const nums = [1, 2, 3, 4, 5];
console.log(\`Sum: \${nums.reduce((a, b) => a + b)}\`);

// Nested templates (using variables for clarity)
const inner = \`Inner \${1 + 1}\`;
const outer = \`Outer \${inner}\`;
console.log("\\nNested:", outer);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Multi-line Strings"
              initialCode={`// Multi-line with template literals
const multiline = \`
  This is line 1
  This is line 2
  This is line 3
\`;

console.log(multiline);

// vs regular strings (need \\n)
const withNewlines = "Line 1\\nLine 2\\nLine 3";
console.log("\\nWith \\\\n:");
console.log(withNewlines);

// Indentation is preserved!
const indented = \`
    Indented
      More indented
        Even more
\`;
console.log("\\nIndented:");
console.log(indented);

// HTML template
const html = \`
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
\`;
console.log("\\nHTML:");
console.log(html);

// SQL query
const tableName = "users";
const sql = \`
  SELECT *
  FROM \${tableName}
  WHERE age > 18
  ORDER BY name
\`;
console.log("\\nSQL:");
console.log(sql);

// JSON template
const data = {
  name: "Alice",
  age: 25
};

const json = \`
{
  "name": "\${data.name}",
  "age": \${data.age},
  "active": true
}
\`;
console.log("\\nJSON:");
console.log(json);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Tagged Templates"
              initialCode={`// Tagged template: function processes template
function highlight(strings, ...values) {
  console.log("strings:", strings);
  console.log("values:", values);
  
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`**\${values[i]}**\` : "");
  }, "");
}

const name = "Alice";
const age = 25;

const result = highlight\`Hello \${name}, you are \${age} years old\`;
console.log("\\nResult:", result);

// HTML escaping tag
function html(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] || "";
    const escaped = String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return result + str + escaped;
  }, "");
}

const userInput = "<script>alert('xss')</script>";
const safe = html\`User said: \${userInput}\`;
console.log("\\nEscaped:", safe);

// Custom formatting tag
function currency(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i];
    const formatted = value != null ? \`$\${value.toFixed(2)}\` : "";
    return result + str + formatted;
  }, "");
}

const price = 19.5;
const tax = 2.475;
console.log("\\n" + currency\`Price: \${price}, Tax: \${tax}, Total: \${price + tax}\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="String.raw in Tagged Templates"
              initialCode={`// String.raw - access raw strings
function showRaw(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Raw strings:", strings.raw);
  console.log("Values:", values);
}

showRaw\`Line 1\\nLine 2 \${"interpolated"}\`;

// Compare processed vs raw
function compareRaw(strings) {
  strings.forEach((str, i) => {
    console.log(\`Processed[\${i}]: "\${str}"\`);
    console.log(\`Raw[\${i}]: "\${strings.raw[i]}"\`);
  });
}

console.log("\\nCompare:");
compareRaw\`First\\nSecond\\tThird\`;

// Practical: regex builder
function regex(strings, ...values) {
  // Use raw to preserve backslashes
  return new RegExp(strings.raw.reduce((result, str, i) => {
    return result + str + (values[i] || "");
  }, ""));
}

const pattern = regex\`\\d+\\.\\d+\`;
console.log("\\nRegex:", pattern);
console.log("Test '3.14':", pattern.test("3.14")); // true

// File path builder
function path(strings, ...values) {
  return strings.raw.reduce((result, str, i) => {
    return result + str + (values[i] || "");
  }, "");
}

const dir = "Users";
const file = "document.txt";
const fullPath = path\`C:\\  \${dir}\\Documents\\\${file}\`;
console.log("\\nPath:", fullPath);`}
            />
          </div>
        </section>

        {/* Properties */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📏 String Properties
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="length Property"
              initialCode={`// length - number of UTF-16 code units
const str1 = "Hello";
console.log("'Hello'.length:", str1.length); // 5

const str2 = "";
console.log("''.length:", str2.length); // 0

// Emoji and surrogate pairs
const emoji = "🚀";
console.log("\\n'🚀'.length:", emoji.length); // 2 (surrogate pair!)

const text = "Hi 👋 World";
console.log("'Hi 👋 World'.length:", text.length); // 12 (👋 = 2 units)

// Get actual character count
console.log("Actual chars:", [...text].length); // 11

// Chinese characters
const chinese = "你好世界";
console.log("\\n'你好世界'.length:", chinese.length); // 4 (each = 1 unit)

// length is read-only
const mutable = "Test";
console.log("\\nOriginal length:", mutable.length);
// mutable.length = 10; // Doesn't work
console.log("After assignment:", mutable.length); // Still 4

// Practical: validation
function validatePassword(password) {
  if (password.length < 8) {
    return "Password too short";
  }
  if (password.length > 128) {
    return "Password too long";
  }
  return "Valid";
}

console.log("\\nValidation:");
console.log(validatePassword("abc")); // Too short
console.log(validatePassword("abcd1234")); // Valid`}
            />
          </div>
        </section>

        {/* All String Methods Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete String Methods Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Method
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Purpose
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Returns
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    ES Version
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={4} className="px-3 py-2 font-bold text-blue-400">
                    STATIC METHODS
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">
                    fromCharCode()
                  </td>
                  <td className="px-3 py-2">From UTF-16 codes</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">
                    fromCodePoint()
                  </td>
                  <td className="px-3 py-2">From Unicode points</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">raw()</td>
                  <td className="px-3 py-2">Raw template string</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={4}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    SEARCHING
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">charAt()</td>
                  <td className="px-3 py-2">Character at index</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">charCodeAt()</td>
                  <td className="px-3 py-2">UTF-16 code at index</td>
                  <td className="px-3 py-2">Number</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">codePointAt()</td>
                  <td className="px-3 py-2">Code point at index</td>
                  <td className="px-3 py-2">Number</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">indexOf()</td>
                  <td className="px-3 py-2">First occurrence index</td>
                  <td className="px-3 py-2">Number</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">lastIndexOf()</td>
                  <td className="px-3 py-2">Last occurrence index</td>
                  <td className="px-3 py-2">Number</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">includes()</td>
                  <td className="px-3 py-2">Contains substring</td>
                  <td className="px-3 py-2">Boolean</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">startsWith()</td>
                  <td className="px-3 py-2">Starts with substring</td>
                  <td className="px-3 py-2">Boolean</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">endsWith()</td>
                  <td className="px-3 py-2">Ends with substring</td>
                  <td className="px-3 py-2">Boolean</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">search()</td>
                  <td className="px-3 py-2">Regex search index</td>
                  <td className="px-3 py-2">Number</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">match()</td>
                  <td className="px-3 py-2">Regex matches</td>
                  <td className="px-3 py-2">Array</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">matchAll()</td>
                  <td className="px-3 py-2">All regex matches</td>
                  <td className="px-3 py-2">Iterator</td>
                  <td className="px-3 py-2">ES2020</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={4}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    EXTRACTION
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">slice()</td>
                  <td className="px-3 py-2">Extract section</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">substring()</td>
                  <td className="px-3 py-2">Extract between indices</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">substr()</td>
                  <td className="px-3 py-2">Extract by length</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">Deprecated</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">split()</td>
                  <td className="px-3 py-2">String to array</td>
                  <td className="px-3 py-2">Array</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={4}
                    className="px-3 py-2 font-bold text-orange-400"
                  >
                    MODIFICATION
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">concat()</td>
                  <td className="px-3 py-2">Join strings</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">repeat()</td>
                  <td className="px-3 py-2">Repeat n times</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">replace()</td>
                  <td className="px-3 py-2">Replace first match</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">replaceAll()</td>
                  <td className="px-3 py-2">Replace all matches</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2021</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">toLowerCase()</td>
                  <td className="px-3 py-2">To lowercase</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">toUpperCase()</td>
                  <td className="px-3 py-2">To uppercase</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES1</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">
                    toLocaleLowerCase()
                  </td>
                  <td className="px-3 py-2">Locale lowercase</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">
                    toLocaleUpperCase()
                  </td>
                  <td className="px-3 py-2">Locale uppercase</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES3</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">trim()</td>
                  <td className="px-3 py-2">Remove whitespace</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">trimStart()</td>
                  <td className="px-3 py-2">Trim left side</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2019</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">trimEnd()</td>
                  <td className="px-3 py-2">Trim right side</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2019</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">padStart()</td>
                  <td className="px-3 py-2">Pad from left</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2017</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">padEnd()</td>
                  <td className="px-3 py-2">Pad from right</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2017</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono text-sm">normalize()</td>
                  <td className="px-3 py-2">Unicode normalize</td>
                  <td className="px-3 py-2">String</td>
                  <td className="px-3 py-2">ES2015</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ String Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use template literals for concatenation
                </strong>
                <p className="ml-4 mt-1">
                  More readable than + operator or concat(): \`Hello ${"{name}"}
                  \`
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use includes() instead of indexOf() !== -1
                </strong>
                <p className="ml-4 mt-1">
                  More semantic and readable for existence checks.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use startsWith/endsWith instead of regex
                </strong>
                <p className="ml-4 mt-1">
                  Simpler and more performant for prefix/suffix checks.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use replaceAll() instead of replace() with /g
                </strong>
                <p className="ml-4 mt-1">
                  Clearer intent for replacing all occurrences (ES2021).
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use slice() instead of substring() or substr()
                </strong>
                <p className="ml-4 mt-1">
                  slice() has more intuitive negative index behavior.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use for...of or spread for character iteration
                </strong>
                <p className="ml-4 mt-1">
                  Handles emoji and Unicode correctly: [...str]
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Remember strings are immutable
                </strong>
                <p className="ml-4 mt-1">
                  All methods return NEW strings. Original is never modified.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Use codePointAt() for full Unicode support
                </strong>
                <p className="ml-4 mt-1">
                  charCodeAt() doesn't handle emoji properly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 String Methods Mastered!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've learned <strong>ALL string methods</strong> in JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
                <div className="text-gray-400">Static Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  11
                </div>
                <div className="text-gray-400">Searching Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">4</div>
                <div className="text-gray-400">Extraction Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  14
                </div>
                <div className="text-gray-400">Modification Methods</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
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
