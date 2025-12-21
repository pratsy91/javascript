"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function BinaryDataPage() {
  return (
    <SectionLayout
      title="11.1 Typed Arrays & Binary Data - Complete"
      description="Master ArrayBuffer, SharedArrayBuffer, DataView, and all 11 Typed Array types"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            💾 Complete Binary Data Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Typed Arrays provide a way to work with raw binary data in
            JavaScript. This section covers <strong>EVERYTHING</strong> about
            ArrayBuffer, DataView, and all 11 Typed Array types.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "ArrayBuffer",
              "DataView (20 methods)",
              "11 Typed Array Types",
              "SharedArrayBuffer",
              "Binary Operations",
              "Endianness",
              "Buffer Views",
              "Practical Uses",
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

        {/* ArrayBuffer */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">📦 ArrayBuffer</h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-blue-400">ArrayBuffer:</strong> A
              fixed-length raw binary data buffer. Cannot be directly
              manipulated - must use a view (TypedArray or DataView).
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="ArrayBuffer Basics"
              initialCode={`// Create ArrayBuffer (16 bytes)
const buffer = new ArrayBuffer(16);

// byteLength property
console.log("Buffer size:", buffer.byteLength); // 16

// Cannot directly read/write buffer
console.log("Buffer:", buffer);

// slice(begin, end) - create copy
const slice = buffer.slice(0, 8);
console.log("\\nSlice size:", slice.byteLength); // 8
console.log("Is new buffer:", slice !== buffer); // true

// ArrayBuffer.isView() - check if value is a view
console.log("\\nIs buffer a view:", ArrayBuffer.isView(buffer)); // false
console.log("Is Uint8Array a view:", ArrayBuffer.isView(new Uint8Array(buffer))); // true
console.log("Is DataView a view:", ArrayBuffer.isView(new DataView(buffer))); // true
console.log("Is Array a view:", ArrayBuffer.isView([1, 2, 3])); // false

// Creating views to work with buffer
const view = new Uint8Array(buffer);
view[0] = 255;
view[1] = 128;
console.log("\\nView values:", view[0], view[1]); // 255, 128`}
            />
          </div>
        </section>

        {/* DataView */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">👁️ DataView</h2>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-green-400">DataView:</strong> Provides a
              low-level interface for reading/writing multiple number types in a
              binary ArrayBuffer, with control over byte order (endianness).
            </p>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="DataView Constructor & Properties"
              initialCode={`const buffer = new ArrayBuffer(24);

// Create DataView
const view = new DataView(buffer);
console.log("DataView created");

// Properties
console.log("\\nbuffer:", view.buffer === buffer); // true (same buffer)
console.log("byteLength:", view.byteLength); // 24
console.log("byteOffset:", view.byteOffset); // 0

// DataView with offset and length
const view2 = new DataView(buffer, 8, 8);
console.log("\\nPartial view:");
console.log("byteLength:", view2.byteLength); // 8
console.log("byteOffset:", view2.byteOffset); // 8

// Note: DataView doesn't have length property
console.log("\\nhas length:", "length" in view); // false`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="DataView Getters - All Types"
              initialCode={`const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);

// Set some test data
view.setInt8(0, -128);
view.setUint8(1, 255);
view.setInt16(2, -32768);
view.setInt32(4, -2147483648);
view.setFloat32(8, 3.14);

// getInt8(byteOffset) - 8-bit signed (-128 to 127)
console.log("getInt8(0):", view.getInt8(0)); // -128

// getUint8(byteOffset) - 8-bit unsigned (0 to 255)
console.log("getUint8(1):", view.getUint8(1)); // 255

// getInt16(byteOffset, littleEndian) - 16-bit signed
console.log("\\ngetInt16(2, false):", view.getInt16(2, false)); // big-endian
console.log("getInt16(2, true):", view.getInt16(2, true)); // little-endian

// getUint16(byteOffset, littleEndian) - 16-bit unsigned
console.log("\\ngetUint16(2, false):", view.getUint16(2, false));

// getInt32(byteOffset, littleEndian) - 32-bit signed
console.log("\\ngetInt32(4, false):", view.getInt32(4, false));

// getUint32(byteOffset, littleEndian) - 32-bit unsigned
console.log("getUint32(4, false):", view.getUint32(4, false));

// getFloat32(byteOffset, littleEndian) - 32-bit float
console.log("\\ngetFloat32(8, false):", view.getFloat32(8, false).toFixed(2));

// getFloat64(byteOffset, littleEndian) - 64-bit float
view.setFloat64(8, Math.PI);
console.log("getFloat64(8, false):", view.getFloat64(8, false).toFixed(2));

// getBigInt64(byteOffset, littleEndian) - 64-bit signed BigInt (ES2020)
view.setBigInt64(0, 9007199254740991n);
console.log("\\ngetBigInt64(0):", view.getBigInt64(0, false));

// getBigUint64(byteOffset, littleEndian) - 64-bit unsigned BigInt (ES2020)
view.setBigUint64(0, 18446744073709551615n);
console.log("getBigUint64(0):", view.getBigUint64(0, false));`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="DataView Setters & Endianness"
              initialCode={`const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);

// Little-endian vs Big-endian
const value = 0x12345678;

// Big-endian (default, most significant byte first)
view.setInt32(0, value, false); // or omit second param
console.log("Big-endian bytes:", 
  view.getUint8(0).toString(16),
  view.getUint8(1).toString(16),
  view.getUint8(2).toString(16),
  view.getUint8(3).toString(16)
); // 12 34 56 78

// Little-endian (least significant byte first)
view.setInt32(4, value, true);
console.log("\\nLittle-endian bytes:",
  view.getUint8(4).toString(16),
  view.getUint8(5).toString(16),
  view.getUint8(6).toString(16),
  view.getUint8(7).toString(16)
); // 78 56 34 12

// Reading with different endianness
console.log("\\nRead as big-endian:", view.getInt32(4, false).toString(16));
console.log("Read as little-endian:", view.getInt32(4, true).toString(16));

// Platform endianness check
function getPlatformEndianness() {
  const buffer = new ArrayBuffer(2);
  const view = new DataView(buffer);
  view.setUint16(0, 0x1234);
  return view.getUint8(0) === 0x12 ? "big-endian" : "little-endian";
}

console.log("\\nPlatform:", getPlatformEndianness());`}
            />
          </div>
        </section>

        {/* Typed Arrays */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔢 Typed Array Types (11 Types)
          </h2>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-300">
              <strong className="text-purple-400">Typed Arrays:</strong>{" "}
              Array-like views on an ArrayBuffer, providing typed access to
              binary data. Each type has a specific element size and range.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ConceptCard title="Int8Array" icon="1️⃣" color="blue">
              8-bit signed: -128 to 127
            </ConceptCard>
            <ConceptCard title="Uint8Array" icon="2️⃣" color="green">
              8-bit unsigned: 0 to 255
            </ConceptCard>
            <ConceptCard title="Uint8ClampedArray" icon="3️⃣" color="yellow">
              8-bit unsigned clamped: 0-255
            </ConceptCard>
            <ConceptCard title="Int16Array" icon="4️⃣" color="orange">
              16-bit signed: -32768 to 32767
            </ConceptCard>
            <ConceptCard title="Uint16Array" icon="5️⃣" color="red">
              16-bit unsigned: 0 to 65535
            </ConceptCard>
            <ConceptCard title="Int32Array" icon="6️⃣" color="pink">
              32-bit signed: -2³¹ to 2³¹-1
            </ConceptCard>
            <ConceptCard title="Uint32Array" icon="7️⃣" color="indigo">
              32-bit unsigned: 0 to 2³²-1
            </ConceptCard>
            <ConceptCard title="Float32Array" icon="8️⃣" color="purple">
              32-bit float
            </ConceptCard>
            <ConceptCard title="Float64Array" icon="9️⃣" color="cyan">
              64-bit float (double)
            </ConceptCard>
            <ConceptCard title="BigInt64Array" icon="🔟" color="teal">
              64-bit signed BigInt (ES2020)
            </ConceptCard>
            <ConceptCard title="BigUint64Array" icon="1️⃣1️⃣" color="emerald">
              64-bit unsigned BigInt (ES2020)
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Creating Typed Arrays"
              initialCode={`// 1. From length
const arr1 = new Uint8Array(5);
console.log("From length:", arr1); // [0, 0, 0, 0, 0]
console.log("Length:", arr1.length); // 5

// 2. From array or array-like
const arr2 = new Uint8Array([1, 2, 3, 4, 5]);
console.log("\\nFrom array:", arr2); // [1, 2, 3, 4, 5]

// 3. From ArrayBuffer
const buffer = new ArrayBuffer(16);
const arr3 = new Uint8Array(buffer);
console.log("\\nFrom buffer:", arr3.length); // 16

// 4. From buffer with offset and length
const arr4 = new Uint8Array(buffer, 4, 4);
console.log("From buffer (offset):", arr4.length); // 4

// 5. From another typed array
const arr5 = new Uint8Array(arr2);
console.log("\\nFrom typed array:", arr5);

// Different types
const int8 = new Int8Array([-128, -1, 0, 1, 127]);
const uint16 = new Uint16Array([0, 100, 65535]);
const float32 = new Float32Array([1.5, -2.7, 3.14]);

console.log("\\nInt8Array:", int8);
console.log("Uint16Array:", uint16);
console.log("Float32Array:", float32);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Typed Array Properties"
              initialCode={`const arr = new Uint16Array([1, 2, 3, 4, 5]);

// buffer - underlying ArrayBuffer
console.log("buffer:", arr.buffer);
console.log("buffer.byteLength:", arr.buffer.byteLength); // 10 (5 * 2 bytes)

// byteLength - length in bytes
console.log("\\nbyteLength:", arr.byteLength); // 10

// byteOffset - offset in buffer
console.log("byteOffset:", arr.byteOffset); // 0

// length - number of elements
console.log("length:", arr.length); // 5

// BYTES_PER_ELEMENT - bytes per element (instance)
console.log("\\nBYTES_PER_ELEMENT:", arr.BYTES_PER_ELEMENT); // 2

// Static BYTES_PER_ELEMENT
console.log("\\nStatic properties:");
console.log("Int8Array.BYTES_PER_ELEMENT:", Int8Array.BYTES_PER_ELEMENT); // 1
console.log("Uint16Array.BYTES_PER_ELEMENT:", Uint16Array.BYTES_PER_ELEMENT); // 2
console.log("Int32Array.BYTES_PER_ELEMENT:", Int32Array.BYTES_PER_ELEMENT); // 4
console.log("Float64Array.BYTES_PER_ELEMENT:", Float64Array.BYTES_PER_ELEMENT); // 8

// name property
console.log("\\nname:", Uint16Array.name); // "Uint16Array"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Typed Array Static Methods"
              initialCode={`// TypedArray.from(source, mapFn, thisArg)
const arr1 = Uint8Array.from([1, 2, 3, 4, 5]);
console.log("from([1,2,3,4,5]):", arr1);

// With map function
const arr2 = Uint8Array.from([1, 2, 3], x => x * 2);
console.log("from with map:", arr2); // [2, 4, 6]

// From string
const arr3 = Uint8Array.from("hello", c => c.charCodeAt(0));
console.log("\\nfrom string:", arr3); // [104, 101, 108, 108, 111]

// From array-like
const arr4 = Uint8Array.from({ length: 5 }, (_, i) => i * 10);
console.log("from array-like:", arr4); // [0, 10, 20, 30, 40]

// TypedArray.of(...elements)
const arr5 = Uint8Array.of(1, 2, 3, 4, 5);
console.log("\\nof(1,2,3,4,5):", arr5);

const arr6 = Float32Array.of(1.5, 2.7, 3.14);
console.log("Float32Array.of:", arr6);

// Comparison with Array
console.log("\\nArray.of(7):", Array.of(7)); // [7]
console.log("Uint8Array.of(7):", Uint8Array.of(7)); // [7]
console.log("new Array(7):", new Array(7)); // empty × 7
console.log("new Uint8Array(7):", new Uint8Array(7)); // [0,0,0,0,0,0,0]`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Typed Array Methods: set() & subarray()"
              initialCode={`const arr = new Uint8Array(10);

// set(array, offset) - copy values from array
arr.set([1, 2, 3]);
console.log("After set([1,2,3]):", arr);

arr.set([4, 5, 6], 3);
console.log("After set([4,5,6], 3):", arr);

// Set from another typed array
const source = new Uint8Array([7, 8, 9]);
arr.set(source, 6);
console.log("After set(typedArray):", arr);

// subarray(begin, end) - create new view (shares buffer!)
const sub = arr.subarray(2, 5);
console.log("\\nsubarray(2, 5):", sub); // [3, 4, 5]

// Modifying subarray affects original
sub[0] = 99;
console.log("After sub[0] = 99:");
console.log("sub:", sub);
console.log("original:", arr); // Original changed too!

// Compare with slice() - creates new buffer
const sliced = arr.slice(2, 5);
sliced[0] = 88;
console.log("\\nAfter sliced[0] = 88:");
console.log("sliced:", sliced);
console.log("original:", arr); // Original unchanged!

// Negative indices
const end = arr.subarray(-3);
console.log("\\nsubarray(-3):", end); // Last 3 elements`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="All Standard Array Methods Work!"
              initialCode={`const arr = new Uint8Array([1, 2, 3, 4, 5]);

// Iteration
console.log("forEach:");
arr.forEach(x => console.log("  " + x));

// Transformation
const doubled = arr.map(x => x * 2);
console.log("\\nmap (x * 2):", doubled);

const filtered = arr.filter(x => x % 2 === 0);
console.log("filter (even):", filtered);

// Searching
console.log("\\nfind (> 3):", arr.find(x => x > 3)); // 4
console.log("findIndex (> 3):", arr.findIndex(x => x > 3)); // 3
console.log("includes(3):", arr.includes(3)); // true
console.log("indexOf(3):", arr.indexOf(3)); // 2

// Reduction
const sum = arr.reduce((a, b) => a + b, 0);
console.log("\\nreduce (sum):", sum); // 15

// Sorting
const arr2 = new Uint8Array([5, 2, 8, 1, 9]);
arr2.sort();
console.log("\\nsort:", arr2); // [1, 2, 5, 8, 9]

// Other
console.log("\\nsome (> 4):", arr.some(x => x > 4)); // true
console.log("every (> 0):", arr.every(x => x > 0)); // true
console.log("join(\'-\'):", arr.join('-')); // "1-2-3-4-5"

// Note: Some methods return regular Arrays, not typed arrays!
console.log("\\nmap returns:", doubled.constructor.name); // "Uint8Array"
console.log("filter returns:", filtered.constructor.name); // "Uint8Array"
console.log("slice returns:", arr.slice().constructor.name); // "Uint8Array"`}
            />
          </div>
        </section>

        {/* Type Ranges & Clamping */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📏 Type Ranges & Overflow Behavior
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Integer Overflow Behavior"
              initialCode={`// Uint8Array: 0 to 255
const uint8 = new Uint8Array(1);

uint8[0] = 255;
console.log("Uint8: 255 =", uint8[0]); // 255

uint8[0] = 256; // Wraps around
console.log("Uint8: 256 =", uint8[0]); // 0

uint8[0] = 257;
console.log("Uint8: 257 =", uint8[0]); // 1

uint8[0] = -1; // Wraps from top
console.log("Uint8: -1 =", uint8[0]); // 255

// Int8Array: -128 to 127
const int8 = new Int8Array(1);

int8[0] = 127;
console.log("\\nInt8: 127 =", int8[0]); // 127

int8[0] = 128; // Wraps to negative
console.log("Int8: 128 =", int8[0]); // -128

int8[0] = 129;
console.log("Int8: 129 =", int8[0]); // -127

// Uint8ClampedArray: Clamps instead of wrapping!
const clamped = new Uint8ClampedArray(1);

clamped[0] = 300;
console.log("\\nClamped: 300 =", clamped[0]); // 255 (clamped!)

clamped[0] = -50;
console.log("Clamped: -50 =", clamped[0]); // 0 (clamped!)

clamped[0] = 100;
console.log("Clamped: 100 =", clamped[0]); // 100 (in range)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Float Precision"
              initialCode={`// Float32Array vs Float64Array precision

const float32 = new Float32Array([Math.PI]);
const float64 = new Float64Array([Math.PI]);

console.log("Math.PI:", Math.PI);
console.log("\\nFloat32 (7 digits):", float32[0]);
console.log("Float64 (15 digits):", float64[0]);

// Precision loss with Float32
const precise = 1.23456789012345;
float32[0] = precise;
float64[0] = precise;

console.log("\\nOriginal:", precise);
console.log("Float32:", float32[0]); // Less precise
console.log("Float64:", float64[0]); // More precise

// Special float values
float32[0] = Infinity;
console.log("\\nInfinity:", float32[0]);

float32[0] = NaN;
console.log("NaN:", float32[0]);
console.log("isNaN:", Number.isNaN(float32[0])); // true`}
            />
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Practical Use Cases
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Working with Binary Protocols"
              initialCode={`// Example: Create a simple network packet
// Format: [type(1 byte), length(2 bytes), data(n bytes)]

function createPacket(type, data) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  
  const buffer = new ArrayBuffer(3 + encodedData.length);
  const view = new DataView(buffer);
  
  // Type (1 byte)
  view.setUint8(0, type);
  
  // Length (2 bytes, big-endian)
  view.setUint16(1, encodedData.length, false);
  
  // Data
  const dataView = new Uint8Array(buffer, 3);
  dataView.set(encodedData);
  
  return buffer;
}

function parsePacket(buffer) {
  const view = new DataView(buffer);
  
  const type = view.getUint8(0);
  const length = view.getUint16(1, false);
  
  const dataView = new Uint8Array(buffer, 3, length);
  const decoder = new TextDecoder();
  const data = decoder.decode(dataView);
  
  return { type, length, data };
}

// Create and parse packet
const packet = createPacket(42, "Hello!");
console.log("Packet buffer:", packet);

const parsed = parsePacket(packet);
console.log("\\nParsed:");
console.log("Type:", parsed.type); // 42
console.log("Length:", parsed.length); // 6
console.log("Data:", parsed.data); // "Hello!"`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Image Data Manipulation"
              initialCode={`// Simulating image pixel data (RGBA)
// Each pixel: 4 bytes [R, G, B, A]

function createImage(width, height) {
  // 4 bytes per pixel (RGBA)
  const buffer = new ArrayBuffer(width * height * 4);
  return new Uint8ClampedArray(buffer);
}

function setPixel(imageData, width, x, y, r, g, b, a) {
  const index = (y * width + x) * 4;
  imageData[index] = r;
  imageData[index + 1] = g;
  imageData[index + 2] = b;
  imageData[index + 3] = a;
}

function getPixel(imageData, width, x, y) {
  const index = (y * width + x) * 4;
  return {
    r: imageData[index],
    g: imageData[index + 1],
    b: imageData[index + 2],
    a: imageData[index + 3]
  };
}

// Create 2x2 image
const img = createImage(2, 2);

// Set pixels
setPixel(img, 2, 0, 0, 255, 0, 0, 255); // Red
setPixel(img, 2, 1, 0, 0, 255, 0, 255); // Green
setPixel(img, 2, 0, 1, 0, 0, 255, 255); // Blue
setPixel(img, 2, 1, 1, 255, 255, 0, 255); // Yellow

// Read pixels
console.log("Pixel (0,0):", getPixel(img, 2, 0, 0)); // Red
console.log("Pixel (1,1):", getPixel(img, 2, 1, 1)); // Yellow

// Note: Uint8ClampedArray clamps values automatically!
setPixel(img, 2, 0, 0, 300, -50, 128, 255);
console.log("\\nClamped pixel:", getPixel(img, 2, 0, 0)); // (255, 0, 128, 255)`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Audio Data Processing"
              initialCode={`// Simulating audio sample data
// CD quality: 44100 Hz, 16-bit samples

function createAudioBuffer(durationSeconds, sampleRate = 44100) {
  const samples = durationSeconds * sampleRate;
  return new Int16Array(samples);
}

// Generate sine wave
function generateSineWave(buffer, frequency, sampleRate = 44100) {
  const amplitude = 32767; // Max for Int16
  
  for (let i = 0; i < buffer.length; i++) {
    const t = i / sampleRate;
    buffer[i] = Math.sin(2 * Math.PI * frequency * t) * amplitude;
  }
}

// Apply fade in effect
function fadeIn(buffer, fadeDuration = 0.1) {
  const fadeSamples = Math.floor(fadeDuration * 44100);
  
  for (let i = 0; i < fadeSamples; i++) {
    buffer[i] *= i / fadeSamples;
  }
}

// Create 0.5 second audio buffer
const audio = createAudioBuffer(0.5);
console.log("Buffer size:", audio.length, "samples");
console.log("Duration:", audio.length / 44100, "seconds");

// Generate 440 Hz (A4 note)
generateSineWave(audio, 440);
console.log("\\nFirst samples:", audio.slice(0, 5));

// Apply fade in
fadeIn(audio, 0.05);
console.log("After fade in:", audio.slice(0, 5));

// Calculate RMS (volume)
function calculateRMS(buffer, start = 0, length = buffer.length) {
  let sum = 0;
  for (let i = start; i < start + length; i++) {
    sum += buffer[i] * buffer[i];
  }
  return Math.sqrt(sum / length);
}

console.log("\\nRMS value:", calculateRMS(audio).toFixed(2));`}
            />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Typed Array Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Bytes
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Range
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-mono text-xs">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Int8Array</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2">-128 to 127</td>
                  <td className="px-3 py-2">Small signed integers</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Uint8Array</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2">0 to 255</td>
                  <td className="px-3 py-2">Binary data, bytes</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Uint8ClampedArray</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2">0 to 255 (clamped)</td>
                  <td className="px-3 py-2">Canvas/image pixels</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Int16Array</td>
                  <td className="px-3 py-2">2</td>
                  <td className="px-3 py-2">-32768 to 32767</td>
                  <td className="px-3 py-2">Audio samples</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Uint16Array</td>
                  <td className="px-3 py-2">2</td>
                  <td className="px-3 py-2">0 to 65535</td>
                  <td className="px-3 py-2">Unicode chars</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Int32Array</td>
                  <td className="px-3 py-2">4</td>
                  <td className="px-3 py-2">-2³¹ to 2³¹-1</td>
                  <td className="px-3 py-2">Large integers</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Uint32Array</td>
                  <td className="px-3 py-2">4</td>
                  <td className="px-3 py-2">0 to 2³²-1</td>
                  <td className="px-3 py-2">Colors (RGBA)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Float32Array</td>
                  <td className="px-3 py-2">4</td>
                  <td className="px-3 py-2">±1.18e-38 to ±3.4e38</td>
                  <td className="px-3 py-2">Graphics, WebGL</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Float64Array</td>
                  <td className="px-3 py-2">8</td>
                  <td className="px-3 py-2">±5.0e-324 to ±1.8e308</td>
                  <td className="px-3 py-2">Precise calculations</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">BigInt64Array</td>
                  <td className="px-3 py-2">8</td>
                  <td className="px-3 py-2">-2⁶³ to 2⁶³-1</td>
                  <td className="px-3 py-2">Large signed integers</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">BigUint64Array</td>
                  <td className="px-3 py-2">8</td>
                  <td className="px-3 py-2">0 to 2⁶⁴-1</td>
                  <td className="px-3 py-2">Large unsigned integers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Binary Data Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Choose the right type for your data
                </strong>
                <p className="ml-4 mt-1">
                  Use smallest type that fits your range to save memory
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  2. Use Uint8ClampedArray for pixel data
                </strong>
                <p className="ml-4 mt-1">
                  Automatic clamping prevents overflow in image processing
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Be aware of endianness
                </strong>
                <p className="ml-4 mt-1">
                  Specify explicitly when working with network protocols
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. subarray() shares buffer, slice() copies
                </strong>
                <p className="ml-4 mt-1">
                  Use subarray() for performance, slice() for independence
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Typed arrays are not regular arrays
                </strong>
                <p className="ml-4 mt-1">But they support most array methods</p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use DataView for mixed-type data
                </strong>
                <p className="ml-4 mt-1">
                  Better for structured binary formats
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Remember typed arrays wrap on overflow
                </strong>
                <p className="ml-4 mt-1">
                  Except Uint8ClampedArray which clamps
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Use Float64Array for precision
                </strong>
                <p className="ml-4 mt-1">
                  Float32Array for performance when precision isn't critical
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 11 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL Binary Data</strong> structures in
              JavaScript!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">1</div>
                <div className="text-gray-400">ArrayBuffer</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  20
                </div>
                <div className="text-gray-400">DataView Methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">11</div>
                <div className="text-gray-400">Typed Array Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  40+
                </div>
                <div className="text-gray-400">Array Methods</div>
              </div>
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
