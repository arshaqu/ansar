import React, { useEffect, useState } from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    const section = document.getElementById('testimonials-section');
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
    <div
      id="testimonials-section"
      className='testimoni'
      style={{
        width: '100%',
        height: 'auto',
        background: 'linear-gradient(to right, #272F3F, #0F3528)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '40px',
      }}>

      <div>
        <h1
          className={`testimonials transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 'clamp(40px, 8vw, 140px)',
            marginBottom: '50px',
            marginTop: '40px',
            paddingLeft: '10px',
            paddingRight: '10px'
          }}>
          Testimonials
        </h1>
      </div>

      <div
        className='boxers flex-col md:flex-row'
        style={{
          display: 'flex',
          width: '90%',
          maxWidth: '1400px',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '0',
          marginBottom:'-38px'
        }}>

        {/* Box 1 */}
        <div
          className={`boxe transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            fontFamily: 'cursive',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '400px',
            height: '580px',
            backgroundColor: 'white',
            borderRadius: '15px 15px 0px 0px',
            boxShadow: '0 0px 8px rgba(0, 0, 0, 0.8)',
            transition: 'all 0.5s ease',
            overflow: 'hidden',
            padding: '20px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
          <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '20px', color: '#263f65' }} />
          <p style={{ color: '#272F3F' }} className='m-5 montserrat'>
            Ansar's coaching has transformed our sales team, enhancing performance and fostering growth. His journey is truly inspiring, motivating others to overcome challenges with resilience. His insights have had a profound impact, pushing us to excel. I am now more driven to pursue my dreams with renewed energy and determination.
          </p>
        </div>

        {/* Box 2 */}
        <div
          className={`boxe mt-2.5 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            fontFamily: 'cursive',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '400px',
            height: '510px',
            border: '2px solid white',
            background: 'linear-gradient(to right, #272F3F, #0F3528)',
            borderRadius: '15px 15px 0px 0px',
            boxShadow: '0 0px 8px rgba(0, 0, 0, 0.8)',
            transition: 'all 0.5s ease',
            padding: '20px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
          <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '20px', color: 'white' }} />
          <p style={{ color: 'white' }} className='m-5 montserrat'>
            Merakone transformed our office into a modern, functional space with exceptional quality. They created a warm, inviting café atmosphere and delivered luxurious hotel interiors that impressed our guests. Their work on our wellness center exceeded expectations, bringing our vision to life. Highly recommend their services!
          </p>
        </div>

        {/* Box 3 */}
        <div
          className={`boxe mt-2.5 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            fontFamily: 'cursive',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '400px',
            height: '440px',
            backgroundColor: 'white',
            borderRadius: '15px 15px 0px 0px',
            boxShadow: '0 0px 8px rgba(0, 0, 0, 0.8)',
            transition: 'all 0.5s ease',
            padding: '20px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
          <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '20px', color: '#263f65' }} />
          <p style={{ color: '#272F3F' }} className='m-5 montserrat'>
            Salesphere, led by Ansar, has transformed our sales team, boosting performance and confidence. The NLP techniques have enhanced our communication and sales skills. We've seen a 30% increase in sales since implementing the program. Ansar's coaching has set us apart in a competitive market.
          </p>
        </div>

        {/* Box 4 */}
        <div
          className={`boxe mt-2.5 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            fontFamily: 'cursive',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '400px',
            height: '530px',
            background: 'linear-gradient(to right, #272F3F, #0F3528)',
            borderRadius: '15px 15px 0px 0px',
            border: '2px solid white',
            boxShadow: '0 0px 8px rgba(0, 0, 0, 0.8)',
            transition: 'all 0.5s ease',
            padding: '20px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
          <BiSolidQuoteLeft style={{ width: '100px', height: '40px', marginTop: '20px', color: 'white' }} />
          <p style={{ color: 'white' }} className='m-5 montserrat'>
            Wealthsphere has transformed my financial outlook with clear plans and effective tools for smart investing. Ansar's focus on sustainable wealth creation has built my confidence in managing finances. His coaching revolutionized my approach to personal finance, helping me secure a prosperous future. I've achieved financial independence and peace of mind through this invaluable program.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;