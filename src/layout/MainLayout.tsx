import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
// import experimentalStyled from '@mui/styled-engine';

interface MainLayoutProps {
  children?: ReactNode;
}

// const MainLayoutRoot = experimentalStyled('div')(({ theme }: any) => ({
//   backgroundColor: theme.palette.background.default,
//   height: '100%',
//   paddingTop: 64,
// }));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div>
    <Navbar/>
    <div>{children || <Outlet />}</div>
  </div> ;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
