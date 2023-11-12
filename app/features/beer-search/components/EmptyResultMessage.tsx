import * as React from 'react';

import { css } from '~/styled-system/css';

import { EMPTY_RESULT_MESSAGE } from '../utils';

const EmptyResultMessage: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  return (
    <div role="alert" className={css({ fontStyle: 'italic', color: 'gray.500' })}>
      {children || EMPTY_RESULT_MESSAGE}
    </div>
  );
};

export { EmptyResultMessage };
