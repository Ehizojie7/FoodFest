import React from 'react';
import { useState } from 'react';
import { data } from './data';

const FoodSection = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (minPrice, maxPrice) => {
    setFoods(
      data.filter((item) => {
        const price = parseInt(item.price.slice(1)); // convert the price string to a number
        return price >= minPrice && price <= maxPrice;
      })
    );
  };
  
  // Usage: filterPrice(100, 199);
  
  

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[400px] w-full'>
            <button
              onClick={() => filterPrice(100, 199)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $100-$199
            </button>
            <button
              onClick={() => filterPrice(200, 299)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $200-$299
            </button>
            <button
              onClick={() => filterPrice(300, 399)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $300-$399
            </button>
            <button
              onClick={() => filterPrice(400, 499)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $400-$499
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

        export default FoodSection;