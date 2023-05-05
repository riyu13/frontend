import React, { useEffect } from 'react';
import Layout from '../../attribut/Layout';
import Tai from '../../attribut/bentuk1/Tai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../../features/authSlice';

const Taik = () => {
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
      <Tai/>
    </Layout>
  )
}

export default Taik