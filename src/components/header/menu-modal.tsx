'use client';
import { HOME } from '@/libs/constant/routes';
import { useMenuStore } from '@/stores/menu.store';
import classNames from 'classnames';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const MenuModal: React.FC = () => {
  const [isShowing, hide] = useMenuStore((state) => [
    state.isShowing,
    state.hide,
  ]);
  const pathName = usePathname();

  useEffect(() => {
    if (isShowing) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, -parseInt(scrollY || '0', 10));
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
    };
  }, [isShowing]);

  return (
    isShowing && (
      <div className='mx-auto top-0 flex w-full flex-col items-center font-medium fixed h-full duration-500 transition-all ease-in-out bg-white z-50'>
        <div className='relative mx-auto flex h-screen w-full flex-col items-center justify-center gap-10 overflow-x-hidden'>
          <div className='w-36 h-11 rounded-xl bg-red-300'></div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <Link
              href={HOME}
              className={classNames(
                'text-lg',
                pathName === HOME && 'font-semibold'
              )}
            >
              Home
            </Link>
          </div>
          <div className='absolute right-4 top-6'>
            <X size={30} onClick={hide} />
          </div>
        </div>
      </div>
    )
  );
};

export default MenuModal;
