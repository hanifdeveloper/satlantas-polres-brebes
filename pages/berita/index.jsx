import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import ServiceSection from '@/components/organisms/ServiceSection';
import NewsItem from '@/components/atoms/NewsItem';
import httpService from '@/services/http-service';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export async function getNews(lastId){
  const last_id = lastId || 0;
  const size = 10;
  const responseNews = await httpService.getNews({last_id, size});
  // console.log(responseNews)

  return {
    lastId: responseNews.data.last_id,
    hasMore: responseNews.data.has_more,
    posts: responseNews.data.data,
  };
}

const Berita = (props) => {
  const [hasMore, setHasMode] = useState(true);
  const [lastId, setLastId] = useState(props.lastId);
  const [posts, setPosts] = useState(props.posts);

  const getMoreNews = async () => {
    const responseNews = await getNews(lastId);
    // console.log('responseNews', responseNews)
    setLastId(responseNews.lastId);
    setHasMode(responseNews.hasMore);
    setPosts([...posts, ...responseNews.posts]);
    // console.log('getMoreNews called');
  }

  return (
    <>
      <Navbar />
        <ServiceSection title="Berita">
          <InfiniteScroll
              dataLength={posts.length}
              next={getMoreNews}
              hasMore={hasMore}
              loader={<h4>Reload....</h4>}
            >
              <div className="row">
              {
                posts.map((data, key) => {
                  if (key > 0) {
                    return <NewsItem key={data.id} news={data}></NewsItem>
                  }
                })
              }
            </div>
          </InfiniteScroll>
        </ServiceSection>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const responseNews = await getNews(0);
  // console.log(responseNews)

  return {
      props: {
        lastId: responseNews.lastId,
        hasMore: responseNews.hasMore,
        posts: responseNews.posts,
      }
  };
}

export default Berita;