import React, { useEffect } from 'react';
import FormEditPesertaMagang from '../../components/formedit/FormEditPesertaMagang';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';


const EditPesertaMagang = () => {
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
        <FormEditPesertaMagang />
    </Layout>
  )
}

export default EditPesertaMagang