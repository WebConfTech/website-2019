import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTicket } from 'data/checkout/actions';
import { getTicket } from 'data/checkout/selectors';

const _TicketForm = ({ ticket, onChange }) => (
  <form>
    <label htmlFor="name">A nombre de</label>
    <input type="text" value={ticket.name} name="name" onChange={onChange} />
    <label htmlFor="dni">Nº de documento</label>
    <input type="text" value={ticket.dni} name="dni" onChange={onChange} />
    <label htmlFor="email">Dirección de correo electrónico</label>
    <input type="email" value={ticket.email} name="email" onChange={onChange} />
  </form>
);

_TicketForm.displayName = 'TicketForm';

_TicketForm.propTypes = {
  ticketIndex: PropTypes.number.isRequired
};

const mapStateToProps = (state, { ticketIndex }) => ({
  ticket: getTicket(state, ticketIndex)
});

const mapDispatchToProps = (dispatch, { ticketIndex }) => ({
  onChange: ({ target }) => dispatch(changeTicket(ticketIndex, { [target.name]: target.value }))
});

export const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketForm);
