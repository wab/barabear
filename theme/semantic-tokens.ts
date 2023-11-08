import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: '{colors.grayscale.0}',
        _dark: '{colors.grayscale.950}',
      },
    },
    foreground: {
      value: {
        base: '{colors.grayscale.950}',
        _dark: '{colors.grayscale.50}',
      },
    },

    primary: {
      DEFAULT: {
        value: {
          base: '{colors.selectiveYellow}',
          _dark: '{colors.grayscale.50}',
        },
      },
      foreground: {
        value: {
          base: '{colors.prussiqnBlue}',
          _dark: '{colors.grayscale.900}',
        },
      },
    },
    secondary: {
      DEFAULT: {
        value: {
          base: '{colors.yellow.300}',
          _dark: '{colors.grayscale.800}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.900}',
          _dark: '{colors.grayscale.50}',
        },
      },
    },
    accent: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.100}',
          _dark: '{colors.grayscale.800}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.900}',
          _dark: '{colors.grayscale.50}',
        },
      },
    },
  },
});
