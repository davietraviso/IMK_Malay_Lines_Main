import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";


// New Akun
import ikonPanahKanan from "../assets/img/akun/ikon-panah-kanan.svg";
import ikonPanahBawah from "../assets/img/akun/ikon-panah-bawah.svg";
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
// import ikonCount from "./ikon-count.svg";
import ikonEdit from "../assets/img/akun/ikon-edit.svg";
import ikonKoin from "../assets/img/akun/ikon-koin.svg";
// import ikonTanggal from "./ikon-tanggal.svg";

// import imageSide from "./image.svg";



const AccountBookingPencarian = () => {

      
  return (
    <>

        <section className="cont_main">
            <div className="top-section">
                <div className="judul">
                    <div className="text-wrapper">Hasil Pencarian</div>

                    <p className="div-top-section">
                    Daftar pelayaran sesuai dengan katalog input anda
                    </p>
                </div>
            </div>

        </section>

        <section className="cont_main">

          
            <div className="base-3">
                <div className="kolom-utama">
                    <div className="form-booking">
                        <div className="frame-booking">
                            <div className="frame-ekspor-filter">
                                <div className="frame-asal-kargo">
                                    <div className="frame-ekspor">
                                    <div className="text-wrapper">Ekspor</div>

                                    <img className="ikon-edit" alt="Ikon edit" src={ikonEdit} />
                                    </div>

                                    <div className="div">
                                    <div className="text-wrapper-2">Pelabuhan A</div>

                                    <div className="text-wrapper">ke</div>

                                    <div className="text-wrapper-2">Pelabuhan B</div>
                                    </div>

                                    <div className="frame-tanggal">
                                    <div className="text-wrapper">dari</div>

                                    <div className="text-wrapper-2">10 Juni 2025</div>
                                    </div>

                                    <div className="frame-tanggal-2">
                                    <img className="ikon-count" alt="Ikon count" src={ikonCount} />

                                    <div className="text-wrapper-2">2 Kontainer</div>
                                    </div>
                                </div>

                                <div className="frame-asal-kargo-2">
                                    <div className="div-wrapper">
                                    <div className="text-wrapper-3">Filter pelayaran</div>
                                    </div>

                                    <div className="div">
                                    <div className="text-wrapper-2">Cakupan biaya</div>
                                    </div>

                                    <div className="frame-harga">
                                    <div className="div-2">
                                        <img className="ikon-koin" alt="Ikon koin" src={ikonKoin} />

                                        {/* <div className="text-wrapper-4">Rp</div> */}
                                        <input
                                            type="text"
                                            className="text-wrapper-4"
                                            placeholder="Rp"
                                            // value={namaNegara}
                                            // onChange={(e) => setNamaNegara(e.target.value)}
                                        />
                                    </div>

                                    <div className="text-wrapper-5">-</div>

                                    <div className="div-2">
                                        <img className="ikon-koin" alt="Ikon koin" src={ikonKoin} />

                                        {/* <div className="text-wrapper-4">Rp</div> */}
                                        <input
                                            type="text"
                                            className="text-wrapper-4"
                                            placeholder="Rp"
                                            // value={namaNegara}
                                            // onChange={(e) => setNamaNegara(e.target.value)}
                                        />
                                    </div>
                                    </div>

                                    <div className="div">
                                    <div className="text-wrapper-2">Tanggal pelayaran tercepat</div>
                                    </div>

                                    <div className="frame-tanggal-kargo">
                                    <img className="ikon-tanggal" alt="Ikon tanggal" src={ikonTanggal} />

                                    {/* <div className="text-wrapper-6">Pilihan tanggal</div> */}
                                    <input
                                        type="text"
                                        className="text-wrapper-6"
                                        placeholder="Pilihan tanggal"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />
                                    </div>
                                </div>
                                </div>
                            
                            <div className="frame-pelayaran-opsi">
                                <div className="frame-pilihan-1">
                                    <div className="frame-p">
                                        <div className="text-wrapper">10 Juni</div>

                                        <div className="div">Pelabuhan A</div>
                                    </div>

                                    <img
                                        className="ikon-panah-kanan"
                                        alt="Ikon panah kanan"
                                        src={ikonPanahKanan}
                                    />

                                    <div className="frame-p">
                                        <div className="text-wrapper">25 Juni</div>

                                        <div className="div">Pelabuhan B</div>
                                    </div>

                                    <div className="frame-p-2">
                                        <div className="div-2">
                                        <img className="ikon-tanggal" alt="Ikon tanggal" src={ikonTanggal} />

                                        <div className="text-wrapper-2">15 hari</div>
                                        </div>

                                        <div className="div-2">
                                        <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />

                                        <div className="text-wrapper-2">2 transit</div>
                                        </div>
                                    </div>

                                    <div className="frame-p-2">
                                        <div className="text-wrapper-3">Biaya transportasi</div>

                                        <div className="text-wrapper-4">Rp ...</div>
                                    </div>
                                </div>

                                <div className="frame-pilihan-2">
                                    <div className="frame-pilihan-top">
                                        <div className="frame-p">
                                        <div className="text-wrapper">13 Juni</div>

                                        <div className="div">Pelabuhan A</div>
                                        </div>

                                        <img
                                        className="ikon-panah-kanan"
                                        alt="Ikon panah kanan"
                                        src={ikonPanahKanan}
                                        />

                                        <div className="frame-p">
                                        <div className="text-wrapper">30 Juni</div>

                                        <div className="div">Pelabuhan B</div>
                                        </div>

                                        <div className="frame-p-2">
                                        <div className="div-2">
                                            <img
                                            className="ikon-tanggal"
                                            alt="Ikon tanggal"
                                            src={ikonTanggal}
                                            />

                                            <div className="text-wrapper-2">17 hari</div>
                                        </div>

                                        <div className="div-2">
                                            <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />

                                            <div className="text-wrapper-2">3 transit</div>
                                        </div>
                                        </div>

                                        <div className="frame-p-2">
                                        <div className="text-wrapper-3">Biaya transportasi</div>

                                        <div className="text-wrapper-4">Rp ...</div>
                                        </div>
                                    </div>

                                    <div className="frame-detail-pilihan">
                                        <div className="frame-jadwal">
                                        <div className="frame-pengingat">
                                            <img className="ikon-count" alt="Ikon count" src={ikonCount} />

                                            <p className="kargo-harus-ada-di">
                                            <span className="span">
                                                Kargo harus ada <br />
                                                di pelabuhan <br />
                                                sebelum
                                                <br />
                                            </span>

                                            <span className="text-wrapper-5">10 Juni 2025</span>
                                            </p>
                                        </div>

                                        <div className="frame-pengingat-2">
                                            <div className="div-3">
                                            <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                            <p className="p">
                                                <span className="text-wrapper-6">
                                                Pelabuhan A<br />
                                                </span>

                                                <span className="text-wrapper-7">Kota A, Negara A</span>
                                            </p>
                                            </div>

                                            <img
                                            className="ikon-panah-bawah"
                                            alt="Ikon panah bawah"
                                            src={ikonPanahBawah}
                                            />

                                            <div className="div-3">
                                            <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                            <p className="p">
                                                <span className="text-wrapper-6">
                                                Pelabuhan B<br />
                                                </span>

                                                <span className="text-wrapper-7">Kota B, Negara B</span>
                                            </p>
                                            </div>

                                            <div className="frame-tanggal">
                                            <img className="img" alt="Ikon count" src={ikonCount} />

                                            <div className="text-wrapper-8">Lihat jadwal lengkap</div>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="frame-penjelasan">
                                        <div className="frame-ekspor">
                                            <img className="ikon-koin" alt="Ikon koin" src={ikonKoin} />

                                            <div className="text-wrapper-9">Biaya Transportasi</div>
                                        </div>

                                        <div className="frame-pelabuhan">
                                            <p className="biaya-yang-dikenakan">
                                            Biaya yang dikenakan

                                            
                                                hari ini dapat berubah seiring waktunya
                                            
                                            </p>
                                        </div>

                                        <div className="frame-tanggal-2">
                                            <div className="div-wrapper">
                                            <div className="text-wrapper-12">
                                                Pelayaran ini bersifat spontan
                                            </div>
                                            </div>

                                            <div className="frame-pricing">
                                            <div className="frame-rupiah">
                                                <div className="text-wrapper-13">Rupiah</div>

                                                <div className="text-wrapper-14">Lihat harga detail</div>
                                            </div>

                                            <Link to="/booking-2" className="tombol link-universal">
                                                <div className="text-wrapper-15">Pilih pelayaran</div>
                                                {/* <img className="img-blog" alt="Arrow right" src={ArrowRight2} /> */}
                                            </Link>

                                            {/* <div className="tombol">
                                                <div className="text-wrapper-15">Pilih pelayaran</div>
                                            </div> */}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                            </div>
                            {/* <FramePelayaranOpsi />  */}
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

export default AccountBookingPencarian