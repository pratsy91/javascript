"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function DOMAPIPage() {
  return (
    <SectionLayout
      title="22.1 DOM API - Complete"
      description="Master Document, Element, Node, Events, Window, Location, History, Navigator APIs"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🌐 Complete DOM API Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            The Document Object Model (DOM) is the browser's API for HTML/XML
            documents. This section covers <strong>EVERYTHING</strong> about DOM
            manipulation, events, and browser APIs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "Document (40+ methods)",
              "Element (80+ methods)",
              "Node Interface",
              "Events (80+ types)",
              "Window Object",
              "Location API",
              "History API",
              "Navigator API",
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

        {/* Document Object */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📄 Document Object
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Document Selection Methods"
              initialCode={`// Note: DOM methods shown conceptually (browser environment)

console.log("Document Selection Methods:");
console.log("");

// 1. getElementById() - single element by ID
console.log("getElementById('myId')");
console.log("  Returns: element or null");
console.log("");

// 2. getElementsByClassName() - live HTMLCollection
console.log("getElementsByClassName('class-name')");
console.log("  Returns: HTMLCollection (live)");
console.log("");

// 3. getElementsByTagName() - live HTMLCollection
console.log("getElementsByTagName('div')");
console.log("  Returns: HTMLCollection (live)");
console.log("");

// 4. getElementsByName() - NodeList
console.log("getElementsByName('field-name')");
console.log("  Returns: NodeList");
console.log("");

// 5. querySelector() - first match
console.log("querySelector('.class')");
console.log("querySelector('#id')");
console.log("querySelector('div > p')");
console.log("  Returns: element or null");
console.log("");

// 6. querySelectorAll() - all matches
console.log("querySelectorAll('.items')");
console.log("  Returns: NodeList (static, not live)");
console.log("");

console.log("Live vs Static:");
console.log("  getElementsBy* → Live (updates automatically)");
console.log("  querySelector* → Static (snapshot)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Document Creation Methods"
              initialCode={`// Document creation methods (conceptual)

console.log("Document Creation Methods:");
console.log("");

// 1. createElement(tagName)
console.log("const div = document.createElement('div');");
console.log("div.textContent = 'Hello';");
console.log("");

// 2. createTextNode(data)
console.log("const text = document.createTextNode('Text content');");
console.log("");

// 3. createComment(data)
console.log("const comment = document.createComment('HTML comment');");
console.log("");

// 4. createDocumentFragment()
console.log("const fragment = document.createDocumentFragment();");
console.log("// Build DOM in fragment (better performance)");
console.log("fragment.appendChild(element1);");
console.log("fragment.appendChild(element2);");
console.log("document.body.appendChild(fragment);");
console.log("");

// 5. createAttribute(name)
console.log("const attr = document.createAttribute('data-id');");
console.log("attr.value = '123';");
console.log("");

// Usage example
console.log("Practical Example:");
console.log("const ul = document.createElement('ul');");
console.log("for (let i = 0; i < 3; i++) {");
console.log("  const li = document.createElement('li');");
console.log("  li.textContent = 'Item ' + i;");
console.log("  ul.appendChild(li);");
console.log("}");
console.log("document.body.appendChild(ul);");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Document Properties"
              initialCode={`// Document properties (conceptual)

console.log("Key Document Properties:");
console.log("");

console.log("document.documentElement → <html> element");
console.log("document.head → <head> element");
console.log("document.body → <body> element");
console.log("document.title → page title");
console.log("");

console.log("document.URL → full URL");
console.log("document.domain → domain name");
console.log("document.referrer → referring page");
console.log("document.lastModified → last modified date");
console.log("document.readyState → 'loading'|'interactive'|'complete'");
console.log("");

console.log("document.activeElement → currently focused element");
console.log("document.forms → HTMLCollection of forms");
console.log("document.images → HTMLCollection of images");
console.log("document.links → HTMLCollection of links");
console.log("document.scripts → HTMLCollection of scripts");
console.log("");

// In actual browser:
if (typeof document !== "undefined") {
  console.log("Actual values:");
  console.log("  readyState:", document.readyState);
  console.log("  title:", document.title);
} else {
  console.log("(Running in non-browser environment)");
}`}
            />
          </div>
        </section>

        {/* Element Interface */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🏗️ Element Interface
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Element Attributes"
              initialCode={`// Element attribute methods (conceptual)

console.log("Element Attribute Methods:");
console.log("");

console.log("// Get attribute");
console.log("element.getAttribute('id')");
console.log("element.getAttribute('class')");
console.log("element.getAttribute('data-value')");
console.log("");

console.log("// Set attribute");
console.log("element.setAttribute('id', 'myId')");
console.log("element.setAttribute('class', 'btn')");
console.log("element.setAttribute('data-value', '123')");
console.log("");

console.log("// Has attribute");
console.log("element.hasAttribute('id') → boolean");
console.log("");

console.log("// Remove attribute");
console.log("element.removeAttribute('class')");
console.log("");

console.log("// Toggle attribute (boolean attributes)");
console.log("element.toggleAttribute('disabled')");
console.log("element.toggleAttribute('hidden', true)");
console.log("");

console.log("// Get all attribute names");
console.log("element.getAttributeNames() → ['id', 'class', ...]");
console.log("");

console.log("Direct property access:");
console.log("  element.id = 'myId'");
console.log("  element.className = 'btn'");
console.log("  element.title = 'Tooltip'");
console.log("  element.href = 'https://...'");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Element classList"
              initialCode={`// classList - DOMTokenList for class manipulation

console.log("classList Methods:");
console.log("");

console.log("// Add classes");
console.log("element.classList.add('active')");
console.log("element.classList.add('btn', 'btn-primary')");
console.log("");

console.log("// Remove classes");
console.log("element.classList.remove('active')");
console.log("element.classList.remove('btn', 'btn-primary')");
console.log("");

console.log("// Toggle class");
console.log("element.classList.toggle('active')");
console.log("element.classList.toggle('visible', true)"); // Force add
console.log("element.classList.toggle('visible', false)"); // Force remove
console.log("");

console.log("// Check if has class");
console.log("element.classList.contains('active') → boolean");
console.log("");

console.log("// Replace class");
console.log("element.classList.replace('old-class', 'new-class')");
console.log("");

console.log("// Get class by index");
console.log("element.classList.item(0) → first class");
console.log("");

console.log("// Iterate classes");
console.log("element.classList.forEach(className => {");
console.log("  console.log(className);");
console.log("});");
console.log("");

console.log("Practical example:");
console.log("button.classList.add('btn', 'btn-primary');");
console.log("button.classList.toggle('disabled');");
console.log("if (button.classList.contains('active')) { ... }");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Element Manipulation"
              initialCode={`// Element manipulation methods

console.log("DOM Manipulation:");
console.log("");

console.log("// Append child (old way)");
console.log("parent.appendChild(child)");
console.log("");

console.log("// Modern append (can add multiple, text)");
console.log("parent.append(child1, child2, 'text')");
console.log("");

console.log("// Prepend");
console.log("parent.prepend(child1, child2)");
console.log("");

console.log("// Insert before");
console.log("parent.insertBefore(newNode, referenceNode)");
console.log("");

console.log("// Insert adjacent");
console.log("element.insertAdjacentElement('beforebegin', el)");
console.log("element.insertAdjacentHTML('afterbegin', '<div></div>')");
console.log("element.insertAdjacentText('beforeend', 'text')");
console.log("// Positions: beforebegin, afterbegin, beforeend, afterend");
console.log("");

console.log("// Remove");
console.log("element.remove() // Remove self");
console.log("parent.removeChild(child) // Remove child");
console.log("");

console.log("// Replace");
console.log("element.replaceWith(newElement)");
console.log("parent.replaceChild(newChild, oldChild)");
console.log("parent.replaceChildren(child1, child2) // Replace all");
console.log("");

console.log("// Clone");
console.log("element.cloneNode(false) // Shallow");
console.log("element.cloneNode(true) // Deep (with children)");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Element Properties & Dimensions"
              initialCode={`// Element content properties

console.log("Content Properties:");
console.log("");
console.log("element.innerHTML // HTML content (can parse)");
console.log("element.outerHTML // Element + its HTML");
console.log("element.textContent // Text only (no HTML)");
console.log("element.innerText // Rendered text (respects CSS)");
console.log("");

console.log("Size Properties:");
console.log("");
console.log("element.clientWidth // Width (excluding scrollbar)");
console.log("element.clientHeight // Height (excluding scrollbar)");
console.log("element.scrollWidth // Total width (with overflow)");
console.log("element.scrollHeight // Total height (with overflow)");
console.log("element.offsetWidth // Width (including border)");
console.log("element.offsetHeight // Height (including border)");
console.log("");

console.log("Position Properties:");
console.log("");
console.log("element.offsetTop // Top relative to offsetParent");
console.log("element.offsetLeft // Left relative to offsetParent");
console.log("element.offsetParent // Positioned ancestor");
console.log("");

console.log("Scroll Properties:");
console.log("");
console.log("element.scrollTop // Vertical scroll position");
console.log("element.scrollLeft // Horizontal scroll position");
console.log("");

console.log("getBoundingClientRect():");
console.log("  Returns: { top, right, bottom, left, width, height, x, y }");
console.log("  Relative to viewport");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Element Traversal & Matching"
              initialCode={`// Traversing the DOM

console.log("Element Relationships:");
console.log("");

console.log("// Parent");
console.log("element.parentNode // Parent node");
console.log("element.parentElement // Parent element");
console.log("");

console.log("// Children");
console.log("element.children // HTMLCollection of element children");
console.log("element.childNodes // NodeList of all child nodes");
console.log("element.firstChild // First child node");
console.log("element.lastChild // Last child node");
console.log("element.firstElementChild // First child element");
console.log("element.lastElementChild // Last child element");
console.log("element.childElementCount // Number of child elements");
console.log("");

console.log("// Siblings");
console.log("element.nextSibling // Next node");
console.log("element.previousSibling // Previous node");
console.log("element.nextElementSibling // Next element");
console.log("element.previousElementSibling // Previous element");
console.log("");

console.log("Matching Methods:");
console.log("");
console.log("// Check if matches selector");
console.log("element.matches('.active') → boolean");
console.log("");

console.log("// Find closest ancestor matching selector");
console.log("element.closest('.container')");
console.log("element.closest('div') // Can match self");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Element Scroll Methods"
              initialCode={`// Scroll methods

console.log("Scroll Methods:");
console.log("");

console.log("// Scroll to position");
console.log("element.scrollTo(0, 100)");
console.log("element.scrollTo({ top: 100, behavior: 'smooth' })");
console.log("");

console.log("// Scroll by amount");
console.log("element.scrollBy(0, 50)");
console.log("element.scrollBy({ top: 50, behavior: 'smooth' })");
console.log("");

console.log("// Scroll element into view");
console.log("element.scrollIntoView()");
console.log("element.scrollIntoView({ behavior: 'smooth', block: 'center' })");
console.log("");

console.log("Options:");
console.log("  behavior: 'auto' | 'smooth'");
console.log("  block: 'start' | 'center' | 'end' | 'nearest'");
console.log("  inline: 'start' | 'center' | 'end' | 'nearest'");
console.log("");

console.log("Practical:");
console.log("// Smooth scroll to top");
console.log("window.scrollTo({ top: 0, behavior: 'smooth' });");
console.log("");
console.log("// Scroll element into view");
console.log("document.querySelector('#section').scrollIntoView({");
console.log("  behavior: 'smooth',");
console.log("  block: 'start'");
console.log("});");`}
            />
          </div>
        </section>

        {/* Event System */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚡ Event System
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="addEventListener & Event Handling"
              initialCode={`// Event handling (conceptual)

console.log("addEventListener(type, listener, options)");
console.log("");

console.log("// Basic");
console.log("element.addEventListener('click', (event) => {");
console.log("  console.log('Clicked!', event);");
console.log("});");
console.log("");

console.log("// With options");
console.log("element.addEventListener('click', handler, {");
console.log("  once: true,      // Auto-remove after first call");
console.log("  passive: true,   // Won't call preventDefault()");
console.log("  capture: false   // Use bubbling phase");
console.log("});");
console.log("");

console.log("// Remove listener");
console.log("element.removeEventListener('click', handler);");
console.log("");

console.log("// Dispatch custom event");
console.log("const event = new CustomEvent('custom', {");
console.log("  detail: { data: 'value' }");
console.log("});");
console.log("element.dispatchEvent(event);");
console.log("");

console.log("Event Properties:");
console.log("  event.type → event name");
console.log("  event.target → element that triggered event");
console.log("  event.currentTarget → element with listener");
console.log("  event.preventDefault() → prevent default action");
console.log("  event.stopPropagation() → stop bubbling");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Common Event Types"
              initialCode={`// Common DOM events

console.log("Mouse Events:");
console.log("  click, dblclick, mousedown, mouseup");
console.log("  mousemove, mouseover, mouseout");
console.log("  mouseenter, mouseleave, contextmenu, wheel");
console.log("");

console.log("Keyboard Events:");
console.log("  keydown, keyup");
console.log("  (keypress is deprecated)");
console.log("");

console.log("Form Events:");
console.log("  submit, change, input, focus, blur");
console.log("  focusin, focusout, reset, invalid");
console.log("");

console.log("Window Events:");
console.log("  load, unload, beforeunload");
console.log("  DOMContentLoaded, resize, scroll");
console.log("  error, online, offline");
console.log("");

console.log("Drag Events:");
console.log("  drag, dragstart, dragend");
console.log("  dragenter, dragleave, dragover, drop");
console.log("");

console.log("Touch Events (mobile):");
console.log("  touchstart, touchmove, touchend, touchcancel");
console.log("");

console.log("Pointer Events (unified):");
console.log("  pointerdown, pointermove, pointerup");
console.log("  pointerover, pointerout, pointercancel");
console.log("");

console.log("Media Events:");
console.log("  play, pause, ended, volumechange");
console.log("  timeupdate, loadeddata, canplay");
console.log("");

console.log("Animation/Transition:");
console.log("  animationstart, animationend, animationiteration");
console.log("  transitionstart, transitionend");`}
            />
          </div>
        </section>

        {/* Window Object */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🪟 Window Object
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Window Properties & Methods"
              initialCode={`// Window object (conceptual)

console.log("Window Dimensions:");
console.log("  window.innerWidth → viewport width");
console.log("  window.innerHeight → viewport height");
console.log("  window.outerWidth → browser window width");
console.log("  window.outerHeight → browser window height");
console.log("");

console.log("Scroll Position:");
console.log("  window.scrollX / window.pageXOffset");
console.log("  window.scrollY / window.pageYOffset");
console.log("");

console.log("Window Methods:");
console.log("  window.alert('message')");
console.log("  window.confirm('question') → boolean");
console.log("  window.prompt('question', 'default') → string|null");
console.log("");

console.log("Navigation:");
console.log("  window.open(url, target, features)");
console.log("  window.close()");
console.log("  window.focus()");
console.log("  window.blur()");
console.log("  window.print()");
console.log("");

console.log("Timers:");
console.log("  setTimeout(callback, delay, ...args)");
console.log("  clearTimeout(id)");
console.log("  setInterval(callback, delay, ...args)");
console.log("  clearInterval(id)");
console.log("");

console.log("Animation:");
console.log("  requestAnimationFrame(callback)");
console.log("  cancelAnimationFrame(id)");
console.log("  requestIdleCallback(callback, options)");
console.log("  cancelIdleCallback(id)");
console.log("");

console.log("Other:");
console.log("  window.getComputedStyle(element)");
console.log("  window.matchMedia('(max-width: 768px)')");
console.log("  window.getSelection()");`}
            />
          </div>
        </section>

        {/* Location & History */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🧭 Location & History APIs
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Location Object"
              initialCode={`// Location API for URL manipulation

console.log("Location Properties:");
console.log("");

console.log("location.href → full URL");
console.log("location.protocol → 'http:' or 'https:'");
console.log("location.host → 'example.com:8080'");
console.log("location.hostname → 'example.com'");
console.log("location.port → '8080'");
console.log("location.pathname → '/path/to/page'");
console.log("location.search → '?param=value'");
console.log("location.hash → '#section'");
console.log("location.origin → 'https://example.com'");
console.log("");

console.log("Location Methods:");
console.log("");

console.log("// Navigate to URL (adds to history)");
console.log("location.assign('https://example.com')");
console.log("");

console.log("// Replace current page (no history)");
console.log("location.replace('https://example.com')");
console.log("");

console.log("// Reload page");
console.log("location.reload()");
console.log("location.reload(true) // Force reload from server");
console.log("");

console.log("Practical:");
console.log("// Get query params");
console.log("const params = new URLSearchParams(location.search);");
console.log("const id = params.get('id');");
console.log("");
console.log("// Change hash");
console.log("location.hash = '#new-section';");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="History API"
              initialCode={`// History API for SPA navigation

console.log("History Properties:");
console.log("  history.length → number of entries");
console.log("  history.state → current state object");
console.log("  history.scrollRestoration → 'auto' | 'manual'");
console.log("");

console.log("History Methods:");
console.log("");

console.log("// Navigate");
console.log("history.back() // Go back one page");
console.log("history.forward() // Go forward one page");
console.log("history.go(-2) // Go back 2 pages");
console.log("history.go(1) // Go forward 1 page");
console.log("");

console.log("// Manipulate history (SPA)");
console.log("history.pushState(state, title, url)");
console.log("  // Adds new history entry");
console.log("");
console.log("history.replaceState(state, title, url)");
console.log("  // Replace current entry");
console.log("");

console.log("Practical SPA example:");
console.log("// Navigate without page reload");
console.log("function navigate(url, state) {");
console.log("  history.pushState(state, '', url);");
console.log("  // Update page content");
console.log("  renderPage(state);");
console.log("}");
console.log("");
console.log("// Listen for back/forward");
console.log("window.addEventListener('popstate', (event) => {");
console.log("  renderPage(event.state);");
console.log("});");
console.log("");

console.log("Modern frameworks (React Router, Vue Router)");
console.log("use History API for client-side routing");`}
            />
          </div>
        </section>

        {/* Navigator */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🧭 Navigator Object
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Navigator Properties & Methods"
              initialCode={`// Navigator - browser/device information

console.log("Navigator Properties:");
console.log("");

console.log("navigator.userAgent → browser string");
console.log("navigator.language → 'en-US'");
console.log("navigator.languages → ['en-US', 'en']");
console.log("navigator.onLine → boolean (network status)");
console.log("navigator.cookieEnabled → boolean");
console.log("navigator.platform → 'Win32', 'MacIntel', etc.");
console.log("navigator.hardwareConcurrency → CPU cores");
console.log("navigator.maxTouchPoints → touch support");
console.log("");

console.log("Navigator APIs:");
console.log("");

console.log("// Geolocation");
console.log("navigator.geolocation.getCurrentPosition(success, error)");
console.log("navigator.geolocation.watchPosition(success, error)");
console.log("");

console.log("// Clipboard");
console.log("await navigator.clipboard.writeText('text')");
console.log("await navigator.clipboard.readText()");
console.log("");

console.log("// Share API");
console.log("await navigator.share({");
console.log("  title: 'Title',");
console.log("  text: 'Description',");
console.log("  url: 'https://example.com'");
console.log("});");
console.log("");

console.log("// Vibration API");
console.log("navigator.vibrate(200) // Vibrate 200ms");
console.log("navigator.vibrate([100, 50, 100]) // Pattern");
console.log("");

console.log("// Send Beacon (analytics)");
console.log("navigator.sendBeacon('/analytics', data);");
console.log("");

console.log("// Service Worker");
console.log("await navigator.serviceWorker.register('/sw.js');");`}
            />
          </div>
        </section>

        {/* Storage APIs */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            💾 Web Storage API
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="localStorage & sessionStorage"
              initialCode={`// localStorage - persistent storage
// sessionStorage - session-only storage

console.log("Web Storage Methods:");
console.log("");

console.log("// Set item");
console.log("localStorage.setItem('key', 'value')");
console.log("localStorage.setItem('user', JSON.stringify({ name: 'Alice' }))");
console.log("");

console.log("// Get item");
console.log("const value = localStorage.getItem('key')");
console.log("const user = JSON.parse(localStorage.getItem('user'))");
console.log("");

console.log("// Remove item");
console.log("localStorage.removeItem('key')");
console.log("");

console.log("// Clear all");
console.log("localStorage.clear()");
console.log("");

console.log("// Check if key exists");
console.log("const exists = localStorage.getItem('key') !== null");
console.log("");

console.log("// Get number of items");
console.log("const count = localStorage.length");
console.log("");

console.log("// Get key by index");
console.log("const key = localStorage.key(0)");
console.log("");

console.log("Iterate all items:");
console.log("for (let i = 0; i < localStorage.length; i++) {");
console.log("  const key = localStorage.key(i);");
console.log("  const value = localStorage.getItem(key);");
console.log("  console.log(key, value);");
console.log("}");
console.log("");

console.log("Differences:");
console.log("localStorage → Persists across sessions");
console.log("sessionStorage → Cleared when tab closes");
console.log("Both → 5-10MB limit per origin");`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ DOM API Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-green-400">
                  1. Use querySelector instead of getElementById
                </strong>
                <p className="ml-4 mt-1">More flexible, consistent API</p>
              </div>
              <div>
                <strong className="text-green-400">2. Cache DOM queries</strong>
                <p className="ml-4 mt-1">
                  Don't query the same element repeatedly
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  3. Use classList instead of className
                </strong>
                <p className="ml-4 mt-1">Easier to add/remove/toggle classes</p>
              </div>
              <div>
                <strong className="text-green-400">
                  4. Use DocumentFragment for batch DOM updates
                </strong>
                <p className="ml-4 mt-1">
                  Better performance than multiple appendChild calls
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  5. Prefer textContent over innerHTML for text
                </strong>
                <p className="ml-4 mt-1">Faster and prevents XSS attacks</p>
              </div>
              <div>
                <strong className="text-green-400">
                  6. Use event delegation
                </strong>
                <p className="ml-4 mt-1">
                  Attach listener to parent instead of many children
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  7. Remove event listeners when done
                </strong>
                <p className="ml-4 mt-1">Prevent memory leaks</p>
              </div>
              <div>
                <strong className="text-green-400">
                  8. Use passive: true for scroll/touch listeners
                </strong>
                <p className="ml-4 mt-1">Improves scroll performance</p>
              </div>
              <div>
                <strong className="text-green-400">
                  9. Minimize reflows and repaints
                </strong>
                <p className="ml-4 mt-1">
                  Batch DOM changes, use transforms for animations
                </p>
              </div>
              <div>
                <strong className="text-green-400">
                  10. Store objects as JSON in localStorage
                </strong>
                <p className="ml-4 mt-1">localStorage only stores strings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 22 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>ALL DOM APIs</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Document
                </div>
                <div className="text-gray-400">40+ methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Element
                </div>
                <div className="text-gray-400">80+ methods</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Events
                </div>
                <div className="text-gray-400">80+ types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Browser
                </div>
                <div className="text-gray-400">Window, Location, History</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-green-400 mb-2">
                🏆 COMPLETE JAVASCRIPT + DOM PLATFORM
              </p>
              <p className="text-gray-300">
                <strong>22 Phases</strong> • <strong>28 Sections</strong> •{" "}
                <strong>1600+ Concepts</strong> •{" "}
                <strong>1200+ Examples</strong>
              </p>
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
