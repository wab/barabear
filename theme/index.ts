import type { Config } from '@pandacss/dev';

import { button } from './button.recipe';
import { colors } from './colors';
import { semanticTokens } from './semantic-tokens';
import { textStyles } from './text';

export const theme = {
  extend: {
    tokens: {
      radii: {
        radius: { value: '8px' },
      },
      colors,
    },
    textStyles,
    semanticTokens,
    recipes: {
      button,
    },
  },
} satisfies Config['theme'];

export { globalCss } from './global';
export { utilities } from './utilities';
