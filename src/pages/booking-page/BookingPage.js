import React, { useReducer } from 'react'
import Nav from '../../components/Nav/Nav'
import BookingTitle from '../../components/sub-components/BookingTitle/BookingTitle'
import Footer from '../../components/Footer/Footer'
import BookingForm from '../../components/BookingForm/BookingForm'
import { fetchAPI, submitAPI } from '../../api'
// import { useNavigate } from 'react-router-dom'

const SET_AVAILABLE_TIMES = 'SET_AVAILABLE_TIMES';

const fetchDates = (date) => {
    const selectedDate = date !== undefined ? new Date(date) : new Date();
    const availableReservationTimes = fetchAPI(selectedDate);
    return availableReservationTimes;
}

export const initializeTimes = () => {
    const availableReservationTimes = fetchDates();
    return {
        availableTimes: availableReservationTimes
    }
}

export const updateTimes = (state, action) => {
    console.log("updateTimes", state, action)
    const dateSelected = new Date(action.date);
    switch (action.type) {
        case SET_AVAILABLE_TIMES:
            return {
                ...state,
                availableTimes: fetchAPI(dateSelected),
            }
        default:
            return state;
    }
}

const BookingPage = () => {

    const [state, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

    // const navigate = useNavigate();

    const handleDateChange = (date) => {
        dispatch({ type: SET_AVAILABLE_TIMES, date: date })
    }

    const handleSubmitForm = (formData) => {
        const result = submitAPI(formData);
        if(result) {
            console.log("handleSubmitForm", formData, result);
            // navigate('/booking-confirmed');
            window.location.href = '/booking-confirmed';
            return result;
        } else {
            alert("There is some problem occured while booking a table");
            return false;
        }
        
    }

    return (
        <>
            <Nav />
            <BookingTitle />
            <BookingForm availableTimes={state.availableTimes} onDateChange={handleDateChange} onSubmitBooking={handleSubmitForm}/>
            <Footer />
        </>
    )
}

export default BookingPage
