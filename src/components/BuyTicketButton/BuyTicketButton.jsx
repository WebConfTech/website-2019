import React from 'react';
import { Link } from 'gatsby';
import { CTALeafLike } from 'lib';

export const BuyTicketButton = ({ className = '' }) => (
  <CTALeafLike
    title="Quiero mi entrada"
    as={Link}
    to="/checkout/"
    color="secondary"
    className={className}
  >
    Quiero
    <br />
    mi entrada
  </CTALeafLike>
);
