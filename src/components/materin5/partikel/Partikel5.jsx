import React from 'react';
import { NavLink } from 'react-router-dom';

const Partikel5 = () => {
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
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/partikel4"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/partikel5"} style={{color: 'white'}}>5</NavLink></a></li>
              </ul>
            </nav>
            <strong>8. Partikel の atau No</strong>
            <p>digunakan untuk memisahkan dua kata benda, dengan kata lain jika terdapat dua kata benda maka partikel No “の” ini akan diletakkan diantara kedua kata benda tersebut dengan fungsi :</p>
            <p>1. Sebagai penanda kepemilikan</p>
            <p>2. Sebagai penanda ‘buatan’ atau tempat suatu barang berasal.</p>
            <p>3. KB pertama menerangkan KB berikutnya.</p>
            <br/>
            <h3>Pola kalimat dan contoh penggunaan sebagai berikut:</h3>
            <div className='card'>
            <div className='card-content'>
                <strong>Pola Kalimat</strong>
                <p>- Subjek + の + kata benda.</p>
                <br/>
                <strong>Contoh Penggunaan</strong>
                <p>- この物は私の物です.</p>
                <p>- Kono mono wa watashi no mono desu.</p>
                <p>- Benda ini adalah benda milik saya.</p>
            </div>
            </div>
            <br/>
            <strong>9. Partikel など atau Nado</strong>
            <p>Partikel Nado など dalam bahasa Jepang berarti ‘dan lain-lain’ atau ‘dan sebagainya’, partikel ini sering disertai dengan partikel ‘や’ yang berarti ‘dan’.</p>
            <br/>
            <p>Pola kalimat dan contoh penggunaan sebagai berikut:</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola Kalimat</strong>
                <p>- KB1, KB2, … + など</p>
                <p>- KB1 + や + KB2 + やなど</p>
                <br/>
                <strong>Contoh Penggunaan</strong>
                <p>- 動物園に猿や熊や馬やなどがいます.</p>
                <p>- Doubutsuen ni saru ya kuma ya uma ya nado ga imasu.</p>
                <p>- Di kebut binatang ada monyet, beruang, kuda, dan lainnya.</p>
              </div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Partikel5