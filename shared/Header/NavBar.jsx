import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='nav-bar flex  justify-between items-center'>
        <li className='nav-link'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link href='/aboutUs'>About</Link>
        </li>
        <li className='nav-link'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='nav-link'>
          <Link href='/services'>Services</Link>
        </li>

        <li className='nav-link'>
          <Link href='/contactUs'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
