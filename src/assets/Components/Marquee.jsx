import React, { useEffect, useState } from 'react';

const Marquee = () => {
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving((prev) => !prev);  
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white pt-15 pb-10">
      <div
        className={`inline-block ${isMoving ? 'animate-marquee' : 'animate-pause'}`}
      >
        {[...Array(5)].map((_, index) => (
          <span key={index} className="mx-8 text-2xl font-bold inline-block px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Creative IT
          </span>
        ))}
        {[...Array(5)].map((_, index) => (
          <span key={index} className="mx-8 text-2xl font-bold inline-block px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-blue-700 transition-colors">
            RAKTIM
          </span>
        ))}
       
      </div>
    </div>
  );
};

export default Marquee;