
import { useEffect, useRef, useState } from 'react'



const skillList = [
  {
    name:"logospasum",
    logo:"/client-logo-2.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-3.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-4.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-2.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-3.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-4.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-2.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-3.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-4.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-2.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-3.png"
  },
  {
    name:"logospasum",
    logo:"/client-logo-4.png"
  }
]

const marqueeAnimation = (element, elementWidth, windowWidth) => {
  element.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${windowWidth - elementWidth}px)` }],
    {
      duration: 30000,
      easing: 'linear',
      direction: 'alternate',
      iterations: Infinity,
    }
  );
};

const Marquee = ({ skills = skillList }) => {
  const skillsElementRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (skillsElementRef.current) {
      const elementWidth = skillsElementRef.current.getBoundingClientRect().width;
      marqueeAnimation(skillsElementRef.current, elementWidth, windowWidth);
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <div className="overflow-x-hidden bg-white py-15">
      <div id="skills" className="w-max whitespace-nowrap " ref={skillsElementRef}>
        <div className="flex gap-8 lg:gap-24">
          {skills.map(({ name, logo }, index) => (
            <span key={index} className="flex items-center w-[155px] object-cover">
              <img src={logo} alt={name} className="px-2 size-full" />
              
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

// tear i drop 1fota 4 bar...1st
// olptadin Ds 1fota 4 bar...2nd