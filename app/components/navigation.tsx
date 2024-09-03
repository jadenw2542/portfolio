"use client"; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ModeToggle from '@/app/components/ui/dark-mode-toggle';
import NavigationModal from '@/app/components/navigation-modal';

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false); // New state to track if the check is complete

  useEffect(() => {
    // Function to determine if the screen should be considered mobile
    const checkIsMobile = () => {
      const mobileBreakpoint = 640; // mobile breakpoint in pixels
      const viewportWidth = window.innerWidth;
      
      setIsMobile(viewportWidth <= mobileBreakpoint);
      setIsReady(true); // Set isReady to true after checking
    };

    // Initial check when the component mounts
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!isReady) {
    return null; 
  }

  return (
    <nav className="
      fixed
      top-0 left-0  
      bg-secondary
      w-full h-16 p-4 flex flex-row items-center justify-between
      sm:h-full sm:w-52 sm:flex-col sm:space-y-4 sm:space-x-0 
      z-50 bg-background
    ">
      {isMobile ? (
        <>
          <NavigationModal />
          <ModeToggle />
        </>
      ) : (
        <ul className="flex w-full flex-col">
          <ModeToggle />
          <li className="flex flex-col justify-start"> 
            <div className='font-bold'> Jaden Wong </div>
            <div className="text-muted-foreground"> Software Engineer</div>
          </li>
          <li className="flex justify-start">
            <Link href="#about" scroll={true} className="font-bold text-xl">
              About Me
            </Link>
          </li>
          <li className="flex justify-start">
            <Link href="#resume" scroll={true} className="font-bold text-xl">
              Resume
            </Link>
          </li>
          <li className="flex justify-start">
            <Link href="#experience" scroll={true} className="font-bold text-xl">
              Experience
            </Link>
          </li>
          <li className="flex justify-start">
            <Link href="#projects" scroll={true} className="font-bold text-xl">
              Projects
            </Link>
          </li>
          <li className="flex justify-start">
            <Link href="#hobbies" scroll={true} className="font-bold text-xl">
              Hobbies
            </Link>
          </li>
          <li className="flex justify-start">
            <Link href="#contact" scroll={true} className="font-bold text-xl">
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
