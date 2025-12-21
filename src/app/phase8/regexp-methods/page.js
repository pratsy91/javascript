"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function RegExpMethodsPage() {
  return (
    <SectionLayout
      title="8.1 RegExp - Complete Reference"
      description="Master RegExp constructor, flags, properties, methods, and all pattern syntax"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔍 Complete RegExp Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Regular Expressions (RegExp) are patterns used to match character
            combinations in strings. This section covers{" "}
            <strong>EVERYTHING</strong> about RegEx in JavaScript.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Constructors (2)",
              "Flags (7)",
              "Properties (10)",
              "Methods (8)",
              "Character Classes",
              "Anchors",
              "Quantifiers",
              "Groups & Backrefs",
              "Lookahead/Lookbehind",
              "Unicode Support",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-pink-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Constructor */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ RegExp Constructor (2 forms)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Creating RegExp"
              initialCode={`// 1. Literal syntax /pattern/flags (most common)
const regex1 = /hello/i; // case-insensitive
console.log("Type:", typeof regex1); // "object"
console.log("Constructor:", regex1.constructor.name); // "RegExp"

// 2. Constructor: new RegExp(pattern, flags)
const regex2 = new RegExp("hello", "i");
console.log("Same pattern:", regex1.source === regex2.source); // true

// Dynamic patterns (use constructor)
const word = "world";
const dynamicRegex = new RegExp(word, "gi");
console.log("Dynamic:", dynamicRegex); // /world/gi

// Escaping in constructor (need double backslash!)
const literal = /\\d+/; // matches digits
const constructor = new RegExp("\\\\d+"); // same
console.log("Literal:", literal);
console.log("Constructor:", constructor);

// Test both
const text = "I have 42 apples";
console.log("\\nTest literal:", literal.test(text)); // true
console.log("Test constructor:", constructor.test(text)); // true

// When to use constructor vs literal
console.log("\\nUse literal for: static patterns");
console.log("Use constructor for: dynamic patterns");`}
            />
          </div>
        </section>

        {/* Flags */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🚩 RegExp Flags (7)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="g - global" icon="🌍" color="blue">
              Find all matches (not just first)
            </ConceptCard>
            <ConceptCard title="i - ignoreCase" icon="Aa" color="purple">
              Case-insensitive matching
            </ConceptCard>
            <ConceptCard title="m - multiline" icon="📄" color="green">
              ^ and $ match line start/end
            </ConceptCard>
            <ConceptCard title="s - dotAll (ES2018)" icon="•" color="yellow">
              . matches newlines too
            </ConceptCard>
            <ConceptCard title="u - unicode (ES2015)" icon="🌐" color="orange">
              Full Unicode support
            </ConceptCard>
            <ConceptCard title="y - sticky (ES2015)" icon="📌" color="red">
              Match from lastIndex only
            </ConceptCard>
            <ConceptCard title="d - hasIndices (ES2022)" icon="📍" color="pink">
              Generate indices for matches
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: g (global)"
              initialCode={`const text = "cat bat rat";

// Without g - finds first match only
const withoutG = /at/;
console.log("Without g:");
console.log(text.match(withoutG)); // ["at"] - first match

// With g - finds all matches
const withG = /at/g;
console.log("\\nWith g:");
console.log(text.match(withG)); // ["at", "at", "at"] - all matches

// test() with g flag (caution!)
const regex = /at/g;
console.log("\\ntest() with g flag:");
console.log(regex.test(text)); // true (first)
console.log("lastIndex:", regex.lastIndex); // 3
console.log(regex.test(text)); // true (second)
console.log("lastIndex:", regex.lastIndex); // 8
console.log(regex.test(text)); // true (third)
console.log("lastIndex:", regex.lastIndex); // 13
console.log(regex.test(text)); // false (no more)
console.log("lastIndex:", regex.lastIndex); // 0 (reset)

// replace with/without g
console.log("\\nReplace:");
console.log(text.replace(/at/, "XX")); // "cXX bat rat"
console.log(text.replace(/at/g, "XX")); // "cXX bXX rXX"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: i (ignoreCase)"
              initialCode={`const text = "Hello HELLO hello HeLLo";

// Without i - case sensitive
const caseSensitive = /hello/g;
console.log("Case sensitive:");
console.log(text.match(caseSensitive)); // ["hello"]

// With i - case insensitive
const caseInsensitive = /hello/gi;
console.log("\\nCase insensitive:");
console.log(text.match(caseInsensitive)); // all 4 matches

// Practical use
const email = "User@Example.COM";
const emailRegex = /user@example\\.com/i;
console.log("\\nEmail match:", emailRegex.test(email)); // true

// Works with character classes too
const vowels = /[aeiou]/gi;
console.log("\\nVowels in 'JavaScript':");
console.log("JavaScript".match(vowels)); // ["a", "a", "i"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: m (multiline)"
              initialCode={`const text = "Line 1\\nLine 2\\nLine 3";

console.log("Text:");
console.log(text);

// Without m - ^ matches string start, $ matches string end
const withoutM = /^Line/g;
console.log("\\nWithout m:");
console.log(text.match(withoutM)); // ["Line"] - only first line

// With m - ^ matches line start, $ matches line end
const withM = /^Line/gm;
console.log("\\nWith m:");
console.log(text.match(withM)); // ["Line", "Line", "Line"] - all lines

// $ anchor
const endWithoutM = /\\d$/g;
console.log("\\nEnd without m:");
console.log(text.match(endWithoutM)); // ["3"] - only last number

const endWithM = /\\d$/gm;
console.log("\\nEnd with m:");
console.log(text.match(endWithM)); // ["1", "2", "3"] - all line ends

// Practical: match each line
const lines = text.match(/^.+$/gm);
console.log("\\nAll lines:", lines);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: s (dotAll - ES2018)"
              initialCode={`const text = "Hello\\nWorld";

// Without s - . doesn't match newline
const withoutS = /Hello.World/;
console.log("Without s:", withoutS.test(text)); // false

// With s - . matches newline too
const withS = /Hello.World/s;
console.log("With s:", withS.test(text)); // true

// Match everything between tags (including newlines)
const html = "<div>\\nHello\\nWorld\\n</div>";
const tagContent = /<div>(.*)<\\/div>/s;
const match = html.match(tagContent);
console.log("\\nMatched content:");
console.log(match[1]); // "\\nHello\\nWorld\\n"

// Without s, you'd need [\\s\\S] or [\\w\\W]
const oldWay = /<div>([\\s\\S]*)<\\/div>/;
console.log("\\nOld way also works:", oldWay.test(html)); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: u (unicode - ES2015)"
              initialCode={`// Unicode characters
const text = "𝒥𝒶𝓋𝒶𝒮𝒸𝓇𝒾𝓅𝓉 🚀";

// Without u - treats surrogate pairs as 2 characters
const withoutU = /^.{11}$/;
console.log("Without u:", withoutU.test(text)); // false (sees more chars)

// With u - treats surrogate pairs correctly
const withU = /^.{11}$/u;
console.log("With u:", withU.test(text)); // true

// Emoji matching
const emoji = /\\u{1F680}/u; // 🚀
console.log("\\nEmoji match:", emoji.test("🚀")); // true

// Unicode property escapes (requires u flag)
const letters = /\\p{Letter}+/gu;
console.log("\\nLetters:", "Hello123!".match(letters)); // ["Hello"]

const numbers = /\\p{Number}+/gu;
console.log("Numbers:", "Hello123!".match(numbers)); // ["123"]

// Without u, unicode escapes don't work
// const invalid = /\\u{1F680}/; // Error or wrong match`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: y (sticky - ES2015)"
              initialCode={`const text = "cat bat rat";

// Regular regex (starts from beginning or lastIndex)
const regular = /at/g;
console.log("Regular:");
console.log(regular.exec(text)); // match at index 1 (cat)
console.log(regular.exec(text)); // match at index 5 (bat)

// Sticky regex (must match at exact lastIndex)
const sticky = /at/y;
sticky.lastIndex = 1; // start at index 1
console.log("\\nSticky (lastIndex=1):");
console.log(sticky.exec(text)); // match at index 1 (cat)

sticky.lastIndex = 2; // start at index 2
console.log("\\nSticky (lastIndex=2):");
console.log(sticky.exec(text)); // null (no match at exact position 2)

sticky.lastIndex = 5; // start at index 5
console.log("\\nSticky (lastIndex=5):");
console.log(sticky.exec(text)); // match at index 5 (bat)

// Practical: tokenizer
const tokens = /\\w+|\\s+/y;
const str = "hello world";
let match;
console.log("\\nTokenizing:");
while ((match = tokens.exec(str)) !== null) {
  console.log("Token:", JSON.stringify(match[0]), "at", match.index);
}`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Flag: d (hasIndices - ES2022)"
              initialCode={`// d flag generates indices for capturing groups
const text = "Today is 2024-10-15";

// Without d
const withoutD = /(\\d{4})-(\\d{2})-(\\d{2})/;
const match1 = withoutD.exec(text);
console.log("Without d:");
console.log("Match:", match1[0]); // "2024-10-15"
console.log("Groups:", match1[1], match1[2], match1[3]);
console.log("Indices:", match1.indices); // undefined

// With d
const withD = /(\\d{4})-(\\d{2})-(\\d{2})/d;
const match2 = withD.exec(text);
console.log("\\nWith d:");
console.log("Match:", match2[0]);
console.log("Indices:", match2.indices);
console.log("Full match indices:", match2.indices[0]); // [9, 19]
console.log("Group 1 indices:", match2.indices[1]); // [9, 13] (year)
console.log("Group 2 indices:", match2.indices[2]); // [14, 16] (month)
console.log("Group 3 indices:", match2.indices[3]); // [17, 19] (day)

// Named groups
const namedRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/d;
const match3 = namedRegex.exec(text);
console.log("\\nNamed groups indices:");
console.log(match3.indices.groups); // {year: [9,13], month: [14,16], day: [17,19]}`}
            />
          </div>
        </section>

        {/* Properties */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 RegExp Properties (10)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="RegExp Properties"
              initialCode={`const regex = /hello\\s+world/gimsuy;

// flags - all flags as string
console.log("flags:", regex.flags); // "gimsuy"

// Individual flag properties
console.log("\\nFlag properties:");
console.log("global:", regex.global); // true
console.log("ignoreCase:", regex.ignoreCase); // true
console.log("multiline:", regex.multiline); // true
console.log("dotAll:", regex.dotAll); // true
console.log("unicode:", regex.unicode); // true
console.log("sticky:", regex.sticky); // true

// source - pattern string (without delimiters)
console.log("\\nsource:", regex.source); // "hello\\s+world"

// lastIndex - current position (for g or y flag)
const regex2 = /test/g;
console.log("\\nlastIndex before:", regex2.lastIndex); // 0
regex2.test("test test");
console.log("lastIndex after:", regex2.lastIndex); // 4

// hasIndices - has d flag
const withD = /test/d;
const withoutD = /test/;
console.log("\\nhasIndices with d:", withD.hasIndices); // true
console.log("hasIndices without d:", withoutD.hasIndices); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Cloning & Comparing RegExp"
              initialCode={`const original = /test/gi;

// Clone using constructor
const clone = new RegExp(original.source, original.flags);
console.log("Original:", original);
console.log("Clone:", clone);
console.log("Same pattern:", original.source === clone.source); // true
console.log("Same flags:", original.flags === clone.flags); // true
console.log("Same object:", original === clone); // false (different objects)

// RegExp are objects, not primitives
const r1 = /test/;
const r2 = /test/;
console.log("\\nr1 === r2:", r1 === r2); // false (different objects)

// Comparing RegExp
function sameRegex(r1, r2) {
  return r1.source === r2.source && r1.flags === r2.flags;
}

console.log("\\nAre they the same?");
console.log(sameRegex(/test/gi, /test/gi)); // true
console.log(sameRegex(/test/gi, /test/i)); // false (different flags)
console.log(sameRegex(/test/gi, /TEST/gi)); // false (different pattern)`}
            />
          </div>
        </section>

        {/* Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 RegExp Methods (8)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="test() - Test if matches"
              initialCode={`const regex = /\\d+/;
const text1 = "I have 42 apples";
const text2 = "I have no apples";

// test() returns boolean
console.log("test() with numbers:", regex.test(text1)); // true
console.log("test() without numbers:", regex.test(text2)); // false

// Practical: validation
function isValidEmail(email) {
  const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;
  return emailRegex.test(email);
}

console.log("\\nEmail validation:");
console.log("user@example.com:", isValidEmail("user@example.com")); // true
console.log("invalid.email:", isValidEmail("invalid.email")); // false

// test() is faster than match() when you just need boolean
const longText = "a".repeat(1000000) + "b";
const hasB = /b/;
console.log("\\nFound 'b':", hasB.test(longText)); // true (fast!)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="exec() - Execute and get match details"
              initialCode={`const text = "cat bat rat";

// exec() returns array with match details or null
const regex1 = /\\w+at/;
const match1 = regex1.exec(text);

console.log("exec() result:");
console.log("Full match:", match1[0]); // "cat"
console.log("Index:", match1.index); // 0
console.log("Input:", match1.input); // "cat bat rat"

// With capturing groups
const regex2 = /(\\w)(at)/;
const match2 = regex2.exec(text);

console.log("\\nWith groups:");
console.log("Full match:", match2[0]); // "cat"
console.log("Group 1:", match2[1]); // "c"
console.log("Group 2:", match2[2]); // "at"

// exec() with g flag - iterates through matches
const regex3 = /\\w+at/g;
console.log("\\nIterating with exec():");
let match;
while ((match = regex3.exec(text)) !== null) {
  console.log("Match:", match[0], "at index", match.index);
}

// Named capturing groups
const dateRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const dateMatch = dateRegex.exec("2024-10-15");
console.log("\\nNamed groups:");
console.log("Year:", dateMatch.groups.year); // "2024"
console.log("Month:", dateMatch.groups.month); // "10"
console.log("Day:", dateMatch.groups.day); // "15"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="toString() - Convert to string"
              initialCode={`const regex = /hello\\s+world/gi;

// toString() returns string representation
console.log("toString():", regex.toString()); // "/hello\\s+world/gi"
console.log("Type:", typeof regex.toString()); // "string"

// Same as literal syntax
console.log("\\nSame as literal:", regex.toString() === String(regex)); // true

// Useful for debugging
function logRegex(r) {
  console.log("Pattern:", r.toString());
  console.log("Source:", r.source);
  console.log("Flags:", r.flags);
}

console.log("\\nDebug info:");
logRegex(/test/gi);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Symbol Methods (Advanced)"
              initialCode={`// These are internal methods called by String methods
// You rarely call them directly, but good to know they exist

const regex = /l+/g;
const text = "hello";

// Symbol.match - called by String.prototype.match()
const match1 = regex[Symbol.match](text);
const match2 = text.match(regex);
console.log("Symbol.match:", match1); // ["ll"]
console.log("Same as match():", JSON.stringify(match1) === JSON.stringify(match2)); // true

// Symbol.replace - called by String.prototype.replace()
const regex2 = /l/g;
const replaced1 = regex2[Symbol.replace](text, "r");
const replaced2 = text.replace(regex2, "r");
console.log("\\nSymbol.replace:", replaced1); // "herro"
console.log("Same as replace():", replaced1 === replaced2); // true

// Symbol.search - called by String.prototype.search()
const index1 = /l+/[Symbol.search](text);
const index2 = text.search(/l+/);
console.log("\\nSymbol.search:", index1); // 2
console.log("Same as search():", index1 === index2); // true

// Symbol.split - called by String.prototype.split()
const split1 = /l+/[Symbol.split](text);
const split2 = text.split(/l+/);
console.log("\\nSymbol.split:", split1); // ["he", "o"]
console.log("Same as split():", JSON.stringify(split1) === JSON.stringify(split2)); // true

console.log("\\nNote: Prefer using String methods over Symbol methods!");`}
            />
          </div>
        </section>

        {/* Pattern Syntax - Character Classes */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔤 Character Classes
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic Character Classes"
              initialCode={`const text = "Hello World 123!";

// . - any character (except newline)
console.log("dot (.):");
console.log(text.match(/H.l/)); // ["Hel"]
console.log(text.match(/./g).length); // 16 characters

// \\d - digit [0-9]
console.log("\\n\\\\d (digit):");
console.log(text.match(/\\d/g)); // ["1", "2", "3"]

// \\D - non-digit
console.log("\\n\\\\D (non-digit):");
console.log(text.match(/\\D/g)); // ["H", "e", "l", "l", "o", " ", "W"...]

// \\w - word character [a-zA-Z0-9_]
console.log("\\n\\\\w (word):");
console.log(text.match(/\\w/g)); // ["H", "e", "l", "l", "o", "W"...]

// \\W - non-word character
console.log("\\n\\\\W (non-word):");
console.log(text.match(/\\W/g)); // [" ", " ", "!"]

// \\s - whitespace (space, tab, newline)
console.log("\\n\\\\s (whitespace):");
console.log(text.match(/\\s/g)); // [" ", " "]

// \\S - non-whitespace
console.log("\\n\\\\S (non-whitespace):");
console.log(text.match(/\\S/g).length); // 14`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Special Characters"
              initialCode={`// \\t - tab
const withTab = "Hello\\tWorld";
console.log("Tab match:", /\\t/.test(withTab)); // true
console.log("Split by tab:", withTab.split(/\\t/)); // ["Hello", "World"]

// \\n - newline
const multiline = "Line 1\\nLine 2";
console.log("\\nNewline match:", /\\n/.test(multiline)); // true
console.log("Lines:", multiline.split(/\\n/)); // ["Line 1", "Line 2"]

// \\r - carriage return
const withCR = "Hello\\rWorld";
console.log("\\nCarriage return:", /\\r/.test(withCR)); // true

// \\v - vertical tab
const withVT = "Hello\\vWorld";
console.log("Vertical tab:", /\\v/.test(withVT)); // true

// \\f - form feed
const withFF = "Hello\\fWorld";
console.log("Form feed:", /\\f/.test(withFF)); // true

// \\0 - NUL character
const withNul = "Hello\\0World";
console.log("\\nNUL character:", /\\0/.test(withNul)); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Hex & Unicode"
              initialCode={`// \\xhh - hex character (2 digits)
const hex = /\\x41/; // A (ASCII 65 = 0x41)
console.log("Hex \\\\x41 matches 'A':", hex.test("A")); // true
console.log("Match:", "ABC".match(/\\x41/)); // ["A"]

// \\uhhhh - unicode character (4 digits)
const unicode = /\\u0041/; // A (Unicode U+0041)
console.log("\\nUnicode \\\\u0041 matches 'A':", unicode.test("A")); // true

// \\u{hhhh} - unicode code point (with u flag)
const emoji = /\\u{1F600}/u; // 😀
console.log("\\nEmoji:", emoji.test("😀")); // true

// Common unicode ranges
const cyrillic = /[\\u0400-\\u04FF]+/gu;
console.log("\\nCyrillic:", "Привет".match(cyrillic)); // ["Привет"]

const greekLetters = /[\\u0370-\\u03FF]+/gu;
console.log("Greek:", "Ελληνικά".match(greekLetters)); // ["Ελληνικά"]

// Emoji range
const emojiRegex = /[\\u{1F600}-\\u{1F64F}]/gu;
console.log("\\nEmojis:", "Hello 😀 World 😃!".match(emojiRegex)); // ["😀", "😃"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Character Sets"
              initialCode={`const text = "cat bat rat hat mat";

// [abc] - matches any one of a, b, or c
console.log("[cbh]at:");
console.log(text.match(/[cbh]at/g)); // ["cat", "bat", "hat"]

// [^abc] - negated set (NOT a, b, or c)
console.log("\\n[^cbh]at:");
console.log(text.match(/[^cbh]at/g)); // ["rat", "mat"]

// [a-z] - range
console.log("\\n[a-z] lowercase:");
console.log("Hello World".match(/[a-z]/g)); // ["e", "l", "l", "o", "o"...]

console.log("\\n[A-Z] uppercase:");
console.log("Hello World".match(/[A-Z]/g)); // ["H", "W"]

console.log("\\n[0-9] digits:");
console.log("Order 123".match(/[0-9]/g)); // ["1", "2", "3"]

// Multiple ranges
console.log("\\n[a-zA-Z] all letters:");
console.log("Hello123World".match(/[a-zA-Z]/g)); // ["H", "e", "l", "l"...]

console.log("\\n[a-zA-Z0-9] alphanumeric:");
console.log("Hello-123-World!".match(/[a-zA-Z0-9]/g)); // ["H", "e", ..., "1", "2", "3"]

// Escaping in sets
console.log("\\n[.] literal dot:");
console.log("file.txt".match(/[.]/)); // ["."]

console.log("\\n[-] literal dash:");
console.log("file-name".match(/[-]/)); // ["-"]`}
            />
          </div>
        </section>

        {/* Anchors */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">⚓ Anchors</h2>

          <div className="mt-6">
            <CodePlayground
              title="Start and End Anchors"
              initialCode={`const text = "hello world";

// ^ - start of string (or line with m flag)
console.log("^ start:");
console.log(/^hello/.test(text)); // true
console.log(/^world/.test(text)); // false

// $ - end of string (or line with m flag)
console.log("\\n$ end:");
console.log(/world$/.test(text)); // true
console.log(/hello$/.test(text)); // false

// Both anchors - exact match
console.log("\\n^ and $:");
console.log(/^hello world$/.test(text)); // true
console.log(/^hello$/.test(text)); // false

// Practical: validation
function isValidUsername(username) {
  // 3-16 chars, letters/numbers/underscore only
  return /^[a-zA-Z0-9_]{3,16}$/.test(username);
}

console.log("\\nUsername validation:");
console.log("user123:", isValidUsername("user123")); // true
console.log("ab:", isValidUsername("ab")); // false (too short)
console.log("user@123:", isValidUsername("user@123")); // false (invalid char)

// Multiline mode
const lines = "line1\\nline2\\nline3";
console.log("\\nWithout m:", lines.match(/^line/g)); // ["line"]
console.log("With m:", lines.match(/^line/gm)); // ["line", "line", "line"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Word Boundaries"
              initialCode={`const text = "cat cats scatter category";

// \\b - word boundary
console.log("\\\\b word boundary:");
console.log(text.match(/\\bcat\\b/g)); // ["cat"] - only whole word
console.log(text.match(/cat/g)); // ["cat", "cat", "cat", "cat"] - all occurrences

// Start of word
console.log("\\n\\\\bcat (start of word):");
console.log(text.match(/\\bcat/g)); // ["cat", "cat", "cat", "cat"] - start with "cat"

// End of word
console.log("\\ncat\\\\b (end of word):");
console.log(text.match(/cat\\b/g)); // ["cat"] - end with "cat"

// \\B - non-word boundary
console.log("\\n\\\\B non-word boundary:");
console.log(text.match(/\\Bcat/g)); // ["cat"] - inside "scatter"
console.log(text.match(/cat\\B/g)); // ["cat", "cat", "cat"] - not at word end

// Practical: whole word search
function searchWholeWord(text, word) {
  const regex = new RegExp(\`\\\\b\${word}\\\\b\`, "gi");
  return text.match(regex);
}

console.log("\\nSearch 'cat':");
console.log(searchWholeWord(text, "cat")); // ["cat"]

console.log("\\nSearch 'cats':");
console.log(searchWholeWord(text, "cats")); // ["cats"]`}
            />
          </div>
        </section>

        {/* Quantifiers */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔢 Quantifiers</h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic Quantifiers"
              initialCode={`const text = "a aa aaa aaaa";

// * - 0 or more (greedy)
console.log("a*:");
console.log(text.match(/a*/g)); // ["a", "", "aa", "", "aaa", ...] - includes empty

// + - 1 or more (greedy)
console.log("\\na+:");
console.log(text.match(/a+/g)); // ["a", "aa", "aaa", "aaaa"]

// ? - 0 or 1 (greedy)
console.log("\\na?:");
console.log(text.match(/a?/g)); // ["a", "", "a", "a", "", ...]

// {n} - exactly n
console.log("\\na{2}:");
console.log(text.match(/a{2}/g)); // ["aa", "aa", "aa"]

// {n,} - n or more
console.log("\\na{3,}:");
console.log(text.match(/a{3,}/g)); // ["aaa", "aaaa"]

// {n,m} - between n and m
console.log("\\na{2,3}:");
console.log(text.match(/a{2,3}/g)); // ["aa", "aaa", "aaa"]

// Practical examples
const digits = "Phone: 123-4567";
console.log("\\n\\\\d+ (one or more digits):");
console.log(digits.match(/\\d+/g)); // ["123", "4567"]

const optional = "color colour";
console.log("\\ncolou?r (optional u):");
console.log(optional.match(/colou?r/g)); // ["color", "colour"]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Greedy vs Lazy (Non-greedy)"
              initialCode={`const html = "<div>Hello</div><div>World</div>";

// Greedy (default) - matches as much as possible
const greedy = /<div>.*<\\/div>/;
console.log("Greedy .* :");
console.log(html.match(greedy)[0]); // "<div>Hello</div><div>World</div>" - whole string!

// Lazy (non-greedy) - matches as little as possible
const lazy = /<div>.*?<\\/div>/;
console.log("\\nLazy .*? :");
console.log(html.match(lazy)[0]); // "<div>Hello</div>" - first tag only!

// With global flag
console.log("\\nAll matches (lazy):");
console.log(html.match(/<div>.*?<\\/div>/g)); // ["<div>Hello</div>", "<div>World</div>"]

// All lazy quantifiers
const text = "aaaa";
console.log("\\nLazy quantifiers:");
console.log("a*? :", text.match(/a*?/)); // [""] - 0 matches (lazy)
console.log("a+? :", text.match(/a+?/g)); // ["a", "a", "a", "a"] - 1 each
console.log("a?? :", text.match(/a??/)); // [""] - 0 matches (lazy)
console.log("a{2,}? :", text.match(/a{2,}?/)); // ["aa"] - minimum 2
console.log("a{2,4}? :", text.match(/a{2,4}?/)); // ["aa"] - minimum in range

// Practical: extract attributes
const tag = '<a href="https://example.com" title="Link">';
const attrs = tag.match(/\\w+=".*?"/g);
console.log("\\nAttributes:", attrs); // ["href=...", "title=..."]`}
            />
          </div>
        </section>

        {/* Groups */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            👥 Groups & Backreferences
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Capturing Groups"
              initialCode={`const text = "John Smith, Jane Doe";

// (x) - capturing group
const nameRegex = /(\\w+) (\\w+)/;
const match = nameRegex.exec(text);

console.log("Capturing groups:");
console.log("Full match:", match[0]); // "John Smith"
console.log("Group 1 (first):", match[1]); // "John"
console.log("Group 2 (last):", match[2]); // "Smith"

// With replace
const swapped = text.replace(/(\\w+) (\\w+)/g, "$2, $1");
console.log("\\nSwapped:", swapped); // "Smith, John, Doe, Jane"

// Multiple groups
const date = "2024-10-15";
const dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const [full, year, month, day] = dateRegex.exec(date);
console.log("\\nDate parts:");
console.log("Year:", year); // "2024"
console.log("Month:", month); // "10"
console.log("Day:", day); // "15"

// Nested groups
const nested = "abc";
const nestedRegex = /((a)(b)(c))/;
const nestedMatch = nestedRegex.exec(nested);
console.log("\\nNested groups:");
console.log("Group 1:", nestedMatch[1]); // "abc"
console.log("Group 2:", nestedMatch[2]); // "a"
console.log("Group 3:", nestedMatch[3]); // "b"
console.log("Group 4:", nestedMatch[4]); // "c"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Non-capturing Groups & Named Groups"
              initialCode={`const text = "2024-10-15";

// (?:x) - non-capturing group (for grouping only)
const nonCapture = /(?:\\d{4})-(\\d{2})-(\\d{2})/;
const match1 = nonCapture.exec(text);
console.log("Non-capturing:");
console.log("Full:", match1[0]); // "2024-10-15"
console.log("Group 1:", match1[1]); // "10" (month, not year!)
console.log("Group 2:", match1[2]); // "15"

// (?<name>x) - named capturing group (ES2018)
const namedRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const match2 = namedRegex.exec(text);

console.log("\\nNamed groups:");
console.log("Year:", match2.groups.year); // "2024"
console.log("Month:", match2.groups.month); // "10"
console.log("Day:", match2.groups.day); // "15"

// Still accessible by index
console.log("\\nBy index:");
console.log("Group 1:", match2[1]); // "2024"
console.log("Group 2:", match2[2]); // "10"
console.log("Group 3:", match2[3]); // "15"

// Use in replace
const formatted = text.replace(
  /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/,
  "$<day>/$<month>/$<year>"
);
console.log("\\nReformatted:", formatted); // "15/10/2024"

// With function
const formatted2 = text.replace(
  /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/,
  (match, y, m, d, offset, string, groups) => {
    return \`\${groups.day}/\${groups.month}/\${groups.year}\`;
  }
);
console.log("With function:", formatted2); // "15/10/2024"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Backreferences"
              initialCode={`// \\n - backreference to group n
const doubled = "hello hello world world";

// Match repeated words
const repeatRegex = /\\b(\\w+)\\s+\\1\\b/g;
console.log("Repeated words:");
console.log(doubled.match(repeatRegex)); // ["hello hello", "world world"]

// Remove repeated words
const cleaned = doubled.replace(/\\b(\\w+)\\s+\\1\\b/g, "$1");
console.log("\\nCleaned:", cleaned); // "hello world"

// Match same quotes
const text = "'single' and \\"double\\"";
const quoteRegex = /(['"]).*?\\1/g;
console.log("\\nMatched quotes:");
console.log(text.match(quoteRegex)); // ["'single'", "\\"double\\""]

// HTML tag matching
const html = "<div>Hello</div><span>World</span>";
const tagRegex = /<(\\w+)>.*?<\\/\\1>/g;
console.log("\\nMatched tags:");
console.log(html.match(tagRegex)); // ["<div>Hello</div>", "<span>World</span>"]

// \\k<name> - named backreference (ES2018)
const namedRepeat = /(?<word>\\w+)\\s+\\k<word>/;
console.log("\\nNamed backreference:");
console.log(namedRepeat.test("hello hello")); // true
console.log(namedRepeat.test("hello world")); // false

// Palindrome checker (simple)
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, "");
  // This is simpler without regex, but for demo:
  const regex = /^(\\w)(?:(\\w)(?:(\\w)\\3?)?\\2?)?\\1?$/;
  return regex.test(cleaned);
}

console.log("\\nPalindrome:");
console.log("aba:", isPalindrome("aba")); // true
console.log("abc:", isPalindrome("abc")); // false`}
            />
          </div>
        </section>

        {/* Lookahead & Lookbehind */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            👀 Lookahead & Lookbehind
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Lookahead: (?=...) and (?!...)"
              initialCode={`const text = "1 file, 10 files, 100 items";

// (?=x) - positive lookahead (followed by x)
console.log("Positive lookahead (?=files):");
console.log(text.match(/\\d+(?= files)/g)); // ["10"] - numbers before " files"

// Without lookahead
console.log("\\nWithout lookahead:");
console.log(text.match(/\\d+ files/g)); // ["10 files"] - includes " files"

// (?!x) - negative lookahead (NOT followed by x)
console.log("\\nNegative lookahead (?! files):");
console.log(text.match(/\\d+(?! files)/g)); // ["1", "10", "100"] - not followed by " files"

// Practical: password validation
function validatePassword(pwd) {
  // At least 8 chars, 1 digit, 1 uppercase, 1 lowercase
  const hasLength = /.{8,}/;
  const hasDigit = /(?=.*\\d)/;
  const hasUpper = /(?=.*[A-Z])/;
  const hasLower = /(?=.*[a-z])/;
  
  return hasLength.test(pwd) && 
         hasDigit.test(pwd) && 
         hasUpper.test(pwd) && 
         hasLower.test(pwd);
}

console.log("\\nPassword validation:");
console.log("Pass123:", validatePassword("Pass123")); // false (too short)
console.log("Password:", validatePassword("Password")); // false (no digit)
console.log("Password1:", validatePassword("Password1")); // true

// All in one regex
const pwdRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
console.log("\\nWith single regex:");
console.log("Password1:", pwdRegex.test("Password1")); // true
console.log("password1:", pwdRegex.test("password1")); // false (no uppercase)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Lookbehind: (?<=...) and (?<!...) - ES2018"
              initialCode={`const text = "$100 and €200 and ¥300";

// (?<=x) - positive lookbehind (preceded by x)
console.log("Positive lookbehind (?<=$):");
console.log(text.match(/(?<=\\$)\\d+/g)); // ["100"] - numbers after $

// (?<!x) - negative lookbehind (NOT preceded by x)
console.log("\\nNegative lookbehind (?<!$):");
console.log(text.match(/(?<!\\$)\\d+/g)); // ["00", "200", "300"] - not after $

// Multiple currency symbols
const prices = "$100, €200, £300, ¥400";
console.log("\\nAll prices:");
console.log(prices.match(/(?<=[$€£¥])\\d+/g)); // ["100", "200", "300", "400"]

// Combining lookahead and lookbehind
const code = "function test() { return 42; }";
const insideBraces = /(?<={).*?(?=})/g;
console.log("\\nInside braces:");
console.log(code.match(insideBraces)); // [" return 42; "]

// Extract values after keys
const data = "name: John, age: 30, city: NYC";
const values = /(?<=: )\\w+/g;
console.log("\\nValues:", data.match(values)); // ["John", "30", "NYC"]

// Not preceded and not followed by
const nums = "1 12 123 1234";
const threeDigits = /(?<!\\d)\\d{3}(?!\\d)/g;
console.log("\\nExactly 3 digits:", nums.match(threeDigits)); // ["123"]`}
            />
          </div>
        </section>

        {/* Alternation & Escaping */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔀 Alternation & Escaping
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Alternation (OR)"
              initialCode={`const text = "cat bat rat mat";

// | - alternation (OR)
console.log("cat|rat:");
console.log(text.match(/cat|rat/g)); // ["cat", "rat"]

// Order matters! (first match wins)
const text2 = "catfish";
console.log("\\ncat|catfish:", text2.match(/cat|catfish/)); // ["cat"]
console.log("catfish|cat:", text2.match(/catfish|cat/)); // ["catfish"]

// With groups
const datetime = "2024-10-15 or 10/15/2024";
const dateFormats = /\\d{4}-\\d{2}-\\d{2}|\\d{2}\\/\\d{2}\\/\\d{4}/g;
console.log("\\nDate formats:");
console.log(datetime.match(dateFormats)); // ["2024-10-15", "10/15/2024"]

// Multiple alternatives
const text3 = "I like cats, dogs, and birds";
const pets = /cats|dogs|birds/g;
console.log("\\nPets:", text3.match(pets)); // ["cats", "dogs", "birds"]

// With word boundaries
const text4 = "cat cats catfish";
const exactCat = /\\bcat\\b|\\bcats\\b/g;
console.log("\\nExact matches:", text4.match(exactCat)); // ["cat", "cats"]

// Practical: file extensions
function getFileType(filename) {
  if (/\\.(jpg|jpeg|png|gif)$/i.test(filename)) return "image";
  if (/\\.(mp4|avi|mov)$/i.test(filename)) return "video";
  if (/\\.(mp3|wav|ogg)$/i.test(filename)) return "audio";
  return "other";
}

console.log("\\nFile types:");
console.log("photo.jpg:", getFileType("photo.jpg")); // "image"
console.log("video.mp4:", getFileType("video.mp4")); // "video"
console.log("song.mp3:", getFileType("song.mp3")); // "audio"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Escaping Special Characters"
              initialCode={`// Special characters that need escaping:
// . * + ? ^ $ { } ( ) | [ ] \\ /

// \\ - escape character
console.log("Escaping special chars:");

// Literal dot
console.log("file.txt".match(/\\./)); // ["."]
console.log("file.txt".match(/./)); // ["f"] - matches any char

// Literal asterisk
console.log("2*3=6".match(/\\*/)); // ["*"]
console.log("2*3=6".match(/*/)); // Error! (invalid regex)

// Literal plus
console.log("1+1=2".match(/\\+/)); // ["+"]

// Literal question mark
console.log("What?".match(/\\?/)); // ["?"]

// Literal parentheses
console.log("(test)".match(/\\(/)); // ["("]
console.log("(test)".match(/\\)/)); // [")"]

// Literal brackets
console.log("[test]".match(/\\[/)); // ["["]
console.log("[test]".match(/\\]/)); // ["]"]

// Literal braces
console.log("{test}".match(/\\{/)); // ["{"]
console.log("{test}".match(/\\}/)); // ["}"]

// Literal pipe
console.log("a|b".match(/\\|/)); // ["|"]

// Literal caret
console.log("x^2".match(/\\^/)); // ["^"]

// Literal dollar sign
console.log("$100".match(/\\$/)); // ["$"]

// Literal backslash (need to escape twice!)
console.log("C:\\\\path".match(/\\\\/)); // ["\\\\"]

// Escape utility function  
function escapeRegex(str) {
  return str.replace(/[.*+?^$\\{\\}()|\\[\\]\\\\]/g, "\\\\$&");
}

const special = "What? (really!)";
const escaped = escapeRegex(special);
console.log("\\nEscaped:", escaped);
const regex = new RegExp(escaped);
console.log("Matches:", regex.test(special)); // true`}
            />
          </div>
        </section>

        {/* Unicode Properties */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🌐 Unicode Property Escapes (ES2018)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Unicode Properties (requires u flag)"
              initialCode={`// \\p{Property} - unicode property (requires u flag)
// \\P{Property} - negated unicode property

// Letters
const letters = /\\p{Letter}+/gu;
console.log("Letters:");
console.log("Hello123World!".match(letters)); // ["Hello", "World"]

// Numbers
const numbers = /\\p{Number}+/gu;
console.log("\\nNumbers:");
console.log("Price: $42.50".match(numbers)); // ["42", "50"]

// Punctuation
const punctuation = /\\p{Punctuation}/gu;
console.log("\\nPunctuation:");
console.log("Hello, World!".match(punctuation)); // [",", "!"]

// Symbols
const symbols = /\\p{Symbol}/gu;
console.log("\\nSymbols:");
console.log("Math: 2+2=$4".match(symbols)); // ["+", "$"]

// Currency symbols
const currency = /\\p{Currency_Symbol}/gu;
console.log("\\nCurrency:");
console.log("Prices: $100 €200 £300 ¥400".match(currency)); // ["$", "€", "£", "¥"]

// Emoji
const emoji = /\\p{Emoji}/gu;
console.log("\\nEmoji:");
console.log("Hello 👋 World 🌍!".match(emoji)); // ["👋", "🌍"]

// Uppercase
const uppercase = /\\p{Uppercase_Letter}/gu;
console.log("\\nUppercase:");
console.log("Hello World".match(uppercase)); // ["H", "W"]

// Lowercase
const lowercase = /\\p{Lowercase_Letter}/gu;
console.log("\\nLowercase:");
console.log("Hello World".match(lowercase)); // ["e", "l", "l", "o", "o"...]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Unicode Scripts"
              initialCode={`// Script property - match specific writing systems

// Greek
const greek = /\\p{Script=Greek}+/gu;
console.log("Greek:");
console.log("Hello Ελληνικά World".match(greek)); // ["Ελληνικά"]

// Cyrillic
const cyrillic = /\\p{Script=Cyrillic}+/gu;
console.log("\\nCyrillic:");
console.log("Hello Привет World".match(cyrillic)); // ["Привет"]

// Arabic
const arabic = /\\p{Script=Arabic}+/gu;
console.log("\\nArabic:");
console.log("Hello مرحبا World".match(arabic)); // ["مرحبا"]

// Hebrew
const hebrew = /\\p{Script=Hebrew}+/gu;
console.log("\\nHebrew:");
console.log("Hello שלום World".match(hebrew)); // ["שלום"]

// Han (Chinese, Japanese, Korean)
const han = /\\p{Script=Han}+/gu;
console.log("\\nHan:");
console.log("Hello 你好 World".match(han)); // ["你好"]

// Hiragana
const hiragana = /\\p{Script=Hiragana}+/gu;
console.log("\\nHiragana:");
console.log("Hello こんにちは World".match(hiragana)); // ["こんにちは"]

// Katakana
const katakana = /\\p{Script=Katakana}+/gu;
console.log("\\nKatakana:");
console.log("Hello カタカナ World".match(katakana)); // ["カタカナ"]

// Negated - NOT a specific script
const notLatin = /\\P{Script=Latin}+/gu;
console.log("\\nNot Latin:");
console.log("Hello 世界".match(notLatin)); // ["世界"]`}
            />
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Regex Examples
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Email Validation"
              initialCode={`// Simple email regex
const simpleEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

console.log("Simple email validation:");
console.log("user@example.com:", simpleEmail.test("user@example.com")); // true
console.log("invalid.email:", simpleEmail.test("invalid.email")); // false
console.log("user@:", simpleEmail.test("user@")); // false

// More comprehensive email
const email = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

console.log("\\nComprehensive validation:");
console.log("user.name@example.com:", email.test("user.name@example.com")); // true
console.log("user+tag@example.co.uk:", email.test("user+tag@example.co.uk")); // true
console.log("@example.com:", email.test("@example.com")); // false

// Extract email
const text = "Contact us at support@example.com or sales@example.com";
const emails = text.match(/[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g);
console.log("\\nExtracted emails:", emails);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="URL Validation & Parsing"
              initialCode={`// URL validation
const urlRegex = /^https?:\\/\\/[^\\s/$.?#].[^\\s]*$/i;

console.log("URL validation:");
console.log("https://example.com:", urlRegex.test("https://example.com")); // true
console.log("http://example.com/path:", urlRegex.test("http://example.com/path")); // true
console.log("ftp://example.com:", urlRegex.test("ftp://example.com")); // false

// Parse URL components
const url = "https://user:pass@example.com:8080/path?query=1#hash";
const urlParser = /^(\\w+):\\/\\/(?:([^:@]+)(?::([^@]+))?@)?([^/:]+)(?::(\\d+))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$/;

const match = url.match(urlParser);
if (match) {
  console.log("\\nParsed URL:");
  console.log("Protocol:", match[1]); // "https"
  console.log("Username:", match[2]); // "user"
  console.log("Password:", match[3]); // "pass"
  console.log("Host:", match[4]); // "example.com"
  console.log("Port:", match[5]); // "8080"
  console.log("Path:", match[6]); // "/path"
  console.log("Query:", match[7]); // "query=1"
  console.log("Hash:", match[8]); // "hash"
}

// Extract URLs from text
const text = "Visit https://example.com or http://test.org";
const urls = text.match(/https?:\\/\\/[^\\s]+/g);
console.log("\\nExtracted URLs:", urls);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Phone Number Validation"
              initialCode={`// US phone number formats
const formats = [
  "123-456-7890",
  "(123) 456-7890",
  "123.456.7890",
  "1234567890",
  "+1 123-456-7890"
];

// Flexible US phone regex
const phoneRegex = /^\\+?1?\\s*\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$/;

console.log("Phone validation:");
formats.forEach(phone => {
  console.log(phone + ":", phoneRegex.test(phone));
});

// Extract and normalize
function normalizePhone(phone) {
  const digits = phone.replace(/\\D/g, "");
  if (digits.length === 10) {
    return \`(\${digits.slice(0,3)}) \${digits.slice(3,6)}-\${digits.slice(6)}\`;
  }
  return phone;
}

console.log("\\nNormalized:");
console.log(normalizePhone("1234567890")); // "(123) 456-7890"
console.log(normalizePhone("123.456.7890")); // "(123) 456-7890"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Credit Card Validation"
              initialCode={`// Credit card patterns
const cards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
};

function detectCardType(number) {
  const cleaned = number.replace(/\\s/g, "");
  
  if (cards.visa.test(cleaned)) return "Visa";
  if (cards.mastercard.test(cleaned)) return "MasterCard";
  if (cards.amex.test(cleaned)) return "American Express";
  if (cards.discover.test(cleaned)) return "Discover";
  
  return "Unknown";
}

console.log("Card detection:");
console.log("4111111111111111:", detectCardType("4111111111111111")); // Visa
console.log("5500000000000004:", detectCardType("5500000000000004")); // MasterCard
console.log("340000000000009:", detectCardType("340000000000009")); // Amex

// Format card number
function formatCardNumber(number) {
  const cleaned = number.replace(/\\s/g, "");
  const type = detectCardType(cleaned);
  
  if (type === "American Express") {
    return cleaned.replace(/(\\d{4})(\\d{6})(\\d{5})/, "$1 $2 $3");
  }
  return cleaned.replace(/(\\d{4})/g, "$1 ").trim();
}

console.log("\\nFormatted:");
console.log(formatCardNumber("4111111111111111")); // "4111 1111 1111 1111"
console.log(formatCardNumber("340000000000009")); // "3400 000000 00009"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="HTML/XML Tag Matching"
              initialCode={`const html = "<div class=\\"container\\">Hello <span>World</span></div>";

// Extract tags
const tags = html.match(/<\\/?\\w+[^>]*>/g);
console.log("All tags:", tags);

// Extract opening tags
const openTags = html.match(/<\\w+[^>]*>/g);
console.log("\\nOpening tags:", openTags);

// Extract closing tags
const closeTags = html.match(/<\\/\\w+>/g);
console.log("Closing tags:", closeTags);

// Extract tag content
const divContent = html.match(/<div[^>]*>(.*?)<\\/div>/);
console.log("\\nDiv content:", divContent[1]);

// Extract attributes
const attrs = '<a href="https://example.com" class="link" target="_blank">';
const attrRegex = /(\\w+)="([^"]*)"/g;

console.log("\\nAttributes:");
let match;
while ((match = attrRegex.exec(attrs)) !== null) {
  console.log(\`\${match[1]}: \${match[2]}\`);
}

// Remove HTML tags
function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}

console.log("\\nStripped:", stripTags(html)); // "Hello World"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Date Format Parsing"
              initialCode={`const dates = [
  "2024-10-15",      // ISO
  "10/15/2024",      // US
  "15-10-2024",      // EU
  "15.10.2024",      // EU dots
  "Oct 15, 2024",    // Long
  "15 October 2024"  // Long EU
];

// Parse different formats
function parseDate(str) {
  // ISO: YYYY-MM-DD
  let match = str.match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
  if (match) return { year: match[1], month: match[2], day: match[3] };
  
  // US: MM/DD/YYYY
  match = str.match(/^(\\d{2})\\/(\\d{2})\\/(\\d{4})$/);
  if (match) return { month: match[1], day: match[2], year: match[3] };
  
  // EU: DD-MM-YYYY or DD.MM.YYYY
  match = str.match(/^(\\d{2})[-\\.](\\d{2})[-\\.](\\d{4})$/);
  if (match) return { day: match[1], month: match[2], year: match[3] };
  
  // Long: Month DD, YYYY
  match = str.match(/^(\\w+)\\s+(\\d{1,2}),\\s+(\\d{4})$/);
  if (match) return { month: match[1], day: match[2], year: match[3] };
  
  return null;
}

console.log("Parsed dates:");
dates.forEach(date => {
  console.log(date, "=>", JSON.stringify(parseDate(date)));
});

// Extract all dates from text
const text = "Meeting on 2024-10-15 or 10/15/2024";
const allDates = text.match(/\\d{4}-\\d{2}-\\d{2}|\\d{2}\\/\\d{2}\\/\\d{4}/g);
console.log("\\nFound dates:", allDates);`}
            />
          </div>
        </section>

        {/* Complete Reference Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete RegExp Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Pattern
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Description
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-mono text-xs">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-blue-400">
                    FLAGS
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">g</td>
                  <td className="px-3 py-2">Global search</td>
                  <td className="px-3 py-2">/test/g</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">i</td>
                  <td className="px-3 py-2">Case insensitive</td>
                  <td className="px-3 py-2">/test/i</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">m</td>
                  <td className="px-3 py-2">Multiline</td>
                  <td className="px-3 py-2">/^test/m</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">s</td>
                  <td className="px-3 py-2">Dot matches newline</td>
                  <td className="px-3 py-2">/./s</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">u</td>
                  <td className="px-3 py-2">Unicode</td>
                  <td className="px-3 py-2">{"/\\u{1F600}/u"}</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">y</td>
                  <td className="px-3 py-2">Sticky</td>
                  <td className="px-3 py-2">/test/y</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">d</td>
                  <td className="px-3 py-2">Indices</td>
                  <td className="px-3 py-2">/test/d</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    QUANTIFIERS
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">*</td>
                  <td className="px-3 py-2">0 or more</td>
                  <td className="px-3 py-2">/a*/</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">+</td>
                  <td className="px-3 py-2">1 or more</td>
                  <td className="px-3 py-2">/a+/</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">?</td>
                  <td className="px-3 py-2">0 or 1</td>
                  <td className="px-3 py-2">/a?/</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">{"{n}"}</td>
                  <td className="px-3 py-2">Exactly n</td>
                  <td className="px-3 py-2">/a{"{3}"}/</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">{"{n,}"}</td>
                  <td className="px-3 py-2">n or more</td>
                  <td className="px-3 py-2">/a{"{2,}"}/</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">{"{n,m}"}</td>
                  <td className="px-3 py-2">Between n and m</td>
                  <td className="px-3 py-2">/a{"{2,4}"}/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ RegExp Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use test() for boolean checks
                </strong>
                <p className="ml-4 mt-1">
                  Faster than match() when you only need true/false.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Prefer literal syntax when possible
                </strong>
                <p className="ml-4 mt-1">
                  /pattern/ is clearer than new RegExp("pattern")
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use non-capturing groups when you don't need captures
                </strong>
                <p className="ml-4 mt-1">
                  (?:...) is more efficient than (...).
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Be careful with global flag and lastIndex
                </strong>
                <p className="ml-4 mt-1">
                  Global regexes maintain state between calls.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Escape special characters in dynamic patterns
                </strong>
                <p className="ml-4 mt-1">
                  Use str.replace() to escape special regex characters
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use named groups for readability
                </strong>
                <p className="ml-4 mt-1">
                  (?&lt;name&gt;...) is clearer than numbered groups.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Test regex performance on large inputs
                </strong>
                <p className="ml-4 mt-1">
                  Some patterns can cause catastrophic backtracking.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Comment complex regex
                </strong>
                <p className="ml-4 mt-1">
                  Explain what each part does for future maintainers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 8 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL RegExp</strong> features!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
                <div className="text-gray-400">Constructor Forms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">7</div>
                <div className="text-gray-400">Flags</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">10</div>
                <div className="text-gray-400">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">8</div>
                <div className="text-gray-400">Methods</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all"
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
