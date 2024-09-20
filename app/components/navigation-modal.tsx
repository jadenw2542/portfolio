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
} from '@/components/ui/dialog';

export default function NavigationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </DialogTrigger>
      <DialogContent className="h-full max-h-none w-full max-w-none items-center p-0">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <ul className="flex size-full flex-col justify-center">
              <li className="py-1">
                <DialogClose asChild>
                  <Link
                    href="#about"
                    scroll={true}
                    className="text-popover-foreground text-2xl font-bold"
                  >
                    About Me
                  </Link>
                </DialogClose>
              </li>
              <li className="py-1">
                <DialogClose asChild>
                  <Link
                    href="#experience"
                    scroll={true}
                    className="text-popover-foreground text-2xl font-bold"
                  >
                    Experience
                  </Link>
                </DialogClose>
              </li>
              <li className="py-1">
                <DialogClose asChild>
                  <Link
                    href="#projects"
                    scroll={true}
                    className="text-popover-foreground text-2xl font-bold"
                  >
                    Projects
                  </Link>
                </DialogClose>
              </li>
              <li className="py-1">
                <DialogClose asChild>
                  <Link
                    href="#hobbies"
                    scroll={true}
                    className="text-popover-foreground text-2xl font-bold"
                  >
                    Hobbies
                  </Link>
                </DialogClose>
              </li>
              <li className="py-1">
                <DialogClose asChild>
                  <Link
                    href="#contact"
                    scroll={true}
                    className="text-popover-foreground text-2xl font-bold"
                  >
                    Contact Me
                  </Link>
                </DialogClose>
              </li>
              <li className="py-1">
                <DialogClose asChild>
                  <button className="text-destructive text-2xl font-bold">
                    Close
                  </button>
                </DialogClose>
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
