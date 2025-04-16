import '../styles/globals.css';
import { useEffect } from 'react';
import { socket } from '../utils/socket';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
