# Tailwind CSS: Missing or Incorrect File Paths in `content` Option

This repository demonstrates a common Tailwind CSS bug where the styles are not generated because the `content` option in the Tailwind configuration file is missing or has incorrect file paths.

## Bug

The bug arises when Tailwind CSS cannot locate the files containing classes that it needs to process for style generation. This often leads to missing styles or build errors.

The example in `bug.js` shows a configuration file where a crucial path might be missing or incorrect.

## Solution

The `bugSolution.js` file shows the corrected configuration.  Ensure that the paths in the `content` array accurately reflect the location of your HTML files and any components or templates where you're using Tailwind classes.

Ensure you have run `npm install -D tailwindcss postcss autoprefixer` to install Tailwind properly.

Make sure to run the correct build command of your project.