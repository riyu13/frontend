import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditKanjin5 = () => {
    const [kanji, setKanji] = useState("");
    const [onyomi, setOnyomi] = useState("");
    const [kunyomi, setKunyomi] = useState("");
    const [arti, setArti] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getKanjin5ById = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/kanjin5/${id}`);
                setKanji(response.data.kanji)
                setOnyomi(response.data.onyomi);
                setKunyomi(response.data.kunyomi);
                setArti(response.data.arti);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg)
                }
            }
        }
        getKanjin5ById();
    },[id]);

    const updateKanjin5 = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/kanjin5/${id}`,{
                kanji: kanji,
                onyomi: onyomi,
                kunyomi: kunyomi,
                arti: arti
            });
            navigate("/kanjin5")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Kanji Dasar</h1>
        <h2 className='subtitle'>Edit Kanji N5</h2>
        <div className="card is-shadow" style={{backgroundColor: '#ffffe0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={updateKanjin5}>
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
                    <label className="label">On-Yomi</label>
                    <div className="control">
                        <input type="text" value={onyomi} onChange={(e)=> setOnyomi(e.target.value)} className="input" placeholder='On-Yomi' required/>
                    </div></div>
                    </div>
                    <div className="columns">
                    <div className="column">
                    <label className="label">Kun-Yomi</label>
                    <div className="control">
                        <input type="text" value={kunyomi} onChange={(e)=> setKunyomi(e.target.value)} className="input" placeholder='Kun-Yomi' required/>
                    </div>
                    </div>
                    <div className="column">
                    <label className="label">Arti</label>
                    <div className="control">
                        <input type="text" value={arti} onChange={(e)=> setArti(e.target.value)} className="input" placeholder='Arti' required/>
                    </div>
                    </div></div>
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

export default FormEditKanjin5