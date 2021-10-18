import React from 'react';
import { AddToCartBtn } from '../../components';

const PhotoOfTheDay = ({ featuredProduct = {} }) => {
  return (
    <div className="mb-16 px-2 sm:px0">
      {/* top section */}
      <div className="container mx-auto flex items-center justify-between mb-8 sm:mb-7">
        <h3 className="font-bold text-3xl sm:text-4xl">
          {featuredProduct?.name}
        </h3>

        <AddToCartBtn
          className="hidden sm:w-[30%] sm:flex xl:w-64"
          product={featuredProduct}
        />
      </div>

      {/* image section */}

      <div
        className="h-60 sm:h-[60vh] container mx-auto relative mb-7 sm:mb-10 bg-cover bg-no-repeat bg-center bg-blue-100"
        style={{ backgroundImage: `url(${featuredProduct?.image?.src})` }}
      >
        <div className="absolute text-sm	sm:text-lg bg-white text-black font-bold pt-4 sm:pt-5 pl-10 sm:pl-12  pb-5 sm:pb-7  sm:pr-12 pr-10 left-0 bottom-0">
          Photo of the day
        </div>
      </div>

      {/* add to cart second cta */}

      <AddToCartBtn
        className="sm:hidden mb-10 flex w-full"
        product={featuredProduct}
      />

      {/* info section */}

      <div className="flex flex-col md:flex-row container mx-auto justify-between items-start pb-16 border-b-2 border-[#E4E4E4]">
        {/* info section */}
        <div className="w-full md:w-6/12">
          <h3 className="font-bold text-xl mt-2 mb-12 md:mb-0">
            About the {featuredProduct?.name}
          </h3>
          <span className="hidden md:block  text-[#656565] font-bold text-xl mb-3">
            {featuredProduct.category}
          </span>
          <p className="text-[#656565] font-normal font-xl mb-6 md:mb-0">
            {featuredProduct?.details?.description}
          </p>
          <div></div>,
        </div>

        {/* related setion */}
        <div className="md:w-4/12 w-full flex flex-col items-start md:items-end">
          <h3 className="font-bold text-xl mb-8 md:mb-7">People also buy</h3>

          {/* Image holder */}
          <div className="flex w-full justify-between mb-12">
            {featuredProduct?.details?.recommendations.map((item, index) => (
              <div
                key={`featured-${index}`}
                className="w-28 h-36 bg-blue-100 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.src})` }}
              ></div>
            ))}
          </div>

          {/* deals */}

          <h3 className="font-bold text-xl mb-2">Details</h3>
          <span className="text-md font-normal text-[#656565] mb-2">
            Size: 1020 x 1020 pixel
          </span>
          <span className="text-md font-normal text-[#656565]">
            Size: 15 mb
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoOfTheDay;
