import Banner from '@/components/shop/banner';
import FilterSection from '@/components/shop/filter-section';
import Products from '@/components/shop/products';

const ShopPage: React.FC = () => {
  return (
    <div className='mb-10'>
      <Banner />
      <FilterSection />
      <Products />
    </div>
  );
};

export default ShopPage;
