import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";

import { useNavigate, Link } from "react-router-dom";

// New
import facebookLogo from "../assets/vector/facebook-logo.svg";
import instagramLogo from "../assets/vector/instagram-logo.svg";
import xLogo from "../assets/vector/x-logo.svg";
import ArrowRight  from "../assets/vector/arrow-right.svg";
import map from "../assets/img/landingpage/map.png";
import feedbackimg1 from "../assets/img/landingpage/feedbackimg1.jpg";
import feedbackimg2 from "../assets/img/landingpage/feedbackimg2.jpg";
import feedbackimg3 from "../assets/img/landingpage/feedbackimg3.jpg";
import vector from "../assets/vector/feedbackvector.svg";
import QuoteUp from "../assets/vector/quote-up.svg";

import cargoVector from "../assets/vector/cargo-vector.png";
import craneVector from "../assets/vector/crane-vector.png";
import leafVector from "../assets/vector/leaf-vector.png";
import priceVector from "../assets/vector/price-vector.png";

import artikel1 from "../assets/img/landingpage/img-artikel1.png";
import artikel2 from "../assets/img/landingpage/img-artikel2.png";
import artikel3 from "../assets/img/landingpage/img-artikel3.png";

import containerImg from "../assets/img/landingpage/container-img.png";
import shipImg from "../assets/img/landingpage/ship-img.png";

import arrowDown from "../assets/img/penjadwalan/arrow-down.svg";
import ikonGlobe from "../assets/img/penjadwalan/ikon-globe.svg";
import ikonKapal from "../assets/img/penjadwalan/ikon-kapal.svg";
import ikonTanggal from "../assets/img/penjadwalan/ikon-tanggal.svg";
import ikonSwap from "../assets/img/penjadwalan/ikon-swap.svg";


