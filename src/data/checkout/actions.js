import * as R from 'ramda';
import { navigate } from 'gatsby';
import { CUSTOMER, TICKET, PURCHASE, get, post } from 'common/api';
import { getTickets } from './selectors';

export const ADD_TICKET = 'checkout/add/ticket';
export const CHANGE_TICKET = 'checkout/change/ticket';
export const REMOVE_TICKET = 'checkout/remove/ticket';
export const CLEAR_TICKETS = 'checkout/clear/tickets';
export const SELECT_TICKET = 'checkout/select/ticket';
export const TOGGLE_VALIDATIONS = 'checkout/toggle/validations';
export const VALIDATE_CUSTOMERS_REQUEST = 'customer/validate/request';
export const VALIDATE_CUSTOMERS_SUCCESS = 'customer/validate/success';
export const VALIDATE_CUSTOMERS_FAILURE = 'customer/validate/failure';
export const PREPARE_PAYMENT_REQUEST = 'payment/prepare/request';
export const PREPARE_PAYMENT_SUCCESS = 'payment/prepare/success';
export const PREPARE_PAYMENT_FAILURE = 'payment/prepare/failure';

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

const validateCustomersRequest = () => ({
  type: VALIDATE_CUSTOMERS_REQUEST
});

const validateCustomersSuccess = (ticketIndex, invalidFields) => ({
  type: VALIDATE_CUSTOMERS_SUCCESS,
  payload: {
    ticketIndex,
    invalidFields
  }
});

const validateCustomersFailure = message => ({
  type: VALIDATE_CUSTOMERS_FAILURE,
  payload: message
});

export const validateCustomers = () => async (dispatch, getState) => {
  dispatch(validateCustomersRequest());

  const state = getState();
  const tickets = getTickets(state);

  try {
    const validations = await Promise.all(
      tickets.map(async ticket => {
        // for each ticket, validate dni and email are not duplicated
        const responses = await Promise.all([
          get(CUSTOMER, { identificationType: 'DNI', identificationNumber: ticket.dni }),
          get(CUSTOMER, { emailAddress: ticket.email })
        ]);

        // process the responses and set the invalid fields for each ticket
        const json = await Promise.all(responses.map(response => response.json()));
        const invalidFields = [];

        if (json[0].data.length > 0) {
          invalidFields.push('dni');
        }

        if (json[1].data.length > 0) {
          invalidFields.push('email');
        }

        return invalidFields;
      })
    );

    for (let i = 0; i < validations.length; i++) {
      const invalidFields = validations[i];

      if (invalidFields.length > 0) {
        // if the ticket has some invalid field, push it to the store and show it
        dispatch(validateCustomersSuccess(i, invalidFields));
        return;
      }
    }

    // if no validation errors where found, proceed to the review
    dispatch(validateCustomersSuccess());
    navigate('/checkout/review/');
  } catch (e) {
    dispatch(validateCustomersFailure(e.message));
  }
};

const preparePaymentRequest = () => ({
  type: PREPARE_PAYMENT_REQUEST
});

const preparePaymentSuccess = purchase => ({
  type: PREPARE_PAYMENT_SUCCESS,
  payload: purchase
});

const preparePaymentFailure = message => ({
  type: PREPARE_PAYMENT_FAILURE,
  payload: message
});

export const preparePayment = () => async (dispatch, getState) => {
  dispatch(preparePaymentRequest());

  const state = getState();
  const tickets = getTickets(state);

  try {
    // create the customers
    const customers = await Promise.all(
      tickets.map(ticket =>
        post(CUSTOMER, {
          data: {
            type: 'customer',
            attributes: {
              fullName: ticket.name,
              emailAddress: ticket.email,
              identificationType: 'DNI',
              identificationNumber: ticket.dni
            }
          }
        }).then(response => response.json())
      )
    );

    // create the tickets
    const reservedTickets = await Promise.all(
      customers.map(customer =>
        post(TICKET, {
          data: {
            type: 'ticket',
            attributes: {},
            relationships: {
              customer: {
                data: {
                  id: customer.data.id,
                  type: 'customer'
                }
              }
            }
          }
        }).then(response => response.json())
      )
    );

    // create the purchase
    const purchase = await post(PURCHASE, {
      data: {
        type: 'purchase',
        relationships: {
          ticket: {
            data: R.map(
              R.compose(
                R.pick(['type', 'id']),
                R.prop('data')
              )
            )(reservedTickets)
          },
          customer: { data: R.pick(['type', 'id'])(customers[0].data) }
        }
      }
    }).then(response => response.json());

    dispatch(preparePaymentSuccess(purchase));

    // redirect to the payment page
  } catch (e) {
    dispatch(preparePaymentFailure(e.message));
  }
};
