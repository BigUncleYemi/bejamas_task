import React from 'react';

import Checbox from './checkBox';

const Filter = ({ title, options, setSelected, changeIndex }) => {
  return (
    <div className="pb-10 border-b border-[#C2C2C2] mb-8">
      <h3 className="text-black font-bold text-lg mb-10">{title}</h3>
      <div>
        {Object.values(options)?.map((item, index) => (
          <Checbox
            item={item}
            key={`${title}-option-${index}`}
            onClick={data => setSelected(changeIndex, data)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
