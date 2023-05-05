import React from 'react'
import { NavLink } from 'react-router-dom'

const nisuru = () => {
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
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nonakade"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/nisuru"} style={{color: 'white'}}>5</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nakanaka"} style={{color: 'black'}}>6</NavLink></a></li>
              </ul>
            </nav>
            <strong>7. にする atau Ni suru</strong>
            <p>Kata <strong>"ni suru"</strong> dalam bahasa Jepang adalah sebuah frasa yang berarti <strong>"melakukan"</strong> atau <strong>"menjalankan"</strong>. Frasa ini terdiri dari dua bagian, yaitu "ni" yang berarti "kepada" atau "untuk" dan "suru" yang berarti "melakukan".</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>- Kata benda + にする</p>
                <br/>
                <strong>Contoh Kalimat</strong>
                <p>- 紅茶にする</p>
                <p>- Koucha ni suru</p>
                <p>- Pilih teh</p>
                </div>
            </div>
            <br/>
            <strong>8. と言います atau Toiimasu</strong>
            <p>"Toiimasu" (と言います) dalam bahasa Jepang berarti "mengatakan" atau "mengucapkan". Frasa ini berasal dari kata kerja "iu" (言う) yang artinya juga "mengatakan" atau "berbicara".</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Subject(Nama orang) + と言います</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- あの人は明日休みと言いました。</p>
                    <p>- ano hito wa ashita yasumi toiimashita.</p>
                    <p>- Orang itu mengatakan besok libur.</p>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default nisuru