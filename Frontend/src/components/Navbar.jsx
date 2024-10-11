import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import '../styles/Navbar.css';
import logo from '../assets/images/logohmj.PNG'; // Import gambar logo
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Import ikon dropdown
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProgramKerjaDropdownOpen, setIsProgramKerjaDropdownOpen] = useState(false);
  const [isInformasiDropdownOpen, setIsInformasiDropdownOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (setDropdown) => {
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    setDropdown(false);
  };

  const getHeadingText = () => {
    switch (location.pathname) {
      case '/Visimisi':
        return { title: 'Visi & Misi' };
      case '/Struktur':
        return { title: 'Struktur Kepengurusan' };
      case '/Divpengembangan':
        return { title: 'Divisi Pengembangan Potensi Mahasiswa' };
      case '/Divadvokasi':
        return { title: 'Divisi Advokasi' };
      case '/Divhulmas':
        return { title: 'Divisi Hubungan Lembaga dan Masyarakat' };
      case '/Divdanus':
        return { title: 'Divisi Dana dan Usaha' };
      case '/Divkominfo':
        return { title: 'Divisi Komunikasi dan Informasi' };
      case '/Divkaderisasi':
        return { title: 'Divisi Kaderisasi' };
      case '/Divsekre':
        return { title: 'Divisi Kesekretaritan' };
      case '/Kgt1':
        return { title: 'Kegiatan HMJ Agribisnis' };
      case '/Kgt2':
        return { title: 'Kegiatan HMJ Agribisnis' };
      case '/Kgt3':
        return { title: 'Kegiatan HMJ Agribisnis' };
      case '/Inf1':
        return { title: 'Informasi HMJ Agribisnis' };
      case '/Inf2':
        return { title: 'Informasi HMJ Agribisnis' };
      case '/Inf3':
        return { title: 'Informasi HMJ Agribisnis' };
      case '/contact':
        return { title: 'Hubungi Kami' };
      default:
        return {
          title: 'HIMPUNAN MAHASISWA JURUSAN AGRIBISNIS',
          subtitle: 'Kabinet Harmonia Progressio',
        };
    }
  };

  const { title, subtitle } = getHeadingText();

  return (
    <nav>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="wrapper">
        <div className="navbar-top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="HMJ Logo" className="logo-image" />
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={isMenuOpen ? 'menu active' : 'menu'}>
            <ul>
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter(setIsProfileDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setIsProfileDropdownOpen)}
              >
                <a href="#profile">
                  Profile <FaCaretDown className="dropdown-icon" />
                </a>
                {isProfileDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/Visimisi">Visi & Misi</Link></li>
                    <li><Link to="/Struktur">Struktur Kepengurusan</Link></li>
                  </ul>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter(setIsProgramKerjaDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setIsProgramKerjaDropdownOpen)}
              >
                <a href="#program-kerja">
                  Program Kerja <FaCaretDown className="dropdown-icon" />
                </a>
                {isProgramKerjaDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="/Divpengembangan">Divisi Pengembangan Potensi Mahasiswa</a></li>
                    <li><a href="/Divadvokasi">Divisi Advokasi</a></li>
                    <li><a href="/Divhulmas">Divisi Hubungan Lembaga dan Masyarakat</a></li>
                    <li><a href="/Divdanus">Divisi Dana dan Usaha</a></li>
                    <li><a href="/Divkominfo">Divisi Komunikasi dan Informasi</a></li>
                    <li><a href="/Divkaderisasi">Divisi Kaderisasi</a></li>
                    <li><a href="/Divsekre">Divisi Kesekretaritan</a></li>
                  </ul>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter(setIsInformasiDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setIsInformasiDropdownOpen)}
              >
                <Link to="/">
                  Informasi
                <FaCaretDown className="dropdown-icon" />
                </Link>
                
                
                {isInformasiDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <ScrollLink
                        to="informasi" // ID of the Kegiatan section
                        smooth={true}
                        duration={800}
                      >
                        Akademik
                    </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="informasi" // ID of the Kegiatan section
                        smooth={true}
                        duration={800}
                      >
                        Beasiswa
                    </ScrollLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <ScrollLink
                  to="activities" // ID of the Kegiatan section
                  smooth={true}
                  duration={800}
                >
                  Kegiatan
                </ScrollLink>
              </li>
              <li>
              
                  <ScrollLink
                    to="contact-info" // ID of the Kegiatan section
                    smooth={true}
                    duration={800}
                  >
                    Kontak Kami
                  </ScrollLink>
                
                </li>
            </ul>
          </div>
        </div>

        <div className="navbar-heading">
          <h1 className="navbar-title">{title}</h1>
          <p className="navbar-subtitle">{subtitle}</p>
        </div>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,192C672,224,768,224,864,197.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;