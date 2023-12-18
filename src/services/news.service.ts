import { sortBySelectOption } from '@/components/screens/home/search-bar/SearchBarCard';
import axios from 'axios';

export const newsServices = {
  async search({
    query,
    sortBy,
    perPage,
  }: {
    query: string;
    sortBy: sortBySelectOption;
    perPage: number;
  }) {
    const { data } = await axios.get(
      `https://content.guardianapis.com/search?q=${query}&show-fields=thumbnail&order-by=${sortBy}&page-size=${perPage}&api-key=406f709e-b200-49f0-84f6-e7932bee402e`,
      {},
    );
    return data;
  },
  async getNewsData(newsId: string) {
    const { data } = await axios.get(
      `https://content.guardianapis.com/${newsId}?api-key=406f709e-b200-49f0-84f6-e7932bee402e&show-fields=thumbnail,body,trailText,headline`,
      {},
    );
    return data.response;
  },
};
