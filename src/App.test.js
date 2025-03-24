import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import BookingPage from "./pages/booking-page/BookingPage";
import HomePage from "./pages/home-page/HomePage";
import { BrowserRouter } from "react-router-dom";


//Mocking the pages for simplicity
jest.mock('./pages/home-page/HomePage', () => () => <div>HomePage</div>);
jest.mock('./pages/booking-page/BookingPage', () => () => <div>BookingPage</div>);
jest.mock('./pages/confirmed-booking/ConfirmedBooking', () => () => <div>ConfirmedBooking</div>);

// In your test file
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>, // Mock BrowserRouter
  Route: ({ element }) => <div>{element}</div>, // Mock Route
  Routes: ({ children }) => <div>{children}</div>, // Mock Routes
  useNavigate: () => jest.fn(), // Mock useNavigate
}));

test('renders without crashing', () => {
  render(<App />);
  // Check if the container is in the document
  const containerElement = screen.getByTestId('container');
  expect(containerElement).toBeInTheDocument();
});

// test('renders RouterComponent inside App component', () => {
//   render(<App />);

//   // Check if RouterComponent renders correctly
//   const routerComponentElement = screen.getByText(/HomePage/i);
//   expect(routerComponentElement).toBeInTheDocument();
// })

test('navigates to HomePage when on the "/" route', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Ensure HomePage is rendered when on the root route "/"
  const homePageElement = screen.getByText(/HomePage/i);
  expect(homePageElement).toBeInTheDocument();
});

test('navigates to BookingPage when on the "/booking" route', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Simulate navigation to "/booking"
  window.history.pushState({}, '', '/booking');

  // Wait for the BookingPage to appear after navigation
  await waitFor(() => {
    const bookingPageElement = screen.getByText(/BookingPage/i);
    expect(bookingPageElement).toBeInTheDocument();
  });
});

test('navigates to ConfirmedBooking when on the "/booking-confirmed" route', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Simulate navigation to "/booking-confirmed"
  window.history.pushState({}, '', '/booking-confirmed');

  // Wait for the ConfirmedBooking to appear after navigation
  await waitFor(() => {
    const confirmedBookingElement = screen.getByText(/ConfirmedBooking/i);
    expect(confirmedBookingElement).toBeInTheDocument();
  });
});