import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import BookingPage from '../pages/booking-page/BookingPage';
import ConfirmedBooking from '../pages/confirmed-booking/ConfirmedBooking';


const RouterComponent = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/booking' element={<BookingPage />}></Route>
            <Route path='/booking-confirmed' element={<ConfirmedBooking />}></Route>
        </Routes>
    </Router>
  )
}

export default RouterComponent
