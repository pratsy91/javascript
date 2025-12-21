"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function PerformancePage() {
  return (
    <SectionLayout
      title="30.1 Performance Optimization - Complete"
      description="Master loading, runtime, memory, rendering, and network performance optimization techniques"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⚡ Complete Performance Optimization Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Master <strong>all aspects of web performance</strong>: loading,
            runtime, memory, rendering, and network optimization. Build
            lightning-fast applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Code Splitting",
              "Lazy Loading",
              "Debouncing",
              "Throttling",
              "Memoization",
              "Virtual Scrolling",
              "Memory Leaks",
              "Reflow/Repaint",
              "Caching",
              "HTTP/2",
              "CDN",
              "Image Optimization",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-lime-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Loading Performance */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            🚀 Loading Performance
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Code Splitting & Lazy Loading"
              initialCode={`// Code Splitting - load code on demand

console.log("React Code Splitting:");
console.log(\`
import React, { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`);

console.log("\\nDynamic Import:");
console.log(\`
// Load module on demand
button.addEventListener('click', async () => {
  const module = await import('./heavy-module.js');
  module.doSomething();
});

// Load multiple modules
const [moduleA, moduleB] = await Promise.all([
  import('./moduleA.js'),
  import('./moduleB.js')
]);
\`);

console.log("\\nWebpack Code Splitting:");
console.log(\`
// Magic comments for chunk naming
import(
  /* webpackChunkName: "my-chunk" */
  /* webpackPrefetch: true */
  './module.js'
);

// Route-based splitting
const routes = [
  {
    path: '/dashboard',
    component: () => import('./Dashboard')
  },
  {
    path: '/settings',
    component: () => import('./Settings')
  }
];
\`);

console.log("\\nLazy Load Images:");
console.log(\`
// Native lazy loading
<img src="image.jpg" loading="lazy" alt="Description">

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Resource Hints & Script Loading"
              initialCode={`// Resource Hints - browser loading optimization

console.log("Resource Hints:");
console.log(\`
<!-- Preconnect: establish early connection -->
<link rel="preconnect" href="https://api.example.com">
<link rel="dns-prefetch" href="https://api.example.com">

<!-- Preload: high-priority resource -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/font.woff2" as="font" crossorigin>

<!-- Prefetch: low-priority, future navigation -->
<link rel="prefetch" href="/next-page.js">

<!-- Prerender: pre-render page (rarely used) -->
<link rel="prerender" href="/next-page.html">
\`);

console.log("\\nScript Loading Strategies:");
console.log(\`
<!-- Default: blocking, executes in order -->
<script src="script.js"></script>

<!-- Async: non-blocking, executes when ready -->
<script src="script.js" async></script>

<!-- Defer: non-blocking, executes after HTML parsed -->
<script src="script.js" defer></script>

<!-- Module: defer by default -->
<script type="module" src="script.js"></script>
\`);

console.log("\\nBest Practices:");
console.log("  ✓ Use defer for most scripts");
console.log("  ✓ Use async for independent scripts (analytics)");
console.log("  ✓ Load critical CSS inline");
console.log("  ✓ Preload critical resources");
console.log("  ✓ Prefetch next-page resources");

console.log("\\nCritical CSS:");
console.log(\`
<!-- Inline critical CSS -->
<style>
  /* Above-the-fold styles */
  .header { ... }
  .hero { ... }
</style>

<!-- Load rest async -->
<link rel="preload" href="/styles.css" as="style" 
      onload="this.onload=null;this.rel='stylesheet'">
\`);`}
            />
          </div>
        </section>

        {/* Runtime Performance */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Runtime Performance
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Debouncing & Throttling"
              initialCode={`// Debouncing - delay execution until pause

console.log("Debounce Implementation:");
console.log(\`
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage: search input
const searchInput = document.querySelector('#search');
const debouncedSearch = debounce((value) => {
  console.log('Searching for:', value);
  // API call here
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
// Only searches 300ms after user stops typing
\`);

console.log("\\nThrottle Implementation:");
console.log(\`
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage: scroll event
const throttledScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', throttledScroll);
// Executes at most once per 100ms
\`);

console.log("\\nWhen to use:");
console.log("Debounce:");
console.log("  • Search input");
console.log("  • Window resize");
console.log("  • Auto-save");
console.log("");
console.log("Throttle:");
console.log("  • Scroll events");
console.log("  • Mouse move");
console.log("  • API rate limiting");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Memoization & Optimization"
              initialCode={`// Memoization - cache function results

console.log("Simple Memoization:");
console.log(\`
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Usage
const expensiveCalc = memoize((n) => {
  console.log('Computing...');
  return n * n;
});

console.log(expensiveCalc(5)); // Computing... 25
console.log(expensiveCalc(5)); // 25 (cached, no computation)
\`);

console.log("\\nReact useMemo & useCallback:");
console.log(\`
import { useMemo, useCallback } from 'react';

function Component({ data, onSave }) {
  // Memoize expensive computation
  const processedData = useMemo(() => {
    return expensiveOperation(data);
  }, [data]); // Only recompute when data changes
  
  // Memoize callback
  const handleClick = useCallback(() => {
    onSave(processedData);
  }, [processedData, onSave]);
  
  return <Child data={processedData} onClick={handleClick} />;
}
\`);

console.log("\\nVirtual Scrolling:");
console.log(\`
// Only render visible items
function VirtualList({ items, itemHeight }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 600;
  
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.ceil((scrollTop + containerHeight) / itemHeight);
  const visibleItems = items.slice(startIndex, endIndex);
  
  return (
    <div onScroll={e => setScrollTop(e.target.scrollTop)}>
      <div style={{ height: items.length * itemHeight }}>
        <div style={{ transform: \`translateY(\${startIndex * itemHeight}px)\` }}>
          {visibleItems.map(item => <Item key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="requestAnimationFrame & requestIdleCallback"
              initialCode={`// Optimize animation and background tasks

console.log("requestAnimationFrame - smooth animations:");
console.log(\`
let position = 0;

function animate() {
  position += 2;
  element.style.transform = \`translateX(\${position}px)\`;
  
  if (position < 500) {
    requestAnimationFrame(animate); // 60 FPS
  }
}

requestAnimationFrame(animate);

// ❌ DON'T use setInterval for animations
// setInterval(() => { ... }, 16); // Inconsistent timing
\`);

console.log("\\nrequestIdleCallback - background tasks:");
console.log(\`
// Run low-priority tasks when browser is idle
requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    const task = tasks.shift();
    performTask(task);
  }
  
  // Schedule next batch if more tasks
  if (tasks.length > 0) {
    requestIdleCallback(callback);
  }
}, { timeout: 1000 });
\`);

console.log("\\nWeb Workers for Heavy Computation:");
console.log(\`
// Offload to background thread
const worker = new Worker('worker.js');

worker.postMessage({ data: largeDataset });

worker.onmessage = (event) => {
  console.log('Result:', event.data);
  // Update UI with result
};

// worker.js
self.onmessage = (event) => {
  const result = expensiveComputation(event.data);
  self.postMessage(result);
};
\`);`}
            />
          </div>
        </section>

        {/* Memory Performance */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💾 Memory Performance
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Memory Leaks Prevention"
              initialCode={`// Common Memory Leak Patterns & Prevention

console.log("1. Event Listener Leaks:");
console.log(\`
// ❌ LEAK: Never removed
element.addEventListener('click', handler);

// ✅ FIX: Remove when done
element.addEventListener('click', handler);
// Later:
element.removeEventListener('click', handler);

// React: cleanup in useEffect
useEffect(() => {
  const handler = () => console.log('resize');
  window.addEventListener('resize', handler);
  
  return () => window.removeEventListener('resize', handler);
}, []);
\`);

console.log("\\n2. Timer Leaks:");
console.log(\`
// ❌ LEAK: Never cleared
const intervalId = setInterval(() => { ... }, 1000);

// ✅ FIX: Clear when done
const intervalId = setInterval(() => { ... }, 1000);
clearInterval(intervalId);

// React cleanup
useEffect(() => {
  const id = setInterval(() => { ... }, 1000);
  return () => clearInterval(id);
}, []);
\`);

console.log("\\n3. Detached DOM Nodes:");
console.log(\`
// ❌ LEAK: Holding references to removed elements
const cache = [];
elements.forEach(el => {
  cache.push(el);
  el.remove(); // Removed from DOM but still in cache!
});

// ✅ FIX: Use WeakMap/WeakSet
const cache = new WeakSet();
elements.forEach(el => {
  cache.add(el);
  el.remove(); // Can be GC'd
});
\`);

console.log("\\n4. Closure Leaks:");
console.log(\`
// ❌ LEAK: Closure keeps large object alive
function createHandler(largeObject) {
  return () => {
    console.log(largeObject.smallProperty);
    // Entire largeObject is kept in memory
  };
}

// ✅ FIX: Extract only what you need
function createHandler(largeObject) {
  const smallValue = largeObject.smallProperty;
  return () => {
    console.log(smallValue);
    // Only smallValue is kept
  };
}
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Object Pooling & Memory Management"
              initialCode={`// Object Pooling - reuse objects

console.log("Object Pool Implementation:");
console.log(\`
class ObjectPool {
  constructor(createFn, resetFn) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
  }
  
  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }
  
  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}

// Usage: particle system
const particlePool = new ObjectPool(
  () => ({ x: 0, y: 0, vx: 0, vy: 0 }),
  (p) => { p.x = 0; p.y = 0; p.vx = 0; p.vy = 0; }
);

// Get particle
const particle = particlePool.acquire();
particle.x = 100;

// Return to pool
particlePool.release(particle);
\`);

console.log("\\nWeakMap for Metadata:");
console.log(\`
// ✅ GOOD: Metadata doesn't prevent GC
const metadata = new WeakMap();

function attachData(element, data) {
  metadata.set(element, data);
  // When element is removed, metadata is GC'd automatically
}

// ❌ BAD: Regular Map prevents GC
const metadata = new Map();
metadata.set(element, data);
// Element can't be GC'd while in map
\`);

console.log("\\nAvoid Accidental Globals:");
console.log(\`
// ❌ Creates global variable
function leak() {
  x = 10; // Forgot 'let/const/var'
}

// ✅ Use strict mode
'use strict';
function safe() {
  x = 10; // Throws error
}
\`);`}
            />
          </div>
        </section>

        {/* Rendering Performance */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎨 Rendering Performance
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Reflow & Repaint Optimization"
              initialCode={`// Minimize Reflow & Repaint

console.log("Reflow (Layout) Triggers:");
console.log("  • Changing element size/position");
console.log("  • Adding/removing elements");
console.log("  • Changing fonts");
console.log("  • Reading layout properties (offsetHeight, etc.)");
console.log("");

console.log("Repaint Triggers:");
console.log("  • Changing colors");
console.log("  • Changing visibility");
console.log("  • Changing background");
console.log("");

console.log("❌ BAD - Layout Thrashing:");
console.log(\`
// Reading and writing in loop causes multiple reflows
for (let i = 0; i < elements.length; i++) {
  const height = elements[i].offsetHeight; // Read (reflow)
  elements[i].style.height = height + 10 + 'px'; // Write (reflow)
}
\`);

console.log("\\n✅ GOOD - Batch Operations:");
console.log(\`
// Batch all reads, then all writes
const heights = [];
for (let i = 0; i < elements.length; i++) {
  heights.push(elements[i].offsetHeight); // Read
}
for (let i = 0; i < elements.length; i++) {
  elements[i].style.height = heights[i] + 10 + 'px'; // Write
}
\`);

console.log("\\n✅ Use DocumentFragment:");
console.log(\`
// ❌ Multiple reflows
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  container.appendChild(div); // Reflow each time
}

// ✅ Single reflow
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  fragment.appendChild(div);
}
container.appendChild(fragment); // Single reflow
\`);

console.log("\\n✅ Use transform/opacity for animations:");
console.log(\`
// ❌ Triggers layout/paint
element.style.left = '100px';
element.style.top = '100px';

// ✅ Composite layer only
element.style.transform = 'translate(100px, 100px)';
element.style.opacity = 0.5;
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="CSS Optimization"
              initialCode={`// CSS Performance Optimization

console.log("will-change Property:");
console.log(\`
.element {
  /* Tell browser to optimize for changes */
  will-change: transform, opacity;
}

// Or dynamically
element.style.willChange = 'transform';
// Perform animation
element.style.transform = 'translateX(100px)';
// Remove after animation
element.style.willChange = 'auto';
\`);

console.log("\\nCSS Containment:");
console.log(\`
.component {
  /* Isolate from rest of page */
  contain: layout style paint;
}

/* Values:
   layout - isolate layout
   style - isolate counters/quotes
   paint - isolate painting
   size - isolate size
   strict - layout + style + paint
   content - layout + style + paint (not size)
*/
\`);

console.log("\\nComposite Layers:");
console.log(\`
.animated {
  /* Force composite layer */
  transform: translateZ(0);
  /* or */
  will-change: transform;
}

/* GPU-accelerated properties:
   • transform
   • opacity
   • filter
   Use these instead of top/left/width/height
*/
\`);

console.log("\\nContent-visibility:");
console.log(\`
.offscreen-content {
  /* Skip rendering until needed */
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
\`);`}
            />
          </div>
        </section>

        {/* Network Performance */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🌐 Network Performance
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Caching Strategies"
              initialCode={`// Caching - reduce network requests

console.log("HTTP Cache Headers:");
console.log(\`
// Immutable resources (with hash in filename)
Cache-Control: public, max-age=31536000, immutable

// Frequently updated resources
Cache-Control: public, max-age=3600, must-revalidate

// No caching
Cache-Control: no-cache, no-store, must-revalidate

// ETag for validation
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"

// Last-Modified
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
\`);

console.log("\\nService Worker Caching:");
console.log(\`
// Cache-first strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Network-first with fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});

// Cache then network (stale-while-revalidate)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('cache').then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    })
  );
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Image & Font Optimization"
              initialCode={`// Image Optimization

console.log("Modern Image Formats:");
console.log(\`
<!-- WebP with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>

<!-- AVIF (even better compression) -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
\`);

console.log("\\nResponsive Images:");
console.log(\`
<!-- srcset for different sizes -->
<img 
  srcset="image-320w.jpg 320w,
          image-640w.jpg 640w,
          image-1280w.jpg 1280w"
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 600px,
         1200px"
  src="image-640w.jpg"
  alt="Description">
\`);

console.log("\\nFont Optimization:");
console.log(\`
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/myfont.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately */
  /* Options: auto, block, swap, fallback, optional */
}

<!-- Preload critical fonts -->
<link rel="preload" href="/font.woff2" as="font" 
      type="font/woff2" crossorigin>
\`);

console.log("\\nCompress Assets:");
console.log("  • Gzip: 70-90% compression");
console.log("  • Brotli: Better than gzip");
console.log("  • Minify JS/CSS");
console.log("  • Remove unused code (tree-shaking)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="HTTP/2, HTTP/3 & CDN"
              initialCode={`// Modern Network Protocols

console.log("HTTP/2 Benefits:");
console.log("  ✓ Multiplexing (multiple requests, one connection)");
console.log("  ✓ Server push");
console.log("  ✓ Header compression");
console.log("  ✓ Binary protocol");
console.log("");

console.log("HTTP/3 (QUIC) Benefits:");
console.log("  ✓ Faster connection setup");
console.log("  ✓ Better on poor networks");
console.log("  ✓ No head-of-line blocking");
console.log("");

console.log("CDN Benefits:");
console.log("  ✓ Geographically distributed");
console.log("  ✓ Edge caching");
console.log("  ✓ DDoS protection");
console.log("  ✓ SSL/TLS termination");
console.log("");

console.log("CDN Configuration:");
console.log(\`
// Static assets on CDN
<script src="https://cdn.example.com/app.js"></script>
<link href="https://cdn.example.com/styles.css">

// Set cache headers
Cache-Control: public, max-age=31536000, immutable
\`);

console.log("\\nResource Bundling:");
console.log("HTTP/1.1:");
console.log("  • Bundle everything (fewer requests)");
console.log("HTTP/2:");
console.log("  • Smaller bundles (parallel loading)");
console.log("  • Route-based splitting");
console.log("");

console.log("Compression:");
console.log(\`
// Server config (Express)
const compression = require('compression');
app.use(compression());

// Or nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
brotli on;
\`);`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Performance Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-lime-400">
                  1. Measure before optimizing
                </strong>
                <p className="ml-4 mt-1">
                  Use Chrome DevTools, Lighthouse, WebPageTest
                </p>
              </div>
              <div>
                <strong className="text-lime-400">
                  2. Optimize for perceived performance
                </strong>
                <p className="ml-4 mt-1">
                  Show content quickly, load rest progressively
                </p>
              </div>
              <div>
                <strong className="text-lime-400">3. Use code splitting</strong>
                <p className="ml-4 mt-1">
                  Load initial bundle fast, lazy load rest
                </p>
              </div>
              <div>
                <strong className="text-lime-400">
                  4. Debounce/throttle expensive operations
                </strong>
                <p className="ml-4 mt-1">
                  Scroll, resize, search input handlers
                </p>
              </div>
              <div>
                <strong className="text-lime-400">
                  5. Use Web Workers for heavy tasks
                </strong>
                <p className="ml-4 mt-1">Keep main thread responsive</p>
              </div>
              <div>
                <strong className="text-lime-400">6. Optimize images</strong>
                <p className="ml-4 mt-1">
                  WebP/AVIF, responsive images, lazy loading
                </p>
              </div>
              <div>
                <strong className="text-lime-400">7. Minimize reflows</strong>
                <p className="ml-4 mt-1">
                  Batch DOM reads/writes, use DocumentFragment
                </p>
              </div>
              <div>
                <strong className="text-lime-400">
                  8. Use transform/opacity for animations
                </strong>
                <p className="ml-4 mt-1">GPU-accelerated, no layout</p>
              </div>
              <div>
                <strong className="text-lime-400">
                  9. Implement proper caching
                </strong>
                <p className="ml-4 mt-1">HTTP cache headers, Service Worker</p>
              </div>
              <div>
                <strong className="text-lime-400">
                  10. Use CDN for static assets
                </strong>
                <p className="ml-4 mt-1">Faster delivery, edge caching</p>
              </div>
              <div>
                <strong className="text-lime-400">
                  11. Monitor for memory leaks
                </strong>
                <p className="ml-4 mt-1">
                  Remove event listeners, clear timers
                </p>
              </div>
              <div>
                <strong className="text-lime-400">12. Compress assets</strong>
                <p className="ml-4 mt-1">Gzip/Brotli for text files</p>
              </div>
              <div>
                <strong className="text-lime-400">
                  13. Use HTTP/2 or HTTP/3
                </strong>
                <p className="ml-4 mt-1">Multiplexing, faster connections</p>
              </div>
              <div>
                <strong className="text-lime-400">
                  14. Implement virtual scrolling for long lists
                </strong>
                <p className="ml-4 mt-1">Render only visible items</p>
              </div>
              <div>
                <strong className="text-lime-400">
                  15. Use Performance API to measure
                </strong>
                <p className="ml-4 mt-1">
                  performance.mark(), performance.measure()
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 30 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>Performance Optimization</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Loading
                </div>
                <div className="text-gray-400">Code Splitting, Lazy Load</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Runtime
                </div>
                <div className="text-gray-400">Debounce, Memoization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Memory
                </div>
                <div className="text-gray-400">Leak Prevention</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Rendering
                </div>
                <div className="text-gray-400">Reflow, Repaint</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-lime-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY - 30 PHASES!
              </p>
              <p className="text-gray-300">
                <strong>30 Phases</strong> • <strong>36 Sections</strong> •{" "}
                <strong>2100+ Concepts</strong> •{" "}
                <strong>1460+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                The Ultimate Professional JavaScript Platform
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-lg font-semibold hover:from-lime-600 hover:to-green-600 transition-all"
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
