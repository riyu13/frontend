import React from 'react'
import { NavLink } from 'react-router-dom'

const Sugiru = () => {
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
            <strong>5. Penggunaan (すぎる / なすぎる) atau Sugiru/Nasugiru</strong>
            <p>Pola ini digunakan ketika ingin mengungkapkan sesuatu yang berlebihan dalam bahasa Indonesia bisa seperti ‘terlalu besar’ , ‘terlalu kecil’ dan sebagainya. Biasanya terdapat kata ‘terlalu’ dalam ungkapannya.</p>
            <br/>
            <p>Pola kalimat dan contoh</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>- Kata kerja + ~すぎる</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- 朝ごはんの時私はご飯を食べすぎる。</p>
                <p>- Asa gohan no toki watashi wa gohan o tabesugiru.</p>
                <p>- Ketika sarapan, saya terlalu banyak makan.</p>
              </div>
            </div>
            <br/>
            <strong>6. Penggunaan (~ながら) atau nagara</strong>
            <p>Pola (~ながら) digunakan ketika seseorang ingin mengungkapkan suatu kegiatan yang dilakukan bersama dan memiliki arti "sambil".</p>
            <br/>
            <p>Pola kalimat dan contoh</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>- Kata kerja + (~ながら)</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- 宿題をしながら音楽を聞きます。</p>
                <p>- Shukudai o shinagara ongaku o kikimasu.</p>
                <p>- Mengerjakan PR sambil mendengarkan musik.</p>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sugiru