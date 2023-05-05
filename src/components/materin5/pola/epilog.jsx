import React from 'react'
import { NavLink } from 'react-router-dom'

const epilog = () => {
  return (
    <div>
    <h1 className='title'>Pola Kata & Kalimat</h1>
    <h2 className='subtitle'>Pola dasar yang sering digunakan komunikasi oleh orang jepang</h2>
    <div className='card' style={{backgroundColor: '#ffffe0'}}>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/pengertian"} style={{color: 'white'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/mou"} style={{color: 'black'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/darou"} style={{color: 'black'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nonakade"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nisuru"} style={{color: 'black'}}>5</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nakanaka"} style={{color: 'black'}}>6</NavLink></a></li>
              </ul>
            </nav>
            <strong>Pengertian</strong>
            <div className='has-text-justified'>Pola kata dan pola kalimat sangat penting dalam belajar bahasa Jepang, karena pola-pola ini membantu Anda membangun keterampilan dasar untuk membaca, menulis, dan berbicara dalam bahasa Jepang.</div>
            <br/>
            <strong>Pola kata (Kata no Kihon)</strong>
            <p className='has-text-justified'>Pola kata atau "Kata no Kihon" dalam bahasa Jepang merujuk pada cara kata-kata dasar dibentuk dengan menggunakan huruf hiragana, katakana, dan kanji. Pola-pola kata ini meliputi cara menambahkan akhiran ke kata dasar, menggabungkan kata-kata untuk membentuk kata majemuk, dan mengubah kata-kata menjadi kata sifat atau kata kerja.</p>
            <br/>
            <p>Contoh pola kata yang umum digunakan adalah:</p>
            <div className='card'>
              <div className='card-content'>
              <p>Akhiran kata benda: (−さん), (−ちゃん), (−くん), (−先生), (−さん)</p>
            <p>Akhiran kata sifat: (−い), (−な), (−かわいい), (−おいしい)</p>
            <p>Akhiran kata kerja: (−ます), (−ました), (−ている), (−ない), (−たい)</p>
              </div>
            </div>
            <br/>
            <strong>Pola kalimat (Bun no Kihon)</strong>
            <p className='has-text-justified'>Pola kalimat atau "Bun no Kihon" dalam bahasa Jepang merujuk pada cara kalimat dibentuk dengan menggunakan subjek, predikat, objek, partikel, dan konjungsi. Pola-pola kalimat ini membantu Anda memahami tata bahasa dasar dalam bahasa Jepang dan memungkinkan Anda untuk membangun kalimat yang lebih kompleks.</p> 
            <br/>
            <p>Beberapa pola kalimat yang umum digunakan adalah:</p>

            <div className='card'>
              <div className='card-content'>
            <strong>Kalimat sederhana: (Subjek) + (Predikat)</strong>
            <p>Contoh: 私は学生です (Watashi wa gakusei desu) = Saya adalah seorang mahasiswa.</p>
            <br/>
            <strong>Kalimat tanya: (Subjek) + (Predikat) + か？</strong>
            <p>Contoh: あなたは何をしていますか？ (Anata wa nani o shite imasu ka?) = Apa yang sedang Anda lakukan?</p>
            <br/>
            <strong>Kalimat negatif: (Subjek) + (Predikat) + ない</strong>
            <p>Contoh: 彼は勉強していない (Kare wa benkyou shite inai) = Dia tidak sedang belajar.</p>
            <br/>
            <strong>Kalimat kompleks: (Subjek) + (Konjungsi) + (Subjek) + (Predikat)</strong>
            <p>Contoh: 彼女は病気だけど、明日来ます (Kanojo wa byouki dakedo, ashita kimasu) = Dia sakit tetapi akan datang besok.</p>
              </div>
            </div>
            <br/>
            <p className='has-text-justified'>Dengan mempelajari pola kata dan pola kalimat ini, Anda dapat membangun dasar yang kuat untuk belajar bahasa Jepang dengan lebih efektif dan memahami cara-cara membentuk kata dan kalimat dalam bahasa Jepang dengan lebih baik.</p>
        </div>
    </div>
    </div>
  )
}

export default epilog