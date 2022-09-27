/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import { wrapper } from '../store';
import './styles/globals.css';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...props.pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
