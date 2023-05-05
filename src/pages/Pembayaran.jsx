import React, { useEffect } from 'react';
import Layout from './Layout';
import PembayaranList from '../components/PembayaranList';
import FormAddPembayaran from '../components/formadd/FormAddPembayaran';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Pembayaran = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} =useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
    <h1 className='title'>Pembayaran</h1>
        <h2 className='subtitle'>Riwayat Transaksi Pembayaran</h2>
    <div className='columns'>
    <div className='column is-one-fifth'>
        <FormAddPembayaran/></div>
    <div className='column'>
        <PembayaranList/></div>
      </div>
    </Layout>
  )
}

export default Pembayaran