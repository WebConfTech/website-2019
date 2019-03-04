import React from 'react';

// Layouts
import SectionLayout from 'layouts/section';

const CheckoutPage = props => (
  <SectionLayout sectionTitle="Entradas" currentPath={props.location.pathname}>
    Checkout
  </SectionLayout>
);

export default CheckoutPage;
