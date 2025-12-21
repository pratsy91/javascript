"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function DateMethodsPage() {
  return (
    <SectionLayout
      title="7.1 Date - ALL Methods"
      description="Master Date constructor, static methods (3), and all 40+ instance methods"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            📅 Complete Date Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            The Date object represents dates and times. This section covers{" "}
            <strong>ALL date methods</strong> - constructors, static methods,
            getters, setters, and conversion methods.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Constructors (4)",
              "Static (3)",
              "Getters Local (10)",
              "Getters UTC (8)",
              "Setters Local (8)",
              "Setters UTC (7)",
              "Conversion (10)",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-indigo-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Date Constructor */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Date Constructor (4 forms)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Date Constructor Forms"
              initialCode={`// 1. new Date() - current date and time
const now = new Date();
console.log("Current date:", now);
console.log("Type:", typeof now); // "object"

// 2. new Date(milliseconds) - from timestamp
const fromMs = new Date(0); // Unix epoch
console.log("\\nEpoch:", fromMs); // 1970-01-01 00:00:00 UTC

const timestamp = new Date(1700000000000);
console.log("From timestamp:", timestamp);

// 3. new Date(dateString) - from string
const fromString = new Date("2024-10-15");
console.log("\\nFrom string:", fromString);

const fromISO = new Date("2024-10-15T14:30:00Z");
console.log("From ISO:", fromISO);

// 4. new Date(year, month, day, hours, min, sec, ms)
// Note: month is 0-indexed! (0 = January, 11 = December)
const specific = new Date(2024, 9, 15); // October 15, 2024
console.log("\\nSpecific date:", specific);

const full = new Date(2024, 9, 15, 14, 30, 0, 0);
console.log("Full:", full);

// Date() without new - returns string
const dateString = Date();
console.log("\\nDate() without new:", dateString);
console.log("Type:", typeof dateString); // "string"

// Invalid dates
const invalid = new Date("invalid");
console.log("\\nInvalid:", invalid); // Invalid Date
console.log("isNaN:", isNaN(invalid.getTime())); // true`}
            />
          </div>
        </section>

        {/* Date Static Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Date Static Methods (3)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Date.now(), Date.parse(), Date.UTC()"
              initialCode={`// Date.now() - current timestamp in milliseconds
const now = Date.now();
console.log("Date.now():", now);
console.log("Type:", typeof now); // "number"

// Same as
const nowDate = new Date().getTime();
console.log("Same as new Date().getTime():", nowDate);

// Date.parse(dateString) - parse string to timestamp
const parsed = Date.parse("2024-10-15T14:30:00Z");
console.log("\\nDate.parse():", parsed);
console.log("As Date:", new Date(parsed));

// Various formats
console.log("\\nDifferent formats:");
console.log(Date.parse("2024-10-15")); // ISO
console.log(Date.parse("Oct 15, 2024")); // Long format
console.log(Date.parse("10/15/2024")); // MM/DD/YYYY

// Invalid returns NaN
console.log("\\nInvalid:", Date.parse("invalid")); // NaN

// Date.UTC(year, month, day, ...) - UTC timestamp
const utc = Date.UTC(2024, 9, 15, 14, 30, 0);
console.log("\\nDate.UTC():", utc);
console.log("As Date:", new Date(utc));

// vs regular constructor (local time)
const local = new Date(2024, 9, 15, 14, 30, 0);
const utcDate = new Date(Date.UTC(2024, 9, 15, 14, 30, 0));

console.log("\\nLocal:", local);
console.log("UTC:", utcDate);

// Performance measurement
const start = Date.now();
// ... do something ...
for (let i = 0; i < 1000000; i++) {}
const end = Date.now();
console.log("\\nTime elapsed:", end - start, "ms");`}
            />
          </div>
        </section>

        {/* Getters - Local Time */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📥 Getters - Local Time (10)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Date Component Getters"
              initialCode={`const date = new Date(2024, 9, 15, 14, 30, 45, 500);
// October 15, 2024, 14:30:45.500

console.log("Full date:", date);

// getFullYear() - 4-digit year
console.log("\\ngetFullYear():", date.getFullYear()); // 2024

// getMonth() - month (0-11!)
console.log("getMonth():", date.getMonth()); // 9 (October!)
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log("Month name:", months[date.getMonth()]); // "Oct"

// getDate() - day of month (1-31)
console.log("\\ngetDate():", date.getDate()); // 15

// getDay() - day of week (0-6, Sunday=0)
console.log("getDay():", date.getDay()); // 0-6
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("Day name:", days[date.getDay()]);

// getHours() - hours (0-23)
console.log("\\ngetHours():", date.getHours()); // 14

// getMinutes() - minutes (0-59)
console.log("getMinutes():", date.getMinutes()); // 30

// getSeconds() - seconds (0-59)
console.log("getSeconds():", date.getSeconds()); // 45

// getMilliseconds() - milliseconds (0-999)
console.log("getMilliseconds():", date.getMilliseconds()); // 500

// getTime() - timestamp (milliseconds since epoch)
console.log("\\ngetTime():", date.getTime());

// getTimezoneOffset() - minutes from UTC
console.log("getTimezoneOffset():", date.getTimezoneOffset());
console.log("Hours from UTC:", date.getTimezoneOffset() / 60);`}
            />
          </div>
        </section>

        {/* Getters - UTC */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🌍 Getters - UTC (8)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="UTC Getters"
              initialCode={`const date = new Date("2024-10-15T14:30:45.500Z"); // UTC time

console.log("Date:", date);

// All UTC getters
console.log("\\nUTC Components:");
console.log("getUTCFullYear():", date.getUTCFullYear()); // 2024
console.log("getUTCMonth():", date.getUTCMonth()); // 9 (October)
console.log("getUTCDate():", date.getUTCDate()); // 15
console.log("getUTCDay():", date.getUTCDay()); // Day of week
console.log("getUTCHours():", date.getUTCHours()); // 14
console.log("getUTCMinutes():", date.getUTCMinutes()); // 30
console.log("getUTCSeconds():", date.getUTCSeconds()); // 45
console.log("getUTCMilliseconds():", date.getUTCMilliseconds()); // 500

// Compare local vs UTC
console.log("\\nLocal vs UTC:");
console.log("Local hour:", date.getHours());
console.log("UTC hour:", date.getUTCHours());
console.log("Difference:", date.getHours() - date.getUTCHours(), "hours");

// Timezone offset
const offset = date.getTimezoneOffset();
console.log("\\nTimezone offset:", offset, "minutes");
console.log("UTC " + (offset > 0 ? "-" : "+") + Math.abs(offset / 60));

// Format UTC date
function formatUTC(date) {
  return date.getUTCFullYear() + "-" +
         String(date.getUTCMonth() + 1).padStart(2, "0") + "-" +
         String(date.getUTCDate()).padStart(2, "0") + " " +
         String(date.getUTCHours()).padStart(2, "0") + ":" +
         String(date.getUTCMinutes()).padStart(2, "0");
}

console.log("\\nFormatted UTC:", formatUTC(date));`}
            />
          </div>
        </section>

        {/* Setters - Local Time */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📤 Setters - Local Time (8)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Date Component Setters"
              initialCode={`const date = new Date(2024, 0, 1); // Jan 1, 2024
console.log("Initial:", date.toLocaleDateString());

// setFullYear(year, month, date)
date.setFullYear(2025);
console.log("\\nAfter setFullYear(2025):", date.toLocaleDateString());

date.setFullYear(2026, 11, 25); // Dec 25, 2026
console.log("setFullYear(2026, 11, 25):", date.toLocaleDateString());

// setMonth(month, date) - month is 0-11
date.setMonth(0); // January
console.log("\\nAfter setMonth(0):", date.toLocaleDateString());

// setDate(date) - day of month
date.setDate(15);
console.log("After setDate(15):", date.toLocaleDateString());

// setDate beyond month (auto-adjusts!)
date.setDate(35); // Goes to next month
console.log("setDate(35):", date.toLocaleDateString());

// setHours(hours, min, sec, ms)
date.setHours(14, 30, 45, 500);
console.log("\\nAfter setHours:", date.toLocaleTimeString());

// setMinutes(min, sec, ms)
date.setMinutes(45, 30, 250);
console.log("After setMinutes:", date.toLocaleTimeString());

// setSeconds(sec, ms)
date.setSeconds(10, 100);
console.log("After setSeconds:", date.toLocaleTimeString());

// setMilliseconds(ms)
date.setMilliseconds(999);
console.log("Milliseconds:", date.getMilliseconds());

// setTime(milliseconds) - set from timestamp
date.setTime(1700000000000);
console.log("\\nAfter setTime:", date);`}
            />
          </div>
        </section>

        {/* Setters - UTC */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🌍 Setters - UTC (7)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="UTC Setters"
              initialCode={`const date = new Date("2024-01-01T00:00:00Z");
console.log("Initial UTC:", date.toISOString());

// setUTCFullYear(year, month, date)
date.setUTCFullYear(2025);
console.log("\\nAfter setUTCFullYear(2025):", date.toISOString());

// setUTCMonth(month, date)
date.setUTCMonth(11, 25); // December 25
console.log("setUTCMonth(11, 25):", date.toISOString());

// setUTCDate(date)
date.setUTCDate(1);
console.log("setUTCDate(1):", date.toISOString());

// setUTCHours(hours, min, sec, ms)
date.setUTCHours(12, 30, 45, 123);
console.log("\\nAfter setUTCHours:", date.toISOString());

// setUTCMinutes(min, sec, ms)
date.setUTCMinutes(15, 30, 456);
console.log("setUTCMinutes:", date.toISOString());

// setUTCSeconds(sec, ms)
date.setUTCSeconds(0, 0);
console.log("setUTCSeconds:", date.toISOString());

// setUTCMilliseconds(ms)
date.setUTCMilliseconds(789);
console.log("setUTCMilliseconds:", date.toISOString());

// Comparison: Local vs UTC setters
const d1 = new Date("2024-06-15T12:00:00Z");
const d2 = new Date("2024-06-15T12:00:00Z");

d1.setHours(15); // Local
d2.setUTCHours(15); // UTC

console.log("\\nLocal setter:", d1.toISOString());
console.log("UTC setter:", d2.toISOString());`}
            />
          </div>
        </section>

        {/* Conversion Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔄 Conversion Methods (10)
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="toString() Variants"
              initialCode={`const date = new Date("2024-10-15T14:30:45.500Z");

// toString() - full date and time string
console.log("toString():");
console.log(date.toString());

// toDateString() - date part only
console.log("\\ntoDateString():");
console.log(date.toDateString()); // "Tue Oct 15 2024"

// toTimeString() - time part only
console.log("\\ntoTimeString():");
console.log(date.toTimeString()); // "14:30:45 GMT+..."

// toISOString() - ISO 8601 format (always UTC!)
console.log("\\ntoISOString():");
console.log(date.toISOString()); // "2024-10-15T14:30:45.500Z"

// toJSON() - same as toISOString (for JSON.stringify)
console.log("\\ntoJSON():");
console.log(date.toJSON()); // "2024-10-15T14:30:45.500Z"

const obj = { date: date };
console.log("JSON.stringify:", JSON.stringify(obj));

// toUTCString() - UTC format
console.log("\\ntoUTCString():");
console.log(date.toUTCString()); // "Tue, 15 Oct 2024 14:30:45 GMT"

// valueOf() - timestamp number
console.log("\\nvalueOf():", date.valueOf()); // milliseconds
console.log("Same as getTime():", date.valueOf() === date.getTime()); // true

// Comparison uses valueOf()
const d1 = new Date("2024-01-01");
const d2 = new Date("2024-12-31");
console.log("\\nd1 < d2:", d1 < d2); // true (compares timestamps)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Locale-aware Formatting"
              initialCode={`const date = new Date("2024-10-15T14:30:45.500");

// toLocaleDateString(locales, options)
console.log("toLocaleDateString():");
console.log("Default:", date.toLocaleDateString());
console.log("US:", date.toLocaleDateString("en-US"));
console.log("UK:", date.toLocaleDateString("en-GB"));
console.log("German:", date.toLocaleDateString("de-DE"));
console.log("Japanese:", date.toLocaleDateString("ja-JP"));

// toLocaleTimeString(locales, options)
console.log("\\ntoLocaleTimeString():");
console.log("Default:", date.toLocaleTimeString());
console.log("US:", date.toLocaleTimeString("en-US"));
console.log("24h:", date.toLocaleTimeString("en-GB"));

// toLocaleString(locales, options) - both date and time
console.log("\\ntoLocaleString():");
console.log("Default:", date.toLocaleString());
console.log("US:", date.toLocaleString("en-US"));

// With options
console.log("\\nWith options:");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};

console.log(date.toLocaleString("en-US", options));

// Date only options
const dateOptions = { 
  year: "numeric", 
  month: "short", 
  day: "numeric" 
};
console.log("\\nDate format:", date.toLocaleDateString("en-US", dateOptions));

// Time only options
const timeOptions = { 
  hour: "2-digit", 
  minute: "2-digit",
  second: "2-digit",
  hour12: false
};
console.log("Time format:", date.toLocaleTimeString("en-US", timeOptions));`}
            />
          </div>
        </section>

        {/* Deprecated Methods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚠️ Deprecated Methods (3) - Don't Use
          </h2>

          <ConceptCard title="Deprecated" icon="🚫" color="orange">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>getYear():</strong> Use getFullYear() instead
              </li>
              <li>
                <strong>setYear():</strong> Use setFullYear() instead
              </li>
              <li>
                <strong>toGMTString():</strong> Use toUTCString() instead
              </li>
            </ul>
          </ConceptCard>

          <div className="mt-6">
            <CodePlayground
              title="Deprecated vs Modern"
              initialCode={`const date = new Date("2024-10-15");

// getYear() - DEPRECATED (returns year - 1900)
// console.log("getYear():", date.getYear()); // 124 (2024 - 1900)

// Use getFullYear() instead
console.log("getFullYear():", date.getFullYear()); // 2024

// toGMTString() - DEPRECATED
// console.log("toGMTString():", date.toGMTString());

// Use toUTCString() instead
console.log("\\ntoUTCString():", date.toUTCString());

// Why deprecated?
console.log("\\nReasons:");
console.log("- getYear() confusing (returns year - 1900)");
console.log("- Y2K issues");
console.log("- Better alternatives exist");

// Always use modern methods
console.log("\\nModern methods:");
console.log("Year:", date.getFullYear());
console.log("UTC string:", date.toUTCString());
console.log("ISO string:", date.toISOString());

// Note: Some old code might still use these
// but they should be avoided in new code`}
            />
          </div>
        </section>

        {/* Practical Date Operations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Date Operations
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Date Calculations"
              initialCode={`// Add days
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const today = new Date("2024-10-15");
console.log("Today:", today.toLocaleDateString());
console.log("7 days later:", addDays(today, 7).toLocaleDateString());
console.log("30 days ago:", addDays(today, -30).toLocaleDateString());

// Difference between dates
function daysBetween(date1, date2) {
  const diffMs = Math.abs(date2 - date1);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const start = new Date("2024-01-01");
const end = new Date("2024-12-31");
console.log("\\nDays between:", daysBetween(start, end));

// Age calculation
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

const birthDate = new Date("1999-05-15");
console.log("\\nAge:", calculateAge(birthDate));

// Is same day
function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

console.log("\\nisSameDay:", isSameDay(new Date(), new Date())); // true`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Date Formatting Utilities"
              initialCode={`const date = new Date("2024-10-15T14:30:45");

// Custom format function
function formatDate(date, format) {
  const pad = (n) => String(n).padStart(2, "0");
  
  const formats = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => formats[match]);
}

console.log("Custom formats:");
console.log(formatDate(date, "YYYY-MM-DD")); // "2024-10-15"
console.log(formatDate(date, "DD/MM/YYYY")); // "15/10/2024"
console.log(formatDate(date, "YYYY-MM-DD HH:mm:ss")); // Full

// Relative time
function getRelativeTime(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  
  if (diffDay > 0) return diffDay + " day(s) ago";
  if (diffHour > 0) return diffHour + " hour(s) ago";
  if (diffMin > 0) return diffMin + " minute(s) ago";
  return diffSec + " second(s) ago";
}

const past = new Date(Date.now() - 1000 * 60 * 30); // 30 min ago
console.log("\\nRelative:", getRelativeTime(past));

// Is weekend
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
}

console.log("\\nIs weekend:", isWeekend(date));

// Business days calculator
function addBusinessDays(date, days) {
  const result = new Date(date);
  let added = 0;
  
  while (added < days) {
    result.setDate(result.getDate() + 1);
    if (!isWeekend(result)) {
      added++;
    }
  }
  
  return result;
}

const businessDate = addBusinessDays(new Date("2024-10-14"), 5);
console.log("5 business days:", businessDate.toLocaleDateString());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Date Validation and Parsing"
              initialCode={`// Check if valid date
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

console.log("Valid dates:");
console.log(isValidDate(new Date())); // true
console.log(isValidDate(new Date("2024-10-15"))); // true
console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2024-10-15")); // false (string, not Date)

// Parse different formats
function parseDate(str) {
  const date = new Date(str);
  return isValidDate(date) ? date : null;
}

console.log("\\nParsing:");
console.log(parseDate("2024-10-15")); // Works
console.log(parseDate("Oct 15, 2024")); // Works
console.log(parseDate("invalid")); // null

// Start/end of day
function startOfDay(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function endOfDay(date) {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

const today = new Date();
console.log("\\nStart of day:", startOfDay(today).toLocaleTimeString());
console.log("End of day:", endOfDay(today).toLocaleTimeString());

// Get first/last day of month
function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

console.log("\\nFirst of month:", getFirstDayOfMonth(today).toLocaleDateString());
console.log("Last of month:", getLastDayOfMonth(today).toLocaleDateString());`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Timezone Handling"
              initialCode={`const date = new Date("2024-10-15T14:30:00Z");

// Get timezone offset
const offset = date.getTimezoneOffset();
console.log("Timezone offset:", offset, "minutes");
console.log("Hours:", offset / 60);

// Note: Positive means behind UTC, negative means ahead
console.log("\\nOffset meaning:");
console.log("Positive = behind UTC (e.g., US: +300 = UTC-5)");
console.log("Negative = ahead UTC (e.g., Tokyo: -540 = UTC+9)");

// Convert to different timezone display
function toTimezone(date, offsetHours) {
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * offsetHours));
}

console.log("\\nUTC time:", date.toISOString());
console.log("Tokyo (UTC+9):", toTimezone(date, 9).toLocaleString());
console.log("NY (UTC-5):", toTimezone(date, -5).toLocaleString());

// Get timezone name
const timeZoneName = new Intl.DateTimeFormat('en', {
  timeZoneName: 'long'
}).format(date);
console.log("\\nTimezone:", timeZoneName);

// Format with timezone
const formatted = date.toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short"
});
console.log("\\nFormatted:", formatted);

// UTC vs Local comparison
console.log("\\nLocal hour:", date.getHours());
console.log("UTC hour:", date.getUTCHours());
console.log("Difference:", date.getHours() - date.getUTCHours());`}
            />
          </div>
        </section>

        {/* Complete Reference */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Complete Date Methods (50+)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Method
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Returns
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Range/Format
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td colSpan={3} className="px-3 py-2 font-bold text-blue-400">
                    STATIC METHODS
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">Date.now()</td>
                  <td className="px-3 py-2">Current timestamp</td>
                  <td className="px-3 py-2">Number (ms)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">Date.parse()</td>
                  <td className="px-3 py-2">Parse string</td>
                  <td className="px-3 py-2">Number (ms)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">Date.UTC()</td>
                  <td className="px-3 py-2">UTC timestamp</td>
                  <td className="px-3 py-2">Number (ms)</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-purple-400"
                  >
                    GETTERS - LOCAL TIME
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getFullYear()</td>
                  <td className="px-3 py-2">Year</td>
                  <td className="px-3 py-2">e.g., 2024</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getMonth()</td>
                  <td className="px-3 py-2">Month</td>
                  <td className="px-3 py-2">0-11</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getDate()</td>
                  <td className="px-3 py-2">Day of month</td>
                  <td className="px-3 py-2">1-31</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getDay()</td>
                  <td className="px-3 py-2">Day of week</td>
                  <td className="px-3 py-2">0-6 (Sun=0)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getHours()</td>
                  <td className="px-3 py-2">Hours</td>
                  <td className="px-3 py-2">0-23</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getMinutes()</td>
                  <td className="px-3 py-2">Minutes</td>
                  <td className="px-3 py-2">0-59</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getSeconds()</td>
                  <td className="px-3 py-2">Seconds</td>
                  <td className="px-3 py-2">0-59</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getMilliseconds()</td>
                  <td className="px-3 py-2">Milliseconds</td>
                  <td className="px-3 py-2">0-999</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getTime()</td>
                  <td className="px-3 py-2">Timestamp</td>
                  <td className="px-3 py-2">Number (ms since 1970)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">getTimezoneOffset()</td>
                  <td className="px-3 py-2">TZ offset</td>
                  <td className="px-3 py-2">Minutes from UTC</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-900/30">
                  <td
                    colSpan={3}
                    className="px-3 py-2 font-bold text-green-400"
                  >
                    CONVERSION METHODS
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toString()</td>
                  <td className="px-3 py-2">Full string</td>
                  <td className="px-3 py-2">Date + Time + TZ</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toISOString()</td>
                  <td className="px-3 py-2">ISO 8601</td>
                  <td className="px-3 py-2">YYYY-MM-DDTHH:mm:ss.sssZ</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toUTCString()</td>
                  <td className="px-3 py-2">UTC string</td>
                  <td className="px-3 py-2">RFC format</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toLocaleDateString()</td>
                  <td className="px-3 py-2">Locale date</td>
                  <td className="px-3 py-2">Locale-specific</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toLocaleTimeString()</td>
                  <td className="px-3 py-2">Locale time</td>
                  <td className="px-3 py-2">Locale-specific</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">toLocaleString()</td>
                  <td className="px-3 py-2">Locale date+time</td>
                  <td className="px-3 py-2">Locale-specific</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Date Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Remember months are 0-indexed!
                </strong>
                <p className="ml-4 mt-1">
                  January = 0, December = 11. Always add/subtract 1 when
                  displaying.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use toISOString() for storage
                </strong>
                <p className="ml-4 mt-1">
                  ISO 8601 format is unambiguous and sorts correctly.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Store timestamps (getTime()) for calculations
                </strong>
                <p className="ml-4 mt-1">
                  Easier to work with numbers than Date objects.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Always validate Date objects
                </strong>
                <p className="ml-4 mt-1">
                  Check with isNaN(date.getTime()) to catch invalid dates.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Use UTC methods for server/API dates
                </strong>
                <p className="ml-4 mt-1">
                  Avoid timezone issues by working in UTC.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Consider using libraries for complex operations
                </strong>
                <p className="ml-4 mt-1">
                  date-fns, Day.js, or Temporal API (future) for complex date
                  logic.
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Date objects are mutable!
                </strong>
                <p className="ml-4 mt-1">
                  Clone before modifying: new Date(originalDate)
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Avoid deprecated methods
                </strong>
                <p className="ml-4 mt-1">
                  Don't use getYear(), setYear(), or toGMTString().
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 7 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Date methods</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">4</div>
                <div className="text-gray-400">Constructor Forms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">3</div>
                <div className="text-gray-400">Static Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">33</div>
                <div className="text-gray-400">Instance Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  10
                </div>
                <div className="text-gray-400">Conversion Methods</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all"
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
