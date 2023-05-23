import '../styles/globals.css';
import Footer from "../Components/Footer"
import Navbar from '../Components/Navbar';
import BgVideo from '../Components/BgVideo';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <BgVideo />
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    <Footer />

    </>
    
  );
}
