import React, { useEffect } from 'react';
import Layout from '../../attribut/Layout';
import Nakerebanaranai from '../../attribut/bentuk2/Nakerebanaranai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../../features/authSlice';

const Nakerebanaranai1 = () => {
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
      <Nakerebanaranai/>
    </Layout>
  )
}

export default Nakerebanaranai1