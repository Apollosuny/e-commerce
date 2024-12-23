'use client';

import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import Image from 'next/image';

const CandleTips: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className=''>
      <h3 className='text-2xl font-medium text-center'>Candle Care Tips</h3>
      <div
        className={classNames('grid grid-cols-4', isMobile && '!grid-cols-2')}
      >
        <Image
          src='/assets/candle-tips/tip-1.svg'
          alt='Tip 1'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-full object-cover'
        />
        <Image
          src='/assets/candle-tips/tip-2.svg'
          alt='Tip 2'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-full object-cover'
        />
        <Image
          src='/assets/candle-tips/tip-3.svg'
          alt='Tip 3'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-full object-cover'
        />
        <Image
          src='/assets/candle-tips/tip-4.svg'
          alt='Tip 4'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default CandleTips;
