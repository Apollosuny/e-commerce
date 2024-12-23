'use client';

import CandleTips from '@/components/candle-tips';
import { Minus, Plus, Share2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ProductDetailPage: React.FC = () => {
  const [showContent1, setshowContent1] = useState<boolean>(false);

  return (
    <div className='px-20 mb-10'>
      <div className='grid grid-cols-2 gap-x-4'>
        {/* Left Content */}
        <div className='flex flex-col items-center justify-center gap-3'>
          <Image
            src='https://brooklyncandlestudio.com/cdn/shop/files/pick-3-classic-candles-brooklyn-candle-studio-491484.jpg?v=1724448684&width=800'
            alt='Product-Preview-1'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full object-cover'
          />
          <Image
            src='https://brooklyncandlestudio.com/cdn/shop/files/pick-3-escapist-candles-brooklyn-candle-studio-101525.jpg?v=1724289007&width=800'
            alt='Product-Preview-2'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full object-cover'
          />
          <div className='w-full flex-1'>
            <div className='w-full border-t border-b'>
              <div
                className='flex items-center justify-between py-6 w-full'
                tabIndex={-1}
                role='button'
                onClick={() => setshowContent1(!showContent1)}
                onKeyDown={() => setshowContent1(!showContent1)}
              >
                <p className=''>Product Details</p>
                <Plus size={18} stroke='#5f5f5f' />
              </div>
              {showContent1 && (
                <div className='mb-5'>
                  <p>
                    Our Classic Candle takes you to our favorite places in the
                    world, places we’ve traveled to that have a permanent place
                    in our olfactory memories. Double-wicked and housed in white
                    textured boxes and screenprinted glass tumblers, this
                    collection will tug at the heartstrings of minimalists
                    around the world.
                  </p>
                  <div className='mt-4'>
                    <p>
                      Volume: 13 oz
                      <br />
                      Diameter: 3 3/8 in
                      <br />
                      Height: 4 1/4 in
                      <br />
                      Burn time: Up to 70 hours
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className='w-full border-b'>
              <div className='flex items-center justify-between py-6 w-full'>
                <p className=''>Candle Care + Safety</p>
                <Plus size={18} stroke='#5f5f5f' />
              </div>
            </div>
            <div className='w-full border-b'>
              <div className='flex items-center justify-between py-6 w-full'>
                <p className=''>Shipping + Exchanges</p>
                <Plus size={18} stroke='#5f5f5f' />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className='relative'>
          <div className='sticky top-20'>
            <div className='bg-[#767474] p-1 text-sm w-fit text-white'>
              BUNDLE AND SAVE
            </div>
            <h2 className='text-2xl font-semibold mt-3'>
              Pick 3 Classic Candles
            </h2>
            <h3 className='text-xl font-medium mt-3'>$195</h3>
            <div className='flex items-center justify-between border p-4 w-1/4 mt-3'>
              <button className=''>
                <Minus size={16} stroke='#ababab' />
              </button>
              <span>1</span>
              <button className=''>
                <Plus size={16} stroke='#1c1c1c' />
              </button>
            </div>
            <button className='flex items-center justify-center p-4 border mt-4 w-full'>
              ADD TO CART
            </button>
            <div className='underline cursor-pointer w-full flex items-center justify-center mt-2'>
              More payment options
            </div>
            <div className='mt-4 flex items-start justify-center flex-col gap-y-3'>
              <p>
                Burn &apos;em one at a time, or burn them together. Just be sure
                to pick your favorites.
              </p>
              <p>
                Our favorite combos:
                <br />
                Smoky + Woodsy: Santa Fe / Catskills / Kyoto
                <br />
                Spicy + Cozy: Marrakech / Italia / Brooklyn
                <br />
                Floral + Fresh : Maui / Tulum / Tuileries
                <br />
                Earthy + Warm: Santorini / Bali / Brooklyn
              </p>
              <p>
                Made in Brooklyn, New York with 100% soy wax for an eco-friendly
                clean burn. We use lead-free cotton wicks and premium fragrance
                oils infused with essential oils. Our candles are vegan,
                cruelty-free, phthalate-free, and petroleum-free.
              </p>
            </div>
            <div className='flex items-center gap-2 mt-4 cursor-pointer'>
              <p className='text-[#cdcdcd]'>SHARE</p>
              <Share2 size={16} stroke='#cdcdcd' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <CandleTips />
      </div>
      <div className='mt-16 relative'>
        <Image
          src='https://brooklyncandlestudio.com/cdn/shop/files/Shot_6_Brooklyn_Candle_Studio_386.jpg?v=1709053352&width=1800'
          alt='Product-Detail-Banner'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-[400px] object-cover'
        />
        <div className='bg-black/40 w-full h-[400px] absolute top-0 left-0' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-center flex-col'>
            <p className='text-white text-2xl'>
              Create a bespoke combo & save.
            </p>
            <p className='text-white text-sm'>
              Burn &apos;em one at a time, or burn them together. Just be sure
              to pick your favorites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
