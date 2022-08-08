import ContainerFluid from '../ContainerFluid';

export default function ServiceSection(props) {
  const { title, children } = props;

  return (
    <ContainerFluid>
      <div className="row justify-content-between">
        <div className="col-md-8 mb-4">
          <h1 className="fs-1 fw-bold mb-4">{title}</h1>
          {
            children
          }
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow rounded border-0">
            <div className="card-body py-4">
              <div className="card card-body rounded-news background-color-blue">
                <h6 className="color-palette-6 p-0">Tracking BPKB</h6>
              </div>
              <div className="mx-4 mb-5">
                <p className="mt-3">Masukan Nopol Kendaraan Anda</p>
                <input className="form-control my-0" placeholder="Input Nopol" />
                <p className="text-sm color-palette-5 mt-2">Pastikan yang anda masukan benar.</p>
                <button type="submit" className="btn btn-warning">Submit</button>
              </div>
              <div className="card card-body rounded-news background-color-blue my-3">
                <h6 className="color-palette-6 p-0">Pesan Kamtibmas</h6>
              </div>
              <div className="mx-4 mb-5">
                <p className="text-sm color-palette-5">Rabu, 16 Jun 2021   22:04:43   © Satlantas Polres Brebes</p>
                <p className="text-sm">
                  Untuk dapat mengetahui informasi Pajak Kendaran yang dimiliki,
                  Bpk/Ibu/Saudara/Saudari sekalian dapat mengeceknya melalui
                  website resmi milik pemerintah dengan memasukkan Nomor Kendaraan.......
                </p>
              </div>
              <div className="card card-body rounded-news background-color-blue my-3">
                <h6 className="color-palette-6 p-0">Pesan Tertib Lalu Lintas</h6>
              </div>
              <div className="mx-4 mb-5">
                <p className="text-sm color-palette-5">Rabu, 16 Jun 2021   22:04:43   © Satlantas Polres Brebes</p>
                <p className="text-sm">
                  Untuk dapat mengetahui informasi Pajak Kendaran yang dimiliki,
                  Bpk/Ibu/Saudara/Saudari sekalian dapat mengeceknya melalui
                  website resmi milik pemerintah dengan memasukkan Nomor Kendaraan.......
                </p>
              </div>
              <div className="card card-body rounded-news background-color-blue my-3">
                <h6 className="color-palette-6 p-0">Berita Terbaru</h6>
              </div>
              <div className="mx-4">
                <p className="text-sm color-palette-5">Rabu, 16 Jun 2021   22:04:43   © Satlantas Polres Brebes</p>
                <p className="text-sm">
                  Untuk dapat mengetahui informasi Pajak Kendaran yang dimiliki,
                  Bpk/Ibu/Saudara/Saudari sekalian dapat mengeceknya melalui
                  website resmi milik pemerintah dengan memasukkan Nomor Kendaraan.......
                </p>
                <p className="text-sm color-palette-5">Rabu, 16 Jun 2021   22:04:43   © Satlantas Polres Brebes</p>
                <p className="text-sm">
                  Untuk dapat mengetahui informasi Pajak Kendaran yang dimiliki,
                  Bpk/Ibu/Saudara/Saudari sekalian dapat mengeceknya melalui
                  website resmi milik pemerintah dengan memasukkan Nomor Kendaraan.......
                </p>
                <p className="text-sm color-palette-5">Rabu, 16 Jun 2021   22:04:43   © Satlantas Polres Brebes</p>
                <p className="text-sm">
                  Untuk dapat mengetahui informasi Pajak Kendaran yang dimiliki,
                  Bpk/Ibu/Saudara/Saudari sekalian dapat mengeceknya melalui
                  website resmi milik pemerintah dengan memasukkan Nomor Kendaraan.......
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerFluid>
  );
}
