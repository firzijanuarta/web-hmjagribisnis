import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image1 from '/src/assets/images/image2.jpg'
import '../styles/kegiatan1.css';

function Kgt1() {
  return (
    <>
      <Navbar />
      <div className="kgt1-content">
        <h1 className="kgt1-title kgt1-animate-fade-in">Seminar Bedah dan Diseminasi Buku yang ditaja oleh HMJ Agribisnis bekerja sama dengan PASPI Insitute</h1>
        <div className="kgt1-image-container kgt1-animate-fade-in kgt1-animate-slide-up">
          <img src={image1} alt="Kunjungan Industri ke RAPP" className="kgt1-activity-image" />
        </div>
        <div className="kgt1-description kgt1-animate-fade-in kgt1-animate-slide-up">
          <h2>Deskripsi Kegiatan</h2>
          <p>
            Himpunan Mahasiswa Jurusan (HMJ) Agribisnis melakukan Seminar Bedah dan Disemisasi Buku yang ditaja oleh
            HMJ Agribisnis, yang bertujuan untuk memberikan wawasan luas dan bekerja sama dengan PASPI Insitute
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kgt1;