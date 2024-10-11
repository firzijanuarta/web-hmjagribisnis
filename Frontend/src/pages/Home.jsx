import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


// Import images
import advokasi from '../assets/images/Advokasi.png';
import danus from '../assets/images/Danus.png';
import hulmas from '../assets/images/Hulmas.png';
import kaderisasi from '../assets/images/Kaderisasi.png';
import kestari from '../assets/images/Kestari.png';
import kominfo from '../assets/images/Kominfo.png';
import pepma from '../assets/images/Pepma.png';
import pengurus from '../assets/images/pengurus.JPG'; // Import pengurus.JPG


function Home() {
  const [aspiration, setAspiration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/aspirations', { content: aspiration });
      if (response.status === 201) {
        alert('Aspirasi Anda telah berhasil dikirim!');
        setAspiration('');
      }
    } catch (error) {
      console.error('Error submitting aspiration:', error);
      alert('Terjadi kesalahan saat mengirim aspirasi. Silakan coba lagi.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section id="home">
          <div className="card">
            <div className="card-image-container">
              <img src={pengurus} alt="Pengurus" className="card-image" />
            </div>
          </div>
          <div className="description">
            <p className="awaldeskripsi">About Us</p>
            <p className="deskripsi">Apa itu HMJ Agribisnis?</p>
            <h2>Kenali HMJ</h2>
            <h2>lebih dalam, Yuk!</h2>
            <p>Himpunan Mahasiswa Jurusan Agribisnis Fakultas Pertanian Universitas Riau
              merupakan salah satu kelembagaan mahasiswa yang berada di Fakultas Pertanian. HMJ
              Agribisnis merupakan wadah bagi mahasiswa khususnya jurusan Agribisnis untuk berkreasi,
              berinovasi, berkolaborasi, dan berkontribusi guna untuk meningkatkan kualitas dan kapabilitas
              diri serta memberikan manfaat kepada civitas akademika khususnya dan masyarakat pada
              umumnya. HMJ Agribisnis memiliki tujuan untuk meningkatkan rasa kekeluargaan dan
              solidaritas antar mahasiswa jurusan Agribisnis, mengadakan kegiatan yang mengoptimalkan
              potensi yang dimiliki mahasiswa jurusan Agribisnis, dan menjalin hubungan yang harmonis
              dengan civitas akademika baik di lingkungan internal maupun eksternal. HMJ Agribisnis juga
              merupakan wadah aspirasi bagi mahasiswa yang inovatif dan aktif.</p>
            <p>
              <a href="#" className="tbl-pink">Selengkapnya</a>
            </p>
          </div>
        </section>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" fill="#d3d3d3" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
            <path className="elementor-shape-fill" fill="#ffffff" opacity="0.66;" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
            <path className="elementor-shape-fill" fill="#ffffff" d="M766.1,28.9c-200-57.5- 266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
          </svg>
        </div>

        <section id="departments" className="departments">
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={advokasi} alt="Advokasi" className="department-image" />
            </div>
            <p className="department-name">Advokasi</p>
          </div>
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={danus} alt="Danus" className="department-image" />
            </div>
            <p className="department-name">Danus</p>
          </div>
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={hulmas} alt="Hulmas" className="department-image" />
            </div>
            <p className="department-name">Hulmas</p>
          </div>
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={kaderisasi} alt="Kaderisasi" className="department-image" />
            </div>
            <p className="department-name">Kaderisasi</p>
          </div>
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={kestari} alt="Kestari" className="department-image" />
            </div>
            <p className="department-name">Kestari</p>
          </div>
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={kominfo} alt="Kominfo" className="department-image" />
            </div>
            <p className="department-name">Kominfo</p>
          </div>
          <div className="department-card-wrapper">
            <div className="department-card">
              <img src={pepma} alt="Pepma" className="department-image" />
            </div>
            <p className="department-name">Pepma</p>
          </div>
        </section>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 1000 240">
            <path fill="#ffffff" stroke="none" d="M0,180L48,148C96,116,192,52,288,52C384,52,480,116,576,148C672,180,768,180,864,153.3C960,127,1056,73,1152,62.7C1248,52,1344,84,1392,100L1440,116L1440,290L1392,290C1344,290,1248,290,1152,290C1056,290,960,290,864,290C768,290,672,290,576,290C480,290,384,290,288,290C192,290,96,290,48,290L0,230Z"></path>
          </svg>
        </div>

        <section id="activities" className="activities">
          <h2 className="activities-title">Kegiatan</h2>
          <div className="activities-cards">
            <div className="card">
              <img src="/src/assets/images/image1.jpg" alt="Activity 1" className="card-image" />
              <p className="card-description">
                <strong>KUNJUNGAN INDUSTRI HMJ AGRIBISNIS KE RIAU ANDALAN PULP AND PAPER</strong>
              </p>
              <a href="/Kgt1" className="read-more">Read More</a>
            </div>
            <div className="card">
              <img src="/src/assets/images/image2.jpg" alt="Activity 2" className="card-image" />
              <p className="card-description">
                <strong>SEMINAR BEDAH DAN DISEMISASI BUKU YANG DITAJA OLEH HMJ AGRIBISNIS</strong>
              </p>
              <a href="/Kgt2" className="read-more">Read More</a>
            </div>
            <div className="card">
              <img src="/src/assets/images/image3.jpg" alt="Activity 3" className="card-image" />
              <p className="card-description">
                <strong>AGRINATION FESTIVAL HMJ AGRIBISNIS TAHUN 2024</strong>
              </p>
              <a href="Kgt3" className="read-more">Read More</a>
            </div>
          </div>
        </section>

        <section id="informasi" className="informasi">
          <h2 className="informasi-title">Informasi</h2>
          <div className="informasi-cards">
            <div className="card">
              <img src="/src/assets/images/informasi.jpg" alt="Informasi 1" className="card-image" />
              <p className="card-description">
                <strong>KALENDER AKADEMIK 2024-2025 UNIVERSITAS RIAU</strong>
              </p>
              <a href="/Inf1" className="read-more">Read More</a>
            </div>
            <div className="card">
              <img src="/src/assets/images/informasi2.jpg" alt="Informasi 2" className="card-image" />
              <p className="card-description">
                <strong>BEASISWA TANOTO FOUNDATION</strong>
              </p>
              <a href="/Inf2" className="read-more">Read More</a>
            </div>
            <div className="card">
              <img src="/src/assets/images/informasi3.jpg" alt="Informasi 3" className="card-image" />
              <p className="card-description">
                <strong>PENDAFTARAN BRIGHT SCHOLARSHIP JENJANG S1/D4</strong>
              </p>
              <a href="Inf3" className="read-more">Read More</a>
            </div>
          </div>
        </section>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill" fill="#d3d3d3" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
            <path className="elementor-shape-fill" fill="#ffffff" opacity="0.66;" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
          </svg>
        </div>

        <section id="serap-aspirasi" className="serap-aspirasi">
        <h2 className="serap-aspirasi-title">Serap Aspirasi</h2>
        <p className="serap-aspirasi-subtitle">
          Bagi Mahasiswa Agribisnis yang memiliki keluhan seputar perkuliahan, silahkan klik kolom komentar dibawah ini
        </p>
        <form onSubmit={handleSubmit} className="comment-card">
          <textarea
            className="comment-input"
            placeholder="Tulis keluhan atau aspirasi Anda di sini..."
            value={aspiration}
            onChange={(e) => setAspiration(e.target.value)}
          ></textarea>
          <button type="submit" className="comment-submit">Kirim Komentar</button>
        </form>
      </section>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 1000 240">
            <path fill="#ffffff" stroke="none" d="M0,180L48,148C96,116,192,52,288,52C384,52,480,116,576,148C672,180,768,180,864,153.3C960,127,1056,73,1152,62.7C1248,52,1344,84,1392,100L1440,116L1440,290L1392,290C1344,290,1248,290,1152,290C1056,290,960,290,864,290C768,290,672,290,576,290C480,290,384,290,288,290C192,290,96,290,48,290L0,230Z"></path>
          </svg>
        </div>

        <section id="contact-info" className="contact-info">
          <div className="social-media">
            <a href="https://x.com/hmjagbunri?t=RPogxKEDXUEQ1mxNo4dGIQ&s=09 " target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faX} />
            </a>
            <a href="https://youtube.com/@agribisnisfapertaunri3598?si=5dukS7yEenYJJ4rP" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.tiktok.com/@hmjagribisnisunri?_t=8plxyR5NPap&_r=1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/hmjagribisnisunri?igsh=c2Y3aHR4bjF1bzJ4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="contact-details">
            <div className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Kampus Bina Krida, Panam, Pekanbaru 282903</span>
            </div>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>hmjagribisnisfpur@gmail.com</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;