'use client';

import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import { DateTime } from 'luxon';

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
          <div className='flex items-center gap-3'>
            <p>Shop</p>
            <p>Shop</p>
            <p>Shop</p>
          </div>
          <div className='flex items-center gap-3'>
            <p>Shop</p>
            <p>Shop</p>
            <p>Shop</p>
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
