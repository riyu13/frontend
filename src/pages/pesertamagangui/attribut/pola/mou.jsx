import React from 'react'
import { NavLink } from 'react-router-dom'

const mou = () => {
  return (
    <div>
        <h1 className='title'>Pola Kata & Kalimat</h1>
    <h2 className='subtitle'>Pola dasar yang sering digunakan komunikasi oleh orang jepang</h2>
    <div className='card'>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/pengertian1"}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/mou1"}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/darou1"}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nonakade1"}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nisuru1"}>5</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nakanaka1"}>6</NavLink></a></li>
              </ul>
            </nav>
            <strong>1. Penggunaan もう atau mou</strong>
            <p>"Mou" dalam bahasa Jepang (Kanji: もう, Hiragana: もう) dapat memiliki beberapa arti, tergantung pada konteksnya.</p> 
            <br/>
            <p>Berikut adalah beberapa arti umum dari kata "mou" dalam bahasa Jepang:</p>
            <div className='card'>
            <div className='card-content'>
            <p>1. Lagi/tidak lagi: "mou ichido" (sekali lagi), "mou nai" (tidak lagi), "mou sukoshi" (sedikit lagi)</p>
            <p>2. Sudah: "mou juubun" (sudah cukup), "mou daijoubu" (sudah baik-baik saja), "mou shiranai" (sudah tidak tahu)</p>
            <p>3. Lain kali: "mou ichido" (lain kali), "mou chotto" (lain waktu)</p>
            <p>4. Seperti/sepertinya: "mou" (seperti) digunakan dalam bahasa sehari-hari untuk menunjukkan spekulasi atau perasaan.</p>
            </div>
            </div>
            <br/>
            <strong>2. Penggunaan か。。。か atau Ka...ka</strong>
            <p>Pola kalimat ini digunakan untuk menanyakan sesuatu pada dua pilihan.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>- Subjek, predikat か + predikat か</p>
                <br/>
                <p>Penjelasan :</p>
                  <p>- か dalam pola kalimat ini bisa diartikan ‘atau’.</p>
                  <p>- Subjek sendiri bersifat opsional, boleh ada boleh tidak.</p>
                  <p>- Subjek dalam pola kalimat ini bisa diisi dengan kata benda apapun.</p>
                  <p>- Predikat dalam pola kalimat ini bisa diisi kata benda, kata sifat, maupun kata kerja.</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>彼は上手ですか、下手ですか</p>
                <p>– Kare wa jouzu desuka, heta desuka</p>
                <p>– Apakah dia pintar atau bodoh ?</p>
              </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default mou