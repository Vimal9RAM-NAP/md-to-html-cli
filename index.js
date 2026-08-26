const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const chalk = require('chalk');

// Get input filename from command-line arguments (defaults to sample.md)
const inputFile = process.argv[2] || 'sample.md';
const outputFile = path.basename(inputFile, path.extname(inputFile)) + '.html';

function convertMarkdown() {
  // Check if file exists
  if (!fs.existsSync(inputFile)) {
    console.log(chalk.red.bold(`\nError: File "${inputFile}" not found!\n`));
    process.exit(1);
  }

  // Read the Markdown file content
  const markdownContent = fs.readFileSync(inputFile, 'utf-8');

  // Parse Markdown string into raw HTML elements
  const htmlContent = marked.parse(markdownContent);

  // Wrap inside a complete HTML5 template with modern styling
  const fullHtmlDocument = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${path.basename(inputFile)} - Converted HTML</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
      color: #24292e;
    }
    h1, h2, h3 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
    code { background: #f6f8fa; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>`;

  // Write out to the HTML file
  fs.writeFileSync(outputFile, fullHtmlDocument);
  console.log(chalk.green.bold(`\nSuccess! Converted "${inputFile}" -> "${outputFile}"\n`));
}

convertMarkdown();