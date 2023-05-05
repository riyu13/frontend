import React, { useEffect } from 'react'
import FormEditKataBenda from '../../components/formedit/FormEditKataBenda'
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';

const EditKataBenda = () => {
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
        <FormEditKataBenda/>
    </Layout>
  )
}

export default EditKataBenda