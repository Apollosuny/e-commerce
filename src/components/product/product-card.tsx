'use client';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  isTopProduct?: boolean;
  isOutOfStockSoon?: boolean;
  remainingStock?: number;
};

const ProductCard: React.FC<Props> = ({
  isTopProduct,
  isOutOfStockSoon,
  remainingStock,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className='relative p-6'>
      <div className=''>
        <Image
          src='https://images.pexels.com/photos/9518974/pexels-photo-9518974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='product'
          width={0}
          height={0}
          sizes={'100%'}
          className='w-full max-h-[360px] object-cover'
        />
      </div>
      <div className='mt-3'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-lg'>Lavender</h3>
          <div className='flex items-center gap-1'>
            <Star size={12} fill='#f3a505' stroke='#f3a505' />
            <Star size={12} fill='#f3a505' stroke='#f3a505' />
            <Star size={12} fill='#f3a505' stroke='#f3a505' />
            <Star size={12} fill='#f3a505' stroke='#f3a505' />
            <Star size={12} fill='#f3a505' stroke='#f3a505' />
          </div>
        </div>
        <p className='text-[#565656] mt-2'>
          a calming and relaxing scent that can help promote restful sleep.
        </p>
        <div className='flex items-center justify-between mt-3'>
          <p className='underline text-lg font-medium'>Order Now</p>
          <p className='font-bold text-lg'>$9.99</p>
        </div>
      </div>
      <div
        className='absolute top-8 right-8'
        tabIndex={-1}
        role='button'
        onClick={() => setIsLiked(!isLiked)}
        onKeyDown={() => setIsLiked(!isLiked)}
      >
        <Heart
          size={24}
          stroke={isLiked ? '#f75709' : '#121212'}
          fill={isLiked ? '#f75709' : 'transparent'}
        />
      </div>
      {isTopProduct && (
        <div className='absolute top-6 left-0 text-white text-sm bg-[#f75709] rounded-tr-full rounded-br-full px-3 py-1'>
          Top Product
        </div>
      )}
      {isOutOfStockSoon && (
        <div className='absolute top-6 left-0 text-white text-sm bg-[#52050c] rounded-tr-full rounded-br-full px-5 py-1'>
          {remainingStock || 0} left
        </div>
      )}
    </div>
  );
};

export default ProductCard;
