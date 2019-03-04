import React from 'react';
import SectionLayout from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';

const CheckoutPage = () => (
  <SectionLayout sectionTitle="Entradas">
    <TicketSelector />
    <TicketForm />
  </SectionLayout>
);

export default CheckoutPage;
