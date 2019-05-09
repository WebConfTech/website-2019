import React from 'react';
import { CTALeafLike } from 'lib';

const AsDiv = props => <div {...props}>{props.children}</div>;

export const BuyTicketButton = ({ className = '' }) => (
  <CTALeafLike
    title="Quiero mi entrada"
    as={AsDiv}
    color="secondary"
    className={className}
    hideArrow
  >
    Entradas
    <br />
    agotadas
  </CTALeafLike>
);
