import NewsItem from '@/components/atoms/NewsItem';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeNews({news}) {
  let mainNews = {};
  if (news.count > 0) {
    mainNews = news.data[0];
  }

  return (
    <div>
      <h2 className="fw-bold">Berita Terbaru</h2>
      <h6 className="color-palette-2">Satlantas Polres Brebes</h6>
      <div className="row mt-4">
        <div className="col-sm-5 mb-3">
          {/* <Image className="img-fluid rounded-news" src="/assets/placeholder-news-1.png" width={701} height={384} alt="console" layout="intrinsic" /> */}
          { mainNews.image_url ? <img src={mainNews.image_url} className="img-fluid rounded-news" alt="" /> : '' }
          <h4 className="fw-bold mt-3">{mainNews.title}</h4>
          <p className="color-palette-5">{mainNews.full_date_post} © Satlantas Polres Brebes</p>
          <p className="color-palette-5">{mainNews.excerpt}</p>
          {/* <a className="btn btn-primary text-md text-white rounded-pill px-4 py-1" href="#feature" role="button">
            Read More
          </a> */}
          <Link href={'/berita/'+mainNews.slug}><a className="btn btn-primary text-sm text-white rounded-pill mt-3 px-4 py-1">Read More</a></Link>
        </div>

        <div className="col-sm-7 mb-3">
          {
            news.data.map((data, key) => {
              if (key > 0) {
                return <NewsItem key={data.id} news={data}></NewsItem>
              }
            })
          }
        </div>
      </div>
    </div>
  );
}
