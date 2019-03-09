import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { maskDni, unmaskDni } from 'common/utils';
import { changeTicket } from 'data/checkout/actions';
import {
  getCurrentTicketIndex,
  getCurrentTicket,
  getCurrentTicketInvalidFields,
  isCurrentTicketDniDuplicated,
  isCurrentTicketEmailDuplicated,
  shouldShowValidations
} from 'data/checkout/selectors';
import { Input, MaskedInput } from 'lib/Input';

const _TicketForm = ({
  ticketIndex,
  ticket,
  invalidFields,
  isDniDuplicated,
  isEmailDuplicated,
  showValidations,
  onChange
}) => {
  const changeHandler = useCallback(
    ({ target }) => {
      const change = { [target.name]: target.value };
      onChange(ticketIndex, change);
    },
    [ticketIndex, onChange]
  );

  const dniChangeHandler = useCallback((e, dni) => onChange(ticketIndex, { dni }), [
    ticketIndex,
    onChange
  ]);

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
      <MaskedInput
        type="text"
        value={ticket.dni}
        mask={maskDni}
        unmask={unmaskDni}
        name="dni"
        onChange={dniChangeHandler}
        hasError={showValidations && (invalidFields.includes('dni') || isDniDuplicated)}
      />
      <label htmlFor="email">Dirección de correo electrónico</label>
      <Input
        type="email"
        value={ticket.email}
        name="email"
        onChange={changeHandler}
        hasError={showValidations && (invalidFields.includes('email') || isEmailDuplicated)}
      />
    </form>
  );
};

_TicketForm.displayName = 'TicketForm';

const mapStateToProps = state => ({
  ticketIndex: getCurrentTicketIndex(state),
  ticket: getCurrentTicket(state),
  invalidFields: getCurrentTicketInvalidFields(state),
  isDniDuplicated: isCurrentTicketDniDuplicated(state),
  isEmailDuplicated: isCurrentTicketEmailDuplicated(state),
  showValidations: shouldShowValidations(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: (ticketIndex, change) => dispatch(changeTicket(ticketIndex, change))
});

export const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketForm);
