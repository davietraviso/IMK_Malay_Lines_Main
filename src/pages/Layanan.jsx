import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// New layanan

import icon1 from "../assets/vector/icon-1.svg";
import icon2 from "../assets/vector/icon-2.svg";
import icon3 from "../assets/vector/icon-3.svg";
import icon4 from "../assets/vector/icon-4.svg";
import icon5 from "../assets/vector/icon-5.svg";

import gambar1_layanan from "../assets/img/layanan/gambar-1.jpg";
import arrowBack from "../assets/vector/arrow-back.svg";
import arrowForward from "../assets/vector/arrow-forward.svg";

import gambar2_layanan from "../assets/img/layanan/gambar-2.jpg";
import gambar3_layanan from "../assets/img/layanan/gambar-3.jpg";
import gambar4_layanan from "../assets/img/layanan/gambar-4.jpg";
import gambar5_layanan from "../assets/img/layanan/gambar-5.jpg";

import gambar6_layanan from "../assets/img/layanan/gambar-5.jpg";
import gambar7_layanan from "../assets/img/layanan/gambar-5.jpg";
import gambar8_layanan from "../assets/img/layanan/gambar-5.jpg";
import gambar9_layanan from "../assets/img/layanan/gambar-5.jpg";
import gambar10_layanan from "../assets/img/layanan/gambar-5.jpg";

import box_gambar_1 from "../assets/img/layanan/kapal-1.jpeg";
import box_gambar_2 from "../assets/img/layanan/kapal-2.jpeg";
import box_gambar_3 from "../assets/img/layanan/kapal-3.jpeg";

import gambar11_layanan from "../assets/img/layanan/gambar-11.png";
import gambar12_layanan from "../assets/img/layanan/gambar-12.png";
import gambar13_layanan from "../assets/img/layanan/gambar-13.png";
import gambar14_layanan from "../assets/img/layanan/gambar-14.png";
import ArrowRight  from "../assets/vector/arrow-right.svg";
import ArrowRight2  from "../assets/vector/arrow-right-black.svg";


