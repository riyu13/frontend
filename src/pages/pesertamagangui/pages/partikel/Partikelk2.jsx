import React, { useEffect } from 'react';
import Layout from '../../attribut/Layout';
import Partikel2 from '../../attribut/Partikelk/Partikel2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../../features/authSlice';

const Partikelk2 = () => {
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
      <Partikel2/>
    </Layout>
  )
}

export default Partikelk2