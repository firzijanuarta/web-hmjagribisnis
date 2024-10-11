import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image1 from '/src/assets/images/image1.jpg'
import '../styles/kegiatan1.css';

function Kgt1() {
  return (
    <>
      <Navbar />
      <div className="kgt1-content">
        <h1 className="kgt1-title kgt1-animate-fade-in">Kunjungan Industri HMJ Agribisnis ke Riau Pulp and Paper (RAPP)</h1>
        <div className="kgt1-image-container kgt1-animate-fade-in kgt1-animate-slide-up">
          <img src={image1} alt="Kunjungan Industri ke RAPP" className="kgt1-activity-image" />
        </div>
        <div className="kgt1-description kgt1-animate-fade-in kgt1-animate-slide-up">
          <h2>Deskripsi Kegiatan</h2>
          <p>
            Himpunan Mahasiswa Jurusan (HMJ) Agribisnis melakukan kunjungan industri ke Riau Pulp and Paper (RAPP) 
            sebagai bagian dari program edukasi dan pengembangan wawasan mahasiswa. Kunjungan ini bertujuan untuk 
            memberikan pemahaman yang lebih mendalam tentang proses produksi pulp dan kertas, serta penerapan 
            teknologi terkini dalam industri kehutanan dan pengolahan hasil hutan.
          </p>
          <p>
            Selama kunjungan, mahasiswa berkesempatan untuk melihat langsung fasilitas produksi, laboratorium 
            penelitian, dan area pengelolaan hutan berkelanjutan. Mereka juga dapat berdiskusi dengan para ahli 
            dan praktisi di RAPP mengenai berbagai aspek agribisnis yang terkait dengan industri pulp dan kertas.
          </p>
          <p>
            Kegiatan ini diharapkan dapat memperkaya pengetahuan mahasiswa tentang aplikasi praktis dari ilmu 
            agribisnis dalam skala industri, serta membuka wawasan mereka tentang peluang karir di sektor ini.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Kgt1;