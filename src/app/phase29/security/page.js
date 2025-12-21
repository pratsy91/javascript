"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function SecurityPage() {
  return (
    <SectionLayout
      title="29.1 Security - Complete"
      description="Master XSS, CSRF, CSP, authentication, authorization, OWASP Top 10, and all web security best practices"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔒 Complete Web Security Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Master <strong>web security fundamentals</strong>: XSS, CSRF,
            injection attacks, authentication, authorization, and the{" "}
            <strong>OWASP Top 10</strong>. Learn to build secure JavaScript
            applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "XSS Prevention",
              "CSRF Protection",
              "CSP",
              "CORS",
              "Authentication",
              "Authorization",
              "JWT",
              "OAuth",
              "Injection Attacks",
              "Sanitization",
              "OWASP Top 10",
              "Secure Cookies",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-rose-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Common Attacks */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚠️ Common Web Attacks
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="XSS (Cross-Site Scripting) - Attack & Prevention"
              initialCode={`// XSS - injecting malicious scripts

console.log("XSS Attack Examples:");

console.log("\\n1. Reflected XSS:");
console.log(\`
// ❌ VULNERABLE CODE:
const userInput = new URLSearchParams(window.location.search).get('q');
document.getElementById('result').innerHTML = userInput;

// Attack URL:
// ?q=<script>alert('XSS')</script>
// ?q=<img src=x onerror="alert('XSS')">
\`);

console.log("\\n2. Stored XSS:");
console.log(\`
// ❌ VULNERABLE: Storing unescaped user input
const comment = req.body.comment;
db.save(comment); // Stores: <script>alert('XSS')</script>

// Later, when displaying:
res.send(\`<div>\${comment}</div>\`); // Executes script!
\`);

console.log("\\n3. DOM-based XSS:");
console.log(\`
// ❌ VULNERABLE:
const hash = window.location.hash.substring(1);
document.write(hash);
\`);

console.log("\\n✅ PREVENTION:");
console.log(\`
// 1. Escape user input
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// 2. Use textContent instead of innerHTML
element.textContent = userInput; // Safe
element.innerHTML = userInput;   // Dangerous!

// 3. Use DOMPurify library
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirty);

// 4. Content Security Policy (CSP)
// Set HTTP header:
// Content-Security-Policy: default-src 'self'

// 5. Use frameworks that escape by default
// React, Vue, Angular escape by default
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="CSRF (Cross-Site Request Forgery) - Attack & Prevention"
              initialCode={`// CSRF - unauthorized actions on behalf of user

console.log("CSRF Attack Example:");
console.log(\`
// User logged into bank.com
// Attacker sends email with:
<img src="https://bank.com/transfer?to=attacker&amount=1000">

// Or malicious website with:
<form action="https://bank.com/transfer" method="POST">
  <input name="to" value="attacker">
  <input name="amount" value="1000">
</form>
<script>document.forms[0].submit();</script>

// Browser sends cookies automatically!
// Bank thinks it's legitimate request
\`);

console.log("\\n✅ PREVENTION:");

console.log("\\n1. CSRF Tokens:");
console.log(\`
// Server generates unique token per session
// Include in forms
<input type="hidden" name="_csrf" value="{token}">

// Server validates token matches session
if (req.body._csrf !== req.session.csrfToken) {
  return res.status(403).send('Invalid CSRF token');
}
\`);

console.log("\\n2. SameSite Cookies:");
console.log(\`
// Set cookie with SameSite attribute
res.cookie('session', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' // or 'lax'
});

// strict: Only same-site requests
// lax: Same-site + top-level navigation
// none: All requests (requires secure)
\`);

console.log("\\n3. Double Submit Cookie:");
console.log(\`
// Set CSRF token in cookie AND require in header
res.cookie('csrf-token', token);

// Client sends in header
fetch('/api', {
  headers: {
    'X-CSRF-Token': getCookie('csrf-token')
  }
});
\`);

console.log("\\n4. Custom Headers:");
console.log(\`
// Require custom header for state-changing requests
fetch('/api/delete', {
  method: 'DELETE',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});
// Simple forms can't set custom headers
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Injection Attacks - SQL, Code, Command"
              initialCode={`// Injection Attacks

console.log("SQL Injection:");
console.log(\`
// ❌ VULNERABLE:
const query = \`SELECT * FROM users WHERE id = \${userId}\`;
db.query(query);

// Attack: userId = "1 OR 1=1"
// Query becomes: SELECT * FROM users WHERE id = 1 OR 1=1
// Returns all users!

// ✅ PREVENTION - Parameterized queries:
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// Or with ORM:
User.findById(userId); // Safe
\`);

console.log("\\nCode Injection:");
console.log(\`
// ❌ NEVER use eval() with user input:
eval(userInput); // Can execute ANY code!

// ❌ AVOID:
new Function(userInput)();
setTimeout(userInput, 1000);
setInterval(userInput, 1000);

// ✅ SAFE alternatives:
JSON.parse(userInput); // For data only
// Use proper parsers for specific formats
\`);

console.log("\\nCommand Injection:");
console.log(\`
// ❌ VULNERABLE:
const { exec } = require('child_process');
exec(\`ls \${userInput}\`); // Dangerous!

// Attack: userInput = "; rm -rf /"

// ✅ PREVENTION:
// 1. Avoid exec entirely
// 2. Use execFile with array args
execFile('ls', [userInput], callback);

// 3. Whitelist allowed values
const allowed = ['opt1', 'opt2'];
if (!allowed.includes(userInput)) throw new Error();
\`);`}
            />
          </div>
        </section>

        {/* Security Headers & Policies */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🛡️ Security Headers & Policies
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Content Security Policy (CSP)"
              initialCode={`// CSP - control resource loading

console.log("CSP Header:");
console.log(\`
// Set HTTP header:
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
\`);

console.log("\\nCSP Directives:");
console.log("  default-src    → Fallback for other directives");
console.log("  script-src     → JavaScript sources");
console.log("  style-src      → CSS sources");
console.log("  img-src        → Image sources");
console.log("  connect-src    → AJAX, WebSocket sources");
console.log("  font-src       → Font sources");
console.log("  object-src     → <object>, <embed> sources");
console.log("  media-src      → <audio>, <video> sources");
console.log("  frame-src      → <iframe> sources");
console.log("");

console.log("CSP Values:");
console.log("  'self'         → Same origin");
console.log("  'none'         → Block all");
console.log("  'unsafe-inline'→ Allow inline scripts/styles");
console.log("  'unsafe-eval'  → Allow eval()");
console.log("  https:         → HTTPS sources only");
console.log("  nonce-{random} → Specific inline scripts");
console.log("");

console.log("Using nonce for inline scripts:");
console.log(\`
// Server generates random nonce
const nonce = generateRandomNonce();

// CSP header
Content-Security-Policy: script-src 'self' 'nonce-abc123'

// HTML
<script nonce="abc123">
  console.log('Allowed');
</script>
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="CORS (Cross-Origin Resource Sharing)"
              initialCode={`// CORS - control cross-origin requests

console.log("Same-Origin Policy:");
console.log("  Browsers block requests to different:");
console.log("  • Protocol (http vs https)");
console.log("  • Domain (example.com vs api.example.com)");
console.log("  • Port (3000 vs 8080)");
console.log("");

console.log("CORS Headers (Server):");
console.log(\`
// Allow specific origin
res.setHeader('Access-Control-Allow-Origin', 'https://example.com');

// Allow credentials (cookies)
res.setHeader('Access-Control-Allow-Credentials', 'true');

// Allow methods
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

// Allow headers
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

// Cache preflight
res.setHeader('Access-Control-Max-Age', '86400');
\`);

console.log("\\nCORS Request (Client):");
console.log(\`
// Simple request (no preflight)
fetch('https://api.example.com/data');

// Preflight request (custom headers, non-simple methods)
fetch('https://api.example.com/data', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value'
  },
  credentials: 'include' // Send cookies
});
\`);

console.log("\\nExpress CORS:");
console.log(\`
const cors = require('cors');

app.use(cors({
  origin: 'https://example.com',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
\`);`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Security Headers - Complete Set"
              initialCode={`// Essential Security Headers

console.log("Complete Security Headers:");
console.log(\`
// 1. Content-Security-Policy
Content-Security-Policy: default-src 'self'

// 2. X-Content-Type-Options
X-Content-Type-Options: nosniff
// Prevents MIME sniffing

// 3. X-Frame-Options
X-Frame-Options: DENY
// or: SAMEORIGIN
// Prevents clickjacking

// 4. Strict-Transport-Security (HSTS)
Strict-Transport-Security: max-age=31536000; includeSubDomains
// Force HTTPS

// 5. X-XSS-Protection
X-XSS-Protection: 1; mode=block
// Enable browser XSS filter (legacy)

// 6. Referrer-Policy
Referrer-Policy: strict-origin-when-cross-origin
// Control referrer information

// 7. Permissions-Policy
Permissions-Policy: camera=(), microphone=(), geolocation=()
// Control feature access
\`);

console.log("\\nExpress Helmet:");
console.log(\`
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true
  }
}));
\`);`}
            />
          </div>
        </section>

        {/* Authentication & Authorization */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔐 Authentication & Authorization
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="JWT (JSON Web Tokens)"
              initialCode={`// JWT - stateless authentication

console.log("JWT Structure:");
console.log("  header.payload.signature");
console.log("");

console.log("Create JWT:");
console.log(\`
const jwt = require('jsonwebtoken');

// Sign token
const token = jwt.sign(
  { userId: 123, email: 'user@example.com' }, // Payload
  process.env.JWT_SECRET,                      // Secret key
  { expiresIn: '1h' }                          // Options
);
\`);

console.log("\\nVerify JWT:");
console.log(\`
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log('User ID:', decoded.userId);
} catch (error) {
  console.error('Invalid token:', error.message);
}
\`);

console.log("\\nJWT in HTTP:");
console.log(\`
// Client sends in header
fetch('/api/protected', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
});

// Server middleware
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).send('Invalid token');
  }
});
\`);

console.log("\\nJWT Best Practices:");
console.log("  ✓ Use strong secret (256+ bits)");
console.log("  ✓ Set reasonable expiration");
console.log("  ✓ Don't store sensitive data in payload");
console.log("  ✓ Validate all claims");
console.log("  ✓ Use refresh tokens for long sessions");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="OAuth 2.0 & Secure Sessions"
              initialCode={`// OAuth 2.0 - delegated authorization

console.log("OAuth 2.0 Flow:");
console.log(\`
1. User clicks "Login with Google"
2. Redirect to Google authorization server
3. User grants permission
4. Google redirects back with authorization code
5. Exchange code for access token
6. Use token to access user data

// Implementation:
const authUrl = \`https://accounts.google.com/o/oauth2/v2/auth?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=https://yourapp.com/callback&
  response_type=code&
  scope=openid email profile\`;

window.location.href = authUrl;

// Callback handler:
const code = new URLSearchParams(window.location.search).get('code');
const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  body: JSON.stringify({
    code,
    client_id: YOUR_CLIENT_ID,
    client_secret: YOUR_CLIENT_SECRET,
    redirect_uri: 'https://yourapp.com/callback',
    grant_type: 'authorization_code'
  })
});
\`);

console.log("\\nSecure Session Management:");
console.log(\`
// Express session
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,      // HTTPS only
    httpOnly: true,    // No JavaScript access
    maxAge: 3600000,   // 1 hour
    sameSite: 'strict' // CSRF protection
  },
  store: new RedisStore() // Don't use MemoryStore in production
}));
\`);

console.log("\\nSecure Cookie Attributes:");
console.log("  httpOnly   → Prevents JavaScript access");
console.log("  secure     → HTTPS only");
console.log("  sameSite   → CSRF protection");
console.log("  maxAge     → Expiration time");
console.log("  domain     → Cookie scope");
console.log("  path       → URL path scope");`}
            />
          </div>
        </section>

        {/* Input Validation & Sanitization */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ✅ Input Validation & Sanitization
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Input Validation Best Practices"
              initialCode={`// Input Validation - first line of defense

console.log("Client-Side Validation:");
console.log(\`
function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  // Min 8 chars, 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
  return re.test(password);
}

// HTML5 validation
<input type="email" required pattern="[^@]+@[^@]+\\.[^@]+">
<input type="password" required minlength="8">
\`);

console.log("\\nServer-Side Validation (CRITICAL):");
console.log(\`
// Always validate on server!
// Client validation can be bypassed

const { body, validationResult } = require('express-validator');

app.post('/user',
  // Validation middleware
  body('email').isEmail().normalizeEmail(),
  body('age').isInt({ min: 0, max: 120 }),
  body('username').isAlphanumeric().isLength({ min: 3, max: 20 }),
  
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Process valid data
  }
);
\`);

console.log("\\nSanitization:");
console.log(\`
// Remove dangerous characters
function sanitize(input) {
  return input
    .trim()
    .replace(/[<>]/g, ''); // Remove < and >
}

// Use libraries
const validator = require('validator');

const cleaned = validator.escape(userInput);
const safe = validator.stripLow(userInput);
\`);`}
            />
          </div>
        </section>

        {/* OWASP Top 10 */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 OWASP Top 10 Security Risks
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Risk
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Description
                  </th>
                  <th className="px-3 py-2 text-left text-gray-300 font-semibold">
                    Prevention
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-xs">
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    1. Broken Access Control
                  </td>
                  <td className="px-3 py-2">
                    Users access unauthorized resources
                  </td>
                  <td className="px-3 py-2">Implement proper authorization</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    2. Cryptographic Failures
                  </td>
                  <td className="px-3 py-2">Sensitive data exposure</td>
                  <td className="px-3 py-2">Encrypt data, use HTTPS</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">3. Injection</td>
                  <td className="px-3 py-2">
                    SQL, NoSQL, OS command injection
                  </td>
                  <td className="px-3 py-2">
                    Parameterized queries, validation
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">4. Insecure Design</td>
                  <td className="px-3 py-2">Missing security controls</td>
                  <td className="px-3 py-2">
                    Threat modeling, secure patterns
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    5. Security Misconfiguration
                  </td>
                  <td className="px-3 py-2">Insecure defaults, errors</td>
                  <td className="px-3 py-2">Hardening, disable debug mode</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    6. Vulnerable Components
                  </td>
                  <td className="px-3 py-2">Outdated libraries</td>
                  <td className="px-3 py-2">Update dependencies, audit</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">7. Auth Failures</td>
                  <td className="px-3 py-2">Weak authentication</td>
                  <td className="px-3 py-2">
                    MFA, strong passwords, rate limiting
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    8. Software & Data Integrity
                  </td>
                  <td className="px-3 py-2">Unverified updates</td>
                  <td className="px-3 py-2">Verify signatures, SRI</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">9. Logging Failures</td>
                  <td className="px-3 py-2">Insufficient monitoring</td>
                  <td className="px-3 py-2">Log security events, monitor</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2 font-mono">
                    10. Server-Side Request Forgery
                  </td>
                  <td className="px-3 py-2">Abuse server requests</td>
                  <td className="px-3 py-2">Whitelist URLs, validate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Security Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-rose-400">
                  1. Never trust user input
                </strong>
                <p className="ml-4 mt-1">
                  Always validate and sanitize on server
                </p>
              </div>
              <div>
                <strong className="text-rose-400">
                  2. Use HTTPS everywhere
                </strong>
                <p className="ml-4 mt-1">
                  Encrypt all data in transit with TLS/SSL
                </p>
              </div>
              <div>
                <strong className="text-rose-400">
                  3. Implement CSP headers
                </strong>
                <p className="ml-4 mt-1">Prevent XSS attacks effectively</p>
              </div>
              <div>
                <strong className="text-rose-400">4. Use CSRF tokens</strong>
                <p className="ml-4 mt-1">Protect state-changing operations</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  5. Secure cookies properly
                </strong>
                <p className="ml-4 mt-1">
                  httpOnly, secure, sameSite attributes
                </p>
              </div>
              <div>
                <strong className="text-rose-400">
                  6. Hash passwords with bcrypt
                </strong>
                <p className="ml-4 mt-1">Never store plain text passwords</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  7. Keep dependencies updated
                </strong>
                <p className="ml-4 mt-1">Run npm audit, use Dependabot</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  8. Implement rate limiting
                </strong>
                <p className="ml-4 mt-1">Prevent brute force attacks</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  9. Use parameterized queries
                </strong>
                <p className="ml-4 mt-1">Prevent SQL injection</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  10. Follow principle of least privilege
                </strong>
                <p className="ml-4 mt-1">Grant minimum necessary permissions</p>
              </div>
              <div>
                <strong className="text-rose-400">11. Never use eval()</strong>
                <p className="ml-4 mt-1">
                  Avoid eval, new Function, setTimeout(string)
                </p>
              </div>
              <div>
                <strong className="text-rose-400">
                  12. Log security events
                </strong>
                <p className="ml-4 mt-1">
                  Monitor failed logins, access violations
                </p>
              </div>
              <div>
                <strong className="text-rose-400">
                  13. Use environment variables for secrets
                </strong>
                <p className="ml-4 mt-1">Never commit secrets to Git</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  14. Implement Multi-Factor Authentication
                </strong>
                <p className="ml-4 mt-1">Add extra security layer</p>
              </div>
              <div>
                <strong className="text-rose-400">
                  15. Regular security audits
                </strong>
                <p className="ml-4 mt-1">Penetration testing, code reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 29 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered <strong>Web Security</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Attack Prevention
                </div>
                <div className="text-gray-400">XSS, CSRF, Injection</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Authentication
                </div>
                <div className="text-gray-400">JWT, OAuth, Sessions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Security Headers
                </div>
                <div className="text-gray-400">CSP, CORS, HSTS</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  OWASP
                </div>
                <div className="text-gray-400">Top 10 Risks</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-rose-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY
              </p>
              <p className="text-gray-300">
                <strong>29 Phases</strong> • <strong>35 Sections</strong> •{" "}
                <strong>2050+ Concepts</strong> •{" "}
                <strong>1430+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                From Fundamentals to Enterprise-Grade Security
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-red-600 transition-all"
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
