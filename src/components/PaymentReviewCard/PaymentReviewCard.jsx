import React from 'react';
import { connect } from 'react-redux';
import { TICKET_PRICE } from 'data/constants';
import { getTickets, isPreparingPayment } from 'data/checkout/selectors';
import { selectTicket, preparePayment } from 'data/checkout/actions';
import { Link } from 'gatsby';
import { CircleButton } from 'lib/Button';
import { Card } from 'lib/Card';
import cashIcon from 'assets/images/icon-cash.svg';
import ticketIcon from 'assets/images/icon-ticket.svg';
import styles from './styles.module.scss';

const _PaymentReviewCard = ({ tickets, isPreparing, onTicketClick, onPayment }) => {
  const total = TICKET_PRICE * tickets.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¡Ya tenemos todo lo que necesitamos! Revisá a continuación:</h2>
      <Card>
        <div className={styles.cardContents}>
          <div className={styles.ticketsContainer}>
            <h3 className={styles.subtitle}>
              <img src={ticketIcon} className={styles.ticketIcon} alt="Ticket" />
              Entradas
            </h3>
            <p className={styles.ticketsInfo}>
              Podés hacer clic en cualquier entrada para editarla o cancelarla.
            </p>
            <ul className={styles.tickets}>
              {tickets.map((ticket, ticketIndex) => (
                <li key={ticket.dni} className={styles.ticketContainer}>
                  <Link
                    to="/checkout/"
                    onClick={() => onTicketClick(ticketIndex)}
                    className={styles.ticket}
                  >
                    <span className={styles.ticketLabel}>{ticket.name}</span>
                    <span className={styles.ticketDetail}>
                      {ticket.dni} - {ticket.email}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.info}>
            <h3 className={styles.subtitle}>
              <img src={cashIcon} className={styles.cashIcon} alt="Pago" />
              Pago
            </h3>
            <p className={styles.infoText}>
              Utilizamos <strong>Mercado Pago</strong> para procesar los pagos de nuestras entradas.
              Cuando hagas clic en el botón "Comprar", te redirigiremos al sitio seguro de Mercado
              Pago para que indiques la forma de pago.
            </p>
            <p className={styles.infoText}>
              Aceptamos pagos a través de tarjetas de crédito y débito.
            </p>
            <p className={styles.infoText}>
              <strong className={styles.textHighlight}>El total a pagar es de:</strong>
              <span className={styles.price}>AR$ {total.toLocaleString()}</span>
            </p>
          </div>
          <div className={styles.payButtonContainer}>
            <div className={styles.payButtonMobileBackground}>
              <CircleButton
                className={styles.payButton}
                onClick={onPayment}
                isLoading={isPreparing}
              >
                <span>Comprar</span>
              </CircleButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

_PaymentReviewCard.displayName = 'PaymentReviewCard';

const mapStateToProps = state => ({
  tickets: getTickets(state),
  isPreparing: isPreparingPayment(state)
});

const mapDispatchToProps = dispatch => ({
  onTicketClick: ticketIndex => dispatch(selectTicket(ticketIndex)),
  onPayment: () => dispatch(preparePayment())
});

export const PaymentReviewCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PaymentReviewCard);
