import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormAddKataBenda = () => {
    const [kanji, setKanji] = useState("");
    const [romaji, setRomaji] = useState("");
    const [arti, setArti] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const saveKataBenda = async(e) => {
        e.preventDefault();
        try {
            MySwal.fire({
                title: 'Apakah Data Sudah Benar?',
                showCancelButton: true,
                confirmButtonText: 'Simpan',
              }).then((result) => {
                if (result.isConfirmed) {
                axios.post('http://localhost:5000/katabenda',{
                kanji: kanji,
                romaji: romaji,
                arti: arti
            });
            Swal.fire('Tersimpan!', '', 'Data Berhasil disimpan')
            navigate("/katabenda");
            }
        })
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Kata Benda</h1>
        <h2 className='subtitle'>Tambahkan Kata Benda Baru</h2>
        <div className="card is-shadow" style={{backgroundColor: '#FFFFE0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveKataBenda}>
                <p className='has-text-centered'>{msg}</p>
                <div className="columns">
                <div className="column">
                <div className="field">
                        <label className="label">Kanji</label>
                        <div className="control">
                            <input type="text" value={kanji} onChange={(e)=> setKanji(e.target.value)} className="input" placeholder='Kanji' required/>
                        </div>
                    </div></div>
                    <div className="column">
                    <label className="label">Romaji</label>
                    <div className="control">
                        <input type="text" value={romaji} onChange={(e)=> setRomaji(e.target.value)} className="input" placeholder='Romaji' required/>
                    </div></div>
                    <div className="column">
                    <label className="label">Arti</label>
                    <div className="control">
                        <input type="text" value={arti} onChange={(e)=> setArti(e.target.value)} className="input" placeholder='Arti' required/>
                    </div>
                    </div>
                    </div>
                    <div className="field">
                        <div className="control">
                        <button className="button" style={{backgroundColor: '#8B4513', color: 'white'}} type='submit'>Simpan</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddKataBenda