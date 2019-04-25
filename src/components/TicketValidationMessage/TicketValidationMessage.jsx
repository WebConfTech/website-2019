import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { ValidationMessage } from 'lib';
import {
  shouldShowValidations,
  getCurrentTicketInvalidFields,
  getCurrentTicketCustomerInvalidFields,
  isCurrentTicketDniDuplicated,
  isCurrentTicketEmailDuplicated,
  isCurrentTicketValid
} from 'data/checkout/selectors';

const fieldDisplayNameMap = {
  name: 'un nombre',
  dni: 'un número de documento',
  email: 'una dirección de correo electrónico'
};
const customerFieldDisplayNameMap = {
  dni: 'este número de documento',
  email: 'esta dirección de correo electrónico'
};
const _TicketValidationMessage = ({
  showValidations,
  invalidFields,
  customerInvalidFields,
  isDniDuplicated,
  isEmailDuplicated,
  isValid,
  dark
}) => {
  const validationMessage = useMemo(() => {
    let message = null;

    if (isValid) {
      message = (
        <>
          ¡Todo listo por aquí! Presioná&nbsp;
          <em>Pagar</em>
          &nbsp;para continuar.
        </>
      );
    } else if (showValidations && customerInvalidFields.length === 1) {
      message = (
        <>
          Parece que ya tenemos una entrada registrada con&nbsp;
          {customerFieldDisplayNameMap[customerInvalidFields[0]]}.
          <br />
          ¿Perdiste tu entrada? ¡Contactanos por nuestras redes sociales y te ayudaremos!
        </>
      );
    } else if (showValidations && customerInvalidFields.length === 2) {
      message = (
        <>
          Parece que ya tenemos una entrada registrada con&nbsp;
          {customerFieldDisplayNameMap[customerInvalidFields[0]]} y&nbsp;
          {customerFieldDisplayNameMap[customerInvalidFields[1]]}.
          <br />
          ¿Perdiste tu entrada? ¡Contactanos por nuestras redes sociales y te ayudaremos!
        </>
      );
    } else if (showValidations && isDniDuplicated) {
      message = `Necesitamos que completes el ticket con valores válidos. El DNI ingresado ya
        fué usado en otro ticket.`;
    } else if (showValidations && isEmailDuplicated) {
      message = `Necesitamos que completes el ticket con valores válidos. El email ingresado ya
        fué usado en otro ticket.`;
    } else if (showValidations && invalidFields.length === 1) {
      message = `Necesitamos que ingreses ${fieldDisplayNameMap[invalidFields[0]]} válido.`;
    } else if (showValidations && invalidFields.length === 2) {
      message = `Necesitamos que ingreses ${fieldDisplayNameMap[invalidFields[0]]} y
        ${fieldDisplayNameMap[invalidFields[1]]} válidos.`;
    } else if (showValidations) {
      message = 'Necesitamos que completes el ticket con valores válidos.';
    }

    return message;
  }, [showValidations, invalidFields, customerInvalidFields]);

  return validationMessage ? (
    <ValidationMessage dark={dark ? 1 : 0} error={isValid ? 0 : 1}>
      {validationMessage}
    </ValidationMessage>
  ) : null;
};

_TicketValidationMessage.displayName = 'TicketValidationMessage';

const mapStateToProps = state => ({
  showValidations: shouldShowValidations(state),
  invalidFields: getCurrentTicketInvalidFields(state),
  customerInvalidFields: getCurrentTicketCustomerInvalidFields(state),
  isDniDuplicated: isCurrentTicketDniDuplicated(state),
  isEmailDuplicated: isCurrentTicketEmailDuplicated(state),
  isValid: isCurrentTicketValid(state)
});

export const TicketValidationMessage = connect(mapStateToProps)(_TicketValidationMessage);
