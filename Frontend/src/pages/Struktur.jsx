import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Struktur.css';
import pengurus from '../assets/images/pengurus.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bup1 = new URL('../assets/images/bup1.jpg', import.meta.url).href;
const bup2 = new URL('../assets/images/bup2.jpg', import.meta.url).href;
const bup3 = new URL('../assets/images/bup3.jpg', import.meta.url).href;
const bup4 = new URL('../assets/images/bup4.jpg', import.meta.url).href;
const bup5 = new URL('../assets/images/bup5.jpg', import.meta.url).href;

const pepmaImages = [
  new URL('../assets/images/pepma1.jpg', import.meta.url).href,
  new URL('../assets/images/pepma2.jpg', import.meta.url).href,
  new URL('../assets/images/pepma3.jpg', import.meta.url).href,
  new URL('../assets/images/pepma4.jpg', import.meta.url).href,
  new URL('../assets/images/pepma5.jpg', import.meta.url).href,
  new URL('../assets/images/pepma6.jpg', import.meta.url).href,
  new URL('../assets/images/pepma7.jpg', import.meta.url).href,
  new URL('../assets/images/pepma8.jpg', import.meta.url).href,
  new URL('../assets/images/pepma9.jpg', import.meta.url).href,
  new URL('../assets/images/pepma10.jpg', import.meta.url).href,
  new URL('../assets/images/pepma11.jpg', import.meta.url).href,
  new URL('../assets/images/pepma12.jpg', import.meta.url).href,
];

const pepmaNames = [
  "M. REVAN ALFARET",
  "RIMA ANGELINA RAMBE",
  "RUTH LEONA A GULTOM",
  "SEILA KEREN DAMANIK S.",
  "MARCHELLINA BANJARNAHOR",
  "GILANG BINTANG RAMADHAN",
  "GEVI RAMDESTA",
];

const advoImages = [
  new URL('../assets/images/advo1.jpg', import.meta.url).href,
  new URL('../assets/images/advo2.jpg', import.meta.url).href,
  new URL('../assets/images/advo3.jpg', import.meta.url).href,
  new URL('../assets/images/advo4.jpg', import.meta.url).href,
  new URL('../assets/images/advo5.jpg', import.meta.url).href,
  new URL('../assets/images/advo6.jpg', import.meta.url).href,
];

const advoNames = [
  "PUTRA BAYU LAKSANA",
  "ALDIO",
  "ALAN PUJA PAMUNGKAS",
];

const hulmasImages = [
  new URL('../assets/images/hulmas1.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas2.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas3.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas4.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas5.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas6.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas7.jpg', import.meta.url).href,
  new URL('../assets/images/hulmas8.jpg', import.meta.url).href,
];

const hulmasNames = [
  "THASYA ANDINI",
  "M. THARIQ DARWIS",
  "MENTARI DEWI SANDRA",
  "ALFRINOV PRATAMA KEMIT",
  "NENI HARYANI",
];

const danusImages = [
  new URL('../assets/images/danus1.jpg', import.meta.url).href,
  new URL('../assets/images/danus2.jpg', import.meta.url).href,
  new URL('../assets/images/danus3.jpg', import.meta.url).href,
  new URL('../assets/images/danus4.jpg', import.meta.url).href,
  new URL('../assets/images/danus5.jpg', import.meta.url).href,
  new URL('../assets/images/danus6.jpg', import.meta.url).href,
];

const danusNames = [
  "HIDA WANTIGUS RAINI",
  "ADINDA GALUH GAYATRI",
  "INNAUAH OCKTA ERMALISHA",
];

const kominfoImages = [
  new URL('../assets/images/kominfo1.jpg', import.meta.url).href,
  new URL('../assets/images/kominfo2.jpg', import.meta.url).href,
  new URL('../assets/images/kominfo3.jpg', import.meta.url).href,
  new URL('../assets/images/kominfo4.jpg', import.meta.url).href,
  new URL('../assets/images/kominfo5.jpg', import.meta.url).href,
  new URL('../assets/images/kominfo6.jpg', import.meta.url).href,
  new URL('../assets/images/kominfo7.jpg', import.meta.url).href,
];

