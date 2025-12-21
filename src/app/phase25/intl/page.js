"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function IntlPage() {
  return (
    <SectionLayout
      title="25.1 Intl APIs - Complete"
      description="Master all 9 Intl APIs for locale-aware formatting, collation, segmentation, and display names"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🌍 Complete Internationalization (Intl) Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            The <strong>Intl</strong> namespace provides locale-aware string
            comparison, number formatting, date/time formatting, and more.
            Master <strong>all 9 Intl APIs</strong> for building truly global
            applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Collator",
              "DateTimeFormat",
              "NumberFormat",
              "PluralRules",
              "RelativeTimeFormat",
              "ListFormat",
              "Locale",
              "Segmenter",
              "DisplayNames",
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

        {/* Intl.Collator */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🔤 Intl.Collator - String Comparison & Sorting
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Intl.Collator Basics"
              initialCode={`// Intl.Collator - locale-aware string comparison

console.log("Basic usage:");
const collator = new Intl.Collator('en-US');

console.log(collator.compare('a', 'b')); // -1 (a < b)
console.log(collator.compare('b', 'a')); // 1 (b > a)
console.log(collator.compare('a', 'a')); // 0 (equal)

console.log("\\nSorting array:");
const names = ['Éric', 'Alice', 'Bob', 'Zoë', 'André'];
const sorted = names.sort(collator.compare);
console.log('Sorted:', sorted);

console.log("\\nLocale-specific sorting:");
// German phonebook order
const germanCollator = new Intl.Collator('de-DE-u-co-phonebk');
const germanNames = ['Goethe', 'Goldbach', 'Göbel'];
console.log('German phonebook:', germanNames.sort(germanCollator.compare));

// Swedish
const swedishCollator = new Intl.Collator('sv-SE');
const swedishNames = ['ä', 'z', 'ö'];
console.log('Swedish:', swedishNames.sort(swedishCollator.compare));
// In Swedish: z < ä < ö

console.log("\\nOptions:");
console.log("Usage: 'sort' | 'search'");
console.log("Sensitivity: 'base' | 'accent' | 'case' | 'variant'");
console.log("Numeric: true (1 < 2 < 10) vs false ('1' < '10' < '2')");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Collator Options"
              initialCode={`// Intl.Collator options

console.log("Sensitivity option:");

// Base: ignore accents and case
const baseCollator = new Intl.Collator('en', { sensitivity: 'base' });
console.log('base:', baseCollator.compare('a', 'A')); // 0 (equal)
console.log('base:', baseCollator.compare('a', 'á')); // 0 (equal)

// Accent: ignore case, consider accents
const accentCollator = new Intl.Collator('en', { sensitivity: 'accent' });
console.log('accent:', accentCollator.compare('a', 'A')); // 0 (equal)
console.log('accent:', accentCollator.compare('a', 'á')); // -1 (different)

// Case: ignore accents, consider case
const caseCollator = new Intl.Collator('en', { sensitivity: 'case' });
console.log('case:', caseCollator.compare('a', 'A')); // -1 (different)
console.log('case:', caseCollator.compare('a', 'á')); // 0 (equal)

console.log("\\nNumeric sorting:");
const strings = ['file1.txt', 'file10.txt', 'file2.txt'];

const defaultSort = strings.slice().sort();
console.log('Default:', defaultSort); // ['file1.txt', 'file10.txt', 'file2.txt']

const numericCollator = new Intl.Collator('en', { numeric: true });
const numericSort = strings.slice().sort(numericCollator.compare);
console.log('Numeric:', numericSort); // ['file1.txt', 'file2.txt', 'file10.txt']

console.log("\\nIgnore punctuation:");
const punctCollator = new Intl.Collator('en', { 
  ignorePunctuation: true 
});
console.log(punctCollator.compare('co-op', 'coop')); // 0 (equal)`}
            />
          </div>
        </section>

        {/* Intl.DateTimeFormat */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📅 Intl.DateTimeFormat - Date & Time Formatting
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="DateTimeFormat Basics"
              initialCode={`// Intl.DateTimeFormat - locale-aware date/time formatting

const date = new Date('2024-03-15T14:30:00');

console.log("Different locales:");
console.log('en-US:', new Intl.DateTimeFormat('en-US').format(date));
console.log('en-GB:', new Intl.DateTimeFormat('en-GB').format(date));
console.log('de-DE:', new Intl.DateTimeFormat('de-DE').format(date));
console.log('ja-JP:', new Intl.DateTimeFormat('ja-JP').format(date));
console.log('ar-EG:', new Intl.DateTimeFormat('ar-EG').format(date));

console.log("\\nWith options:");
const longFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log('Long:', longFormat.format(date));

const shortFormat = new Intl.DateTimeFormat('en-US', {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
});
console.log('Short:', shortFormat.format(date));

console.log("\\nTime formatting:");
const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
});
console.log('12-hour:', timeFormat.format(date));

const time24Format = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false
});
console.log('24-hour:', time24Format.format(date));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="DateTimeFormat Advanced"
              initialCode={`// Advanced date/time formatting

const date = new Date('2024-03-15T14:30:00');

console.log("Time zones:");
const nyFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  timeZoneName: 'short',
  hour: 'numeric',
  minute: 'numeric'
});
console.log('New York:', nyFormat.format(date));

const tokyoFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tokyo',
  timeZoneName: 'long',
  hour: 'numeric',
  minute: 'numeric'
});
console.log('Tokyo:', tokyoFormat.format(date));

console.log("\\nformatToParts() - detailed breakdown:");
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

const parts = formatter.formatToParts(date);
console.log('Parts:', parts);
// [
//   { type: 'month', value: 'March' },
//   { type: 'literal', value: ' ' },
//   { type: 'day', value: '15' },
//   ...
// ]

console.log("\\nformatRange() - date ranges:");
const start = new Date('2024-03-15');
const end = new Date('2024-03-20');
console.log('Range:', formatter.formatRange(start, end));

console.log("\\nresolvedOptions():");
const options = formatter.resolvedOptions();
console.log('Locale:', options.locale);
console.log('Calendar:', options.calendar);
console.log('TimeZone:', options.timeZone);`}
            />
          </div>
        </section>

        {/* Intl.NumberFormat */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔢 Intl.NumberFormat - Number, Currency & Unit Formatting
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="NumberFormat Basics"
              initialCode={`// Intl.NumberFormat - locale-aware number formatting

const number = 123456.789;

console.log("Different locales:");
console.log('en-US:', new Intl.NumberFormat('en-US').format(number));
console.log('de-DE:', new Intl.NumberFormat('de-DE').format(number));
console.log('ar-EG:', new Intl.NumberFormat('ar-EG').format(number));
console.log('zh-CN:', new Intl.NumberFormat('zh-CN').format(number));

console.log("\\nCurrency formatting:");
const usdFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
console.log('USD:', usdFormat.format(1234.56));

const eurFormat = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});
console.log('EUR:', eurFormat.format(1234.56));

