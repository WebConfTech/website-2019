import React from 'react';
import SectionLayout from 'layouts/section';
import { TicketSelector } from 'components/TicketSelector';
import { TicketForm } from 'components/TicketForm';
import { TicketValidationMessage } from 'components/TicketValidationMessage';

const CheckoutPage = () => (
  <SectionLayout sectionTitle="Entradas">
    <TicketSelector />
    <TicketForm />
    <TicketValidationMessage />
  </SectionLayout>
);

export default CheckoutPage;
