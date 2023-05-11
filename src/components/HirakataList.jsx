import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaTrash, FaEdit } from 'react-icons/fa';

const HirakataList = () => {
    const [hirakata, setHirakata] = useState([]);
    const MySwal = withReactContent(Swal);

    useEffect(()=>{
        getHirakata();
    },[]);

    const getHirakata = async() => {
        const response = await axios.get('http://localhost:5000/hirakata');
        setHirakata(response.data)
    }

    const deleteHirakata = async(HirakataId) => {
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
        axios.delete(`http://localhost:5000/hirakata/${HirakataId}`);
        MySwal.fire(
            'Dihapus!',
            'Data Berhasil dihapus!'
          )
        }
        getHirakata();
        })
    }

  return (
    <div>
        <h1 className='title'>Hirakata</h1>
        <h2 className='subtitle'>Daftar Hiragana & Katakana</h2>
        <Link to="/hirakata/add" className='button is-primary mb-2'>Tambah</Link>
        <table className='table is-striped is-bordered is-hoverable is-fullwidth' style={{backgroundColor: '#FFFFE0'}}>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Hiragana</th>
                    <th>Katakana</th>
                    <th>Romaji</th>
                    <th>Opsi</th>
                </tr>
            </thead>
            <tbody>
                {hirakata.map((hirakata, index)=>(
                <tr key={hirakata.uuid}>
                    <td>{index + 1}</td>
                    <td>{hirakata.hiragana}</td>
                    <td>{hirakata.katakana}</td>
                    <td>{hirakata.romaji}</td>
                    <td>
                    <Link to={`/hirakata/edit/${hirakata.uuid}`} className="button is-small is-info"><FaEdit/></Link>
                        <button onClick={()=>deleteHirakata(hirakata.uuid)} to={`/hirakata/edit/${hirakata.uuid}`} className="button is-small is-danger"><FaTrash/></button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default HirakataList