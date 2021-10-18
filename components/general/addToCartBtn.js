import React, { useEffect } from 'react';
import { useCartContext } from '../../context/cart';

const AddToCartBtn = ({ product, className }) => {
  const { addToCart, cart } = useCartContext();

  const _addToCart = () => {
    addToCart(product);
  };

  useEffect(() => {});
  return (
    <div
      onClick={_addToCart}
      className={`bg-black py-3 px-8 w-full flex items-center justify-center text-white font-medium uppercase cursor-pointer ${
        className ? className : ''
      }`}
    >
      Add to cart
    </div>
  );
};

export default AddToCartBtn;
