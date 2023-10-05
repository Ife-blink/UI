import React, { ReactNode } from 'react';
import Header from '@/components/Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-[100%]'>
        <Header />
        {children}
    </div>
  );
};

export default Layout;