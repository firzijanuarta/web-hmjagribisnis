import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divpengembang.css';

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
    { title: "Agrination Festival", desc: "Agrination Festival merupakan kegiatan yang memiliki 4 kategori kegiatan yaitu bazar Agrination Festival, perlombaan akademik, perlombaan non akademik, dan ditutup dengan kegiatan Talkshow. Perlombaan bidang akademik terdiri dari perlombaan Essay, Video Kreatif, dan Poster Digital. Perlombaan non akademik terdiri dari Solo Song, Mobile Legend, dan Tari Kreasi" },
    { title: "Agribusiness Cup", desc: "Agribusiness Cup merupakan kegiatan kompetisi futsal tahunan antar mahasiswa/i aktif dan alumni dari Jurusan Agribisnis yang diadakan selama 2 hari berturut-turut dengan 2 kategori yaitu futsal laki-laki dan futsal perempuan. Adapun maksud dan tujuan kegiatan ini untuk menjalin silahturami pada setiap angkatan yang ada di Jurusan Agribisnis baik dari angkatan termuda hingga para alumni. Selain itu setiap angkatan juga dapat menunjukkan kemampuan terbaik nya dalam bermain futsal untuk memenangkan kompetisi futsal yang diadakan pada event ini." },
    { title: "Seminar Pertanian", desc: "Seminar Pertanian merupakan program kerja PEPMA yang dilaksanakan bersamaan dengan Agrination Festival.Seminar Pertanian ini merupakan rangkaian kegiatan Agrination Festival. Adapun maksud dan tujuan kegiatan ini untuk memberikan wadah dan pengembangan pengetahuan bagi partisipan agar peka terhadap isu terkini seputar permasalahan dalam pertanian yang dihadapi oleh negara Indonesia. Bentuk Seminar ini adalah Talkshow diskusi interaktif dengan mengundang pembahas materi dari 3 kategori yaitu pendidikan, pemerintahan, dan praktisi." },
    { title: "Kelas Persiapan PKM", desc: "Kegiatan PKM (Program Kretivitas mahasiswa) merupakan kegiatan pelatihan pembuatan proposal yang diakukan secara langsung dan dibimbing oleh pemateri yang mengerti dibidangnya, sehingga dapat menambah pemahaman peserta mengenai meningkatkan kreativitas dan semangat berinovasi melalui kegiatan Kelas Persiapan PKM. Adapun maksud dan tujuan kegiatan ini untuk melatih mahasiswa dalam membuat proposal yang ideal untuk sebuah bisnis atau usaha yang ingin dimulai dan mencetak mahasiswa yang mampu membuat proposal yang dapat bersaing pada PKM Nasional." },
    { title: "PILMAPRES", desc: "Kegiatan PILMAPRES merupakan salah satu ajang pembentukan karakter mahasiswa dalam melakukan inovasi, berfikir kreatif, dan membentuk lulusan yang memiliki daya saing serta peka terhadap lingkungan sekitar. Ajang kompetisi ini dilaksanakan dengan mengembangkan suatu inovasi atau ide kreatif yang dituang melalui gagasan kreatif dalam bentuk Karya Tulis Ilmiah (KTI) Essai. Peserta diseleksi melalui dua tahap, yaitu tahap penilaian berkas dan tahap presentasi essai secara langsung dihadapan juri. Adapun maksud dan tujuan kegiatan ini untuk mendapatkan mahasiswa Jurusan Agribisnis dengan prestasi terbaik dari segala aspek yang bisa memberikan social impact kepada lingkungannya, menumbuhkan semangat berprestasi bagi seluruh mahasiswa aktif Agribisnis, serta mendapatkan mahasiswa berprestasi di tingkat jurusan sehingga mahasiswa berprestasi tersebut dapat naik ke PILMAPRES tingkat fakultas." },
    { title: "Agri-learn", desc: "Agri-Learn atau Agribusiness Learning adalah kegiatan pelatihan atau penjelasan kembali mengenai materi mata kuliah yang sulit dimengerti oleh mahasiswa agribisnis. Tujuan dari kegiatan ini adalah sebagai sarana mahasiswa untuk menambah pemahaman mengenai materi yang sulit mahasiswa agribisnis dalam proses pembelajaran" },
    { title: "Fun Futsal", desc: "Kegiatan ini merupakan kegiatan latihan futsal dan silahturahmi yang dilakukan oleh setiap mahasiswa jurusan Agribisnis di setiap angkatan, tetapi tidak menutup kemungkinan bahwa mahasiswi jurusan Agribisnis dapat mengikuti kegiatan ini. Adapun maksud dan tujuan kegiatan ini untuk mempererat ikatan silahturahmi dan kekeluargaan Jurusan Agribisnis mulai dari mahasiswa aktif termuda hingga alumni. Serta mengembangkan prestasi dibidang non-akademik melalui berbagai event." },
    { title: "Fun Badminton", desc: "Fun badminton merupakan salah satu wadah bagi mahasiswa/i agribisnis untuk serta mengembangkan potensi dan skill olahraga badminton serta yang dimiliki serta menjadi wadah untuk mempererat hubungan antar mahasiswa/i yang di Jurusan Agribisnis. Adapun maksud dan tujuan kegiatan ini untuk mempererat tali silaturahmi sesama Jurusan Agribisnis, dan mahasiswa/i Jurusan Agribisnis dapat menyalurkan minat dan bakat pada olahraga badminton." },
    { title: "Agribusiness E-Sport", desc: "Agribusiness E-Sport atau Agri E-Sport merupakan salah satu jenis ajang kompetisi dalam bentuk game online, jenis game yang digunakan adalah Mobile Legends. Kegiatan ini berupa sebuah turnamen yang akan mempertemukan tim-tim terbaik, dan dirancang untuk menghadirkan persaingan sengit antar tim, hiburan, dan peluang untuk memenangkan hadiah yang telah disiapkan. Adapun maksud dan tujuan kegiatan ini untuk mewadahi minat dan bakat mahasiswa agribisnis dalam dunia e-sport dan mencari potensipotensi/bibit-bibit unggul dalam dunia e-sport terkhusus untuk game mobile legend dari mahasiswa/I Agribisnis yang diharapkan dapat bersaing ditingkat daerah atau pun nasional." }
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Pengembangan Potensi Mahasiswa</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang PEPMA</h2>
            <p>Divisi Pengembangan Potensi Mahasiswa atau disebut dengan PEPMA merupakan salah satu divisi yang mewadahi dan menunjang potensi yang ada pada setiap mahasiswa. Dalam Divisi PEPMA memiliki dua fokus di dalamnya yaitu Pengembangan Potensi dan Sumberdaya Mahasiswa (PPSDM) dan Minat dan Bakat (MIKAT) yang memiliki visi dan tujuan yang sama yakni mampu menjadi wadah untuk mengembangkan setiap potensi yang ada pada mahasiswa Jurusan Agribisnis baik dari segi akademik maupun dari non akademik.</p>
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