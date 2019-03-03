import * as R from 'ramda';
import React, { useState } from 'react';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import SectionLayout from 'layouts/section';
import { Button } from 'lib/Button';

const CheckoutPage = () => {
  const [numberTickets, setNumberTickets] = useState(MIN_TICKETS);
  const [currentTicketIndex, setCurrentTicketIndex] = useState(MIN_TICKETS);
  const ticketIndexes = R.range(MIN_TICKETS, numberTickets + 1);

  return (
    <SectionLayout sectionTitle="Entradas">
      <div>
        {ticketIndexes.map(ticketIndex => (
          <span key={ticketIndex} onClick={() => setCurrentTicketIndex(ticketIndex)}>
            {ticketIndex}
            {ticketIndex === currentTicketIndex ? '(current)' : null}
          </span>
        ))}
        <Button
          onClick={() => setNumberTickets(numberTickets + 1)}
          disabled={numberTickets === MAX_TICKETS}
          color="secondary"
        >
          Quiero Otra
        </Button>
        <Button
          onClick={() => setNumberTickets(numberTickets - 1)}
          disabled={numberTickets === MIN_TICKETS}
          color="secondary"
        >
          Eliminar
        </Button>
      </div>
    </SectionLayout>
  );
};

export default CheckoutPage;
