import * as R from 'ramda';
import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import { addTicket, removeTicket, selectTicket, toggleValidations } from 'data/checkout/actions';
import {
  getNumberTickets,
  getCurrentTicketIndex,
  isCurrentTicketValid
} from 'data/checkout/selectors';
import { Button, Tab } from 'lib/Button';
import styles from './styles.module.scss';

const _TicketSelector = ({
  numberTickets,
  currentTicketIndex,
  isTicketValid,
  onAdd,
  onRemove,
  onSelect,
  showValidations
}) => {
  // memoize add, remove and select callbacks
  const add = useCallback(() => {
    if (isTicketValid) {
      onAdd();
    } else {
      showValidations();
    }
  }, [isTicketValid, onAdd, showValidations]);

  const remove = useCallback(() => onRemove(currentTicketIndex), [currentTicketIndex, onRemove]);

  const select = useCallback(
    ticketIndex => {
      if (isTicketValid) {
        onSelect(ticketIndex);
      } else {
        showValidations();
      }
    },
    [isTicketValid, onSelect, showValidations]
  );

  // generate a list of tickets indexes
  const ticketIndexes = useMemo(() => R.range(0, numberTickets), [numberTickets]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>Entrada Nº</div>
      <ul className={styles.tabs}>
        {ticketIndexes.map(ticketIndex => (
          <li key={ticketIndex}>
            <Tab
              onClick={() => select(ticketIndex)}
              active={ticketIndex === currentTicketIndex ? 1 : 0}
            >
              {ticketIndex + 1}
            </Tab>
          </li>
        ))}
      </ul>
      <ul className={styles.buttons}>
        <li className={styles.buttonContainer}>
          <Button onClick={add} disabled={numberTickets === MAX_TICKETS} color="secondary">
            Quiero Otra
          </Button>
        </li>
        <li className={styles.buttonContainer}>
          <Button onClick={remove} disabled={numberTickets === MIN_TICKETS} color="secondary">
            Eliminar
          </Button>
        </li>
      </ul>
    </div>
  );
};

_TicketSelector.displayName = 'TicketSelector';

const mapStateToProps = state => ({
  numberTickets: getNumberTickets(state),
  currentTicketIndex: getCurrentTicketIndex(state),
  isTicketValid: isCurrentTicketValid(state)
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addTicket()),
  onRemove: ticketIndex => dispatch(removeTicket(ticketIndex)),
  onSelect: ticketIndex => dispatch(selectTicket(ticketIndex)),
  showValidations: () => dispatch(toggleValidations(true))
});

export const TicketSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketSelector);
