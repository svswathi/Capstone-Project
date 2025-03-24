import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../../pages/booking-page/BookingPage";
import { fetchAPI } from "../../api";

jest.mock('../../api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

test('Renders the "Choose date" label', () => {
    render(<BookingForm availableTimes={[]} onDateChange={() => { }} onSubmitBooking={() => { }} />);
    const dateLabelElement = screen.getByText("Choose date");
    expect(dateLabelElement).toBeInTheDocument();
});

test('initializeTimes returns availableTimes array', () => {
    // Mock the return value of fetchAPI
    fetchAPI.mockReturnValueOnce(['12:00 PM', '1:00 PM', '2:00 PM']);

    const result = initializeTimes();

    // Assert that the returned state contains the availableTimes
    expect(result.availableTimes).toEqual(['12:00 PM', '1:00 PM', '2:00 PM']);
});

test('updateTimes updates availableTimes based on date selection', () => {
    // Mock the return value of fetchAPI
    fetchAPI.mockReturnValueOnce(['12:00 PM', '1:00 PM', '2:00 PM']);

    const initialState = { availableTimes: [] };
    const action = { type: 'SET_AVAILABLE_TIMES', date: '2025-03-22' };

    const newState = updateTimes(initialState, action);

    // Assert that availableTimes is updated
    expect(newState.availableTimes).toEqual(['12:00 PM', '1:00 PM', '2:00 PM']);
});

test('renders date input with correct attributes', () => {
    render(<BookingForm availableTimes={[]} onDateChange={() => { }} onSubmitBooking={() => { }} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('min'); // it should have a "min" attribute
    expect(dateInput).toHaveAttribute('required'); // it should be required
});

test('renders guests input with correct attributes', () => {
    render(<BookingForm availableTimes={[]} onDateChange={() => { }} onSubmitBooking={() => { }} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1'); // it should have a "min" attribute
    expect(guestsInput).toHaveAttribute('max', '10'); // it should have a "max" attribute
    expect(guestsInput).toHaveAttribute('required'); // it should be required
});

test('renders occasion select with correct attributes', () => {
    render(<BookingForm availableTimes={[]} onDateChange={() => { }} onSubmitBooking={() => { }} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required'); // it should be required
});

test('invalid form submission triggers alert', async () => {
    // Mock the alert function
    window.alert = jest.fn();

    const mockOnSubmitBooking = jest.fn();
    render(
        <BookingForm
            availableTimes={['12:00', '14:00', '16:00']}
            onDateChange={() => { }}
            onSubmitBooking={mockOnSubmitBooking}
        />
    );

    const submitButton = screen.getByText(/make your reservation/i);

    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith('Please fill all the fields');
    });
    expect(mockOnSubmitBooking).not.toHaveBeenCalled();
});

test('valid form submission calls onSubmitBooking', async () => {
    const mockOnSubmitBooking = jest.fn();
    render(
        <BookingForm
            availableTimes={['12:00', '14:00', '16:00']}
            onDateChange={() => { }}
            onSubmitBooking={mockOnSubmitBooking}
        />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: '2025-03-23' } });
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = screen.getByText(/make your reservation/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockOnSubmitBooking).toHaveBeenCalledTimes(1);
    });
});

