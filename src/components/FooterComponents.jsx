import logo from '../assets/img/landingpage/logo_ml.png'
import panah from '../assets/img/footer/arrow.png'
import main from "../assets/img/footer/phone.png";
import ig from "../assets/img/footer/instagram.png";
import email from "../assets/img/footer/mail.png";

import { Container, Row, Col } from 'react-bootstrap'
import ArrowRight  from "../assets/vector/arrow-right.svg";

import x1 from "../assets/vector/facebook-logo.svg";
import x2 from "../assets/vector/instagram-logo.svg";
import x3 from "../assets/vector/x-logo.svg";
import background from "../assets/img/landingpage/Background.png";

import emailVector from "../assets/vector/email-vector.svg";
import phoneVector from "../assets/vector/phone-vector.svg";
import { useNavigate, Link } from "react-router-dom";


const FooterComponents = () => {
  return (
     


    <div>
      <footer className="text-center text-lg-start">
       
        <section className="cont_main grand_navbar tertarik2">
            <Container className="penjelasan_container2">
              
              <div className="tertarik">
                <div className="text">
                  <div className="text-wrapper">Tertarik untuk berbisnis?</div>

                  <p className="div">
                    Hubungi kami dan terhubung dengan para ahli di bidangnya.
                  </p>
                </div>

                {/* <div className="contact-us">
                  <div className="text-wrapper-2">Contact Us</div>

                  <img className="img" alt="Facebook logo" src={ArrowRight} />
                </div> */}
                <Link to="/tentangkami" className="contact-us link-universal">
                    <div className="text-wrapper-2">Hubungi Kami</div>
                    {/* <img className="img" alt="Arrow right" src={ArrowRight} /> */}
                </Link>
              </div>


            </Container>
        </section>


        <section className="cont_main">
          <div className="footer">
            {/* <div className="background">

              <img className="background" alt="Background" src={background} />
            </div> */}
            <div className="penjelasan_container2"></div>
              <Container className="penjelasan_container2">
                <div className="footer">

                  <div className="content">
                    <img className="logo" alt="Logo" src={logo} />

                    <div className="component">
                      <div className="contact">
                        <div className="div">
                          <p className="leverage-agile">
                            Malay Lines adalah perusahaan komersil pribadi tanpa naungan perusahaan besar. Kami adalah perusahaan independen yang berperan besar dalam
                            kebutuhan navigasi dunia.
                          </p>

                          <div className="address">
                            <div className="div-wrapper">
                              <img className="img-wrapper" alt="Email vector" src={emailVector} />

                              <p className="email-contact">
                                <a
                                  href="mailto:contact@hvcargologistics.com"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <span className="text-wrapper">
                                    Email
                                    <br />
                                  </span>
                                </a>

                                <span className="text-wrapper">
                                  shipping@malaylines.com
                                </span>
                              </p>
                            </div>

                            <div className="div-wrapper">
                              <img className="img-wrapper" alt="Phone vector" src={phoneVector} />
                              <p className="call-us">
                                Hubungi Kami <br />
                                (62) 813 7272 7173
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="content-2">
                        <div className="div-wrapper-2">
                          <p className="about-us-our-team">
                            Tentang Kami <br />
                            Visi Kami<br />
                            Misi Kami <br />
                            Armada Kami <br />
                            Butuh Bantuan?
                          </p>
                        </div>

                        

                        <div className="subscribe">
                          <div className="text-wrapper-2">Berlayanan Informasi</div>

                          <div className="content-3">
                            <div className="name">
                              <div className="overlap-group">
                                <div className="text-wrapper-3">Masukkan email anda*</div>
                              </div>
                            </div>

                            <div className="button">
                              <div>
                                <button className="button-2">
                                  <div className="text-wrapper-4">Kirim Sekarang </div>
                                </button>

                              </div>

                              <div className="follow">
                                <img className="element" alt="Element" src={x1} />

                                <img className="element" alt="Element" src={x2} />

                                <img className="element" alt="Element" src={x3} />
                              </div>

                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </Container>
            {/* <div className="background">

              <img className="background" alt="Background" src={background} />
            </div> */}

          </div> 
        </section>

      
       

        
        
      </footer>
    </div>
  )
}

export default FooterComponents