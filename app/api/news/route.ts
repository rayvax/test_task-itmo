import { NextResponse } from 'next/server';
import { AppLocale } from '../../../locale/types';
import { baseApiUrl } from '..';
import { newsSearchParams, toLanguageId } from './utils';
import { newsListPath } from './constants';
import { NewsInfo, NewsInfoResponse } from './types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const locale: AppLocale = (searchParams.get('locale') ?? 'ru') as AppLocale;
  const langId = toLanguageId(locale);

  const fetchSearchParams = newsSearchParams(langId);

  const resp = await fetch(`${baseApiUrl}${newsListPath}/?${fetchSearchParams.toString()}`);
  const json = await resp.json();

  const newsResp = json.news as NewsInfoResponse[];

  const resultNews: NewsInfo[] = newsResp.map((news) => ({
    id: news.id,
    title: news.title,
    imageSmall: news.image_small,
    imageBig: news.image_big,
    creationDate: new Date(news.creation_date).getTime(),
    lead: news.lead,
  }));

  return NextResponse.json(resultNews);
}
