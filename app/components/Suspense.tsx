import * as React from 'react';

import { Loader } from '~/components';
import { css } from '~/styled-system/css';

const FallBack = () => (
  <div
    aria-label="loading"
    className={css({
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
    })}
  >
    <Loader className={css({ width: '60px', color: 'prussianBlue' })} />
  </div>
);

const Suspense: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  return <React.Suspense fallback={<FallBack />}>{children}</React.Suspense>;
};

export { Suspense };
