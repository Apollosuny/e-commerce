'use client';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import SuggestCard from './suggest-card';
import classNames from 'classnames';

const SuggestProducts: React.FC = () => {
  const isMobile = useIsMobile();

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
        <SuggestCard />
        <SuggestCard />
        <SuggestCard />
        <SuggestCard />
        <SuggestCard />
      </div>
    </div>
  );
};

export default SuggestProducts;