const LandingPage = () => {

    const [selectedTracking, setSelectedTracking] = useState("p2p");

    const handleTabClick = (option) => {
    setSelectedTracking(option);
    };

    // const [namaNegara, setNamaNegara] = useState('');



      
  return (
    <>
 
        <div className="welcome">
            <div className="cont_main_top d-flex justify-content-center align-items-center">
                <div className="landingpage">
                    <div className='landingpage-container d-flex align-items-center justify-content-center'>
                        <Row className='header-box d-flex align-items-center justify-content-center'>
                            <Col lg="6">
                                <h1 className='mb-3' >
                                    Malay Lines
                                </h1>
                                <h2 className='mb-3 font-landing' >
                                    Logistik & Pelayaran
                                </h2>
                                <div className="section_social_media">
                                    <img className="img" alt="Facebook logo" src={facebookLogo} />
                                    <img className="img" alt="Instagram logo" src={instagramLogo} />
                                    <img className="img" alt="X logo" src={xLogo} />
                                </div>
                            </Col>
                            <Col lg="5" className='text-end pt-lg-0 pt-5' >
                                {/* <img src={MainImage} alt="foto-gimi" /> */}
                                <div className="tracking">
                                                   
                                                    <div className="opsi">
                                                        <div
                                                            className={`div ${selectedTracking === "p2p" ? "active-tab" : ""}`}
                                                            onClick={() => handleTabClick("p2p")}
                                                        >
                                                            Point-to-Point
                                                        </div>
                                
                                                        <div
                                                            className={`div ${selectedTracking === "kapal" ? "active-tab" : ""}`}
                                                            onClick={() => handleTabClick("kapal")}
                                                        >
                                                            Jadwal Kapal
                                                        </div>
                                
                                                        <div
                                                            className={`div ${selectedTracking === "pelabuhan" ? "active-tab" : ""}`}
                                                            onClick={() => handleTabClick("pelabuhan")}
                                                        >
                                                            Jadwal Pelabuhan
                                                        </div>
                                                    </div>
                                
                                                    {selectedTracking === "p2p" && (
                                                        <div className="tracking">
                                                            <div className="row-pilihan-form">
                                                                <div className="div-2">
                                                                <div className="text-wrapper-2">Nama Pelabuhan Asal</div>
                                
                                                                <div className="search-bar">
                                                                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />
                                
                                                                    {/* <div className="text-wrapper-3"></div> */}
                                                                    <input
                                                                        type="text"
                                                                        className="text-wrapper-3"
                                                                        placeholder="Nama pelabuhan"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                                                </div>
                                                                </div>
                                
                                                                <div className="kolom-swap">
                                                                <div className="swap-button">
                                                                    <img className="ikon-swap" alt="Ikon swap" src={ikonSwap} />
                                                                </div>
                                                                </div>
                                
                                                                <div className="div-2">
                                                                    <div className="text-wrapper-2">Nama Pelabuhan Tujuan</div>
                                
                                                                    <div className="search-bar">
                                                                        <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />
                                
                                                                        {/* <div className="text-wrapper-3"></div> */}
                                                                        <input
                                                                        type="text"
                                                                        className="text-wrapper-3"
                                                                        placeholder="Nama pelabuhan"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                                                    </div>
                                                                </div>
                                                            </div>
                                
                                                            <div className="row-pilihan-bawah">
                                                                <div className="form-tanggal">
                                                                <div className="text-wrapper-2">Tanggal Keberangkatan</div>
                                
                                                                <div className="search-bar">
                                                                    <img
                                                                    className="ikon-tanggal"
                                                                    alt="Ikon tanggal"
                                                                    src={ikonTanggal}
                                                                    />
                                
                                                                    {/* <div className="text-wrapper-3">17/04/2025</div> */}
                                                                    <input
                                                                        type="text"
                                                                        className="text-wrapper-3"
                                                                        placeholder="17/04/2025"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                                                    
                                
                                                                    {/* <img className="arrow-down" alt="Arrow down" src={arrowDown} /> */}
                                                                </div>
                                                                </div>
                                
                                                                <div className="tombol-cari">
                                                                <div className="text-wrapper-5">Cari Jadwal</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                
                                                        {selectedTracking === "kapal" && (
                                                        <div className="tracking">
                                                            <div className="row-pilihan-form">
                                                                <div className="div-2">
                                                                <div className="text-wrapper-2">Nama Kapal Kargo</div>
                                
                                                                <div className="search-bar">
                                                                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />
                                
                                                                    <div className="text-wrapper-2"></div>
                                                                    <input
                                                                        type="text"
                                                                        className="text-wrapper-2"
                                                                        placeholder="Nama kapal"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                                                </div>
                                                                </div>
                                                            </div>
                                
                                                            <div className="row-pilihan-bawah">
                                                                <div className="form-tanggal">
                                                                <div className="text-wrapper-2">Tanggal Keberangkatan</div>
                                
                                                                <div className="search-bar">
                                                                    <img
                                                                    className="ikon-tanggal"
                                                                    alt="Ikon tanggal"
                                                                    src={ikonTanggal}
                                                                    />
                                
                                                                    {/* <div className="text-wrapper-3">17/04/2025</div> */}

                                                                    <input
                                                                        type="text"
                                                                        className="text-wrapper-2"
                                                                        placeholder="17/04/2025"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                
                                                                    {/* <img className="arrow-down" alt="Arrow down" src={arrowDown} /> */}
                                                                </div>
                                                                </div>
                                
                                                                <div className="tombol-cari">
                                                                <div className="text-wrapper-5">Cari Jadwal</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                
                                                        {selectedTracking === "pelabuhan" && (
                                                        <div className="tracking">
                                                            <div className="row-pilihan-form">
                                                                <div className="div-2">
                                                                <div className="text-wrapper-2">Nama Negara Tujuan</div>
                                
                                                                <div className="search-bar">
                                                                    <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />
                                
                                                                    <input
                                                                        type="text"
                                                                        className="text-wrapper-2"
                                                                        placeholder="Nama negara"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                                                </div>
                                                                </div>
                                                            </div>
                                
                                                            <div className="form-nama-kapal-2">
                                                                <div className="text-wrapper-2">Nama Pelabuhan Tujuan</div>
                                
                                                                <div className="search-bar">
                                                                <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                                                <input
                                                                        type="text"
                                                                        className="text-wrapper-2"
                                                                        placeholder="Nama pelabuhan"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                
                                                                
                                                                </div>
                                                            </div>
                                
                                                            <div className="row-pilihan-bawah">
                                                                <div className="form-tanggal">
                                                                <div className="text-wrapper-2">Tanggal Keberangkatan</div>

                                                                
                                
                                                                <div className="search-bar">
                                                                    <img
                                                                    className="ikon-tanggal"
                                                                    alt="Ikon tanggal"
                                                                    src={ikonTanggal}
                                                                    />

                                                                    <input
                                                                        type="text"
                                                                        className="text-wrapper-2"
                                                                        placeholder="17/04/2025"
                                                                        // value={namaNegara}
                                                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                                                    />
                                
                                                                    
                                
                                                                    {/* <img className="arrow-down" alt="Arrow down" src={arrowDown} /> */}
                                                                </div>
                                                                </div>
                                
                                                                <div className="tombol-cari">
                                                                <div className="text-wrapper-5">Cari Jadwal</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )}
                                
                                
                                
                                                
                                 </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </div>

        <section className="cont_main">
            {/* <Container className='penjelasan_container'> */}
                <div className="layanan-screen d-flex justify-content-center align-items-center">
                    <div className="frame">
                        <div className="div">INDEPENDEN DAN TERPERCAYA</div>

                        <p className="p">Menyediakan solusi untuk beragam permasalahan</p>
                    </div>

                    <p className="penjelasan">
                        Malay Lines adalah penyedia solusi logistik dan pelayaran yang handal,
                        menawarkan layanan pengiriman barang yang efisien dan aman, baik di
                        dalam negeri maupun internasional. Dengan pengalaman yang luas, kami
                        memastikan pengiriman tepat waktu dan layanan pelanggan yang responsif.
                    </p>

                    <div className="layanan-bar">
                        <div className="content-0">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Dry Cargo</div>
                        </div>
                        </div>

                        <div className="content-1">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Repair Dock</div>
                        </div>
                        </div>

                        <div className="content-2">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Trade Service</div>
                        </div>
                        </div>

                        <div className="content-3">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Cold Expedition</div>
                        </div>
                        </div>

                        <div className="content-4">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">Warehousing &amp; Management</div>
                        </div>
                        </div>
                    </div>

                    <div className="content-5">
                        <div className="text-wrapper-3">Lihat Layanan Lainnya</div>

                        <img className="img" alt="Facebook logo" src={ArrowRight} />
                    </div>

                    <Link to="/blog" className='content-5 link-universal'>
                        <div className="text-wrapper-3">Tekan di sini</div>
                    </Link>

                    <Link to="/layanan" className="content-5 link-universal">
                        <div className="text-wrapper-3">Lihat Layanan Lainnya</div>
                        <img className="img" alt="Arrow right" src={ArrowRight} />
                    </Link>

                    
                    
                    

                    </div>
            
            {/* </Container> */}

        </section>

        <section className="cont_main">
            {/* <Container className='penjelasan_container menyediakan'> */}
                <div className="world-map">
                    <img className="map" alt="Map" src={map} />

                    <div className="judul">
                        <div className="text-wrapper">TERSEBAR DAN TERKEMUKA</div>

                        <p className="div">Mendukung inovasi industri, merata secara global</p>
                    </div>

                    <div className="poin-poin d-flex justify-content-center align-items-center">
                        <div className="frame">
                            <div className="text-wrapper-2">53</div>

                            <div className="frame-3">
                                <div className="text-wrapper-3">Negara Mitra</div>

                                <p className="p">
                                Kami adalah perusahaan pengiriman logistik terkemuka yang
                                menghubungkan berbagai negara melalui jalur laut. Dengan
                                pengalaman yang luas, kami bangga memiliki 53 negara mitra di
                                seluruh dunia, menjadikan kami sebagai pemain utama dalam industri
                                pengiriman internasional.
                                </p>
                            </div>
                        </div>

                        <div className="frame">
                            <div className="text-wrapper-2">173</div>

                            <div className="frame-3">
                                <div className="text-wrapper-3">Kontrak Tahun 2024</div>

                                <p className="p">
                                Pada tahun 2024, kami berhasil menandatangani 173 kontrak
                                strategis yang memperkuat jaringan pengiriman kami, memberikan
                                layanan yang lebih efisien dan dapat diandalkan bagi pelanggan
                                kami di berbagai belahan dunia.
                                </p>
                            </div>
                        </div>


                        <div className="frame">
                            <div className="text-wrapper-2">12</div>

                            <div className="frame-3">
                                <div className="text-wrapper-3">Pelabuhan Transit</div>

                                <p className="p">
                                Kami juga memiliki 12 pelabuhan transit yang tersebar di berbagai
                                lokasi strategis, memastikan pengiriman yang cepat dan aman hingga
                                tujuan akhir. Dengan komitmen terhadap kualitas dan keberlanjutan,
                                kami terus berinovasi untuk memberikan solusi logistik terbaik
                                bagi semua kebutuhan Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            
            {/* </Container> */}

        </section>


        <section className="cont_main">
            {/* <Container className='penjelasan_container'> */}
            {/* <div className="penjelasan_container"> */}
                
            <div className="deskripsi-dan-gambar">
                <div className="deskripsi-maggo">
                    <div className="frame">
                        <div className="rectangle" />

                        <div className="div" />

                        <div className="rectangle-2" />
                    </div>

                    <div className="frame-2">
                        <p className="berpengalaman-dalam">
                            Berpengalaman dalam pelayaran, <br />
                            20 tahun+ dalam bidang kargo.
                        </p>

                        <p className="text-wrapper">
                            Dengan lebih dari 20 tahun pengalaman di bidang kargo, kami ahli
                            dalam pelayaran internasional dan pengiriman yang efisien. Kami
                            berkomitmen untuk memberikan layanan logistik yang aman, cepat, dan
                            andal bagi pelanggan kami.
                        </p>
                    </div>
                </div>

                <div className="deskripsi-maggo-2">
                    <div className="frame-3">
                        <div className="rectangle-3" />

                        <div className="rectangle-4" />

                        <div className="rectangle-5" />
                    </div>

                    <div className="frame-4">
                    <p className="p">
                        Memberikan harapan terbaik melalui kru yang handal.
                    </p>

                    <p className="text-wrapper-2">
                        Kami memberikan harapan terbaik melalui kru yang handal dan
                        berpengalaman, siap memastikan setiap pengiriman berjalan lancar dan
                        aman. Kepercayaan pelanggan adalah prioritas utama kami, dan kru
                        kami selalu siap memberikan layanan terbaik.
                    </p>
                    </div>
                </div>
            </div>
            
            
            {/* </div> */}
            
            {/* </Container> */}

        </section>

        <section className="cont_main">
            {/* <Container className="penjelasan_container"> */}
                <div className="feedback">
                    <div className="feedback-konsumer">
                        <div className="text-wrapper">Feedback Konsumer</div>

                        <p className="div">
                        Kami selalu berusaha memberikan layanan terbaik. Berikut beberapa
                        pendapat dari pelanggan kami:
                        </p>
                    </div>

                    <div className="frame">
                        <div className="card-testimoni">
                        <img className="vuesax-outline-quote" alt="Rectangle" src={QuoteUp} />                    
                        <p className="p">
                            Pengiriman tepat waktu dan pelayanan sangat profesional. Saya sangat
                            puas dengan kecepatan dan ketepatan layanan dari perusahaan ini.
                            Kru-nya juga responsif dan membantu!
                        </p>

                        <div className="content-nama">
                            <img className="rectangle" alt="Rectangle" src={feedbackimg1} />

                            <div className="content-judul">
                            <div className="text-wrapper-2">James Lebron</div>

                            <div className="text-wrapper-3">Manager PT. A</div>
                            </div>
                        </div>

                        <img className="vector" alt="Vector" src={vector} />
                        </div>

                        <div className="card-testimoni">
                        <img className="vuesax-outline-quote" alt="Rectangle" src={QuoteUp} />
                        <p className="p">
                            Sudah beberapa kali menggunakan jasa pengiriman ini dan hasilnya
                            selalu memuaskan. Jaringan internasionalnya luas dan sangat
                            memudahkan proses ekspor kami
                        </p>

                        <div className="content-nama">
                            <img className="rectangle" alt="Rectangle" src={feedbackimg2} />

                            <div className="content-judul">
                            <div className="text-wrapper-2">Alice Claire</div>

                            <div className="text-wrapper-3">Manager PT. B</div>
                            </div>
                        </div>

                        <img className="vector" alt="Vector" src={vector} />
                        </div>

                        <div className="card-testimoni">
                        <img className="vuesax-outline-quote" alt="Rectangle" src={QuoteUp} />
                        <p className="p">
                            Layanan logistik yang terpercaya! Mulai dari penjemputan hingga
                            pengiriman, semuanya berjalan lancar. Terima kasih atas kerja keras
                            tim yang luar biasa!
                        </p>

                        <div className="content-nama">
                            <img className="rectangle" alt="Rectangle" src={feedbackimg3} />

                            <div className="content-judul">
                            <div className="text-wrapper-2">Daren Prime</div>

                            <div className="text-wrapper-3">Manager PT. C</div>
                            </div>
                        </div>

                        <img className="vector" alt="Vector" src={vector} />
                        </div>
                    </div>

                    {/* <div className="pagenation">
                        <div className="ellipse" />

                        <div className="ellipse-2" />

                        <div className="ellipse-2" />

                        <div className="ellipse-2" />

                        <div className="ellipse-2" />
                    </div> */}
                </div>
            {/* </Container> */}

        </section>

        <section className="cont_main">
            <div className="komponen">
                <div className="konten">
                    <div className="KENAPA-MEMILIH-KAMI">
                    KENAPA MEMILIH
                    <br />
                    KAMI?
                    </div>

                    <div className="tags-navbar">
                    <div className="tags-2">
                        <img className="leaf-vector" alt="Leaf vector" src={leafVector} />

                        <div className="text-wrapper">Manajemen Ramah Lingkungan</div>
                    </div>

                    <div className="tags-2">
                        <img
                        className="price-vector"
                        alt="Price vector"
                        src={priceVector}
                        />

                        <div className="harga-kargo-murah">
                        Harga Kargo
                        <br />
                        Murah &amp; Bersahabat
                        </div>
                    </div>

                    <div className="tags2">
                        <img
                        className="crane-vector"
                        alt="Crane vector"
                        src={craneVector}
                        />

                        <div className="div">Pelabuhan Berbasis Teknologi</div>
                    </div>

                    <div className="tags-2">
                        <img
                        className="cargo-vector"
                        alt="Cargo vector"
                        src={cargoVector}
                        />

                        <div className="text-wrapper">Cakupan Asuransi Kargo</div>
                    </div>
                    </div>

                    {/* <div className="content">
                        <div className="text-wrapper-2">Lihat Keunggulan Kami</div>

                        <img className="img" alt="Facebook logo" src={ArrowRight} />
                    </div> */}
                    <Link to="/layanan" className="content link-universal">
                        <div className="text-wrapper-2">Lihat Keunggulan Kami</div>
                        <img className="img" alt="Arrow right" src={ArrowRight} />
                    </Link>
                </div>
            </div>

        </section>

        <section className="cont_main">
            {/* <Container className="penjelasan_container"> */}
                <div className="artikel">
                    <div className="text-artikel">
                        <div className="text-wrapper">Artikel dan Info Terkini</div>

                        {/* <div className="lihat-semuanya">Lihat Semuanya &gt;</div> */}
                        <Link to="/blog" className="link-universal lihat-semuanya">
                            <div className="lihat-semuanya">Lihat Semuanya &gt;</div>

                        </Link>
                    </div>

                    <div className="box-artikel">
                        <div className="box">
                            <img
                                className="pexels-tomfisk"
                                alt="Pexels tomfisk"
                                src={artikel1}
                            />

                            <p className="div">
                                Sektor Logistik Indonesia Diprediksi Tumbuh Pesat pada 2024
                            </p>

                            <p className="p">
                                Industri logistik nasional menunjukkan pertumbuhan signifikan berkat
                                peningkatan aktivitas perdagangan dan teknologi.
                            </p>

                            <div className="frame">
                                {/* <div className="text-wrapper-2">Baca Selengkapnya</div> */}
                                <Link to="/blog" className="text-wrapper-2 link-universal">
                                    <div className="text-wrapper-2">Lihat Info Lainnya {'>'}</div>
                                    <img className="img" alt="Arrow right" src={ArrowRight} />
                                </Link>

                                {/* <img className="img" alt="Facebook logo" src={ArrowRight} /> */}
                            </div>
                        </div>

                        <div className="box">
                            <img
                                className="pexels-tomfisk"
                                alt="Pexels tomfisk"
                                src={artikel2}
                            />

                            <p className="div">
                                Industri Logistik RI Diramal Tumbuh 12,53% pada 2025
                            </p>

                            <p className="p">
                                Proyeksi pertumbuhan positif logistik Indonesia, didorong oleh
                                distribusi yang semakin efisien dan permintaan pasar.
                            </p>

                            <div className="frame">
                                <Link to="/blog" className="text-wrapper-2 link-universal">
                                    <div className="text-wrapper-2">Lihat Info Lainnya {'>'}</div>
                                    <img className="img" alt="Arrow right" src={ArrowRight} />
                                </Link>
                            </div>
                        </div>

                        <div className="box">
                            <img
                                className="pexels-tomfisk"
                                alt="Pexels tomfisk"
                                src={artikel3}
                            />

                            <p className="div">
                                AS Berlakukan Tarif Baru untuk 86 Negara, Termasuk Indonesia
                            </p>

                            <p className="p">
                                Mulai April 2025, AS kenakan tarif impor baru hingga 32% untuk
                                produk dari Indonesia dan 85 negara lainnya.
                            </p>

                            <div className="frame">
                                <Link to="/blog" className="text-wrapper-2 link-universal">
                                    <div className="text-wrapper-2">Lihat Info Lainnya {'>'}</div>
                                    <img className="img" alt="Arrow right" src={ArrowRight} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            {/* </Container> */} 

        </section>

        <section className="cont_main">
            {/* <Container className="penjelasan_container"> */}
                <div className="berita-landingpage-wrapper">
                    <div className="berita-landingpage">
                        <div className="counter">
                            <div className="text-wrapper">Visi Kami</div>

                            <p className="div">
                            Menjadi solusi logistik laut global yang mengutamakan pelayanan
                            terbaik dengan harga yang terjangkau bagi semua kalangan.
                            </p>

                            <div className="content">
                                {/* <div className="text-wrapper-2">Lihat Visi Kami</div> */}
                                <Link to="/tentangkami" className="text-wrapper-2 link-universal">
                                    <div className="text-wrapper-2">Lihat Visi Kami</div>
                                    <img className="img" alt="Arrow right" src={ArrowRight} />
                                </Link>

                                {/* <img className="img" alt="Facebook logo" src={ArrowRight} /> */}
                            </div> 
                        </div>

                        <div className="counter">
                            <img className="container-img" alt="Container img" src={containerImg} />

                        </div>

                    </div>

                </div>

            {/* </Container> */}
        </section>

        <section className="cont_main misi2">
            {/* <Container className="penjelasan_container "> */}

                <div className="berita berita2">

                    <div className="counter">
                        <img className="container-img" alt="Container img" src={shipImg} />

                    </div>

                    <div className="counter">
                        <div className="text-wrapper-misi">Misi Kami</div>

                        <p className="div-misi">
                        Menyediakan layanan pengiriman laut yang aman, cepat, dan terjangkau
                        untuk mendukung kelancaran bisnis di pasar global.
                        </p>

                        <div className="content-misi">
                            {/* <div className="text-wrapper-2-misi">Lihat Misi Kami</div> */}
                            <Link to="/tentangkami" className="text-wrapper-2-misi link-universal">
                                    <div className="text-wrapper-2-misi">Lihat Misi Kami</div>
                                    <img className="img" alt="Arrow right" src={ArrowRight} />
                                </Link>

                            {/* <img className="img" alt="Facebook logo" src={ArrowRight} /> */}
                        </div> 
                    </div>                    

                </div>
            


            {/* </Container> */}
        </section>

        
                
        {/* <section className='cont_main'>
            <div className="penjelasan w-100 min-vh-100 ">
                <Container className='penjelasan_container'>
                    <div className="penjelasan_wrap">
                        <div className="penjelasan_title">
                            <div className="line_1"></div>
                            Pilih Maggo!
                        </div>
                        <div className="penjelasan_big">
                            <h1>
                                Mengapa Maggo Berbeda?
                            </h1>
                        </div>
                        <div className="penjelasan_sub">
                            <p>
                                Kami menyediakan cara mudah dan berkelanjutan untuk mengubah limbah organik <br />menjadi keuntungan, dengan menghubungkan Anda langsung kepada peternak maggot.
                            </p>
                        </div>
                        <div className="penjelasan_gambar">
                            <img src={Content1} alt="" />
                            <img src={Content2} alt="" />
                            <img src={Content3} alt="" />
                            <img src={Content4} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
            
        </section>

        <section>
            <div className="yuk">
                <Container className='yuk_container'>
                    <div className="yuk_wrap">
                        <Row className='d-flex align-items-center' style={{width:'100%'}}>
                            <Col className="d-flex align-items-center justify-content-center">
                                <div className="yuk_text  ">
                                    <h1>
                                        Yuk Kenal Lebih Dekat!
                                    </h1>
                                    <p>
                                        Platform kami menghubungkan masyrakat, petani, dan peternak maggot untuk pengelolaan sampah organik yang efisien serta memberikan imbalan atas pengumpulan sampah. Selain itu, kami menyediakan marketplace untuk produk berbasis maggot dan ruang tanya serta blog kepada pengguna seputar maggo.
                                    </p>
                                </div>
                            
                            </Col>
                            <Col>
                                <div className="yuk_gambar" style={{width:'100%'}}>
                                    <img src={yuk} alt=""  style={{width:'100%'}}/>
                                </div>                            
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>

        <section>
            <div className="benefit">
                <Container className='benefit_container'>
                    <div className="benefit_wrap">
                        <div className="benefit_title">
                            <div className="line_1"></div>
                            Benefit Maggo!
                        </div>
                        <div className="benefit_big">
                            <h1>
                                Jasa Apa Yang Kami Tawarkan?
                            </h1>
                        </div>
                        <div className="benefit_sub">
                            <p>
                            Kami menyediakan layanan pengumpulan limbah organik dan marketplace untuk produk maggot, memberikan nilai tambah baik dari limbah maupun produk yang dihasilkan.
                            </p>
                        </div>
                        <div className="benefit_jasa">
                            <div className="jasa_box">
                                <div className="jasa_box_wrap">
                                    <img src={trash} alt="" className='jasa_trash'/>
                                    <Row className='jasa_box_detail d-flex align-items-center'>
                                        <Col className='jasa_col'>
                                            <h1 className='mb-10' >
                                                Jual Sampah
                                            </h1>
                                            <p className='mb-10' >
                                                Hubungi kami dan petugas akan tiba dirumahmu segera
                                            </p>
                                            <button className="btn btn_lihat btn-primary d-flex align-items-center justify-content-center"> 
                                                <p style={{color:'#fff'}}>
                                                    Lihat Lebih Lanjut
                                                </p>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="jasa_box">
                                <div className="jasa_box_wrap">
                                    <img src={money} alt="" className='jasa_trash'/>
                                    <Row className='jasa_box_detail d-flex align-items-center'>
                                        <Col className='jasa_col'>
                                            <h1 className='mb-10' >
                                                Beli Produk
                                            </h1>
                                            <p className='mb-10' >
                                                Pilih berbagai produk Maggot yang dibutuhkan hanya dalam satu platform
                                            </p>
                                            <button className="btn btn_lihat btn-primary d-flex align-items-center justify-content-center"> 
                                                <p style={{color:'#fff'}}>
                                                    Lihat Lebih Lanjut
                                                </p>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        
        <section>
            <div className="testimoni">
                <Container className='testimoni_container'>
                    <div className="testimoni_wrap">
                        
                        <div className="testimoni_title">
                            <div className="line_2"></div>
                            Testimoni Maggo!
                        </div>
                        <div className="testimoni_big">
                            <h1>
                                Apa Kata Mereka?
                            </h1>
                        </div>
                        <div className="quote_wrap">
                            <Row>
                                <Col>
                                    <div className="quote_box">
                                        <div className="quote_box_wrap">
                                            <img src={quote} alt="" className='quote_icon'/>
                                            <p className='quote_box_p'> "Sejak menggunakan Maggo, pengelolaan sampah rumah tangga kami jadi lebih mudah. 
                                                Tidak hanya membantu lingkungan, kami juga merasa senang karena limbah yang 
                                                dihasilkan keluarga bisa dimanfaatkan untuk sesuatu yang bermanfaat."</p>
                                            <div className="quote_nama">    
                                                <img src={quote1} alt="" />
                                                <div className="quote_nama_wrap">
                                                    <h4>Mariana Hartanti</h4>
                                                    <p>Ibu Rumah Tangga</p>
                                                </div>
                                            </div>
                                        </div>     
                                    </div>
                                </Col>
                                <Col>
                                    <div className="quote_box">
                                        <div className="quote_box_wrap">
                                            <img src={quote} alt="" className='quote_icon'/>
                                            <p className='quote_box_p'> "Saya tidak lagi kesulitan mendapatkan limbah organik berkualitas untuk budidaya maggot. 
                                                Maggo memastikan pasokan limbah saya selalu terjaga, sehingga bisnis saya semakin berkembang."</p>
                                            <div className="quote_nama">    
                                                <img src={quote2} alt="" />
                                                <div className="quote_nama_wrap">
                                                    <h4>Budi Gunawan</h4>
                                                    <p>Peternak Maggot</p>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                
                                </Col>
                                <Col>
                                    <img src={gimi2} alt="gimi_testimoni" className='testimoni_img' />
                                
                                </Col>
                            </Row>
                            

                        </div>
                    </div>
                </Container>
            </div>

        </section>
        <section>
            <Container className="d-flex align-content-center justify-content-center">
                <SDG />
            </Container>
        </section> */}
    </>
    
  )
}

export default LandingPage