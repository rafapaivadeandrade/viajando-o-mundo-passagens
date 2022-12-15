import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-scroll';
import { useParams } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../public/logo2.jpeg';
import Image from "next/image";
import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import Hamburger from './Hamburger'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="transparent header">
      <div className='container-header'>
        {/* logo begin */}
        <div id="logo" className={styles.logo}>
          <Link
            // style={{ color: `${info?.fontColor}` }}
            to="dalk-image"
            smooth
            duration={1000}
          >
            <Image src={logo} alt="viajandoomundopassagenslogo" />
          </Link>
        </div>
        <nav
          className={[`header__nav col-xl-6 col-lg-6`, styles.navItems]}>

          <ul id="mainmenu" className="ms-2" >
            <li>
              <Link
                to="dalk-image"
                smooth
                duration={1000}
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                to="section-about"
                smooth
                duration={1000}
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                to="section-destiny"
                smooth
                duration={1000}
              >
                Destino
              </Link>
            </li>

            <li>
              <Link
                to="section-contact"
                smooth
                duration={1000}
              >
                Contato
              </Link>
            </li>

          </ul>
        </nav>
        {/* mainmenu close */}
        <div className='col-xl-4 col-lg-4 d-none d-flex justify-content-end align-items-center' style={{ backgroundColor: '#F7F7F7' }}>
          <div className="social_wrap d-flex">
            <div className={styles.number}>
              <p style={{ fontWeight: '600' }}>
                <a href='https://api.whatsapp.com/send?phone=5581989845674' style={{ color: '#000' }} target="_blank" rel="noreferrer">
                  <BsTelephone size={10} />
                  {" "}
                  (81) 989845674
                </a>
              </p>
            </div>
            <div className='container-media'>
              <p style={{ fontWeight: '600' }}>
                <a href='https://www.instagram.com/viajandoomundopassagens' style={{ color: '#000' }} target="_blank" rel="noreferrer">
                  <BsInstagram size={30} color="#F56040" />
                </a>
              </p>
            </div>
          </div>
          <div className={styles.containerHamburguer}>
            <ul>
              <li>
                {menuOpen ? (
                  <GrClose size={30} color="#000" onClick={() => setMenuOpen(e => !e)} />
                ) : (
                  <GiHamburgerMenu size={30} color="#000" onClick={() => setMenuOpen(e => !e)} />
                )}
              </li>
            </ul>
          </div>
          <div className={styles.containerMedia}>
            <ul>
              <li>
                <a href='https://www.instagram.com/viajandoomundopassagens' style={{ color: '#000' }} target="_blank" rel="noreferrer">
                  <BsInstagram size={30} color="#F56040" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://api.whatsapp.com/send?phone=5581989845674' style={{ color: '#000' }} target="_blank" rel="noreferrer">
                  <RiWhatsappFill size={30} color="#5FFC7B" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {
        menuOpen ? (
          <div className='header-nav-items'>
            <ul>
              <li>
                <Link
                  className={`${menuOpen ? 'show' : 'hidden'}`}
                  style={{ fontWeight: 'bold' }}
                  to="dalk-image"
                  smooth
                  duration={1000}
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  className={`${menuOpen ? 'show' : 'hidden'}`}
                  style={{ fontWeight: 'bold' }}
                  to="section-about"
                  smooth
                  duration={1000}
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  className={`${menuOpen ? 'show' : 'hidden'}`}
                  style={{ fontWeight: 'bold' }}
                  to="section-destiny"
                  smooth
                  duration={1000}
                >
                  Destino
                </Link>
              </li>

              <li>
                <Link
                  className={`${menuOpen ? 'show' : 'hidden'}`}
                  style={{ fontWeight: 'bold' }}
                  to="section-contact"
                  smooth
                  duration={1000}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className='nothing'></div>
        )
      }
    </header >
  );
};

export default Header;
