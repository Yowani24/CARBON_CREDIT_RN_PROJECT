import React from 'react';
import { DataProvider } from './product';
import EntryPage from './src/entry_page';
// import { StripeProvider } from "@stripe/stripe-react-native"
// import StripeApp from './src/stripe_app';


export default function App() {
  return (
    <DataProvider>
      <EntryPage/>
    </DataProvider>
    // <StripeProvider publishableKey="">
    //   <StripeApp/>
    // </StripeProvider>
  );
}

