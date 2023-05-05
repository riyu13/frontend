import React, { useEffect } from 'react';
import Layout from '../../Layout';
import Bentuk1 from '../../../components/materin5/bentuk1/Bentuk1'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const Bentuk1p= () => {
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
      <Bentuk1/>
    </Layout>
  )
}

export default Bentuk1p