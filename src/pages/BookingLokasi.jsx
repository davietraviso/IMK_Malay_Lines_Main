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



const BookingLokasi = () => {


      
  return (
    <>

        <section className="cont_main">
            <div className="top-section">
                <div className="judul">
                    <div className="text-wrapper">Lokasi Kargo</div>

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
                        <img className="img" alt="Ikon check ongoing" src={ikonCheckOngoing} />

                        <div className="text-wrapper-bold">Pilih lokasi</div>
                    </div>

                    <div className="frame-selection-2">
                        <img className="img" alt="Ikon check notyet" src={ikonCheckNotyet} />

                        <div className="text-wrapper-2-lokasi">Detail Kargo</div>
                    </div>

                    <div className="frame-selection-2">
                        <img className="img" alt="Ikon check notyet" src={ikonCheckNotyet} />

                        <div className="text-wrapper-2-lokasi">Kontak Pembeli</div>
                    </div>

                    <div className="frame-selection-2">
                        <img className="img" alt="Ikon check notyet" src={ikonCheckNotyet} />

                        <div className="text-wrapper-2-lokasi">Konfirmasi data</div>
                    </div>
                </div>

                <div className="form-booking">
                    <div className="frame-booking-1">
                        
                        <div className="frame-asal-kargo">
                            <div className="frame-pelabuhan">
                                <p className="text-wrapper-1">
                                Mohon pastikan anda menggunakan alamat yang benar. Kami akan
                                mengangkut dan/atau mengantar kargo ke alamat ini.
                                </p>
                            </div>

                            <div className="div">
                                <div className="frame-tanggal">
                                <p className="p">Apa alamat pengangkutan kargo anda?</p>

                                <div className="div">
                                    <div className="text-wrapper">Nama gudang</div>

                                    <div className="frame-detail-kargo">
                                    {/* <div className="text-wrapper-2-lokasi">Gudang saya</div> */}
                                    <input
                                        type="text"
                                        className="text-wrapper-2-lokasi"
                                        placeholder="Gudang saya"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                </div>

                                <div className="frame-alamat-negara">
                                    <div className="frame-alamat">
                                    <div className="text-wrapper">Negara</div>

                                    <div className="frame-detail-kargo">
                                        {/* <div className="text-wrapper-2-lokasi">Negara saya</div> */}
                                        <input
                                        type="text"
                                        className="text-wrapper-2-lokasi"
                                        placeholder="Negara saya"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                    </div>

                                    <div className="frame-alamat">
                                    <div className="text-wrapper">Area / Provinsi</div>

                                    <div className="frame-detail-kargo">
                                        {/* <div className="text-wrapper-2-lokasi">Kota saya</div> */}
                                        <input
                                        type="text"
                                        className="text-wrapper-2-lokasi"
                                        placeholder="Provinsi saya"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                    </div>
                                </div>

                                <div className="frame-alamat-negara">
                                    <div className="frame-alamat">
                                    <div className="text-wrapper">Kota</div>

                                    <div className="frame-detail-kargo">
                                        {/* <div className="text-wrapper-2-lokasi">Kota saya</div> */}
                                        <input
                                        type="text"
                                        className="text-wrapper-2-lokasi"
                                        placeholder="Kota saya"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                    </div>

                                    <div className="frame-alamat">
                                    <div className="text-wrapper">Kode Pos</div>

                                    <div className="frame-detail-kargo">
                                        {/* <div className="text-wrapper-2-lokasi">Gudang saya</div> */}
                                        <input
                                        type="text"
                                        className="text-wrapper-2-lokasi"
                                        placeholder="Kode pos saya"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                    </div>
                                </div>

                                <div className="div">
                                    <div className="text-wrapper">Alamat</div>

                                    <div className="frame-detail-kargo">
                                    {/* <div className="text-wrapper-2-lokasi">Alamat saya</div> */}
                                    <input
                                        type="text"
                                        className="text-wrapper-2-lokasi"
                                        placeholder="Alamat saya"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                </div>

                                <div className="frame-tombol">
                                    <Link to="/booking-1" className="tombol link-universal">
                                        <div className="text-wrapper-3">Batal</div>
                                        {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                                    </Link>
                         

                                    <Link to="/booking-3" className="div-wrapper link-universal">
                                        <div className="text-wrapper-4-white">Simpan</div>
                                        {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                                    </Link>

                            
                                </div>
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

                                    <span className="text-wrapper-2-lokasi">Kota A, Negara A</span>
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

                                    <span className="text-wrapper-2-lokasi">Kota B, Negara B</span>
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

export default BookingLokasi