import React, {useState, useEffect } from 'react';
import axios from 'axios';

const HirakataKen = () => {
    const [hirakata, setHirakata] = useState([]);

    useEffect(()=>{
        getHirakata();
    },[]);

    const getHirakata = async() => {
        const response = await axios.get('http://localhost:5000/gethirakata');
        setHirakata(response.data)
    }

  return (
    <div>
        <h1 className='title'>Hirakata</h1>
        <h2 className='subtitle'>Pengenalan Huruf Hiragana & Katakana</h2>
        <div className="columns">
            <div className="column">
            <div class="card" style={{backgroundColor: "#ffffe0"}}>
        <header class="card-header card-header-padding ">
            <p class="card-header-title">
            Hiragana
            </p>
        </header>
        <div className="card-body">
            <div className="columns is-multiline" >
            {hirakata.map((hirakata)=>(
                <div className="column" key={hirakata.uuid}>
                  <div class="flip-card">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                      {hirakata.hiragana}
                      </div>
                      <div class="flip-card-back">
                      {hirakata.romaji}
                      </div>
                  </div>
              </div>
                </div>
                ))}
            </div>
                    </div>
                    </div>
            </div>
            <div className="column">
            <div class="card" style={{backgroundColor: "#ffffe0"}}>
        <header class="card-header card-header-padding ">
            <p class="card-header-title">
            Katakana
            </p>
        </header>
        <div className="card-body">
            <div className="columns is-flex-wrap-wrap" >
            {hirakata.map((hirakata)=>(
                <div className="column" key={hirakata.uuid}>
                  <div class="flip-card">
                  <div class="flip-card-inner">
                      <div class="flip-card-front">
                      {hirakata.katakana}
                      </div>
                      <div class="flip-card-back">
                      {hirakata.romaji}
                      </div>
                  </div>
              </div>
                </div>
                ))}
            </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default HirakataKen