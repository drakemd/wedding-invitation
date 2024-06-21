
import localFont from 'next/font/local';

export const brittany = localFont({
    src: [
      {
        path: '../../public/fonts/Brittany.ttf',
        weight: '400'
      },
    ],
    variable: '--font-brittany'
})