import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divadvokasi.css';

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
    { title: "Serap Aspirasi", desc: "Serap Aspirasi merupakan program kerja yang dilakukan dengan menampung aspirasi mahasiswa melalui pertemuan langsung dengan kegiatan Forum Serap Aspirasi, penyediaan link google form yang disebarkan melalui grup WhatsApp dan menyebarkan link poster pada beberapa titik di Fakultas Pertanian dan penyediaan kotak aspirasi yang berada di Sekretariat HMJ Agribisnis. Adapun maksud dan tujuan dilaksanakannya program kerja ini untuk membantu mahasiswa Jurusan Agribisnis dalam menyalurkan atau menyampaikan pendapat mengenai berbagai masalah yang terjadi di lingkungan Jurusan Agribisnis yang selanjutnya akan ditindak lanjuti pada program kerja Dialog Advokasi." },
    { title: "Dialog Advokasi", desc: "Dialog Advokasi merupakan kegiatan diskusi dengan mengundang pihak-pihak tertentu yang memiliki kewenangan untuk dapat menyalurkan aspirasi dari mahasiswa/i Jurusan Agribisnis dalam forum diskusi yang telah disediakan dan ditetapkan oleh Divisi Advokasi HMJ Agribisnis untuk mempengaruhi kebijakan atau tindakan lain untuk mencapai perubahan positif dalam suatu isu atau masalah tertentu. Program kerja Dialog Advokasi ini merupakan tindak lanjut setelah diaksanakannya program kerja Serap Aspirasi. Kegiatan ini dilakukan secara offline melalui forum diskusi yang melibatkan beberapa pihak dari proyek pembangunan Universitas Riau." },
    { title: "ADBAR (Advokasi Berkabar)", desc: "ADBAR (Advokasi Berkabar) merupakan sebuah wadah pemberian informasi mengenai perkuliahan kepada seluruh mahasiswa aktif jurusan Agribisnis seperti informasi beasiswa, informasi wisuda, penyebaram informasi aksi demo, dan lainnya. Adapun maksud dan tujuan dilaksanakannya kegiatan ini untuk membantu mahasiswa aktif Jurusan Agribisnis dalam mendapatkan informasi mengenai perkuliahan di Jurusan Agribisnis baik yang bersifat akademis maupun non akademis." },
    { title: "Advo News", desc: "Advo News merupakan tindak lanjut dari program kerja Dialog Advokasi yang memuat informasi seputar penyelesaian atau hasil dari berdialog dengan pihak-pihak terkait keluhan-keluhan mahasiswa Jurusan Agribisnis yang bekerja sama dengan Divisi KOMINFO untuk upload hasil tersebut di media sosial HMJ Agribisnis. Adapun maksud dan tujuan dari kegiatan ini untuk membantu Mahasiswa/i Jurusan Agribisnis mendapatkan informasi hasil diskusi Dialog Advokasi terhadap pihak-pihak yang terkait dalam menyelesaikan masalah atas keluhan-keluhan Mahasiswa/i Jurusan Agribisnis." },
    { title: "ASA (Aku Sayang Aku)", desc: "ASA (Aku Sayang Aku) merupakan kegiatan yang dilakukan untuk memberikan pengetahuan dan edukasi kepada mahasiswa/i Jurusan Agribisnis mengenai kekerasan seksual yang terjadi di kehidupan kampus. Kegiatan ini dilaksanakan secara offline berupa seminar atau talkshow yang membahas mengenai pelecehan dan kekerasan seksual, serta bincang-bincang mengenai kesehatan mental. Dalam kegiatan ini Divisi Advokasi menyediakan wadah bagi mahasiswa/i jurusan agribisnis untuk terbuka dan aktif dalam pencegahan dan antisipasi pelecehan seksual terutama di lingkungan kampus. Divisi Advokasi akan mengundang narasumber yang memiliki ahli di bidang ini. Adapun maksud dan tujuan dari dilaksanakannya kegiatan ini untuk membantu mahasiswa/i Jurusan Agribisnis dalam memberikan gambaran dan pengetahuan mengenai urgensi penanganan kekerasan seksual di lingkup lingkungan kampus dan dampaknya terhadap kesehatan mental korban." },
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Advokasi</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang ADVOKASI</h2>
            <p>Divisi Advokasi merupakan divisi yang berperan aktif dalam menampung aspirasi mahasiswa, mengawal isu yang berhubungan dengan bidang akademik maupun non akademik, serta menindak lanjuti aspirasi-aspirasi yang telah ditampung kepada pihak yang terkait. Divisi Advokasi juga merupakan wadah penyelesaian masalah serta menjembatani mahasiswa dengan civitas akademika Jurusan Agribisnis secara langsung maupun tidak langsung. Divisi Advokasi juga berperan sebagai inisiator tindak lanjut atas aspirasi yang telah ditampung demi terwujudnya mahasiswa Agribisnis yang kritis dan aspiratif.
            </p>
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