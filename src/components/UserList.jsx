import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  const deleteUsers = async (Id) => {
    MySwal.fire({
      title: 'Hapus data ini?',
      text: 'Kamu akan kehilangan data secara permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${Id}`);
        MySwal.fire('Dihapus!', 'Data Berhasil dihapus!');
      }
      getUsers();
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.alamat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.tempatlahir.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.tgllahir.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.notelp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.jkel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h1 className="title">Admininstrasi</h1>
      <h2 className="subtitle">Daftar Administrasi & Staff</h2>
      <div className='columns'>
      <div className='column'>
      <Link to="/users/add" className="button is-primary mb-2">
        Tambah
      </Link></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column'></div>
      <div className='column is-4 is-offset-8'>
        <div className="control is-one-fifth ">
          <input
            className="input"
            type="text"
            placeholder="Cari berdasarkan Nama, Alamat, Tempat Lahir, ..."
            value={searchTerm}
            onChange={handleSearch}
          /></div>
        </div>
      </div>
      <table className="table is-striped is-hoverable is-fullwidth is-bordered" style={{ backgroundColor: '#FFFFE0' }}>
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
          {filteredUsers.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.nama}</td>
              {/* <td>{user.kota}</td> */}
              <td>{user.alamat}</td>
              <td>{user.tempatlahir}</td>
              <td>{user.tgllahir}</td>
              <td>{user.notelp}</td>
              <td>{user.jkel}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/users/edit/${user.uuid}`} className="button is-small is-info">
                  <FaEdit />
                </Link>
                <button onClick={() => deleteUsers(user.uuid)} className="button is-small is-danger">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
