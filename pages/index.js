import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Seo from '../components/Seo';
import Header from '../components/Header';
import AlertBrowser from '../components/AlertBrowser';
import BannerParallax from '../components/BannerParallax';
import SectionPrice from '../Sections/SectionPrice';
import SectionRegister from '../Sections/SectionRegister';
import SectionAbout from '../Sections/SectionAbout';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import LoadingScreen from '../components/LoadingScreen';
import 'bootstrap/dist/css/bootstrap.css';
import SectionDestiny from '../Sections/SectionDestiny';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {dataJson} from '../Sections/SectionDestiny/data'
export default function Home() {
  return (
    <>
    <Seo />
      <div>
        <div id="wrapper">
          <Header />

          <AlertBrowser />

          <div id="content" className="no-bottom no-top">
            <BannerParallax />


            <SectionPrice />

            <SectionDestiny dataJson ={dataJson}/>

            <SectionAbout/>

            <SectionRegister />

            <Footer />
          </div>
        </div>

        <FooterBottom />
      </div>
      {/* <LoadingScreen /> */}
  </>
  )
}
