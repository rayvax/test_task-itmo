import { notFound } from 'next/navigation';
import { getNewsDetails } from '../../../store/news/utils';
import Image from 'next/image';
import { useAppLocale } from '../../../../locale/hooks';
import { dispatch } from '../../../store';
import { fetchNews } from '../../../store/news/thunk';
import { formatDate } from '../../../utils/formatDate';

type NewsDetailsPageProps = {
  params: {
    newsId: string;
  };
};

async function NewsDetailsPage({ params: { newsId } }: NewsDetailsPageProps) {
  const locale = useAppLocale();
  let newsDetails = await getNewsDetails(locale, Number(newsId));

  if (newsDetails === undefined) {
    await dispatch(fetchNews({ locale }));
    newsDetails = await getNewsDetails(locale, Number(newsId));
  }

  if (!newsDetails) return notFound();

  return (
    <div className='news-details'>
      <div className='news-details__date'>
        <time>{formatDate(newsDetails.creationDate, locale)}</time>
      </div>
      <h1 className='news-details__title'>{newsDetails.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: newsDetails.lead }} />

      <Image src={newsDetails.imageBig} alt={`news-${newsDetails.id}`} width={1140} height={800} />
    </div>
  );
}

export default NewsDetailsPage;
