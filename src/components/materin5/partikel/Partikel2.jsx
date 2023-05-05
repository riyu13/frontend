import React from 'react'
import { NavLink } from 'react-router-dom'

const Partikel2 = () => {
  return (
    <div>
    <h1 className='title'>Partikel Dasar</h1>
    <h2 className='subtitle'>Partikel - partikel dalam bahasa jepang dasar</h2>
        <div className='card' style={{backgroundColor: '#FFFFE0'}}>
        <div className='card-content'>
         <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel"} style={{color: 'black'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/partikel2"} style={{color: 'white'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel3"} style={{color: 'black'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel4"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel5"} style={{color: 'black'}}>5</NavLink></a></li>
              </ul>
            </nav>
        <h3><strong>2. Pengunaan Partikel を atau yang dibaca (O)</strong></h3>
        <h3>Walaupun ditulis dengan hiragana wo, namun tetap dibaca o (を) jika digunakan sebagai partikel dalam kalimat. Fungsi yang paling umum dan paling dasar dari partikel o (を) ini adalah sebagai penanda objek. Dan partikel o (を) ini memiliki beberapa arti khusus diantaranya : melewati / mengelilingi, dan mengarungi yakni tergantung dari konsep kalimat yang digunakan.</h3>
        <br/>
        <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
        <div className='card'>
          <div className='card-content'>
            <strong>Pola Kalimat</strong>
            <p>- Objek + を + kata kerja</p>
            <br/>
            <strong>Contoh Penggunaan</strong>
            <p>- 本を読みます.</p>
            <p>- Hon o yomimasu.</p>
            <p>- Membaca buku.</p>
          </div>
        </div>
        <br/>
        <h3><strong>3. Pengunaan Partikel で atau (De)</strong></h3>
        <p> Partikel de dalam bahasa Jepang memiliki banyak fungsi, partikel ini bisa berarti <strong>di, dengan, karena, & dan</strong>. Semua itu tergantung konsep kalimat yang digunakan. Jika kalimat menyatakan tempat maka bisa disimpulkan Partikel de (で) dalam kalimat tersebut berarti “di”, jika dalam kalimat sebab akibat berarti bisa diartikan “karena”, dan sebagainya.</p>
        <br/>
        <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
        <div className='card'>
          <div className='card-content'>
            <strong>Pola Kalimat</strong>
            <p>- Benda + Partikel de（で） + Kata Kerja</p>
            <p>- Tempat + Partikel de（で） + Kata Kerja</p>
            <br/>
            <strong>Contoh Penggunaan</strong>
            <p>- 私はご飯を食べる時箸で使います.</p>
            <p>- Watashi wa gohan taberu toki hashi de tsukaimasu.</p>
            <p>- Ketika saya makan nasim saya menggunakan sumpit.</p>
          </div>
        </div>
        <br/>
        </div>
        </div>
        </div>
  )
}

export default Partikel2