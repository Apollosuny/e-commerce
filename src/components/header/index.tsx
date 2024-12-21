'use client';

import {
  BLOG,
  CART,
  HOME,
  NEW_ARRIVAL,
  OUR_STORY,
  SHOP,
} from '@/libs/constant/routes';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import Link from 'next/link';
import HeaderMobile from './header-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeaderMobile />
  ) : (
    <div className='h-24 w-full flex items-center px-4'>
      <div className='relative flex items-center justify-between flex-1'>
        <div className='flex items-center gap-10'>
          <Link href={HOME}>Home</Link>
          <Link href={SHOP}>Shop</Link>
          <Link href={NEW_ARRIVAL}>New Arrival</Link>
        </div>
        <div className='w-36 h-11 rounded-xl bg-red-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='flex items-center gap-10'>
          <Link href={OUR_STORY}>Our Story</Link>
          <Link href={BLOG}>Blog</Link>
          <Link href={CART}>
            <div className='flex items-center gap-4'>
              <p className=''>Cart</p>
              <div className='!w-7 !h-7 bg-[#05070c] rounded-full text-white flex items-center justify-center'>
                0
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
