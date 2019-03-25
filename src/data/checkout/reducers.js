import * as R from 'ramda';
import combineCrossSliceReducers from 'combine-cross-slice-reducers';
import { MIN_TICKETS, MAX_TICKETS } from 'data/constants';
import {
  ADD_TICKET,
  CHANGE_TICKET,
  REMOVE_TICKET,
  CLEAR_TICKETS,
  SELECT_TICKET,
  TOGGLE_VALIDATIONS,
  VALIDATE_CUSTOMERS_REQUEST,
  VALIDATE_CUSTOMERS_SUCCESS,
  VALIDATE_CUSTOMERS_FAILURE,
  PREPARE_PAYMENT_REQUEST,
  PREPARE_PAYMENT_SUCCESS,
  PREPARE_PAYMENT_FAILURE
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
    case CLEAR_TICKETS:
      return ticketsDefault;
    default:
      return state;
  }
};

const showValidations = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_VALIDATIONS:
      return action.payload;
    case ADD_TICKET:
    case CHANGE_TICKET:
    case REMOVE_TICKET:
    case CLEAR_TICKETS:
    case SELECT_TICKET:
      return false;
    case VALIDATE_CUSTOMERS_SUCCESS:
      return action.payload.ticketIndex != null;
    default:
      return state;
  }
};

const currentTicketDefault = 0;
const currentTicketIndex = (state = currentTicketDefault, action, { tickets }) => {
  const numberTickets = tickets.length;

  switch (action.type) {
    case ADD_TICKET:
      return numberTickets - 1;
    case REMOVE_TICKET:
      return state === numberTickets ? numberTickets - 1 : state;
    case CLEAR_TICKETS:
      return currentTicketDefault;
    case SELECT_TICKET:
      return R.compose(
        R.min(numberTickets - 1),
        R.max(0)
      )(action.payload);
    case VALIDATE_CUSTOMERS_SUCCESS:
      return action.payload.ticketIndex != null ? action.payload.ticketIndex : state;
    default:
      return state;
  }
};

const currentTicketCustomerInvalidFieldsDefault = [];
const currentTicketCustomerInvalidFields = (
  state = currentTicketCustomerInvalidFieldsDefault,
  action
) => {
  switch (action.type) {
    case VALIDATE_CUSTOMERS_SUCCESS:
      return action.payload.invalidFields != null
        ? action.payload.invalidFields
        : currentTicketCustomerInvalidFieldsDefault;
    case ADD_TICKET:
    case CHANGE_TICKET:
    case REMOVE_TICKET:
    case CLEAR_TICKETS:
    case SELECT_TICKET:
      return currentTicketCustomerInvalidFieldsDefault;
    default:
      return state;
  }
};

const isValidatingCustomers = (state = false, action) => {
  switch (action.type) {
    case VALIDATE_CUSTOMERS_REQUEST:
      return true;
    case VALIDATE_CUSTOMERS_SUCCESS:
    case VALIDATE_CUSTOMERS_FAILURE:
      return false;
    default:
      return state;
  }
};

const isPreparingPayment = (state = false, action) => {
  switch (action.type) {
    case PREPARE_PAYMENT_REQUEST:
      return true;
    case PREPARE_PAYMENT_SUCCESS:
    case PREPARE_PAYMENT_FAILURE:
      return false;
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
    currentTicketIndex,
    currentTicketCustomerInvalidFields,
    isValidatingCustomers,
    isPreparingPayment
  }
);
