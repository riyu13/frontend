import React from 'react'
import { NavLink } from 'react-router-dom'

const Nakerebanaranai = () => {
  return (
    <div>
        <h1 className='title'>Kata Kerja Negatif</h1>
        <h2 className='subtitle'>Kata Kerja Bentuk Negatif (-A)</h2>
        <div className='card' style={{backgroundColor: '#ffffe0'}}>
        <div className='card-content'>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/nai"} style={{color: 'black'}}>1</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1"><NavLink to={"/naidekudasai"} style={{color: 'black'}}>2</NavLink></a></li>
                <li><a className="pagination-link" aria-label="Goto page 1" style={{backgroundColor: '#8B4513'}}><NavLink to={"/nakerebanaranai"} style={{color: 'white'}}>3</NavLink></a></li>
              </ul>
            </nav>
            <strong>5. Kata kerja + ~なければなりません </strong>
            <p>"Nakereba narimasen" (なければなりません) adalah frasa dalam bahasa Jepang yang berarti "harus" atau "wajib dilakukan". Frasa ini digunakan untuk menunjukkan bahwa ada tindakan atau kewajiban tertentu yang harus dilakukan, dan tidak melakukan tindakan tersebut akan menghasilkan konsekuensi yang tidak diinginkan.</p>
            <br/>
            <p>Pola dan contoh kalimat</p>
            <div className='card'>
                <div className='card-content'>
                    <strong>Pola kalimat</strong>
                    <p>- Kata kerja + ~なければなりません</p>
                    <br/>
                    <strong>Contoh kalimat</strong>
                    <p>- お金があると、仕事をしなければなりません。</p>
                    <p>- Okane ga aruto, shigoto o shinakerebanarimasen.</p>
                    <p>- Kalau ingin punya uang, harus bekerja.</p>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Nakerebanaranai