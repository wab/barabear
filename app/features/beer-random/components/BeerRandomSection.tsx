import { styled } from '~/styled-system/jsx';

import { BeerRandom } from './BeerRandom';

const Wrapper = styled('aside', {
  base: {
    p: 8,
    border: '4px solid',
    borderColor: 'white',
    borderRadius: 'md',
    backgroundColor: 'white',

    '& ul': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      gap: 4,
      lg: {
        flexDirection: 'row',
        alignItems: 'center',
      },

      '& li': {
        width: '100%',
        textAlign: 'center',

        '&:not(:last-child)': {
          borderBottom: 'none',
          paddingBottom: 0,
        },
      },
    },
  },
});

const BeerRandomSection: React.FunctionComponent<{
  count: number;
}> = ({ count }) => {
  return (
    <Wrapper>
      <ul>
        {Array.from({ length: count }).map((_, index) => (
          <li key={index}>
            <BeerRandom id={index + 1} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { BeerRandomSection };
