import Header from '../header';

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
    </div>
  );
};

export default MainLayout;
