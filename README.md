# 📝 Markdown to HTML CLI Converter

A fast, lightweight Node.js command-line interface (CLI) tool that converts local Markdown (`.md`) files into standalone, cleanly styled HTML documents.
[![npm version](https://img.shields.io/npm/v/md-to-html-cli-vimal.svg)](https://www.npmjs.com/package/md-to-html-cli-vimal)
[![npm downloads](https://img.shields.io/npm/dm/md-to-html-cli-vimal.svg)](https://www.npmjs.com/package/md-to-html-cli-vimal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## 🚀 Quick Run (No Installation Required)

You can run this CLI tool directly using `npx`:

```bash
npx md-to-html-cli-vimal sample.md
```

## 📦 Global Installation

```bash
npm install -g md-to-html-cli-vimal
```
```bash
md-to-html-cli sample.md
```

---

## ✨ Features

- **Instant Conversion:** Parse standard Markdown syntax into raw HTML elements seamlessly.
- **Pre-styled Output:** Automatically wraps generated HTML into a modern, responsive document template.
- **CLI Executable:** Support for direct Node execution or local global installation via `npm link`.
- **Fallback Support:** Automatically looks for `sample.md` if no explicit filename is provided.

---

## 🛠️ Installation & Setup

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v14 or higher) installed on your system.

### 1. Clone the repository

```bash
git clone [https://github.com/Vimal9RAM-NAP/md-to-html-cli.git](https://github.com/Vimal9RAM-NAP/md-to-html-cli.git)
```

```bash
cd md-to-html-cli
```

### 2. Install dependencies

```bash
npm install
```

## 🚀 Usage

### Option A: Direct Node Execution

Pass the name of any `.md` file in your directory to process it:

```bash
node index.js sample.md
```

If no filename is specified, it defaults to `sample.md`:

```bash
node index.js
```

### Option B: Global CLI Usage (npm link)

To run the converter using the custom command md2html from anywhere in your terminal:

### 1. Register the package locally:

```bash
sudo npm link
```

(Or `run npm link` directly if your npm global path is configured without sudo).

### 2. Run the command from any folder:

```bash
md2html sample.md
```

## 📁 Output Structure

When converting a file like `sample.md`, the tool generates a matching `sample.html` file in the same directory:

```text
md-to-html-cli/
├── index.js
├── package.json
├── sample.md      <-- Input
└── sample.html    <-- Generated Output
```

## 🧰 Tech Stack

- **Node.js** — JavaScript runtime environment
- **marked** — Markdown parser
- **chalk** — Terminal string styling

## 📄 License

This project is open-source and available under the MIT License.
