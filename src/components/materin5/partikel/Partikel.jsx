import React from 'react'
import { NavLink } from 'react-router-dom'

const Partikel = () => {
  return (
    <div>
    <h1 className='title'>Partikel Dasar</h1>
    <h2 className='subtitle'>Partikel - partikel dalam bahasa jepang dasar</h2>
        <div className='card' style={{backgroundColor: '#FFFFE0'}}>
        <div className='card-content'>
         <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/partikel"} style={{color: 'white'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel2"} style={{color: 'black'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel3"} style={{color: 'black'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel4"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel5"} style={{color: 'black'}}>5</NavLink></a></li>
              </ul>
            </nav>
            <h3>Partikel dalam bahasa jepang biasanya digunakan
            untuk mengatur tata bahasa yang akan digunakan. Ada beberapa
            partikel dalam bahasa jepang yang sering digunakan sebagai berikut: <strong>
            は（Wa）、を（O）、で（De）、に（Ni）、も（Mo）、と（To）、が（Ga）、の（No）、など（Nado）、しか（Shika）、から＆まで（Kara＆Made）、から＆ので（Kara＆Node）、ごろ＆ぐらい（Goro＆Gurai）、より。。。ほうが（Yori...Houga）。</strong> Berikut ini contoh penggunaan dari masing-masing partikel:
            </h3>
            <br/>
            <h3><strong>1. Pengunaan Partikel は atau yag dibaca (Wa)</strong></h3>
            <h3>Partikel ini yang biasanya dibaca dengan (ha) tapi jika dimasukkan kedalam sebuah kalimat akan berubah menjadi huruf(Wa). Jika diterjemahkan kedalam bahasa indonesia sendiri secara harfiah partikel ini memiliki arti <strong>'adalah'</strong> dan dalam bahasa inggris partikel ini mirip seperti <strong>'is, am, dan are'</strong></h3>
            <br/>
            <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
            <h3>
              <div className='card'>
                <div className='card-content'>
                  <strong>Pola Kalimat</strong>
                  <p>- Topik + は + ...desu(waktu sekarang)</p>
                  <p>- Topik + は + ...desuta(waktu lampau)</p>
                  <p>- Topik + は + ...desuka(pertanyaan sekarang)</p>
                  <p>- Topik + は + ...deshitaka(pertanyaan lampau)</p>
                  <br/>
                  <strong>Contoh Pengguanaan</strong>
                  <p>- これはえんぴつです。<br/>- Kore wa enpitsu desu. <br/>- Ini dalah pensil.</p>
                </div>
              </div>
            </h3>
            <br/>
            </div>
        </div>
    </div>
  )
}

export default Partikel