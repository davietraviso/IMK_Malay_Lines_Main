import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


// New Feedback
// import foto1 from "../assets/img/feedback/foto-1.jpg";
// import foto2 from "../assets/img/feedback/foto-2.jpg";
// import foto3 from "../assets/img/feedback/foto-3.jpg";
import pagenation from "../assets/vector/pagenation.svg";
import quote from "../assets/vector//quote.svg";
import ratingBintang from "../assets/vector//rating-bintang.svg";
import star from "../assets/vector//star.svg";

// New Ruang Tanya
import bar from "../assets/vector/bar-pertanyaan.svg";
import icons from "../assets/vector/ikon-pertanyaan.svg";
import simbolCari from "../assets/vector/simbol-cari.svg"; 

import foto1 from "../assets/img/ruangtanya/foto-1.jpg";
import foto2 from "../assets/img/ruangtanya/foto-2.jpg";
import foto3 from "../assets/img/ruangtanya/foto-3.jpg";
import foto4 from "../assets/img/ruangtanya/foto-4.jpg";
import down from "../assets/vector/arrow-down.svg";
import up from "../assets/vector/arrow-up.svg";



const Feedback = () => {

      
  return (
    <>


        <section className="cont_main">
            <div className="top-ruang-tanya">
                <div className="products">
                    <div className="heading">
                    <div className="text-wrapper">Ada Pertanyaan?</div>
                    </div>

                    <div className="placeholder-data">
                    <p className="div">
                        Ruang Tanya bersiap menjawab segala kebingunganmu
                    </p>
                    </div>
                </div>
            </div>

        </section>


        <section className="cont_main">
            <div className="ruang-tanya">
                <div className="kolom-tanya">
                    <div className="judul">
                        <div className="text-wrapper">Ruang Tanya!</div>

                        <p className="div">
                        Tempat berbagi rasa ingin tahu dan menemukan jawaban bermanfaat.
                        Setiap pertanyaan adalah langkah awal menuju pemahaman lebih dalam.
                        Mari eksplorasi, belajar, dan temukan solusi bersama di sini!
                        </p>
                    </div>

                    <div className="filtering">
                        <div className="search-bar">
                        {/* <div className="text-wrapper-2">Cari Pertanyaan..</div> */}
                        <input
                            type="text"
                            className="text-wrapper-3"
                            placeholder="Cari Pertanyaan.."
                            // value={namaNegara}
                            // onChange={(e) => setNamaNegara(e.target.value)}
                        />

                        <img className="simbol-cari" alt="Simbol cari" src={simbolCari} />
                        </div>

                        <img className="bar" alt="Bar" src={bar} />
                    </div>

                    <div className="card-insert">
                        {/* <div className="text-wrapper-3">Ketik Pertanyaanmu disini</div> */}
                        <input
                            type="text"
                            className="text-wrapper-3"
                            placeholder="Ketik Pertanyaanmu disini"
                            // value={namaNegara}
                            // onChange={(e) => setNamaNegara(e.target.value)}
                        />

                        <div className="media">
                        <img className="icons" alt="Icons" src={icons} />

                        <div className="tombol-kirim">
                            <div className="text-wrapper-4">Kirim Pertanyaan</div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="kolom-diskusi">
                    <div className="judul-kolom-diskusi">
                        <div className="text-wrapper">Ruang Diskusi</div>

                        <p className="div">
                            Selamat datang di Ruang Diskusi! Tempat untuk bertukar pikiran dan
                            berbagi ide dengan sopan, saling menghormati, serta terbuka pada
                            berbagai perspektif. Mari kita jaga suasana tetap positif dan nyaman
                            bagi semua. Terima kasih atas partisipasi Anda!
                        </p>
                    </div>

                    <div className="content-forum">
                        <div className="card-pertanyaan">
                            <div className="content-head">
                            <div className="title">
                                <img className="foto" alt="Foto" src={foto1} />

                                <div className="div">
                                <div className="text-wrapper">Layla</div>

                                <div className="text-wrapper-2">1 Hari yang lalu</div>
                                </div>

                                <div className="top">
                                <div className="pertanyaan-terbanyak">Pertanyaan Terpopuler</div>
                                </div>
                            </div>

                            <div className="drop">
                                <img className="up" alt="Up" src={up} />

                                <div className="text-wrapper-3">24</div>

                                <img className="down" alt="Down" src={down} />
                            </div>
                            </div>

                            <div className="content-pertanyaan">
                            <div className="kolom-pertanyaan">
                                <div className="pertanyaan">
                                <p className="teks-pertanyaan">
                                    Bagaimana cara melacak status pengiriman barang saya?
                                </p>
                                </div>

                                <div className="text-wrapper-4">Sembunyikan Balasan</div>
                            </div>

                            <div className="tombol">
                                <div className="kirim-pertanyaan">Balas Pertanyaan</div>
                            </div>
                            </div>
                        </div>

                        <div className="card-reply">
                            <div className="content-head-2">
                            <img className="foto" alt="Foto" src={foto2} />

                            <div className="div">
                                <div className="text-wrapper">Terizla (Admin 1)</div>

                                <div className="text-wrapper-2">12 Jam yang lalu</div>
                            </div>
                            </div>

                            <p className="teks-reply">
                            Anda dapat melacak status pengiriman secara real-time melalui platform
                            online kami. Cukup masukkan nomor resi atau referensi pengiriman di
                            halaman pelacakan.
                            </p>
                        </div>

                        <div className="card-reply">
                            <div className="content-head-2">
                            <img className="foto" alt="Foto" src={foto3} />

                            <div className="div">
                                <div className="text-wrapper">Clint</div>

                                <div className="text-wrapper-2">8 Jam yang lalu</div>
                            </div>
                            </div>

                            <p className="teks-reply">
                            Izin menjawab biasanya akan dikirimkan notifikasi otomatis melalui
                            email atau SMS setiap kali ada pembaruan status pengiriman
                            </p>
                        </div>

                        <div className="card-reply">
                            <div className="content-head-2">
                            <img className="foto" alt="Foto" src={foto4} />

                            <div className="div">
                                <div className="text-wrapper">Odette</div>

                                <div className="text-wrapper-2">2 Jam yang lalu</div>
                            </div>
                            </div>

                            <p className="teks-reply">
                            Biasanya customer service juga siap membantu melacak status pengiriman
                            jika kamu mengalami kesulitan menggunakan sistem pelacakan online.
                            Maaf kalo salah
                            </p>
                        </div>
                    </div>

                    <div className="content-forum">
                        <div className="card-pertanyaan">
                            <div className="content-head">
                            <div className="title">
                                <img className="foto" alt="Foto" src={foto1} />

                                <div className="div">
                                <div className="text-wrapper">Layla</div>

                                <div className="text-wrapper-2">1 Hari yang lalu</div>
                                </div>

                                <div className="top">
                                <div className="pertanyaan-terbanyak">Pertanyaan Terpopuler</div>
                                </div>
                            </div>

                            <div className="drop">
                                <img className="up" alt="Up" src={up} />

                                <div className="text-wrapper-3">24</div>

                                <img className="down" alt="Down" src={down} />
                            </div>
                            </div>

                            <div className="content-pertanyaan">
                            <div className="kolom-pertanyaan">
                                <div className="pertanyaan">
                                <p className="teks-pertanyaan">
                                    Bagaimana cara melacak status pengiriman barang saya?
                                </p>
                                </div>

                                <div className="text-wrapper-4">Sembunyikan Balasan</div>
                            </div>

                            <div className="tombol">
                                <div className="kirim-pertanyaan">Balas Pertanyaan</div>
                            </div>
                            </div>
                        </div>

                        <div className="card-reply">
                            <div className="content-head-2">
                            <img className="foto" alt="Foto" src={foto2} />

                            <div className="div">
                                <div className="text-wrapper">Terizla (Admin 1)</div>

                                <div className="text-wrapper-2">12 Jam yang lalu</div>
                            </div>
                            </div>

                            <p className="teks-reply">
                            Anda dapat melacak status pengiriman secara real-time melalui platform
                            online kami. Cukup masukkan nomor resi atau referensi pengiriman di
                            halaman pelacakan.
                            </p>
                        </div>

                        <div className="card-reply">
                            <div className="content-head-2">
                            <img className="foto" alt="Foto" src={foto3} />

                            <div className="div">
                                <div className="text-wrapper">Clint</div>

                                <div className="text-wrapper-2">8 Jam yang lalu</div>
                            </div>
                            </div>

                            <p className="teks-reply">
                            Izin menjawab biasanya akan dikirimkan notifikasi otomatis melalui
                            email atau SMS setiap kali ada pembaruan status pengiriman
                            </p>
                        </div>

                        <div className="card-reply">
                            <div className="content-head-2">
                            <img className="foto" alt="Foto" src={foto4} />

                            <div className="div">
                                <div className="text-wrapper">Odette</div>

                                <div className="text-wrapper-2">2 Jam yang lalu</div>
                            </div>
                            </div>

                            <p className="teks-reply">
                            Biasanya customer service juga siap membantu melacak status pengiriman
                            jika kamu mengalami kesulitan menggunakan sistem pelacakan online.
                            Maaf kalo salah
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </section>

        


    </>
    
  )
}

export default Feedback  