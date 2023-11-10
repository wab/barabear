import type { Config } from '@pandacss/dev';

export const utilities = {
  backgroundColorTransparentize: {
    shorthand: ['bgct', 'bgt'],
    property: 'backgroundColor',
    className: 'transparentize_bgc',
    transform: (value, { token }) => {
      const lastIndex = value?.lastIndexOf('/');
      if (!lastIndex) {
        return {};
      }
      if (typeof value?.substring !== 'function') {
        return {};
      }
      const color = value?.substring(0, lastIndex);
      if (!color) {
        return {};
      }
      const amount = value.split('/').at(-1);
      const colorValue = token(`colors.${color}`);

      const amountValue = `${amount}%`;
      return {
        backgroundColor: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
      };
    },
  },
} satisfies Config['utilities'];
