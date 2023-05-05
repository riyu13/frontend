import React from 'react'
import { NavLink } from 'react-router-dom'

const darou = () => {
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
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/darou"} style={{color: 'white'}}>3</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nonakade"} style={{color: 'black'}}>4</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nisuru"} style={{color: 'black'}}>5</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nakanaka"} style={{color: 'black'}}>6</NavLink></a></li>
              </ul>
            </nav>
        <strong>3. Penggunaan だろう/でしょう atau Darou/Deshou</strong>
        <p>"Daro(u)" (だろう) adalah bentuk kontraksi dari kata "desu" (です) dan "arou" (あろう) dalam bahasa Jepang. Bentuk ini mengekspresikan kemungkinan atau dugaan terhadap sesuatu.</p>
        <br/>
        <p>Pola dan contoh kalimat</p>
        <div className='card'>
            <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>1. Kata Kerja Kasual + だろう / でしょう</p>
                <p>2. Kata Sifat -i & na + だろう / でしょう</p>
                <p>3. Kata Benda + だろう / でしょう</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- 彼はもう来たかもしれないだろう。</p>
                <p>- Kare wa mou kita kamoshirenai darou.</p>
                <p>- Mungkin dia sudah datang.</p>
            </div>
        </div>
        <br/>
        <strong>4. Penggunaan 会います atau Aimasu</strong>
        <p>"Aimasu" (会います) adalah kata kerja dalam bahasa Jepang yang berarti "bertemu" dalam bahasa Indonesia. Partikel to (と) disini memiliki arti ‘menemui’, yakni digunakan untuk menunjukkan bahwa subjek dan lawan memiliki rencana untuk saling bertemu. Sedangkan partikel ni (に) disini dapat diartikan ‘menemui’, yakni Subjek berencana menemui lawan namun lawan subjek tidak berencana ingin menemui balik, bisa juga digunakan ketika kedua pihak betemu secara tidak sengaja.</p>
        <br/>
        <p>Pola dan contoh kalimat</p>
        <div className='card'>
            <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>1. Subjek + と + 会います</p>
                <p>2. Subjek + に + 会います</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>- 誰とも会いません</p>
                <p>- Dare to mo aimasen</p>
                <p>- Saya tidak bertemu dengan siapapun.</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default darou