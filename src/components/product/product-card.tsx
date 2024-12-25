'use client';
import { PRODUCT_DETAIL } from '@/libs/constant/routes';
import { formatNumberWithCustomSeparators } from '@/libs/helpers/number';
import classNames from 'classnames';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  data: {
    id: string;
    name: string;
    price: string;
    previewImage: string;
    images: string[];
    description: string;
    type: string;
  };
  isTopProduct?: boolean;
  isOutOfStockSoon?: boolean;
  remainingStock?: number;
  hasPadding?: boolean;
};

const ProductCard: React.FC<Props> = ({
  data,
  isTopProduct,
  isOutOfStockSoon,
  remainingStock,
  hasPadding = true,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const router = useRouter();

  const handleRedirectToDetail = () => {
    router.push(PRODUCT_DETAIL + '/123');
  };

  return (
    <div className={classNames('relative', hasPadding && 'p-6')}>
      <div
        className='overflow-hidden'
        tabIndex={-1}
        role='button'
        onClick={handleRedirectToDetail}
        onKeyDown={handleRedirectToDetail}
      >
        <Image
          src={data.previewImage}
          alt='product'
          width={0}
          height={0}
          sizes={'100%'}
          className='w-full h-[360px] object-cover hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className='mt-3'>
        <button onClick={handleRedirectToDetail} className='w-full'>
          <div className='flex items-center justify-between w-full'>
            <h3 className='font-semibold text-lg'>{data.name}</h3>
            <div className='flex items-center gap-1'>
              <Star size={12} fill='#f3a505' stroke='#f3a505' />
              <Star size={12} fill='#f3a505' stroke='#f3a505' />
              <Star size={12} fill='#f3a505' stroke='#f3a505' />
              <Star size={12} fill='#f3a505' stroke='#f3a505' />
              <Star size={12} fill='#f3a505' stroke='#f3a505' />
            </div>
          </div>
          <p className='text-[#565656] mt-2 line-clamp-2'>{data.description}</p>
        </button>
        <div className='flex items-center justify-between mt-3'>
          <p className='underline text-lg font-medium'>Order Now</p>
          <p className='font-bold text-lg'>
            {formatNumberWithCustomSeparators(parseInt(data.price))} VND
          </p>
        </div>
      </div>
      <div
        className={classNames(
          'absolute top-8 right-8',
          !hasPadding && '!top-6 !right-6'
        )}
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
