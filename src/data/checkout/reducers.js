import * as R from 'ramda';
import combineCrossSliceReducers from 'combine-cross-slice-reducers';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import {
  ADD_TICKET,
  CHANGE_TICKET,
  REMOVE_TICKET,
  SELECT_TICKET,
  TOGGLE_VALIDATIONS
} from './actions';

const ticketDefault = {
  name: '',
  dni: '',
  email: ''
};
const ticketsDefault = [ticketDefault];
const tickets = (state = ticketsDefault, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return R.unless(
        R.compose(
          R.equals(MAX_TICKETS),
          R.length
        ),
        R.append(ticketDefault)
      )(state);
    case CHANGE_TICKET:
      return R.adjust(action.payload.ticketIndex, R.mergeLeft(action.payload.changes))(state);
    case REMOVE_TICKET:
      return R.unless(
        R.compose(
          R.equals(MIN_TICKETS),
          R.length
        ),
        R.remove(action.payload, 1)
      )(state);
    default:
      return state;
  }
};

const showValidations = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_VALIDATIONS:
      return action.payload;
    case CHANGE_TICKET:
    case SELECT_TICKET:
      return false;
    default:
      return state;
  }
};

const currentTicketIndex = (state = 0, action, { tickets }) => {
  const numberTickets = tickets.length;

  switch (action.type) {
    case ADD_TICKET:
      return numberTickets - 1;
    case REMOVE_TICKET:
      return state === numberTickets ? numberTickets - 1 : state;
    case SELECT_TICKET:
      return R.compose(
        R.min(numberTickets - 1),
        R.max(0)
      )(action.payload);
    default:
      return state;
  }
};

export const checkout = combineCrossSliceReducers(
  {
    tickets,
    showValidations
  },
  {
    currentTicketIndex
  }
);
