import React, { useEffect } from 'react';
import Layout from '../../attribut/Layout';
import Yasui from '../../attribut/bentuk1/Yasui';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../../features/authSlice';

const Yasuik = () => {
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
      <Yasui/>
    </Layout>
  )
}

export default Yasuik