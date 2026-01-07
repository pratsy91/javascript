import Link from "next/link";

export default function Home() {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Absolute Fundamentals",
      description: "Master variables, data types, operators, and type system",
      color: "from-blue-500 to-cyan-500",
      sections: [
        {
          id: "1.1",
          title: "Variables & Constants",
          path: "/phase1/variables",
        },
        {
          id: "1.2",
          title: "Data Types - Primitives",
          path: "/phase1/primitives",
        },
        {
          id: "1.3",
          title: "Reference Types",
          path: "/phase1/reference-types",
        },
        {
          id: "1.4",
          title: "Type Checking & Conversion",
          path: "/phase1/type-checking",
        },
        {
          id: "1.5",
          title: "Operators - Complete",
          path: "/phase1/operators",
        },
      ],
    },
    {
      id: 2,
      title: "Phase 2: Control Flow & Functions",
      description: "Master conditionals, loops, and everything about functions",
      color: "from-purple-500 to-pink-500",
      sections: [
        {
          id: "2.1",
          title: "Conditional Statements",
          path: "/phase2/conditionals",
        },
        {
          id: "2.2",
          title: "Loops - All Types",
          path: "/phase2/loops",
        },
        {
          id: "2.3",
          title: "Functions - Complete",
          path: "/phase2/functions",
        },
      ],
    },
    {
      id: 3,
      title: "Phase 3: String - All Methods",
      description: "Master every single string method and template literals",
      color: "from-green-500 to-emerald-500",
      sections: [
        {
          id: "3.1",
          title: "String Methods - Complete",
          path: "/phase3/string-methods",
        },
      ],
    },
    {
      id: 4,
      title: "Phase 4: Number - All Methods",
      description:
        "Master Number, Math (40+ methods!), and BigInt - complete coverage",
      color: "from-yellow-500 to-orange-500",
      sections: [
        {
          id: "4.1",
          title: "Number & Math - Complete",
          path: "/phase4/number-math",
        },
      ],
    },
    {
      id: 5,
      title: "Phase 5: Array - All Methods",
      description:
        "Master every array method (40+), iteration, searching, and array concepts",
      color: "from-pink-500 to-rose-500",
      sections: [
        {
          id: "5.1",
          title: "Array Methods - Complete",
          path: "/phase5/array-methods",
        },
      ],
    },
    {
      id: 6,
      title: "Phase 6: Object - All Methods",
      description:
        "Master Object methods (30+), prototypes, descriptors, and all object concepts",
      color: "from-cyan-500 to-blue-500",
      sections: [
        {
          id: "6.1",
          title: "Object Methods - Complete",
          path: "/phase6/object-methods",
        },
      ],
    },
    {
      id: 7,
      title: "Phase 7: Date - All Methods",
      description:
        "Master Date constructor, static methods, and all 40+ instance methods",
      color: "from-indigo-500 to-purple-500",
      sections: [
        {
          id: "7.1",
          title: "Date Methods - Complete",
          path: "/phase7/date-methods",
        },
      ],
    },
    {
      id: 8,
      title: "Phase 8: RegExp - All Methods & Patterns",
      description:
        "Master RegExp constructor, flags, properties, methods, and complete pattern syntax",
      color: "from-pink-500 to-rose-500",
      sections: [
        {
          id: "8.1",
          title: "RegExp - Complete Reference",
          path: "/phase8/regexp-methods",
        },
      ],
    },
    {
      id: 9,
      title: "Phase 9: Error Handling - Complete",
      description:
        "Master all error types, handling mechanisms, async errors, and best practices",
      color: "from-red-500 to-orange-500",
      sections: [
        {
          id: "9.1",
          title: "Error Handling - Complete",
          path: "/phase9/error-handling",
        },
      ],
    },
    {
      id: 10,
      title: "Phase 10: Collections - Map, Set, WeakMap, WeakSet",
      description:
        "Master Map, Set, WeakMap, WeakSet with all methods including ES2024 Set operations",
      color: "from-emerald-500 to-teal-500",
      sections: [
        {
          id: "10.1",
          title: "Collections - Complete",
          path: "/phase10/collections",
        },
      ],
    },
    {
      id: 11,
      title: "Phase 11: Typed Arrays & Binary Data",
      description:
        "Master ArrayBuffer, SharedArrayBuffer, DataView, and all 11 Typed Array types",
      color: "from-violet-500 to-purple-500",
      sections: [
        {
          id: "11.1",
          title: "Binary Data - Complete",
          path: "/phase11/binary-data",
        },
      ],
    },
    {
      id: 12,
      title: "Phase 12: Iterators & Generators",
      description:
        "Master Iterator Protocol, Generator Functions, Async Iterators, and Async Generators",
      color: "from-amber-500 to-yellow-500",
      sections: [
        {
          id: "12.1",
          title: "Iterators & Generators - Complete",
          path: "/phase12/iterators-generators",
        },
      ],
    },
    {
      id: 13,
      title: "Phase 13: Promises & Async/Await",
      description:
        "Master Promise constructor, static methods, async/await, and all async patterns",
      color: "from-sky-500 to-blue-500",
      sections: [
        {
          id: "13.1",
          title: "Promises & Async - Complete",
          path: "/phase13/promises-async",
        },
      ],
    },
    {
      id: 14,
      title: "Phase 14: Modules (ES2015+)",
      description:
        "Master ES Modules, CommonJS, dynamic imports, and all module patterns",
      color: "from-lime-500 to-green-500",
      sections: [
        {
          id: "14.1",
          title: "Modules - Complete",
          path: "/phase14/modules",
        },
      ],
    },
    {
      id: 15,
      title: "Phase 15: Classes (ES2015+)",
      description:
        "Master class syntax, inheritance, private fields, static members, and all class features",
      color: "from-fuchsia-500 to-pink-500",
      sections: [
        {
          id: "15.1",
          title: "Classes - Complete",
          path: "/phase15/classes",
        },
      ],
    },
    {
      id: 16,
      title: "Phase 16: Proxy & Reflect (ES2015)",
      description:
        "Master all 13 Proxy traps, all 13 Reflect methods, and meta-programming",
      color: "from-rose-500 to-red-500",
      sections: [
        {
          id: "16.1",
          title: "Proxy & Reflect - Complete",
          path: "/phase16/proxy-reflect",
        },
      ],
    },
    {
      id: 17,
      title: "Phase 17: Symbols (ES2015)",
      description:
        "Master Symbol basics, global registry, and all 13 well-known symbols",
      color: "from-cyan-500 to-blue-500",
      sections: [
        {
          id: "17.1",
          title: "Symbols - Complete",
          path: "/phase17/symbols",
        },
      ],
    },
    {
      id: 18,
      title: "Phase 18: Advanced Concepts",
      description:
        "Master execution context, scope, closures, this, prototypes, event loop, and FP concepts",
      color: "from-indigo-500 to-violet-500",
      sections: [
        {
          id: "18.1",
          title: "Advanced Concepts - Complete",
          path: "/phase18/advanced-concepts",
        },
      ],
    },
    {
      id: 19,
      title: "Phase 19: ES2015 - ES2024 Features",
      description:
        "Complete timeline of all JavaScript features from ES6 to ES2024 (10 years of evolution)",
      color: "from-orange-500 to-amber-500",
      sections: [
        {
          id: "19.1",
          title: "ES Features Timeline - Complete",
          path: "/phase19/es-features",
        },
      ],
    },
    {
      id: 20,
      title: "Phase 20: JSON",
      description:
        "Master JSON.parse, JSON.stringify, reviver, replacer, and all JSON concepts",
      color: "from-teal-500 to-cyan-500",
      sections: [
        {
          id: "20.1",
          title: "JSON - Complete",
          path: "/phase20/json",
        },
      ],
    },
    {
      id: 21,
      title: "Phase 21: Console API",
      description:
        "Master all console methods for debugging, logging, timing, and performance analysis",
      color: "from-slate-500 to-gray-500",
      sections: [
        {
          id: "21.1",
          title: "Console API - Complete",
          path: "/phase21/console-api",
        },
      ],
    },
    {
      id: 22,
      title: "Phase 22: DOM API - Complete",
      description:
        "Master Document, Element, Node, Events, Window, Location, History, Navigator APIs",
      color: "from-green-500 to-emerald-500",
      sections: [
        {
          id: "22.1",
          title: "DOM API - Complete",
          path: "/phase22/dom-api",
        },
      ],
    },
    {
      id: 23,
      title: "Phase 23: Web APIs - Complete",
      description:
        "Master Fetch, Storage, Workers, WebSocket, Canvas, Audio, WebRTC, Observers, and 20+ more APIs",
      color: "from-cyan-500 to-blue-500",
      sections: [
        {
          id: "23.1",
          title: "Web APIs - Complete",
          path: "/phase23/web-apis",
        },
      ],
    },
    {
      id: 24,
      title: "Phase 24: Atomics & Shared Memory",
      description:
        "Master atomic operations, SharedArrayBuffer, concurrent programming, and thread synchronization",
      color: "from-red-500 to-pink-500",
      sections: [
        {
          id: "24.1",
          title: "Atomics & SharedArrayBuffer",
          path: "/phase24/atomics",
        },
      ],
    },
    {
      id: 25,
      title: "Phase 25: Internationalization (Intl)",
      description:
        "Master all 9 Intl APIs for locale-aware formatting, collation, segmentation, and display names",
      color: "from-indigo-500 to-purple-500",
      sections: [
        {
          id: "25.1",
          title: "Intl APIs - Complete",
          path: "/phase25/intl",
        },
      ],
    },
    {
      id: 26,
      title: "Phase 26: WeakRef & Finalization",
      description:
        "Master WeakRef and FinalizationRegistry for advanced memory management and cleanup callbacks",
      color: "from-teal-500 to-cyan-500",
      sections: [
        {
          id: "26.1",
          title: "WeakRef & FinalizationRegistry",
          path: "/phase26/weakref",
        },
      ],
    },
    {
      id: 27,
      title: "Phase 27: Testing JavaScript",
      description:
        "Master testing frameworks, assertion libraries, test types, mocking, and testing tools",
      color: "from-yellow-500 to-amber-500",
      sections: [
        {
          id: "27.1",
          title: "Testing - Complete",
          path: "/phase27/testing",
        },
      ],
    },
    {
      id: 28,
      title: "Phase 28: Build Tools & Ecosystem",
      description:
        "Master npm, bundlers, transpilers, linters, formatters, and the complete JavaScript tooling ecosystem",
      color: "from-orange-500 to-red-500",
      sections: [
        {
          id: "28.1",
          title: "Build Tools & Ecosystem",
          path: "/phase28/build-tools",
        },
      ],
    },
    {
      id: 29,
      title: "Phase 29: Security",
      description:
        "Master XSS, CSRF, CSP, authentication, authorization, OWASP Top 10, and all web security best practices",
      color: "from-rose-500 to-red-500",
      sections: [
        {
          id: "29.1",
          title: "Security - Complete",
          path: "/phase29/security",
        },
      ],
    },
    {
      id: 30,
      title: "Phase 30: Performance Optimization",
      description:
        "Master loading, runtime, memory, rendering, and network performance optimization techniques",
      color: "from-lime-500 to-green-500",
      sections: [
        {
          id: "30.1",
          title: "Performance - Complete",
          path: "/phase30/performance",
        },
      ],
    },
    {
      id: 31,
      title: "Phase 31: Design Patterns",
      description:
        "Master all creational, structural, behavioral, and architectural design patterns in JavaScript",
      color: "from-violet-500 to-purple-500",
      sections: [
        {
          id: "31.1",
          title: "Design Patterns - Complete",
          path: "/phase31/design-patterns",
        },
      ],
    },
    {
      id: 32,
      title: "Phase 32: Interview Cheatsheet",
      description:
        "Complete reference guide for JavaScript interviews - all concepts, methods, patterns, and common questions",
      color: "from-amber-500 to-yellow-500",
      sections: [
        {
          id: "32.1",
          title: "JavaScript Interview Cheatsheet",
          path: "/phase32/cheatsheet",
        },
      ],
    },
    {
      id: 33,
      title: "Phase 33: Interview Questions & Solutions",
      description:
        "Common JavaScript interview questions with multiple solution approaches, optimizations, and best practices",
      color: "from-emerald-500 to-teal-500",
      sections: [
        {
          id: "33.1",
          title: "Interview Questions & Solutions",
          path: "/phase33/interview-questions",
        },
        {
          id: "33.2",
          title: "JavaScript Debugging Mastery",
          path: "/phase33/debugging",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            JavaScript Mastery Journey
          </h1>
          <p className="mt-2 text-gray-400">
            Interactive learning platform for mastering JavaScript
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">33</div>
            <div className="text-gray-400">Phases</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">40</div>
            <div className="text-gray-400">Total Sections</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">2150+</div>
            <div className="text-gray-400">Concepts</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">1500+</div>
            <div className="text-gray-400">Examples</div>
          </div>
        </div>

        {/* Phases */}
        {phases.map((phase) => (
          <div key={phase.id} className="mb-16">
            {/* Phase Header */}
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 border border-gray-600 rounded-full mb-4">
                <span className="text-gray-200 font-semibold">
                  Phase {phase.id}
                </span>
              </div>
              <h2
                className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${phase.color} mb-3`}
              >
                {phase.title.split(": ")[1]}
              </h2>
              <p className="text-gray-400 text-lg">{phase.description}</p>
            </div>

            {/* Section Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {phase.sections.map((section) => (
                <Link
                  key={section.id}
                  href={section.path}
                  className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {section.id}
                      </div>
                      <svg
                        className="w-6 h-6 text-gray-600 group-hover:text-gray-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                      {section.title}
                    </h3>

                    <div className="mt-6 flex items-center text-sm">
                      <span
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${phase.color} text-white text-xs font-medium`}
                      >
                        Start Learning →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">
            🎯 Learning Approach
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <strong className="text-white">
                  Interactive Code Examples:
                </strong>{" "}
                Run and modify code in real-time
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <strong className="text-white">Visual Demonstrations:</strong>{" "}
                See how JavaScript works under the hood
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <strong className="text-white">Practice Exercises:</strong> Test
                your understanding immediately
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                <strong className="text-white">Complete Coverage:</strong> Every
                method, every concept, nothing skipped
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
