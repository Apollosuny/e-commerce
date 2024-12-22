'use client';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import { Earth, Ship, Truck } from 'lucide-react';

const Advertise: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className='h-12 w-full bg-[#2C2C2C] text-white px-4'>
      <div className='w-full h-full flex items-center justify-between relative'>
        {!isMobile && (
          <>
            <div className='flex items-center gap-2'>
              <Truck size={24} stroke='white' />
              <p className='text-sm font-normal text-white'>
                Free Shipping Today!
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <Ship size={24} stroke='white' />
              <p className='text-sm font-normal text-white'>
                Free Shipping Today!
              </p>
            </div>
          </>
        )}
        <div className='flex items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Earth size={24} stroke='white' />
          <p className='text-sm font-normal text-white'>Free Shipping Today!</p>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
