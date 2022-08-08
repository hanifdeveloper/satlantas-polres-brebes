import Image from 'next/image';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import ServiceSection from '@/components/organisms/ServiceSection';
import httpService from '@/services/http-service';

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: 'sambutan-kasatlantas' }},
//       { params: { id: 'struktur-organisasi' }},
//       { params: { id: 'tentang-satlantas' }},
//       { params: { id: 'visi-misi' }},
//     ],
//     fallback: false
//   }
// }

// export async function getStaticProps(ctx) {
  export async function getServerSideProps(ctx) {
  const response = await httpService.getPage(ctx.params.id);
  
  return {
    props: { response },
    // revalidate: 5
  }
}

export default function Profile(props) {
  const response = props.response;
  const message = response.message;
  const data = response.data;

  return (
    <>
      <Navbar />
        {
          data !== null ? 
          <ServiceSection title={data.title}>
            <article className="row mt-5 no-gutters">
              <div className="col-md-12">
                <div className="image-wrapper float-start pe-4">
                  {/* { data.image_url ? <Image src={data.image_url} layout="fill" objectFit="contain" alt="" /> : '' } */}
                  {/* { data.image_url ? <img src={data.image_url} width={256} height={566} alt="" /> : '' } */}
                  { data.image_url ? <img src={data.image_url} className="w-100 rounded-news mb-4" alt="" /> : '' }
                </div>
                <div className="single-post-content-wrapper" dangerouslySetInnerHTML={{ __html: data.content }}>
                </div>
              </div>
            </article>
          </ServiceSection>:
          <ServiceSection title={message}></ServiceSection>
        }
      <Footer />
    </>
  )
}
