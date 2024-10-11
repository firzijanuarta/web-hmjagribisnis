import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image1 from '/src/assets/images/image3.jpg'
import '../styles/kegiatan1.css';

function Kgt1() {
  return (
    <>
      <Navbar />
      <div className="kgt1-content">
        <h1 className="kgt1-title kgt1-animate-fade-in">Agrination Festival HMJ Agribisnis Tahun 2024</h1>
        <div className="kgt1-image-container kgt1-animate-fade-in kgt1-animate-slide-up">
          <img src={image1} alt="Kunjungan Industri ke RAPP" className="kgt1-activity-image" />
        </div>
        <div className="kgt1-description kgt1-animate-fade-in kgt1-animate-slide-up">
          <h2>Deskripsi Kegiatan</h2>
          <p>
            Himpunan Mahasiswa Jurusan (HMJ) Agribisnis mengadakan agrination festival, yang dimana acara ini
            dibuat untuk mahasiswa jurusan agribisnis dan ditaja oleh HMJ Agribisnis pada tahun 2024
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kgt1;