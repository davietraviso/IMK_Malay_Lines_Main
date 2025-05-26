import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Blog2 = () => {

      
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
            <div className="detail-blog">
                <header className="header">
                    <div className="blog-detail">Blog &gt; Detail</div>

                    <p className="sah-negara">
                    Sah! 86 Negara Termasuk RI &#39;Digetok&#39; Tarif Baru ke AS Mulai
                    Hari Ini!
                    </p>

                    <div className="text-wrapper">CNBC Indonesia</div>

                    <div className="blog-tag">
                    <div className="tag">
                        <div className="div">Politik</div>
                    </div>

                    <div className="tag">
                        <div className="div">Ekonomi</div>
                    </div>
                    </div>
                </header>

                <div className="foto-blog" />

                <div className="blog-teks">
                    <p className="teks-isi">
                    <span className="span">Jakarta, CNBC Indonesia</span>

                    <span className="text-wrapper-2">
                        {" "}
                        - Bea Cukai dan Perlindungan Perbatasan Amerika Serikat (CBP)
                        menyatakan siap memulai pengumpulan tarif baru dari 86 negara mitra
                        dagang pada Rabu (9/4/2025) dini hari pukul 12:01 ET (11:01 WIB).
                        Langkah ini menandai tahap penting dari kebijakan proteksionis
                        Presiden AS Trump, yang dikenal keras terhadap defisit perdagangan
                        dan praktik yang ia nilai tidak adil bagi produsen dalam negeri.
                    </span>
                    </p>

                    <p className="teks-isi-2">
                    Dari daftar negara yang akan dikenakan tarif, China menjadi target
                    utama dengan bea masuk mencapai 104%, angka yang mengejutkan pasar dan
                    pelaku industri global. Negara-negara lain seperti Indonesia, India,
                    Filipina, dan beberapa anggota Uni Eropa juga akan terkena tarif
                    bervariasi, mulai dari 17% hingga 50%.
                    </p>

                    <p className="teks-isi-2">
                    Sementara itu, Trump menyatakan bahwa Amerika Serikat saat ini
                    menghasilkan pendapatan sebesar US$2 miliar per hari dari tarif impor
                    yang diberlakukan terhadap puluhan negara. Pernyataan ini disampaikan
                    tanpa rincian spesifik dalam sebuah acara penandatanganan perintah
                    eksekutif di Gedung Putih.
                    <br />
                    <br />
                    &#34;Kami menerima US$2 miliar per hari. Itu uang langsung masuk ke
                    kas negara dari tarif,&#34; ujar Trump di hadapan para jurnalis dan
                    pejabat tinggi pemerintahannya, sebagaimana dilansir Reuters.
                    &#34;Kami sangat sukses. Kami menang.&#34;
                    <br />
                    <br />
                    Namun, data dari Departemen Keuangan AS menunjukkan angka yang jauh
                    lebih rendah. Dalam laporan harian mengenai pemasukan dan pengeluaran
                    pada akun operasional utama pemerintah federal, tercatat bahwa
                    pendapatan dari kategori &#34;Bea Cukai dan Pajak Tertentu&#34;
                    rata-rata hanya mencapai sekitar US$200 juta per hari selama bulan
                    berjalan.
                    <br />
                    <br />
                    Bahkan, sepanjang Februari-bulan penuh terakhir dengan data yang
                    tersedia-pemerintah AS hanya mengumpulkan sekitar US$7,25 miliar dari
                    bea masuk.
                    <br />
                    <br />
                    Meskipun demikian, Trump tetap optimistis dan menyebut bahwa tarif
                    tersebut merupakan strategi negosiasi dagang yang berhasil. Ia juga
                    menekankan pendekatan yang disebutnya sebagai &#34;kesepakatan
                    khusus.&#34;
                    </p>

                    <div className="teks-isi-2">CNBC Indonesia</div>
                </div>
                </div>
        </section>

  


    </>
    
  )
}

export default Blog2