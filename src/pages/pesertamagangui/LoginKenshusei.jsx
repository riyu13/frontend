import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginPesertaMagang, reset } from "../../features/authSlice";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const LoginKenshusei = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pesertamagang, isError, isSucces, isLoading, message} = useSelector((state) => state.auth);
  const MySwal = withReactContent(Swal);
  
  useEffect(()=>{
    if(pesertamagang || isSucces){
      const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', MySwal.stopTimer)
          toast.addEventListener('mouseleave', MySwal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Login berhasil!'
      })
      navigate("/beranda");
    }
    dispatch(reset());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pesertamagang, isSucces, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginPesertaMagang({email, password}))
  }
  
  
  return (
    <section className="hero is-fullheight is-fullwidth" style={{backgroundColor: '#B0E0E6'}}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
            <h1 className='title'>Kenshusei</h1>
                <form onSubmit={Auth} className='box' style={{backgroundColor: '#ffffe0'}}>
                  {isError && <p className='has-text-centered'>{message}</p>}
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input type="password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*******'/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button type='submit' className="button is-fullwidth" style={{backgroundColor: '#8B4513', color: 'white'}}>
                          {isLoading ? 'Loading.....' : 'Login'}
                          </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginKenshusei