import Navigation from '@/app/components/navigation';
import About from '@/app/components/about';
import Contact from '@/app/components/contact';
import Experience from '@/app/components/experience';
import Hobbies from '@/app/components/hobbies';
import Projects from '@/app/components/projects';
//import Resume from "@/app/components/resume";

export default function Home() {
  return (
    <div className="flex">
      <Navigation />

      <div className="ml-56 w-full px-8 pt-8 lg-pc:ml-120 lg-pc:pt-16 mobile:m-0 mobile:p-3 mobile:pt-24">
        <About />
        {/* //<Resume/> */}
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}
