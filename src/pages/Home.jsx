const Home = () => {
  return (
    <div className='mx-auto text-center'>
      <div className='w-[327px]'>
        <h5 className='leading uppercase tracking-farthest purp'>
          So, you want to travel to
        </h5>
        <h2 className='uppercase'>Space</h2>
        <p className='purp'>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className="flex justify-center mt-20">
        <button className='bg-white w-[150px] h-[150px] rounded-full'>
          <h6 className='black uppercase'>Explore</h6>
        </button>
      </div>
    </div>
  );
};

export default Home;
