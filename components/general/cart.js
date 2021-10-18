import React from 'react';
import { useCartContext } from '../../context/cart';

import { Cart, Close } from '../../assets/img/svg';

const CartComponent = () => {
  const { total, cart, toggleCartOpen, openCart, clearCart } = useCartContext();
  return (
    <div className=" cursor-pointer">
      <div className="relative">
        <Cart
          onClick={toggleCartOpen}
          className="transform scale-[60%]	sm:scale-100"
        />
        {total > 0 ? (
          <div className="absolute w-5 h-5 text-sm bottom-0 right-0 transform translate-x-[50%] translate-y-[50%] flex items-center justify-center bg-black text-white ">
            {total}
          </div>
        ) : null}
      </div>

      {/* cart dropdown */}
      {openCart ? (
        <div className="absolute bottom-[-2%] right-0 transform translate-y-[100%] bg-white ring-2 ring-[#E4E4E4] px-5 w-screen sm:w-[80%] lg:w-[50%] xl:w-[30%]">
          <div className="relative py-5">
            <div onClick={toggleCartOpen} className="ml-auto w-min">
              <Close />
            </div>
            <div className=" max-h-[80vh] sm:max-h-[60vh] lg:max-h-[40vh] overflow-y-auto">
              {Object.values(cart).map((item, index) => (
                <div className="flex border-b border-[#C2C2C2] py-5 justify-between items-center">
                  <div className="w-[55%]">
                    <h3 className="text-md font-bold text-black mb-1">
                      {item?.name} X {item.quantity}
                    </h3>
                    <span className="text-xl text-[#656565] font-thin">
                      ${item?.price}
                    </span>
                  </div>
                  <div
                    className="bg-gray-300 w-[40%] h-20"
                    style={{
                      backgroundImage: `url('${item?.image?.src}')`,
                      backgroundSize: 'cover',
                    }}
                  ></div>
                </div>
              ))}
              {Object.values(cart).length === 0 && (
                <div>
                  <h3 className="text-md font-bold text-black mb-1 text-center">
                    No item added to Cart Yet
                  </h3>
                </div>
              )}
            </div>
          </div>

          {/* clear cart */}
          {Object.values(cart).length > 0 && (
            <div
              onClick={clearCart}
              className="w-full ring-2 ring-black flex items-center justify-center uppercase py-2 text-lg mb-4 cursor-pointer"
            >
              <span>Clear</span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default CartComponent;
