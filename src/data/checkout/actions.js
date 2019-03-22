export const ADD_TICKET = 'checkout/add/ticket';
export const CHANGE_TICKET = 'checkout/change/ticket';
export const REMOVE_TICKET = 'checkout/remove/ticket';
export const CLEAR_TICKETS = 'checkout/clear/tickets';
export const SELECT_TICKET = 'checkout/select/ticket';
export const TOGGLE_VALIDATIONS = 'checkout/toggle/validations';

export const addTicket = () => ({
  type: ADD_TICKET
});

export const changeTicket = (ticketIndex, changes) => ({
  type: CHANGE_TICKET,
  payload: {
    ticketIndex,
    changes
  }
});

export const removeTicket = ticketIndex => ({
  type: REMOVE_TICKET,
  payload: ticketIndex
});

export const clearTickets = () => ({
  type: CLEAR_TICKETS
});

export const selectTicket = ticketIndex => ({
  type: SELECT_TICKET,
  payload: ticketIndex
});

export const toggleValidations = show => ({
  type: TOGGLE_VALIDATIONS,
  payload: show
});
