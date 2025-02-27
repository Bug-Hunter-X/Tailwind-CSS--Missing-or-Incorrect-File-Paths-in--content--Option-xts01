```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Make sure to include all relevant files
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```