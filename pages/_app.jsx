/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { wrapper } from '../store';
import './styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
