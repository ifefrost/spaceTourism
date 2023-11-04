import PropTypes from "prop-types";
import { useState } from "react";

const Crew = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const goToSlide = (index) => {
    setCurrent(index);
  };
  return (
    <div className='flex flex-col items-center text-center'>
      <h5 className='uppercase barlowcond text-2xl tracking-widest my-5'>
        <span className='text-gray-500 mr-2 font-bold'>02</span> Meet your crew
      </h5>
      <div className='w-1/2'>
        <picture >
          <source srcSet={data[current].images.webp} type='image/webp' />
          <img src={data[current].images.png} />
        </picture>
      </div>
      <hr className=" border-gray-600 w-full border-b-1" />
      <div className='m-auto w-full overflow-hidden h-full flex flex-col'>
        <div className='flex order-2'>
          {data.map((crew, index) => (
            <div
              key={crew.name}
              className='flex flex-col items-center justify-center b flex-1 min-w-full'
            >
              <div className='w-72'>
                <p className='belle uppercase text-gray-500'>{crew.role}</p>
                <p className='text-xl uppercase belle tracking-wide'>
                  {crew.name}
                </p>
                <p className='text-sm font-medium text-center purp'>
                  {crew.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center gap-3 order-1 w-full z-30 my-10'>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-white'
            aria-current='false'
            aria-label='Slide 1'
            onClick={() => goToSlide(0)}
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-gray-500'
            aria-current='false'
            aria-label='Slide 2'
            onClick={() => goToSlide(1)}
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-gray-500'
            aria-current='false'
            aria-label='Slide 3'
            onClick={() => goToSlide(2)}
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-gray-500'
            aria-current='false'
            aria-label='Slide 4'
            onClick={() => goToSlide(3)}
          ></button>
        </div>
      </div>
    </div>
  );
};

Crew.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Crew;
