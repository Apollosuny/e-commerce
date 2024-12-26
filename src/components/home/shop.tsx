'use client';
import Image from 'next/image';
import ProductCard from '../product/product-card';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import { useQuery } from '@tanstack/react-query';
import { getProductHighlights } from '@/api/products';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/navigation';
import { SHOP } from '@/libs/constant/routes';

const Shop: React.FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['product-highlight'],
    queryFn: getProductHighlights,
  });

  return (
    <div className='px-4'>
      <div
        className={classNames(
          'grid grid-cols-4 border-b-2 border-l-2 border-r-2 border-dashed',
          isMobile && '!grid-cols-1'
        )}
      >
        <div
          className={classNames(
            !isMobile && 'col-span-2 border-r-2 border-dashed'
          )}
        >
          <div className='pt-10 py-14 ml-16'>
            <div className=''>
              <p
                className={classNames(
                  'font-["Bodoni"] text-8xl font-medium',
                  isMobile && '!text-5xl'
                )}
              >
                Shop our
              </p>
              <div className='flex items-center gap-2'>
                <p
                  className={classNames(
                    'font-["Bodoni"] text-8xl font-medium',
                    isMobile && '!text-5xl'
                  )}
                >
                  latest
                </p>
                <Image
                  src='/assets/icons/coffee-beans.svg'
                  alt='coffee-beans'
                  width={60}
                  height={60}
                  className='!h-15 !w-15'
                />
              </div>
              <p
                className={classNames(
                  'font-["Bodoni"] text-8xl font-medium',
                  isMobile && '!text-5xl'
                )}
              >
                collection
              </p>
            </div>
            <button
              className='mt-8 border rounded-lg w-1/3 p-4 hover:scale-110 transition-all duration-300'
              onClick={() => router.push(SHOP)}
            >
              See All
            </button>
          </div>
        </div>
        <div className={classNames(!isMobile && 'border-r-2 border-dashed')}>
          {isLoading ? (
            <div className='p-4'>
              <Skeleton height='360px' className='w-full' />
              <Skeleton count={1} />
              <Skeleton count={2} />
            </div>
          ) : (
            data && <ProductCard data={data[0]} />
          )}
        </div>
        {isLoading ? (
          <div className='p-4'>
            <Skeleton height='360px' className='w-full' />
            <Skeleton count={1} />
            <Skeleton count={2} />
          </div>
        ) : (
          data && <ProductCard data={data[1]} />
        )}
      </div>
      <div
        className={classNames(
          'grid grid-cols-4 border-b-2 border-l-2 border-r-2 border-dashed',
          isMobile && '!grid-cols-1'
        )}
      >
        <div
          className={classNames(
            'border-r-2 border-dashed',
            !isMobile && 'col-span-2'
          )}
        >
          <div className='relative'>
            <Image
              src='https://i.pinimg.com/736x/9e/db/6a/9edb6a4c7c17a3604acab49993945f1d.jpg'
              alt='Products'
              width={0}
              height={0}
              sizes='100%'
              className='w-full'
            />
            <div className='absolute top-4 left-10'>
              <div className='!w-24 !h-2w-24 rounded-full py-3 px-4 border flex items-center justify-center text-center'>
                Buy 3 get 2 free
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(!isMobile && 'border-r-2 border-dashed')}>
          {isLoading ? (
            <div className='p-4'>
              <Skeleton height='360px' className='w-full' />
              <Skeleton count={1} />
              <Skeleton count={2} />
            </div>
          ) : (
            data && <ProductCard data={data[2]} />
          )}
        </div>
        {isLoading ? (
          <div className='p-4'>
            <Skeleton height='360px' className='w-full' />
            <Skeleton count={1} />
            <Skeleton count={2} />
          </div>
        ) : (
          data && <ProductCard data={data[3]} />
        )}
      </div>
    </div>
  );
};

export default Shop;
