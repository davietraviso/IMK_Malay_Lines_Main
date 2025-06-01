import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
// import MainImage from '../assets/img/hero_page1.png'
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

import ikonCount from "../assets/img/akun/ikon-count.svg";
import ikonGlobe from "../assets/img/akun/ikon-globe.svg";
import ikonKapal from "../assets/img/akun/ikon-kapal.svg";

// Booking
import ikonCheckDone from "../assets/img/akun/ikon-check-done.svg";
import ikonCheckNotyet from "../assets/img/akun/ikon-check-notyet.svg";
import ikonCheckOngoing from "../assets/img/akun/ikon-check-ongoing.svg";
import ikonPanahBawah from "../assets/img/akun/ikon-panah-bawah.svg";
// import imageSide from "./image.svg";



const BookingKontak = () => {

      
  return (
    <>

        <section className="cont_main">
            <div className="top-section">
                <div className="judul">
                    <div className="text-wrapper">Kontak Kargo</div>

                    <p className="div-top-section">
                    Booking Pelayaran Baru
                    </p>
                </div>
            </div>

        </section>


        <section className="cont_main">
            <div className="base-4">
                <div className="frame-atas">
                    <div className="frame-selection">
                        <img className="img" alt="Ikon check done" src={ikonCheckDone} />

                        <div className="text-wrapper">Pilih pelayaran</div>
                    </div>

                    <div className="frame-selection">
                        <img className="img" alt="Ikon check ongoing" src={ikonCheckDone} />

                        <div className="text-wrapper">Pilih lokasi</div>
                    </div>

                    <div className="frame-selection">
                        <img className="img" alt="Ikon check notyet" src={ikonCheckDone} />

                        <div className="text-wrapper">Detail Kargo</div>
                    </div>

                    <div className="frame-selection">
                        <img className="img" alt="Ikon check notyet" src={ikonCheckOngoing} />

                        <div className="text-wrapper-bold">Kontak Pembeli</div>
                    </div>

                    <div className="frame-selection-2">
                        <img className="img" alt="Ikon check notyet" src={ikonCheckNotyet} />

                        <div className="text-wrapper-2">Konfirmasi data</div>
                    </div>
                </div>

                <div className="form-booking">
                    <div className="frame-booking-1">
                        
                        <div className="frame-asal-kargo">
                            <div className="frame-alamat-pick">
                                <p className="text-wrapper">
                                Pada bagian ini anda akan memasukkan detail pembeli atau mitra yang
                                anda tujukan sebagai penerima kargo pelayaran anda.
                                </p>

                                <p className="div">
                                Note: Pembeli tidak bisa berasal dari perusahaan anda.
                                </p>

                                <div className="div-2">
                                <div className="text-wrapper-2">Siapa pembeli anda?</div>

                                <div className="frame-detail-pembeli">
                                    <div className="text-wrapper-3">Nama Pembeli</div>

                                    <div className="text-wrapper-4">Alamat pembeli</div>
                                </div>

                                <div className="frame-tambah-pembeli">
                                    <div className="text-wrapper-5">+ Tambah pembeli baru</div>
                                </div>
                                </div>

                                <div className="div-2">
                                <div className="text-wrapper-2">Siapa kontak pembeli anda?</div>

                                <p className="p">
                                    Kami memerlukan informasi ini agar pihak Malay Lines dapat
                                    menghubungi yang bersangkutan.
                                </p>

                                <div className="frame-detail-pembeli">
                                    <div className="text-wrapper-3">Kontak Pembeli</div>

                                    <div className="text-wrapper-4">Email pembeli</div>
                                </div>

                                <div className="frame-tambah-pembeli">
                                    <div className="text-wrapper-5">+ Tambah kontak baru</div>
                                </div>
                                </div>

                                <div className="frame-tombol">
                                    <Link to="/booking-3" className="tombol link-universal">
                                        <div className="text-wrapper-5">Kembali</div>
                                        {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                                    </Link>
                            

                                    <Link to="/booking-5" className="simpan-lanjutkan-wrapper link-universal">
                                        <div className="simpan-lanjutkan">Simpan &amp; Lanjutkan</div>
                                        {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                                    </Link>
                                {/* <div className="tombol">
                                    <div className="text-wrapper-6">Kembali</div>
                                </div>

                                <div className="simpan-lanjutkan-wrapper">
                                    <div className="simpan-lanjutkan">Simpan &amp; Lanjutkan</div>
                                </div> */}
                                </div>
                            </div>

                        </div>

                        
                        <div className="frame-pilihan">
                            <div className="frame-p">
                                <div className="text-wrapper">Tanggal pengangkutan kargo</div>

                                <div className="div">5 Juni 2025</div>
                            </div>

                            <div className="frame-pengingat">
                                <div className="div-2">
                                <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                <p className="p">
                                    <span className="span">
                                    Pelabuhan A<br />
                                    </span>

                                    <span className="text-wrapper-2">Kota A, Negara A</span>
                                </p>
                                </div>

                                <img
                                className="ikon-panah-bawah"
                                alt="Ikon panah bawah"
                                src={ikonPanahBawah}
                                />

                                <div className="div-2">
                                <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                <p className="p">
                                    <span className="span">
                                    Pelabuhan B<br />
                                    </span>

                                    <span className="text-wrapper-2">Kota B, Negara B</span>
                                </p>
                                </div>

                                <div className="frame-tanggal">
                                <img className="ikon-count" alt="Ikon count" src={ikonCount} />

                                <div className="text-wrapper-3">Lihat jadwal lengkap</div>
                                </div>
                            </div>

                            <div className="frame-p">
                                <div className="text-wrapper">Kargo</div>

                                <div className="text-wrapper-4">Detail 1</div>

                                <div className="frame-p-2">
                                <div className="div-3">
                                    <img
                                    className="ikon-tanggal"
                                    alt="Ikon tanggal"
                                    src={ikonTanggal}
                                    />

                                    <div className="text-wrapper-5">15 hari</div>
                                </div>

                                <div className="div-3">
                                    <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />

                                    <div className="text-wrapper-5">2 transit</div>
                                </div>
                                </div>
                            </div>

                            <div className="frame-p-3">
                                <div className="text-wrapper-6">Biaya transportasi</div>

                                <div className="text-wrapper-7">Rp ...</div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
            
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

export default BookingKontak