import { styled } from '~/styled-system/jsx';

const PageTitle = styled('h1', {
  base: {
    marginBottom: '16px',
    textStyle: 'title',
    fontSize: '2xl',

    lg: {
      fontSize: '4xl',
    },
  },
});

export { PageTitle };
