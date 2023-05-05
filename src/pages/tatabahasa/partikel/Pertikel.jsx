import React, { useEffect } from 'react';
import Layout from '../../Layout';
import Partikel1 from '../../../components/materin5/partikel/Partikel';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const Partikel = () => {
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
      <Partikel1/>
    </Layout>
  )
}

export default Partikel