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

import ikonCount from "../assets/img/akun/ikon-count.svg";
import ikonGlobe from "../assets/img/akun/ikon-globe.svg";
import ikonKapal from "../assets/img/akun/ikon-kapal.svg";

// import imageSide from "./image.svg";



const AccountBooking = () => {


      
  return (
    <>

        <section className="cont_main">
            <div className="top-section">
                <div className="judul">
                    <div className="text-wrapper">Booking Pelayaran</div>

                    <p className="div-top-section">
                    Silahkan isi detail pelayaran sesuai dengan kebutuhan anda
                    </p>
                </div>
            </div>

        </section>

        <section className="cont_main">

          
            <div className="base-2">
            <div className="kolom-utama-2">
                <div className="form-booking">
                <div className="judul-booking">
                    <div className="text-wrapper">Booking pelayaran baru</div>
                </div>

                <div className="frame-booking">
                    <div className="import-export">
                    <div className="frame-import">
                        <div className="div">Impor</div>
                    </div>

                    <div className="frame-export">
                        <div className="div">Ekspor</div>
                    </div>
                    </div>

                    <div className="div-2">
                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                    {/* <div className="text-wrapper-2">Asal pelabuhan</div> */}
                    <input
                            type="text-wrapper-2"
                            className="text-wrapper-2"
                            placeholder="Asal pelabuhan"
                            // value={namaNegara}
                            // onChange={(e) => setNamaNegara(e.target.value)}
                        />
                    </div>

                    <div className="div-2">
                    <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                    <div className="text-wrapper-2">Pelabuhan tujuan</div>
                     <input
                            type="text-wrapper-2"
                            className="text-wrapper-2"
                            placeholder="Pelabuhan tujuan"
                            // value={namaNegara}
                            // onChange={(e) => setNamaNegara(e.target.value)}
                        />
               
                    </div>
                </div>

                <div className="frame-booking">
                    <div className="div-2">
                    <img className="ikon-count" alt="Ikon count" src={ikonCount} />

                    {/* <div className="text-wrapper-2">Jumlah kargo</div> */}
                    <input
                            type="text-wrapper-2"
                            className="text-wrapper-2"
                            placeholder="Jumlah kargo"
                            // value={namaNegara}
                            // onChange={(e) => setNamaNegara(e.target.value)}
                        />
                    </div>

                    <div className="div-2">
                    <img
                        className="ikon-tanggal"
                        alt="Ikon tanggal"
                        src={ikonTanggal}
                    />

                    {/* <div className="text-wrapper-2">Pilihan tanggal pelayaran</div> */}
                    <input
                            type="text-wrapper-2"
                            className="text-wrapper-2"
                            placeholder="Pilihan tanggal pelayaran"
                            // value={namaNegara}
                            // onChange={(e) => setNamaNegara(e.target.value)}
                        />
                    </div>

                    <Link to="/booking-1" className="tombol link-universal">
                        <div className="text-wrapper-3">Cari pelayaran</div>
                        {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                    </Link>

                    {/* <div className="tombol">
                    <div className="text-wrapper-3">Cari pelayaran</div>
                    </div> */}
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

        <section className="cont_main">
            
        </section>




    </>
    
  )
}

export default AccountBooking