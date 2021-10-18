import React, { useState } from 'react';

// icon
import { Settings, Close } from '../../assets/img/svg';

// product data
import { filterData, filterPrice } from './data';

// component

import { BreadCrumb, Sort, Filter, ProductCard, Pagination } from '../general/';

const PremiumPhotos = ({
  landingproductData = [],
  order,
  setOrder,
  selected,
  setSelected,
  setSelectedFilterPrice,
  setSelectedFilter,
}) => {
  const [options, setOptions] = useState(filterData);
  const [current, setCurrent] = useState(0);
  const [rowsPerPage] = useState(6);
  const [priceOptions, setPriceOptions] = useState(filterPrice);

  // mobile
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(showFilter => !showFilter);
  };

  // clear filters
  const clearFilters = () => {
    //  reset filter
    setSelectedFilterPrice(null);
    setSelectedFilter([]);
    setOptions(filterData);
    setPriceOptions(filterPrice);
    toggleFilter();
    setCurrent(0);
  };

  const handleSelected = (section, option) => {
    if (!option.selected) {
      setSelectedFilter(prevSetSelectedFilter => [
        ...prevSetSelectedFilter,
        option.value,
      ]);
    } else {
      setSelectedFilter(prevSetSelectedFilter =>
        prevSetSelectedFilter.filter(item => item !== option.value),
      );
    }
    setOptions(options => {
      let newData = [...options];

      newData[section] = {
        ...newData[`${section}`],
        data: {
          ...newData[section].data,
          [option.value]: {
            ...option,
            selected: !option.selected,
          },
        },
      };
      return newData;
    });
    setCurrent(0);
  };

  const handlePriceSelected = (section, option) => {
    if (!option.selected) {
      setSelectedFilterPrice(option.value);
    } else {
      setSelectedFilterPrice(null);
    }
    setPriceOptions(options => {
      let newData = [...options];

      newData[section] = {
        ...filterPrice[section],
        data: {
          ...filterPrice[section].data,
          [option.value]: {
            ...option,
            selected: !option.selected,
          },
        },
      };
      return newData;
    });
    setCurrent(0);
  };

  const setPage = page => {
    setCurrent(page);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center mb-16">
        <BreadCrumb />
        <Sort {...{ order, setOrder, selected, setSelected }} />
        <Settings
          onClick={toggleFilter}
          className={`mr-2 md:hidden cursor-pointer`}
        />
      </div>

      {/* product selection */}
      <div className="container m-auto flex items-start justify-between">
        {/* filter */}
        <div
          className={`w-3/12 p-0   ${showFilter
              ? 'block fixed bottom-0 left-0 h-[100vh]  w-[100vw] z-50 '
              : 'hidden'
            } md:block`}
        >
          {showFilter ? (
            <div className="h-[25%]">
              <div className="bg-black opacity-[0.2] h-[60%]"></div>
              <div className="bg-white h-[42%] flex items-center justify-between px-4">
                <span className="text-2xl font-bold">Filter</span>
                <div className="cursor-pointer" onClick={toggleFilter}>
                  <Close />
                </div>
              </div>
            </div>
          ) : null}
          <div className="bg-white w-full bottom-0 h-[75%]  overflow-y-auto sm:pr-12 sm:pl-4 px-4 sm:px-0">
            {options.map((item, index) => (
              <Filter
                key={`${item.title}--filter--${index}`}
                title={item.title}
                setSelected={handleSelected}
                options={item.data}
                changeIndex={index}
              />
            ))}
            {priceOptions.map((item, index) => (
              <Filter
                key={`${item.title}--filter--${index}`}
                title={item.title}
                setSelected={handlePriceSelected}
                options={item.data}
                changeIndex={index}
              />
            ))}
          </div>

          {/* mobile filter saave */}

          {showFilter ? (
            <div className="absolute bottom-0 z-40 flex w-screen bg-white pt-4" style={{ borderTop: '3px solid #E5E5E5' }}>
              <div
                onClick={clearFilters}
                className="w-full ring-2 ring-black flex items-center justify-center uppercase py-2 text-lg mb-4 mx-4 cursor-pointer"
              >
                <span>Clear</span>
              </div>
              <div
                onClick={toggleFilter}
                className="w-full  bg-black text-white flex items-center justify-center uppercase py-2 text-lg mb-4 mx-4 cursor-pointer"
              >
                <span>Save</span>
              </div>
            </div>
          ) : null}
        </div>

        {/* catalogue */}
        <div className="w-full xl:w-9/12">
          <div className="w-full flex flex-wrap items-center mb-12">
            {stableSort(landingproductData, getComparator(order, selected))
              .slice(current * rowsPerPage, current * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <ProductCard item={item} key={`product-card-${index}`} />
              ))}
            {stableSort(landingproductData, getComparator(order, selected))
              .slice(current * rowsPerPage, current * rowsPerPage + rowsPerPage).length === 0 && (
                <div>
                  <h3 className="text-md font-bold text-black mb-1 text-center">
                    No Premium Photos for now.
                  </h3>
                </div>)}
          </div>
          {/* pagination */}
          <Pagination
            current={current}
            length={Math.ceil(landingproductData.length / rowsPerPage)}
            onClick={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumPhotos;
