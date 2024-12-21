import Footer from '../footer';
import Header from '../header';
import MenuModal from '../header/menu-modal';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className=''>
      {/* Header */}
      <Header />
      <div className=''>{children}</div>
      {/* Footer */}
      <Footer />
      <MenuModal />
    </div>
  );
};

export default MainLayout;