const jpyFormat = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY'
});
console.log('JPY:', jpyFormat.format(1234)); // No decimals for JPY

console.log("\\nPercent formatting:");
const percentFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2
});
console.log('Percent:', percentFormat.format(0.1234)); // 12.34%`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="NumberFormat Advanced"
              initialCode={`// Advanced number formatting

console.log("Unit formatting:");
const distanceFormat = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'kilometer',
  unitDisplay: 'long'
});
console.log('Distance:', distanceFormat.format(50)); // 50 kilometers

const tempFormat = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'celsius'
});
console.log('Temperature:', tempFormat.format(25)); // 25°C

console.log("\\nCompact notation:");
const compactFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
});
console.log('1,000:', compactFormat.format(1000)); // 1K
console.log('1,000,000:', compactFormat.format(1000000)); // 1M
console.log('1,500,000:', compactFormat.format(1500000)); // 1.5M

const compactLong = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'long'
});
console.log('Long:', compactLong.format(1000000)); // 1 million

console.log("\\nScientific notation:");
const scientificFormat = new Intl.NumberFormat('en-US', {
  notation: 'scientific'
});
console.log('Scientific:', scientificFormat.format(123456));

console.log("\\nEngineering notation:");
const engineeringFormat = new Intl.NumberFormat('en-US', {
  notation: 'engineering'
});
console.log('Engineering:', engineeringFormat.format(123456));

console.log("\\nSign display:");
const signFormat = new Intl.NumberFormat('en-US', {
  signDisplay: 'always'
});
console.log('+5:', signFormat.format(5));
console.log('-5:', signFormat.format(-5));`}
            />
          </div>
        </section>

        {/* Intl.PluralRules */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 Intl.PluralRules - Plural Forms
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="PluralRules Basics"
              initialCode={`// Intl.PluralRules - handle plural forms

console.log("English cardinal plurals:");
const enPlurals = new Intl.PluralRules('en-US');
console.log('0 items:', enPlurals.select(0)); // other
console.log('1 item:', enPlurals.select(1));  // one
console.log('2 items:', enPlurals.select(2)); // other

function itemsText(count) {
  const rule = enPlurals.select(count);
  const forms = {
    one: 'item',
    other: 'items'
  };
  return \`\${count} \${forms[rule]}\`;
}

console.log(itemsText(0)); // 0 items
console.log(itemsText(1)); // 1 item
console.log(itemsText(5)); // 5 items

console.log("\\nArabic plurals (more complex):");
const arPlurals = new Intl.PluralRules('ar-EG');
console.log('0:', arPlurals.select(0));  // zero
console.log('1:', arPlurals.select(1));  // one
console.log('2:', arPlurals.select(2));  // two
console.log('3:', arPlurals.select(3));  // few
console.log('11:', arPlurals.select(11)); // many
console.log('100:', arPlurals.select(100)); // other

console.log("\\nOrdinal plurals:");
const enOrdinals = new Intl.PluralRules('en-US', { type: 'ordinal' });
console.log('1:', enOrdinals.select(1));  // one   (1st)
console.log('2:', enOrdinals.select(2));  // two   (2nd)
console.log('3:', enOrdinals.select(3));  // few   (3rd)
console.log('4:', enOrdinals.select(4));  // other (4th)
console.log('21:', enOrdinals.select(21)); // one   (21st)
console.log('22:', enOrdinals.select(22)); // two   (22nd)`}
            />
          </div>
        </section>

        {/* Intl.RelativeTimeFormat */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⏰ Intl.RelativeTimeFormat - Relative Time
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="RelativeTimeFormat Basics"
              initialCode={`// Intl.RelativeTimeFormat - relative time formatting

const rtf = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });

console.log("Past times:");
console.log(rtf.format(-1, 'day'));    // yesterday
console.log(rtf.format(-2, 'day'));    // 2 days ago
console.log(rtf.format(-1, 'week'));   // last week
console.log(rtf.format(-1, 'month'));  // last month
console.log(rtf.format(-1, 'year'));   // last year

console.log("\\nFuture times:");
console.log(rtf.format(1, 'day'));     // tomorrow
console.log(rtf.format(2, 'day'));     // in 2 days
console.log(rtf.format(1, 'week'));    // next week
console.log(rtf.format(3, 'hour'));    // in 3 hours
console.log(rtf.format(30, 'minute')); // in 30 minutes

console.log("\\nAlways numeric:");
const rtfNumeric = new Intl.RelativeTimeFormat('en-US', { 
  numeric: 'always' 
});
console.log(rtfNumeric.format(-1, 'day')); // 1 day ago (not "yesterday")
console.log(rtfNumeric.format(1, 'day'));  // in 1 day (not "tomorrow")

console.log("\\nDifferent locales:");
const rtfEs = new Intl.RelativeTimeFormat('es-ES', { numeric: 'auto' });
console.log('Spanish:', rtfEs.format(-1, 'day')); // ayer

const rtfJa = new Intl.RelativeTimeFormat('ja-JP', { numeric: 'auto' });
console.log('Japanese:', rtfJa.format(2, 'day')); // 2日後

console.log("\\nStyle options:");
const rtfLong = new Intl.RelativeTimeFormat('en-US', { style: 'long' });
console.log('Long:', rtfLong.format(-3, 'hour')); // 3 hours ago

const rtfShort = new Intl.RelativeTimeFormat('en-US', { style: 'short' });
console.log('Short:', rtfShort.format(-3, 'hour')); // 3 hr. ago

const rtfNarrow = new Intl.RelativeTimeFormat('en-US', { style: 'narrow' });
console.log('Narrow:', rtfNarrow.format(-3, 'hour')); // 3h ago`}
            />
          </div>
        </section>

        {/* Intl.ListFormat */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📝 Intl.ListFormat - List Formatting
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ListFormat Basics"
              initialCode={`// Intl.ListFormat - format lists with locale-aware conjunctions

const items = ['Apple', 'Orange', 'Banana'];

console.log("Conjunction (and):");
const andFormat = new Intl.ListFormat('en-US', { 
  style: 'long', 
  type: 'conjunction' 
});
console.log(andFormat.format(items)); // Apple, Orange, and Banana

console.log("\\nDisjunction (or):");
const orFormat = new Intl.ListFormat('en-US', { 
  style: 'long', 
  type: 'disjunction' 
});
console.log(orFormat.format(items)); // Apple, Orange, or Banana

console.log("\\nUnit:");
const unitFormat = new Intl.ListFormat('en-US', { 
  style: 'long', 
  type: 'unit' 
});
console.log(unitFormat.format(['5 pounds', '12 ounces'])); 
// 5 pounds, 12 ounces

console.log("\\nDifferent locales:");
const esFormat = new Intl.ListFormat('es-ES', { type: 'conjunction' });
console.log('Spanish:', esFormat.format(items)); 
// Apple, Orange y Banana

const deFormat = new Intl.ListFormat('de-DE', { type: 'conjunction' });
console.log('German:', deFormat.format(items)); 
// Apple, Orange und Banana

console.log("\\nStyle variants:");
const shortFormat = new Intl.ListFormat('en-US', { 
  style: 'short', 
  type: 'conjunction' 
});
console.log('Short:', shortFormat.format(items)); 
// Apple, Orange, & Banana

const narrowFormat = new Intl.ListFormat('en-US', { 
  style: 'narrow', 
  type: 'conjunction' 
});
console.log('Narrow:', narrowFormat.format(items)); 
// Apple, Orange, Banana`}
            />
          </div>
        </section>

        {/* Intl.Locale */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏳️ Intl.Locale - Locale Information
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Locale Object"
              initialCode={`// Intl.Locale - represent and manipulate locale identifiers

console.log("Create locale:");
const locale = new Intl.Locale('en-US');
console.log('Base name:', locale.baseName);   // en-US
console.log('Language:', locale.language);     // en
console.log('Region:', locale.region);         // US
console.log('Script:', locale.script);         // undefined
console.log('Calendar:', locale.calendar);     // gregory

console.log("\\nLocale with options:");
const localeWithOptions = new Intl.Locale('en-US', {
  calendar: 'buddhist',
  numberingSystem: 'thai',
  hourCycle: 'h24'
});
console.log('Calendar:', localeWithOptions.calendar);    // buddhist
console.log('Numbering:', localeWithOptions.numberingSystem); // thai
console.log('Hour cycle:', localeWithOptions.hourCycle); // h24

console.log("\\nParse locale string:");
const complexLocale = new Intl.Locale('zh-Hans-CN-u-ca-chinese-nu-hanidec');
console.log('Language:', complexLocale.language);      // zh
console.log('Script:', complexLocale.script);          // Hans
console.log('Region:', complexLocale.region);          // CN
console.log('Calendar:', complexLocale.calendar);      // chinese
console.log('Numbering:', complexLocale.numberingSystem); // hanidec

console.log("\\nGet text info:");
const enLocale = new Intl.Locale('en-US');
console.log('Text direction:', enLocale.textInfo?.direction); // ltr

const arLocale = new Intl.Locale('ar-EG');
console.log('Arabic direction:', arLocale.textInfo?.direction); // rtl

console.log("\\nWeek info:");
console.log('First day:', enLocale.weekInfo?.firstDay); // 7 (Sunday)
console.log('Weekend:', enLocale.weekInfo?.weekend);    // [6, 7]

console.log("\\ntoString():");
console.log('String:', localeWithOptions.toString());`}
            />
          </div>
        </section>

        {/* Intl.Segmenter */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✂️ Intl.Segmenter - Text Segmentation
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Segmenter - Grapheme, Word, Sentence"
              initialCode={`// Intl.Segmenter - split text into graphemes, words, or sentences

console.log("Grapheme segmentation:");
const graphemeSegmenter = new Intl.Segmenter('en', { 
  granularity: 'grapheme' 
});

const emoji = '👨‍👩‍👧‍👦';
const graphemes = [...graphemeSegmenter.segment(emoji)];
console.log('Graphemes:', graphemes.length); // 1 (family emoji)
console.log('String length:', emoji.length);  // 11 (multiple code points)

const text = 'café';
const textGraphemes = [...graphemeSegmenter.segment(text)];
console.log('Graphemes in café:', textGraphemes.map(s => s.segment));
// ['c', 'a', 'f', 'é']

console.log("\\nWord segmentation:");
const wordSegmenter = new Intl.Segmenter('en', { 
  granularity: 'word' 
});

const sentence = 'Hello, world! How are you?';
const words = [...wordSegmenter.segment(sentence)]
  .filter(s => s.isWordLike)
  .map(s => s.segment);
console.log('Words:', words); // ['Hello', 'world', 'How', 'are', 'you']

console.log("\\nSentence segmentation:");
const sentenceSegmenter = new Intl.Segmenter('en', { 
  granularity: 'sentence' 
});

const paragraph = 'Hello world. How are you? I am fine.';
const sentences = [...sentenceSegmenter.segment(paragraph)]
  .map(s => s.segment);
console.log('Sentences:', sentences);
// ['Hello world. ', 'How are you? ', 'I am fine.']

console.log("\\nJapanese word segmentation:");
const jaSegmenter = new Intl.Segmenter('ja', { granularity: 'word' });
const jaText = 'これは日本語です';
const jaWords = [...jaSegmenter.segment(jaText)]
  .filter(s => s.isWordLike)
  .map(s => s.segment);
console.log('Japanese words:', jaWords);`}
            />
          </div>
        </section>

        {/* Intl.DisplayNames */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏷️ Intl.DisplayNames - Localized Names
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="DisplayNames - Language, Region, Currency"
              initialCode={`// Intl.DisplayNames - get localized names

console.log("Language names:");
const languageNames = new Intl.DisplayNames(['en-US'], { 
  type: 'language' 
});
console.log('en:', languageNames.of('en'));   // English
console.log('fr:', languageNames.of('fr'));   // French
console.log('de:', languageNames.of('de'));   // German
console.log('ja:', languageNames.of('ja'));   // Japanese
console.log('zh:', languageNames.of('zh'));   // Chinese

console.log("\\nIn different locale:");
const languageNamesDe = new Intl.DisplayNames(['de-DE'], { 
  type: 'language' 
});
console.log('English in German:', languageNamesDe.of('en')); // Englisch
console.log('French in German:', languageNamesDe.of('fr'));  // Französisch

console.log("\\nRegion/Country names:");
const regionNames = new Intl.DisplayNames(['en-US'], { 
  type: 'region' 
});
console.log('US:', regionNames.of('US'));  // United States
console.log('GB:', regionNames.of('GB'));  // United Kingdom
console.log('DE:', regionNames.of('DE'));  // Germany
console.log('JP:', regionNames.of('JP'));  // Japan

console.log("\\nCurrency names:");
const currencyNames = new Intl.DisplayNames(['en-US'], { 
  type: 'currency' 
});
console.log('USD:', currencyNames.of('USD')); // US Dollar
console.log('EUR:', currencyNames.of('EUR')); // Euro
console.log('JPY:', currencyNames.of('JPY')); // Japanese Yen
console.log('GBP:', currencyNames.of('GBP')); // British Pound

console.log("\\nScript names:");
const scriptNames = new Intl.DisplayNames(['en-US'], { 
  type: 'script' 
});
console.log('Latn:', scriptNames.of('Latn')); // Latin
console.log('Arab:', scriptNames.of('Arab')); // Arabic
console.log('Hans:', scriptNames.of('Hans')); // Simplified Han`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Intl Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-indigo-400">
                  1. Always specify locale
                </strong>
                <p className="ml-4 mt-1">
                  Don't rely on default locale; explicitly specify for
                  consistent results
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">2. Reuse formatters</strong>
                <p className="ml-4 mt-1">
                  Create formatter instances once and reuse for better
                  performance
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  3. Use resolvedOptions() for debugging
                </strong>
                <p className="ml-4 mt-1">
                  Check what options are actually being used
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  4. Consider fallback locales
                </strong>
                <p className="ml-4 mt-1">
                  Provide array of locales: ['fr-FR', 'fr', 'en']
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  5. Use Intl.Segmenter for proper text splitting
                </strong>
                <p className="ml-4 mt-1">
                  Don't use simple string splitting for complex scripts
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  6. Cache DisplayNames instances
                </strong>
                <p className="ml-4 mt-1">
                  They're expensive to create; cache for repeated use
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  7. Use PluralRules for proper pluralization
                </strong>
                <p className="ml-4 mt-1">
                  Don't hardcode plural logic; languages vary greatly
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  8. Test with multiple locales
                </strong>
                <p className="ml-4 mt-1">
                  Especially RTL (Arabic, Hebrew) and CJK languages
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  9. Use formatToParts() for custom formatting
                </strong>
                <p className="ml-4 mt-1">
                  When you need to style parts differently
                </p>
              </div>
              <div>
                <strong className="text-indigo-400">
                  10. Keep up with new Intl features
                </strong>
                <p className="ml-4 mt-1">
                  Intl API is actively evolving with new capabilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 25 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Intl APIs</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">9</div>
                <div className="text-gray-400">Intl APIs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Formatting
                </div>
                <div className="text-gray-400">Date, Number, List</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Locale-Aware
                </div>
                <div className="text-gray-400">Global Apps</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Segmentation
                </div>
                <div className="text-gray-400">Text Processing</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-indigo-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY
              </p>
              <p className="text-gray-300">
                <strong>25 Phases</strong> • <strong>31 Sections</strong> •{" "}
                <strong>1800+ Concepts</strong> •{" "}
                <strong>1300+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                Language + DOM + Web APIs + Concurrency + Internationalization
              </p>
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
