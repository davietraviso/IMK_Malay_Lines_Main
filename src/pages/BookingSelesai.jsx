import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
// import MainImage from '../assets/img/hero_page1.png'
import { useNavigate } from "react-router-dom";




const BookingSelesai = () => {


      
  return (
    <>

        <section className="cont_main">
            <div className="top-section">
                <div className="judul">
                    <div className="text-wrapper">Finishing</div>

                    <p className="div-top-section">
                    Data Kargo
                    </p>
                </div>
            </div>

        </section>


        <section className="cont_main">
            <div className="base-4">
                <div className="form-booking">
                    <div className="judul-booking">
                    <p className="text-wrapper">
                        Terima kasih telah booking pelayaran anda!
                    </p>
                    </div>

                    <p className="div">
                    Kami telah menerima detail booking anda, seterusnya akan kami urus,
                    terima kasih!
                    </p>

                    <p className="div">
                    Nomor kargo anda: XXXX-XXXX-XXXX
                    <br />
                    Detail akan disimpan pada dashboard akun anda
                    </p>

                    <div className="frame-tombol">
                    <div className="tombol">
                        <div className="text-wrapper-2">Booking pelayaran lainnya</div>
                    </div>

                    <div className="div-wrapper">
                        <div className="text-wrapper-3">Lacak Pelayaran</div>
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




    </>
    
  )
}

export default BookingSelesai