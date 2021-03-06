import * as R from 'ramda';
import { createSelector } from 'reselect';
import { ticketSchema } from './schemas';

export const getTickets = state => state.checkout.tickets;
export const getCurrentTicketIndex = state => state.checkout.currentTicketIndex;
export const shouldShowValidations = state => state.checkout.showValidations;
export const getCurrentTicketCustomerInvalidFields = state =>
  state.checkout.currentTicketCustomerInvalidFields;
export const isValidatingCustomers = state => state.checkout.isValidatingCustomers;
export const isPreparingPayment = state => state.checkout.isPreparingPayment;
export const getPurchase = state => state.checkout.purchase;

export const getCurrentTicket = createSelector(
  [getCurrentTicketIndex, getTickets],
  R.nth
);
export const getCurrentTicketInvalidFields = createSelector(
  [getCurrentTicket],
  R.compose(
    R.pluck('path'),
    R.tryCatch(
      R.compose(
        R.always([]), // if valid return an empty array
        ticket => ticketSchema.validateSync(ticket, { abortEarly: false })
      ),
      R.prop('inner') // otherwise return the errors array
    )
  )
);
export const isCurrentTicketDniDuplicated = createSelector(
  [getCurrentTicket, getTickets],
  (current, tickets) =>
    R.compose(
      R.any(R.equals(R.trim(current.dni))),
      R.map(R.trim),
      R.pluck('dni'),
      R.without([current])
    )(tickets)
);
export const isCurrentTicketEmailDuplicated = createSelector(
  [getCurrentTicket, getTickets],
  (current, tickets) =>
    R.compose(
      R.any(R.equals(R.trim(current.email))),
      R.map(R.trim),
      R.pluck('email'),
      R.without([current])
    )(tickets)
);
export const isCurrentTicketValid = createSelector(
  [
    isCurrentTicketDniDuplicated,
    isCurrentTicketEmailDuplicated,
    getCurrentTicketInvalidFields,
    getCurrentTicketCustomerInvalidFields
  ],
  (isDniDuplicated, isEmailDuplicated, invalidFields, customerInvalidFields) =>
    !isEmailDuplicated &&
    !isDniDuplicated &&
    R.isEmpty(invalidFields) &&
    R.isEmpty(customerInvalidFields)
);
export const getNumberTickets = createSelector(
  [getTickets],
  R.length
);
export const isPurchaseCreated = createSelector(
  [getPurchase],
  R.complement(R.isNil)
);
