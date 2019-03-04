import React from 'react';
import SectionLayout from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';
import { TicketValidationMessage } from 'components/TicketValidationMessage';

const CheckoutPage = props => (
  <SectionLayout sectionTitle="Entradas" currentPath={props.location.pathname}>
    <TicketSelector />
    <TicketForm />
    <TicketValidationMessage />
  </SectionLayout>
);

export default CheckoutPage;
