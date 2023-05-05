import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const PembayaranList = () => {
    const [pembayaran, setPembayaran] = useState([]);
    const MySwal = withReactContent(Swal);

    useEffect(()=>{
        getPembayaran();
    },[]);

    const getPembayaran = async() => {
        const response = await axios.get('http://localhost:5000/pembayaran');
        setPembayaran(response.data)
    }

    const deletePembayaran = async(PembayaranId) => {
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
            axios.delete(`http://localhost:5000/pembayaran/${PembayaranId}`);
              MySwal.fire(
                'Dihapus!',
                'Data Berhasil dihapus!'
              )
            }
            getPembayaran();
          })
    }

  return (
    <div>
        <div>
        {/* <h1 className='title'>Pembayaran</h1>
        <h2 className='subtitle'>Riwayat Transaksi Pembayaran</h2> */}
        {/* <Link to="/pembayaran/add" className='button is-primary mb-2'>Pembayaran</Link> */}
        <table className='table is-striped is-fullwidth is-hoverable is-bordered' style={{backgroundColor: '#FFFFE0'}}>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Kode Transaksi</th>
                    <th>Keterangan</th>
                    <th>Biaya</th>
                    <th>Petugas</th>
                    <th>Nama Peserta</th>
                    <th>Opsi</th>
                </tr>
            </thead>
            <tbody>
                {pembayaran.map((pembayaran, index)=>(
                <tr key={pembayaran.uuid}>
                    <td>{index + 1}</td>
                    <td>{pembayaran.uuid}</td>
                    <td>{pembayaran.keterangan}</td>
                    <td>{pembayaran.biaya}</td>
                    <td>{pembayaran.user.nama}</td>
                    <td>{pembayaran.pesertamagang.nama}</td>
                    <td>
                        <Link to={`/pembayaran/edit/${pembayaran.uuid}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=>deletePembayaran(pembayaran.uuid)} to={`/pembayaran/edit/${pembayaran.uuid}`} className="button is-small is-danger">Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default PembayaranList