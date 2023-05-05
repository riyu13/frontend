import React from 'react'
import { NavLink } from 'react-router-dom'

const Naidekudasai = () => {
  return (
    <div>
    <h1 className='title'>Kata Kerja Negatif</h1>
        <h2 className='subtitle'>Kata Kerja Bentuk Negatif (-A)</h2>
        <div className='card'>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nai1"}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/naidekudasai1"}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nakerebanaranai1"}>3</NavLink></a></li>
              </ul>
            </nav>
            <strong>3. Kata kerja + ~ないでください(~naidekudasai)</strong>
            <p>Bentuk negatif dari perintah langsung dalam bahasa Jepang yang artinya "tolong jangan lakukan sesuatu." Kata ini umumnya digunakan dalam situasi formal untuk meminta seseorang untuk tidak melakukan sesuatu.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>~ Kata kerja + ~ないでください</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>~ このケーキを食べないでください。</p>
                    <p>~ Kono keeki o tabenaidekudasai.</p>
                    <p>~ Tolong jangan makan kue ini.</p>
                </div>
            </div>
            <br/>
            <strong>4. Kata kerja + ~なくてもいい</strong>
            <p>Frasa dalam bahasa Jepang yang berarti "tidak apa-apa jika aku mati" atau "aku tidak peduli jika aku mati". Frasa ini sering digunakan untuk menunjukkan tekad yang kuat atau semangat yang berani di mana seseorang siap mengambil risiko atau pengorbanan untuk tujuan yang lebih besar.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>~ Kata kerja + ~なくてもいい.</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>~ あなたはこの物を見なくてもいい。</p>
                    <p>~ Anata wa kono mono wo minakutemoii.</p>
                    <p>~ Kamu tidak perlu melihat benda ini.</p>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Naidekudasai