const kominfoNames = [
  "DERYL HERI SAPUTRA",
  "CANTIKA SABILA AL HAQ",
  "ABEL RIZIEQ HAZRA",
  "SHOBRUN JAMIL",
];

const kaderImages = [
  new URL('../assets/images/kader1.jpg', import.meta.url).href,
  new URL('../assets/images/kader2.jpg', import.meta.url).href,
  new URL('../assets/images/kader3.jpg', import.meta.url).href,
  new URL('../assets/images/kader4.jpg', import.meta.url).href,
  new URL('../assets/images/kader5.jpg', import.meta.url).href,
  new URL('../assets/images/kader6.jpg', import.meta.url).href,
  new URL('../assets/images/kader7.jpg', import.meta.url).href,
];

const kaderNames = [
  "M. RADIX MAHARDHIKA",
  "ISMI SIFA ADILA",
  "RAJA MUHAMMAD FARRAS",
  "DIVAN AIDIL ATRIA",
];

const kestariImages = [
  new URL('../assets/images/kestari1.jpg', import.meta.url).href,
  new URL('../assets/images/kestari2.jpg', import.meta.url).href,
  new URL('../assets/images/kestari3.jpg', import.meta.url).href,
  new URL('../assets/images/kestari4.jpg', import.meta.url).href,
  new URL('../assets/images/kestari5.jpg', import.meta.url).href,
  new URL('../assets/images/kestari6.jpg', import.meta.url).href,
  new URL('../assets/images/kestari7.jpg', import.meta.url).href,
];

const kestariNames = [
  "RIDO PRIMANDA PUTRA",
  "YASMIN NADYA",
  "SALSABILLA ANINDIANARI ANJANI",
  "PUTRI DESMAWATI",
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-prev`} // Ensure the className includes slick-prev
      style={{
        ...style,
        display: 'block',
        background: 'transparent', // Remove background
        color: 'rgba(0, 0, 0, 0.5)', // Semi-transparent arrow color
        border: 'none', // Remove border
        fontSize: '24px', // Arrow size
        zIndex: 1000, // Ensure it's on top
        position: 'absolute', // Position absolutely
        top: '50%', // Vertically center
        left: '10px', // Position from the left
        transform: 'translateY(-50%)', // Adjust vertical position
      }}
      onClick={onClick}
    >
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-next`} // Ensure the className includes slick-next
      style={{
        ...style,
        display: 'block',
        background: 'transparent', // Remove background
        color: 'rgba(0, 0, 0, 0.5)', // Semi-transparent arrow color
        border: 'none', // Remove border
        fontSize: '24px', // Arrow size
        zIndex: 1000, // Ensure it's on top
        position: 'absolute', // Position absolutely
        top: '50%', // Vertically center
        right: '10px', // Position from the right
        transform: 'translateY(-50%)', // Adjust vertical position
      }}
      onClick={onClick}
    >
    </button>
  );
};

