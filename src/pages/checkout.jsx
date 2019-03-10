import React from 'react';
import SectionLayout from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';

const CheckoutPage = props => (
  <SectionLayout sectionTitle="Entradas" currentPath={props.location.pathname}>
    <TicketSelector />
    <TicketForm />
  </SectionLayout>
);

export default CheckoutPage;
