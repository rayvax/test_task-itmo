import Link from 'next-intl/link';

function NewsDetailsNotFound() {
  return (
    <div className='news-details not-found'>
      <h1>News not found</h1>
      <p>
        Go to{' '}
        <Link href={'/'} className='home-link'>
          News dashboard
        </Link>
      </p>
    </div>
  );
}

export default NewsDetailsNotFound;
