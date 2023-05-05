import React from 'react'
import { NavLink } from 'react-router-dom'

const Partikel3 = () => {
  return (
    <div>
    <h1 className='title'>Partikel Dasar</h1>
    <h2 className='subtitle'>Partikel - partikel dalam bahasa jepang dasar</h2>
    <div className='card' style={{backgroundColor: '#ffffe0'}}>
        <div className='card-content'>
         <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel"} style={{color: 'black'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel2"} style={{color: 'black'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/partikel3"} style={{color: 'white'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel4"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel5"} style={{color: 'black'}}>5</NavLink></a></li>
              </ul>
            </nav>
            <strong>4. Penggunaan Partikel に atau Ni</strong>
            <h3>Partikel に(Ni) dalam bahasa jepang sendiri memiliki beberapa arti, yaitu <strong>pada, di, & ke</strong>. Partikel ini digunakan untuk menegaskan penggunaan kata tempat dan waktu dan digunakan pada kondisi tertentu.</h3>
            <br/>
            <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola Kalimat</strong>
                    <p>- Kata Benda + に + Kata Kerja.</p>
                    <p>- Waktu + に + Kata Kerja.</p>
                    <br/>
                    <strong>Contoh Penggunaan</strong>
                    <p>- 学校に行きます.</p>
                    <p>- Gakkou Ni Ikimasu.</p>
                    <p>- Pergi Ke Sekolah.</p>
                </div>
            </div>
            <br/>
            <strong>5. Penggunaan Partikel も atau Mo</strong>
            <h3>Partikel も(Mo) ini digunakan dalam kalimat yang sudah memiliki predikat. Biasanya digunakan sebagai pengganti partikel は(wa).</h3>
            <br/>
            <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola Kalimat</strong>
                    <p>- kata benda + も + kata benda 2.</p>
                    <br/>
                    <strong>Contoh Penggunaan</strong>
                    <p>- これは私の車です、あれも私の車です.</p>
                    <p>- Kore wa watashi no kuruma desu, are mo watashi no kuruma desu.</p>
                    <p>- Ini mobil saya, dan itu juga mobil saya.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Partikel3