import React from 'react'
import { NavLink } from 'react-router-dom'

const Maeni = () => {
  return (
    <div>
    <h1 className='title'>Kata Kerja -U</h1>
    <h2 className='subtitle'>Pola Kalimat Kata Kerja -U (Bentuk Kamus)</h2>
    <div className='card'>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/surup"}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/maenip"}>2</NavLink></a></li>
              </ul>
            </nav>
            <strong>3. Penggunaan 前に atau Maeni</strong>
            <p>"Maeni" (前に) adalah sebuah partikel bahasa Jepang yang memiliki arti "sebelum" atau "sebelumnya".</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>– Kata Kerja -U + 前に</p>
                    <p>– Kata Benda + の前に</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 学校に行く前に、朝ご飯を食べます。</p>
                    <p>- Gakkou ni iku maeni, asagohan wo tabemasu.</p>
                    <p>- Saya makan sarapan sebelum pergi ke sekolah.</p>
                </div>
            </div>
            <br/>
            <strong>4. Penggunaan ことができる atau koto ga dekiru</strong>
            <p>Sebuah frasa bahasa Jepang yang artinya adalah "bisa" atau "dapat melakukan sesuatu". Frasa ini sering digunakan dalam bahasa Jepang untuk menyatakan kemampuan atau kebolehan seseorang dalam melakukan suatu tindakan atau aktivitas.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Kata kerja bentuk U + ことができます</p>
                    <p>- Kata benda + ことができます</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- 刺身を作ることができます。</p>
                    <p>- Sashimi wo tsukuru koto ga dekimasu.</p>
                    <p>- Saya bisa membuat hidangan sashimi.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Maeni