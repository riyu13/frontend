import React from 'react'
import { NavLink } from 'react-router-dom'

const Bentuk1 = () => {
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
            <strong>1. Pengertian kata kerja bentuk 1 atau masu</strong>
            <p>"Bentuk kata kerja masu" adalah salah satu bentuk konjugasi kata kerja dalam bahasa Jepang yang digunakan untuk mengekspresikan tindakan yang sedang dilakukan dalam situasi sekarang, atau untuk mengekspresikan tindakan yang biasa atau berulang.</p>
            <br/>
            <div className='card'>
                <div className='card-content'>
                    <strong>Beberapa contoh kata kerja</strong>
                    <p>- 食べます (tabemasu) - makan</p>
                    <p>- 見ます (mimasu) - melihat</p>
                    <p>- 行きます (ikimasu) - pergi</p>
                    <p>- 来ます (kimasu) - datang</p>
                    <p>- 聞きます (kikimasu) - mendengar/meminta informasi</p>
                </div>
            </div>
            <br/>
            <strong>2. ましょう、ませんか atau mashou, masenka</strong>
            <p>Kata mashou atau masenka biasanya digunakan ketika kita meminta tolong atau mengajak seseorang dengan bentuk sopan.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- kata kerja + ましょうか/ませんか</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 一緒に食べましょう</p>
                    <p>- Isshoni tabemashou</p>
                    <p>- Mari kita makan.</p>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Bentuk1