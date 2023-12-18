import { newsServices } from '@/services/news.service';
import { FC } from 'react';
import style from './newsPage.module.scss';
import './text.scss';
import { formatDate } from '@/helpers/formatDate';
import Image from 'next/image';
import Link from 'next/link';
interface pageProps {
  params: {
    slug: string[];
  };
}

function createMarkup(c: string) {
  return { __html: c };
}

const page: FC<pageProps> = async ({ params }) => {
  const newsId = params.slug.join('/');

  const { content } = await newsServices.getNewsData(newsId);

  return (
    <div className={style.newspage}>
      <div className={style.card}>
        <div className={style.linkrow}>
          <Link href='/' className={style.back}>
            &#8617; Back
          </Link>
        </div>
        <h1 className={style.title}>{content.webTitle}</h1>
        <div className={style.subtitle}>
          <p>{formatDate(content.webPublicationDate)}</p>
          <a href={content.webUrl}>Read on Guardian</a>
        </div>

        <h2 className={style.headline}>
       
          <Image
            width={320}
            height={200}
            className={style.image}
            src={content.fields.thumbnail}
            alt='Image'></Image>
          {content.fields.headline}
        </h2>

        <div dangerouslySetInnerHTML={createMarkup(content.fields.body)}></div>
        <cite>{content.fields.trailText}</cite>
      </div>
    </div>
  );
};

export default page;
