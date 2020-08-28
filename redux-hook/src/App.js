import React from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

function App() {
  return (
    <>
      <h1>Agendamento</h1>
      <BookingForm />
      <BookingList />
    </>
  );
}

export default App;
