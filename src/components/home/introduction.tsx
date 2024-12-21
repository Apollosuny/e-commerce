'use client';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import { ArrowRight, FlameKindling, Milk, Sprout, Star } from 'lucide-react';
import Image from 'next/image';

const Introduction: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={classNames(
        'grid grid-cols-5 border-t-2 border-b-2 border-dashed',
        isMobile && '!grid-cols-1'
      )}
    >
      <div
        className={classNames(
          'col-span-2 border-r-2 border-dashed max-h-[600px]',
          isMobile && '!border-r-0'
        )}
      >
        <div
          className={classNames(
            'flex items-center justify-center py-5 border-b-2 border-dashed h-[250px]',
            isMobile && 'px-4'
          )}
        >
          <div className='flex items-center gap-10'>
            <div className='relative bg-[#faf6f3] rounded-full !w-32 !h-52'></div>
            <div className='flex flex-col gap-y-4'>
              <h5 className='font-bold'>Light Up Your Life With Our Candles</h5>
              <div className='flex items-center gap-3'>
                <span className=''>Get Yours</span>
                <ArrowRight size={14} stroke='#121212' />
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <div className='relative flex items-center'>
                  <Image
                    src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='user-1'
                    width={40}
                    height={40}
                    className='!w-10 !h-10 rounded-full object-cover'
                  />
                  <Image
                    src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='user-1'
                    width={40}
                    height={40}
                    className='!w-10 !h-10 rounded-full object-cover'
                  />
                  <Image
                    src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='user-1'
                    width={40}
                    height={40}
                    className='!w-10 !h-10 rounded-full object-cover'
                  />
                </div>
                <div className='flex items-center gap-1'>
                  <span>4.9</span>
                  <Star size={12} fill='#f3a505' stroke='#f3a505' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center h-[calc(600px-250px)]'>
          <div className='max-w-[360px]'>
            <p
              className={classNames(
                'text-sm text-[#4f4f4] font-medium',
                isMobile && 'text-center'
              )}
            >
              Our groovy and captivating designs, combined with high-quality,
              non-toxic ingredients, are the perfect way to set the mood for
              mindfulness
            </p>
            <button
              className={classNames(
                'bg-[#1d1d1a] p-4 text-[#cdcdcd] rounded-lg w-2/3 mt-8 font-normal',
                isMobile && 'w-full'
              )}
            >
              Shop now
            </button>
            <div className='flex items-center justify-center gap-6 mt-16'>
              <div className='flex flex-col items-center justify-center'>
                <FlameKindling size={36} stroke='#121212' />
                <p className='text-sm text-[#2b2d32]'>Super scents</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <Milk size={36} stroke='#121212' />
                <p className='text-sm text-[#2b2d32]'>Simple care</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <Sprout size={36} stroke='#121212' />
                <p className='text-sm text-[#2b2d32]'>Best Ingresients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <Image
          src='https://images.pexels.com/photos/714915/pexels-photo-714915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Banner'
          width={0}
          height={0}
          sizes='100%'
          className='w-full max-h-[600px]'
        />
      </div>
    </div>
  );
};

export default Introduction;
