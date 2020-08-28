import React from 'react';
import { useStore } from '../store/Store';

const BookingList = () => {
  const [state] = useStore();
  const { bookings } = state;

  const Booking = ({ item }) => (
    <>
      <div key={item.id}>
        <div>
          <b>Nome:</b> {item.name}
        </div>
        <div>
          <b>Numero de telefone:</b> {item.numberOfContact}
        </div>
        <div>
          <b>Numero de convidados:</b> {item.numberOfPeople}
        </div>
        <div>
          <b>Data e horário:</b> {new Date(item.dateTime).toString()}
        </div>
        <hr />
      </div>
    </>
  );

  return (
    <>
      <h2>Lista de Reserva</h2>
      {bookings.map((booking) => (
        <Booking key={booking.id} item={booking} />
      ))}
    </>
  );
};

export default BookingList;
