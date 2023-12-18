'use client';

import { FC, useEffect } from 'react';
import styles from './Home.module.scss';
import SearchBarCard, { sortBySelectOption } from './search-bar/SearchBarCard';
import NewsCard from './card/NewsCard';
import { useActions } from '@/hooks/useActions';
import { Loader2 } from 'lucide-react';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { isLoading, news, sortBy, perPage } = useTypedSelector((state) => state.news);

  const { search } = useActions();

  useEffect(() => {
    search({ query: '', sortBy: sortBy as sortBySelectOption, perPage });
  }, [perPage, search, sortBy]);

  return (
    <div className={styles.home}>
      <SearchBarCard />
      <div className={styles.cardsrow}>
        {isLoading ? (
          <Loader2 className={styles.loader} />
        ) : news.length > 0 ? (
          news.map((newsItem: any) => {
            return <NewsCard key={newsItem.id} newsItem={newsItem} />;
          })
        ) : (
          'No news found'
        )}
      </div>
    </div>
  );
};

export default Home;
