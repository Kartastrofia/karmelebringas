import React from "react";

const Dropdown = () => {
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Botón del dropdown */}
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-secondary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={toggleDropdown}
        >
          {title}
          <ChevronDown
            className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Menú dropdown */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        >
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex justify-between items-center px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-primary transition-all duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <span>{item.text}</span>
                <ChevronRight
                  className={`h-4 w-4 transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-x-1 opacity-100 text-primary' : 'opacity-0 -translate-x-1'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;