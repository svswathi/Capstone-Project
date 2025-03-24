import React from 'react'
import BookingTitle from '../../components/sub-components/BookingTitle/BookingTitle'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

const ConfirmedBooking = () => {
    return (
        <>
            <Nav />
            <BookingTitle />
            <main className='reserve-table-grid' style={{padding: "20px", textAlign: 'center'}}>
                <header className='reserve-table-find-table'>
                    Thank you for choosing to dine with us!
                </header>
                <section className='reserve-table-find-table' style={{fontSize: '18px', paddingTop: '20px'}}>
                Your table reservation has been successfully completed. We look forward to welcoming you and ensuring you have a wonderful experience. See you soon!
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ConfirmedBooking
