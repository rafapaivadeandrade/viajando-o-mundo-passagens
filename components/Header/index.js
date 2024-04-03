import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import styles from "./Header.module.css"
import logo from "../../public/cor_mais_clara.png"
import Image from "next/image"
import { BsTelephone, BsInstagram } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Initial width on mount
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="transparent header">
      <div className="container-header">
        {/* logo begin */}
        <div id="logo" className={styles.logo}>
          <Link
            // style={{ color: `${info?.fontColor}` }}
            to="dalk-image"
            smooth
            duration={1000}
          >
            <Image src={logo} alt="mundomilhaslogo" />
          </Link>
        </div>
        <nav className={[`header__nav col-xl-6 col-lg-6`, styles.navItems]}>
          <ul id="mainmenu" className="ms-2">
            <li>
              <Link to="dalk-image" smooth duration={1000}>
                Início
              </Link>
            </li>

            <li>
              <Link to="section-about" smooth duration={1000}>
                Sobre
              </Link>
            </li>

            <li>
              <Link to="section-destiny" smooth duration={1000}>
                Destino
              </Link>
            </li>

            <li>
              <Link to="section-contact" smooth duration={1000}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        {/* mainmenu close */}
        <div
          className="col-xl-4 col-lg-4 d-none d-flex justify-content-end align-items-center"
          style={{ backgroundColor: "#5B4DBB" }}
        >
          <div className={`social_wrap d-flex ${windowWidth <= 767 && "mt-4"}`}>
            <div className={styles.number}>
              <p style={{ fontWeight: "600" }}>
                <a
                  href="https://api.whatsapp.com/send?phone=5581989845674"
                  style={{ color: "#fff" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTelephone size={10} color="#fff" /> (81) 989845674
                </a>
              </p>
            </div>
            <div className="container-media">
              <p style={{ fontWeight: "600" }}>
                <a
                  href="https://www.instagram.com/mundomilhaseviagens"
                  style={{ color: "#000" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={30} color="#F56040" />
                </a>
              </p>
            </div>
          </div>

          <div className={styles.containerHamburguer}>
            <ul>
              <li>
                {menuOpen ? (
                  <GrClose
                    size={30}
                    color="#fff"
                    onClick={() => setMenuOpen(e => !e)}
                  />
                ) : (
                  <GiHamburgerMenu
                    size={30}
                    color="#fff"
                    onClick={() => setMenuOpen(e => !e)}
                  />
                )}
              </li>
            </ul>
          </div>
          <div className={styles.containerMedia}>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mundomilhaseviagens"
                  style={{ color: "#000" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={30} color="#F56040" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5581989845674"
                  style={{ color: "#000" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiWhatsappFill size={30} color="#5FFC7B" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className="header-nav-items">
          <ul>
            <li>
              <Link
                className={`${menuOpen ? "show" : "hidden"}`}
                style={{ fontWeight: "bold", color: "#fff" }}
                to="dalk-image"
                smooth
                duration={1000}
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                className={`${menuOpen ? "show" : "hidden"}`}
                style={{ fontWeight: "bold", color: "#fff" }}
                to="section-about"
                smooth
                duration={1000}
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                className={`${menuOpen ? "show" : "hidden"}`}
                style={{ fontWeight: "bold", color: "#fff" }}
                to="section-destiny"
                smooth
                duration={1000}
              >
                Destino
              </Link>
            </li>

            <li>
              <Link
                className={`${menuOpen ? "show" : "hidden"}`}
                style={{ fontWeight: "bold", color: "#fff" }}
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
        <div className="nothing"></div>
      )}
    </header>
  )
}

export default Header
