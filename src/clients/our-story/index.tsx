'use client';

import { useIsMobile } from '@/libs/hooks/use-is-mobile';
import classNames from 'classnames';
import Image from 'next/image';

const OurStoryPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className='mb-10'>
      <div className='relative'>
        <Image
          src='https://images.pexels.com/photos/5825575/pexels-photo-5825575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Our story'
          width='0'
          height='0'
          sizes='100%'
          className='w-full h-[400px] object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 top-0 left-0' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
          <h3 className='text-2xl'>Our story</h3>
        </div>
      </div>
      <div className='mt-10 px-4'>
        <h3 className='text-center text-xl'>Our story</h3>
        <p className='text-4xl text-center mt-4'>
          Here’s to dreamy days and cozy,
          <br /> candlelit nights
        </p>
        <div
          className={classNames(
            'grid grid-cols-2 mt-6',
            isMobile && '!grid-cols-1'
          )}
        >
          <Image
            src='https://images.pexels.com/photos/5933778/pexels-photo-5933778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Our story 1'
            width='0'
            height='0'
            sizes='100%'
            className={classNames(
              'w-full h-[600px] object-cover',
              isMobile && 'h-[400px]'
            )}
          />
          <div className='flex flex-col items-start justify-center gap-4 p-6'>
            <h4
              className={classNames(
                'text-xl font-normal',
                isMobile && '!text-center w-full'
              )}
            >
              Our story
            </h4>
            <p>
              We are Brooklyn Candle Studio. Our mission is simple: to create
              home fragrance products with captivating scents, beautiful
              minimalist design, and the best ingredients. Essentially,
              everything we love about luxury home fragrance, but at accessible
              prices. Our dreamy scents are inspired by nature and travel,
              moments and memories.
            </p>
            <p>
              For our candles, we use 100% soy wax derived from American-grown
              soy beans for an eco-friendly, clean burn and lead-free cotton
              wicks.
            </p>
            <p>
              All of our products are petroleum-free, cruelty-free,
              phthalate-free, and 100% vegan. Each of our products is poured and
              labeled by hand by our in-house team of artisans.
            </p>
            <p>
              We produce our products out of a 10,000 square foot workshop in
              Industry City in Sunset Park, Brooklyn, a hub of makers,
              designers, artists, and small businesses. All of our employees
              earn fair wages and benefits: paid time off and subsidized
              healthcare, dental, and vision.
            </p>
            <p>
              We like to think of our wares as full sensory experiences—from the
              artful minimal packaging to the warm candlelight and delicate
              aromas that fill a room. So, go ahead, light one up.
            </p>
          </div>
        </div>
        <div
          className={classNames('grid grid-cols-2', isMobile && '!grid-cols-1')}
        >
          <div
            className={classNames(
              'flex flex-col items-start justify-center gap-4 p-6',
              isMobile && '!order-2'
            )}
          >
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &apos;lorem
              ipsum&apos; will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          <Image
            src='https://images.pexels.com/photos/8591648/pexels-photo-8591648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Our story 2'
            width='0'
            height='0'
            sizes='100%'
            className={classNames(
              'w-full h-[600px] object-cover',
              isMobile && '!h-[400px]'
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
