import React, { useEffect } from 'react';
import Layout from '../../Layout';
import Nakerebanaranai from '../../../components/materin5/bentuk2/Nakerebanaranai'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../features/authSlice';

const Naipk= () => {
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
      <Nakerebanaranai/>
    </Layout>
  )
}

export default Naipk