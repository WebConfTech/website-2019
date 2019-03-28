import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { maskDni, unmaskDni } from 'common/utils';
import { TICKET_PRICE } from 'data/constants';
import { changeTicket, toggleValidations, validateCustomers } from 'data/checkout/actions';
import {
  getCurrentTicketIndex,
  getCurrentTicket,
  isCurrentTicketValid,
  getCurrentTicketInvalidFields,
  isCurrentTicketDniDuplicated,
  isCurrentTicketEmailDuplicated,
  shouldShowValidations,
  getCurrentTicketCustomerInvalidFields,
  isValidatingCustomers
} from 'data/checkout/selectors';
import { Input, MaskedInput } from 'lib/Input';
import { CircleButton } from 'lib/Button';
import { TicketValidationMessage } from 'components/TicketValidationMessage';
import styles from './styles.module.scss';

const _TicketForm = ({
  ticketIndex,
  ticket,
  isValid,
  invalidFields,
  isDniDuplicated,
  isEmailDuplicated,
  displayValidations,
  customerInvalidFields,
  isValidating,
  children,
  onChange,
  showValidations,
  validate
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

  const onSubmit = useCallback(
    event => {
      event.preventDefault();

      if (isValid) {
        validate();
      } else {
        showValidations();
      }
    },
    [isValid, showValidations]
  );

  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit}>
            <div className={styles.formTitle}>Completá los siguientes datos:</div>
            <div className={`${styles.formTitle} ${styles.MobileOnly}`}>Completá estos datos:</div>
            <ul className={styles.fields}>
              <li className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  A nombre de
                </label>
                <Input
                  type="text"
                  value={ticket.name}
                  name="name"
                  onChange={changeHandler}
                  hasError={displayValidations && invalidFields.includes('name')}
                  color="secondary"
                  bold
                  borderless
                  transparent
                />
              </li>
              <li className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Dirección de correo electrónico
                </label>
                <Input
                  type="email"
                  value={ticket.email}
                  name="email"
                  onChange={changeHandler}
                  hasError={
                    displayValidations &&
                    (invalidFields.includes('email') ||
                      isEmailDuplicated ||
                      customerInvalidFields.includes('email'))
                  }
                  color="secondary"
                  bold
                  borderless
                  transparent
                />
              </li>
              <li className={`${styles.field} ${styles.Small}`}>
                <label className={styles.label} htmlFor="dni">
                  Nº de documento
                </label>
                <MaskedInput
                  type="text"
                  value={ticket.dni}
                  mask={maskDni}
                  unmask={unmaskDni}
                  name="dni"
                  onChange={dniChangeHandler}
                  hasError={
                    displayValidations &&
                    (invalidFields.includes('dni') ||
                      isDniDuplicated ||
                      customerInvalidFields.includes('dni'))
                  }
                  color="secondary"
                  bold
                  borderless
                  transparent
                />
              </li>
            </ul>
            <div className={styles.price}>
              <div className={styles.priceInfo}>Valor de la entrada</div>
              <div className={styles.priceValue}>AR$ {TICKET_PRICE}</div>
            </div>
            <CircleButton type="submit" className={styles.buyButton} isLoading={isValidating}>
              <span>Pagar</span>
            </CircleButton>
          </form>
        </div>
        <div className={`${styles.validations} ${styles.hideOnMobile}`}>
          <TicketValidationMessage />
        </div>
        <div className={`${styles.validations} ${styles.showOnMobile}`}>
          <TicketValidationMessage dark />
        </div>
      </div>
    </div>
  );
};

_TicketForm.displayName = 'TicketForm';

const mapStateToProps = state => ({
  ticketIndex: getCurrentTicketIndex(state),
  ticket: getCurrentTicket(state),
  isValid: isCurrentTicketValid(state),
  invalidFields: getCurrentTicketInvalidFields(state),
  isDniDuplicated: isCurrentTicketDniDuplicated(state),
  isEmailDuplicated: isCurrentTicketEmailDuplicated(state),
  displayValidations: shouldShowValidations(state),
  customerInvalidFields: getCurrentTicketCustomerInvalidFields(state),
  isValidating: isValidatingCustomers(state)
});

const mapDispatchToProps = dispatch => ({
  onChange: (ticketIndex, change) => dispatch(changeTicket(ticketIndex, change)),
  showValidations: () => dispatch(toggleValidations(true)),
  validate: () => dispatch(validateCustomers())
});

export const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicketForm);
