import React from 'react'
import sign from '../Assets/ansarka sign.png'

function Footer() {

  const socialIcons = {
    instagram: (
      <a href="https://www.instagram.com/_ansarmuhammed/" target="_blank" rel="noopener noreferrer">
      <svg style={{color:'white'}} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
        </svg>
        </a>

    
    ),
    linkedin: (
      <a href="https://www.linkedin.com/in/ansar-muhammed-b335a43b/" target="_blank" rel="noopener noreferrer">
        <svg style={{color:'white'}} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
        </svg>
      </a>

    ),
    youtube: (
      <a href="https://www.youtube.com/@AnsarMuhammed_SalesCoach" target="_blank" rel="noopener noreferrer">
        <svg style={{color:'white'}} className="w-6 h-6 text-gray-800 dark:text-white"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
         <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
        </svg>
      </a>
    
    ),
    facebook: (
      <a href="https://www.facebook.com/ansarpc.pc" target="_blank" rel="noopener noreferrer">
      <svg style={{color:'white'}} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
</a>

    ),
  };
  
  return (
    <footer className="w-full px-6 py-10 bg-white montserratmv">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
      {/* Logo and Social Section */}
      <div className="flex-1 min-w-[250px]">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src={sign}
            alt="Ansar Muhammad Logo" 
            className="max-w-[300px] "
          />
        </div>
        
        {/* Company Description */}
        <p className="text-sm text-emerald-500 mb-4">
          Follow Me On : -
        </p>
        
        {/* Social Icons */}
        <div className="flex gap-4">
            {Object.keys(socialIcons).map((social) => (
              <div
                key={social}
                className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center hover:bg-emerald-900 transition-colors"
              >
                {socialIcons[social]}
              </div>
            ))}
          </div>
        </div>

      {/* First Lorem Ipsum Section
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-emerald-500 text-xl font-medium mb-4">Lorem Ipsum</h3>
        <p className="text-gray-600 text-sm">
          Loremipsumdolorsitamet, consecteturadipiscingelit, seddoeiusmod and tem-porincidi duntutiaboreet-dolore magnaaliqua.Qui-sipsumsuspendisse
        </p>
      </div> */}

      {/* Second Lorem Ipsum Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-emerald-500 text-xl font-medium mb-4 montserrat cursor-pointer">MY SERVICES</h3>
        <ul className="space-y-2">
          {['MERAKONE', 'SALESPHERE', 'WEALTHSPHERE'].map((item) => (
            <li key={item}>
              <h1 className="text-gray-500 hover:text-emerald-400 transition-colors cursor-pointer">
                {item}
              </h1>
            </li>
          ))}
        </ul>
      </div>

      {/* Services Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-emerald-500 text-xl font-medium mb-4 montserrat cursor-pointer">Services</h3>
        <ul className="space-y-2">
          {['About Us', 'Careers', 'News', 'Contact'].map((item) => (
            <li key={item}>
              <h1  className="text-gray-600 hover:text-emerald-500 transition-colors cursor-pointer">
                {item}
              </h1>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Section */}
      <div className="flex-1 min-w-[250px]">
        <h3 className="text-emerald-500 text-xl font-medium mb-4 montserrat">News Letter</h3>
        <p className="text-gray-600 text-sm hover:text-emerald-600 cursor-pointer ">
        Unlock your potential with Ansar Mohammed's inspiring journey and proven strategies for growth. Join our newsletter for insights on empowerment, resilience, and building a thriving future.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer