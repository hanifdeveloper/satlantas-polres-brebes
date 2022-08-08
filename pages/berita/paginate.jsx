import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import ServiceSection from '@/components/organisms/ServiceSection';
import NewsItem from '@/components/atoms/NewsItem';
import httpService from '@/services/http-service';
import { useEffect, useState } from 'react';
import { Router, withRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

const Berita = (props) => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, []);

  const paginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery
    });
  }

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  else {
    content = (
      // <dir><pre>{JSON.stringify(props.posts, null, 2) }</pre></dir>
      <div className="row">
        {
          props.posts.map((data, key) => {
            if (key > 0) {
              return <NewsItem key={data.id} news={data}></NewsItem>
            }
          })
        }
      </div>
    );
  }

  return (
    <>
      <Navbar />
        <ServiceSection title="Berita">
          {content}

          <nav key={props.totalCount} className="pagination is-centered" role="navigation" aria-label="pagination">
            <ReactPaginate
              previousLabel={'Prev'}
              nextLabel={'Next'}
              containerClassName={'pagination-list'}
              pageLinkClassName={'pagination-link'}
              previousLinkClassName={'pagination-previous'}
              nextLinkClassName={'pagination-next'}
              activeClassName={'pagination-link is-current'}
              disabledClassName={'pagination-link is-disabled'}
              pageCount={Math.min(10, props.pageCount)}
              onPageChange={paginationHandler}
            />
          </nav>
        </ServiceSection>
      <Footer />
    </>
  );
}

export async function getServerSideProps({query}) {
  const page = query.page || 1; //if page empty we request the first page
  const size = 5;
  const responseNews = await httpService.getNewsPaginate({page, size});
  console.log(responseNews)

  return {
      props: {
        totalCount: responseNews.data.total,
        pageCount: responseNews.data.last_page,
        currentPage: responseNews.data.current_page,
        perPage: responseNews.data.per_page,
        posts: responseNews.data.data,
      }
  };
}


// Berita.getInitialProps = async ({query}) => {
//   // const page = query.page || 1; //if page empty we request the first page
//   // const size = 5;
//   // const responseNews = await httpService.getNews({page, size});
//   // console.log(responseNews)

//   // return {
//   //     totalCount: responseNews.data.total,
//   //     pageCount: responseNews.data.last_page,
//   //     currentPage: responseNews.data.current_page,
//   //     perPage: responseNews.data.per_page,
//   //     posts: responseNews.data,
//   // };

//   // const page = query.page || 1; //if page empty we request the first page;
//   // const posts = await axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token=cxzNs8fYiyxlk708IHfveKM1z1xxYZw99fYE&page=${page}`);
//   // console.log(posts);
//   // return {
//   //     totalCount: posts.data.meta.pagination.total,
//   //     pageCount: posts.data.meta.pagination.pages,
//   //     currentPage: posts.data.meta.pagination.page,
//   //     perPage: posts.data.meta.pagination.limit,
//   //     posts: posts.data.data,
//   // };
// }

export default withRouter(Berita);