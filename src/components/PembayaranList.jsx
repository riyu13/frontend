import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaEdit, FaPrint, FaTrash } from 'react-icons/fa';
import jsPDF from 'jspdf';

const PembayaranList = () => {
  const [pembayaran, setPembayaran] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State untuk nilai pencarian
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    getPembayaran();
  }, []);

  const getPembayaran = async () => {
    const response = await axios.get('http://localhost:5000/pembayaran');
    setPembayaran(response.data);
  };

  const deletePembayaran = async (PembayaranId) => {
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
        axios.delete(`http://localhost:5000/pembayaran/${PembayaranId}`);
        MySwal.fire('Dihapus!', 'Data Berhasil dihapus!');
      }
      getPembayaran();
    });
  };

  const handlePrint = (pembayaran) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Bukti Pembayaran', 105, 10, null, null, 'center');

    doc.addImage('../assets/logo.jpeg', 'JPEG', 15, 40, 180, 180);

    doc.setFontSize(12);
    doc.text(`No. Invoice: ${pembayaran.invoice}`, 10, 30);
    doc.text(`Nama: ${pembayaran.pesertamagang.nama}`, 10, 40);
    doc.text(`Keterangan: ${pembayaran.keterangan}`, 10, 50);
    doc.text(`Biaya: ${pembayaran.biaya}`, 10, 60);

    doc.setFontSize(10);
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString('id-ID')
      .replaceAll('/', '-');
    doc.text(`Surakarta, ${formattedDate}`, 200, 70, null, null, 'right');
    doc.text('(______________________)', 200, 100, null, null, 'right');
    doc.text('Terima kasih atas pembayaran anda', 105, 110, null, null, 'center');
    doc.save(`${pembayaran.uuid}.pdf`);
  };

  // Fungsi untuk mengatur nilai pencarian
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fungsi untuk melakukan filter berdasarkan pencarian
  const filteredPembayaran = pembayaran.filter((pembayaran) =>
    pembayaran.pesertamagang.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        {/* Input pencarian */}
        <div className="field has-addons">
              <div className="control is-one-fifth ">
        <input
          type="text"
          className='input'
          placeholder="Cari nama peserta..."
          value={searchTerm}
          onChange={handleSearch}
        /></div></div>
        <table className="table is-striped is-fullwidth is-hoverable is-bordered" style={{ backgroundColor: '#FFFFE0' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>No.</th>
              <th style={{ textAlign: 'center' }}>No. Invoice</th>
              <th style={{ textAlign: 'center' }}>Nama Peserta</th>
              <th style={{ textAlign: 'center' }}>Keterangan</th>
              <th style={{ textAlign: 'center' }}>Biaya</th>
              <th style={{ textAlign: 'center' }}>Petugas</th>
              <th style={{ textAlign: 'center' }}>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {filteredPembayaran.map((pembayaran, index) => (
              <tr key={pembayaran.uuid}>
                <td>{index + 1}</td>
                <td>{pembayaran.invoice}</td>
                <td>{pembayaran.pesertamagang.nama}</td>
                <td>{pembayaran.keterangan}</td>
                <td>{pembayaran.biaya}</td>
                <td>{pembayaran.user.nama}</td>
                <td>
                  <button onClick={() => handlePrint(pembayaran)} className="button is-small is-warning"><FaPrint /></button>
                  <Link to={`/pembayaran/edit/${pembayaran.uuid}`} className="button is-small is-info"><FaEdit /></Link>
                  <button onClick={() => deletePembayaran(pembayaran.uuid)} to={`/pembayaran/edit/${pembayaran.uuid}`} className="button is-small is-danger"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PembayaranList;
