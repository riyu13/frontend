import React, { useEffect } from 'react';
import Layout from '../../Layout';
import Partikel2 from '../../../components/materin5/partikel/Partikel2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const Partikel1 = () => {
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
      <Partikel2/>
    </Layout>
  )
}

export default Partikel1