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
import { CircleButton } from 'lib/Button';
import styles from './styles.module.scss';

const _TicketForm = ({
  ticketIndex,
  ticket,
  invalidFields,
  showValidations,
  onChange,
  children
}) => {
  const changeHandler = useCallback(
    ({ target }) => {
      const change = { [target.name]: target.value };
      onChange(ticketIndex, change);
    },
    [ticketIndex]
  );

  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.formContainer}>
          <form>
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
                  hasError={showValidations && invalidFields.includes('name')}
                  color="secondary"
                  bold
                  borderless
                  uppercase
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
                  hasError={showValidations && invalidFields.includes('email')}
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
                <Input
                  type="text"
                  value={ticket.dni}
                  name="dni"
                  onChange={changeHandler}
                  hasError={showValidations && invalidFields.includes('dni')}
                  color="secondary"
                  bold
                  borderless
                  transparent
                />
              </li>
            </ul>
            <div className={styles.price}>
              <div className={styles.priceInfo}>Valor de la entrada</div>
              <div className={styles.priceValue}>AR$ 750</div>
            </div>
            <CircleButton type="submit" className={styles.buyButton}>
              <span>Pagar</span>
            </CircleButton>
          </form>
        </div>
        <div className={styles.validations}>{children}</div>
      </div>
    </div>
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
