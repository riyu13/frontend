import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe2 } from '../../../features/authSlice';


const Beranda = () => {
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

  const {pesertamagang} = useSelector((state)=> state.auth);
  return (
    <div>
        <h1 className='title'>Dashboard</h1>
        <h2 className='subtitle'>Selamat datang kembali, <strong>{pesertamagang && pesertamagang.nama}</strong></h2>
        <div className='card' style={{backgroundColor: "#ffffe0"}}>
          <div className='card-content'>
            <strong>Rincian Biaya:</strong>
            <div className='columns'>
              <div className='column'>
                <div className='card'>
                <div className='card-header' >
                  <div className='card-header-title'><strong>Kelas 1</strong></div>
                </div>
                  <div className='card-content'>
                    <br/>
                    <div className='columns'>
                      <div className='column'>
                        <p>- MCU awal klinik Budi Sehat </p>
                        <p>- Pendaftaran LPK</p>
                        <p>- Biaya asrama</p>
                        <p>- Fisik, Mental, dan Disiplin</p>
                        <p>- Perlengkapan belajar LPK</p>
                      </div>
                      <div className='column has-text-right'>
                        <p> Rp. 600.000</p>
                        <p> Rp. 500.000</p>
                        <strong> Gratis</strong>
                        <p> Rp. 1.200.000</p>
                        <p> Rp. 500.000</p>
                      </div>
                    </div>
                    <div className='columns'>
                        <div className='column is-left'><strong>Total</strong></div>
                        <div className='column has-text-right'><strong>Rp. 2.800.000</strong></div>
                      </div>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='card'>
                <div className='card-header'>
                  <div className='card-header-title'><strong>Kelas 2</strong></div>
                </div>
                  <div className='card-content'>
                    <br/>
                    <div className='columns'>
                      <div className='column'>
                        <p>- Materi bahasa jepang </p>
                        <p>- Biaya transport tes/ujian</p>
                        <p>- Biaya asrama</p>
                        <p>- Fisik, Mental, dan Disiplin</p>
                        <p>- Berkas IM Japan</p>
                      </div>
                      <div className='column has-text-right'>
                        <p> Rp. 2.000.000</p>
                        <p> Rp. 500.000</p>
                        <strong> Gratis</strong>
                        <p> Rp. 1.200.000</p>
                        <p> Rp. 500.000</p>
                      </div>
                    </div>
                    <div className='columns'>
                        <div className='column is-left'><strong>Total</strong></div>
                        <div className='column has-text-right'><strong>Rp. 4.200.000</strong></div>
                      </div>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='card'>
                <div className='card-header'>
                  <div className='card-header-title'><strong>Kelas 3</strong></div>
                </div>
                  <div className='card-content'>
                    <br/>
                    <div className='columns'>
                      <div className='column'>
                        <p>- Materi bahasa jepang</p>
                        <p>- Transportasi pelatihan daerah</p>
                        <p>- Pelatihan wawancara</p>
                        <p>- Biaya Pengembangan LPK</p>
                      </div>
                      <div className='column has-text-right'>
                        <p> Rp. 1.000.000</p>
                        <br/>
                        <p> Rp. 500.000</p>
                        <p> Rp. 1.200.000</p>
                        <p> Rp. 2.500.000</p>
                      </div>
                    </div>
                    <div className='columns'>
                        <div className='column is-left'><strong>Total</strong></div>
                        <div className='column has-text-right'><strong>Rp. 5.200.000</strong></div>
                      </div>
                  </div>
                </div>
                <div className='columns'>
                        <div className='column has-text-right is-size-7'><h6>*biaya kelas 3 dibayar jika tes bahasa jepang n5 dan mcu sudah <strong>lulus</strong> dan sebelum keberangkatan ke pelatihan daerah(pelatihan prakeberangkatan tahap 1).</h6></div>
                        </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Beranda