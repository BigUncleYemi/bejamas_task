import React from 'react';

import { CaretDown } from '../../assets/img/svg';

const Pagination = ({ current, length, onClick }) => {
  return (
    <div className="flex  w-full items-center justify-center mb-16">
      <div className="flex items-center">
        {current > 0 && (
          <CaretDown
            onClick={() => onClick(current - 1)}
            className="transform rotate-90 mr-2"
          />
        )}
        {Array.from({ length }, (v, i) => i).map((item, index) => (
          <span
            onClick={() => onClick(item)}
            key={`pagination-${index}`}
            className={` mx-3 text-lg cursor-pointer ${
              current === item ? 'text-black' : 'text-[#B4B4B4]'
            }`}
          >
            {item + 1}
          </span>
        ))}
        {current < length - 1 && (
          <CaretDown
            onClick={() => onClick(current + 1)}
            className="transform -rotate-90 ml-2"
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;
