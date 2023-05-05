import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  
  return (
    <section className="hero is-success is-fullheight is-fullwidth" style={{backgroundColor: '#B0E0E6'}} >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
            <h1 className='title' style={{color: 'black'}}>LPK Yukimaga Surakarta</h1>
                <form className='box' style={{backgroundColor: '#FFFFE0'}}>
                    <div className="field mt-5">
                    <NavLink to={"/login"}><button className="button is-fullwidth" style={{backgroundColor:  '#8B4513', color: 'white'}}>
                          Administrasi
                        </button></NavLink>
                    </div>
                    <div className="field mt-5">
                    <NavLink to={"/login2"}><button className="button is-fullwidth" style={{backgroundColor:  '#8B4513', color: 'white'}}>
                          Kenshusei
                        </button></NavLink>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home