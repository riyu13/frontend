import React from 'react'
import { NavLink } from 'react-router-dom'

const Yasui = () => {
  return (
    <div>
        <h1 className='title'>Kata Kerja Masu</h1>
        <h2 className='subtitle'>Kata Kerja Bentuk Sopan (Masu)</h2>
        <div className='card'>
          <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/bentuk1k"}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/taik"}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/sugiruk"}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/yasuik"}>4</NavLink></a></li>
              </ul>
            </nav>
            <strong>7. ~やすい atau yasui</strong>
            <p>Konstruksi dalam bahasa Jepang yang digunakan untuk mengungkapkan kemudahan atau kecenderungan untuk melakukan tindakan tertentu.</p>
            <br/>
            <p>Pola kalimat dan contoh</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Kata kerja + ~やすい</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 日本語は勉強しやすいです。</p>
                    <p>- Nihongo wa benkyou shi yasui desu.</p>
                    <p>- Bahasa Jepang mudah dipelajari.</p>
                </div>
            </div>
            <br/>
            <strong>8. ~にくい atau nikui</strong>
            <p>Konstruksi dalam bahasa Jepang yang digunakan untuk mengungkapkan kesulitan atau keengganan dalam melakukan tindakan tertentu.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Kata kerja + ~にくい</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 数学は勉強が苦手で、勉強がとても苦手です。</p>
                    <p>- Suu-gaku wa benkyou ga nigate de, benkyou ga totemo nikui desu.</p>
                    <p>- Saya tidak pandai dalam matematika dan sulit untuk belajar.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Yasui