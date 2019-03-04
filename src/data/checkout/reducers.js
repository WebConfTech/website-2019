import * as R from 'ramda';
import { combineReducers } from 'redux';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import { ADD_TICKET, CHANGE_TICKET, REMOVE_TICKET, SELECT_TICKET } from './actions';

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

const currentTicketIndex = (state = 0, action) => {
  switch (action.type) {
    case SELECT_TICKET:
      return R.compose(
        R.min(action.payload.numberTickets),
        R.max(0)
      )(action.payload.ticketIndex);
    default:
      return state;
  }
};

export const checkout = combineReducers({
  tickets,
  currentTicketIndex
});
