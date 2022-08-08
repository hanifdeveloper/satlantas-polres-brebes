import Navbar from '@/components/organisms/Navbar';
import HomeContact from '@/components/organisms/HomeContact';
import ContainerFluid from '@/components/organisms/ContainerFluid';
import HomeInformation from '@/components/organisms/HomeInformation';
import HomeNews from '@/components/organisms/HomeNews';
import HomeVideo from '@/components/organisms/HomeVideo';
import HomeUtility from '@/components/organisms/HomeUtility';
import Footer from '@/components/organisms/Footer';
import BPKBCheck from '@/components/organisms/BPKBCheck'
import httpService from '@/services/http-service';

// export async function getStaticProps(ctx) {
export async function getServerSideProps(ctx) {
  const params = { last_id: 0, size: 4 };
  const responseNews = await httpService.getNews(params);
  
  return {
    props: { news: responseNews.data },
    // revalidate: 5
  }
}

export default function Home(props) {
  // console.log('news', props.news);
  return (
    <>
      <div className="bg-header">
        <Navbar />
        <section className="pt-lg-60 pb-50">
          <div className="container-xxl container-fluid">
            <div className="row gap-lg-0 gap-5">
              <div className="col-lg-7 col-12 my-auto">
                <h1 className="header-title color-palette-1 fw-bold">
                  Selamat Datang
                  <br className="d-sm-block d-none" />
                  <span className="header-title-secondary color-palette-2 fw-bold">
                    di Website Satlantas Res Brebes
                  </span>
                </h1>
                <p className="mt-30 mb-40 text-md color-palette-5">
                  Website ini merupakan Layanan Masyarakat bagi warga Brebes dan sekitarnya
                  <br className="d-sm-block d-none" />
                  untuk dapat selalu update dan mendapat informasi terkait Lalu Lintas.
                </p>
                <div className="d-flex flex-lg-row flex-column gap-4">
                  <a className="btn btn-primary text-lg text-white rounded-pill px-4 py-2" href="#feature" role="button">
                    Gallery Foto
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-12 d-lg-block d-none">
                <div className="d-flex justify-content-lg-end justify-content-center">
                  <div className="position-relative justify-content-end">
                    <img src="/assets/hero-2.png" className="rounded-news w-100" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContainerFluid>
        <HomeContact />
      </ContainerFluid>
      <ContainerFluid>
        <HomeInformation />
      </ContainerFluid>
      <ContainerFluid>
        <BPKBCheck />
      </ContainerFluid>
      <ContainerFluid>
        <HomeNews news={props.news} />
      </ContainerFluid>
      <ContainerFluid>
        <HomeVideo />
      </ContainerFluid>
      <ContainerFluid>
        <HomeUtility />
      </ContainerFluid>
      <Footer />
    </>
  );
}
