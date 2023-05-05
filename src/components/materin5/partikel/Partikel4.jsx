import React from 'react';
import { NavLink } from 'react-router-dom';

const Partikel4 = () => {
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
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel3"} style={{color: 'black'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/partikel4"} style={{color: 'white'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel5"} style={{color: 'black'}}>5</NavLink></a></li>
              </ul>
            </nav>
            <strong>6. Partikel と atau to</strong>
            <p>Partikel ini digunakan sebagai kata sambung yang memilik arti : <strong>'dan' & 'dengan'.</strong></p>
            <br/>
            <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
            <div className='card'>
            <div className='card-content'>
                <strong>Pola Kalimat</strong>
                <p>- Kata benda + と + kata benda</p>
                <br/>
                <strong>Contoh Penggunaan</strong>
                <p>- 猫と犬がいる.</p>
                <p>- Neko to inu ga iru.</p>
                <p>- Saya punya kucing dan anjing.</p>
            </div>
            </div>
            <br/>
             <strong>7. Partikel が atau Ga</strong>
            <p>Partikel ini dapat digunakan untuk menerangkan keadaan dari suatu benda. Kata sifat yang menjadi objek dari pola kalimat ini akan diubah menjadi kata benda dengan menambahkan hiragana の. Partikel ga dapat digunakan untuk menegaskan suatu pernyataan atau kalimat. Dalam hal ini partikel ga bisa diartikan <strong>yang</strong> dalam bahasa Indonesia. Partikel ga ini juga digunakan untuk kata kerja intransitif, yaitu kata kerja yang tidak memerlukan objek.</p>
            <br/>
            <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
            <div className='card'>
            <div className='card-content'>
                <strong>Pola Kalimat</strong>
                <p>- Kata tempat + が + kata kerja + ?</p>
                <p>- Kata benda + が + kata sifat</p>
                <p>- Kata benda + が + kata kerja</p>
                <br/>
                <strong>Contoh Penggunaan</strong>
                <p>- 雪が降る.</p>
                <p>- Yuki ga furu.</p>
                <p>- Turun salju.</p>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Partikel4