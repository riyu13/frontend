import React from 'react'
import { NavLink } from 'react-router-dom'

const nakanaka = () => {
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
            <strong>9. なかなか atau Naka-naka</strong>
            <p className='has-text-justified'>"Naka naka" adalah sebuah frasa dalam bahasa Jepang yang memiliki arti <strong>"sangat"</strong> atau <strong>"tidak mudah"</strong>.
            "Naka naka" berarti "sangat" atau "tidak mudah" dan digunakan untuk mengekspresikan sebuah hal yang sulit atau tidak mudah dilakukan.</p>
            <br/>
            <p>Berikut adalah pola dan contoh kalimat menggunakan frasa <strong>"naka naka"</strong>:</p>
            <div className='card'>
                <div className='card-content'>
                <strong>Pola Kalimat</strong>
                <p>- なかなか + kata kerja negatif</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- 彼は、新しい言語を学ぶのがなかなかできなかった。</p>
                <p>- Kare wa, atarashii gengo o manabu no ga naka naka dekinakatta.</p>
                <p>- Dia kesulitan belajar bahasa baru.</p>
            </div>
            </div>
            <br/>
             <strong>10. あまり atau Amari</strong>
             <p className='has-text-justified'>"Amari" adalah kata dalam bahasa Jepang yang dapat digunakan sebagai kata sifat atau kata keterangan, dan secara umum berarti <strong>"tidak terlalu"</strong> atau <strong>"tidak banyak"</strong>. Kata ini sering digunakan untuk menyatakan kuantitas, intensitas, atau kualitas yang rendah atau kurang dari yang diharapkan.</p>
             <br/>
             <p>Berikut adalah pola dan contoh kalimat menggunakan frasa <strong>"amari"</strong>:</p>
             <div className='card'>
                <div className='card-content'>
                    <strong>Pola Kalimat</strong>
                    <p>- あまり + predikat negatif</p>
                    <br/>
                    <strong>Contoh Kalimat</strong>
                    <p>- あのレストランの料理はあまり美味しくなかったです。</p>
                    <p>- Ano resutoran no ryōri wa amari oishikunakatta desu.</p>
                    <p>- Makanan di restoran itu tidak terlalu enak.</p>
                </div>
             </div>
            </div>
            </div>
    </div>
  )
}

export default nakanaka