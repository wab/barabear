import { styled } from '~/styled-system/jsx';

const Root = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '60px 1fr auto',
    minHeight: '100vh',
    backgroundColor: 'skyBlue',
    color: 'prussianBlue',

    lg: {
      gridTemplateColumns: '100px 1fr',
      gridTemplateRows: '1fr auto',
    },
  },
});

const Navbar = styled('nav', {
  base: {
    backgroundColor: 'prussianBlue',
    color: 'skyBlue',
    px: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,

    boxSizing: 'border-box',

    lg: { gridRow: '2', padding: 8 },
  },
});

const Content = styled('main', {
  base: {
    padding: 8,
    height: '100%',
  },
});

const Footer = styled('footer', {
  base: {
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
});

export const MainLayout = { Root, Navbar, Content, Footer };
