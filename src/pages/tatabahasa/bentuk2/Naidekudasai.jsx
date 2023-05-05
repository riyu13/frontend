import React, { useEffect } from 'react';
import Layout from '../../Layout';
import Naidekudasai from '../../../components/materin5/bentuk2/Naidekudasai'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const Naips= () => {
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
      <Naidekudasai/>
    </Layout>
  )
}

export default Naips