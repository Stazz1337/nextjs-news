import { FC } from 'react'
import styles from './NewsCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from './../../../../helpers/formatDate';


interface NewsCardProps {
  newsItem: any
}

const fallbackImage = 'https://yt3.googleusercontent.com/iRLpuvr-WoAkDmOmXQiVnk7Gf4knJ6_OmIqZRmal4FeFxwbPLkMwIWm4QZlvH9t2GojQWZ4P=s900-c-k-c0x00ffffff-no-rj'

const NewsCard: FC<NewsCardProps> = ({ newsItem }) => {
  const { webPublicationDate, webTitle, id: newsItemId, fields } = newsItem

  return <div className={styles.card}>
    <Image priority alt='image' width={320} height={250} src={fields ? fields.thumbnail : fallbackImage} className={styles.image}></Image>
    <div className={styles.cardtext}>
      <p className={styles.cardtime}>{formatDate(webPublicationDate)}</p>
      <h3 className={styles.cardtitle}>{webTitle}</h3>
      <div className={styles.actions}>
        <Link href={`/news/${newsItemId}`} className={styles.detailbutton}>
          Details &#10148;
        </Link>
      </div>
    </div>
  </div>
}

export default NewsCard