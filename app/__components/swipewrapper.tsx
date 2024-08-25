"use client";

import { useSwipeable } from 'react-swipeable';
import { usePathname, useRouter } from 'next/navigation';

const SwipeWrapper = (props: any) => {
  const router = useRouter();
  const pathName = usePathname();
  const pages = ['/cover', '/quotes', '/groom', '/bride', '/gallery', '/maps'];

  const handleSwipe = (dir: string) => {
    if (pathName === '/') return;
    
    const currentPageIndex = pages.indexOf(pathName);
    if (dir === 'Up' && currentPageIndex < pages.length - 1) {
      router.push(pages[currentPageIndex + 1]);
    } else if (dir === 'Down' && currentPageIndex > 0) {
      router.push(pages[currentPageIndex - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe('Up'),
    onSwipedDown: () => handleSwipe('Down'),
  });

  return <div {...handlers} style={{ touchAction: 'none' }}>{props.children}</div>;
};

export default SwipeWrapper;