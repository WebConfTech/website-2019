import React from 'react';
import { connect } from 'react-redux';
import { getTickets } from 'data/checkout/selectors';
import { CircleButton } from 'lib/Button';
import { Card } from 'lib/Card';
import cashIcon from 'assets/images/icon-cash.svg';
import ticketIcon from 'assets/images/icon-ticket.svg';
import styles from './styles.module.scss';

const _PaymentReviewCard = ({ tickets }) => (
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
            {tickets.map(ticket => (
              <li key={ticket.dni} className={styles.ticketContainer}>
                <button type="button" className={styles.ticket}>
                  <span className={styles.ticketLabel}>{ticket.name}</span>
                  <span className={styles.ticketDetail}>
                    {ticket.dni} - {ticket.email}
                  </span>
                </button>
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
            Cuando hagas clic en el botón "Pagar", te redirigiremos al sitio seguro de Mercado Pago
            para que indiques la forma de pago.
          </p>
          <p className={styles.infoText}>
            Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo a
            través de Rapipago, Pago Fácil y servicios similares.
          </p>
          <p className={styles.infoText}>
            <strong className={styles.textHighlight}>El total a pagar es de:</strong>
            <span className={styles.price}>AR$ 1.500</span>
          </p>
        </div>
        <div className={styles.payButtonContainer}>
          <div className={styles.payButtonMobileBackground}>
            <CircleButton type="button" className={styles.payButton}>
              <span>Comprar</span>
            </CircleButton>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

_PaymentReviewCard.displayName = 'PaymentReviewCard';

const mapStateToProps = state => ({
  tickets: getTickets(state)
});

export const PaymentReviewCard = connect(mapStateToProps)(_PaymentReviewCard);
