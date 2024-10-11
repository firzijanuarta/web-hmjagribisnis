import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import informasiImage from '/src/assets/images/informasi2.jpg'
import '../styles/Inf1.css';

function Inf2() {
    return (
        <>
            <Navbar />
            <div className="inf1-content">
                <h1 className="inf1-title inf1-animate-fade-in">Beasiswa Tanoto Foundation</h1>
                <div className="inf1-image-container inf1-animate-fade-in inf1-animate-slide-up">
                    <img src={informasiImage} alt="Informasi Beasiswa" className="inf1-info-image" />
                </div>
                <div className="inf1-description inf1-animate-fade-in inf1-animate-slide-up">
                    <h2>Detail Informasi</h2>
                    <p>
                        Kami dengan senang hati mengumumkan bahwa pendaftaran untuk program beasiswa Tanoto Foundation 2024/2025
                        telah dibuka. Program ini menawarkan kesempatan bagi mahasiswa berprestasi untuk mendapatkan dukungan
                        finansial dalam mengejar pendidikan mereka.
                    </p>
                    <p>
                        Beasiswa ini mencakup biaya kuliah penuh, tunjangan hidup bulanan, dan dana penelitian. Kriteria
                        utama meliputi prestasi akademik yang luar biasa, keterlibatan dalam kegiatan ekstrakurikuler,
                        dan potensi kepemimpinan.
                    </p>
                    <p>
                        Batas waktu pendaftaran adalah 30 November 2024. Semua mahasiswa yang memenuhi syarat sangat
                        didorong untuk mengajukan permohonan. Informasi lebih lanjut dan formulir pendaftaran dapat
                        ditemukan di situs web resmi universitas.
                    </p>
                    <p>
                        Jangan lewatkan kesempatan luar biasa ini untuk mendukung perjalanan akademik Anda!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inf2;