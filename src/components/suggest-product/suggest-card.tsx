'use client';

import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const SuggestCard: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className=''>
      <div className='relative'>
        <Image
          src='https://brooklyncandlestudio.com/cdn/shop/products/Tulum_Brooklyn_Candle_Studio.jpg?v=1722543675&width=800'
          alt='Product-Preview-1'
          width={0}
          height={0}
          sizes='100%'
          className={classNames(
            'w-full h-[300px] object-cover',
            isMobile && 'h-[260px]'
          )}
        />
        <div className='bg-white flex items-center justify-center absolute bottom-1 right-1 p-1 cursor-pointer'>
          <Plus
            size={20}
            stroke='#121212'
            className='hover:rotate-90 transition-all duration-200'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 mt-3'>
        <p
          className={classNames(
            'text-sm text-[#707070]',
            isMobile && '!text-xs text-center'
          )}
        >
          SCENT FAMILY: GREEN AROMATIC
        </p>
        <p
          className={classNames(
            'text-lg text-[#121212]',
            isMobile && '!text-base'
          )}
        >
          Fern + Moss Jar Candle
        </p>
        <p
          className={classNames(
            'text-xs text-[#121212] text-center',
            isMobile && '!text-[10px]'
          )}
        >
          Smells like: A nature walk after the rain.
        </p>
        <p className='text-lg text-[#121212]'>$28.00</p>
      </div>
    </div>
  );
};

export default SuggestCard;
