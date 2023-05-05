import React, { useEffect } from 'react';
import Layout from '../../attribut/Layout';
import Partikel5 from '../../attribut/Partikelk/Partikel5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../../features/authSlice';

const Partikelk5 = () => {
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
      <Partikel5/>
    </Layout>
  )
}

export default Partikelk5