import React, { useEffect } from 'react';
import FormEditKanjin5 from '../../components/formedit/FormEditKanjin5';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';

const EditKanjin5 = () => {
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
        <FormEditKanjin5/>
    </Layout>
  )
}

export default EditKanjin5