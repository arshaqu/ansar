import React, { useEffect, useState } from 'react';
import backgroundImg from '../Assets/ansar1.jpg';
import whychoose from '../Assets/WHY CHOOSE ME-01.png';

function MissionVision() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update visibility based on intersection
          setIsVisible(entry.isIntersecting);
        },
        { 
          threshold: 0.1,
          rootMargin: '-50px' // Adds a small buffer before animations trigger
        }
      );
  
      const section = document.getElementById('mission-vision');
      if (section) {
        observer.observe(section);
      }
  
      return () => {
        if (section) {
          observer.unobserve(section);
        }
      };
    }, []);
  
    return (
      <div id="mission-vision" className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
        {/* Background Image with smooth transition */}
        <img
          src={backgroundImg}
          alt="Business Background"
          className={`absolute w-full h-full object-cover transition-all duration-700 ${
            isVisible ? 'brightness-50 scale-105' : 'brightness-0 scale-100'
          }`}
        />
  
        {/* Particles - only animate when visible */}
        {isVisible && (
          <div className="absolute inset-0">
            <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-[particle1_15s_ease-in-out_infinite]" />
            <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-[particle2_20s_ease-in-out_infinite]" />
            <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-[particle3_25s_ease-in-out_infinite]" />
          </div>
        )}
  
        {/* Main Content Container */}
        <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16">
          {/* Left Side - Why Choose Me */}
          <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 text-left transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <img 
              src={whychoose} 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`} 
              alt='choose'
            />
  
            <div className={`text-white text-4xl lg:text-5xl text-center font-bold mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              UNSTOPPABLE <br />
              RESILIENCE
            </div>
          </div>
  
          {/* Right Side - Cards */}
          <div className="w-full lg:w-1/2 space-y-4 montserratmv cursor-pointer">
            {/* Vision Card */}
            <div 
              style={{borderRadius:'4px'}} 
              className={`bg-white/95 backdrop-blur-sm p-4 md:p-6 transform transition-all duration-700 
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
                hover:scale-110 hover:shadow-lg w-11/12 md:w-12/12 mx-auto`}
            >
              <h1 className="w-45 h-20 mb-3 mx-auto text-center font-bold text-green-400" style={{fontSize:'40px'}}>
                VISION
              </h1>
              <p className="text-gray-700 text-[10px] md:text-xs lg:text-sm">
                To be a guiding beacon and role model for oppressed and
                underprivileged individuals worldwide, fostering a community driven
                by purpose, acceptance, and respect. By promoting liberation and unity,
                the goal is to empower individuals to rise above their challenges.
                This mission aims to create a prosperous future where everyone is
                valued and included. Through these efforts, a stronger, more
                compassionate community can be built for all.
              </p>
            </div>
  
            {/* Mission Card */}
            <div 
              style={{borderRadius:'4px'}} 
              className={`bg-white/95 backdrop-blur-sm p-4 md:p-6 transform transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
                hover:scale-110 hover:shadow-lg w-11/12 md:w-12/12 mx-auto`}
            >
              <h1 className="w-45 h-20 mb-3 mx-auto text-center font-bold text-green-400" style={{fontSize:'40px'}}>
                MISSION
              </h1>
              <p className="text-gray-700 text-[10px] md:text-xs lg:text-sm">
                Our mission is to transform lives by easing hardships and empowering
                individuals and organizations to achieve financial success and
                personal fulfillment. We do this through dedicated self-growth,
                coaching, mentoring, and educational programs. By offering guidance
                and support, we help people reach their full potential. This mission
                aims to foster both personal and financial well-being for all.
              </p>
            </div>
  
            {/* Core Values Card */}
            <div 
              style={{borderRadius:'4px'}} 
              className={`bg-white/95 backdrop-blur-sm p-4 md:p-6 transform transition-all duration-700 delay-200
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
                hover:scale-110 hover:shadow-lg w-11/12 md:w-12/12 mx-auto`}
            >
              <h1 className="w-45 h-20 mb-3 mx-auto text-center font-bold text-green-400" style={{fontSize:'40px'}}>
                CORE VALUES
              </h1>
              <p className="text-gray-700 text-[10px] md:text-xs lg:text-sm">
                Empowerment through resources and opportunities helps individuals
                facing adversity succeed, focusing on communication and sales skills
                for growth. Resilience emphasizes overcoming obstacles with determination,
                while compassion advocates for the underprivileged using empathy.
                Effective communication builds relationships and drives success in
                personal and professional life. Strong communities foster belonging
                and prosperity by uplifting and supporting each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MissionVision;