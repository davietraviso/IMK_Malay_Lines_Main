import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// New Akun
import ikonPanahKanan from "../assets/img/akun/ikon-panah-kanan.svg";
import ikonSwap from "../assets/img/akun/ikon-swap.svg";
import ikonTanggal from "../assets/img/akun/ikon-tanggal.svg";
import ikonFilter from "../assets/img/akun/ikon-filter.svg";
import tutupPage from "../assets/img/akun/ikon-tutup.svg";
import ikonDaftar from "../assets/img/akun/ikon-daftar.svg";
import ikonBooking from "../assets/img/akun/ikon-booking.svg";
import ikonCall from "../assets/img/akun/ikon-call.svg";

// import imageSide from "./image.svg";



const AccountPage = () => {

      
  return (
    <>

        <section className="cont_main">
            <div className="top-section">
                <div className="judul">
                    <div className="text-wrapper">Dashboard Akun</div>

                    <p className="div-top-section">
                    Selamat datang! Silahkan gunakan layanan di bawah ini
                    </p>
                </div>
            </div>

        </section>

        <section className="cont_main">

          
            <div className="base">
                <div className="kolom-utama">
                    <div className="card-side">
                        <div className="frame-side">
                        <div className="text-wrapper-side">Beranda</div>
                        </div>

                        <div className="div-wrapper">
                        <div className="text-wrapper-side">Pengiriman</div>
                        </div>

                        <div className="div-wrapper">
                        <div className="text-wrapper-side">Mitra Pelayaran</div>
                        </div>
 
                        <div className="div-wrapper">
                        <div className="text-wrapper-side">Impor / Ekspor</div>
                        </div>

                        <div className="div-wrapper">
                        <div className="text-wrapper-side">Bantuan</div>
                        </div>

                        <img className="tutup-page" alt="Tutup page" src={tutupPage} />
                    </div>

                    <div className="frame-beranda">
                        <div className="notifikasi-booking">
                        <div className="text-wrapper-2-beranda">Siap untuk booking pesanan?</div>

                        <p className="p-2">
                            Segera letakkan pesanan anda agar proses pengiriman lebih mudah ke
                            depannya!
                        </p>

                        <Link to="/booking" className="tombol-beranda link-universal">
                            <div className="text-wrapper-3-beranda">Booking pelayaran</div>
                            {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                        </Link>

                        {/* <div className="tombol-beranda">
                            <div className="text-wrapper-3-beranda">Booking pelayaran</div>
                        </div> */}
                        </div>

                        <div className="daftar-jadwal">
                        <div className="div-2">
                            <div className="text-wrapper-4">Daftar jadwal pengiriman</div>

                            <div className="tombol-filter">
                            <img className="vector" alt="Vector" src={ikonFilter} />

                            <div className="text-wrapper-5">Filter</div>
                            </div>
                        </div>

                        <p className="p">
                            Daftar masih kosong, silahkan booking pelayaran terlebih dahulu!
                        </p>

                        {/* <div className="frame-pilihan">
                            <div className="text-wrapper">
                            </div>
                        </div> */}

                        <div className="frame-pilihan">
                            <div className="div-2">
                            <div className="frame-p">
                                <div className="text-wrapper-6">10 Juni</div>

                                <div className="text-wrapper-7">Pelabuhan A</div>
                            </div>

                            <img
                                className="ikon-panah-kanan"
                                alt="Ikon panah kanan"
                                src={ikonPanahKanan}
                            />

                            <div className="frame-p">
                                <div className="text-wrapper-6">25 Juni</div>

                                <div className="text-wrapper-7">Pelabuhan B</div>
                            </div>

                            <div className="frame-p-2">
                                <div className="div-3">
                                <img
                                    className="ikon-tanggal"
                                    alt="Ikon tanggal"
                                    src={ikonTanggal}
                                />

                                <div className="text-wrapper-8">15 hari</div>
                                </div>

                                <div className="div-3">
                                <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />

                                <div className="text-wrapper-8">2 transit</div>
                                </div>
                            </div>

                            <div className="frame-p-2">
                                <div className="text-wrapper-9">Biaya transportasi</div>

                                <div className="text-wrapper-10">Rp ...</div>
                            </div>
                            </div>

                            <div className="frame-tombol">
                                <Link to="/penjadwalan" className="tombol-2 link-universal">
                                    <div className="text-wrapper-11">Lacak pelayaran</div>
                                    {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                                </Link>
                                {/* <div className="tombol-2">
                                    <div className="text-wrapper-11">Lacak pelayaran</div>
                                </div> */}

                                <div className="tombol-cek">
                                    <div className="text-wrapper-12">Detail</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="frame-bawah-akun">
                    <div className="div-1">
                        <div className="img-wrapper">
                        <img className="ikon-booking" alt="Ikon booking" src={ikonBooking} />
                        </div>

                        <div className="text-wrapper">Booking segera!</div>

                        <p className="p">
                        Segera booking kargo pilihan perusahaan anda melalui layanan kami!
                        </p>

                        <div className="frame-tombol">
                        <Link to="/akun" className="tombol link-universal">
                            <div className="text-wrapper-2-bawah">Booking kargo!</div>
                            {/* <img className="img" alt="Arrow right" src={ArrowRight} /> */}
                        </Link>
                        </div>
                    </div>

                    <div className="div-1">
                        <div className="daftar-ikon">
                        <img className="ikon-daftar" alt="Ikon daftar" src={ikonDaftar} />
                        </div>

                        <div className="text-wrapper">Lihat layanan mitra kami</div>

                        <p className="p">
                        Hubungkan akun perusahaan anda dan coba segala layanan yang mitar kami
                        tawarkan!
                        </p>

                        <div className="frame-tombol">
                        <Link to="/akun" className="tombol link-universal">
                            <div className="text-wrapper-2-bawah">Cek mitra!</div>
                            {/* <img className="img" alt="Arrow right" src={ArrowRight} /> */}
                        </Link>
                        </div>
                    </div>

                    <div className="div-1">
                        <div className="img-wrapper">
                        <img className="ikon-call" alt="Ikon call" src={ikonCall} />
                        </div>

                        <div className="text-wrapper">Butuh bantuan?</div>

                        <p className="p">
                        Massih bingung mengenai hal-hal yang harus dan dapat dilakukan di
                        sini? Kami sedia membantu anda kapanpun!
                        </p>

                        <div className="frame-tombol">
                        <Link to="/akun" className="tombol link-universal">
                            <div className="text-wrapper-2-bawah">Hubungi kami!</div>
                            {/* <img className="img" alt="Arrow right" src={ArrowRight} /> */}
                        </Link>
                        </div>
                    </div>
                    </div>


                {/* <FrameBawah /> */}
            </div>
          


        </section>

        <section className="cont_main">
            
        </section>

        <section className="cont_main">
            
        </section>

        <section className="cont_main">
            
        </section>

        <section className="cont_main">
            
        </section>




    </>
    
  )
}

export default AccountPage