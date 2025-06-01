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

// New Register
import iconDropdown from "../assets/img/register/icon-dropdown.svg";
import captcha from "../assets/img/register/captcha.svg";


// import imageSide from "./image.svg";



const Register = () => {

      
  return (
    <>

        <section className="cont_main">
            <div className="top-login">
                <div className="judul">
                    <div className="text">
                        <div className="text-wrapper">Register</div>

                    </div>

                </div>
            </div>
        </section>

        <section className="cont_main">
            <div className="big-form">
                <div className="form-buat-akun">
                    <div className="forms">
                    <div className="judul">
                        <div className="text-wrapper">Buat akun baru</div>

                        <p className="already-have-an">
                        <span className="span">Sudah punya akun sebelumnya?</span>

                        <span className="text-wrapper-2">&nbsp;</span>

                        <span className="text-wrapper-3">Log in&nbsp;&nbsp;</span>
                        </p>
                    </div>

                    <div className="div">
                        <div className="div-2">
                        <div className="div-3">
                            <div className="label">Nama depan</div>

                            {/* <div className="text-field" /> */}
                            <div className="text-field">
                                <div className="inputs">
                                    <p className="p"></p>
                                    <input
                                        type="text"
                                        className="p"
                                        placeholder="Masukkan nama depan "
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="div-3">
                            <div className="label">Nama belakang</div>

                            {/* <div className="text-field" /> */}
                            <div className="text-field">
                                <div className="inputs">
                                    <p className="p"></p>
                                    <input
                                        type="text"
                                        className="p"
                                        placeholder="Masukkan nama belakang "
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            
                        </div>
                        </div>

                        <div className="div-4">
                        <div className="label">Username anda</div>

                        <div className="text-field">
                                <div className="inputs">
                                    <p className="p"></p>
                                    <input
                                        type="text"
                                        className="p"
                                        placeholder="Masukkan username anda"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="div-4">
                        <div className="label">Alamat email perusahaan</div>

                        
                        <div className="text-field">
                                <div className="inputs">
                                    <p className="p"></p>
                                    <input
                                        type="text"
                                        className="p"
                                        placeholder="Masukkan alamat email perusahaan anda"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="div-4">
                        <div className="label">Negara asal</div>

                        <div className="text-field">
                            <div className="inputs">
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Masukkan negara asal anda"
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
                            </div>
                        </div>
                        </div>

                        <div className="password-dan">
                        <div className="div-2">
                            <div className="div-3">
                            <div className="label">Password</div>

                            <div className="text-field">
                            <div className="inputs">
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Masukkan password"
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
                            </div>
                        </div>
                            </div>

                            <div className="div-3">
                            <div className="label">Konfirmasi passwordmu</div>

                            <div className="text-field">
                            <div className="inputs">
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Konfirmasi password anda"
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
                            </div>
                        </div>
                            </div>
                        </div>

                        <p className="gunakan-atau-lebih">
                            Gunakan 8 atau lebih karakter dengan gabungan huruf, angka &amp;
                            simbol-simbols.
                        </p>

                        <div className="check-box">
                            <img className="ikon-check" alt="Ikon check" src={checkBox} />

                            <div className="text-wrapper-4">Tunjukkan password</div>
                        </div>
                        </div>

                        <div className="div-4">
                        <div className="label">Nomor telepon pribadi</div>

                        <div className="text-field">
                            <div className="inputs">
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Masukkan nomor telepon pribadi anda"
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
                            </div>
                        </div>
                        </div>

                        <div className="div-4">
                        <div className="label">Nomor telepon perusahaan</div>

                        <div className="text-field">
                            <div className="inputs">
                                <p className="p"></p>
                                <input
                                    type="text"
                                    className="p"
                                    placeholder="Masukkan nomor telepon perusahaan anda"
                                    // value={namaNegara}
                                    // onChange={(e) => setNamaNegara(e.target.value)}
                                />
                            </div>
                        </div>
                        </div>

                        <div className="div">
                        <div className="some-text">
                            <img className="img" alt="Check box" src={checkBox} />

                            <p className="p">
                            Bagikan data registrasi saya dengan penyedia konten kami untuk
                            tujuan pemasaran.
                            </p>
                        </div>

                        <div className="some-text-2">
                            <img className="img" alt="Check box" src={checkBox} />

                            <p className="p">
                            <span className="text-wrapper-5">
                                Dengan membuat akun, Anda menyetujui{" "}
                            </span>

                            <span className="text-wrapper-6">Ketentuan Penggunaan</span>

                            <span className="text-wrapper-5"> dan </span>

                            <span className="text-wrapper-6">Kebijakan Privasi</span>

                            <span className="text-wrapper-5">.</span>
                            </p>
                        </div>

                        <div className="some-text-2">
                            <img className="img" alt="Check box" src={checkBox} />

                            <p className="p">
                            Saya setuju untuk menerima berita terkait logistik dan
                            pembaruan pemasaran melalui email, telepon, atau sejenisnya
                            dari Malay Lines Inc. dan perusahaan afiliasinya.
                            </p>
                        </div>

                        <div className="robot-check">
                            <div className="text">
                                <img className="img" alt="Check box" src={checkBox} />

                                <div className="text-wrapper-7">I'm not a robot</div>
                            </div>

                            <img className="captcha" alt="Check box" src={captcha} />
                        </div>
                        </div>
                    </div>

                    <Link to="/akun" className="tombol-buat link-universal">
                            <div className="text-wrapper-8">Buat akun baru</div>
                            {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                        </Link>

                    {/* <div className="tombol-buat">
                        <div className="text-wrapper-8">Buat akun baru</div>
                    </div> */}
                    </div>

                    <div className="gambar" />
                </div>

                    <div className="text-bawah">
                        <div className="dropdown">
                            <div className="text-wrapper-4">Bahasa Indonesia (Indonesia)</div>

                            <img
                                className="icon-dropdown"
                                alt="Icon dropdown"
                                src={iconDropdown}
                            />
                        </div>

                        <div className="links">
                            <div className="text-wrapper-4">Bantuan</div>

                            <div className="text-wrapper-4">Privasi</div>

                            <div className="text-wrapper-4">Ketentuan</div>
                        </div>
                    </div>

                </div>

        </section>



    </>
    
  )
}

export default Register