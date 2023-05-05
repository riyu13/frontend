import React from 'react'
import { NavLink } from 'react-router-dom'

const Suru = () => {
  return (
    <div> 
    <div>
    <h1 className='title'>Kata Kerja -U</h1>
    <h2 className='subtitle'>Pola Kalimat Kata Kerja -U (Bentuk Kamus)</h2>
    <div className='card' style={{backgroundColor: '#ffffe0'}}>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/suru"} style={{color: 'white'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/maeni"} style={{color: 'black'}}>2</NavLink></a></li>
              </ul>
            </nav>
            <strong>1. Pngertian kata kerja bentuk U(bentuk kamus) atau する</strong>
            <p>"Suru" (する) adalah kata kerja dasar dalam bahasa Jepang yang memiliki arti "melakukan" atau "mengerjakan". Kata kerja ini sering digunakan dalam bahasa Jepang sebagai kata bantu untuk membentuk kata kerja yang lebih spesifik.</p>
            <br/>
            <p>Contoh penggunaan</p>
            <div className='card'>
                <div className='card-content'>
                    <p>Benkyou suru (勉強する) - Belajar</p>
                    <p>Shumi wo suru (趣味をする) - Melakukan hobi</p>
                    <p>Ryokou suru (旅行する) - Berpergian/ Melakukan perjalanan</p>
                    <p>Kaimono suru (買い物する) - Berbelanja/ Membeli sesuatu</p>
                    <p>Renshuu suru (練習する) - Berlatih</p>
                </div>
            </div>
            <br/>
            <strong>2. Penggunaan つもり atau Tsumori</strong>
            <p>"Tsumori" (つもり) adalah sebuah partikel bahasa Jepang yang memiliki arti "berencana untuk" atau "mempunyai niat untuk".</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- KK Kamus + つもりです (bermaksud)</p>
                    <p>- KK Kamus + つもりはありません (tidak bermaksud)</p>
                    <p>- KK Negarif + つもりです</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 今度週末京都に行くつもりです</p>
                    <p>- Kondo shuumatsu kyoto ni ikutsumori desu.</p>
                    <p>- Saya berencana untuk pergi ke Kyoto akhir pekan ini.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Suru