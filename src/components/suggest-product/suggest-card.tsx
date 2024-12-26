'use client';

import { formatNumberWithCustomSeparators } from '@/libs/helpers/number';
import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import { Plus } from 'lucide-react';
import Image from 'next/image';

type Props = {
  data: {
    id: number;
    name: string;
    price: string;
    previewImage: string;
    images: string[];
    description: string;
    type: string;
  };
};

const SuggestCard: React.FC<Props> = ({ data }) => {
  const isMobile = useIsMobile();

  return (
    <div className=''>
      <div className='relative'>
        <Image
          src={data.previewImage}
          alt='Product-Preview-1'
          width={0}
          height={0}
          sizes='100%'
          className={classNames(
            'w-full h-[300px] object-cover',
            isMobile && 'h-[260px]'
          )}
        />
        <div className='bg-white flex items-center justify-center absolute bottom-1 right-1 p-1 cursor-pointer'>
          <Plus
            size={20}
            stroke='#121212'
            className='hover:rotate-90 transition-all duration-200'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 mt-3'>
        <p
          className={classNames(
            'text-sm text-[#707070]',
            isMobile && '!text-xs text-center'
          )}
        >
          SCENT FAMILY: GREEN AROMATIC
        </p>
        <p
          className={classNames(
            'text-lg text-[#121212]',
            isMobile && '!text-base'
          )}
        >
          {data.name}
        </p>
        <p
          className={classNames(
            'text-xs text-[#121212] text-center line-clamp-2',
            isMobile && '!text-[10px]'
          )}
        >
          {data.description}
        </p>
        <p className='text-lg text-[#121212]'>
          {formatNumberWithCustomSeparators(parseInt(data.price))} VND
        </p>
      </div>
    </div>
  );
};

export default SuggestCard;
