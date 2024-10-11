import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divsekre.css';

// Import gambar
import informasi1 from '../assets/images/informasi.jpg';
import informasi2 from '../assets/images/informasi2.jpg';
import informasi3 from '../assets/images/informasi3.jpg';

function Divpengembangan() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProker, setExpandedProker] = useState(null);
  const images = [informasi1, informasi2, informasi3];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleProker = (index) => {
    setExpandedProker(expandedProker === index ? null : index);
  };

  const prokerList = [
    { title: "Training Administrasi Kelembagaan", desc: "Kegiatan Training Administrasi Kelembagaan adalah pelatihan yang berhubungan dengan kegiatan penataan dokumen kesekretariatan dan kebendaharaan yang berfungsi sebagai unsur penunjang kelancaran agar tercapainya tujuan organisasi. Kegiatan ini dilaksanakan dalam bentuk seminar dan dialog interaktif dengan megundang narasumber dan peserta seminar secara offline. Adapun maksud dan tujuan dilaksanakannya kegiatan ini untuk memberikan pengetahuan terkait arti dan peran penting administrasi kesekretariatan dan kebendaharaan, meningkatkan pengetahuan mengenai ruang lingkup kegiatan kesekretariatan dan kebendaharaan, memberikan pemahaman mengenai prosedur yang terkait dengan kegiatan kesekretariatan dan kebendaharaan serta meningkatkan pengetahuan mengenai cara membuat surat, pengelolaan laporan keuangan, pengarsipan serta pengelolaan dokumen penting didalam organisasi." },
    { title: "Forum Bendahara", desc: "Kegiatan Forum Bendahara merupakan kegiatan kerjasama antara Divisi Kesekretariatan dengan Bendahara umum sebagai wadah diskusi dan silaturahmi yang berhubungan dengan kegiatan kebendaharaan antar bendahara umum dengan bendahara divisi dan bendahara pelaksana kegiatan HMJ Agribisnis periode 2023/2024. Kegiatan ini dilaksanakan dalam bentuk dialog interaktif antar sesama Bendahara Umum, Bendahara Divisi, dan Bendahara Pelaksana. Adapun maksud dan tujuan dari dilaksanakannya kegiatan ini yakni untuk memberikan pengetahuan terkait arti dan peran penting kebendaharaan, meningkatkan pengetahuan mengenai ruang lingkup kegiatan kebendaharaan, memberikan pemahaman mengenai prosedur yang terkait dengan kegiatan kebendaharaan serta pengelolaan laporan keuangan." },
    { title: "Stay Sekretariat", desc: "Kegiatan Stay Sekretariat merupakan kegiatan pembuatan jadwal dan melaksanakan piket untuk menjaga Sekretariat HMJ Agribisnis, membantu mendata surat masuk dan membantu follow up daftar hadir pengurus HMJ Agribisnis yang dilaksanakan setiap hari. Kegiatan ini diberikan jadwal piket pada setiap divisi dimana dalam seminggu satu divisi mendapatkan 1 hari untuk piket di Sekretariat. Kegiatan ini dilaksanakan dalam bentuk para staf HMJ Agribisnis hadir di Sekretariat HMJ Agribisnis bergantian menyesuaikan jadwal perkuliahan setiap harinya dan dibantu oleh PJ Stay Sekretariat untuk mengingatkan di grup besar HMJ Agribisnis. Adapun maksud dan tujuan dibuatnya stay Sekretariat ini yaitu untuk menjaga dan meningkatkan kebersihan serta kenyamanan lingkungan sekitar Sekretariat HMJ Agribisnis yang dimana setelah terwujud, maka dapat menjadi fasilitas pendukung visi misi yang telah dibawa oleh kabinet Harmonia Progressio serta dapat mengaktifkan Sekretariat HMJ Agribisnis. Selain itu, kegiatan ini juga bertujuan untuk melatih tanggung jawab dan kedisiplinan seluruh pengurus HMJ Agribisnis periode 2023/2024." },
    { title: "Pembenahan Sekretariat HMJ Agribisnis", desc: "Pembenahan Sekretariat HMJ Agribisnis merupakan kegiatan gotong royong bersama dengan pengurus HMJ Agribisnis di sekitar gedung kesekretariatan HMJ Agribisnis. Kegiatan ini dilaksanakan dalam bentuk pembenahan seperti membersihkan halaman sekretariat, merapikan dan mempercantik pekarangan sekretariat, membersihkan ruangan sekretariat dan lain sebagainya. Adapun maksud dan tujuan kegiatan ini untuk menjaga kebersihan dan keindahan lingkungan kesekretariatan, dan mendata dan menambah inventaris serta menjalin silahturahmi dan kedekatan antar pengurus HMJ Agribisnis." },
    { title: "Buku Tamu", desc: "Kegiatan pengisian Buku Tamu merupakan kegiatan pencatatan orang di luar pengurus HMJ Agribisnis periode 2023/2024 yang berkunjung ke Sekretariat HMJ Agribisnis. Kegiatan pencatatan buku tamu ini dilakukan bersama dengan sekretaris umum HMJ Agribisnis. Kegiatan ini dilaksanakan dengan mengarahkan pengunjung sekretariat untuk mengisi Buku Tamu yang telah tersedia di sekretariat HMJ Agribisnis yang memuat informasi meliputi nama, NIM, asal organisasi atau asal instansi, dan lain-lain. Adapun maksud dan tujuan kegiatan ini yaitu digunakan sebagai alat bantu untuk mengetahui siapa saja orang yang berkunjung ke Sekretariat HMJ Agribisnis." },
    { title: "Daftar Hadir Kelembagaan", desc: "Daftar Hadir Undangan Kelembagaan adalah kegiatan pencatatan ketua kelembagaan sebagai peserta undangan yang menghadiri undangan kegiatan dari kelembagaan lain. Kegiatan ini dilaksanakan dalam bentuk pengarsipan surat masuk oleh Sekretaris Umum II dibantu oleh divisi kesekretariatan dari kelembagaan yang mengundang, selanjutnya dibuat daftar hadir dengan format pengisian informasi seperti nomor surat, pengirim undangan, tanggal kegiatan, dan yang menghadiri kegiatan tersebut. Adapun maksud dan tujuan kegiatan ini untuk mengetahui keaktifan ketua kelembagaan ataupun lembaga dalam menghadiri setiap undangan yang diberikan oleh lembaga lain." },
    { title: "Pendataan Inventaris Berkala dan Pengarsipan", desc: "Kegiatan Inventaris Berkala adalah kegiatan dari Divisi Kesekretariatan yang dilakukan dengan mencatat barang-barang atau inventaris yang dimiliki di Sekretariat HMJ Agribisnis seperti kelengkapan fasilitas kerja, Alat Tulis Kantor (ATK) yang digunakan untuk mendukung kegiatan operasional secara berkala. Kegiatan ini dilaksanakan dalam bentuk perekapan data menggunakan Microsoft word dengan memberi label nomor pada barang seperti untuk Alat Tulis Kantor (ATK) memiliki kode A dan barang besar memiliki kode B dengan format sesuai dengan PERMA. Adapun maksud dan tujuan kegiatan ini untuk pengarsipan data barang-barang yang kurang ataupun hilang pada saat pengecekan sehingga dapat dilengkapi segera agar tidak mengganggu administrasi di sekretariat HMJ Agrbisnis." },
    { title: "Pembiodataan Pengurus", desc: "Kegiatan Pembiodataan Pengurus merupakan kegiatan yang dilakukan untuk mendata pengurus HMJ Agribisnis secara menyeluruh. Kegiatan ini dilaksanakan dalam bentuk pengisian google form yang memuat informasi nama, NIM, asal daerah, alamat, pas foto dan lain-lain. Setelah dilakukannya pengisian data diri, langkah selanjutnya adalah perekapan seluruh data pengurus yang akan digunakan sebagai bahan pengarsipan. Adapun maksud dan tujuan dari dibuatnya pembiodataan ini adalah untuk mendapatkan informasi data pribadi seluruh pengurus HMJ Agribisnis untuk keperluan administrasi HMJ Agribisnis kedepannya." }
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Kesekretariatan</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang KESEKRETARIATAN</h2>
            <p>Divisi Kesekretariatan merupakan divisi yang memiliki peran dalam penataan terhadap Sekretariat HMJ Agribisnis dan bertugas dalam membantu mencapai tujuan organisasi. Fungsi dari Divisi Kesekretariatan mencakup kegiatan dalam administrasi yang berfungsi sebagai alat pelaksanaan kegiatan ketatausahaan yang bersifat pelayanan (membantu) Sekretaris Umum, sebagai pusat pengarsipan administrasi berupa file dokumen penting (master file) yang mengatur dan memelihara segala dokumentasi, dan bertugas dalam memeriksa kelengkapan fasilitas kerja dan Alat Tulis Kantor (ATK) serta penataan ruang Sekretariat.</p>
          </section>

          <section className="activities slide-in-right">
            <h2>Kegiatan Proker</h2>
            <div className="proker-list">
              {prokerList.map((proker, index) => (
                <div key={index} className="proker-item">
                  <div className="proker-header">
                    <h3>{proker.title}</h3>
                    <button className={`chevron ${expandedProker === index ? 'up' : 'down'}`} onClick={() => toggleProker(index)}>
                      &#9660;
                    </button>
                  </div>
                  {expandedProker === index && (
                    <div className="proker-description">
                      <p>{proker.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="image-sliderdiv slide-in-bottom">
            <h2>Dokumentasi Kegiatan</h2>
            <div className="sliderdiv-container">
              <button onClick={prevImage} className="sliderdiv-button prev">&#10094;</button>
              <img src={images[currentImage]} alt={`Documentation ${currentImage + 1}`} className="sliderdiv-image" />
              <button onClick={nextImage} className="sliderdiv-button next">&#10095;</button>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Divpengembangan;