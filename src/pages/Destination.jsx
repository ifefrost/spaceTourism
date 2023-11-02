import { useState } from "react";
import PropTypes from "prop-types";

const Destination = ({ data }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='flex flex-col items-center text-center'>
      <h5 className='uppercase barlowcond text-2xl tracking-widest my-5'>
        <span className='text-gray-500 mr-2 font-bold'>01</span>
        Pick your destination
      </h5>
      <picture className='w-[170px] my-5'>
        <source srcSet={data[selected].images.webp} type='image/webp' />
        <img src={data[selected].images.png} />
      </picture>
      <div className='text-center purp my-5'>
        <div className='flex flex-wrap -mb-px'>
          <div className='mr-5'>
            <div
              onClick={() => setSelected(0)}
              className={`${
                selected == 0
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } barlowcond tracking-widest border-b-2 uppercase inline-block py-2 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 0 ? "page" : ""}`}
            >
              Moon
            </div>
          </div>
          <div className='mr-5'>
            <div
              onClick={() => setSelected(1)}
              className={`${
                selected == 1
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } barlowcond tracking-widest border-b-2 uppercase inline-block py-2 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 1 ? "page" : ""}`}
            >
              Mars
            </div>
          </div>
          <div className='mr-5'>
            <div
              onClick={() => setSelected(2)}
              className={`${
                selected == 2
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } barlowcond tracking-widest border-b-2 uppercase inline-block py-2 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 2 ? "page" : ""}`}
            >
              Europa
            </div>
          </div>
          <div className='mr-5'>
            <div
              onClick={() => setSelected(3)}
              className={`${
                selected == 3
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } barlowcond tracking-widest border-b-2 uppercase inline-block py-2 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 3 ? "page" : ""}`}
            >
              Titan
            </div>
          </div>
        </div>
      </div>
      <div className='my-5'>
        <h2 className='uppercase belle text-8xl'>{data[selected].name}</h2>
        <p className='purp'>{data[selected].description}</p>
      </div>
      <hr className='border-gray-700 border-b-1 w-full my-5' />
      <div className='my-5'>
        <p className='uppercase purp'>Avg. Distance</p>
        <p className='uppercase text-2xl belle'>{data[selected].distance}</p>
      </div>
      <div className='my-5'>
        <p className='uppercase purp'>Est. Travel Time</p>
        <p className='uppercase text-2xl belle'>{data[selected].travel}</p>
      </div>
    </div>
  );
};

Destination.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Destination;
