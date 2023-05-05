import React from 'react'
import { NavLink } from 'react-router-dom'

const Nai = () => {
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
            <strong>1. Bentuk negatif ～ない atau ~Nai</strong>
            <p>Adalah perubahan bentuk kata kerja berargumen negatif dalam artian tidak melakukan kegiatan tersebut.</p>
            <br/>
            <p>Pola perubahan kata kerja</p>
            <div className='card'>
              <div className='card-content'>
                <strong>1. Kata kerja kelompok 1</strong>
                <p>Untuk kata kerja kelompok 1, cara mengubahnya dengan mengubah huruf -u pada kata kerja menjadi -anai.</p>
                <p>Contoh:</p>
                <p>- 行く (iku : pergi) : 行かない (ikanai :tidak pergi)</p>
                <p>- 買う (kau : membeli) : 買わない (kawanai : tidak membeli)</p>
                <br/>
                <strong>2. Kata kerja kelompok 2</strong>
                <p>Untuk kata kerja golongan 2, cara mengubahnya dengan mengubah akhiran -ru menjadi -nai.</p>
                <p>Contoh:</p>
                <p>- 見る (miru : melihat ) : 見ない (minai : tidak melihat)</p>
                <p>- 着る (kiru : memakai) : 着ない (kinai : tidak memakai)</p>
                <br/>
                <strong>3. Kata kerja kelompok 3</strong>
                <p>Untuk kata kerja golongan 3 cukup mudah karena hanya terdiri dari 2 kata</p>
                <p>Contoh:</p>
                <p>- 来る (kuru : datang) : 来ない (konai : tidak datang)</p>
                <p>- する (suru : melakukan) : しない (shinai : tidak melakukan)</p>
              </div>
            </div>
            <br/>
            <strong>2. Perubahan kata kerja ~ないで</strong>
            <p>Kata kerja "naide" (ないで) dalam bahasa Jepang sebenarnya bukan kata kerja, melainkan bentuk negatif dari bentuk perintah tidak langsung yang digunakan untuk meminta seseorang untuk tidak melakukan sesuatu. Bentuk perintah tidak langsung ini biasanya terbentuk dari bentuk dasar kata kerja yang diakhiri dengan huruf "e" (え) dengan menambahkan partikel "nasai" (なさい) di belakangnya.</p>
            <br/>
            <p>Pola kalimat dan contoh</p>
            <div className='card'>
              <div className='card-content'>
                <strong>Pola kalimat</strong>
                <p>- Kata kerja + ~ないで</p>
                <br/>
                <strong>Contoh kalimat</strong>
                <p>~ あそこに行かないで危ないですから。</p>
                <p>~ Asoko ni ikanaide abunai desu kara.</p>
                <p>~ Jangan pergi kesana karena bahaya.</p>
              </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Nai