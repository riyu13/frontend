/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome, IoCashOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { BsBook } from 'react-icons/bs';
import { HiOutlineTranslate } from 'react-icons/hi';
import { AiOutlineTranslation } from 'react-icons/ai';
import { BiPackage, BiBookAlt, BiBook } from 'react-icons/bi';
import { GrReactjs, GrUserAdmin, GrWorkshop } from 'react-icons/gr';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { FaUsers } from 'react-icons/fa'
import { TbBooks } from 'react-icons/tb'

const Sidebar = () => {
    const { user } = useSelector((state)=>state.auth);
  return (
    <div>
        <aside className="menu pl-1 is-fixed">
            <p className='menu-label'>a</p>
            <p className='menu-label'>a</p>
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li><NavLink to={"/dashboard"}>
                <span className="icon-text">
                    <span className="icon">
                        <IoHome/>
                    </span>
                    <span>Dashboard</span>
                </span>
                </NavLink></li>
            </ul>
            <ul className="menu-list">
                <li><NavLink to={"/pembayaran"}>
                <span className="icon-text">
                    <span className="icon">
                        <IoCashOutline/>
                    </span>
                    <span>Pembayaran</span>
                </span>
                </NavLink></li>
            </ul>
            {user && user.role === "admin" && (
                <div>
                    <p className="menu-label">
                        Users
                    </p>
                    <ul className="menu-list">
                        <li><NavLink to={"/users"}><span className="icon-text">
                            <span className="icon">
                                <GrUserAdmin/>
                            </span>
                            <span>Administrasi</span>
                        </span></NavLink></li>
                        <li><NavLink to={"/kenshusei"}><span className="icon-text">
                            <span className="icon">
                                <FaUsers/>
                            </span>
                            <span>Kenshusei</span>
                        </span></NavLink></li>
                    </ul>
                </div>
            )}
            <p className="menu-label">
                Pengenalan Huruf
            </p>
            <ul className="menu-list">
                <li><NavLink to={"/hirakata"}>
                    <span className="icon-text">
                        <span className="icon">
                            <HiOutlineTranslate/>
                        </span>
                        <span>Hirakata</span>
                    </span>
                </NavLink></li>
                <li><NavLink to={"/kanjin5"}>
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
                <li><NavLink to={"/katabenda"}>
                    <span className="icon-text">
                        <span className="icon">
                            <BiPackage/>
                        </span>
                        <span>Kata Benda</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/katakerja"}>
                <span className="icon-text">
                        <span className="icon">
                            <GrWorkshop/>
                        </span>
                        <span>Kata Kerja</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/katasifat"}>
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
                <li><NavLink to={"/partikel"}>
                    <span className="icon-text">
                        <span className="icon">
                            <GrReactjs/>
                        </span>
                        <span>Partikel Dasar</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/pengertian"}>
                <span className="icon-text">
                        <span className="icon">
                            <BsBook/>
                        </span>
                        <span>Pola Kalimat</span>
                    </span>
                    </NavLink>
                </li>
                <li><NavLink to={"/suru"}>
                <span className="icon-text">
                        <span className="icon">
                            <TbBooks/>
                        </span>
                        <span>Bentuk Kamus</span>
                    </span>
                    </NavLink></li>
                <li><NavLink to={"/bentuk1"}>
                <span className="icon-text">
                        <span className="icon">
                            <BiBookAlt/>
                        </span>
                        <span>Bentuk Sopan</span>
                    </span>
                    </NavLink></li>
                    <li><NavLink to={"/nai"}>
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

export default Sidebar
