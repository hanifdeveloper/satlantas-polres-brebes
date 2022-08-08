import Link from 'next/link';

export default function NewsItem({news}) {
  return (
    <>
        <div className="row mb-5">
          <div className="col-sm-5">
              {/* <Image className="img-fluid rounded-news" src="/assets/placeholder-news-3.png" width={304} height={183} alt="console" layout="intrinsic" /> */}
              { news.image_url ? <img src={news.image_url} className="img-fluid rounded-news" alt="" /> : '' }
          </div>
          <div className="col-sm-7">
              <h6 className="fs-5 fw-bold">{news.title}</h6>
              <p className="text-xs text-muted mb-2">{news.full_date_post} © Satlantas Polres Brebes</p>
              <p className="text-sm">{news.excerpt}</p>
              <Link href={'/berita/'+news.slug}><a className="btn btn-primary text-sm text-white rounded-pill mt-3 px-4 py-1">Read More</a></Link>
          </div>
        </div>
    </>
  )
}