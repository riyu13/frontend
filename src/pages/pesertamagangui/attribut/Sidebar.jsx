import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBook } from 'react-icons/bs';
import { HiOutlineTranslate } from 'react-icons/hi';
import { AiOutlineTranslation } from 'react-icons/ai';
import { BiPackage, BiBookAlt,  BiBook } from 'react-icons/bi';
import { GrReactjs,  GrWorkshop } from 'react-icons/gr';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { TbBooks } from 'react-icons/tb'

const Sidebar2 = () => {
  return (
    <div>
      <aside className="menu pl-1 has-shadow is-fixed">
        <br/>
        <br/>
            <p className="menu-label">
                Pengenalan Huruf
            </p>
            <ul className="menu-list">
                <li><NavLink to={"/hirakatapage"}>
                    <span className="icon-text">
                        <span className="icon">
                            <HiOutlineTranslate/>
                        </span>
                        <span>Hirakata</span>
                    </span>
                </NavLink></li>
                <li><NavLink to={"/kanjin5page"}>
                    <span className="icon-text">
                        <span className="icon">
                            <AiOutlineTranslation/>
                        </span>
                        <span>Kanji N5</span>
                    </span>
                </NavLink></li>
            </ul>
            <p className="menu-label">
                Kosakata Dasar
            </p>
            <ul className="menu-list">
                <li><NavLink to={"/katabendapage"}>
                    <span className="icon-text">
                        <span className="icon">
                            <BiPackage/>
                        </span>
                        <span>Kata Benda</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/katakerjapage"}>
                <span className="icon-text">
                        <span className="icon">
                            <GrWorkshop/>
                        </span>
                        <span>Kata Kerja</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/katasifatpage"}>
                <span className="icon-text">
                        <span className="icon">
                            <TfiCommentsSmiley/>
                        </span>
                        <span>Kata Sifat</span>
                    </span>
                    </NavLink></li>
            </ul>
            <p className="menu-label">
                Tata Bahasa Jepang
            </p>
            <ul className="menu-list">
                <li><NavLink to={"/partikelk1"}>
                    <span className="icon-text">
                        <span className="icon">
                            <GrReactjs/>
                        </span>
                        <span>Partikel Dasar</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/pengertian1"}>
                <span className="icon-text">
                        <span className="icon">
                            <BsBook/>
                        </span>
                        <span>Pola Kalimat</span>
                    </span>
                    </NavLink>
                </li>
                <li><NavLink to={"/surup"}>
                <span className="icon-text">
                        <span className="icon">
                            <TbBooks/>
                        </span>
                        <span>Bentuk Kamus</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/bentuk1k"}>
                <span className="icon-text">
                        <span className="icon">
                            <BiBookAlt/>
                        </span>
                        <span>Bentuk Sopan</span>
                    </span>
                    </NavLink></li>
                    <li><NavLink to={"/nai1"}>
                <span className="icon-text">
                        <span className="icon">
                            <BiBook/>
                        </span>
                        <span>Bentuk Negatif</span>
                    </span>
                    </NavLink></li>
            </ul>

                {/* <button className='button is-while'>Log Out</button> */}
        </aside>
    </div>
  )
}

export default Sidebar2