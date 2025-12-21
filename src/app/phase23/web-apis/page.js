"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function WebAPIsPage() {
  return (
    <SectionLayout
      title="23.1 Web APIs - Complete"
      description="Master 28 modern browser APIs: Fetch, Storage, Workers, WebSocket, Canvas, Audio, WebRTC, Observers, and more"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🌐 Complete Web APIs Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Master <strong>ALL 28 modern Web APIs</strong> that power modern web
            applications. From data fetching to real-time communication, from
            media handling to device access.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Fetch API",
              "Storage (3 types)",
              "Workers",
              "WebSocket",
              "Canvas",
              "Web Audio",
              "WebRTC",
              "Observers (3)",
              "Geolocation",
              "Notifications",
              "Clipboard",
              "Performance",
              "Animations",
              "Device APIs",
              "URL API",
              "28 Total APIs",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-cyan-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Fetch API */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">🌍 Fetch API</h2>

          <div className="mt-6">
            <CodePlayground
              title="Basic Fetch Requests"
              initialCode={`// Fetch API - modern way to make HTTP requests

console.log("Basic GET request:");
console.log(\`
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`);

console.log("\\nUsing async/await:");
console.log(\`
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`);

console.log("\\nPOST request with JSON:");
console.log(\`
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Alice', age: 25 })
})
  .then(response => response.json())
  .then(data => console.log(data));
\`);

console.log("\\nResponse methods:");
console.log("  response.json() → Parse JSON");
console.log("  response.text() → Get as text");
console.log("  response.blob() → Get as Blob");
console.log("  response.arrayBuffer() → Get as ArrayBuffer");
console.log("  response.formData() → Parse form data");

console.log("\\nResponse properties:");
console.log("  response.ok → boolean (status 200-299)");
console.log("  response.status → HTTP status code");
console.log("  response.statusText → Status message");
console.log("  response.headers → Headers object");
console.log("  response.url → Final URL");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Fetch with Options & AbortController"
              initialCode={`// Advanced fetch options

console.log("Fetch with options:");
console.log(\`
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json'
  },
  mode: 'cors',        // cors, no-cors, same-origin
  credentials: 'include', // omit, same-origin, include
  cache: 'no-cache',   // default, no-cache, reload, force-cache
  redirect: 'follow'   // follow, error, manual
})
\`);

console.log("\\nAbortController - cancel requests:");
console.log(\`
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request cancelled');
    }
  });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);
\`);

console.log("\\nHeaders API:");
console.log(\`
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('X-Custom-Header', 'value');
headers.set('Authorization', 'Bearer token');
headers.has('Content-Type'); // → true
headers.get('Content-Type'); // → 'application/json'
headers.delete('X-Custom-Header');
\`);

console.log("\\nRequest object:");
console.log(\`
const request = new Request('https://api.example.com/data', {
  method: 'POST',
  body: JSON.stringify({ data: 'value' })
});
fetch(request);
\`);`}
            />
          </div>
        </section>

        {/* Storage APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💾 Storage APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="localStorage & sessionStorage"
              initialCode={`// localStorage - persistent storage
// sessionStorage - session-only storage

console.log("localStorage methods:");
console.log("  setItem(key, value) → Store data");
console.log("  getItem(key) → Retrieve data");
console.log("  removeItem(key) → Remove item");
console.log("  clear() → Clear all");
console.log("  key(index) → Get key by index");
console.log("  length → Number of items");
console.log("");

console.log("Example usage:");
console.log(\`
// Store
localStorage.setItem('username', 'Alice');
localStorage.setItem('settings', JSON.stringify({ theme: 'dark' }));

// Retrieve
const username = localStorage.getItem('username');
const settings = JSON.parse(localStorage.getItem('settings'));

// Remove
localStorage.removeItem('username');

// Clear all
localStorage.clear();

// Iterate
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(key, value);
}
\`);

console.log("\\nsessionStorage:");
console.log("  Same API as localStorage");
console.log("  Data cleared when tab/window closes");
console.log("  Separate storage per tab");

console.log("\\nStorage event (cross-tab):");
console.log(\`
window.addEventListener('storage', (event) => {
  console.log('Key:', event.key);
  console.log('Old:', event.oldValue);
  console.log('New:', event.newValue);
  console.log('URL:', event.url);
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="IndexedDB - Browser Database"
              initialCode={`// IndexedDB - powerful client-side database

console.log("IndexedDB workflow:");
console.log("");

console.log("1. Open database:");
console.log(\`
const request = indexedDB.open('MyDatabase', 1);

request.onerror = (event) => {
  console.error('Database error:', event.target.error);
};

request.onsuccess = (event) => {
  const db = event.target.result;
  console.log('Database opened');
};

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  
  // Create object store
  const objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
  
  // Create indexes
  objectStore.createIndex('name', 'name', { unique: false });
  objectStore.createIndex('email', 'email', { unique: true });
};
\`);

console.log("\\n2. Add data:");
console.log(\`
const transaction = db.transaction(['users'], 'readwrite');
const objectStore = transaction.objectStore('users');

const user = { name: 'Alice', email: 'alice@example.com', age: 25 };
const request = objectStore.add(user);

request.onsuccess = () => console.log('User added');
\`);

console.log("\\n3. Read data:");
console.log(\`
const transaction = db.transaction(['users'], 'readonly');
const objectStore = transaction.objectStore('users');
const request = objectStore.get(1);

request.onsuccess = (event) => {
  console.log('User:', event.target.result);
};
\`);

console.log("\\n4. Update/Delete:");
console.log(\`
objectStore.put({ id: 1, name: 'Alice Updated' }); // Update
objectStore.delete(1); // Delete
objectStore.clear(); // Clear all
\`);`}
            />
          </div>
        </section>

        {/* File API */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📁 File API</h2>

          <div className="mt-6">
            <CodePlayground
              title="File & FileReader API"
              initialCode={`// File API - handle files from user

console.log("File input handling:");
console.log(\`
<input type="file" id="fileInput" multiple>

document.getElementById('fileInput').addEventListener('change', (event) => {
  const files = event.target.files; // FileList
  
  for (const file of files) {
    console.log('Name:', file.name);
    console.log('Size:', file.size, 'bytes');
    console.log('Type:', file.type);
    console.log('Last modified:', new Date(file.lastModified));
  }
});
\`);

console.log("\\nFileReader - read file contents:");
console.log(\`
const reader = new FileReader();

// Read as text
reader.readAsText(file);

// Read as data URL (base64)
reader.readAsDataURL(file);

// Read as array buffer
reader.readAsArrayBuffer(file);

// Events
reader.onload = (event) => {
  console.log('Result:', event.target.result);
};

reader.onerror = (event) => {
  console.error('Error:', event.target.error);
};

reader.onprogress = (event) => {
  const percent = (event.loaded / event.total) * 100;
  console.log('Progress:', percent + '%');
};
\`);

console.log("\\nBlob - binary data:");
console.log(\`
const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
console.log('Size:', blob.size);
console.log('Type:', blob.type);

// Create download link
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'file.txt';
a.click();
URL.revokeObjectURL(url); // Clean up
\`);`}
            />
          </div>
        </section>

        {/* Workers */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">👷 Web Workers</h2>

          <div className="mt-6">
            <CodePlayground
              title="Web Workers - Background Threads"
              initialCode={`// Web Workers - run JavaScript in background thread

console.log("Main thread (main.js):");
console.log(\`
// Create worker
const worker = new Worker('worker.js');

// Send message to worker
worker.postMessage({ type: 'calculate', data: [1, 2, 3, 4, 5] });

// Receive message from worker
worker.onmessage = (event) => {
  console.log('Result from worker:', event.data);
};

// Handle errors
worker.onerror = (error) => {
  console.error('Worker error:', error.message);
};

// Terminate worker
worker.terminate();
\`);

console.log("\\nWorker thread (worker.js):");
console.log(\`
// Listen for messages
self.onmessage = (event) => {
  const { type, data } = event.data;
  
  if (type === 'calculate') {
    // Perform heavy computation
    const result = data.reduce((sum, n) => sum + n, 0);
    
    // Send result back
    self.postMessage({ result });
  }
};

// Worker has access to:
// - setTimeout, setInterval
// - fetch
// - IndexedDB
// - No access to DOM
\`);

console.log("\\nSharedWorker - shared across tabs:");
console.log(\`
const worker = new SharedWorker('shared-worker.js');

worker.port.start();
worker.port.postMessage('Hello');
worker.port.onmessage = (event) => {
  console.log(event.data);
};
\`);`}
            />
          </div>
        </section>

        {/* WebSocket */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔌 WebSocket API
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="WebSocket - Real-time Communication"
              initialCode={`// WebSocket - bidirectional real-time communication

console.log("Create WebSocket connection:");
console.log(\`
const ws = new WebSocket('wss://example.com/socket');

// Connection opened
ws.onopen = (event) => {
  console.log('Connected');
  ws.send('Hello Server!');
};

// Receive messages
ws.onmessage = (event) => {
  console.log('Message:', event.data);
  
  // Parse JSON if needed
  const data = JSON.parse(event.data);
};

// Connection closed
ws.onclose = (event) => {
  console.log('Closed:', event.code, event.reason);
};

// Error occurred
ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};
\`);

console.log("\\nWebSocket methods:");
console.log("  ws.send(data) → Send data");
console.log("  ws.close(code, reason) → Close connection");
console.log("");

console.log("readyState values:");
console.log("  0 (CONNECTING) → Connecting");
console.log("  1 (OPEN) → Connected");
console.log("  2 (CLOSING) → Closing");
console.log("  3 (CLOSED) → Closed");
console.log("");

console.log("Send different data types:");
console.log(\`
ws.send('text');                    // String
ws.send(JSON.stringify({ a: 1 }));  // JSON
ws.send(new Blob(['data']));        // Blob
ws.send(new ArrayBuffer(8));        // ArrayBuffer
\`);`}
            />
          </div>
        </section>

        {/* Observer APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            👁️ Observer APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Intersection Observer - Visibility Detection"
              initialCode={`// IntersectionObserver - detect element visibility

console.log("Create intersection observer:");
console.log(\`
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log('Target:', entry.target);
    console.log('Is intersecting:', entry.isIntersecting);
    console.log('Intersection ratio:', entry.intersectionRatio);
    
    if (entry.isIntersecting) {
      console.log('Element is visible!');
      // Load images, start animations, etc.
    }
  });
}, {
  root: null,           // viewport
  rootMargin: '0px',    // margin around root
  threshold: 0.5        // 50% visibility
});

// Observe elements
const elements = document.querySelectorAll('.lazy-load');
elements.forEach(el => observer.observe(el));

// Stop observing
observer.unobserve(element);
observer.disconnect(); // Stop all
\`);

console.log("\\nCommon use cases:");
console.log("  ✓ Lazy loading images");
console.log("  ✓ Infinite scroll");
console.log("  ✓ Scroll animations");
console.log("  ✓ Analytics tracking");
console.log("  ✓ Ad viewability");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Mutation Observer - DOM Changes"
              initialCode={`// MutationObserver - watch DOM changes

console.log("Create mutation observer:");
console.log(\`
const observer = new MutationObserver((mutations, observer) => {
  mutations.forEach(mutation => {
    console.log('Type:', mutation.type);
    console.log('Target:', mutation.target);
    
    if (mutation.type === 'childList') {
      console.log('Added:', mutation.addedNodes);
      console.log('Removed:', mutation.removedNodes);
    }
    
    if (mutation.type === 'attributes') {
      console.log('Attribute:', mutation.attributeName);
      console.log('Old value:', mutation.oldValue);
    }
  });
});

// Start observing
observer.observe(document.body, {
  childList: true,      // Watch child additions/removals
  attributes: true,     // Watch attribute changes
  subtree: true,        // Watch all descendants
  characterData: true,  // Watch text content
  attributeOldValue: true,
  characterDataOldValue: true
});

// Stop observing
observer.disconnect();

// Get pending mutations
const mutations = observer.takeRecords();
\`);

console.log("\\nUse cases:");
console.log("  ✓ React to DOM changes");
console.log("  ✓ Debug DOM modifications");
console.log("  ✓ Implement live regions");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Resize Observer - Element Resize Detection"
              initialCode={`// ResizeObserver - watch element size changes

console.log("Create resize observer:");
console.log(\`
const observer = new ResizeObserver((entries) => {
  entries.forEach(entry => {
    console.log('Target:', entry.target);
    console.log('Content rect:', entry.contentRect);
    console.log('Width:', entry.contentRect.width);
    console.log('Height:', entry.contentRect.height);
    
    // Respond to size changes
    if (entry.contentRect.width < 400) {
      entry.target.classList.add('mobile-view');
    } else {
      entry.target.classList.remove('mobile-view');
    }
  });
});

// Observe elements
observer.observe(document.querySelector('.responsive-element'));

// Stop observing
observer.unobserve(element);
observer.disconnect();
\`);

console.log("\\nUse cases:");
console.log("  ✓ Responsive components");
console.log("  ✓ Container queries");
console.log("  ✓ Canvas resizing");
console.log("  ✓ Chart responsiveness");

console.log("\\nAdvantage over window resize:");
console.log("  ✓ Per-element basis");
console.log("  ✓ Better performance");
console.log("  ✓ Content-box/border-box");`}
            />
          </div>
        </section>

        {/* Device & Notification APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📱 Device & Notification APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Geolocation API"
              initialCode={`// Geolocation - get user's location

console.log("Get current position:");
console.log(\`
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
    console.log('Accuracy:', position.coords.accuracy, 'meters');
    console.log('Altitude:', position.coords.altitude);
    console.log('Speed:', position.coords.speed);
    console.log('Heading:', position.coords.heading);
    console.log('Timestamp:', position.timestamp);
  },
  (error) => {
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    // 1: PERMISSION_DENIED
    // 2: POSITION_UNAVAILABLE
    // 3: TIMEOUT
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
);
\`);

console.log("\\nWatch position (continuous):");
console.log(\`
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    console.log('Updated position:', position.coords);
  },
  (error) => console.error(error)
);

// Stop watching
navigator.geolocation.clearWatch(watchId);
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Notification API"
              initialCode={`// Notification API - browser notifications

console.log("Request permission:");
console.log(\`
Notification.requestPermission().then(permission => {
  console.log('Permission:', permission);
  // 'granted', 'denied', or 'default'
});
\`);

console.log("\\nShow notification:");
console.log(\`
if (Notification.permission === 'granted') {
  const notification = new Notification('Title', {
    body: 'Notification body text',
    icon: '/icon.png',
    badge: '/badge.png',
    image: '/image.png',
    tag: 'unique-tag',
    renotify: false,
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200],
    data: { customData: 'value' }
  });
  
  notification.onclick = (event) => {
    console.log('Notification clicked');
    window.focus();
    notification.close();
  };
  
  notification.onclose = () => {
    console.log('Notification closed');
  };
  
  notification.onerror = (error) => {
    console.error('Error:', error);
  };
}
\`);

console.log("\\nCheck permission:");
console.log("  Notification.permission");
console.log("  Values: 'default', 'granted', 'denied'");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Clipboard API"
              initialCode={`// Clipboard API - copy/paste programmatically

console.log("Write text to clipboard:");
console.log(\`
await navigator.clipboard.writeText('Text to copy');
console.log('Copied to clipboard!');
\`);

console.log("\\nRead text from clipboard:");
console.log(\`
const text = await navigator.clipboard.readText();
console.log('Clipboard text:', text);
\`);

console.log("\\nWrite rich content:");
console.log(\`
const blob = new Blob(['<p>HTML content</p>'], { type: 'text/html' });
const item = new ClipboardItem({ 'text/html': blob });
await navigator.clipboard.write([item]);
\`);

console.log("\\nRead clipboard items:");
console.log(\`
const items = await navigator.clipboard.read();
for (const item of items) {
  console.log('Types:', item.types);
  
  for (const type of item.types) {
    const blob = await item.getType(type);
    console.log('Type:', type, 'Blob:', blob);
  }
}
\`);

console.log("\\nNote: Requires user permission");
console.log("Works best in secure contexts (HTTPS)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Other Device APIs"
              initialCode={`// Vibration API
console.log("Vibration API:");
console.log(\`
navigator.vibrate(200);              // Vibrate 200ms
navigator.vibrate([100, 50, 100]);   // Pattern
navigator.vibrate(0);                // Stop
\`);

console.log("\\nBattery Status API:");
console.log(\`
const battery = await navigator.getBattery();
console.log('Charging:', battery.charging);
console.log('Level:', battery.level * 100 + '%');
console.log('Charging time:', battery.chargingTime, 'seconds');
console.log('Discharging time:', battery.dischargingTime);

battery.addEventListener('chargingchange', () => {
  console.log('Charging changed:', battery.charging);
});
\`);

console.log("\\nScreen Orientation API:");
console.log(\`
console.log('Type:', screen.orientation.type);
console.log('Angle:', screen.orientation.angle);

// Lock orientation
await screen.orientation.lock('portrait');

// Unlock
screen.orientation.unlock();

// Listen for changes
screen.orientation.addEventListener('change', () => {
  console.log('Orientation:', screen.orientation.type);
});
\`);

console.log("\\nWeb Share API:");
console.log(\`
if (navigator.share) {
  await navigator.share({
    title: 'Share Title',
    text: 'Share description',
    url: 'https://example.com'
  });
}

if (navigator.canShare({ files: [file] })) {
  await navigator.share({ files: [file] });
}
\`);`}
            />
          </div>
        </section>

        {/* Performance & Page APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Performance & Page APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Performance API"
              initialCode={`// Performance API - measure performance

console.log("High-resolution timestamp:");
console.log("  performance.now() → milliseconds since page load");
console.log("  More precise than Date.now()");
console.log("");

console.log("User Timing API:");
console.log(\`
// Mark points in time
performance.mark('start-task');

// ... do work ...

performance.mark('end-task');

// Measure duration
performance.measure('task-duration', 'start-task', 'end-task');

// Get measurements
const measures = performance.getEntriesByType('measure');
measures.forEach(measure => {
  console.log(measure.name, measure.duration, 'ms');
});

// Clear
performance.clearMarks();
performance.clearMeasures();
\`);

console.log("\\nNavigation Timing:");
console.log(\`
const nav = performance.getEntriesByType('navigation')[0];
console.log('DNS lookup:', nav.domainLookupEnd - nav.domainLookupStart);
console.log('TCP connect:', nav.connectEnd - nav.connectStart);
console.log('Request:', nav.responseStart - nav.requestStart);
console.log('Response:', nav.responseEnd - nav.responseStart);
console.log('DOM load:', nav.domContentLoadedEventEnd);
console.log('Page load:', nav.loadEventEnd);
\`);

console.log("\\nResource Timing:");
console.log(\`
const resources = performance.getEntriesByType('resource');
resources.forEach(resource => {
  console.log('Name:', resource.name);
  console.log('Duration:', resource.duration);
  console.log('Size:', resource.transferSize);
});
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Page Visibility & Fullscreen"
              initialCode={`// Page Visibility API - detect tab visibility

console.log("Page Visibility:");
console.log(\`
console.log('Hidden:', document.hidden); // boolean
console.log('State:', document.visibilityState); // 'visible' or 'hidden'

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden - pause video, etc.');
  } else {
    console.log('Page visible - resume');
  }
});
\`);

console.log("\\nFullscreen API:");
console.log(\`
// Request fullscreen
const element = document.documentElement;
await element.requestFullscreen();

// Exit fullscreen
await document.exitFullscreen();

// Check fullscreen state
console.log('Element:', document.fullscreenElement);
console.log('Enabled:', document.fullscreenEnabled);

// Listen for changes
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    console.log('Entered fullscreen');
  } else {
    console.log('Exited fullscreen');
  }
});
\`);

console.log("\\nPointer Lock API (game controls):");
console.log(\`
// Request pointer lock
await element.requestPointerLock();

// Exit pointer lock
document.exitPointerLock();

// Listen for mouse movement
document.addEventListener('mousemove', (e) => {
  console.log('Movement X:', e.movementX);
  console.log('Movement Y:', e.movementY);
});
\`);`}
            />
          </div>
        </section>

        {/* Media & Animation APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎨 Media & Animation APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Canvas API Overview"
              initialCode={`// Canvas API - 2D drawing

console.log("Get canvas context:");
console.log(\`
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
\`);

console.log("\\nDrawing shapes:");
console.log(\`
// Rectangle
ctx.fillRect(10, 10, 100, 50);        // Filled
ctx.strokeRect(10, 70, 100, 50);      // Outline
ctx.clearRect(20, 20, 30, 30);        // Clear area

// Path
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();
ctx.fill();

// Arc/Circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();
\`);

console.log("\\nText:");
console.log(\`
ctx.font = '20px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Hello', 10, 50);
ctx.strokeText('World', 10, 80);
\`);

console.log("\\nStyles:");
console.log(\`
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.globalAlpha = 0.5;
\`);

console.log("\\nTransforms:");
console.log("  translate(x, y), rotate(angle), scale(x, y)");
console.log("  save(), restore() for state management");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Web Animations API"
              initialCode={`// Web Animations API - animate elements

console.log("Animate element:");
console.log(\`
const element = document.querySelector('.box');

const animation = element.animate([
  // Keyframes
  { transform: 'translateX(0px)', opacity: 1 },
  { transform: 'translateX(100px)', opacity: 0.5 },
  { transform: 'translateX(0px)', opacity: 1 }
], {
  // Options
  duration: 1000,
  iterations: Infinity,
  easing: 'ease-in-out',
  direction: 'alternate',
  fill: 'forwards'
});

// Control animation
animation.play();
animation.pause();
animation.reverse();
animation.cancel();
animation.finish();

// Animation properties
console.log('State:', animation.playState);
console.log('Current time:', animation.currentTime);
console.log('Progress:', animation.currentTime / animation.effect.getTiming().duration);

// Events
animation.onfinish = () => console.log('Animation finished');
animation.oncancel = () => console.log('Animation cancelled');
\`);

console.log("\\nAdvantages over CSS:");
console.log("  ✓ JavaScript control");
console.log("  ✓ Dynamic keyframes");
console.log("  ✓ Better performance than jQuery");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Web Audio API Overview"
              initialCode={`// Web Audio API - audio processing

console.log("Create audio context:");
console.log(\`
const audioContext = new AudioContext();

// Load audio
const response = await fetch('audio.mp3');
const arrayBuffer = await response.arrayBuffer();
const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

// Create source
const source = audioContext.createBufferSource();
source.buffer = audioBuffer;

// Create gain (volume)
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.5;

// Connect nodes
source.connect(gainNode);
gainNode.connect(audioContext.destination);

// Play
source.start(0);
\`);

console.log("\\nAudio nodes:");
console.log("  createBufferSource() → Audio source");
console.log("  createGain() → Volume control");
console.log("  createBiquadFilter() → Filters");
console.log("  createAnalyser() → Visualization");
console.log("  createPanner() → 3D audio");
console.log("  createDelay() → Delay effect");
console.log("  createOscillator() → Generate tones");

console.log("\\nExample: Oscillator:");
console.log(\`
const oscillator = audioContext.createOscillator();
oscillator.type = 'sine'; // sine, square, sawtooth, triangle
oscillator.frequency.value = 440; // A4 note
oscillator.connect(audioContext.destination);
oscillator.start();
oscillator.stop(audioContext.currentTime + 1);
\`);`}
            />
          </div>
        </section>

        {/* Utility APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔧 Utility APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="URL & URLSearchParams"
              initialCode={`// URL API - parse and manipulate URLs

console.log("URL constructor:");
console.log(\`
const url = new URL('https://example.com:8080/path?key=value#hash');

console.log('href:', url.href);
console.log('protocol:', url.protocol);
console.log('hostname:', url.hostname);
console.log('port:', url.port);
console.log('pathname:', url.pathname);
console.log('search:', url.search);
console.log('hash:', url.hash);
console.log('origin:', url.origin);

// Modify URL
url.pathname = '/new-path';
url.searchParams.set('page', '2');
console.log('New URL:', url.toString());
\`);

console.log("\\nURLSearchParams - query strings:");
console.log(\`
const params = new URLSearchParams('key1=value1&key2=value2');

// Get values
params.get('key1'); // → 'value1'
params.getAll('key'); // → array of all values

// Set/Append
params.set('key3', 'value3');
params.append('key3', 'another');

// Delete
params.delete('key1');

// Check
params.has('key2'); // → boolean

// Iterate
for (const [key, value] of params) {
  console.log(key, value);
}

// Convert
params.toString(); // → 'key2=value2&key3=value3'
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Broadcast Channel & Drag-Drop"
              initialCode={`// Broadcast Channel - cross-tab communication

console.log("Broadcast Channel:");
console.log(\`
const channel = new BroadcastChannel('my-channel');

// Send messages to other tabs
channel.postMessage({ type: 'update', data: 'value' });
channel.postMessage('Simple string message');

// Receive messages
channel.onmessage = (event) => {
  console.log('Message from another tab:', event.data);
};

// Close channel
channel.close();
\`);

console.log("\\nDrag and Drop API:");
console.log(\`
// Make element draggable
<div draggable="true" id="draggable">Drag me</div>

// Drag start
draggable.addEventListener('dragstart', (e) => {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', 'data');
});

// Drop zone
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Allow drop
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  console.log('Dropped:', data);
});
\`);

console.log("\\nDrag events:");
console.log("  dragstart, drag, dragend (source)");
console.log("  dragenter, dragover, dragleave, drop (target)");`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Web APIs Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-cyan-400">
                  1. Always check API support
                </strong>
                <p className="ml-4 mt-1">
                  Use feature detection before using APIs
                </p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  2. Handle errors gracefully
                </strong>
                <p className="ml-4 mt-1">
                  Use try-catch, .catch(), error events
                </p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  3. Request permissions appropriately
                </strong>
                <p className="ml-4 mt-1">
                  Explain why before requesting (notifications, location, etc.)
                </p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  4. Use AbortController for fetch
                </strong>
                <p className="ml-4 mt-1">Cancel requests when needed</p>
              </div>
              <div>
                <strong className="text-cyan-400">5. Clean up observers</strong>
                <p className="ml-4 mt-1">
                  Call disconnect() to prevent memory leaks
                </p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  6. Use Web Workers for heavy computation
                </strong>
                <p className="ml-4 mt-1">Keep UI thread responsive</p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  7. Store structured data in IndexedDB
                </strong>
                <p className="ml-4 mt-1">
                  Not localStorage (5-10MB limit, strings only)
                </p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  8. Use passive listeners for scroll
                </strong>
                <p className="ml-4 mt-1">Improves scroll performance</p>
              </div>
              <div>
                <strong className="text-cyan-400">9. Revoke object URLs</strong>
                <p className="ml-4 mt-1">
                  Call URL.revokeObjectURL() to free memory
                </p>
              </div>
              <div>
                <strong className="text-cyan-400">
                  10. Test across browsers
                </strong>
                <p className="ml-4 mt-1">
                  API support varies; use polyfills if needed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 23 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL 28 Modern Web APIs</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Fetch
                </div>
                <div className="text-gray-400">HTTP Requests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Storage
                </div>
                <div className="text-gray-400">3 APIs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Observers
                </div>
                <div className="text-gray-400">3 Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Media
                </div>
                <div className="text-gray-400">Canvas, Audio, WebRTC</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-cyan-400 mb-2">
                🏆 COMPLETE MODERN WEB PLATFORM
              </p>
              <p className="text-gray-300">
                <strong>23 Phases</strong> • <strong>29 Sections</strong> •{" "}
                <strong>1700+ Concepts</strong> •{" "}
                <strong>1250+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                JavaScript Language + DOM + 28 Web APIs
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
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