const Layanan = () => {

    // Carousel Layanan Kami

    const layananImages = [gambar1_layanan, gambar2_layanan, gambar3_layanan];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % layananImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? layananImages.length - 1 : prevIndex - 1
        );
    };

      
  return (
    <>

        <section className="cont_main">
            <div className="layanan-top"> 
                <div className="judul">
                    <div className="text-wrapper">Layanan Unggulan Kami</div>
                </div>

                <div className="tags-layanan">
                    <div className="tag-icon">
                    <img className="icon-layanan" alt="Icon" src={icon1} />

                    <div className="text-wrapper-2">Transportasi Laut</div>
                    </div>

                    <div className="tag-icon">
                    <img className="icon-layanan" alt="Icon" src={icon2} />

                    <div className="text-wrapper-2">Brankas Kargo</div>
                    </div>

                    <div className="tag-icon">
                    <img className="icon-layanan" alt="Icon" src={icon3} />

                    <div className="text-wrapper-2">Jadwal Pelayaran</div>
                    </div>

                    <div className="tag-icon">
                    <img className="icon-layanan" alt="Icon" src={icon4} />

                    <div className="text-wrapper-2">Pembersihan Keamanan</div>
                    </div>

                    <div className="tag-icon">
                    <img className="icon-layanan" alt="Icon" src={icon5} />

                    <div className="text-wrapper-2">Pengendalian Aliran</div>
                    </div>
                </div>
                </div>

        </section>

        <section className="cont_main">
            <div className="layanan-kami">
                <div className="deskripsi-produk">
                    <div className="text-wrapper">Layanan Kami</div>

                    <p className="kami-menyediakan">
                    Kami Menyediakan Solusi Logistik Laut Yang Terintegrasi Dan Efisien,
                    Dirancang Untuk Mendukung Kebutuhan Pengiriman Anda Dari Awal Hingga
                    Akhir Proses. Setiap Layanan Kami Difokuskan Pada Kecepatan, Keamanan,
                    Dan Keandalan.
                    </p> 
                </div>

                <div className="gambar-slide">
                    <div className="gambar">
                    <img
                        className="img"
                        alt="Arrow back"
                        src={arrowBack}
                        onClick={handlePrev}
                        style={{ cursor: "pointer" }}
                    />

                    <img
                        className="gambar-2"
                        alt="Layanan"
                        src={layananImages[currentIndex]}
                        style={{ transition: "opacity 0.5s ease", maxHeight: "100%" }}
                    />

                    <img
                        className="img"
                        alt="Arrow forward"
                        src={arrowForward}
                        onClick={handleNext}
                        style={{ cursor: "pointer" }}
                    />
                    </div>
                </div>

            </div>

        </section>
        
        <section className="cont_main">
            <div className="transportasi-laut">
                <div className="judul">
                    <div className="text-wrapper">Transportasi Laut</div>

                    <p className="layanan-pengiriman">
                    Layanan Pengiriman Laut Kami Menghubungkan Pelabuhan-pelabuhan Utama
                    Dengan Armada Terpercaya, Memastikan Barang Anda Sampai Tujuan Tepat
                    Waktu Dan Dalam Kondisi Terbaik, Baik Untuk Ekspor Maupun Impor.
                    </p>
                </div>

                <div className="gambar">
                    <div className="row-gambar">
                        <img className="img" alt="Gambar" src={gambar2_layanan} />
                    </div>

                    <div className="div-gambar">
                        <img className="gambar-2" alt="Gambar" src={gambar3_layanan} />

                        <img className="gambar-3" alt="Gambar" src={gambar4_layanan} />
                    </div>

                    <div className="gambar-wrapper">
                        <img className="gambar-4" alt="Gambar" src={gambar5_layanan} />
                    </div>
                </div>
                </div>
        </section>

        <section className="cont_main">
            <div className="brankas-kargo">
                <div className="judul">
                    <div className="text-wrapper">Brankas Kargo</div>

                    <p className="penyimpanan-aman-dan">
                    Penyimpanan Aman Dan Canggih Untuk Barang Anda, Dilengkapi Dengan
                    Sistem Monitoring Dan Pengendalian Suhu. Cocok Untuk Berbagai Jenis
                    Muatan Yang Memerlukan Penanganan Khusus Dan Keamanan Maksimal.
                    </p>
                </div>

                <div className="layanan-bar">
                    <img className="gambar" alt="Gambar" src={gambar6_layanan} />

                    <img className="gambar" alt="Gambar" src={gambar7_layanan} />

                    <img className="gambar" alt="Gambar" src={gambar8_layanan} />

                    <img className="gambar" alt="Gambar" src={gambar9_layanan} />

                    <img className="gambar" alt="Gambar" src={gambar10_layanan} />
                </div>
            </div>
        </section>

        <section className="cont_main">
            <div className="jadwal-pelayaran">
                <div className="judul">
                    <div className="text-wrapper">Jadwal Pelayaran</div>

                    <p className="pantau-jadwal">
                    Pantau Jadwal Keberangkatan Dan Kedatangan Kapal Secara Real-time.
                    Sistem Kami Membantu Anda Merencanakan Logistik Secara Efisien,
                    Mengurangi Risiko Keterlambatan Dan Mendukung Perencanaan Rantai
                    Pasok.
                    </p>
                </div>

                <div className="row-jadwal">
                    <div className="kapal">
                        <img className="box-gambar" alt="Gambar" src={box_gambar_1} />

                        <div className="title">
                            <div className="top">
                            <div className="jadwal-ever-given-g">
                                Jadwal Ever Given
                                
                                (G-Class ULCV)
                            </div>
                            </div>

                            <div className="deskripsi">
                                <p className="div">
                                    Kapal kelas ultra besar ini beroperasi pada rute Asia Eropa
                                    dengan jadwal tetap dan waktu tempuh yang kompetitif.
                                    Keberangkatan dan sandar mengikuti rotasi pelabuhan utama,
                                    mendukung volume muatan dalam jumlah besar.
                                </p>
                            </div>

                            {/* <button className="CTA"> */}
                            {/* <div className="button-CTA">
                                <div className="text-wrapper-2">Lihat</div>
                            </div> */}

                            <Link to="/penjadwalan" className="button-CTA link-universal">
                                <div className="text-wrapper-2">Lihat</div>
                                <img className="img" alt="Arrow right" src={ArrowRight} />
                            </Link>
                            {/* </button> */}
                        </div>
                    </div>

                    <div className="kapal">
                    {/* <div className="box-gambar-2" /> */}
                    <img className="box-gambar-2" alt="Gambar" src={box_gambar_2} />

                    <div className="title">
                        <div className="top">
                        <div className="jadwal-ever-given-g">
                            Jadwal Ever Given
                            
                            (G-Class ULCV)
                        </div>
                        </div>

                        <div className="deskripsi">
                        <p className="div">
                            Kapal kelas ultra besar ini beroperasi pada rute Asia Eropa
                            dengan jadwal tetap dan waktu tempuh yang kompetitif.
                            Keberangkatan dan sandar mengikuti rotasi pelabuhan utama,
                            mendukung volume muatan dalam jumlah besar.
                        </p>
                        </div>

                        <Link to="/penjadwalan" className="button-CTA link-universal">
                            <div className="text-wrapper-2">Lihat</div>
                            <img className="img" alt="Arrow right" src={ArrowRight} />
                        </Link>
                    </div>
                    </div>

                    <div className="kapal">
                    <img className="box-gambar" alt="Gambar" src={box_gambar_3} />

                    <div className="title">
                        <div className="top">
                            <div className="jadwal-ever-given-g">
                            Jadwal Axel Maersk
                            
                            (A-Class)
                        </div>
                
                        </div>

                        <div className="deskripsi">
                        <p className="div">
                            Axel Maersk melayani jalur lintas samudra dengan rotasi pelabuhan
                            yang stabil dan efisien. Jadwalnya dirancang untuk menjamin
                            konektivitas tinggi antara pelabuhan regional dan internasional
                            dengan waktu transit yang optimal.
                        </p>
                        </div>

                        <Link to="/penjadwalan" className="button-CTA link-universal">
                            <div className="text-wrapper-2">Lihat</div>
                            <img className="img" alt="Arrow right" src={ArrowRight} />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>

        </section>

        <section className="cont_main">
            <div className="pembersihan-keamanan">
                <div className="judul">
                    <div className="text-wrapper">Pembersihan Keamanan</div>

                    <p className="kami-menangani">
                    Kami Menangani Proses Bea Cukai Dan Dokumen Legalitas Dengan Cepat Dan
                    Akurat. Dengan Tim Ahli Di Bidang Kepabeanan, Barang Anda Akan
                    Melewati Pemeriksaan Dengan Mulus Dan Tanpa Hambatan.
                    </p>
                </div>

                <div className="gambar-pembersihan">
                    <img className="gambar" alt="Gambar" src={gambar11_layanan} />

                    <img className="gambar" alt="Gambar" src={gambar12_layanan} />
                </div>

                <div className="gambar-pembersihan">
                    <img className="img" alt="Gambar" src={gambar13_layanan} />

                    <img className="img" alt="Gambar" src={gambar14_layanan} />
                </div>
                </div>

        </section>
        
        <section className="cont_main">
            <div className="pengendalian-aliran">
                <div className="judul">
                    <div className="text-wrapper">Pengendalian Aliran</div>

                    <p className="manajemen-logistik">
                    Manajemen Logistik End-to-end Yang Mengatur Arus Barang Secara Cerdas,
                    Mulai Dari Pelabuhan Hingga Tujuan Akhir. Layanan Ini Memastikan Semua
                    Proses Berjalan Lancar, Terkoordinasi, Dan Transparan.
                    </p>
                </div>
 
                <div className="section-our-services">
                    
                    <div className="aliran">
                        <Link to="/transportasi" className="tombol link-universal">
                            <div className="div">Pelajari lebih lanjut</div>
                            <img className="img" alt="Arrow right" src={ArrowRight2} />
                        </Link>
                        {/* <div className="tombol">
                            <div className="div">Pelajari lebih lanjut</div>
                        </div> */}
                    </div>

                    <div className="aliran-2">
                        <Link to="/transportasi" className="tombol link-universal">
                            <div className="div">Pelajari lebih lanjut</div>
                            <img className="img" alt="Arrow right" src={ArrowRight2} />
                        </Link>
                    </div>
                </div>
                </div>

        </section>


    </>
    
  )
}

export default Layanan