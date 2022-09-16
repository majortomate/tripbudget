/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-black hover:bg-gray-900 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none',
        )}
      >
        <BiUpArrowAlt className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
