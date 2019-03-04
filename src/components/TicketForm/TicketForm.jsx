import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { changeTicket } from 'data/checkout/actions';
import {
  getCurrentTicketIndex,
  getCurrentTicket,
  getCurrentTicketInvalidFields,
  shouldShowValidations
} from 'data/checkout/selectors';
import { Input } from 'lib/Input';

const _TicketForm = ({ ticketIndex, ticket, invalidFields, showValidations, onChange }) => {
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
      <Input
        type="text"
        value={ticket.name}
        name="name"
        onChange={changeHandler}
        hasError={showValidations && invalidFields.includes('name')}
      />
      <label htmlFor="dni">Nº de documento</label>
      <Input
        type="text"
        value={ticket.dni}
        name="dni"
        onChange={changeHandler}
        hasError={showValidations && invalidFields.includes('dni')}
      />
      <label htmlFor="email">Dirección de correo electrónico</label>
      <Input
        type="email"
        value={ticket.email}
        name="email"
        onChange={changeHandler}
        hasError={showValidations && invalidFields.includes('email')}
      />
    </form>
  );
};

_TicketForm.displayName = 'TicketForm';

const mapStateToProps = state => ({
  ticketIndex: getCurrentTicketIndex(state),
  ticket: getCurrentTicket(state),
  invalidFields: getCurrentTicketInvalidFields(state),
  showValidations: shouldShowValidations(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: (ticketIndex, change) => dispatch(changeTicket(ticketIndex, change))
});

export const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketForm);
