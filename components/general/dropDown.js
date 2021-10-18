import React, { useState } from 'react';

// icon
import { CaretDown } from '../../assets/img/svg';

const DropDown = ({ options, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const handleSelection = option => {
    onSelect(option);
    setOpen(false);
  };

  const openOptions = () => {
    setOpen(open => !open);
  };
  return (
    <div
      className="relative transition-all ease-in-out duration-300"
      onClick={openOptions}
    >
      <div className="flex items-center">
        <span className="block mr-2">
          {options.find(item => item.value === selected).name}
        </span>
        <CaretDown
          className={`${
            open ? 'transform rotate-180' : ''
          } transition-all ease-in-out duration-300`}
        />
      </div>
      {open ? (
        <div className=" bg-white ring-1 ring-[#E4E4E4] absolute top-10 right-0 transition-all ease-in-out duration-300 z-50">
          {options.map((item, index) => (
            <div
              className="py-3 px-8 flex items-center justify-center border-b-2 cursor-pointer border-[#E4E4E4] text-md"
              onClick={e => {
                e.stopPropagation();
                handleSelection(item);
              }}
              key={`drop-down-item-${index}`}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
