import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProviders from '~/app/providers/AppProviders';
import MainLayout from '~/app/layout/MainLayout';
import AppRoutes from '~/app/routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
