import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import './App.css';

const pages = [Page1, Page2, Page3, Page4, Page5 /* Add Page3 to Page6 */];

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      // Set your content data here (e.g., fetch from an API)
      setData('Your content goes here');
      setLoading(false);
    }, 10000); // Simulated 5-second loading delay

    if (currentPage < pages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 55000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(0);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (event.key === 'ArrowDown' && currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentPage, pages.length]);

  return (
    <div className="app">
      {loading ? (
        <Loading /> // Display the Loading component while content is being loaded
      ) : (
        <div>
          {React.createElement(pages[currentPage])}
          {currentPage === pages.length - 1 && (
            <button onClick={scrollToTop} className='introducebutton'>Click Me!</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
