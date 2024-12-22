import { AlignJustify, ChevronDown, Grip, LayoutGrid } from 'lucide-react';

const FilterSection: React.FC = () => {
  return (
    <div className='border-b border-t items-center justify-between flex'>
      <div className='flex items-center justify-center gap-3 border-r py-4 px-6'>
        <LayoutGrid size={24} stroke='#8d8d8d' />
        <Grip size={24} stroke='#8d8d8d' />
        <AlignJustify size={24} stroke='#8d8d8d' />
      </div>
      <div className='flex items-center justify-center gap-2 border-l py-4 px-6'>
        <p className='text-sm'>Sort by</p>
        <ChevronDown size={16} stroke='#121212' />
      </div>
    </div>
  );
};

export default FilterSection;
