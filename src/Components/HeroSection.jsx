import React, { useEffect, useState, useRef } from 'react';
import personImage from '../Assets/ansar.png';
import backgroundImage from '../Assets/backgroundimage.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        setIsVisible(entry.isIntersecting);
      },
      {
        // Trigger when element is 20% visible
        threshold: 0.2,
        // Add root margin to trigger slightly before the element comes into view
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full xs:h-[72vh] md:h-[100vh] overflow-hidden ">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 ">
        <img 
          src={backgroundImage}
          alt="Background"
          className={`w-full h-full object-cover ${
            isVisible ? 'animate-[kenburns_20s_ease-in-out_infinite]' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r opacity-90 "></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 md:py-0 ">
        {/* Left Content */}
        <div className="flex-1 mt-8 md:mt-0 z-10 ">
          <div className="flex items-start ">
            {/* Animated Green Line with glow effect */}
            <div 
              className={`w-3 bg-green-500 ml-2 shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-1000 ease-out  ${
                isVisible ? 'h-32 md:h-64' : 'h-0'
              }`}
            />

            {/* Text Content */}
            <div className="space-y-2 ml-6 md:ml-20 ">
              <h2 
                className={`text-white text-2xl sm:text-3xl md:text-5xl font-bold whitespace-nowrap 
                  ${isVisible ? 'animate-[slideFromRight_0.8s_ease-out_forwards]' : 'opacity-0'}`}
              >
                Empowered by
              </h2>
              <div className="overflow-hidden">
                <h1 
                  className={`text-white text-4xl sm:text-5xl md:text-8xl font-bold leading-tight
                    ${isVisible ? 'animate-[clipReveal_1s_ease-out_0.3s_forwards]' : 'opacity-0'}`}
                >
                  <span className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Ansar</span>
                  <br />
                  <span className="hover:text-green-400 transition-colors duration-300 cursor-pointer">Muhammed</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Person Image with floating animation */}
        <div 
  className={`w-full md:w-1/3 h-[400px] md:h-full flex flex-col justify-end items-center xs:mt-[100px]
    ${isVisible ? 'animate-[fadeIn_1.2s_ease-out_0.8s_forwards]' : 'opacity-0'}`}
>
  <img 
  
    src={personImage}
    alt="Ansar Muhammed"
    className="w-3/4 md:w-full h-auto object-contain  md:scale-110 md:-ml-24 xs:mt-[10px]"
  />
</div>




      </div>

      {/* Animated particles in the background */}
      <div className="absolute inset-0 pointer-events-none">
  {isVisible && (
    <>
      {/* Existing Particles */}
      <div className="absolute w-4 h-4 bg-green-500 rounded-full opacity-20 animate-[particle1_10s_linear_infinite]" style={{ top: '10%', left: '20%' }} />
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-20 animate-[particle2_15s_linear_infinite]" style={{ top: '30%', left: '50%' }} />
      <div className="absolute w-2 h-2 bg-green-300 rounded-full opacity-20 animate-[particle3_12s_linear_infinite]" style={{ top: '70%', left: '80%' }} />
      <div className="absolute w-2 h-2 bg-green-100 rounded-full opacity-20 animate-[particle3_12s_linear_infinite]" style={{ top: '60%', left: '62%' }} />
      <div className="absolute w-2 h-2 bg-green-300 rounded-full opacity-20 animate-[particle3_12s_linear_infinite]" style={{ top: '680%', left: '32%' }} />
      <div className="absolute w-2 h-2 bg-green-100 rounded-full opacity-20 animate-[particle3_12s_linear_infinite]" style={{ top: '62%', left: '40%' }} />
      <div className="absolute w-2 h-2 bg-green-300 rounded-full opacity-20 animate-[particle3_12s_linear_infinite]" style={{ top: '88%', left: '88%' }} />
      <div className="absolute w-2 h-2 bg-green-100 rounded-full opacity-20 animate-[particle3_12s_linear_infinite]" style={{ top: '6%', left: '50%' }} />
      


      {/* Additional Particles */}
      <div className="absolute w-4 h-4 bg-green-400 rounded-full opacity-20 animate-[particle1_10s_linear_infinite]" style={{ top: '10%', left: '20%' }} />
      <div className="absolute w-4 h-4 bg-green-500 rounded-full opacity-20 animate-[particle1_10s_linear_infinite]" style={{ top: '50%', left: '50%' }} />
      <div className="absolute w-4 h-4 bg-green-600 rounded-full opacity-20 animate-[particle1_10s_linear_infinite]" style={{ top: '25%', right: '30%' }} />
      <div className="absolute w-4 h-4 bg-green-700 rounded-full opacity-20 animate-[particle1_10s_linear_infinite]" style={{ top: '13%', left: '550%' }} />
      <div className="absolute w-4 h-4 bg-green-800 rounded-full opacity-20 animate-[particle1_10s_linear_infinite]" style={{ top: '18%', left: '25%' }} />
    </>
  )}
</div>


    </div>
  );
};

export default HeroSection;