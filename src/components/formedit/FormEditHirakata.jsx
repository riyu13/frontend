import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

const FormEditHirakata = () => {
    const [hiragana, setHiragana] = useState("");
    const [katakana, setKatakana] = useState("");
    const [romaji, setRomaji] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");
    // const MySwal = withReactContent(Swal);
    const {id} = useParams();

    useEffect(()=>{
        const getHirakataById = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/Hirakata/${id}`);
                setHiragana(response.data.hiragana)
                setKatakana(response.data.katakana);
                setRomaji(response.data.romaji)
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg)
                }
            }
        }
        getHirakataById();
    },[id]);

    const updateHirakata = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/hirakata/${id}`,{
                hiragana: hiragana,
                katakana: katakana,
                romaji: romaji
            });
            navigate("/hirakata")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Hirakata</h1>
        <h2 className='subtitle'>Edit Data Hiragana & Katakana</h2>
        <div className="card is-shadow" style={{backgroundColor: '#ffffe0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={updateHirakata}>
                    <p className='has-text-centered'>{msg}</p>
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

export default FormEditHirakata