import React from 'react';
import { Check } from '../../assets/img/svg';

const CheckBox = ({ item, onClick }) => {
  return (
    <div
      className="flex items-center mb-5 cursor-pointer"
      onClick={() => onClick(item)}
    >
      {/* check */}
      <div className="w-5 h-5 ring-2 ring-black mr-5 flex items-center justify-center">
        {item?.selected ? <Check /> : null}
      </div>
      {/* name */}
      <span className="text-black text-lg font-normal">{item.name}</span>
    </div>
  );
};

export default CheckBox;
