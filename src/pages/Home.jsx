const Home = () => {
  return (
    <div className='flex flex-col min-h-[80vh] justify-center items-center text-center lg:flex-row lg:text-left '>
      <div className='lg:w-1/2 flex justify-center'>
        <div className='w-[327px]'>
          <h5 className='leading uppercase tracking-widest barlowcond text-2xl purp'>
            So, you want to travel to
          </h5>
          <h2 className='uppercase belle text-8xl'>Space</h2>
          <p className='purp'>
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
      </div>
      <div className='flex justify-center mt-20 z-10 lg:w-1/2'>
        <button className='bg-white w-[150px] h-[150px] rounded-full lg:w-[300px] lg:h-[300px] relative'>
          <p className='text-black belle text-lg uppercase lg:text-4xl z-10'>
            Explore
          </p>
        </button>
        <div className='bg-white bg-opacity-25 lg:w-[300px] lg:h-[300px] rounded-full hidden lg:block absolute transition-transform hover:scale-150 '></div>
      </div>
    </div>
  );
};

export default Home;
