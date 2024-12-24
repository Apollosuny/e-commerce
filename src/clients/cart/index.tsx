'use client';

import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import Image from 'next/image';

const CartPage: React.FC = () => {
  const isMobile = useIsMobile();
  const data = [];
  return (
    <div
      className={classNames(
        'min-h-screen',
        data.length === 0 && 'flex items-center justify-center'
      )}
    >
      <div className='flex flex-col items-center justify-center gap-4'>
        <Image
          src='/assets/images/empty-cart.png'
          alt='Empty cart'
          width={isMobile ? 200 : 400}
          height={isMobile ? 200 : 400}
          className=''
        />
        <h3 className='text-2xl font-medium'>Your cart is empty</h3>
      </div>
    </div>
  );
};

export default CartPage;
