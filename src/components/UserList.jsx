import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaTrash, FaEdit } from 'react-icons/fa';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const MySwal = withReactContent(Swal);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async() => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    const deleteUsers = async(Id) =>{
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
        axios.delete(`http://localhost:5000/users/${Id}`);
        MySwal.fire(
            'Dihapus!',
            'Data Berhasil dihapus!'
          )
        }
        getUsers();
      })
    }

  return (
    <div>
        <h1 className='title' >Admininstrasi</h1>
        <h2 className='subtitle'>Daftar Administrasi & Staff</h2>
        <Link to="/users/add" className='button is-primary mb-2'>Tambah</Link>
        <table className='table is-striped is-hoverable is-fullwidth is-bordered' style={{backgroundColor: '#FFFFE0'}}>
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
                    <th>Status</th>
                    <th>Opsi</th>
                </tr>
            </thead>
            <tbody>
                {users.map((users, index)=>(
                <tr key={users.uuid}>
                    <td>{index + 1}</td>
                    <td>{users.nama}</td>
                    {/* <td>{users.kota}</td> */}
                    <td>{users.alamat}</td>
                    <td>{users.tempatlahir}</td>
                    <td>{users.tgllahir}</td>
                    <td>{users.notelp}</td>
                    <td>{users.jkel}</td>
                    <td>{users.email}</td>
                    <td>{users.role}</td>
                    <td>
                    <Link to={`/users/edit/${users.uuid}`} className="button is-small is-info"><FaEdit/></Link>
                        <button onClick={()=>deleteUsers(users.uuid)} to={`/users/edit/${users.uuid}`} className="button is-small is-danger"><FaTrash/></button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList