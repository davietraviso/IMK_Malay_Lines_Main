import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// New Tentang Kami

import gambar1 from "../assets/img/tentangkami/gambar-1.png";
import gambar2 from "../assets/img/tentangkami/gambar-2.png";

import bookingIkon from "../assets/img/tentangkami/ikon-booking.svg";
import daftarIkon from "../assets/img/tentangkami/ikon-daftar.svg";
import callIcon from "../assets/img/tentangkami/ikon-call.svg";



const TentangKami = () => {
      
  return (
    <>

        <section className="cont_main">
            <div className="top-tentangkami">
                <div className="judul">
                    <div className="text">
                        <div className="text-wrapper">Tentang Kami</div>

                    </div> 

                </div>
            </div>

        </section>

        <section className="cont_main">
            <div className="frame-bawah">
                <div className="judul-top">
                    <div className="text-wrapper">Malay Lines</div>

                    <p className="div">
                    Menghubungkan Jalur Maritim Nusantara hingga Dunia
                    </p>
                </div>

                <div className="frame-utama">
                    <div className="visi">
                        <div className="penjelasan">
                            <div className="frame-visi">
                                <div className="text-wrapper">Visi Malay Lines</div>
                            </div>

                            <p className="malay-lines">
                            <span className="span">Malay Lines </span>

                            <span className="text-wrapper-2">
                                mengkhususkan diri dalam transportasi laut serta layanan penyimpanan
                                gudang yang efisien. Dengan jaringan luas di berbagai wilayah dunia,
                                tim profesional kami serta dukungan infrastruktur maritim yang
                                canggih memastikan setiap pengiriman berlangsung tepat waktu dan
                                pengelolaan inventaris dilakukan secara optimal.
                            </span>
                            </p>
                        </div>

                        <img className="gambar" alt="Gambar" src={gambar1} />
                    </div>


                    <div className="filosofi">
                        <p className="text-wrapper">
                            Filosofi kami berakar dari posisi strategis kawasan Melayu khususnya
                            Selat Malaka yang sejak dahulu menjadi jalur pelayaran dan perdagangan
                            utama dunia. Kami meyakini bahwa, seperti ley lines dalam mitologi kuno
                            yang menghubungkan titik-titik bersejarah penuh makna dan energi, Malay
                            Lines hadir sebagai penghubung penting antar pusat logistik dan
                            pelabuhan internasional yang menjalin arus perdagangan global masa kini.
                        </p>

                        <div className="frame-filosofi">
                            <div className="div">Filosofi Malay Lines</div>
                        </div>
                    </div>

                    <div className="visi">
                        <div className="penjelasan">
                            <div className="frame-visi">
                                <div className="text-wrapper">Misi Malay Lines</div>
                            </div>

                            <p className="malay-lines">
            

                            <span className="text-wrapper-2">
                                Malay Lines berkomitmen untuk melayani dengan integritas dan
                                ketekunan, berlandaskan pada kekuatan nilai maritim yang telah
                                menghidupkan wilayah ini selama berabad-abad, dalam menghadirkan
                                solusi logistik pelayaran yang andal, berkelanjutan, dan bernilai
                                jangka panjang.
                            </span>
                            </p>
                        </div>

                        <img className="gambar" alt="Gambar" src={gambar2} />
                    </div>

                
                </div>
            </div>

        </section>

        <section className="cont_main">
            <div className="frame-bottom">
                <div className="div-tk">
                    <img className="img" alt="Booking ikon" src={bookingIkon} />

                    <div className="text-wrapper">Booking segera!</div>

                    <p className="p">
                        Segera booking kargo pilihan perusahaan anda melalui layanan kami!
                    </p>

                    <div className="frame-tombol">
                    <div className="tombol">
                        <div className="text-wrapper-2">Booking kargo</div>
                    </div>
                    </div>
                </div>

                <div className="div-tk">
                    <img className="img" alt="Daftar ikon" src={daftarIkon} />

                    <div className="text-wrapper">Lihat layanan akun kami</div>

                    <p className="p">
                        Daftarkan akun perusahaan anda dan coba segala layanan yang kami
                        tawarkan!
                    </p>

                    <div className="frame-tombol">
                    <div className="tombol">
                        <div className="text-wrapper-2">Daftar sekarang</div>
                    </div>
                    </div>
                </div>


                <div className="div-tk">
                    <img className="img" alt="Call icon" src={callIcon} />

                    <div className="text-wrapper">Butuh bantuan?</div>

                    <p className="p">
                    Kami sedia membantu anda kapanpun demi membantu kebingung apapun!
                    </p>

                    <div className="frame-tombol">
                    <div className="tombol">
                        <div className="text-wrapper-2">Hubungi kami</div>
                    </div>
                    </div>
                </div>
                </div>

        </section>


    </>
    
  )
}

export default TentangKami