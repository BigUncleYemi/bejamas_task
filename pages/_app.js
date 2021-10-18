import 'tailwindcss/tailwind.css';
import '../styles/global.css';

import { CartWrapper } from '../context/cart';

function MyApp({ Component, pageProps }) {
  return (
    <CartWrapper>
      <Component {...pageProps} />
    </CartWrapper>
  );
}

export default MyApp;
