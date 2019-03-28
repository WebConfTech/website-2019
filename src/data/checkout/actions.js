import { navigate } from 'gatsby';
import { PAYMENT_URL_TEMPLATE } from 'data/constants';
import { CUSTOMER, TICKET, PURCHASE, get, post } from 'common/api';
import { trackEvent } from 'common/ga';
import { getTickets, getPurchase } from './selectors';

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
export const CLEAR_PURCHASE = 'checkout/purchase/clear';

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
          get(CUSTOMER, {
            'filter[identificationType]': 'DNI',
            'filter[identificationNumber]': ticket.dni
          }),
          get(CUSTOMER, { 'filter[emailAddress]': ticket.email })
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
  let purchase = getPurchase(state);

  if (purchase == null) {
    let tickets = getTickets(state);

    try {
      // create the customers
      tickets = await Promise.all(
        tickets.map(async (ticket, index) => {
          const response = await post(CUSTOMER, {
            data: {
              type: 'customer',
              attributes: {
                fullName: ticket.name,
                emailAddress: ticket.email,
                identificationType: 'DNI',
                identificationNumber: ticket.dni
              }
            }
          });
          const resource = await response.json();

          return {
            ...ticket,
            customer: resource.data.id
          };
        })
      );

      // create the tickets
      tickets = await Promise.all(
        tickets.map(async (ticket, index) => {
          const response = await post(TICKET, {
            data: {
              type: 'ticket',
              attributes: {},
              relationships: {
                customer: {
                  data: {
                    id: ticket.customer,
                    type: 'customer'
                  }
                }
              }
            }
          });
          const resource = await response.json();

          return {
            ...ticket,
            id: resource.data.id
          };
        })
      );

      // create the purchase
      const purchaseResponse = await post(PURCHASE, {
        data: {
          type: 'purchase',
          relationships: {
            ticket: {
              data: tickets.map(ticket => ({
                type: 'ticket',
                id: ticket.id
              }))
            },
            customer: {
              data: {
                type: 'customer',
                id: tickets[0].customer
              }
            }
          }
        }
      });
      const purchaseResource = await purchaseResponse.json();
      purchase = purchaseResource.data;

      dispatch(preparePaymentSuccess(purchase));
    } catch (e) {
      trackEvent('purchase', 'prepare', 'error', e.message);
      dispatch(preparePaymentFailure(e.message));
      return;
    }
  }

  // redirect to the payment page
  trackEvent('purchase', 'prepare', 'success', purchase.id);
  const paymentURL = PAYMENT_URL_TEMPLATE + purchase.attributes.externalId;
  window.location = paymentURL;
};

export const clearPurchase = () => ({
  type: CLEAR_PURCHASE
});
