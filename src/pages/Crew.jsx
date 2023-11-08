import PropTypes from "prop-types";
import { useState } from "react";

const Crew = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const goToSlide = (index) => {
    setCurrent(index);
  };
  return (
    <div className='flex flex-col items-center text-center lg:text-left lg:items-start min-h-full'>
      <h5 className='uppercase barlowcond text-2xl tracking-widest my-5'>
        <span className='text-gray-500 mr-2 font-bold'>02</span> Meet your crew
      </h5>
      <div className='lg:flex lg:w-full h-full'>
        <picture className="lg:order-2 w-full lg:flex-1">
          <source srcSet={data[current].images.webp} type='image/webp' />
          <img
            src={data[current].images.png}
            className='h-64 mx-auto lg:h-full object-cover'
          />
        </picture>
        <hr className=' border-gray-600 border-b-1 lg:hidden' />
        <div className='overflow-hidden h-full flex flex-col lg:h-[60vh] lg:flex-1'>
          <div className='flex flex-col items-center justify-center lg:justify-evenly lg:items-start order-2 flex-1 lg:h-5/6'>
            <div className='w-72 lg:w-full'>
              <p className='belle uppercase lg:text-2xl text-gray-500'>
                {data[current].role}
              </p>
              <p className='text-2xl lg:text-6xl uppercase belle tracking-wide'>
                {data[current].name}
              </p>
              <p className='font-medium purp mt-4 lg:w-6/12'>
                {data[current].bio}
              </p>
            </div>
          </div>
          <div className='flex justify-center lg:justify-start gap-3 lg:order-2 w-full my-5'>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                current == 0 ? "bg-white" : "bg-gray-500"
              }`}
              aria-current='false'
              aria-label='Slide 1'
              onClick={() => goToSlide(0)}
            ></button>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                current == 1 ? "bg-white" : "bg-gray-500"
              }`}
              aria-current='false'
              aria-label='Slide 2'
              onClick={() => goToSlide(1)}
            ></button>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                current == 2 ? "bg-white" : "bg-gray-500"
              }`}
              aria-current='false'
              aria-label='Slide 3'
              onClick={() => goToSlide(2)}
            ></button>
            <button
              type='button'
              className={`w-3 h-3 rounded-full ${
                current == 3 ? "bg-white" : "bg-gray-500"
              }`}
              aria-current='false'
              aria-label='Slide 4'
              onClick={() => goToSlide(3)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

Crew.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Crew;
