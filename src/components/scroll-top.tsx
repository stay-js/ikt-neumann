import { useEffect, useState } from 'react';
import clsx from 'clsx';

export const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => (window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={clsx('scroll-top', isVisible && 'active')}
      type="button"
      title="Vissza az oldal tetejére"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="white"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'white' }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M18 11l-6 -6"></path>
        <path d="M6 11l6 -6"></path>
      </svg>
    </button>
  );
};
