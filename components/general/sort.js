import React, { useState } from 'react';

// data for drop, can be abstracted later
const options = [
  { name: 'Price', value: 'price' },
  { name: 'Name', value: 'name' },
];

// icons
import { SortArrow } from '../../assets/img/svg';

// dropdown
import DropDown from './dropDown';

const Sort = ({ order, setOrder, selected, setSelected }) => {
  const onSelect = option => {
    setSelected(option.value);
  };
  const orderEntry = () => {
    setOrder(prev => {
      if (prev === 'asc') return 'desc';
      return 'asc';
    });
  };

  return (
    <div className="hidden md:flex  md:mr-4 xl:mr-0 transition-all ease-in-out duration-1000">
      <div className="flex items-center cursor-pointer">
        <SortArrow onClick={orderEntry} />
        <span className="ml-2 mr-4 block text-[#9B9B9B] font-normal">
          Sort By
        </span>
        <DropDown selected={selected} onSelect={onSelect} options={options} />
      </div>
    </div>
  );
};

export default Sort;
