import Image from 'next/image';
import ProductCard from '../product/product-card';

const Shop: React.FC = () => {
  return (
    <div className='px-4'>
      <div className='grid grid-cols-4 border-b-2 border-l-2 border-r-2 border-dashed'>
        <div className='col-span-2 border-r-2 border-dashed'>
          <div className='pt-10 py-14 ml-16'>
            <div className=''>
              <p className='font-["Bodoni"] text-8xl font-medium'>Shop our</p>
              <div className='flex items-center gap-2'>
                <p className='font-["Bodoni"] text-8xl font-medium'>latest</p>
                <Image
                  src='/assets/icons/coffee-beans.svg'
                  alt='coffee-beans'
                  width={60}
                  height={60}
                  className='!h-15 !w-15'
                />
              </div>
              <p className='font-["Bodoni"] text-8xl font-medium'>collection</p>
            </div>
            <button className='mt-8 border rounded-lg w-1/3 p-4'>
              See All
            </button>
          </div>
        </div>
        <div className='border-r-2 border-dashed'>
          <ProductCard />
        </div>
        <ProductCard />
      </div>
      <div className='grid grid-cols-4 border-b-2 border-l-2 border-r-2 border-dashed'>
        <div className='col-span-2 border-r-2 border-dashed'>
          <div className='relative'>
            <Image
              src='https://images.pexels.com/photos/6259444/pexels-photo-6259444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        <div className='border-r-2 border-dashed'>
          <ProductCard />
        </div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;
