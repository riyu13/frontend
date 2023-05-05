/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormAddUser = () => {
    const [provinces, setProvinces]= useState([]);
    const [provinceId, setProvinceid]=useState('');
    const [regencies, setRegencies]= useState([]);
    const [regencyId, setRegenciesid]= useState('');
    const [districts, setDistricts]= useState([]);
    const [districtId, setDistrictsid]= useState('');
    const [villages, setVillages]= useState([]);
    //data yang diinputkan masuk kedalam sini
    const [nama, setNama] = useState("");
    const [tempatlahir, setTempatLahir] = useState("");
    const [tgllahir, setTglLahir] = useState("");
    const [jkel, setJkel] = useState("");
    const [provinsi, setProvinsi] = useState("");
    const [kota, setKota] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [kelurahan, setKelurahan] = useState("");
    const [alamat, setAlamat] = useState("");
    const [notelp, setNotelp] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    //metode insert user
    const saveUser = async(e) => {
        e.preventDefault();
        try {
            MySwal.fire({
                title: 'Apakah Data Sudah Benar?',
                showCancelButton: true,
                confirmButtonText: 'Simpan',
              }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:5000/users',{
                    nama:  nama,
                    tempatlahir: tempatlahir,
                    tgllahir: tgllahir,
                    jkel: jkel,
                    provinsi: provinsi,
                    kota: kota,
                    kecamatan: kecamatan,
                    kelurahan: kelurahan,
                    alamat: alamat,
                    notelp: notelp,
                    role: role,
                    email: email,
                    password: password,
                    confPassword: confpassword
                });
                  Swal.fire('Tersimpan!', '', 'Data Berhasil disimpan')
                  navigate("/users");
                } 
              })
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }


    // dapatkan data untuk provinsi
    useEffect( ()=>{
        const getProvinces= async()=>{
            const resprovinces= await fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json");
            const respro= await resprovinces.json();
            setProvinces(await respro);
        }
        getProvinces();
    },[]);

    const handleprovinces=(event)=>{
        const getprovinceid= event.target.value;
        setProvinceid(getprovinceid);
    }

    useEffect( ()=>{
        const getRegencies= async()=>{
            const resregencies= await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
            const resreg= await resregencies.json();
            setRegencies(await resreg);
        }
       getRegencies();
        },[provinceId]);
    
    const handleregencies=(event)=>{
        const getregenciesid= event.target.value;
        setRegenciesid(getregenciesid);
    }
    
    useEffect( ()=>{
        const getDistricts= async()=>{
            const resdistricts= await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`);
            const resdis= await resdistricts.json();
            setDistricts(await resdis);
        }
       getDistricts();
        },[regencyId]);
    
    const handledistricts=(event)=>{
        const getdistrictsid= event.target.value;
        setDistrictsid(getdistrictsid);
    }

    useEffect( ()=>{
        const getVillages= async()=>{
            const resvillages= await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`);
            const resvil= await resvillages.json();
            setVillages(await resvil);
        }
       getVillages();
        },[districtId]);

    // const handlevillages=(event)=>{
    //     const getvillagesid= event.target.value;
    //     setVillagesid(getvillagesid);
    // }

   

  return (
    <div>
        <h1 className='title'>Pengguna</h1>
        <h2 className='subtitle'>Tambahkan Pengguna Baru</h2>
        <div className="card is-shadow" style={{backgroundColor: '#FFFFE0'}}>
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveUser}>
                    <p className='has-text-centered'>{msg}</p>
                <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Nama' required/>
                        </div>
                    </div>
                    <div className="columns">
                    <div className="column">
                    <label className="label">Tempat Lahir</label>
                        <div className="control">
                            <input type="text" className="input" value={tempatlahir} onChange={(e) => setTempatLahir(e.target.value)} placeholder='Kota Lahir' required/>
                        </div></div>
                        <div className="column">
                        <label className="label">Tanggal Lahir</label>
                        <div className="control">
                            <input type="date" className="input" value={tgllahir} onChange={(e) => setTglLahir(e.target.value)} required/>
                        </div></div>
                    </div>
                    <label className="label">Jenis Kelamin</label>
                    <div className="select">
                    <select value={jkel} onChange={(e) => setJkel(e.target.value)} required>
                        <option value=''>Pilih</option>
                        <option value='Pria'>Pria</option>
                        <option value='Wanita'>Wanita</option>0
                    </select>
                    </div>
                    <div className="columns">
                    <div className="column is-is-one-quarter">
                    <label className="label">Provinsi</label>
                        <div className="select">
                            <select value={provinsi} onChange={(e)=>{handleprovinces(e);setProvinsi(e.target.value)}}>
                            <option value="" required>--Pilih Provinsi--</option>
                            {provinces.map( (getpro, index)=>(
                            <option key={index} value={getpro.id}>{getpro.name}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className="column is-one-quarter">
                    <label className="label">Kota</label>
                        <div className="select">
                            <select value={kota} onChange={(e)=>{handleregencies(e);setKota(e.target.value);}}>
                            <option value="" required>--Pilih Kota/Kabupaten--</option>
                            {regencies.map( (getreg, index)=>(
                            <option key={index} value={getreg.id} >{getreg.name} </option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className="column is-one-quarter">
                    <label className="label">Kecamatan</label>
                        <div className="select">
                            <select value={kecamatan} onChange={(e)=>{handledistricts(e);setKecamatan(e.target.value);}}>
                            <option value="" required>--Pilih Kecamatan-</option>
                            {districts.map( (getdis, index)=>(
                            <option key={index} value={getdis.id} >{getdis.name}</option>
                            ))}
                            </select>
                        </div>
                        </div>
                        <div className="column is-one-quarter">
                        <label className="label">Kelurahan</label>
                        <div className="select">
                            <select value={kelurahan} onChange={(e) => setKelurahan(e.target.value)}>
                            <option value="" required>--Pilih Kelurahan--</option>
                            {villages.map( (getvil, index)=>(
                            <option key={index} value={getvil.id}>{getvil.name} </option>
                            ))}
                            </select>
                        </div>
                        </div>
                        </div>
                        <label className="label">Alamat</label>
                        <div className="control">
                            <textarea cols="30" rows="10" className="textarea" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder='Alamat' required></textarea>
                        </div>
                        <div className="columns">
                        <div className="column">
                        <label className="label">No. Telpon</label>
                        <div className="control">
                            <input type="number" className="input" placeholder='Nomor Telpon' value={notelp} onChange={(e) => setNotelp(e.target.value)} required/>
                        </div></div>
                        <div className="column">
                        <label className="label">Status</label>
                    <div className="select">
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="" required>Pilih</option>
                        <option value='admin'>Admin</option>
                        <option value='user'>Sensei</option>
                    </select></div></div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="columns">
                    <div className="column">
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' required/>
                        </div>
                        </div>
                    </div>
                    <div className="column">
                    <div className="field">
                        <label className="label">Konfiramsi Password</label>
                        <div className="control">
                            <input type="password" className="input" value={confpassword} onChange={(e) => setConfPassword(e.target.value)} placeholder='*******' required/>
                        </div>
                    </div></div></div>
                    <div className="field">
                        <div className="control">
                        <button type='submit' className="button" style={{backgroundColor: '#8B4513', color: 'white'}}>Simpan</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddUser