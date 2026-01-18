import { Menu, LayoutGrid, FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#0b1219] border-b border-gray-800 h-[44px] flex items-center select-none">
      <div className="flex items-center justify-between px-3 w-full h-full">
        {/* Left Section - Balanced Layout with Smaller Icons */}
        <div className="flex items-center h-full gap-4 pl-2">
          {/* Hamburger Menu */}
          <button
            className="p-1 pl-2 text-gray-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-700"></div>

          {/* Logo Group */}
          <a href="https://thediamondmarkets.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white transform rotate-45 flex items-center justify-center rounded-[1px]">
               <div className="w-2 h-2 bg-[#0b1219]"></div>
            </div>
            <span className="text-white font-medium text-sm tracking-wide">Diamond Markets</span>
          </a>

          {/* Red/Blue Connection Toggle */}
          <div className="flex items-center justify-center">
            <div className="flex relative w-8 h-4 rounded-[3px] overflow-hidden">
               <div className="w-1/2 bg-[#ef4444]"></div>
               <div className="w-1/2 bg-[#3b82f6]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 {/* Link Icon */}
                 <svg className="w-3 h-3 text-white/90 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                 </svg>
               </div>
            </div>
          </div>

          {/* New Order Button */}
          <button className="flex items-center gap-2 group">
            <div className="w-4 h-4 relative flex items-center justify-center">
               <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" strokeWidth="3">
                  <path d="M12 2 A 10 10 0 0 0 12 22" stroke="#ef4444" strokeLinecap="round" />
                  <path d="M12 2 A 10 10 0 0 1 12 22" stroke="#3b82f6" strokeLinecap="round" />
                  <path d="M12 7 V 12 L 15 15" stroke="currentColor" strokeWidth="2" className="text-gray-300" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            <span className="text-[#60a5fa] font-medium text-sm group-hover:text-blue-300 transition-colors">New Order</span>
          </button>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-700"></div>

          {/* Orders/Documents Button */}
          <button
            className="p-1 px-0 text-blue-500 hover:text-blue-400 transition-colors"
            aria-label="Orders"
          >
            <FileText className="w-4 h-4" />
          </button>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-700"></div>

          {/* Grid/Layout Button */}
          <button
            className="p-1 px-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Layout"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-700"></div>
        </div>

        {/* Right Section - Utility Buttons */}
        <div className="flex items-center gap-4">
          {/* One Click Trading */}
          <button
            className="p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="One Click Trading"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
               <path fill="none" d="M0 0h24v24H0z"></path>
               <path d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81l.63 2.1zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z"></path>
            </svg>
          </button>

          {/* Fullscreen Button */}
          <button
            className="p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Fullscreen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
