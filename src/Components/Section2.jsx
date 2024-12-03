import React, { useEffect, useState } from 'react'
import ansar01 from '../Assets/ans-01.png'
import './Home.css'

function Section2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on intersection
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px' // Adds a small buffer before triggering
      }
    );

    const section = document.getElementById('section2');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // CSS classes for animations with conditional visibility
  const imageClasses = `
    rounded-lg w-full max-w-96 h-auto object-cover
    transition-all duration-1000
    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
  `;

  const floatContainer = `
    relative z-10
    ${isVisible ? 'animate-[float_6s_ease-in-out_infinite]' : ''}
  `;

  const contentClasses = `
    flex-1 md:mt-[60px]
    transition-all duration-1000
    ${isVisible ? 'animate-[slideFromRight_1s_ease-out_forwards]' : 'opacity-0 translate-x-20'}
  `;

  const lineClasses = `
    w-1 h-24 bg-emerald-400
    transition-all duration-800
    ${isVisible ? 'animate-[clipReveal_0.8s_ease-out_forwards]' : 'opacity-0 scale-y-0'}
  `;

  const titleClasses = `
    text-3xl sm:text-5xl md:text-5xl text-white font-semibold montserrat
    transition-all duration-1000 delay-300
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `;

  const paragraphClasses = `
    text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-thin montserrat
    sm:mt-8 md:mt-12
    transition-all duration-1000 delay-600
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `;

  return (
    <div id="section2" className="bg-slate-900 w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle effects - Only animate when visible */}
      {isVisible && (
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-[particle1_15s_ease-in-out_infinite]" />
          <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-[particle2_20s_ease-in-out_infinite]" />
          <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-[particle3_25s_ease-in-out_infinite]" />
        </div>
      )}
      
      <div className="w-full max-w-7xl p-8 relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side - Image */}
          <div className={floatContainer}>
            <img 
              src={ansar01}
              alt="Profile"
              className={imageClasses}
            />
          </div>
         
          {/* Right side - Content */}
          <div className={contentClasses}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className={lineClasses}></div>
                <h2 
                  style={{fontWeight:'500'}} 
                  className={titleClasses}
                >
                  Get to<br /> Know Me
                </h2>
              </div>
              {/* Paragraph with margin-top */}
              <p 
                style={{marginTop:'50px'}} 
                className={paragraphClasses}
              >
                Ansar Mohammed is an inspiring figure known for his remarkable journey
                from overcoming the challenges of cleft lips to becoming a champion public
                speaker and the Managing Director of MerakOne Interiors. His story is a 
                testament to resilience, determination, and an unwavering commitment to
                personal growth. One of his most memorable moments was when he delivered 
                a keynote speech at an international conference, moving the audience to tears 
                with his story of perseverance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;