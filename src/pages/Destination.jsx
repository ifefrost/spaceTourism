import data from "../data.json";
import { useState } from "react";

const Destination = () => {
  const destinations = data.destinations;
  const [selected, setSelected] = useState(0);
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='flex'>
        <h5 className='uppercase text-gray-500 tracking-far'>01</h5>
        <h5 className='uppercase tracking-farthest ml-5'>
          Pick your destination
        </h5>
      </div>
      <picture className='w-[170px] my-10'>
        <source srcSet={destinations[selected].images.webp} type='image/webp' />
        <img src={destinations[selected].images.png} />
      </picture>
      <div className='text-sm font-medium text-center purp'>
        <div className='flex flex-wrap -mb-px'>
          <div className='mr-2'>
            <div
              onClick={() => setSelected(0)}
              className={`${
                selected == 0
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } border-b-2 uppercase inline-block p-4 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 0 ? "page" : ""}`}
            >
              Moon
            </div>
          </div>
          <div className='mr-2'>
            <div
              onClick={() => setSelected(1)}
              className={`${
                selected == 1
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } border-b-2 uppercase inline-block p-4 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 1 ? "page" : ""}`}
            >
              Mars
            </div>
          </div>
          <div className='mr-2'>
            <div
              onClick={() => setSelected(2)}
              className={`${
                selected == 2
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } border-b-2 uppercase inline-block p-4 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 2 ? "page" : ""}`}
            >
              Europa
            </div>
          </div>
          <div className='mr-2'>
            <div
              onClick={() => setSelected(3)}
              className={`${
                selected == 3
                  ? "active text-white border-white"
                  : "border-transparent hover:border-gray-300"
              } border-b-2 uppercase inline-block p-4 rounded-t-lg cursor-pointer`}
              aria-current={`${selected == 3 ? "page" : ""}`}
            >
              Titan
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='uppercase'>{destinations[selected].name}</h2>
        <p className='purp'>{destinations[selected].description}</p>
      </div>
      <hr />
      <div className='mt-10'>
        <p className="uppercase purp">Avg. Distance</p>
        <p className='uppercase text-[2rem] belle'>{destinations[selected].distance}</p>
      </div>
      <div className='mt-10'>
        <p className="uppercase purp">Est. Travel Time</p>
        <p className='uppercase text-[2rem] belle'>{destinations[selected].travel}</p>
      </div>
    </div>
  );
};

export default Destination;
