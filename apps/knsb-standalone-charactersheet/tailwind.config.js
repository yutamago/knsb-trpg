const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'knsb-pink': '#b11b56',
        'knsb-blue': '#0064ca',

      }
    },
  },
  plugins: [],

  // https://tailwindcss.com/docs/content-configuration#transforming-source-files
  transform: {
    DEFAULT: (content) => {
      return (
        content
          // HTML attributes: [class.pb-2.5]="fifthTest"
          .replace(/\[class\.(.*?)\]=/g, 'class="$1" ')
          // Object keys:
          .replace(/(['"])\[class\.(.*?)\]\1:/g, 'class="$2"')
      );
    },
  },
};
