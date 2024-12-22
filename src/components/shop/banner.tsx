'use client';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import Image from 'next/image';

const Banner: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className='relative'>
      <div className='relative'>
        <Image
          src='https://images.pexels.com/photos/3654620/pexels-photo-3654620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Shop Banner'
          width={0}
          height={0}
          sizes='100%'
          className='object-cover h-[400px] w-full'
        />
        <div className='h-[400px] w-full bg-black/40 absolute top-0 left-0' />
        <p className='text-5xl font-medium absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
          Shop All
        </p>
      </div>
      <div className='flex items-center justify-center w-full py-10'>
        <p
          className={classNames(
            'text-center w-2/3 text-lg',
            isMobile && '!w-full px-3'
          )}
        >
          Brooklyn Candle Studio: Captivating scents, beautiful minimalist
          design, and the best ingredients. Essentially, everything we love
          about luxury candles, but at accessible prices. Our dreamy scents are
          inspired by nature and travel, moments and memories.
        </p>
      </div>
    </div>
  );
};

export default Banner;
