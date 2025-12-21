"use client";

import SectionLayout from "@/components/SectionLayout";
import CodePlayground from "@/components/CodePlayground";
import ConceptCard from "@/components/ConceptCard";

export default function BuildToolsPage() {
  return (
    <SectionLayout
      title="28.1 Build Tools & Ecosystem"
      description="Master npm, bundlers, transpilers, linters, formatters, and the complete JavaScript tooling ecosystem"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            🔧 Complete Build Tools & Ecosystem Guide
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Master the <strong>complete JavaScript tooling ecosystem</strong>:
            package managers, bundlers, transpilers, linters, formatters, and
            task runners. Everything you need to build professional JavaScript
            applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              "npm/yarn/pnpm",
              "Webpack",
              "Vite",
              "Babel",
              "TypeScript",
              "ESLint",
              "Prettier",
              "Rollup",
              "esbuild",
              "SWC",
              "Package.json",
              "CI/CD",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-gray-800/50 px-2 py-1 rounded border border-gray-700 text-center text-orange-300 font-mono text-xs"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Package Managers */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            📦 Package Managers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <ConceptCard title="npm" icon="📦" color="red">
              Node Package Manager - default, most widely used
            </ConceptCard>
            <ConceptCard title="yarn" icon="🧶" color="blue">
              Fast, reliable, secure - by Facebook
            </ConceptCard>
            <ConceptCard title="pnpm" icon="⚡" color="yellow">
              Efficient disk space usage with hard links
            </ConceptCard>
          </div>

          <div className="mt-6">
            <CodePlayground
              title="npm Commands - Complete Reference"
              initialCode={`// npm - Node Package Manager

console.log("Installation:");
console.log("  npm install <package>          Install package");
console.log("  npm install <package>@version  Specific version");
console.log("  npm install <package> --save-dev  Dev dependency");
console.log("  npm install -g <package>       Global install");
console.log("  npm install                    Install all from package.json");
console.log("");

console.log("Package Management:");
console.log("  npm uninstall <package>        Remove package");
console.log("  npm update                     Update packages");
console.log("  npm update <package>           Update specific package");
console.log("  npm outdated                   Check outdated packages");
console.log("  npm list                       List installed packages");
console.log("  npm list --depth=0             Top-level only");
console.log("");

console.log("Project Management:");
console.log("  npm init                       Create package.json");
console.log("  npm init -y                    Skip questions");
console.log("  npm run <script>               Run script from package.json");
console.log("  npm test                       Run tests");
console.log("  npm start                      Start application");
console.log("  npm run build                  Build for production");
console.log("");

console.log("Publishing:");
console.log("  npm login                      Login to npm");
console.log("  npm publish                    Publish package");
console.log("  npm version patch/minor/major  Bump version");
console.log("");

console.log("Information:");
console.log("  npm info <package>             Package info");
console.log("  npm search <term>              Search packages");
console.log("  npm docs <package>             Open docs");
console.log("  npm repo <package>             Open repository");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="package.json Structure"
              initialCode={`// package.json - project manifest

console.log("Complete package.json structure:");
console.log(\`
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My awesome project",
  "main": "index.js",
  "module": "index.esm.js",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "require": "./index.js",
      "import": "./index.esm.js"
    }
  },
  
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src",
    "format": "prettier --write src"
  },
  
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "~4.17.0"
  },
  
  "devDependencies": {
    "jest": "^29.0.0",
    "eslint": "^8.0.0",
    "webpack": "^5.0.0"
  },
  
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  },
  
  "keywords": ["javascript", "nodejs"],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/user/repo"
  },
  "bugs": "https://github.com/user/repo/issues",
  "homepage": "https://github.com/user/repo#readme"
}
\`);

console.log("\\nSemantic Versioning:");
console.log("  ^1.2.3  → >=1.2.3 <2.0.0 (compatible)");
console.log("  ~1.2.3  → >=1.2.3 <1.3.0 (minor updates)");
console.log("  1.2.3   → Exact version");
console.log("  *       → Latest version");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="yarn & pnpm Commands"
              initialCode={`// yarn - Fast, reliable package manager

console.log("yarn Commands:");
console.log("  yarn add <package>             Install package");
console.log("  yarn add <package> --dev       Dev dependency");
console.log("  yarn remove <package>          Remove package");
console.log("  yarn upgrade                   Update packages");
console.log("  yarn install                   Install all");
console.log("  yarn <script>                  Run script (no 'run')");
console.log("");

console.log("yarn Benefits:");
console.log("  ✓ Faster than npm");
console.log("  ✓ Deterministic (yarn.lock)");
console.log("  ✓ Offline mode");
console.log("  ✓ Workspaces built-in");
console.log("");

console.log("pnpm Commands:");
console.log("  pnpm add <package>             Install package");
console.log("  pnpm add -D <package>          Dev dependency");
console.log("  pnpm remove <package>          Remove package");
console.log("  pnpm update                    Update packages");
console.log("  pnpm install                   Install all");
console.log("");

console.log("pnpm Benefits:");
console.log("  ✓ Saves disk space (hard links)");
console.log("  ✓ Faster installations");
console.log("  ✓ Strict node_modules structure");
console.log("  ✓ Built-in monorepo support");
console.log("");

console.log("Workspaces (Monorepo):");
console.log(\`
{
  "workspaces": [
    "packages/*"
  ]
}

// Run commands in all workspaces:
npm run test --workspaces
yarn workspaces run test
pnpm -r test
\`);`}
            />
          </div>
        </section>

        {/* Module Bundlers */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            📦 Module Bundlers
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="Webpack Configuration"
              initialCode={`// Webpack - powerful, configurable bundler

console.log("webpack.config.js:");
console.log(\`
const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  
  devServer: {
    static: './dist',
    hot: true,
    port: 3000
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  
  mode: 'production' // or 'development'
};
\`);

console.log("\\nWebpack Commands:");
console.log("  webpack                        Build");
console.log("  webpack --watch                Watch mode");
console.log("  webpack serve                  Dev server");
console.log("  webpack --mode production      Production build");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Vite - Next Generation Bundler"
              initialCode={`// Vite - extremely fast development

console.log("vite.config.js:");
console.log(\`
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser'
  },
  
  server: {
    port: 3000,
    open: true
  },
  
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
\`);

console.log("\\nVite Benefits:");
console.log("  ✓ Instant server start");
console.log("  ✓ Lightning-fast HMR");
console.log("  ✓ Native ESM in dev");
console.log("  ✓ Rollup for production");
console.log("  ✓ Out-of-box TypeScript");
console.log("  ✓ Framework plugins");
console.log("");

console.log("Vite Commands:");
console.log("  vite                           Dev server");
console.log("  vite build                     Production build");
console.log("  vite preview                   Preview build");
console.log("");

console.log("Other Modern Bundlers:");
console.log("  • Rollup - library bundling");
console.log("  • Parcel - zero config");
console.log("  • esbuild - extremely fast");
console.log("  • Snowpack - unbundled dev");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Rollup & esbuild"
              initialCode={`// Rollup - optimized for libraries

console.log("rollup.config.js:");
console.log(\`
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'MyLibrary'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
};
\`);

console.log("\\nRollup Benefits:");
console.log("  ✓ Tree-shaking");
console.log("  ✓ Multiple output formats");
console.log("  ✓ Smaller bundles");
console.log("  ✓ Perfect for libraries");
console.log("");

console.log("esbuild - Extremely fast bundler:");
console.log(\`
// esbuild.config.js
require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: 'es2020',
  outfile: 'dist/bundle.js'
});
\`);

console.log("\\nesbuild Benefits:");
console.log("  ✓ 10-100x faster than others");
console.log("  ✓ Written in Go");
console.log("  ✓ Built-in minification");
console.log("  ✓ TypeScript support");`}
            />
          </div>
        </section>

        {/* Transpilers */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🔄 Transpilers</h2>

          <div className="mt-6">
            <CodePlayground
              title="Babel - JavaScript Transpiler"
              initialCode={`// Babel - transform modern JS to compatible JS

console.log("babel.config.js:");
console.log(\`
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'ie >= 11']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime'
  ]
};
\`);

console.log("\\nCommon Presets:");
console.log("  @babel/preset-env        ES6+ → ES5");
console.log("  @babel/preset-react      JSX → JavaScript");
console.log("  @babel/preset-typescript TypeScript → JavaScript");
console.log("");

console.log("Popular Plugins:");
console.log("  @babel/plugin-proposal-class-properties");
console.log("  @babel/plugin-proposal-decorators");
console.log("  @babel/plugin-transform-runtime");
console.log("  babel-plugin-styled-components");
console.log("");

console.log("Usage:");
console.log("  npx babel src --out-dir dist");
console.log("  npx babel src/file.js --out-file dist/file.js");
console.log("");

console.log("Benefits:");
console.log("  ✓ Use latest JS features");
console.log("  ✓ Browser compatibility");
console.log("  ✓ JSX transformation");
console.log("  ✓ Plugin ecosystem");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="TypeScript & SWC"
              initialCode={`// TypeScript - superset with static typing

console.log("tsconfig.json:");
console.log(\`
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`);

console.log("\\nTypeScript Commands:");
console.log("  tsc                            Compile");
console.log("  tsc --watch                    Watch mode");
console.log("  tsc --noEmit                   Type check only");
console.log("");

console.log("SWC - Speedy Web Compiler:");
console.log(\`
// .swcrc
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true
    },
    "transform": {
      "react": {
        "runtime": "automatic"
      }
    },
    "target": "es2020"
  },
  "module": {
    "type": "es6"
  }
}
\`);

console.log("\\nSWC Benefits:");
console.log("  ✓ 20x faster than Babel");
console.log("  ✓ Written in Rust");
console.log("  ✓ Drop-in Babel replacement");
console.log("  ✓ TypeScript support");`}
            />
          </div>
        </section>

        {/* Linters & Formatters */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            🔍 Linters & Formatters
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="ESLint - JavaScript Linter"
              initialCode={`// ESLint - find and fix problems in JavaScript

console.log(".eslintrc.js:");
console.log(\`
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  
  parser: '@typescript-eslint/parser',
  
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  
  plugins: [
    'react',
    '@typescript-eslint',
    'import'
  ],
  
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'prefer-const': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  
  settings: {
    react: {
      version: 'detect'
    }
  }
};
\`);

console.log("\\nESLint Commands:");
console.log("  eslint src/                    Lint directory");
console.log("  eslint src/ --fix              Auto-fix");
console.log("  eslint src/ --quiet            Errors only");
console.log("");

console.log("Popular Configs:");
console.log("  eslint:recommended");
console.log("  airbnb");
console.log("  standard");
console.log("  google");
console.log("  prettier");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Prettier - Code Formatter"
              initialCode={`// Prettier - opinionated code formatter

console.log(".prettierrc:");
console.log(\`
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
\`);

console.log("\\nPrettier Commands:");
console.log("  prettier --write src/          Format files");
console.log("  prettier --check src/          Check formatting");
console.log("  prettier --write '**/*.{js,jsx,ts,tsx,json,css}'");
console.log("");

console.log("Prettier Benefits:");
console.log("  ✓ Consistent code style");
console.log("  ✓ No debates about formatting");
console.log("  ✓ Editor integration");
console.log("  ✓ Works with ESLint");
console.log("");

console.log("ESLint + Prettier:");
console.log(\`
// Install
npm install --save-dev eslint-config-prettier

// .eslintrc.js
{
  extends: [
    'eslint:recommended',
    'prettier' // Disables conflicting rules
  ]
}
\`);

console.log("\\n.prettierignore:");
console.log(\`
node_modules
dist
build
coverage
.next
\`);`}
            />
          </div>
        </section>

        {/* Task Runners */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚙️ Task Runners
          </h2>

          <div className="mt-6">
            <CodePlayground
              title="npm Scripts - Built-in Task Runner"
              initialCode={`// npm scripts - simplest task runner

console.log("package.json scripts:");
console.log(\`
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json,css}'",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist",
    "prebuild": "npm run clean",
    "postbuild": "npm run copy-assets",
    "start": "node dist/index.js"
  }
}
\`);

console.log("\\nLifecycle Scripts:");
console.log("  preinstall  → Before install");
console.log("  postinstall → After install");
console.log("  pretest     → Before test");
console.log("  posttest    → After test");
console.log("  prebuild    → Before build");
console.log("  postbuild   → After build");
console.log("");

console.log("Run scripts:");
console.log("  npm run dev");
console.log("  npm run build");
console.log("  npm test              (alias for npm run test)");
console.log("  npm start             (alias for npm run start)");
console.log("");

console.log("Pass arguments:");
console.log("  npm run lint -- --fix");
console.log("  npm test -- --watch");`}
            />
          </div>

          <div className="mt-6">
            <CodePlayground
              title="Gulp Task Runner"
              initialCode={`// Gulp - streaming build system

console.log("gulpfile.js:");
console.log(\`
const { src, dest, watch, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Task: Compile JavaScript
function scripts() {
  return src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(dest('dist'));
}

// Task: Compile SCSS
function styles() {
  return src('src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('dist'));
}

// Task: Watch files
function watchFiles() {
  watch('src/**/*.js', scripts);
  watch('src/**/*.scss', styles);
}

// Export tasks
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watchFiles;
exports.build = parallel(scripts, styles);
exports.default = series(parallel(scripts, styles), watchFiles);
\`);

console.log("\\nGulp Commands:");
console.log("  gulp                           Run default task");
console.log("  gulp build                     Run build task");
console.log("  gulp watch                     Run watch task");
console.log("");

console.log("Gulp Benefits:");
console.log("  ✓ Streaming (fast)");
console.log("  ✓ Code over configuration");
console.log("  ✓ Large plugin ecosystem");
console.log("  ✓ Flexible task composition");`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              ✅ Build Tools Best Practices
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong className="text-orange-400">
                  1. Commit lock files
                </strong>
                <p className="ml-4 mt-1">
                  package-lock.json, yarn.lock, pnpm-lock.yaml ensure
                  reproducible builds
                </p>
              </div>
              <div>
                <strong className="text-orange-400">
                  2. Use exact versions for critical dependencies
                </strong>
                <p className="ml-4 mt-1">
                  Avoid surprises with breaking changes
                </p>
              </div>
              <div>
                <strong className="text-orange-400">
                  3. Separate dev and production dependencies
                </strong>
                <p className="ml-4 mt-1">Keep production bundles small</p>
              </div>
              <div>
                <strong className="text-orange-400">
                  4. Configure code splitting
                </strong>
                <p className="ml-4 mt-1">
                  Split vendor and app code for better caching
                </p>
              </div>
              <div>
                <strong className="text-orange-400">
                  5. Enable source maps in development
                </strong>
                <p className="ml-4 mt-1">Easy debugging of transpiled code</p>
              </div>
              <div>
                <strong className="text-orange-400">
                  6. Use tree-shaking for smaller bundles
                </strong>
                <p className="ml-4 mt-1">Remove unused code automatically</p>
              </div>
              <div>
                <strong className="text-orange-400">
                  7. Run linter in pre-commit hook
                </strong>
                <p className="ml-4 mt-1">
                  Use husky + lint-staged for quality gates
                </p>
              </div>
              <div>
                <strong className="text-orange-400">
                  8. Configure appropriate browserslist
                </strong>
                <p className="ml-4 mt-1">
                  Balance compatibility vs bundle size
                </p>
              </div>
              <div>
                <strong className="text-orange-400">
                  9. Use modern bundlers for new projects
                </strong>
                <p className="ml-4 mt-1">
                  Vite, esbuild are significantly faster
                </p>
              </div>
              <div>
                <strong className="text-orange-400">
                  10. Monitor bundle size
                </strong>
                <p className="ml-4 mt-1">
                  Use bundle analyzers to identify large dependencies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Phase 28 Complete!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              You've mastered the{" "}
              <strong>Complete JavaScript Tooling Ecosystem</strong>!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto text-sm">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Package Managers
                </div>
                <div className="text-gray-400">npm, yarn, pnpm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Bundlers
                </div>
                <div className="text-gray-400">Webpack, Vite, Rollup</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Transpilers
                </div>
                <div className="text-gray-400">Babel, TypeScript, SWC</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  Quality
                </div>
                <div className="text-gray-400">ESLint, Prettier</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xl font-bold text-orange-400 mb-2">
                🏆 COMPLETE JAVASCRIPT MASTERY
              </p>
              <p className="text-gray-300">
                <strong>28 Phases</strong> • <strong>34 Sections</strong> •{" "}
                <strong>2000+ Concepts</strong> •{" "}
                <strong>1400+ Examples</strong>
              </p>
              <p className="text-gray-400 mt-2">
                Language + APIs + Testing + Complete Tooling Ecosystem
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
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
