import React, { useState, useEffect } from 'react';

function Top() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change '100' to the scroll position where you want the button to appear
      if (window.scrollY > 100) { 
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: 'smooth'
    });
  };

  return (
    <div className="up-container" style={{ display: showButton ? 'block' : 'none' }}>
      <button onClick={scrollToTop} className="button-pretty">
      ↑
      </button>
    </div>
  );
}

export default Top;
