import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


// New Penjadwalan
import arrowDown from "../assets/img/penjadwalan/arrow-down.svg";
import ikonCari from "../assets/img/penjadwalan/ikon-cari.svg";
import ikonCari2 from "../assets/img/penjadwalan/ikon-cari2.svg";
import ikonGlobe from "../assets/img/penjadwalan/ikon-globe.svg"; 
import ikonKapal from "../assets/img/penjadwalan/ikon-kapal.svg";
import ikonTanggal from "../assets/img/penjadwalan/ikon-tanggal.svg";
import linePort from "../assets/img/penjadwalan/line-port.svg";
import linePortDash from "../assets/img/penjadwalan/line-port-dash.svg";
import swapButton from "../assets/img/penjadwalan/ikon-swap.svg";
import ikonTimer from "../assets/img/penjadwalan/Ikon-Timer.svg";
import arrowSelect from "../assets/img/penjadwalan/arrow-select.svg";
import map2 from "../assets/img/penjadwalan/world-map.svg";
import ikonGps from "../assets/img/penjadwalan/ikon-gps.svg";
import timer from "../assets/img/penjadwalan/timer.svg";


const Penjadwalan = () => {

    const [selectedOption, setSelectedOption] = useState("p2p"); // default to p2p
    const [showDetail, setShowDetail] = useState(false);

    const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowDetail(false); // reset detail when switching
    };

    const handleCariJadwal = () => {
    setShowDetail(true);
    };


    // P2P
    
    const [showDetail1, setShowDetail1] = useState(false);

    const handleToggle1 = () => {
        setShowDetail1(!showDetail1);
    };

    // Jadwal Kapal

    const [showDetail2, setShowDetail2] = useState(false);

    const handleToggle2 = () => {
        setShowDetail2(!showDetail2);
    };


    // Jadwal Pelabuhan

    const [showDetail3, setShowDetail3] = useState(false);

    const handleToggle3 = () => {
        setShowDetail3(!showDetail3);
    };

      
  return (
    <>

        <section className="cont_main">
            <div className="top-jadwal">
                <div className="products-jadwal">
                    <div className="text-wrapper">Penjadwalan</div>

                    <p className="div-jadwal">
                        Telusuri rute kami yang luas untuk menemukan jadwal yang sesuai dengan
                        keperluan Anda.
                    </p>
                </div>
            </div>

        </section>

        <section className="cont_main">
            <div className="form-penjadwalan">

                {/* P2P Whole */}

                {/* Point of safety if I fucked up */}
                

                <div className="tabel-form">
                    <div className="opsi">
                        <div
                            className={`text-wrapper-2 ${selectedOption === "p2p" ? "text-wrapper-p2p" : ""}`}
                            onClick={() => handleOptionChange("p2p")}
                        >
                            Point-to-Point
                        </div>
                        <div
                            className={`text-wrapper-2 ${selectedOption === "kapal" ? "text-wrapper-p2p" : ""}`}
                            onClick={() => handleOptionChange("kapal")}
                        >
                            Jadwal Kapal
                        </div>
                        <div
                            className={`text-wrapper-2 ${selectedOption === "pelabuhan" ? "text-wrapper-p2p" : ""}`}
                            onClick={() => handleOptionChange("pelabuhan")}
                        >
                            Jadwal Pelabuhan
                        </div>
                    </div>



                </div>

                    {selectedOption === "p2p" && (
                    <>
                        {/* FORM P2P */}
                        <div className="tabel-form">
                        
                            <div className="row-pilihan-form">
                                <div className="div-2-p2p">
                                <div className="div-3-p2p">
                                    
                                    <div className="text-wrapper-5">Nama Pelabuhan / Negara Asal</div>

                                    <div className="search-bar-p2p">
                                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                    {/* <p className="text-wrapper-3 m-0">
                                        
                                    </p> */}
                                    <input
                                        type="text"
                                        className="text-wrapper-3"
                                        placeholder="Masukkan nama pelabuhan / negara asal"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />

                                    <img className="ikon-cari" alt="Ikon cari" src={ikonCari} />
                                    </div>
                                </div>

                                <div className="row-asal">
                                    <div className="tombol-cari">
                                        <div className="text-wrapper-4">
                                            TAMPA, AMERIKA SERIKAT (USTPA)
                                        </div>

                                        <div className="text-wrapper-4">X</div>
                                    </div>

                                    <div className="tombol-cari">
                                        <div className="text-wrapper-4">
                                            TACOMA, AMERIKA SERIKAT (USTIW)
                                        </div>

                                        <div className="text-wrapper-4">X</div>
                                    </div>
                                </div>
                                </div>

                                <div className="kolom-swap">
                                <img className="swap-button" alt="Swap button" src={swapButton} />
                                </div>

                                <div className="div-2-p2p">
                                <div className="div-3-p2p">
                                    <div className="text-wrapper-5">Tanggal Keberangkatan</div>

                                    <div className="search-bar-p2p">
                                        <img className="ikon-globe" alt="Ikon globe" src={ikonGlobe} />

                                        <p className="text-wrapper-6 m-0">
                                            
                                        </p>
                                        <input
                                            type="text"
                                            className="text-wrapper-3"
                                            placeholder="Masukkan nama pelabuhan / negara tujuan"
                                            // value={namaNegara}
                                            // onChange={(e) => setNamaNegara(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row-asal">
                                    <div className="tombol-cari">
                                        <div className="text-wrapper-4">
                                            THAMESPORT, UNITED KINGDOM (GBTHP)
                                        </div>

                                        <div className="text-wrapper-4">X</div>
                                    </div>

                                    <div className="tombol-cari">
                                        <div className="text-wrapper-4">
                                            TEESPORT, UNITED KINGDOM (GBTEE)
                                        </div>

                                        <div className="text-wrapper-4">X</div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="form-tanggal">
                                <div className="text-wrapper-5">Tanggal Keberangkatan</div>

                                <div className="search-bar-p2p">
                                <img className="ikon-tanggal" alt="Ikon tanggal" src={ikonTanggal} />

                                {/* <div className="text-wrapper-7"></div> */}
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

                            <button className="div-wrapper-p2p text-wrapper-4" onClick={handleToggle1}>
                                Cari Jadwal
                            </button>



                        </div>

                        {/* P2P Detail */}

                        {showDetail1 && (
                        
                            <div className="tabel-detail">
                                <div className="jumlah-hasil">
                                    <div className="text-wrapper-12">
                                        5 Hasil
                                    </div>
                                </div>

                                <div className="detail-point">
                                    <div className="top-detail">
                                        <p className="div">
                                            <span className="text-wrapper">
                                            Port of Loading
                                            <br />
                                            </span>

                                            <span className="span">(POL)</span>
                                        </p>

                                        <p className="port-of-discharging">
                                            <span className="text-wrapper-2">
                                            Port of Discharging
                                            <br />
                                            </span>

                                            <span className="span">(POD)</span>
                                        </p>

                                        <p className="div">
                                            <span className="text-wrapper">
                                            Waktu Transit
                                            <br />
                                            </span>

                                            <span className="span">(Tercepat)</span>
                                        </p>

                                        <p className="div">
                                            <span className="text-wrapper">
                                            Keberangkatan
                                            <br />
                                            </span>

                                            <span className="span">(Tanggal)</span>
                                        </p>

                                        <div className="text-wrapper-3">Armada</div>

                                        <div className="text-wrapper-3">Tipe Rute</div>

                                        <div className="text-wrapper-4">Rute</div>
                                        </div>

                                    <div className="detail-port">
                                        <div className="pol">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TAMPA
                                                <br />
                                            </span>

                                            <span className="span">(USTPA)</span>
                                            </p>
                                        </div>

                                        <div className="pod">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                THAMESPORT
                                                <br />
                                            </span>

                                            <span className="text-wrapper-2">(GBTHP)</span>
                                            </p>
                                        </div>

                                        <div className="waktu-tercepat">
                                            <img className="ikon-timer" alt="Ikon timer" src={ikonTimer} />

                                            <div className="text-wrapper-3">12 Hari</div>
                                        </div>

                                        <div className="tanggal">
                                            <div className="senin-juni">
                                            Senin
                                            <br />9 Juni 2025
                                            </div>
                                        </div>

                                        <div className="waktu-tercepat-2">
                                            <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                            <div className="text-wrapper-3">Axel M rsk</div>
                                        </div>

                                        <div className="tipe-rute">
                                            <div className="text-wrapper-4">DIRECT</div>
                                        </div>

                                        <img className="arrow-select" alt="Arrow select" src={arrowSelect} />
                                        </div>

                                        {/*  */}

                                    <div className="detail-port">
                                        <div className="pol">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TAMPA
                                                <br />
                                            </span>

                                            <span className="span">(USTPA)</span>
                                            </p>
                                        </div>

                                        <div className="pod">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TEESPORT
                                                <br />
                                            </span>

                                            <span className="text-wrapper-2">(GBTEE)</span>
                                            </p>
                                        </div>

                                        <div className="waktu-tercepat">
                                            <img className="ikon-timer" alt="Ikon timer" src={ikonTimer} />

                                            <div className="text-wrapper-3">12 Hari</div>
                                        </div>

                                        <div className="tanggal">
                                            <div className="senin-juni">
                                            Senin
                                            <br />9 Juni 2025
                                            </div>
                                        </div>

                                        <div className="waktu-tercepat-2">
                                            <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                            <div className="text-wrapper-3">Axel M rsk</div>
                                        </div>

                                        <div className="tipe-rute">
                                            <div className="text-wrapper-4">DIRECT</div>
                                        </div>

                                        <img className="arrow-select" alt="Arrow select" src={arrowSelect} />
                                        </div>

                                    {/*  */}

                                    <div className="detail-port">
                                        <div className="pol">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TAMPA
                                                <br />
                                            </span>

                                            <span className="span">(USTPA)</span>
                                            </p>
                                        </div>

                                        <div className="pod">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                THAMESPORT
                                                <br />
                                            </span>

                                            <span className="text-wrapper-2">(GBTHP)</span>
                                            </p>
                                        </div>

                                        <div className="waktu-tercepat">
                                            <img className="ikon-timer" alt="Ikon timer" src={ikonTimer} />

                                            <div className="text-wrapper-3">12 Hari</div>
                                        </div>

                                        <div className="tanggal">
                                            <div className="senin-juni">
                                            Senin
                                            <br />9 Juni 2025
                                            </div>
                                        </div>

                                        <div className="waktu-tercepat-2">
                                            <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                            <div className="text-wrapper-3">Axel M rsk</div>
                                        </div>

                                        <div className="tipe-rute">
                                            <div className="text-wrapper-4">DIRECT</div>
                                        </div>

                                        <img className="arrow-select" alt="Arrow select" src={arrowSelect} />
                                        </div>
                                    
                                    {/*  */}

                                    <div className="detail-port">
                                        <div className="pol">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TACOMA
                                                <br />
                                            </span>

                                            <span className="span">(USTIW)</span>
                                            </p>
                                        </div>

                                        <div className="pod">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                THAMESPORT
                                                <br />
                                            </span>

                                            <span className="text-wrapper-2">(GBTHP)</span>
                                            </p>
                                        </div>

                                        <div className="waktu-tercepat">
                                            <img className="ikon-timer" alt="Ikon timer" src={ikonTimer} />

                                            <div className="text-wrapper-3">12 Hari</div>
                                        </div>

                                        <div className="tanggal">
                                            <div className="senin-juni">
                                            Senin
                                            <br />9 Juni 2025
                                            </div>
                                        </div>

                                        <div className="waktu-tercepat-2">
                                            <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                            <div className="text-wrapper-3">Axel M rsk</div>
                                        </div>

                                        <div className="tipe-rute">
                                            <div className="text-wrapper-4">DIRECT</div>
                                        </div>

                                        <img className="arrow-select" alt="Arrow select" src={arrowSelect} />
                                        </div>

                                    {/*  */}

                                    <div className="detail-port">
                                        <div className="pol">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TACOMA
                                                <br />
                                            </span>

                                            <span className="span">(USTIW)</span>
                                            </p>
                                        </div>

                                        <div className="pod">
                                            <p className="div">
                                            <span className="text-wrapper">
                                                TEESPORT
                                                <br />
                                            </span>

                                            <span className="text-wrapper-2">(GBTEE)</span>
                                            </p>
                                        </div>

                                        <div className="waktu-tercepat">
                                            <img className="ikon-timer" alt="Ikon timer" src={ikonTimer} />

                                            <div className="text-wrapper-3">12 Hari</div>
                                        </div>

                                        <div className="tanggal">
                                            <div className="senin-juni">
                                            Senin
                                            <br />9 Juni 2025
                                            </div>
                                        </div>

                                        <div className="waktu-tercepat-2">
                                            <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                            <div className="text-wrapper-3">Axel M rsk</div>
                                        </div>

                                        <div className="tipe-rute">
                                            <div className="text-wrapper-4">DIRECT</div>
                                        </div>

                                        <img className="arrow-select" alt="Arrow select" src={arrowSelect} />
                                        </div>
                                    



                                </div>

                            </div>

                        )}
                    </>
                    )}

                    {selectedOption === "kapal" && (
                    <>
                        {/* FORM KAPAL */}
                        {/* Jadwal Kapal Whole */}

                        <div className="tabel-form">
                            

                            <div className="row-pilihan-form">
                                {/* <div className="div-2-p2p"> */}
                                <div className="div-3-p2p">
                                    
                                    <div className="text-wrapper-5">Nama Pelabuhan / Negara Asal</div>

                                    <div className="search-bar-p2p">
                                    <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                    {/* <p className="text-wrapper-3 m-0">
                                        Masukkan nama pelabuhan / negara asal
                                    </p> */}
                                    <input
                                        type="text"
                                        className="text-wrapper-3"
                                        placeholder="Masukkan nama pelabuhan / negara tujuan"
                                        // value={namaNegara}
                                        // onChange={(e) => setNamaNegara(e.target.value)}
                                    />

                                    <img className="ikon-cari" alt="Ikon cari" src={ikonCari} />
                                    </div>
                                </div>

                                {/* </div> */}

                            </div>

                            <div className="form-tanggal">
                                <div className="text-wrapper-5">Tanggal Keberangkatan</div>

                                <div className="search-bar-p2p">
                                <img className="ikon-tanggal" alt="Ikon tanggal" src={ikonTanggal} />

                                {/* <div className="text-wrapper-7"></div> */}
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

                            <button className="div-wrapper-p2p text-wrapper-4" onClick={handleToggle2}>
                                Cari Jadwal
                            </button>
                        </div>

                        
                        {/* Jadwal Kapal Detail */}

                        {showDetail2 && ( 

                            <div className="tabel-detail">
                                <div className="world-map-2">
                                    <div className="nama-peta">
                                        <div className="nama-kapal">
                                        <div className="text-wrapper">Ever Given</div>

                                        <img className="ikon" alt="Ikon" src={ikonCari2} />
                                        </div>

                                        <p className="hasil-pencarian">
                                        <span className="span">Hasil pencarian untuk kapal: </span>

                                        <span className="text-wrapper-2">Ever Given</span>
                                        </p>
                                    </div>

                                    <img className="map" alt="Map" src={map2} />
                                </div>

                                <div className="tabel-detail-2">
                                
                                    <div className="top-detail-2">
                                    <p className="div">
                                        <span className="text-wrapper">
                                        TEU (Nominal)
                                        <br />
                                        </span>

                                        <span className="span">2579</span>
                                    </p>

                                    <p className="tahun-bangun">
                                        <span className="text-wrapper">
                                        Tahun Bangun
                                        <br />
                                        </span>

                                        <span className="span">2023</span>
                                    </p>

                                    <p className="div">
                                        <span className="text-wrapper">
                                        Angka IMO
                                        <br />
                                        </span>

                                        <span className="span">7339578</span>
                                    </p>

                                    <p className="div">
                                        <span className="text-wrapper">
                                        Panggilan
                                        <br />
                                        </span>

                                        <span className="span">V14T59</span>
                                    </p>

                                    <p className="div">
                                        <span className="text-wrapper">
                                        Kelas
                                        <br />
                                        </span>

                                        <span className="span">G-Class</span>
                                    </p>

                                    <p className="div">
                                        <span className="text-wrapper">
                                        Bendera
                                        <br />
                                        </span>

                                        <span className="span">Panama (PA)</span>
                                    </p>
                                    </div>


                                    
                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            Amsterdam
                                            <br />
                                            </span>

                                            <span className="span">Port of Amsterdam</span>
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Kedatangan - 712E
                                            <br />
                                            18 April 2025 18:30
                                        </p>
                                    </div>


                                    <img className="line-port" alt="Line port" src={linePort} />

                                    
                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            {/* Amsterdam */}
                                            <br />
                                            </span>

                                            {/* <span className="span">Port of Amsterdam</span> */}
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Keberangkatan - 712E
                                            <br />
                                            19 April 2025 07:30
                                        </p>
                                    </div>

                                    <img className="line-port-dash" alt="Line port dash" src={linePortDash} />

                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            Lisbon
                                            <br />
                                            </span>

                                            <span className="span">Port of Lisboa</span>
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Kedatangan - 712E
                                            <br />
                                            19 April 2025 12:30
                                        </p>
                                    </div>


                                    <img className="line-port" alt="Line port" src={linePort} />

                                    
                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            {/* Amsterdam */}
                                            <br />
                                            </span>

                                            {/* <span className="span">Port of Amsterdam</span> */}
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Keberangkatan - 712E
                                            <br />
                                            19 April 2025 22:00
                                        </p>
                                    </div>

                                    <img className="line-port-dash" alt="Line port dash" src={linePortDash} />

                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            Panama
                                            <br />
                                            </span>

                                            <span className="span">Port of Manzanillo</span>
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Kedatangan - 712E
                                            <br />
                                            21 April 2025 03:30
                                        </p>
                                    </div>


                                    <img className="line-port" alt="Line port" src={linePort} />

                                    
                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            {/* Amsterdam */}
                                            <br />
                                            </span>

                                            {/* <span className="span">Port of Amsterdam</span> */}
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Keberangkatan - 712E
                                            <br />
                                            22 April 2025 07:00
                                        </p>
                                    </div>

                                    <img className="line-port-dash" alt="Line port dash" src={linePortDash} />

                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            Davao
                                            <br />
                                            </span>

                                            <span className="span">Davao International Container Terminal</span>
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Kedatangan - 712E
                                            <br />
                                            24 April 2025 23:30
                                        </p>
                                    </div>


                                    <img className="line-port" alt="Line port" src={linePort} />

                                    
                                    <div className="detail-port-2">
                                        <p className="amsterdam-port-of">
                                            <span className="text-wrapper">
                                            {/* Amsterdam */}
                                            <br />
                                            </span>

                                            {/* <span className="span">Port of Amsterdam</span> */}
                                        </p>

                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                        <p className="kedatangan">
                                            Keberangkatan - 712E
                                            <br />
                                            25 April 2025 08:00
                                        </p>
                                    </div>

                                    {/* <img className="line-port-dash" alt="Line port dash" src={linePortDash} /> */}


                                </div>

                            </div>

                        )}
                    </>
                    )}

                    {selectedOption === "pelabuhan" && (
                    <>
                        {/* FORM PELABUHAN */}
                        
                        {/* Jadwal Pelabuhan Whole */}

                        <div className="tabel-form">


                            {/* <div className="row-pilihan-form"> */}
                                {/* <div className="div-2-p2p"> */}
                            

                            <div className="div-3-p2p">
                                
                                <div className="text-wrapper-5">Nama Negara Asal</div>

                                <div className="search-bar-p2p">
                                <img className="ikon-kapal" alt="Ikon kapal" src={ikonGlobe} />

                                {/* <p className="text-wrapper-3 m-0">
                                    Masukkan nama pelabuhan
                                </p> */}

                                <input
                                            type="text"
                                            className="text-wrapper-3"
                                            placeholder="Masukkan nama negara "
                                            // value={namaNegara}
                                            // onChange={(e) => setNamaNegara(e.target.value)}
                                        />

                                <img className="ikon-cari" alt="Ikon cari" src={ikonCari} />
                                </div>
                            </div>

                            <div className="div-3-p2p">
                                
                                <div className="text-wrapper-5">Nama Pelabuhan</div>

                                <div className="search-bar-p2p">
                                <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />

                                {/* <p className="text-wrapper-3 m-0">
                                    Masukkan nama pelabuhan
                                </p> */}

                                <input
                                            type="text"
                                            className="text-wrapper-3"
                                            placeholder="Masukkan nama pelabuhan "
                                            // value={namaNegara}
                                            // onChange={(e) => setNamaNegara(e.target.value)}
                                        />

                                <img className="ikon-cari" alt="Ikon cari" src={ikonCari} />
                                </div>
                            </div>

                                {/* </div> */}

                            {/* </div> */}

                            <div className="form-tanggal">
                                <div className="text-wrapper-5">Tanggal Keberangkatan</div>

                                <div className="search-bar-p2p">
                                <img className="ikon-tanggal" alt="Ikon tanggal" src={ikonTanggal} />

                                <div className="text-wrapper-7">17/04/2025</div>

                                <img className="arrow-down" alt="Arrow down" src={arrowDown} />
                                </div>
                            </div>

                            <button className="div-wrapper-p2p text-wrapper-4" onClick={handleToggle3}>
                                Cari Jadwal
                            </button>
                        </div>

                        {/* Jadwal Pelabuhan Detail */}
                        
                        {showDetail3 && ( 
                        
                            <div className="detail">
                        
                                <div className="detail-hasil">
                                    <p className="hasil-pencarian">
                                        <span className="text-wrapper">Hasil pencarian untuk pelabuhan: </span>
                        
                                        <span className="span">Baltimore, Amerika Serikat</span>
                                    </p>
                                </div>
                        
                                <div className="tabel-detail-3">
                                    <div className="top-detail">
                                        <div className="text-wrapper">Armada</div>
                        
                                        <div className="terminal">
                                        <div className="div">
                                            Terminal <br />
                                            Pelabuhan
                                        </div>
                                        </div>
                        
                                        <div className="tanggal">
                                        <div className="kedatangan-tanggal">
                                            Kedatangan
                                            <br />
                                            (Tanggal)
                                        </div>
                                        </div>
                        
                                        <div className="div-2">
                                        <p className="keberangkatan">
                                            <span className="span">
                                            Keberangkatan
                                            <br />
                                            </span>
                        
                                            <span className="text-wrapper-2">(Tanggal)</span>
                                        </p>
                                        </div>
                        
                                        <div className="text-wrapper">Tipe Rute</div>
                        
                                        <div className="text-wrapper-3">Rute</div>
                                    </div>
                        
                                    <div className="detail-port-3">
                                        <div className="waktu-tercepat">
                                        <img className="ikon-kapal" alt="Ikon kapal" src={ikonKapal} />
                        
                                        <div className="text-wrapper-4">Axel M rsk</div>
                                        </div>
                        
                                        <div className="div-2">
                                        <img className="ikon-gps" alt="Ikon gps" src={ikonGps} />
                        
                                        <p className="baltimore-seagirt">
                                            Baltimore - Seagirt <br />
                                            Terminal C324
                                        </p>
                                        </div>
                        
                                        <div className="senin-juni-wrapper">
                                        <div className="div">
                                            Senin
                                            <br />9 Juni 2025
                                        </div>
                                        </div>
                        
                                        <div className="senin-juni-wrapper">
                                        <div className="div">
                                            Senin
                                            <br />
                                            16 Juni 2025
                                        </div>
                                        </div>
                        
                                        <div className="tipe-rute">
                                        <div className="text-wrapper-5">DIRECT</div>
                                        </div>
                        
                                        <img className="arrow-select" alt="Arrow select" src={arrowSelect} />
                                    </div>
                        
                                    <div className="detail-port-4">
                                        <div className="div-3">
                                        <img className="timer" alt="Timer" src={timer} />
                        
                                        <div className="text-wrapper-6">Deadline</div>
                                        </div>
                        
                                        <div className="frame">
                                        <div className="div-3">
                                            <p className="p">
                                            <span className="text-wrapper-7">
                                                Kontainer check-in
                                                <br />
                                            </span>
                        
                                            <span className="text-wrapper-8">5 Juni 2025</span>
                                            </p>
                                        </div>
                        
                                        <div className="div-3">
                                            <p className="p">
                                            <span className="text-wrapper-7">
                                                Instruksi pelayaran
                                                <br />
                                            </span>
                        
                                            <span className="text-wrapper-8">4 Juni 2025</span>
                                            </p>
                                        </div>
                        
                                        <div className="instruksi-pelayaran-wrapper">
                                            <p className="p">
                                            <span className="text-wrapper-7">
                                                Instruksi pelayaran <br />- AMS
                                                <br />
                                            </span>
                        
                                            <span className="text-wrapper-8">4 Juni 2025</span>
                                            </p>
                                        </div>
                        
                                        <div className="div-3">
                                            <p className="VGM-n-a">
                                            <span className="text-wrapper-7">VGM</span>
                        
                                            <span className="text-wrapper-8">
                                                {" "}
                                                -<br />
                                                N/A
                                            </span>
                                            </p>
                                        </div>
                        
                                        <div className="div-3">
                                            <p className="VGM-n-a">
                                            <span className="text-wrapper-7">Barang Berbahaya</span>
                        
                                            <span className="text-wrapper-8">
                                                {" "}
                                                -<br />
                                                N/A
                                            </span>
                                            </p>
                                        </div>
                        
                                        
                                        
                                        </div>
                                    </div>
                                    </div> 
                        
                        
                            </div>
                        )}

                    </>
                    )}
                
            </div>
        </section>


    </>
    
  )
}

export default Penjadwalan