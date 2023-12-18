'use client';

import { ChangeEvent, FC, useState } from 'react';
import styles from './SearchBarCard.module.scss';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface SearchBarCardProps {}

export type sortBySelectOption = 'relevance' | 'newest';

const SearchBarCard: FC<SearchBarCardProps> = ({}) => {
  const [queryInput, setQueryInput] = useState<string>('');

  const { sortBy, perPage } = useTypedSelector((state) => state.news);
  const { search, changeSortBy, changePerPage } = useActions();

  const getResults = () => {
    search({ query: queryInput.trim(), sortBy: sortBy as sortBySelectOption, perPage });
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeSortBy(event.target.value as sortBySelectOption);

    search({ query: queryInput.trim(), sortBy: event.target.value as sortBySelectOption, perPage });
  };

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changePerPage(event.target.value as unknown as number);
    search({
      query: queryInput.trim(),
      sortBy: sortBy as sortBySelectOption,
      perPage: event.target.value as unknown as number,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.inputrow}>
        <svg
          className={styles.searchicon}
          width='20px'
          height='20px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
            stroke='#000000'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <input
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
          type='text'
          className={styles.searchinput}
        />
        <button onClick={() => getResults()} className={styles.findbutton}>
          Find
        </button>
      </div>
      <div className={styles.filterrow}>
        <select className={styles.sort} value={sortBy} onChange={(e) => handleSortChange(e)}>
          <option value='newest'>Sort by Newest</option>
          <option value='relevance'>Sort by Relevance</option>
        </select>
        <label htmlFor='page' className={styles.label}>
          Items on page
        </label>
        <select className={styles.page} value={perPage} onChange={handlePageSizeChange}>
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBarCard;
