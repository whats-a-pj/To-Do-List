import React from 'react';

function Home() {
  return (
    <div className="flex flex-row h-screen justify-center">
      <div className="mx-auto w-1/3 text-center text-white bg-rose-800 p-4">
      <div className="text-3xl semibold mb-5">To-do</div>
        <p><span><button className="bg-rose-950 m-2 rounded w-1/12">X</button></span>something 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam doloremque alias vero omnis ea in facere delectus architecto est, ab reprehenderit eum animi! Numquam facere nisi provident alias error?</p>
      </div>
      <div className="mx-auto w-1/3 text-center text-white bg-fuchsia-800 p-4">
      <div className="text-3xl semibold mb-5">In-progress</div>
      <p><span><button className="bg-fuchsia-950 m-2 rounded w-1/12">X</button></span>something 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nesciunt eos quidem rerum fugit iusto, illo reprehenderit. Totam pariatur est facilis veritatis minima corrupti dolorum ex, voluptate vitae dolore. Optio!</p>
      </div>
      <div className="mx-auto w-1/3 text-center text-white bg-blue-800 p-4">
        <div className="text-3xl semibold mb-5">Completed</div>
        <p><span><button className="bg-blue-950 m-2 rounded w-1/12">X</button></span>something 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti facilis vitae dicta debitis soluta consequuntur error libero ut, accusantium itaque minus labore neque cum? Quo ducimus dolore expedita et?</p>
      </div>
    </div>
  );
}

export default Home;
