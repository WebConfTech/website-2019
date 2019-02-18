import React from 'react';
import { ThemeProvider } from 'styled-components';

// Themes
import theme from 'lib/theme';

const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultLayout;
