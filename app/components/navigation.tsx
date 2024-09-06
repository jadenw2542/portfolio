"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ModeToggle from '@/app/components/ui/dark-mode-toggle';
import NavigationModal from '@/app/components/navigation-modal';
import Image from 'next/image';
import me from '@/app/components/imgs/me.png';

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
      h-full w-56 flex flex-col px-5 pt-2
      lg-pc:w-120 lg-pc:pt-8
      mobile:w-full mobile:h-20 mobile:p-4 mobile:flex-row mobile:justify-between
      z-50 
    ">
      {isMobile ? (
        <>
          <div className='flex flex-row'>
            <Image
                src={me}
                width={50}
                height={50}
                alt="Picture of the author"
                className='mr-4 rounded-full'
                priority
            />
            <div className="flex flex-col justify-start"> 
              <div className='font-bold text-s'> Jaden Wong </div>
              <div className="text-muted-foreground text-s"> Software Engineer</div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-end'>
            <ModeToggle />
            <span className='pl-4'>
              <NavigationModal/>
            </span>
            
          </div>
        </>
      ) : (
        <div className="flex w-full flex-col h-full">
          <div className="flex-grow ">
            <li className="flex flex-col text-center justify-center"> 
              <div className='font-bold text-2xl lg-pc:text-6xl'> Jaden Wong </div>
              <div className="text-muted-foreground text-xl lg-pc:text-5xl"> Software Engineer</div>
            </li>
            <div className='flex justify-center items-center'>
              <Image
                src={me}
                width={200}  // default width for non-responsive screens
                height={200} // default height for non-responsive screens
                alt="Picture of the author"
                className='my-3 rounded-full lg-pc:w-108 lg-pc:h-108'
                priority
              />
            </div>
            <li className="flex flex-row items-center py-1 pl-1 my-2 rounded-md hover:bg-muted 
            lg-pc:py-4 lg-pc:pl-8 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg-pc:size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
              <Link href="#about" scroll={true} className="font-bold text-xl lg-pc:text-5xl pl-1 ">
                About Me
              </Link>
            </li>
            {/* <li className="flex flex-row items-center py-1 pl-1 my-2 rounded-md hover:bg-muted 
            lg-pc:py-4 lg-pc:pl-8 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg-pc:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>

              <Link href="#resume" scroll={true} className="font-bold text-xl lg-pc:text-5xl pl-1">
                Resume
              </Link>
            </li> */}
            <li className="flex flex-row items-center py-1 pl-1 my-2 rounded-md hover:bg-muted 
            lg-pc:py-4 lg-pc:pl-8 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg-pc:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              <Link href="#experience" scroll={true} className="font-bold text-xl lg-pc:text-5xl pl-1">
                Experience
              </Link>
            </li>
            <li className="flex flex-row items-center py-1 pl-1 my-2 rounded-md hover:bg-muted 
            lg-pc:py-4 lg-pc:pl-8 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg-pc:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <Link href="#projects" scroll={true} className="font-bold text-xl lg-pc:text-5xl pl-1">
                Projects
              </Link>
            </li>
            <li className="flex flex-row items-center py-1 pl-1 my-2 rounded-md hover:bg-muted  
            lg-pc:py-4 lg-pc:pl-8 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg-pc:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
              </svg>
              <Link href="#hobbies" scroll={true} className="font-bold text-xl lg-pc:text-5xl pl-1">
                Hobbies
              </Link>
            </li>
            <li className="flex flex-row items-center py-1 pl-1 my-2 rounded-md hover:bg-muted 
             lg-pc:py-4 lg-pc:pl-8 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg-pc:size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <Link href="#contact" scroll={true} className="font-bold text-xl lg-pc:text-5xl pl-1">
                Contact
              </Link>
            </li>
          </div>
          {/* Footer */}
          <div className="flex flex-row items-center justify-between mt-auto pb-2">
            <div className="flex flex-row items-center">
              <a href="https://github.com/jadenw2542" target="_blank" className='pr-4'> 
              <svg pointerEvents={undefined}  className="lg-pc:w-32 lg-pc:h-32" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 30 30">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              </a>

              <a href="https://www.linkedin.com/in/jaden-wong/" target="_blank"> 
              <svg pointerEvents={undefined} className="lg-pc:w-32 lg-pc:h-32 lg-pc:pl-10" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#0a66c2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path></svg>
              </a>
            </div>

            <ModeToggle />

          </div>
        </div>
      )}
    </nav>
  );
}
