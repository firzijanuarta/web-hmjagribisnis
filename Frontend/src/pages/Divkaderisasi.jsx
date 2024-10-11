import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divkaderisasi.css';

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
    { title: "Pelantikan dan Upgrading Pengurus HMJ Agribisnis", desc: "Pelantikan Pengurus HMJ Agribisnis merupakan kegiatan yang dilakukan untuk meresmikan kepengurusan HMJ Agribisnis Fakultas Pertanian Universitas Riau pada periode 2023/2024. Kegiatan ini berupa pembacaan ikrar oleh seluruh pengurus HMJ Agribisnis periode 2023/2024 dan serah terima jabatan oleh pengurus HMJ Agribisnis periode sebelumnya. Upgrading merupakan sebuah program kerja pembuka bagi pengurus HMJ Agribisnis 2023/2024 yang dilakukan dengan penyampaian materi mengenai teamwork, leadership, dan manajemen SDM oleh pemateri secara offline. Adapun maksud dan tujuan dari kegiatan ini adalah untuk meningkatkan semangat, kualitas dan integritas pengurus HMJ Agribisnis, membangun jiwa kepemimpinan dan regenerasi mahasiswa Jurusan Agribisnis dalam mewujudkan Himpunan Mahasiswa Jurusan Agribisnis sebagai kelembagaan yang pro aktif, inovatif dan prestatif." },
    { title: "Latihan Kepemimpinan dan Manajemen Organisasi (LKMO)", desc: "Latihan Kepemimpinan dan Manajemen Organisasi (LKMO) merupakan kegiatan yang berbentuk seminar dan dialog interaktif antara pemateri dan peserta. Kegiatan ini berisi penyampaian materi mengenai leadership, advokasi, manajemen organisasi dan waktu, kepopmasepian serta wawasan mengenai teknik persidangan. Adapun maksud dan tujuan dilaksanakannya kegiatan ini adalah untuk meningkatkan pemahaman mahasiswa baru mengenai ruang lingkup manajemen organisasi, kepemimpinan, serta memberikan pemahaman untuk menciptakan suatu kelembagaan yang berkarakter, berkomitmen dan progresif. Peserta yang mengikuti kegiatan ini akan mendapatkan sertifikat TO I yang berguna sebagai salah satu syarat untuk bergabung ke dalam organisasi mahasiswa di Universitas Riau, terutama di HMJ Agribisnis." },
    { title: "Forum Komting dan Steering Committee (SC)", desc: "Forum Komting dan Steering Committee merupakan kegiatan diskusi antar HMJ agribisnis, komting dan SC dalam membahas perkembangan program kerja yang akan dan sudah dilaksanakan. Forum Komting dan Steering Committee bertujuan untuk menjalin silaturahmi, berdiskusi, berbagi pengalaman serta membuka dan menerima masukan dari Komting setiap angkatan dan SC sehingga program kerja yang akan dilaksanakan dapat berjalan dengan baik." },
    { title: "Sambut Mahasiswa Baru Jurusan Agribisnis (SAMABA)", desc: "Sambut Mahasiswa Baru Jurusan Agribisnis (SAMABA) merupakan kegiatan yang ditaja oleh HMJ Agribisnsis sebagai salah satu kegiatan penyambutan bagi mahasiswa baru Jurusan Agribisnis Fakultas Pertanian Universitas Riau. Kegiatan ini berupa pemberian materi mengenai kode etik dan etika perkuliahan yang disampaikan oleh perwakilan dari pengurus HMJ Agribisnis serta fun games antara Mahasiswa Baru Jurusan Agribisnis (angkatan 2023) dan Mahasiswa Jurusan Agribisnis angkatan 2022. Maksud dan tujuan dari kegiatan ini adalah sebagai bekal awal mahasiswa baru memasuki kehidupan perkuliahan dan wadah untuk saling mengenal antar satu sama lain agar terjalinnya silaturahmi." },
    { title: "Synergize to Build Memories with Agribusiness (SIMETRIS)", desc: "Synergize to Build Memories with Agribusiness (SIMETRIS) merupakan kegiatan silaturahmi dan keakraban Mahasiswa Jurusan Agribisnis Fakultas Pertanian Universitas Riau. Kegiatan ini berupa penampilan pentas seni secara berkelompok dengan tema yang berbeda-beda dan outdoor learning. Maksud dan tujuan dilakukannya kegiatan ini adalah sebagai media unjuk bakat dan kreatifitas mahasiswa Jurusan Agribisnis serta untuk mempererat tali silaturahmi, meningkatkan rasa kekeluargaan, kerjasama, dan pemahaman etika lebih lanjut pada Mahasiswa Jurusan Agribisnis angkatan 2023." },
    { title: "Internship Harmonia Muda", desc: "Internship Harmonia Muda merupakan wadah pelatihan organisasi bagi para Mahasiswa/i Jurusan Agribisnis angkatan 2023 yang ingin lebih mengenal, berlatih, serta berkontribusi aktif dalam Himpunan Mahasiswa Jurusan Agribisnis. Maksud dan tujuan kegiatan ini adalah memberikan kesempatan untuk memahami terkait divisi yang ada dan melatih mahasiswa agar memberikan kontribusi terbaiknya pada HMJ Agribisnis. Kegiatan ini dilaksanakan dengan melalui beberapa tahapan seperti pendaftaran, tes tertulis, serta wawancara. Seluruh anggota magang HMJ Agribisnis akan dilibatkan dalam beberapa program kerja dan kepanitiaan sebagai wadah pengimplementasian ilmu berorganisasi yang telah diterima pada saat Latihan Kepemimpinan dan Manajemen Organisasi (LKMO)." },
    { title: "Evaluasi Kinerja Staff (EJASTA)", desc: "Evaluasi Kinerja Staff (EJASTA) merupakan program kerja baru yang dilaksanakan pada kepengurusan kabinet Harmonia Progressio sebagai wadah untuk mengetahui seberapa besar kontribusi dari setiap individu pengurus. Kegiatan ini berupa penilaian terhadap kinerja staff yang dilakukan setiap bulan oleh setiap Ketua Divisi serta Badan Pengurus Harian. Terdapat beberapa indikator penilaian diantaranya berdasarkan absensi (umum, divisi dan pengurus), absensi kegiatan, keaktifan berupa responsif dan interaktif saat kegiatan dan loyalitas serta act of service. Tujuan utama dari kegiatan ini adalah untuk meninjau dan mengevaluasi pengurus selama menjadi anggota HMJ Agribisnis serta meningkatkan kinerja dari masing-masing pengurus." }
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Kaderisasi</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang KADERISASI</h2>
            <p>Divisi Kaderisasi bergerak pada lingkup internal kepengurusan yang memiliki tugas dan peran dalam merekrut, merangkul, memotivasi serta mengakrabkan setiap kader yang terdapat di HMJ Agribisnis. Divisi Kaderisasi dikatakan divisi internal yang dapat memberikan teladan ataupun contoh terhadap generasi penerus sebagai pemegang tongkat estafet kepengurusan selanjutnya. Oleh karena itu, Kaderisasi juga disebut sebagai jantungnya sebuah organisasi, karena harus membentuk karakter generasi penerus seperti memiliki jiwa kepemimpinan, bertanggung jawab, berpikir kritis, kreatif, memiliki rasa toleransi serta mampu memecahkan permasalahan.</p>
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