// Slider settings with custom arrows
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, // Enable custom arrows
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function Struktur() {
  return (
    <>
      <Navbar />
      <div className="heading-title">
        <h1>Struktur Kabinet Harmonia Progressio</h1>
        <img src={pengurus} alt="Struktur Kepengurusan" />
        <div className="subheading">
          <h2>BADAN PENGURUS HARIAN</h2>
        </div>
      </div>

      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={bup3} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>DERY ALAFGHANI.A</h3>
              <p>Bupati</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={bup5} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>JIHAN SALMIRA FIRSTANIA</h3>
              <p>Wakil Bupati</p>
            </div>
          </div>
        </div>
        <div className="small-photos">
          <div className="photo-item">
            <img src={bup1} alt="Foto 3" className="small-photo" />
            <div className="photo-caption">
              <h3>OLIVIA SAHFITRI</h3>
              <p>Sekretaris Umum 1</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={bup4} alt="Foto 4" className="small-photo" />
            <div className="photo-caption">
              <h3>TRISNA WIJIYANTI</h3>
              <p>Sekretaris Umum 2</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={bup2} alt="Foto 5" className="small-photo" />
            <div className="photo-caption">
              <h3>AZAHRAH APRILA ALATAF</h3>
              <p>Bendahara Umum</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Heading Section DIVISI PENGEMBANGAN POTENSI MAHASISWA */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI PENGEMBANGAN POTENSI MAHASISWA</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={pepmaImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>RENA ARYATI</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={pepmaImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>YUNITA ANANTA SALSABILA</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={pepmaImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>YOZA OKTAVIA</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>
        <div className="small-photos">
          <div className="photo-item">
            <img src={pepmaImages[3]} alt="Foto 4" className="small-photo" />
            <div className="photo-caption">
              <h3>DIZA APRIALISTY</h3>
              <p>Kepala Bagian PPSDM</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={pepmaImages[4]} alt="Foto 5" className="small-photo" />
            <div className="photo-caption">
              <h3>VICTOR CRISTOFEL MANALU</h3>
              <p>Kepala Bagian Mikat</p>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {pepmaImages.slice(5).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{pepmaNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF DIVISI PEPMA</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

      {/* New Heading Section DIVISI ADVOKASI */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI ADVOKASI</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={advoImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>NISWATUL INAYAH</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={advoImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>ELSA AZZAHRA</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={advoImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>MIRANDA JULYANI</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {advoImages.slice(3).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{advoNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF DIVISI ADVOKASI</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

      {/* New Heading Section DIVISI HUBUNGAN LEMBAGA DAN MASYARAKAT */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI HUBUNGAN LEMBAGA DAN MASYARAKAT</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={hulmasImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>M. ADZIN FURKON</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={hulmasImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>ELLA ANGGRAINI</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={hulmasImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>MOZA DYAH PUTRI N.</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {hulmasImages.slice(3).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{hulmasNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF DIVISI HULMAS</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

      {/* New Heading Section DIVISI DANA DAN USAHA */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI DANA DAN USAHA</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={danusImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>AISYAH NUR RAMADHANTI</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={danusImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>INNA CHAIRANI</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={danusImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>AMANDA FARAH AQILA SUARDI</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {danusImages.slice(3).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{danusNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF DIVISI DANA DAN USAHA</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

      {/* New Heading Section DIVISI KOMUNIKASI DAN INFORMASI */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI KOMUNIKASI DAN INFORMASI</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={kominfoImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>LIONA DWI PUTRI</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={kominfoImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>SALSALINA MAURA ANDINI</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={kominfoImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>BELINDA JESSICA ADES</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {kominfoImages.slice(3).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{kominfoNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF KOMUNIKASI DAN INFORMASI</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

      {/* New Heading Section DIVISI KADERISASI */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI KADERISASI</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={kaderImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>TEDDY SUFRIANDI</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={kaderImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>INDAH PRATIWI</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={kaderImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>MUTIARA FEBUARINDIANI</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {kaderImages.slice(3).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{kaderNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF KADERISASI</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

      {/* New Heading Section DIVISI KESEKRETARIATAN */}
      <div className="heading-title">
        <div className="subheading">
          <h2>DIVISI KESEKRETARIATAN</h2>
        </div>
      </div>

      {/* New Section */}
      <div className="photo-grid">
        <div className="large-photos">
          <div className="photo-item">
            <img src={kestariImages[0]} alt="Foto 1" className="large-photo" />
            <div className="photo-caption">
              <h3>HERICK FERNANDEZ</h3>
              <p>Kepala Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={kestariImages[1]} alt="Foto 2" className="large-photo" />
            <div className="photo-caption">
              <h3>JASMINE MALLIKA PUTRI</h3>
              <p>Sekretaris Divisi</p>
            </div>
          </div>
          <div className="photo-item">
            <img src={kestariImages[2]} alt="Foto 3" className="large-photo" />
            <div className="photo-caption">
              <h3>ARRAYANI</h3>
              <p>Bendahara Divisi</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {kestariImages.slice(3).map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
                <div className="photo-caption">
                  <h3>{kestariNames[index] || "NAMA DEFAULT"}</h3> {/* Menampilkan nama dari array */}
                  <p>STAFF KESEKRETARIATAN</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>
      
      <Footer />
    </>
  );
}

export default Struktur;
