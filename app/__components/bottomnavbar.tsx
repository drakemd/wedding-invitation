import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import styles from './bottomnavbar.module.css';

const BottomNavBar = () => {
  const pathname = usePathname();
  const pages = [
    { 
        name: 'Cover', 
        path: '/cover',
        iconActive: <FaHome fill='#234390' size={24} />,
        iconInactive: <FaHome fill='#ffffff' size={24} />,
     },
    { 
        name: 'Quotes', 
        path: '/quotes',
        iconActive: <FaHome fill='#234390' size={24} />,
        iconInactive: <FaHome fill='#ffffff' size={24} />,
     },
    { 
        name: 'Groom', 
        path: '/groom',
        iconActive: <FaHome fill='#234390' size={24} />,
        iconInactive: <FaHome fill='#ffffff' size={24} />,
     },
    { 
        name: 'Bride', 
        path: '/bride',
        iconActive: <FaHome fill='#234390' size={24} />,
        iconInactive: <FaHome fill='#ffffff' size={24} />,
     },
    { 
        name: 'Gallery', 
        path: '/gallery',
        iconActive: <FaHome fill='#234390' size={24} />,
        iconInactive: <FaHome fill='#ffffff' size={24} />,
     },
    { 
        name: 'Maps', 
        path: '/maps',
        iconActive: <FaHome fill='#234390' size={24} />,
        iconInactive: <FaHome fill='#ffffff' size={24} />,
     },
  ];

  const activeLinkRef = useRef<any>(null);
  const navRef = useRef<any>(null);

  useEffect(() => {
    if (activeLinkRef.current && navRef.current) {
      const activeElement = activeLinkRef.current;
      const navElement = navRef.current;
      const offsetLeft = activeElement.offsetLeft;
      const scrollPosition = offsetLeft - (navElement.offsetWidth / 2) + (activeElement.offsetWidth / 2);
      navElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  return (
    <nav className={styles.bottomNav} ref={navRef}>
      {pages.map((page) => (
        <Link key={page.name} href={page.path}>
          <div
            ref={pathname === page.path ? activeLinkRef : null}
            className={pathname === page.path ? 'active' : ''}
          >
            <div className='flex flex-col items-center justify-center'>
                {pathname === page.path ? page.iconActive : page.iconInactive}
                <p className={`text-xs ${ pathname === page.path ? 'text-primary' : 'text-white' }`}>{page.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavBar;
