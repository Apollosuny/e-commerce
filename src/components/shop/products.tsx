'use client';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../product/product-card';
import { useState } from 'react';
import classNames from 'classnames';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';

const Products: React.FC = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(true);
  const isMobile = useIsMobile();
  return (
    <div
      className={classNames(
        'grid grid-cols-3 mt-3',
        isMobile && '!grid-cols-1'
      )}
    >
      <div className='px-6'>
        {!isMobile && (
          <div
            className='flex items-center justify-between'
            tabIndex={-1}
            role='button'
            onClick={() => setIsOpenedMenu(!isOpenedMenu)}
            onKeyDown={() => setIsOpenedMenu(!isOpenedMenu)}
          >
            <p className='text-[#121212]'>Shop</p>
            <ChevronDown
              size={16}
              stroke='#121212'
              className={classNames(
                'transform transition-transform duration-200',
                isOpenedMenu && 'rotate-180'
              )}
            />
          </div>
        )}
        {isOpenedMenu && (
          <div className='flex items-start justify-center flex-col gap-y-4 mt-4'>
            <p className='text-[#6b6b6b] hover:text-[#121212] transition-colors duration-200 cursor-pointer'>
              Gifting
            </p>
            <p className='text-[#6b6b6b] hover:text-[#121212] transition-colors duration-200 cursor-pointer'>
              Bestsellers
            </p>
            <p className='text-[#6b6b6b] hover:text-[#121212] transition-colors duration-200 cursor-pointer'>
              All Candles
            </p>
            <p className='text-[#6b6b6b] hover:text-[#121212] transition-colors duration-200 cursor-pointer'>
              Shop By Product
            </p>
            <p className='text-[#6b6b6b] hover:text-[#121212] transition-colors duration-200 cursor-pointer'>
              Shop By Scent
            </p>
            <p className='text-[#6b6b6b] hover:text-[#121212] transition-colors duration-200 cursor-pointer'>
              Sale
            </p>
          </div>
        )}
      </div>
      <div className='col-span-2 '>
        <div
          className={classNames(
            'grid grid-cols-3 gap-4 pr-4',
            isMobile && '!grid-cols-2 pl-4'
          )}
        >
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
          <ProductCard hasPadding={false} />
        </div>
      </div>
    </div>
  );
};

export default Products;
