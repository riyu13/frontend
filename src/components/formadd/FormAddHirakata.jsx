import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormAddHirakata = () => {
    const [hiragana, setHiragana] = useState("");
    const [katakana, setKatakana] = useState("");
    const [romaji, setRomaji] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");
    const MySwal = withReactContent(Swal);

    const saveHirakata = async(e) => {
        e.preventDefault();
        try {
            MySwal.fire({
                title: 'Apakah Data Sudah Benar?',
                showCancelButton: true,
                confirmButtonText: 'Simpan',
              }).then((result) => {
                if (result.isConfirmed) {
                axios.post('http://localhost:5000/hirakata',{
                hiragana: hiragana,
                katakana: katakana,
                romaji: romaji
            });
            Swal.fire('Tersimpan!', '', 'Data Berhasil disimpan')
            navigate("/hirakata");
            } 
            });
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div>
        <alert className="alert">{msg}</alert>
        <h1 className='title'>Hirakata</h1>
        <h2 className='subtitle'>Tambahkan Hiragana & Katakana Baru</h2>
        <div className="card is-shadow" style={{backgroundColor: '#FFFFE0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveHirakata}>
                <div className="columns">
                <div className="column">
                <div className="field">
                        <label className="label">Hiragana</label>
                        <div className="control">
                            <input type="text" value={hiragana} onChange={(e)=> setHiragana(e.target.value)} className="input" placeholder='Hiragana' required/>
                        </div>
                    </div></div>
                    <div className="column">
                    <label className="label">Katakana</label>
                    <div className="control">
                        <input type="text" value={katakana} onChange={(e)=> setKatakana(e.target.value)} className="input" placeholder='Katakana' required/>
                    </div></div>
                    <div className="column">
                    <label className="label">Romaji</label>
                    <div className="control">
                        <input type="text" value={romaji} onChange={(e)=> setRomaji(e.target.value)} className="input" placeholder='Romaji' required/>
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

export default FormAddHirakata