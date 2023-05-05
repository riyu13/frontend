import React, { useEffect } from 'react';
import FormAddPesertaMagang from '../../components/formadd/FormAddPesertaMagang';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';

const AddPesertaMagang = () => {
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
        <FormAddPesertaMagang/>
    </Layout>
  )
}

export default AddPesertaMagang