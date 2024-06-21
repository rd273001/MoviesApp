import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 m-auto z-30 border-2 border-gray-400 py-8 px-12 flex flex-col items-center justify-center h-fit rounded-2xl bg-[radial-gradient(#bbb,#444)] w-fit'>
      <div className='flex p-3 bg-[conic-gradient(indigo,purple,violet,white)] rounded-full animate-[spin_350ms_linear_infinite] duration-1000'>
        <div className='rounded-full bg-[radial-gradient(#eee,#444)] p-5 animate-[spin_300ms_linear_infinite_reverse]'>
          <div className='size-4 -m-4 rounded-full bg-[radial-gradient(#eee,#444)]'></div>
        </div>
      </div>
      <p className='text-lg font-medium mt-1'>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;