import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Visimisi.css'
import logo from '../assets/images/logo.png';
function Visimisi() {
  return (
    <>
    <Navbar />
    <div class="heading-title">
      <h1>Kabinet Harmonia Progressio</h1>
      <img src={logo} alt="Kabinet Harmonia Progressio"/>
    </div>
        
      
    <div class="heading-container">
  <div class="heading-title-visi">
    <h3>VISI</h3>
    <p>Menciptakan Himpunan Mahasiswa Jurusan Agribisnis sebagai instrumen
      yang suportif dalam mewadahi serta membangun seluruh mahasiswa aktif jurusan agribisnis bersama seluruh minat dan bakat yang dimiliki. 
      Serta menjadikan Himpunan Mahasiswa Jurusan Agribisnis sebagai lembaga yang proaktif terhadap seluruh bentuk inovasi, aspirasi, dan prestasi.
    </p>
  </div>
  
  <div class="heading-title-misi">
    <h3>MISI</h3>
    <p>1. Menyelenggarakan suatu event yang dapat menambah relasi, pengalaman,
      pengembangan prestasi serta minat dan bakat, hingga terbentuknya kaderisasi yang berkualitas.
    </p>
    <p>2. Membangun kerjasama eksternal dan menciptakan lingkungan internal yang
      harmonis, bebas berekspresi, dan atmosfer kerjasama yang berdasarkan
      kekeluargaan.
    </p>
    <p>3. Menjadi wadah yang proaktif terhadap seluruh bentuk aspirasi, inovasi, dan orientasi 
      positif yang dimiliki oleh seluruh mahasiswa aktif agribisnis.
    </p>
  </div>
</div>

    <Footer />
    </>
  )
}

export default Visimisi;