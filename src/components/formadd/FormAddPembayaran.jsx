import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FormAddPembayaran = () => {
  const [pesertamagangid, setPesertaMagangId] = useState("");
  const [id, setId] = useState("");
  const [nama, setNama] = useState([]);
  const [keterangan, setKeterangan] = useState("");
  const [invoice, setInvoice] = useState(""); // Tambahkan state untuk invoice
  const [biaya, setBiaya] = useState("");
  const [msg, setMsg] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const savePembayaran = async (e) => {
    e.preventDefault();
    try {
      MySwal.fire({
        title: 'Apakah Data Sudah Benar?',
        showCancelButton: true,
        confirmButtonText: 'Simpan',
      }).then((result) => {
        if (result.isConfirmed) {
          const invoice = generateInvoice();
          axios.post('http://localhost:5000/pembayaran', {
            pesertamagangId: id,
            keterangan: keterangan,
            biaya: biaya,
            invoice: invoice
          });
          Swal.fire('Tersimpan!', '', 'Data Berhasil disimpan')
          navigate("/pembayaran");
        }
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  useEffect(() => {
    getNama();
  }, []);

  const getNama = async () => {
    const resnama = await axios.get(`http://localhost:5000/pesertamagang/${pesertamagangid}`);
    setNama(resnama.data);
  }

  const handlenama = (event) => {
    const getpesertamagangid = event.target.value;
    setId(getpesertamagangid);
  }

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    return `${year}-${month}${day}`;
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}${minutes}-${seconds}`;
  };

  const generateInvoice = () => {
    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);
    return `YS${formattedDate}${formattedTime}`;
  };

  useEffect(() => {
    const generatedInvoice = generateInvoice();
    setInvoice(generatedInvoice);
  }, []);

  return (
    <div>
      <div className="card is-shadow" style={{ backgroundColor: '#FFFFE0' }}>
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePembayaran}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Invoice</label>
                <div className="control">
                  <input
                    type="text"
                    value={invoice}
                    onChange={(e) => setInvoice(e.target.value)}
                    className="input"
                    required
                    disabled
                  />
                </div>
              <div className="field">
                <label className="label">Nama</label>
                <div className="select">
                  <select required onChange={(e) => handlenama(e)}>
                    <option value="" required>Pilih Nama</option>
                    {nama.map((getnam, index) => (
                      <option key={index} value={getnam.id} onChange={(e) => setPesertaMagangId(e.target.value.id)}>{getnam.nama}</option>
                    ))}
                  </select>
                </div>
              </div>
              <label className="label">Keterangan</label>
              <div className="control">
                <textarea value={keterangan} onChange={(e) => setKeterangan(e.target.value)} className="input" placeholder='keterangan' required></textarea>
              </div>
              <label className="label">Biaya</label>
              <div className="select">
                <select value={biaya} onChange={(e) => setBiaya(e.target.value)} required>
                  <option value="">Pilih</option>
                  <option value='2800000'>Kelas 1 | Rp. 2.800.000</option>
                  <option value='3200000'>Kelas 2 | Rp. 3.200.000</option>
                  <option value='5200000'>Kelas 3 | Rp. 5.200.000</option>
                </select>
              </div>
              </div>
              <div className="field mt-2">
                <div className="control">
                  <button className="button" style={{ backgroundColor: '#8B4513', color: 'white' }} type='submit'>Simpan</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddPembayaran;
