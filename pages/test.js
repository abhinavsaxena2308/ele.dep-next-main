import React from 'react';
import Slider from '../Components/Slider';

const HomePage = () => {
  return (
    <>
      <div className='div -mt-[30rem] mx-[4.5%]'>
        <h1 className='text-white text-center text-4xl'>Automatic Image Slider Example</h1><br></br>
        <Slider />
      </div><br></br>
    </>
  );
};

export default HomePage;
