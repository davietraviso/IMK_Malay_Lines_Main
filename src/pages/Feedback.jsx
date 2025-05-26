import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
// import MainImage from '../assets/img/hero_page1.png'
import { useNavigate } from "react-router-dom";

// New Feedback
import foto1 from "../assets/img/feedback/foto-1.jpg";
import foto2 from "../assets/img/feedback/foto-2.jpg";
import foto3 from "../assets/img/feedback/foto-3.jpg";
import pagenation from "../assets/vector/pagenation.svg";
import quote from "../assets/vector//quote.svg";
import ratingBintang from "../assets/vector//rating-bintang.svg";
import star from "../assets/vector//star.svg";





const Feedback = () => {

  return (
    <>
        
        <section className="cont_main">
            <div className="feedback-top">
                <div className="products">
                    <div className="text-wrapper">It's Feedback Time</div>
                </div>
            </div>
        </section>

        <section className="cont_main">
            <div className="form-feedback">
                <div className="form">
                    <div className="konten">
                    <div className="title">
                        <div className="text-wrapper">Form Pertanyaan</div>
                    </div>

                    <div className="CTA-wrapper">
                        <div className="CTA">
                        <div className="div">
                            <div className="radio-button"/>
                            <div className="placeholder-data">
                            <div className="text-wrapper-2">
                                Masalah pada pengiriman barang
                            </div>
                            </div>
                        </div>

                        <div className="div-2">
                            <div className="radio-button"/>
                            <div className="placeholder-data">
                            <div className="text-wrapper-2">Masalah pada website</div>
                            </div>
                        </div>

                        <div className="div">
                            <div className="radio-button"/>
                            <div className="placeholder-data">
                            <div className="text-wrapper-2">Lainnya</div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="search-bar-wrapper">
                        <div className="search-bar">
                        <p className="p">Masukkan feedback anda di sini...</p>
                        </div>
                    </div>

                    <div className="div-wrapper">
                        <div className="placeholder-data-2">
                        <div className="div-3">
                            <div className="div-2">
                            <div className="placeholder-data">
                                <p className="text-wrapper-2">Rating (1 - 5 Bintang)</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="rating-bintang2">

                        <img
                            className="rating-bintang"
                            alt="Rating bintang"
                            src={ratingBintang}
                        />
                    </div>


                    <div className="div-wrapper">
                        <div className="div-2">
                        <div className="box" />

                        <p className="text-wrapper-3">
                            Saya menyatakan bahwa data yang saya isi adalah benar
                        </p>
                        </div>
                    </div>

                    <div className="div-3">
                        <div className="tombol-kembali">
                        <div className="text-wrapper-4">Kembali</div>
                        </div>

                        <div className="tombol-submit">
                        <div className="simpan">Submit</div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="feedback-2">
                    <div className="title-2">
                    <div className="text-wrapper-5">Feedback Konsumer</div>

                    <p className="text-wrapper-6">
                        Kami selalu berusaha memberikan layanan terbaik. Berikut beberapa
                        pendapat dari pelanggan kami:
                    </p>
                    </div>

                    <div className="frame-feedback">
                    <div className="card-testimoni">
                        <img className="quote" alt="Quote" src={quote} />

                        <p className="text-wrapper-7">
                        Proses pengiriman sangat cepat dan aman. Timnya profesional, dan
                        saya merasa tenang mempercayakan pengiriman saya di sini.. 
                        </p>

                        <div className="content-nama">
                        <img className="img" alt="Foto" src={foto1} />

                        <div className="div-4">
                            <div className="text-wrapper-8">Aliando Trump</div>

                            <p className="text-wrapper-9">
                            Manajer Distribusi   PT IndoMaritim Sejahtera
                            </p>
                        </div>
                        </div>

                        <img className="img-2" alt="Star" src={star} />
                    </div>

                    <div className="card-testimoni">
                        <img className="quote" alt="Quote" src={quote} />

                        <p className="text-wrapper-7">
                        Gabungan teknologi modern dan jalur laut yang efisien benar-benar
                        membantu distribusi produk kami ke pulau-pulau kecil. Highly
                        recommended! 
                        </p>

                        <div className="content-nama">
                        <img className="img" alt="Foto" src={foto2} />

                        <div className="div-4">
                            <div className="text-wrapper-8">Mariana Hartanti</div>

                            <p className="text-wrapper-9">
                            Logistic Head   PT Nusantara Ekspedisi
                            </p>
                        </div>
                        </div>

                        <img className="img-2" alt="Star" src={star} />
                    </div>

                    <div className="card-testimoni-2">
                        <img className="quote" alt="Quote" src={quote} />

                        <p className="text-wrapper-7">
                        Jalur laut bukan hal baru, tapi mereka mengemasnya dengan
                        pendekatan modern. Efisien, terjangkau, dan bisa diandalkan! 
                        </p>

                        <div className="content-nama">
                        <img className="img" alt="Foto" src={foto3} />

                        <div className="div-4">
                            <div className="text-wrapper-8">Alice Merpati</div>

                            <p className="text-wrapper-9">CEO   CV Bahari Jaya</p>
                        </div>
                        </div>

                        <img className="img-2" alt="Star" src={star} />
                    </div>
                    </div>

                    <img className="img-2" alt="Pagenation" src={pagenation} />
                </div>
                </div>

        </section>


    </>
    
  )
}

export default Feedback