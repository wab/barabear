import * as React from 'react';

import { useDebounce } from 'ahooks';

import { Input } from '~/components';
import { Suspense } from '~/components/Suspense';
import { css } from '~/styled-system/css';

import { BeerSearchResult } from './BeerSearchResult';

const BeerSearch: React.FunctionComponent<React.ComponentProps<'div'>> = (props) => {
  const [search, setSearch] = React.useState('');
  const debouncedValue = useDebounce(search, { wait: 300 });
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearch(term);
  };

  return (
    <div {...props}>
      <Input
        type="search"
        value={search}
        onChange={onSearchChange}
        placeholder="Search for a beer"
        className={css({ marginBottom: '16px' })}
      />

      <Suspense>
        <BeerSearchResult value={debouncedValue === '' ? undefined : debouncedValue} />
      </Suspense>
    </div>
  );
};

export { BeerSearch };
