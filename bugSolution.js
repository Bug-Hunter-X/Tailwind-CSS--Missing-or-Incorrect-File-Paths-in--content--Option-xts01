```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./public/**/*.html'], // Added public folder and corrected paths
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