import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = (props) => {

    const { availableTimes, onDateChange, onSubmitBooking } = props;
    const [date, setDate] = useState('');
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const today = new Date().toISOString().split('T')[0];

    const handleDateChange = (e) => {
        setDate(e.target.value);
        onDateChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        if (!date || !time || !guests || !occasion) {
            alert("Please fill all the fields");
        } else {
            onSubmitBooking(formData);
        }
    }

    return (
        <main className='reserve-table-grid'>
            <header className='reserve-table-find-table'>
                Find a table for any occassion
            </header>
            <section className='reserve-table-images'>
                <img src='icons_assets\restaurant.jpg' alt='restaurant' className='reserve-table-image' />
                <img src='icons_assets\restaurant chef B.jpg' alt='restaurant chef' className='reserve-table-image' />
            </section>
            <form onSubmit={handleSubmit} className='reserve-table-form'>
                <div className='reserve-table-padding'>
                    <label htmlFor="res-date" className='reserve-table-text'>Choose date</label>
                    <input type="date" id="res-date" value={date} required min={today}
                        aria-label="Choose reservation date" onChange={handleDateChange} />
                </div>
                <div className='reserve-table-padding'>
                    <label htmlFor="res-time" className='reserve-table-text'>Choose time</label>
                    <select id="res-time" value={time}
                        aria-label="Choose reservation time"
                        onChange={(e) => setTime(e.target.value)}>
                        {
                            availableTimes.map((time1, index) =>
                                <option key={index} value={time1}>
                                    {time1}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className='reserve-table-padding'>
                    <label htmlFor="guests" className='reserve-table-text'>Number of guests</label>
                    <input type="number" placeholder="1" required min="1" max="10" id="guests" value={guests}
                        aria-label="Number of guests" onChange={(e) => setGuests(e.target.value)} />
                </div>
                <div className='reserve-table-padding'>
                    <label htmlFor="occasion" className='reserve-table-text'>Occasion</label>
                    <select id="occasion" value={occasion} required
                        aria-label="Select occasion" onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className='reserve-table-padding'>
                    <input type="submit" value="Make Your reservation" 
                    aria-label="Submit reservation form" className='reserve-table-lets-go-button' />
                </div>
            </form>
        </main>
    )
}

export default BookingForm
