import * as R from 'ramda';
import { createSelector } from 'reselect';
import { ticketSchema } from './schemas';

export const getTickets = state => state.checkout.tickets;
export const getCurrentTicketIndex = state => state.checkout.currentTicketIndex;
export const shouldShowValidations = state => state.checkout.showValidations;

export const getCurrentTicket = createSelector(
  [getCurrentTicketIndex, getTickets],
  R.nth
);
export const getCurrentTicketValidationErrors = createSelector(
  [getCurrentTicket],
  R.compose(
    R.reduce((errors, error) => R.assoc(error.path, error.message), {}),
    R.tryCatch(
      R.compose(
        R.always([]),
        ticketSchema.validateSync
      ), // if valid return null
      R.prop('inner') // otherwise return the errors array
    )
  )
);
export const getNumberTickets = createSelector(
  [getTickets],
  R.length
);
