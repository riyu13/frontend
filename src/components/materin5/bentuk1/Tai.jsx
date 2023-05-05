import React from 'react'
import { NavLink } from 'react-router-dom'

const Tai = () => {
  return (
    <div>
        <h1 className='title'>Kata Kerja Masu</h1>
        <h2 className='subtitle'>Kata Kerja Bentuk Sopan (Masu)</h2>
        <div className='card' style={{backgroundColor: '#ffffe0'}}>
          <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/bentuk1"} style={{color: 'black'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/tai"} style={{color: 'white'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/sugiru"} style={{color: 'black'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/yasui"} style={{color: 'black'}}>4</NavLink></a></li>
              </ul>
            </nav>
            <strong>3. Penggunaan kata kerja - tai(たい)</strong>
            <p>Penggunaan kata kerja berakhiran tai(たい) adalah pengguanaan dimana ketika percakapan seseorang ingin mengungkapkan suatu keinginan.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>Kata kerja(masu) + tai</p>
                <p>- 行きます : 行きたい</p>
                <p>- 食べます : 食べたい</p> 
                <p>- 勉強します : 勉強したい</p>
                <p>- 見ます : 見たい</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- 毎日私は学校へ行きたいです</p>
                <p>- Mainichi watashi wa gakkou e ikitai desu</p>
                <p>- Setiap hari aku ingin pergi ke sekolah.</p>
              </div>
            </div>
            <br/>
            <strong>4. Penggunaan katak kerja + なさい(nasai)</strong>
            <p>Kata kerja yang diimbuhkan dengan なさい akan digunakan sebagai berubah menjadi kata perintah, dan memiliki arti imbuhan (lah).</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>- Kata kerja + （ばさい）nasai</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- このラメンを食べなさい。</p>
                <p>- Kono ramen wo tabenasai.</p>
                <p>- Makanlah ramen ini.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tai