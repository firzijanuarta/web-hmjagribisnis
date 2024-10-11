import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Divdanus.css';

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
    { title: "Agribusiness CASH (Canteen and Shop)", desc: "Agribusiness CASH adalah kegiatan menjual kebutuhan praktikum, ATK, food and beverage, dan merchandise. Agribusiness CASH telah mewadahi mahasiswa/i yang ada di Jurusan Agribisnis yang menjual makanan seperti risoles, keju aroma, dan kripik pisang. Divisi Dana dan Usaha mendapatkan keuntungan sebesar 50% dari penitipan makanan di Divisi Dana dan Usaha. Adapun maksud dan tujuan kegiatan Agribusiness CASH untuk mendapatkan keuntungan yang akan dipergunakan untuk kegiatan HMJ Agribisnis dan untuk memperkenalkan Jurusan Agribisnis kepada seluruh mahasiswa Universitas Riau. Disamping itu, kegiatan ini juga berguna untuk menciptakan hubungan antara pihak HMJ Agribisnis dengan pihak yang diajak kerjasama." },
    { title: "Pembuatan Baju PDH", desc: "Pembuatan Baju PDH merupakan salah satu kegiatan membuat baju pengurus HMJ Agribisnis Periode 2023/2024. Dalam kegiatan ini, Divisi Dana dan Usaha berperan dalam mencari dan mempertimbangkan secara matang tempat konveksi atau tender terbaik, serta mengurus admisnistrasi dalam pemesanan baju. Pada kegiatan pembuatan baju PDH ini, Divisi Dana dan Usaha bekerja sama dengan Divisi KOMINFO dalam pembuatan design baju, serta bendahara umum dan bendahara divisi dalam mengumpulkan dana untuk pembelian baju PDH kepengurusan. Proses pelaksanaan kegiatan pemesanan baju PDH HMJ ini dimulai dari pembuatan design oleh Divisi KOMINFO, pemilihan design terbaik, pemilihan konveksi terbaik untuk pemesanan baju oleh Divisi Dana dan Usaha, pengiriman design ke konveksi, produksi oleh konveksi dan penyerahan baju kepada pengurus HMJ Agribisnis. Adapun maksud dan tujuan kegiatan Pembuatan Baju PDH HMJ Agribisnis untuk menciptakan keseragaman dan keselarasan antar pengurus HMJ Agribisnis." },
    { title: "Pembuatan baju Angkatan 2023", desc: "Pembuatan Baju Angkatan merupakan salah satu kegiatan membuat baju angkatan 2023. Pada kegiatan Pembuatan Baju Angkatan 2023, Divisi Dana dan Usaha berperan dalam membantu mencari dan mempertimbangkan secara matang tempat konveksi atau tender terbaik, serta mengurus admisnistrasi dalam pemesanan baju. Pada kegiatan Pembuatan Baju Angkatan ini, Desain dan pemilihan warna diserahkan kepada angkatan 2023. Proses pelaksanaan kegiatan Pembuatan Baju Angkatan 2023 dimulai dari pembuatan design dan pemilihan warna oleh Angkatan 2023, pendataan ukuran dan nama Angkatan 2023, pemilihan konveksi terbaik untuk pemesanan baju oleh Divisi Dana dan Usaha, pengiriman design dan warna ke konveksi, produksi oleh konveksi, dan penyerahan baju kepada Angkatan 2023. Adapun maksud dan tujuan kegiatan Pembuatan Baju Angkatan 2023 untuk menciptakan identitas mahasiswa/i Jurusan Agribisnis Angkatan 2023." },
    { title: "Agribusiness Go to CFD", desc: "Agribusiness Go to CFD adalah kegiatan wirausaha di CFD yang dilakukan oleh seluruh Staff Divisi Dana dan Usaha dan diramaikan oleh seluruh pengrus HMJ Agribisnis Perode 2023/2024. Program kerja ini menjual makanan dan minuman kepada masyarakat yang mengikuti CFD. Maksud dan tujuan dari kegiatan Agribusiness Go to CFD adalah untuk memperluas lingkup pemasaran, meningkatkan pendapatan Divisi Dana dan Usaha, dan mempererat hubungan antar pengurus." },
    { title: "Bazar Danus", desc: "Bazar Danus merupakan kegiatan yang dilakukan pada acara-acara besar Jurusan Agribsinis maupun Fakultas Pertanian Universitas Riau. Dalam hal ini Divisi Dana dan Usaha akan membuka stand di acara-acara yang ada pada tingkat jurusan maupun fakultas. Stand ini menjual food and beverage. Dimana pelaksana dalam kegiatan ini adalah seluruh anggota dari Divisi Dana dan Usaha. Adapun maksud dan tujuan dari kegiatan Bazar Danus untuk mendapatkan keuntungan dan menambah pengalaman berwirausaha diacara besar." },
  ];

  return (
    <div className={`divpengembangan-page ${isVisible ? 'fade-in' : ''}`}>
      <Navbar />
      <main>
        <div className="title-container">
          <h1 className="title">Divisi Dana dan Usaha</h1>
        </div>

        <div className="container">
          <section className="division-description slide-in-left">
            <h2>Tentang DANUS</h2>
            <p>Divisi Dana dan Usaha atau disebut dengan DANUS merupakan salah satu divisi yang berperan aktif dalam kepengurusan HMJ Agribisnis. Divisi Dana dan Usaha adalah sebuah divisi yang melakukan pergerakan dalam pencarian atau pemasukan dana serta melakukan pengelolaan dalam dana tersebut. Dalam kepengurusan HMJ Agribisnis periode 2023/2024. Divisi Dana dan Usaha memiliki tugas diantaranya pengelolaan keuangan, melakukan beberapa usaha dengan tujuan sebagai pemasukan dari kas HMJ, menghimpun dan menjadi tombak keberlangsungan dari jalannya kegiatan HMJ Agribisnis. Apabila terjadi defisit keuangan pada HMJ Agribisnis, maka Divisi Dana dan Usaha telah siap untuk membantu defisit keuangan HMJ Agribisnsis dengan ketersediaan yang dihasilkan.
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