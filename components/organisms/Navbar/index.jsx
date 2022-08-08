import ToggleMenu from './ToggleMenu';
import MenuItem from '@/components/atoms/MenuItem';

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/icons/logo.png" width={'240px'} height={'48px'} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-lg-0 gap-2">
              <MenuItem title="Home" href="/" />
              <MenuItem title="Profile" href="/profile" submenu={
                [
                  { title: 'Sambutan Kasatlantas', href: '/profile/sambutan-kasatlantas' },
                  { title: 'Tentang Satlantas', href: '/profile/tentang-satlantas' },
                  { title: 'Visi Misi', href: '/profile/visi-misi' },
                  { title: 'Struktur Organisasi', href: '/profile/struktur-organisasi' },
                ]
              } />
              <MenuItem title="Layanan Kami" href="/layanan-kami" submenu={
                [
                  { title: 'Layanan SIM', href: '/layanan-kami/layanan-sim' },
                  { title: 'Layanan BPKB', href: '/layanan-kami/layanan-bpkb' },
                  { title: 'Layanan STNK', href: '/layanan-kami/layanan-stnk' },
                  { title: 'Layanan Dikyasa', href: '/layanan-kami/layanan-dikyasa' },
                  { title: 'Layanan Tilang', href: '/layanan-kami/layanan-tilang' },
                  { title: 'Layanan Laka Lantas', href: '/layanan-kami/layanan-laka-lantas' },
                  { title: 'Layanan Urmintu', href: '/layanan-kami/layanan-urmintu' },
                ]
              } />
              <MenuItem title="Berita" href="/berita" />
              <MenuItem title="Gallery" href="/gallery" />
              <MenuItem title="IKM" href="/ikm" />
              <MenuItem title="Inovasi" href="/inovasi" />
              <MenuItem title="Pengaduan Kami" href="/pengaduan-kami" submenu={
                [
                  { title: 'Email', href: 'mailto:minlantasbrebes5758@gmail.com' },
                  { title: 'Layanan BPKB', href: '/pengaduan-kami/layanan-bpkb' },
                  { title: 'Layanan STNK', href: '/pengaduan-kami/layanan-stnk' },
                  { title: 'Layanan Dikyasa', href: '/pengaduan-kami/layanan-dikyasa' },
                  { title: 'Layanan Tilang', href: '/pengaduan-kami/layanan-tilang' },
                  { title: 'Layanan Laka Lantas', href: '/pengaduan-kami/layanan-laka-lantas' },
                  { title: 'Layanan Urmintu', href: '/pengaduan-kami/layanan-urmintu' },
                ]
              } />
              <MenuItem title="FAQ" href="/faq" />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
