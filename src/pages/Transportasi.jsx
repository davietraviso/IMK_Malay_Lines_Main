import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



// New Transport

import ArrowRight  from "../assets/vector/arrow-right.svg";
import info1 from "../assets/img/transportasi/armadainfo-1.jpg";
import info2 from "../assets/img/transportasi/armadainfo-2.jpg";
import info3 from "../assets/img/transportasi/armadainfo-3.jpg";




const Transportasi = () => {

      
  return (
    <>
        
        <section className="cont_main">
            
                <div className="header_transportasi">
                    <div className="judul">
                        <div className="frame">
                        <div className="heading_transportasi">
                            <div className="text-wrapper">Transportasi</div>
                        </div>

                        <div className="pertanyaan">
                            <div className="yes">
                            <div className="placeholder-data">
                                <p className="div">
                                Menyatukan dunia melalui layanan pengiriman laut yang
                                terintegrasi.
                                </p>
                            </div>
                            </div> 
                        </div>
                        </div>
                    </div>
                </div>

        </section>

        <section className="cont_main">

            <div className="armada">
                <div className="catchphrase">
                    <div className="judul">
                    <div className="heading">
                        <div className="text-wrapper">Handal Di Lautan</div>
                    </div>

                    <p className="laut-bukan">
                        Laut Bukan Penghalang, Tetapi Jalan Raya Bagi Usaha Kami Yang
                        Menghubungkan Dunia.
                    </p>
                    </div>

                    <div className="tombol">
                    <div className="baca-infografik-kami">Baca Infografik Kami &gt;</div>
                    </div>
                </div>

                <div className="deskripsi-dan-gambar">
                    <div className="row">
                        <div className="gambar" />

                        <div className="div" />

                        <div className="gambar-2" />
                    </div>

                    <div className="row-2">
                        <div className="gambar-3" />

                        <div className="gambar-4" />
                    </div>
                </div>

                <div className="list-kapal">
                    <div className="judul-armada">
                    <div className="text-wrapper-2">Armada</div>

                    <p className="p">
                        Kami memiliki armada kapal yang modern dan handal untuk mendukung
                        kegiatan pengangkutan barang antar pulau dan kawasan regional.
                        Armada ini dirancang untuk menjamin ketepatan waktu, efisiensi
                        operasional, serta keamanan dalam setiap pengiriman, sesuai dengan
                        standar industri maritim.
                    </p>
                    </div>

                    <div className="kapal">
                        <div className="counter">
                            {/* <div className="text-wrapper-3">Gambar Kapal 1</div> */}
                        </div>

                    <div className="counter-2">
                        <div className="text-wrapper-4">
                        Ever Given
                        <br />
                        (G-Class ULCV)
                        </div>

                        <p className="text-wrapper-5">
                        Ever Given adalah kapal peti kemas ultra besar (ULCV) kelas G yang
                        dioperasikan oleh Evergreen Marine. Dengan panjang sekitar 400
                        meter, kapal ini mampu membawa lebih dari 20.000 TEU.
                        </p>

                        <div className="content">
                        <div className="lihat-jadwal-kapal">&gt; Lihat Jadwal Kapal</div>
                        </div>
                    </div>
                    </div>

                    <div className="kapal">
                        <div className="counter-2">
                            <div className="text-wrapper-4">
                            Ever Given
                            <br />
                            (G-Class ULCV)
                            </div>

                            <p className="text-wrapper-5">
                            Ever Given adalah kapal peti kemas ultra besar (ULCV) kelas G yang
                            dioperasikan oleh Evergreen Marine. Dengan panjang sekitar 400
                            meter, kapal ini mampu membawa lebih dari 20.000 TEU.
                            </p>

                            <div className="content">
                            <div className="lihat-jadwal-kapal">&gt; Lihat Jadwal Kapal</div>
                            </div>
                        </div>

                        <div className="div-wrapper">
                            {/* <div className="text-wrapper-3">Gambar Kapal 1</div> */}
                        </div>
                    </div>

                    <div className="kapal">
                        <div className="counter-3">
                            {/* <div className="text-wrapper-3">Gambar Kapal 1</div> */}
                        </div>

                    <div className="counter-2">
                        <a
                        className="text-wrapper-4"
                        href="https://en.wikipedia.org/wiki/Axel_M%C3%A6rsk"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Axel M rsk
                        <br />
                        (A-Class)
                        </a>

                        <p className="text-wrapper-5">
                        Axel M rsk adalah salah satu kapal kontainer dari A-Class yang
                        dioperasikan oleh Maersk Line. Kapal ini memiliki kapasitas
                        sekitar 9.000 TEU dan dirancang untuk efisiensi tinggi dalam
                        pengangkutan kargo jarak jauh.
                        </p>

                        <div className="content">
                        <div className="lihat-jadwal-kapal">&gt; Lihat Jadwal Kapal</div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="artikel-transportasi">
                    <div className="text-wrapper-6">Info Lebih Lanjut</div>

                    <div className="row-3">
                    <div className="box">
                        <img className="info" alt="Info" src={info1} />

                        <div className="text-wrapper-7">Jenis Tipe Kargo</div>

                        <div className="tombol-2">
                        <div className="text-wrapper-8">Baca Selengkapnya</div>

                        <div className="vuesax-outline-arrow" />
                        </div>
                    </div>

                    <div className="box">
                        <img className="info" alt="Info" src={info2} />

                        <div className="text-wrapper-7">Penanganan Kargo</div>

                        <div className="tombol-2">
                        <div className="text-wrapper-8">Baca Selengkapnya</div>

                        <div className="vuesax-outline-arrow-2" />
                        </div>
                    </div>

                    <div className="box">
                        <img className="info" alt="Info" src={info3} />

                        <div className="text-wrapper-7">Layanan Keselamatan Kapal</div>

                        <div className="tombol-2">
                        <div className="text-wrapper-8">Baca Selengkapnya</div>

                        <img className="img img-arrow" alt="Facebook logo" src={ArrowRight} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>


        </section>

    </>
    
  )
}

export default Transportasi