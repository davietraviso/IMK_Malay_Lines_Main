import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/landingpage.css';

import './css/footer.css';
import './css/transportasi.css'
import './css/feedback.css'
import './css/ruangtanya.css'
import './css/layanan.css'
import './css/blog.css'
import './css/blog2.css'
import './css/penjadwalan.css'
import './css/tentangkami.css'
import './css/login.css'
import './css/register.css'
import './css/accountpage.css'
import './css/accountbooking.css'
import './css/accountbookingpencarian.css'
import './css/bookinglokasi.css'
import './css/bookingdetail.css'
import './css/bookingkontak.css'
import './css/bookingkonfirmasi.css'
import './css/bookingselesai.css'
import './css/tracking.css'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
