import React from 'react'
import { NavLink } from 'react-router-dom'

const nonakade = () => {
  return (
    <div>
    <h1 className='title'>Pola Kata & Kalimat</h1>
    <h2 className='subtitle'>Pola dasar yang sering digunakan komunikasi oleh orang jepang</h2>
    <div className='card' style={{backgroundColor: '#ffffe0'}}>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/pengertian"} style={{color: 'black'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/mou"} style={{color: 'black'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/darou"} style={{color: 'black'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/nonakade"} style={{color: 'white'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nisuru"} style={{color: 'black'}}>5</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nakanaka"} style={{color: 'black'}}>6</NavLink></a></li>
              </ul>
            </nav>
            <strong>5. の中で atau No naka de</strong>
            <p>"Nonakade" (のなかで) adalah frasa dalam bahasa Jepang yang artinya adalah "di dalam". Frasa ini biasanya digunakan untuk menunjukkan tempat atau situasi di mana suatu kegiatan atau peristiwa terjadi.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Benda + の中で~</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 学生の中で、彼が一番ハンサムです.</p>
                    <p>- Gakusei no naka de, kare ga ichiban hansamu desu.</p>
                    <p>- Di antara murid-murid, dia yang paling tampan.</p>
                </div>
            </div>
            <br/>
            <strong>6.Penggunaan と言います atau Toiimasu</strong>
            <p>"Toiimasu" (と言います) adalah kata kerja dalam bahasa Jepang yang berarti "mengatakan" atau "mengucapkan". Kata kerja ini biasanya digunakan untuk mengenalkan diri atau orang lain, memberikan nama atau identitas, atau untuk mengutip atau merujuk pada pendapat atau pernyataan seseorang</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Kata Benda + と言います : disebut / bernama</p>
                    <p>- Kalimat / Perkataan + と言います : berkata</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 私は田中と言います。</p>
                    <p>- Watashi wa Tanaka to iimasu.</p> 
                    <p>- Nama saya Tanaka.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default nonakade