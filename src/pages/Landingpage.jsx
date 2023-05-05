import React from 'react'
import logo from '../assets/logo.png'
import { BiLogIn } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import image1 from '../assets/clay-banks-hwLAI5lRhdM-unsplash.jpg'
import image2 from '../assets/david-edelstein-N4DbvTUDikw-unsplash.jpg'
import image3 from '../assets/sora-sagano-8sOZJ8JF0S8-unsplash.jpg'
import image4 from '../assets/undraw_connection_re_lcud.svg'
import image5 from '../assets/undraw_working_remotely_re_6b3a.svg'
import image6 from '../assets/undraw_interview_re_e5jn.svg'
import image7 from '../assets/undraw_contact_us_re_4qqt.svg'

const Landingpage = () => {
  return (
    <div>
    <nav className="navbar is-fixed-top is-dark">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Logo" />
            <h1 className="title has-text-white is-5 ml-2">LPK Yukimaga Surakarta</h1>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#home">Beranda</a>
            <a className="navbar-item" href="#layer-one">Magang Jepang</a>
            <a className="navbar-item" href="#layer-two">Testimoni</a>
            <a className="navbar-item" href="#layer-three">Tentang Kami</a>
            <a className="navbar-item" href="#layer-four">Kontak</a>
            <a className="navbar-item" href="/home">
              Log in<BiLogIn/>
            </a>
          </div>
        </div>
      </div>
    </nav>
    {/* layer */}
    <section id="home" className="hero is-fullheight">
      <Carousel>
        <div>
          <img src={image1} alt="slide1" />
          <p className="legend">Japan traditional style mise, toko tradisional jepang.</p>
        </div>
        <div>
          <img src={image2} alt="slide2" />
          <p className="legend">Arakura Fuji Sengen Jinja Shrine, terletak di Fujiyoshida, prefektur Yamanashi. </p>
        </div>
        <div>
          <img src={image3} alt="slide3" />
          <p className="legend">Musim semi di jembatan Meguro, prefektur Matsuno.</p>
        </div>
      </Carousel>
      </section>
   <section id="layer-one" className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title">
                IM Japan
              </h1>
              <h2 className="subtitle">
                International Manpower Development Organization Japan yang merupakan yayasan social di Jepang dengan tugas sebagai berikut : Menerima peserta praktek kerja dari luar negeri ( khususnya dari Indonesia ),
                magang di jepang selama 3 tahun, belajar sekaligus kerja dengan teknologi modern jepang.
              </h2>
            </div>
            <div className="column is-half">
              <img src={image4}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //layer 2 */}
    <section id="layer-two" className="hero is-warning is-fullheight">  
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <img src={image5}/>
            </div>
            <div className="column is-half">
              <h1 className="title">
                Layer Dua
              </h1>
              <h2 className="subtitle">
                Ini adalah layer kedua dari landing page.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //layer 3 */}
    <section id="layer-three" className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title">
                Layer Tiga
              </h1>
              <h2 className="subtitle">
                Ini adalah layer ketiga dari landing page.
              </h2>
            </div>
            <div className="column is-half">
              <img src={image6}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="layer-four" className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title">
                Layer Keempat
              </h1>
              <h2 className="subtitle">
                Ini adalah layer keempat dari landing page.
              </h2>
            </div>
            <div className="column is-half">
              <img src={image7}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Landingpage