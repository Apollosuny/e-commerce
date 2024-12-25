/* eslint-disable */
'use client';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../product/product-card';
import { useState } from 'react';
import classNames from 'classnames';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api/products';
import Skeleton from 'react-loading-skeleton';

const Products: React.FC = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(true);
  const isMobile = useIsMobile();

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

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
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className=''>
                  <Skeleton height='360px' className='w-full' />
                  <Skeleton count={1} />
                  <Skeleton count={2} />
                </div>
              ))
            : (data ?? []).map((product: any) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  hasPadding={false}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
