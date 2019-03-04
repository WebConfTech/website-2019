import * as R from 'ramda';
import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import { addTicket, removeTicket, selectTicket } from 'data/checkout/actions';
import { getNumberTickets, getCurrentTicketIndex } from 'data/checkout/selectors';
import { Button } from 'lib/Button';

const _TicketSelector = ({ numberTickets, currentTicketIndex, onAdd, onRemove, onSelect }) => {
  // memoize add and remove callbacks
  const add = useCallback(() => {
    onAdd();
    onSelect(R.min(MAX_TICKETS - 1, numberTickets));
  }, [numberTickets, onSelect, onAdd]);

  const remove = useCallback(() => {
    onRemove(currentTicketIndex);

    if (currentTicketIndex === numberTickets - 1) {
      // if we deleted the last ticket, set the one before last as the current
      onSelect(numberTickets - 2);
    }
  }, [currentTicketIndex, numberTickets, onRemove, onSelect]);

  // generate a list of tickets indexes
  const ticketIndexes = useMemo(() => R.range(0, numberTickets), [numberTickets]);

  return (
    <div>
      {ticketIndexes.map(ticketIndex => (
        <span key={ticketIndex} onClick={() => onSelect(ticketIndex)}>
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
  );
};

_TicketSelector.displayName = 'TicketSelector';

const mapStateToProps = state => ({
  numberTickets: getNumberTickets(state),
  currentTicketIndex: getCurrentTicketIndex(state)
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addTicket()),
  onRemove: ticketIndex => dispatch(removeTicket(ticketIndex)),
  onSelect: ticketIndex => dispatch(selectTicket(ticketIndex))
});

export const TicketSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketSelector);
