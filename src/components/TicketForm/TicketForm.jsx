import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { changeTicket } from 'data/checkout/actions';
import { getCurrentTicketIndex, getCurrentTicket } from 'data/checkout/selectors';

const _TicketForm = ({ ticketIndex, ticket, onChange }) => {
  const changeHandler = useCallback(
    ({ target }) => {
      const change = { [target.name]: target.value };
      onChange(ticketIndex, change);
    },
    [ticketIndex]
  );

  return (
    <form>
      <label htmlFor="name">A nombre de</label>
      <input type="text" value={ticket.name} name="name" onChange={changeHandler} />
      <label htmlFor="dni">Nº de documento</label>
      <input type="text" value={ticket.dni} name="dni" onChange={changeHandler} />
      <label htmlFor="email">Dirección de correo electrónico</label>
      <input type="email" value={ticket.email} name="email" onChange={changeHandler} />
    </form>
  );
};

_TicketForm.displayName = 'TicketForm';

const mapStateToProps = state => ({
  ticketIndex: getCurrentTicketIndex(state),
  ticket: getCurrentTicket(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: (ticketIndex, change) => dispatch(changeTicket(ticketIndex, change))
});

export const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketForm);
