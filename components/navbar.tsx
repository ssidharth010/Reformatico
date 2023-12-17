// imports
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FaFile } from 'react-icons/fa';

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className='flex flex-row items-center'>
      {/* style={{color: "white"}} */}
        <FaFile/><h2 className='text-xl font-semibold ml-1'> Reformatico</h2> 
      </Link>

      <Link href="https://github.com/benlhachemi/Reformatico.git">
        <Button
          variant="default"
          className="rounded-full w-fit bg-lime-600 gap-2 items-center md:flex"
          size="lg"
        >
          <span className="hidden sm:block text-sm sm:text-base">Github Repo</span>
          <span className="sm:text-sm text-xl">
            <BsGithub />
          </span>
        </Button>
      </Link>
    </nav>
  );
}
