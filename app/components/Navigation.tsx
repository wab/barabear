import { NavLink } from '@remix-run/react';

import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

import { Logo } from './Logo';

const Wrapper = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 8,

    lg: {
      flexDirection: 'column',
    },

    '& li': {
      fontSize: 'xl',
      lg: {
        fontSize: '3xl',
      },

      '& svg': {
        width: '1em',
        height: '1em',
      },

      '& a': {
        display: 'block',
        color: 'skyBlue',
        transition: 'color 0.2s ease-in-out',
      },

      '& a:hover': {
        color: 'white',
      },
    },
  },
});

const IconHome: React.FunctionComponent<React.HTMLAttributes<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 495.398 495.398"
    fill="currentColor"
    width={30}
    height={30}
    {...props}
  >
    <path d="m487.083 225.514-75.08-75.08v-86.73c0-15.682-12.708-28.391-28.413-28.391-15.669 0-28.377 12.709-28.377 28.391v29.941L299.31 37.74c-27.639-27.624-75.694-27.575-103.27.05L8.312 225.514c-11.082 11.104-11.082 29.071 0 40.158 11.087 11.101 29.089 11.101 40.172 0l187.71-187.729c6.115-6.083 16.893-6.083 22.976-.018l187.742 187.747a28.337 28.337 0 0 0 20.081 8.312c7.271 0 14.541-2.764 20.091-8.312 11.086-11.086 11.086-29.053-.001-40.158z" />
    <path d="M257.561 131.836c-5.454-5.451-14.285-5.451-19.723 0L72.712 296.913a13.977 13.977 0 0 0-4.085 9.877v120.401c0 28.253 22.908 51.16 51.16 51.16h81.754v-126.61h92.299v126.61h81.755c28.251 0 51.159-22.907 51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561 131.836z" />
  </svg>
);
const IconGithub: React.FunctionComponent<React.HTMLAttributes<SVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={30} height={30} {...props}>
    <title>github</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
    />
  </svg>
);

const Navigation = () => {
  return (
    <Wrapper>
      <li>
        <Logo className={css({ fontSize: '2xl', lg: { fontSize: '6xl' } })} />
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            css({
              '& svg': { color: isActive || isPending ? 'white' : 'skyBlue' },
            })
          }
        >
          <IconHome aria-label="homepage" />
        </NavLink>
      </li>
      <li>
        <a href="https://github.com/wab/barabear" target="_blank" rel="noreferrer">
          <IconGithub aria-label="github repository" />
        </a>
      </li>
    </Wrapper>
  );
};

export { Navigation };
