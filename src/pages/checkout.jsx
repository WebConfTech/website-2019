import * as R from 'ramda';
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import { addTicket, removeTicket } from 'data/checkout/actions';
import { getNumberTickets } from 'data/checkout/selectors';
import SectionLayout from 'layouts/section';
import { Button } from 'lib/Button';
import { TicketForm } from 'components/TicketForm';

const CheckoutPage = ({ numberTickets, onAdd, onRemove }) => {
  // current ticket index
  const [currentTicketIndex, setCurrentTicketIndex] = useState(0);

  // memoize add and remove callbacks
  const add = useCallback(() => {
    onAdd();
    setCurrentTicketIndex(R.min(MAX_TICKETS - 1, numberTickets));
  }, [numberTickets, setCurrentTicketIndex, onAdd]);
  const remove = useCallback(() => {
    onRemove(currentTicketIndex);

    if (currentTicketIndex === numberTickets - 1) {
      // if we deleted the last ticket, set the one before last as the current
      setCurrentTicketIndex(numberTickets - 2);
    }
  }, [currentTicketIndex, numberTickets, setCurrentTicketIndex, onRemove]);

  // generate a list of tickets indexes
  const ticketIndexes = R.range(0, numberTickets);

  return (
    <SectionLayout sectionTitle="Entradas">
      <div>
        {ticketIndexes.map(ticketIndex => (
          <span key={ticketIndex} onClick={() => setCurrentTicketIndex(ticketIndex)}>
            {ticketIndex + 1}
            {ticketIndex === currentTicketIndex ? '(current)' : null}
          </span>
        ))}
        <Button onClick={add} disabled={numberTickets === MAX_TICKETS} color="secondary">
          Quiero Otra
        </Button>
        <Button onClick={remove} disabled={numberTickets === MIN_TICKETS} color="secondary">
          Eliminar
        </Button>
      </div>
      <TicketForm ticketIndex={currentTicketIndex} />
    </SectionLayout>
  );
};

const mapStateToProps = state => ({
  numberTickets: getNumberTickets(state)
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addTicket()),
  onRemove: ticketIndex => dispatch(removeTicket(ticketIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
