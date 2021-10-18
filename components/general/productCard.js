import React from 'react';
import AddToCartBtn from './addToCartBtn';

const ProductCard = ({ item }) => {
  return (
    <div className="w-full md:w-[47%] lg:w-[30%] group transition-all ease-in-out duration-300 mb-12 m-2 xl:mx-3 2xl:mx-4 ">
      {/* best seller tag */}

      {/* image */}
      <div
        className="w-full h-72 xl:h-96 bg-gray-200 relative mb-3 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${item?.image?.src})` }}
      >
        {item?.bestseller ? (
          <div className="absolute px-4 py-1 text-sm bg-white top-0 left-0">
            Bestseller
          </div>
        ) : null}

        <AddToCartBtn
          className="absolute bottom-0 left-0 w-full bg-black text-white justify-center uppercase text-lg  flex opacity-100 sm:opacity-0 sm:group-hover:opacity-100 h-[16%]  sm:h-0  sm:group-hover:h-[16%] cursor-pointer transition-all ease-in-out duration-300 items-center"
          product={item}
        />
      </div>
      {/* details */}
      <div className="flex flex-col">
        <span className="text-[#656565] font-bold text-lg mb-1 capitalize">
          {item?.category}
        </span>
        <span className="text-2xl text-black font-bold">{item?.name}</span>
        <span className="text-[#656565] font-normal text-xl mt-2">
          {' '}
          $ {item.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
