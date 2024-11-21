"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { dark, light } from '@clerk/themes'

const Header = () => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <Navbar className='border-b-2'> 
      <Link
        href='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white font-mono flex items-center' 
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-mono mr-2'> 
          Anandu&apos;s
        </span>
        Blog 
      </Link>

      <form className="hidden lg:inline"> 
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        <SignedIn>
          <UserButton appearance={{
            baseTheme: theme === 'light' ? light : dark,
          }} />
        </SignedIn>

        <SignedOut>
          <Link href='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline className="font-mono"> 
              Sign In
            </Button>
          </Link>
        </SignedOut> 

        <Navbar.Toggle /> 
      </div>

      <Navbar.Collapse> 
        <Link href='/'>
          <Navbar.Link active={path === '/'} as={'div'} className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2"> 
            Home
          </Navbar.Link>
        </Link>
        <Link href='/about'>
          <Navbar.Link active={path === '/about'} as={'div'} className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2">
            About
          </Navbar.Link>
        </Link>
        <Link href='/projects'>
          <Navbar.Link active={path === '/projects'} as={'div'} className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2">
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;