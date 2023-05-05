import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditPembayaran = () => {
    const [idnama, setId] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [biaya, setBiaya] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getPembayaranById = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/pembayaran/${id}`);
                setId(response.data.id)
                setKeterangan(response.data.keterangan);
                setBiaya(response.data.biaya)
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg)
                }
            }
        }
        getPembayaranById();
    },[id]);

    const updatePembayaran = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/pembayaran/${id}`,{
                pesertamagangId: idnama,
                keterangan: keterangan,
                biaya: biaya
            });
            navigate("/pembayaran")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Pembayaran</h1>
        <h2 className='subtitle'>Edit Data Pembayaran</h2>
        <div className="card is-shadow" style={{backgroundColor: '#ffffe0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={updatePembayaran}>
                <p className="has-text-centered">{msg}</p>
                <div className="field">
                <div className="columns">
                    <div className="column">
                        <label className="label">Kode Transaksi</label>
                        <div className="control">
                             <input type="text" value={id} onChange={(e)=> setId(e.target.value.id)} disabled className='input'/> 
                        </div>
                        </div>
                    <div className="column">
                    <label className="label">Keterangan</label>
                        <div className="control">
                            <input type="text" value={keterangan} onChange={(e)=> setKeterangan(e.target.value)} className="input" placeholder='Keterangan' required/>
                        </div></div>
                        <div className="column">
                        <label className="label">Biaya</label>
                        <div className="control">
                            <input type="number" value={biaya} onChange={(e)=> setBiaya(e.target.value)} className="input" placeholder='Biaya' required/>
                        </div></div>
                    </div>
                    <div className="field">
                        <div className="control">
                        <button className="button" style={{backgroundColor: '#8B4513', color: 'white'}} type='submit'>Update</button>
                    </div>
                    </div></div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditPembayaran