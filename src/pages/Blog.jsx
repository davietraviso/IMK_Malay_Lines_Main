import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// New Blog

import fotoBerita1 from "../assets/img/blog/foto-berita-1.png";
import fotoBerita2 from "../assets/img/blog/foto-berita-2.png";
import fotoBerita3 from "../assets/img/blog/foto-berita-3.png";
import fotoBerita4 from "../assets/img/blog/foto-berita-4.png";
import ArrowRight  from "../assets/vector/arrow-right.svg";


const Blog = () => {


      
  return (
    <>

        <section className="cont_main">
            <div className="top-blog">
                <div className="judul">
                    <div className="berita-acara">Berita &amp; Acara</div>

                    <p className="text-wrapper">
                    Menyatukan dunia melalui layanan pengiriman laut yang terintegrasi.
                    </p>
                </div>
            </div>
 
        </section> 

        <section className="cont_main">
            <div className="berita-utama-screen">
                
                <div className="berita-utama">
                    <div className="tag-berita-utama">
                        <div className="text-wrapper">Berita Utama</div>
                    </div>
                </div>

                <Link to="/blog-2" className="berita-utama">


                    <div className="headline">
                        <div className="text">
                        <p className="sah-negara">
                            Sah! 86 Negara Termasuk RI &#39;Digetok&#39; Tarif Baru ke AS Mulai
                            Hari Ini!
                        </p>

                        <p className="div">
                            Dari daftar negara yang akan dikenakan tarif, China menjadi target
                            utama dengan bea masuk mencapai 104%, angka yang mengejutkan pasar
                            dan pelaku industri global.
                        </p>
                        </div>
                    </div>
                </Link>


                <div className="berita-terbaru">
                    <div className="text-wrapper">Berita Terbaru</div>

                    <div className="blog">
                        <div className="berita">
                        <div className="content-blog">
                            <img className="foto-berita" alt="Foto berita" src={fotoBerita1} />

                            <div className="berita-deskripsi">
                            <p className="teks-judul">
                                Jumbo Jadi Film Animasi Asia Tenggara Terlaris Sepanjang Masa
                            </p>

                            <p className="teks-isi-berita">
                                Jumbo menjadi film animasi Asia Tenggara terlaris sepanjang
                                masa. Film animasi Indonesia tersebut telah mengumpulkan lebih
                                dari US$8 juta hanya dari box office lokal.
                            </p>

                            <div className="timestamps">
                                <p className="div">13:30 | 14 Maret 2025</p>
                            </div>

                            <div className="tags-2">
                                <div className="kategori">
                                <div className="keunggulan-maggot">Animasi</div>
                                </div>

                                <div className="keunggulan-maggot-wrapper">
                                <div className="keunggulan-maggot">Hiburan</div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="content-blog">
                            <img className="foto-berita" alt="Foto berita" src={fotoBerita2} />

                            <div className="berita-deskripsi-2">
                            <p className="p">
                                Sarapan Seharusnya Porsi Besar dan Makan Malam Porsi Kecil,
                                Benarkah?
                            </p>

                            <p className="teks-isi-berita">
                                &#39;Sarapan seperti raja, makan siang seperti pangeran, dan
                                makan malam seperti orang miskin.&#39;Pertanyaannya, benarkah
                                pola makan seharusnya demikian?
                            </p>

                            <div className="element-september-wrapper">
                                <p className="div">07:30 | 13 April 2025</p>
                            </div>

                            <div className="tags-2">
                                <div className="kategori">
                                <div className="keunggulan-maggot">Makanan</div>
                                </div>

                                <div className="kategori">
                                <div className="keunggulan-maggot">Gaya Hidup</div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="content-blog">
                            <img className="foto-berita" alt="Foto berita" src={fotoBerita3} />

                            <div className="berita-deskripsi-2">
                            <p className="p">
                                Sarapan Seharusnya Porsi Besar dan Makan Malam Porsi Kecil,
                                Benarkah?
                            </p>

                            <p className="teks-isi-berita">
                                &#39;Sarapan seperti raja, makan siang seperti pangeran, dan
                                makan malam seperti orang miskin.&#39;Pertanyaannya, benarkah
                                pola makan seharusnya demikian?
                            </p>

                            <div className="element-september-wrapper">
                                <p className="div">07:30 | 13 April 2025</p>
                            </div>

                            <div className="tags-2">
                                <div className="kategori">
                                <div className="keunggulan-maggot">Makanan</div>
                                </div>

                                <div className="kategori">
                                <div className="keunggulan-maggot">Gaya Hidup</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="card-berita-terbaru">
                            <img className="foto-berita-2" alt="Foto berita" src={fotoBerita4} />

                        <div className="berita-deskripsi-3">
                            <p className="teks-judul-2">
                            Jadwal Leg 2 Babak 8 Besar Liga Champions: Barcelona dan Arsenal
                            Unggul, Siapa ke Semifinal?
                            </p>

                            <p className="teks-isi-berita-2">
                            Babak perempat final Liga Champions 2024/2025 telah melewati leg
                            pertama! Delapan tim tersisa memperebutkan tiket menuju babak
                            semifinal.
                            </p>

                            <div className="timestamps">
                            <p className="div">07:30 | 09 Maret 2025</p>
                            </div>

                            <div className="tags-3">
                            <div className="kategori">
                                <div className="keunggulan-maggot">Olahraga</div>
                            </div>

                            <div className="keunggulan-maggot-wrapper">
                                <div className="keunggulan-maggot">Hiburan</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="laporan-perusahaan">
                    <div className="text">
                        <div className="text-wrapper">Laporan Perusahaan 2024</div>

                        <p className="div">
                        Berikut merupakan tren laporan perusahaan terbaru 2024.
                        </p>

                        <div className="tombol-lihat-laporan">
                        <div className="text-wrapper-2">Lihat Laporan</div>

                        <img className="img" alt="Facebook logo" src={ArrowRight} />
                        </div>
                    </div>

                    <div className="foto-berita-5" />
                </div>



            </div>

        </section>


    </>
    
  )
}

export default Blog