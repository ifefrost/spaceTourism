import PropTypes from "prop-types";

const Crew = ({ data }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <h5 className='uppercase barlowcond text-2xl tracking-widest my-5'>
        <span className='text-gray-500 mr-2 font-bold'>02</span> Meet your crew
      </h5>
      {data.map((crew, index) => (
        <div key={crew.name} className='flex flex-col items-center my-10'>
          <picture className='w-[170px] my-10'>
            <source srcSet={crew.images.webp} type='image/webp' />
            <img src={crew.images.png} />
          </picture>
          <p className='belle uppercase text-gray-500'>{crew.role}</p>
          <p className='text-xl uppercase belle tracking-wide'>{crew.name}</p>
          <p className='text-sm font-medium text-center purp'>{crew.bio}</p>
        </div>
      ))}
    </div>
  );
};

Crew.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Crew;
