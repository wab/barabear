import { defineConfig } from '@pandacss/dev';

import { theme, globalCss, utilities } from './theme';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: 'js',
  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme,

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',

  globalCss,
  utilities,
});
