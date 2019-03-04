export const ADD_TICKET = 'checkout/add/ticket';
export const CHANGE_TICKET = 'checkout/change/ticket';
export const REMOVE_TICKET = 'checkout/remove/ticket';

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
