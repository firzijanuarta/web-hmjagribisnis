import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import informasiImage from '/src/assets/images/informasi3.jpg'
import '../styles/Inf1.css';

function Inf3() {
    return (
        <>
            <Navbar />
            <div className="inf1-content">
                <h1 className="inf1-title inf1-animate-fade-in">Pendaftaran Bright Scholarship Jenjang S1/D4</h1>
                <div className="inf1-image-container inf1-animate-fade-in inf1-animate-slide-up">
                    <img src={informasiImage} alt="Informasi Beasiswa" className="inf1-info-image" />
                </div>
                <div className="inf1-description inf1-animate-fade-in inf1-animate-slide-up">
                    <h2>Detail Informasi</h2>
                    <p>
                        Wahai sobat HMJ. Pendaftaran untuk Bright Scholarship untuk jenjang S1/D4 sudah dibuka nih...
                    </p>
                    <p>
                        Mari segera daftar sebelum kehabisan yaaaa.....
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inf3;