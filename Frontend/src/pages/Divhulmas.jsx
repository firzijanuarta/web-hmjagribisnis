import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divhulmas.css';

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
    { title: "Kunjungan Industri", desc: "Kegiatan kunjungan industri merupakan program kerja yang dilaksanakan dengan mengunjungi industri dibidang agribisnis yang berada di Provinsi Riau. Kegiatan yang dilakukan antara lain berkeliling industri untuk mengamati proses subsistem agribisnis dari hulu hingga hilir. Adapun maksud dan tujuan pelaksanaan kegiatan ini untuk mengetahui kegiatan yang dilakukan di dunia kerja, mengetahui pengolahan dan kegiatan di suatu industri sehingga mendapatkan pengetahuan mengenai industri tersebut, dan meningkatkan minat mahasiswa/i untuk terjun ke dunia kerja industri pertanian." },
    { title: "Kunjungan Kelembagaan", desc: "Kunjungan Kelembagaan merupakan suatu kegiatan yang dilaksanakan dengan mengunjungi kelembagaan mahasiswa baik yang ada di dalam maupun luar Universitas Riau. Kegiatan yang dilakukan diantaranya berdiskusi mengenai program kerja antar kelembagaan dan menjalin kerjasama antar HMJ Agribisnis dengan kelembagaan terkait. Adapun maksud dan tujuan kegiatan ini yaitu silahturahmi, saling bertukar pikiran, menjalin kerjasama serta saling bertukar informasi mengenai program kerja maupun informasi lainnya untuk menambah wawasan." },
    { title: "Love Our Earth (LOE)", desc: "Love Our Earth merupakan suatu kegiatan yang dilaksanakan untuk memperingati hari pohon dunia yaitu pada tanggal 21 November dan juga memperingati hari menanam nasional yang jatuh pada tanggal 28 November 2023. Kegiatan ini dilakukan dengan membagikan bibit tanaman tahunan komoditi Kopi, Petai, dan Sirsak dengan ketentuan satu bibit tanaman ditukarkan dengan 2 sampah pada saat Car Free Day dan juga melakukan penanaman di Inkubator Agribisnis dengan total 500 bibit yang didapat dari Badan Pengelola Daerah Aliran Sungai (BPDAS) Pekanbaru. Adapun maksud dan tujuan kegiatan ini untuk membantu meningkatkan kesadaran masyarakat tentang pentingnya penanaman pohon sehingga diharapkan meningkatnya jumlah pohon di wilayah Pekanbaru dan mengurangi jumlah sampah yang ada pada kegiatan Car Free Day." },
    { title: "Agribusiness Go to School", desc: "Program kerja Agribusiness Goes to School merupakan kegiatan kunjungan dan sosialisasi ke Sekolah Menengah Atas (SMA)/Sederajat. Kegiatan ini dilaksanakan dengan mengirimkan utusan delegasi per daerah untuk melaksanakan kegiatan Goes to School dan memberikan materi serta memperkenalkan kehidupan kampus kepada siswa/i kelas XII yang ingin melanjutkan pendidikan ke perguruan tinggi terutama Jurusan Agribisnis Fakultas Pertanian Universitas Riau. Adapun maksud dan tujuan kegiatan ini yaitu memperkenalkan Jurusan Agribisnis Fakultas Pertanian Universitas Riau kepada siswa/i kelas XII tingkat SMA/MA/SMK." },
    { title: "Sharing and caring with Agribusiness", desc: "Kegiatan Sharing and Caring with Agribusiness merupakan kegiatan sosial kemanusiaan yang dilakukan dengan tiga bentuk diantaranya: Konsep bakti sosial ke suatu yayasan panti asuhan, Galang dana, Galang dana bencana alam" },
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Hubungan Lembaga dan Masyarakat</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang HULMAS</h2>
            <p>Divisi Hubungan Lembaga dan Masyarakat (HULMAS) merupakan salah satu divisi yang memiliki peran penting dalam kepengurusan HMJ Agribisnis. Tugas divisi HULMAS adalah mengelola dan menyusun strategi pengembangan dan penguatan eksistensi HMJ Agribisnis dengan pihak luar baik yang terhubung secara langsung maupun tidak langsung. Hal ini juga bertujuan untuk mempererat hubungan dengan seluruh mahasiswa Agribisnis, kelembagaan yang ada di Universitas Riau, dan pihak-pihak dinas maupun swasta yang nantinya dapat mendukung pelaksanaan program-program dan kegiatan yang dilaksanakan oleh HMJ Agribisnis
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