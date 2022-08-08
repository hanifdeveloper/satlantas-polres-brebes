import Image from 'next/image';

export default function Footer() {
  return (
    <div className="container-fluid background-color-footer pt-50 pb-50 row">
      <div className="col-sm-3 my-2">
        <Image src="/icons/logo.png" width={240} height={48} />
      </div>
      <div className="col-sm-6 my-2">
        <p className="text-sm">
          Website Satlantas Polres Brebes ini merupakan Layanan
          Masyarakat bagi warga Brebes dan sekitarnya untuk dapat selalu
          update dan mendapat informasi terkait Lalu Lintas.
        </p>
      </div>
      <div className="col-sm-3 text-end my-2">
        <a href="https://www.instagram.com/satlantasbrebes/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.svg" className="px-1" width={36} height={36} />
        </a>
        <a href="https://www.facebook.com/satlantas.polresbrebes.5" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/facebook.svg" className="px-1" width={36} height={36} />
        </a>
        <Image src="/icons/wa.svg" className="px-1" width={36} height={36} />
      </div>
    </div>
  );
}
