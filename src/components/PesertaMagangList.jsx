import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaTrash, FaEdit } from 'react-icons/fa';

const PesertaMagangList = () => {
    const [pesertamagang, setPesertaMagang] = useState([]);
    const MySwal = withReactContent(Swal);

    useEffect(()=>{
        getPesertaMagang();
    },[]);

    const getPesertaMagang = async() => {
        const response = await axios.get('http://localhost:5000/pesertamagang');
        setPesertaMagang(response.data)
    }

    const deletePesertaMagang = async(pesertamagangId) =>{
        MySwal.fire({
            title: 'Hapus data ini?',
            text: "Kamu akan kehilangan data secara permanen!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!'
          }).then((result) => {
        if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/pesertamagang/${pesertamagangId}`);
        MySwal.fire(
            'Dihapus!',
            'Data Berhasil dihapus!'
          )
        }
        getPesertaMagang();
      })
    }

  return (
    <div>
        <h1 className='title'>Peserta Magang</h1>
        <h2 className='subtitle'>Daftar Kenshusei</h2>
        <Link to="/kenshusei/add" className='button is-primary mb-2'>Tambah</Link>
        <table className='table is-striped is-fullwidth is-bordered is-hoverable' style={{backgroundColor: '#FFFFE0'}}>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    {/* <th>Kota/Kabupaten</th> */}
                    <th>Alamat</th>
                    <th>Tempat Lahir</th>
                    <th>Tanggal Lahir</th>
                    <th>No. Telpon</th>
                    <th>Jenis Kelamin</th>
                    <th>Email</th>
                    <th>Jalur</th>
                    <th>Opsi</th>
                </tr>
            </thead>
            <tbody>
            {pesertamagang.map((pesertamagang, index)=>(
                <tr key={pesertamagang.uuid}>
                    <td>{index + 1}</td>
                    <td>{pesertamagang.nama}</td>
                    {/* <td>{pesertamagang.kota}</td> */}
                    <td>{pesertamagang.alamat}</td>
                    <td>{pesertamagang.tempatlahir}</td>
                    <td>{pesertamagang.tgllahir}</td>
                    <td>{pesertamagang.notelp}</td>
                    <td>{pesertamagang.jkel}</td>
                    <td>{pesertamagang.email}</td>
                    <td>{pesertamagang.role}</td>
                    <td>
                    <Link to={`/kenshusei/edit/${pesertamagang.uuid}`} className="button is-small is-info"><FaEdit/></Link>
                        <button onClick={()=>deletePesertaMagang(pesertamagang.uuid)} to={`/pesertamagang/edit/${pesertamagang.uuid}`} className="button is-small is-danger"><FaTrash/></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PesertaMagangList