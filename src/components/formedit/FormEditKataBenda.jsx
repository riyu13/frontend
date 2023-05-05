import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditKataBenda = () => {
    const [kanji, setKanji] = useState("");
    const [romaji, setRomaji] = useState("");
    const [arti, setArti] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    // const MySwal = withReactContent(Swal);

    useEffect(()=>{
        const getKataBendaById = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/KataBenda/${id}`);
                setKanji(response.data.kanji)
                setRomaji(response.data.romaji);
                setArti(response.data.arti);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg)
                }
            }
        }
        getKataBendaById();
    },[id]);

    const updateKataBenda = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/KataBenda/${id}`,{
                kanji: kanji,
                romaji:  romaji,
                arti: arti
            });
            navigate("/KataBenda")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }   
    
  return (
    <div>
        <h1 className='title'>Kata Benda</h1>
        <h2 className='subtitle'>Edit Kata Benda</h2>
        <div className="card is-shadow" style={{backgroundColor: '#ffffe0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={updateKataBenda}>
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

export default FormEditKataBenda