import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";


// New Login

import checkBox from "../assets/img/login/checkbox.svg";
import facebook from "../assets/img/login/facebook.svg";
import hide from "../assets/img/login/hide.svg";
import google from "../assets/img/login/google.svg";
import apple from "../assets/img/login/apple.svg";
import tweet from "../assets/img/login/tweet.svg";



const Login = () => {


      
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
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Masukkan username "
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
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

                            <div className="form-input"> 
                                <div className="inputs">
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Masukkan password "
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
                            </div>
                            </div>
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

                        <Link to="/akun" className="tombol-login link-universal">
                            <div className="sign-up">Log in</div>
                            {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                        </Link>

                        {/* <div className="tombol-login">
                            <div className="sign-up">Log in</div>
                        </div> */}
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


                        {/* <span className="text-wrapper-7">Daftar akun</span> */}
                        </p>
                        <Link to="/register" className="alink-universal">
                            <div className="text-wrapper-7">Daftar akun</div>
                            {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                        </Link>
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

        </section>


    </>
    
  )
}

export default Login