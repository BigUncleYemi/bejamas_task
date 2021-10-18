import React from 'react';

const BreadCrumb = ({ path = ['Photography', 'Premium Photos'] }) => {
  return (
    <div className="flex text-xl pl-4 xl:pl-0 xl:text-3xl font-bold text-black">
      {path.map((item, index, array) => {
        return (
          <span
            className={`ml-3 first:ml-0 ${
              index === array.length - 1 ? 'text-[#9B9B9B] font-normal' : ''
            }`}
            key={`bread-crumb-${index}`}
          >
            {item} {index === array.length - 1 ? '' : ' /'}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
