/* eslint-disable */
'use client';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import SuggestCard from './suggest-card';
import classNames from 'classnames';
import { useQuery } from '@tanstack/react-query';
import { getProductSuggestion } from '@/api/products';
import Skeleton from 'react-loading-skeleton';

const SuggestProducts: React.FC = () => {
  const isMobile = useIsMobile();
  const { data, isLoading } = useQuery({
    queryKey: ['product-suggest'],
    queryFn: getProductSuggestion,
  });

  return (
    <div className=''>
      <h3 className='text-3xl font-medium text-center'>
        Explore the Collection
      </h3>
      <div
        className={classNames(
          'grid grid-cols-5 gap-4 mt-4',
          isMobile && '!grid-cols-2'
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
          : data?.map((item: any) => <SuggestCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default SuggestProducts;
