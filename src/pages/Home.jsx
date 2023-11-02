const Home = () => {
  return (
    <div className='flex flex-col min-h-[70vh] justify-center items-center text-center lg:flex-row lg:text-left'>
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
      <div className='flex justify-center mt-20'>
        <div className='bg-white group w-[150px] h-[150px] rounded-full'>
          <button className='bg-white group-hover:scale-150 transition-transform bg-opacity-25 w-[150px] h-[150px] rounded-full'>
            <p className='black belle text-lg uppercase group-hover:scale-75'>Explore</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
