import Advertise from '../advertise';
import Footer from '../footer';
import Header from '../header';
import MenuModal from '../header/menu-modal';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className=''>
      <Advertise />
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
