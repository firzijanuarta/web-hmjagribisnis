import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divkominfo.css';

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
    { title: "Pelatihan Multimedia 1", desc: "Pelatihan Multimedia I yang bisa disingkat PM I merupakan jenjang pengembangan skill multimedia jenjang pertama yang diikuti sebagai syarat mengikuti Pelatihan Multimedia II di tingkat Fakultas dengan 2 bentuk kegiatan yaitu penyampaian materi oleh pemateri dan praktek langsung oleh peserta didampingi pemateri. Pelatihan ini meliputi 2 sub materi yaitu desain grafis dan jurnalistik. Adapun maksud dan tujuan dilaksanakannya kegiatan ini untuk menambah serta meningkatkan jiwa kreatifitas mahasiswa Jurusan Agribisnis Fakultas Pertanian di bidang Multimedia dan Jurnalistik" },
    { title: "Agrination Festival", desc: "Agrination Festival merupakan kegiatan yang memiliki 4 kategori kegiatan yaitu bazar Agrination Festival, perlombaan akademik, perlombaan non akademik, dan ditutup dengan kegiatan Talkshow. Perlombaan bidang akademik terdiri dari perlombaan Essay, Video Kreatif, dan Poster Digital. Perlombaan non akademik terdiri dari Solo Song, Mobile Legend, dan Tari Kreasi. Pelaksanaan program ini berkolaborasi dengan Divisi Pepma dan Divisi Hulmas. Kegiatan ini bertujuan sebagai wadah penyaluran bakat mahasiswa/i di bidang penalaran, seni, dan sastra. Kegiatan ini bertujuan sebagai wadah penyaluran bakat mahasiswa/i di bidang penalaran, seni, dan sastra." },
    { title: "Desain PDH dan ID Card", desc: "Desain PDH dan ID Card merupakan identitas resmi yang dirancang dan dibuat oleh Divisi KOMINFO sebagai atribut penunjang kegiatan selama satu periode dan selanjutnya diserahkan pada Divisi DANUS untuk dicetak. Desain PDH dan ID Card dipilih berdasarkan sistem Voting melalui grup sehingga didapatkan warna yang diinginkan. ID Card atau kartu identitas yang dilengkapi dengan lanyard juga menjadi salah satu pelengkap dari atribut kepengurusan. Adapun maksud dan tujuan dirancangnya PDH dan ID Card sendiri adalah sebagai identitas pengurus HMJ Agribisnis Periode 2023/2024 baik di dalam kampus maupun diluar kampus." },
    { title: "Spanduk Kepengurusan", desc: "Spanduk kepengurusan merupakan salah satu bentuk identitas pengurus HMJ Agribisnis Periode 2023/2024 yang menjelaskan susunan struktural kepengurusan yang ada di HMJ Agribsinis Periode 2023/2024. Implementasi kegiatan yang dilakukan adalah mendesain struktur kepengurusan HMJ Agribisnis yang kemudian dicetak berupa spanduk dan dipajang di Sekretariat HMJ Agribisnis. Adapun tujuan dari pembuatan Spanduk Kepengurusan untuk mengetahui seluruh pengurus HMJ Agribisnis Periode 2023/2024 yang disusun berdasarkan divisi masing-masing." },
    { title: "Desain Merchandise dan Pin Angkatan 2023", desc: "Desain Merchandise dan pin angkatan merupakan kegiatan merancang desain seperti gantungan kunci, stiker, dan pin angkatan 2023 yang digunakan sebagai identitas mahasiswa/i Jurusan Agribisnis Fakultas Pertanian Universitas Riau yang kemudian dicetak dan disebarkan oleh Divisi DANUS. Adapun tujuan dilakukannya pembuatan desain ini agar mahasiswa/i Jurusan Agribisnis dapat saling mengenal satu sama lain melalui tanda pengenal diri yaitu Pin Angkatan yang dipakai setiap harinya. Selain itu, Stiker, Gantungan kunci, dan Pin Angkatan merupakan sumber pemasukan bagi Divisi DANUS yang akan dialokasikan untuk HMJ Agribisnis Periode 2023/2024 nantinya." },
    { title: "Agri-Post", desc: "Agri-Post merupakan kegiatan penyebaran informasi pada akun media sosial HMJ Agribisnis dalam rangka memberikan informasi terkait bidang akademis maupun non akademis. Adapun maksud dan tujuan dari Agri-post ini adalah memberikan informasi penting seputar perkuliahan dan untuk menambah wawasan mahasiswa/i Agribisnis dengan postingan yang bermanfaat untuk diberikan setiap minggunya seperti info bertemakan Agrifunfact, Agri-Day, dan Today’s Motivation. Hasil kegiatan ini di posting pada akun media sosial Instagram @hmjagribisnisunri, Facebook Agribisnis Faperta Unri, dan akun twitter @hmjagribisnisur yang merupakan akun official HMJ Agribisnis Fakultas Pertanian Universitas Riau." },
    { title: "Tiktok", desc: "TikTok HMJ Agribisnis merupakan salah satu media sosial yang dimiliki oleh HMJ Agribisnis Periode 2023/2024 yang berisikan video konten menghibur/promosi dari kegiatan HMJ Agribisnis Periode 2023/2024. Inspirasi dari pembuatan video konten promosi adalah video/sound yang sedang trend di media sosial. Adapun maksud dan tujuan dari penggunaan akun TikTok untuk menyebarluaskan informasi mengenai kegiatan dari HMJ Agribisnis Periode 2023/2024 dan memperkenalkan HMJ Agribisnis kepada khalayak umum dengan tujuan menghibur atau promosi." },
    { title: "Bedah Prestasi", desc: "Bedah prestasi merupakan kegiatan yang menampilkan prestasi-prestasi yang dimiliki oleh mahasiswa/i Jurusan Agribisnis Fakultas Pertanian di bidang akademik maupun non akademik dengan metode interview atau wawancara kepada peraih prestasi. Kegiatan Bedah Prestasi ini juga bekerjasama dengan Divisi PEPMA untuk mendata mahasiswa/i yang memiliki prestasi. Adapun tujuan dari kegiatan ini adalah membedah dan me-review prestasi mahasiswa/i sebagai mahasiswa/i Jurusan Agribisnis Fakultas Pertanian. Selain itu, tujuan dari kegiatan ini adalah sebagai bentuk apresiasi dan motivasi kepada mahasiswa/i Jurusan Agribisnis Fakultas Pertanian Universitas Riau agar lebih menonjolkan semangat baru akan minat dan bakat yang dimiliki mahsiswa/i tersebut. Hasil pada kegiatan ini akan di upload pada akun resmi instagram dan youtube HMJ Agribisnis Fakultas Pertanian Universitas Riau selama periode kepengurusan." },
    { title: "What’s Up to Agribusiness", desc: "What’s Up to Agribusiness merupakan aktivitas yang menampilkan segala kegiatan yang sedang dilakukan atau yang sedang terjadi di Jurusan Agribisnis Fakultas Pertanian Universitas Riau terutama pada kegiatan dibawah naungan HMJ Agribisnis yang dilakukan dalam bentuk wawancara bersama peserta maupun panitia yang mengikuti kegiatan tersebut. Adapun tujuan dari kegiatan ini yaitu untuk memperkenalkan berbagai kegiatan yang ada di Jurusan Agribisnis fakultas Pertanian Universitas Ria dengan melihat sudut pandang panitia dan peserta terkait kegiatan tersebut." },
    { title: "Agri-quiz", desc: "Agri-Quiz adalah kegiatan tanya jawab yang disajikan dalam bentuk video/teks yang di upload pada story Instagram HMJ Agribisnis. Biasanya pertanyaan-pertanyaan yang digunakan pada Agri-Quiz berupa pengetahuan umum terkhusus pada pengetahuan dibidang pertanian. Adapun tujuan dari kegiatan ini yaitu untuk menambah wawasan tentang ilmu pengetahuan umum dan pengetahuan pertanian dalam arti luas." }
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Komunikasi dan Informasi</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang KOMINFO</h2>
            <p>Divisi Komunikasi dan Informasi (KOMINFO) adalah salah satu divisi yang bernaung di Himpunan Mahasiswa Jurusan Agribisnis Fakultas Pertanian Universitas Riau. Divisi ini merupakan divisi yang menjadi sarana komunikasi serta penyampaian informasi dalam ranah internal maupun eksternal Jurusan Agribisnis. Divisi KOMINFO bertugas dan bertanggung jawab dalam mengelola, mengembangkan, dan memberikan informasi secara umum dengan berbagai akun media sosial seperti Instagram, Facebook, Twitter, Youtube, dan TikTok.</p>
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