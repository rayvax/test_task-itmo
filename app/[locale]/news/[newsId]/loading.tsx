function LoadingNewsDetails() {
  return (
    <div className='news-details skeleton'>
      <div className='news-details__date' />
      <h1 className='news-details__title' />
      <div className='news-details__lead'>
        <div className='news-details__lead__line' />
        <div className='news-details__lead__line' />
        <div className='news-details__lead__line' />
        <div className='news-details__lead__line' />
      </div>
      <div className='news-details__news-image' />
    </div>
  );
}

export default LoadingNewsDetails;
