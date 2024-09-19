
import Link from 'next/link';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function NavigationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
      </DialogTrigger>
      <DialogContent className="w-full h-full max-w-none max-h-none p-0 items-center">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <ul className="flex flex-col justify-between w-full">
              <li>
                <DialogClose asChild>
                  <Link href="#about" scroll={true} className="font-bold text-xs">
                    About Me
                  </Link>
                </DialogClose>
              </li>
              <li>
                <DialogClose asChild>
                  <Link href="#experience" scroll={true} className="font-bold text-xs">
                    Experience
                  </Link>
                </DialogClose>
              </li>
              <li>
                <DialogClose asChild>
                  <Link href="#projects" scroll={true} className="font-bold text-xs">
                    Projects
                  </Link>
                </DialogClose>
              </li>
              <li>
                <DialogClose asChild>
                  <Link href="#hobbies" scroll={true} className="font-bold text-xs">
                    Hobbies
                  </Link>
                </DialogClose>
              </li>
              <li>
                <DialogClose asChild>
                  <Link href="#contact" scroll={true} className="font-bold text-xs">
                    Contact Me
                  </Link>
                </DialogClose>
              </li>
                <li>
                  <DialogClose asChild>
                  <button className="font-bold text-xs" >
                    Close
                  </button>
                  </DialogClose>
                </li>
            </ul>

          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
