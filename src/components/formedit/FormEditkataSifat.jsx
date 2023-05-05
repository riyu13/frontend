import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditkataSifat = () => {
    const [kanji, setKanji] = useState("");
    const [romaji, setRomaji] = useState("");
    const [arti, setArti] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getKataSifatById = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/KataSifat/${id}`);
                setKanji(response.data.kanji)
                setRomaji(response.data.romaji);
                setArti(response.data.arti);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg)
                }
            }
        }
        getKataSifatById();
    },[id]);

    const updateKataSifat = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/KataSifat/${id}`,{
                kanji: kanji,
                romaji:  romaji,
                arti: arti
            });
            navigate("/KataSifat")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }   

  return (
    <div>
        <h1 className='title'>Kata Sifat</h1>
        <h2 className='subtitle'>Edit Kata Sifat</h2>
        <div className="card is-shadow" style={{backgroundColor: '#ffffe0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={updateKataSifat}>
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
                        <button className="button" style={{backgroundColor: '#8B4513', color: 'white'}} type='submit'>Update</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditkataSifat