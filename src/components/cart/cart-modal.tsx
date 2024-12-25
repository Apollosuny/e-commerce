'use client';

import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import { useCartStore } from '@/stores/cart.store';
import classNames from 'classnames';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const CartModal: React.FC = () => {
  const [isOpenedModal, hide] = useCartStore((state) => [
    state.isOpenedModal,
    state.hide,
  ]);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpenedModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenedModal]);

  return (
    isOpenedModal && (
      <div className='fixed inset-0 z-50'>
        {/* Overlay */}
        <div
          className='absolute inset-0 bg-black/50'
          onClick={hide} // Close modal when clicking on the overlay
        ></div>

        {/* Modal Content */}
        <div
          className={classNames(
            'absolute right-0 top-0 h-full w-1/3 bg-white shadow-lg',
            isMobile && 'w-3/4'
          )}
        >
          <div className='p-6 border-b'>
            <div className='flex items-center justify-between'>
              <h3 className='text-2xl font-medium'>Cart</h3>
              <button onClick={hide}>
                <X size={24} stroke='#121212' />
              </button>
            </div>
          </div>
          <div className='h-full flex items-center justify-center'>
            <p className='text-xl'>Your cart is empty</p>
          </div>
        </div>
      </div>
    )
  );
};

export default CartModal;
