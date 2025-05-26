import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// New Login

import checkBox from "../assets/img/login/checkbox.svg";
import facebook from "../assets/img/login/facebook.svg";
import hide from "../assets/img/login/hide.svg";
import google from "../assets/img/login/google.svg";
import apple from "../assets/img/login/apple.svg";
import tweet from "../assets/img/login/tweet.svg";

// New Penjadwalan
import arrowDown from "../assets/img/penjadwalan/arrow-down.svg";
import ikonGlobe from "../assets/img/penjadwalan/ikon-globe.svg";
import ikonKapal from "../assets/img/penjadwalan/ikon-kapal.svg";
import ikonTanggal from "../assets/img/penjadwalan/ikon-tanggal.svg";
import ikonSwap from "../assets/img/penjadwalan/ikon-swap.svg";
import ikonTimer from "../assets/img/penjadwalan/Ikon-Timer.svg";
import arrowSelect from "../assets/img/penjadwalan/arrow-select.svg";
import map2 from "../assets/img/penjadwalan/world-map.svg";
import ikonGps from "../assets/img/penjadwalan/ikon-gps.svg";
import timer from "../assets/img/penjadwalan/timer.svg";




const Tracking = () => {

    const [selectedTracking, setSelectedTracking] = useState("p2p");

    const handleTabClick = (option) => {
    setSelectedTracking(option);
    };
      
  return (
    <>

        <section className="cont_main">
            <div className="top-login">
                <div className="judul">
                    <div className="text">
                        <div className="text-wrapper">Log in Akun</div>

                    </div>

                </div>
            </div>
        </section>

        <section className="cont_main">
            <div className="log-in">
                <div className="field">
                    <div className="forms">
                    <div className="text-wrapper">Log in</div>

                    <div className="more-forms">
                        <div className="div">
                        <div className="penjelasan">
                            <div className="label">Username atau alamat email</div>
                        </div>

                        <div className="form-input">
                            <div className="inputs">
                                <p className="p">Masukkan username / alamat email anda</p>
                            </div>
                        </div>
                        </div>

                        <div className="password">
                        <div className="div">
                            <div className="frame">
                            <div className="label-2">Kata sandi</div>
 
                            <div className="password-hide-see">
                                <img className="hide" alt="Hide" src={hide} />

                                <div className="hide-2">Sembunyikan</div>
                            </div>
                            </div>

                            <div className="text-field" />
                        </div>

                        <div className="check-box">
                            <img className="img" alt="Check box" src={checkBox} />

                            <div className="i-want-to-receive">Ingat akun saya</div>
                        </div>
                        </div>

                        <div className="tombol">
                        <div className="link-text">
                            <p className="div-2">
                            <span className="span">
                                Dengan melanjutkan, Anda menyetujui
                            </span>

                            <span className="text-wrapper-2">&nbsp;</span>

                            <span className="text-wrapper-3">Terms of use</span>

                            <span className="span"> dan </span>

                            <span className="text-wrapper-3">Privacy Policy</span>

                            <span className="text-wrapper-4">&nbsp;</span>

                            <span className="span">kami</span>

                            <span className="text-wrapper-2">.</span>
                            </p>
                        </div>

                        <div className="tombol-login">
                            <div className="sign-up">Log in</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="sign-up-2">
                    <div className="have-an-account">
                        <div className="text-wrapper-6">Lupa kata sandi anda?</div>
                    </div>

                    <div className="have-an-account">
                        <p className="div-2">
                        <span className="span">Tidak punya akun? </span>

                        <span className="text-wrapper-7">Daftar akun</span>
                        </p>
                    </div>
                    </div>
                </div>

                <div className="icons">
                    <div className="divider">
                    <div className="divider-2" />

                    <div className="have-an-account">
                        <div className="text-wrapper-8">Atau lanjutkan dengan</div>
                    </div>

                    <div className="divider-2" />
                    </div>

                    <div className="frame-2">
                   
                        
                    <img className="social-media-logo" alt="F" src={facebook} />
                        
                  

                    <img
                        className="social-media-logo-2"
                        alt="Social media logo"
                        src={apple}
                    />

                    <img
                        className="social-media-logo-3"
                        alt="Social media logo"
                        src={google}
                    />

                    <img
                        className="social-media-logo-4"
                        alt="Social media logo"
                        src={tweet}
                    />
                    </div>
                </div>
                </div>

            <div className="tracking-wrapper">

                

                <div className="tracking">
                   
                    <div className="opsi">
                        <div
                            className={`div ${selectedTracking === "p2p" ? "active-tab" : ""}`}
                            onClick={() => handleTabClick("p2p")}
                        >
                            Point-to-Point
                        </div>

                        <div
                            className={`div ${selectedTracking === "kapal" ? "active-tab" : ""}`}
                            onClick={() => handleTabClick("kapal")}
                        >
                            Jadwal Kapal
                        </div>

                        <div
                            className={`div ${selectedTracking === "pelabuhan" ? "active-tab" : ""}`}
                            onClick={() => handleTabClick("pelabuhan")}
                        >
                            Jadwal Pelabuhan
                        </div>
                    </div>

                    {selectedTracking === "p2p" && (
                        <div className="tracking">
                            <div className="row-pilihan-form">
                                <div className="div-2">
                                <div className="text-wrapper-2">Nama Pelabuhan Asal</div>

                                <div className="search-bar">
                                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                    <div className="text-wrapper-3">Nama pelabuhan</div>
                                </div>
                                </div>

                                <div className="kolom-swap">
                                <div className="swap-button">
                                    <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />
                                </div>
                                </div>

                                <div className="div-2">
                                    <div className="text-wrapper-2">Nama Pelabuhan Tujuan</div>

                                    <div className="search-bar">
                                        <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                        <div className="text-wrapper-3">Nama pelabuhan</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row-pilihan-bawah">
                                <div className="form-tanggal">
                                <div className="text-wrapper-2">Tanggal Keberangkatan</div>

                                <div className="search-bar">
                                    <img
                                    className="ikon-tanggal"
                                    alt="Ikon tanggal"
                                    src={ikonTanggal}
                                    />

                                    <div className="text-wrapper-3">17/04/2025</div>

                                    <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                                </div>
                                </div>

                                <div className="tombol-cari">
                                <div className="text-wrapper-5">Cari Jadwal</div>
                                </div>
                            </div>
                        </div>
                        )}

                        {selectedTracking === "kapal" && (
                        <div className="tracking">
                            <div className="row-pilihan-form">
                                <div className="div-2">
                                <div className="text-wrapper-2">Nama Kapal Kargo</div>

                                <div className="search-bar">
                                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                    <div className="text-wrapper-2">Nama kapal</div>
                                </div>
                                </div>
                            </div>

                            <div className="row-pilihan-bawah">
                                <div className="form-tanggal">
                                <div className="div">Tanggal Keberangkatan</div>

                                <div className="search-bar">
                                    <img
                                    className="ikon-tanggal"
                                    alt="Ikon tanggal"
                                    src={ikonTanggal}
                                    />

                                    <div className="text-wrapper-3">17/04/2025</div>

                                    <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                                </div>
                                </div>

                                <div className="tombol-cari">
                                <div className="text-wrapper-4">Cari Jadwal</div>
                                </div>
                            </div>
                        </div>
                        )}

                        {selectedTracking === "pelabuhan" && (
                        <div className="tracking">
                            <div className="row-pilihan-form">
                                <div className="div-2">
                                <div className="div">Nama Negara Tujuan</div>

                                <div className="search-bar">
                                    <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                    <div className="text-wrapper-2">Nama negara</div>
                                </div>
                                </div>
                            </div>

                            <div className="form-nama-kapal-2">
                                <div className="div">Nama Pelabuhan Tujuan</div>

                                <div className="search-bar">
                                <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                <div className="text-wrapper-2">Nama pelabuhan</div>
                                </div>
                            </div>

                            <div className="row-pilihan-bawah">
                                <div className="form-tanggal">
                                <div className="div">Tanggal Keberangkatan</div>

                                <div className="search-bar">
                                    <img
                                    className="ikon-tanggal"
                                    alt="Ikon tanggal"
                                    src={ikonTanggal}
                                    />

                                    <div className="text-wrapper-3">17/04/2025</div>

                                    <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                                </div>
                                </div>

                                <div className="tombol-cari">
                                <div className="text-wrapper-4">Cari Jadwal</div>
                                </div>
                            </div>
                        </div>
                        )}



                    <div className="opsi">
                        <div className="frame-jadwal">
                        <div className="text-wrapper">Point-to-Point</div>
                        </div>

                        <div className="div">Jadwal Kapal</div>

                        <div className="div">Jadwal Pelabuhan</div>
                    </div>

                    <div className="row-pilihan-form">
                        <div className="div-2">
                        <div className="text-wrapper-2">Nama Pelabuhan Asal</div>

                        <div className="search-bar">
                            <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                            <div className="text-wrapper-3">Nama pelabuhan</div>
                        </div>
                        </div>

                        <div className="kolom-swap">
                        <div className="swap-button">
                            <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />
                        </div>
                        </div>

                        <div className="div-2">
                            <div className="text-wrapper-2">Nama Pelabuhan Tujuan</div>

                            <div className="search-bar">
                                <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                <div className="text-wrapper-3">Nama pelabuhan</div>
                            </div>
                        </div>
                    </div>

                    <div className="row-pilihan-bawah">
                        <div className="form-tanggal">
                        <div className="text-wrapper-2">Tanggal Keberangkatan</div>

                        <div className="search-bar">
                            <img
                            className="ikon-tanggal"
                            alt="Ikon tanggal"
                            src={ikonTanggal}
                            />

                            <div className="text-wrapper-3">17/04/2025</div>

                            <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                        </div>
                        </div>

                        <div className="tombol-cari">
                        <div className="text-wrapper-5">Cari Jadwal</div>
                        </div>
                    </div>
                </div>

            <div className="tracking">
                <div className="opsi">

                    <div className="div">Point-to-Point</div>

                    <div className="frame-jadwal">
                    <div className="text-wrapper">Jadwal Kapal</div>
                    </div>

                    <div className="div">Jadwal Pelabuhan</div>
                </div>

                <div className="row-pilihan-form">
                    <div className="div-2">
                    <div className="text-wrapper-2">Nama Kapal Kargo</div>

                    <div className="search-bar">
                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                        <div className="text-wrapper-2">Nama kapal</div>
                    </div>
                    </div>
                </div>

                <div className="row-pilihan-bawah">
                    <div className="form-tanggal">
                    <div className="div">Tanggal Keberangkatan</div>

                    <div className="search-bar">
                        <img
                        className="ikon-tanggal"
                        alt="Ikon tanggal"
                        src={ikonTanggal}
                        />

                        <div className="text-wrapper-3">17/04/2025</div>

                        <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                    </div>
                    </div>

                    <div className="tombol-cari">
                    <div className="text-wrapper-4">Cari Jadwal</div>
                    </div>
                </div>
            </div>

            <div className="tracking">
                <div className="opsi">

                    <div className="div">Point-to-Point</div>


                    <div className="div">Jadwal Kapal</div>

                    <div className="frame-jadwal">
                    <div className="text-wrapper">Jadwal Pelabuhan</div>
                    </div>

                </div>

                <div className="row-pilihan-form">
                    <div className="div-2">
                    <div className="div">Nama Negara Tujuan</div>

                    <div className="search-bar">
                        <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                        <div className="text-wrapper-2">Nama negara</div>
                    </div>
                    </div>
                </div>

                <div className="form-nama-kapal-2">
                    <div className="div">Nama Pelabuhan Tujuan</div>

                    <div className="search-bar">
                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                    <div className="text-wrapper-2">Nama pelabuhan</div>
                    </div>
                </div>

                <div className="row-pilihan-bawah">
                    <div className="form-tanggal">
                    <div className="div">Tanggal Keberangkatan</div>

                    <div className="search-bar">
                        <img
                        className="ikon-tanggal"
                        alt="Ikon tanggal"
                        src={ikonTanggal}
                        />

                        <div className="text-wrapper-3">17/04/2025</div>

                        <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                    </div>
                    </div>

                    <div className="tombol-cari">
                    <div className="text-wrapper-4">Cari Jadwal</div>
                    </div>
                </div>
            </div>


            </div>

            



        </section>


    </>
    
  )
}

export default Tracking