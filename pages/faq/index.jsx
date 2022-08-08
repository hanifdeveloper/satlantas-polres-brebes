import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import ServiceSection from '@/components/organisms/ServiceSection';

export default function FAQ() {
  return (
    <>
      <Navbar />
      <ServiceSection title="FAQ">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                <h6>APA SAJA SYARAT SIM BARU  ?</h6>
              </button>
            </h2>
            <div id="collapse_1" className="accordion-collapse collapse show" aria-labelledby="heading_1" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li>
                    Batas Usia Minimal
                    <ol>
                      <li>SIM A, SIM C, SIM D dan SIM D1: 17 tahun</li>
                      <li>SIM B1: 20 tahun</li>
                      <li>SIM B2: 21 tahun</li>
                    </ol>
                  </li>
                  <li>
                    Syarat Administratif
                    <ol>
                      <li>Memiliki Kartu Tanda Penduduk (KTP)</li>
                      <li>Mengisi formulir pendaftaran</li>
                      <li>Sehat jasmani dan rohani, berpenampilan rapi, dan bersepatu (tidak diperkenankan memakai sendal)</li>
                      <li>Lulus ujian teori, ujian praktik, dan/atau ujian ketrampilan melalui simulator</li>
                    </ol>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                <h6>APA SAJA SYARAT UNTUK MELAKSANAKAN PROSES PERPANJANGAN SIM ?</h6>
              </button>
            </h2>
            <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="heading_2" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ol>
                  <li>KTP ASLI + FOTOCOPY KTP</li>
                  <li>SIM YANG MASIH BERLAKU</li>
                  <li>SURAT KETERANGAN KESEHATAN JASMANI</li>
                  <li>SURAT KETERANGAN KESEHATAN ROHANI</li>
                  <li>BUKTI PEMBAYARAN RESI BRI</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                <h6>BERAPA NOMINAL PEMBAYARAN SIM ?</h6>
              </button>
            </h2>
            <div id="collapse_3" className="accordion-collapse collapse" aria-labelledby="heading_3" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ol>
                  <li>SIM A - Pembuatan SIM A Baru, sebesar Rp 120.000 - Perpanjang SIM A, sebesar Rp 80.000</li>
                  <li>SIM B1 - Pembuatan SIM B1 Baru, sebesar Rp 120.000 - Perpanjang SIM B1: Rp 80.000</li>
                  <li>SIM B2 - Pembuatan SIM B2 Baru, sebesar Rp 120.000 - Perpanjang SIM B2, sebesar Rp 80.000</li>
                  <li>SIM C - Pembuatan SIM C Baru, sebesar Rp 100.000 - Perpanjang SIM C, sebesar Rp 75.000</li>
                  <li>SIM D (Penyandang disabilitas/berkebutuhan khusus) - Pembuatan SIM D Baru, sebesar Rp 50.000 - Perpanjang SIM D, sebesar Rp 30.000</li>
                  <li>SIM Internasional - Pembuatan SIM Internasional Baru, sebesar Rp 250.000 - Perpanjang SIM Internasional, sebesar Rp 225.000</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                <h6>JAM PELAYANAN DI SATPAS BREBES ?</h6>
              </button>
            </h2>
            <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="heading_4" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ol>
                  <li>SENIN – JUMAT 08.00 -15.00</li>
                  <li>SABTU	08.00-14.00</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_5">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                <h6>BAGAIMANA PEMBUATAN SIM HILANG ?</h6>
              </button>
            </h2>
            <div id="collapse_5" className="accordion-collapse collapse" aria-labelledby="heading_5" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ol>
                  <li>Sehat jasmani dan rohani dinyatakan dengan surat keterangan dokter.</li>
                  <li>Laporan polisi kehilangan SIM</li>
                  <li>Membayar formulir di BII/BRI</li>
                  <li>Mengisi formulir pemilik dapat mengajukan pembuatan SIM dengan mendatangi pelaksana penerbitan SIM setempat.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_6">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                <h6>APAKAH SIM LUAR KOTA DAERAH PROVISI BISA DI PERPANJANG DI SATPAS BREBES ?</h6>
              </button>
            </h2>
            <div id="collapse_6" className="accordion-collapse collapse" aria-labelledby="heading_6" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Bisa dilakukan proses perpanjangan , apabila masa berlaku SIM masih dalam keadaan hidup atau tidak terlewat masa berlaku SIM.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_7">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                <h6>APAKAH SIM YANG TERLAMBAT MASA BERLAKUNYA BISA DILAKUKAN PROSES PERPANJANGAN ?</h6>
              </button>
            </h2>
            <div id="collapse_7" className="accordion-collapse collapse" aria-labelledby="heading_7" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Tidak Bisa,sim yang telah melewati masa berlakunya tidak bisa dilaksakanakn proses perpanjangan</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading_8">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                <h6>BAGAI MANA PROSES PENERBITAN PADA APLIKASI SINAR DIGITAL KORLANTAS POLRI ?</h6>
              </button>
            </h2>
            <div id="collapse_8" className="accordion-collapse collapse" aria-labelledby="heading_8" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ol>
                  <li>Download aplikasi</li>
                  <li>Verifikasi No. HP (OTP)</li>
                  <li>Registrasi (NIK, SIM, Foto KTP, SIM dan Selfie)</li>
                  <li>Verifikasi NIK dan SIM</li>
                  <li>Pilih jenis SIM dan lokasi Satpas</li>
                  <li>Verifikasi hasil pemeriksaan kesehatan dan psikologi</li>
                  <li>Isi rekening pengembalian (pembatalan)</li>
                  <li>Pilih metode pengiriman</li>
                  <li>Upload pas foto dan tanda tangan</li>
                  <li>Pembayaran PNBP dan biaya kirim</li>
                  <li>Cetak SIM</li>
                  <li>Pengiriman</li>
                  <li>SIM diterima pemohon.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </ServiceSection>
      <Footer />
    </>
  );
}
