import * as R from 'ramda';
import { createSelector } from 'reselect';
import createCachedSelector from 're-reselect';

export const getTickets = state => state.checkout.tickets;
export const getTicket = createCachedSelector([R.nthArg(1), getTickets], R.nth)(R.nthArg(1));
export const getNumberTickets = createSelector(
  [getTickets],
  R.length
);
