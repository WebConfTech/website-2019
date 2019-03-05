import * as R from 'ramda';
import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { ValidationMessage } from 'lib';
import { shouldShowValidations, getCurrentTicketInvalidFields } from 'data/checkout/selectors';

const fieldDisplayNameMap = {
  name: 'un nombre',
  dni: 'un número de documento',
  email: 'una dirección de correo electrónico'
};
const _TicketValidationMessage = ({ showValidations, invalidFields }) => {
  const validationMessage = useMemo(() => {
    let message = null;

    if (R.isEmpty(invalidFields)) {
      message = (
        <>
          ¡Todo listo por aquí! Presioná{` `}
          <em>Quiero otra</em>
          {` `}o{` `}
          <em>Pagar</em>
          {` `}para continuar.
        </>
      );
    } else if (showValidations && invalidFields.length === 1) {
      message = `Necesitamos que ingreses ${fieldDisplayNameMap[invalidFields[0]]} válido`;
    } else if (showValidations && invalidFields.length === 2) {
      message = `Necesitamos que ingreses ${fieldDisplayNameMap[invalidFields[0]]} y
        ${fieldDisplayNameMap[invalidFields[1]]} válidos`;
    } else if (showValidations) {
      message = 'Necesitamos que completes el ticket con valores válidos';
    }

    return message;
  }, [showValidations, invalidFields]);

  return validationMessage ? (
    <ValidationMessage darkContextOnMobile error={R.isEmpty(invalidFields) ? 0 : 1}>
      {validationMessage}
    </ValidationMessage>
  ) : null;
};

_TicketValidationMessage.displayName = 'TicketValidationMessage';

const mapStateToProps = state => ({
  showValidations: shouldShowValidations(state),
  invalidFields: getCurrentTicketInvalidFields(state)
});

export const TicketValidationMessage = connect(mapStateToProps)(_TicketValidationMessage);
