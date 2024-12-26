'use client';

import { HOME, NEW_ARRIVAL, OUR_STORY, SHOP } from '@/libs/constant/routes';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import Link from 'next/link';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <footer className='px-4 bg-[#2C2C2C] text-white'>
      <div className='py-6 border-l-2 border-[#dddbda] border-r-2 border-dashed'>
        <div
          className={classNames(
            'relative flex items-center justify-between px-6 py-8 border-b-2 border-[#dddbda] border-dashed',
            isMobile ? 'flex-col !justify-center gap-y-4' : 'flex-row'
          )}
        >
          <div
            className={classNames(
              'w-36 h-11 rounded-xl bg-red-300',
              !isMobile &&
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}
          ></div>
          <div className='flex items-center gap-8'>
            <Link href={HOME} className={classNames('text-lg')}>
              Home
            </Link>
            <Link href={SHOP} className={classNames('text-lg')}>
              Shop
            </Link>
            <Link href={NEW_ARRIVAL} className={classNames('text-lg')}>
              New Arrival
            </Link>
          </div>
          <div className='flex items-center gap-8'>
            <Link href={OUR_STORY} className={classNames('text-lg')}>
              Our Story
            </Link>
            <div className={classNames('text-lg')}>Blog</div>
          </div>
        </div>
        <div className='text-center mt-4'>
          <p>© {DateTime.now().year} Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
