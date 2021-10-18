import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartWrapper({ children }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = item => {
    if (!item) return;

    let inCart = cart[item.id];
    if (inCart) {
      setCart(cart => ({
        ...cart,
        [item.id]: { ...cart[item.id], quantity: cart[item.id].quantity + 1 },
      }));

      setTotal(total => total + 1);
      setOpenCart(true);
      return;
    }

    setCart(cart => ({ ...cart, [item.id]: { ...item, quantity: 1 } }));
    setTotal(total => total + 1);
    setOpenCart(true);
  };

  const removeFromcart = item => {
    let inCart = cart[item.id];

    if (!inCart) return;

    if (inCart.quantity < 2) {
      const newCart = { ...cart };
      delete newCart[item.id];

      setCart({ newCart });
      setTotal(total => total - 1);
      return;
    }

    setCart(cart => ({
      ...cart,
      [item.id]: { ...cart[item.id], quantity: cart[item.id].quantity - 1 },
    }));
    setTotal(total => total - 1);
  };

  const toggleCartOpen = () => {
    setOpenCart(openCart => !openCart);
  };

  const clearCart = () => {
    setCart({});
    setTotal(0);
    setOpenCart(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeFromcart,
        clearCart,
        toggleCartOpen,
        openCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
