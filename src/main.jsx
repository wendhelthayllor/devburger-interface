import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from 'styled-components';

import { router } from './routes';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import stripePromise from './config/stripeConfig';
import { standardTheme } from './styles/themes/standard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          < RouterProvider router={router} />
        </Elements>
        < GlobalStyles />
        < ToastContainer autoClose={2000} theme='dark' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
