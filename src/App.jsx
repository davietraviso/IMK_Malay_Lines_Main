import { Routes, Route } from "react-router-dom"

import NavBarComponents from "./components/NavBarComponents"
import FooterComponents from "./components/FooterComponents"
 

import LandingPage from "./pages/LandingPage"
import RuangTanya from "./pages/RuangTanya"
import Blog from "./pages/Blog"
import ScrollToTop from "./components/ScrollToTop"
import Transportasi from "./pages/Transportasi"
import Feedback from "./pages/Feedback"
import Layanan from "./pages/Layanan"
import Blog2 from "./pages/Blog2"
import Penjadwalan from "./pages/Penjadwalan"
import TentangKami from "./pages/TentangKami"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AccountPage from "./pages/AccountPage"
import AccountBooking from "./pages/AccountBooking"
import AccountBookingPencarian from "./pages/AccountBookingPencarian"
import BookingLokasi from "./pages/BookingLokasi"
import BookingDetail from "./pages/BookingDetail"
import BookingKontak from "./pages/BookingKontak"
import BookingKonfirmasi from "./pages/BookingKonfirmasi"
import BookingSelesai from "./pages/BookingSelesai"
import Tracking from "./pages/Tracking"



export default function App() { 
  return (
    <div>
      <NavBarComponents />
      <ScrollToTop/>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/transportasi" Component={Transportasi} />
          <Route path="/feedback" Component={Feedback} />
          <Route path="/layanan" Component={Layanan} />
          <Route path="/ruang-tanya" Component={RuangTanya} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog-2" Component={Blog2} />
          <Route path="/penjadwalan" Component={Penjadwalan} />
          <Route path="/tentangkami" Component={TentangKami} />
          <Route path="/login" Component={Login} />
          <Route path="/tracking" Component={Tracking} />
          <Route path="/register" Component={Register} />
          <Route path="/akun" Component={AccountPage} />
          <Route path="/booking" Component={AccountBooking} />
          <Route path="/booking-1" Component={AccountBookingPencarian} />
          <Route path="/booking-2" Component={BookingLokasi} />
          <Route path="/booking-3" Component={BookingDetail} />
          <Route path="/booking-4" Component={BookingKontak} />
          <Route path="/booking-5" Component={BookingKonfirmasi} />
          <Route path="/booking-6" Component={BookingSelesai} />
        </Routes>
      <FooterComponents />
    </div>
  )
}
