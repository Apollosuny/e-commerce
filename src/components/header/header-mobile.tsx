import { CART } from '@/libs/constant/routes';
import { useMenuStore } from '@/stores/menu.store';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const HeaderMobile: React.FC = () => {
  const [show] = useMenuStore((state) => [state.show]);

  return (
    <div className='h-24 w-full flex items-center px-4'>
      <div className='relative flex items-center justify-between flex-1'>
        <div className='w-36 h-11 rounded-xl bg-red-300'></div>
        <div className='flex items-center gap-10'>
          <Link href={CART}>
            <div className='flex items-center gap-4'>
              <p className=''>Cart</p>
              <div className='!w-7 !h-7 bg-[#05070c] rounded-full text-white flex items-center justify-center'>
                0
              </div>
            </div>
          </Link>
          <Menu size={24} stroke='#121212' onClick={show} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
