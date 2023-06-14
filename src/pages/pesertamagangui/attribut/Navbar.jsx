/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../../../features/authSlice";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user } = useSelector((state)=>state.auth);
  const MySwal = withReactContent(Swal);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleToggle2 = () => {
    setIsActive2(!isActive2);
    toggleSidebar(); // Panggil fungsi toggleSidebar di Layout
  };

  const logout = () => {
    MySwal.fire({
      title: 'Apakah anda ingin keluar?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Keluar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
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
          title: 'Logout berhasil!'
        })
      }
    })
  }
  return (
    <div>
        <nav className="navbar is-fixed-top is-size-4" style={{backgroundColor: '#B0E0E6'}}  role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
          <div className="navbar-item">
            <button
              className="button is-white"
              onClick={handleToggle2}
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            >
              {isSidebarOpen ? (
                <AiOutlineEyeInvisible className="mr-2" style={{ verticalAlign: 'middle' }} />
              ) : (
                <AiOutlineEye className="mr-2" style={{ verticalAlign: 'middle' }} />
              )}
            </button>
          </div>
            <NavLink to="/beranda" className="navbar-item">
              <img src={logo}
              width="auto" 
              height="auto"
              alt="logo"/>
              <h1 className='title'>LPK Yukimaga Surakarta</h1>
            </NavLink>
            <button className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleToggle}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </button>
          </div>
            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navbarMenu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                {user && user.role === "admin" && (
                  <Link to="/kenshusei/add" className="button is-primary">
                    <strong>Pendaftaran</strong>
                  </Link>)}
                  <button onClick={logout} className="button" style={{backgroundColor: '#8B4513', color: 'white'}} >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar