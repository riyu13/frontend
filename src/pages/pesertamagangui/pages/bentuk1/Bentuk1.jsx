import React, { useEffect } from 'react';
import Layout from '../../attribut/Layout';
import Bentuk1 from '../../attribut/bentuk1/Bentuk1';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../../features/authSlice';

const Bentuk1k = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} =useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe2());
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

export default Bentuk1k