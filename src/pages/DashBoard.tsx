import { Box } from '@mui/material';
import { DocumentData } from 'firebase/firestore';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DrawerHeader } from '../components/DrawerHeader';
import { MyDrawer } from '../components/MyDrawer';
import { NavBar } from '../components/NavBar';
import { ResMenu } from '../components/ResMenu';
import { ResProfile } from '../components/ResProfile';
import { getMenus } from '../firebase/db';
import { useUser } from '../hooks/useUser';
const drawerWidth = 240;
const ListOfComponent: { [key: string]: React.ReactElement } = {
  Home: <ResProfile />,
  Menu: <ResMenu />,
};
interface DashBoardProps {}
export const DashBoard: FC<DashBoardProps> = () => {
  const [user] = useUser();
  const [menu, setMenu] = useState<DocumentData[]>();
  const [open, setOpen] = React.useState(false);
  const [currentC, setCurrentC] = React.useState(<ResProfile />);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [user]);

  useEffect(() => {
    getMenus().then((docs) => {
      setMenu(docs);
    });
  }, []);
  return user ? (
    <Box sx={{ display: 'flex' }}>
      <NavBar
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <MyDrawer
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        open={open}
        onComponentChange={(key) => {
          setCurrentC(ListOfComponent[key as any]);
        }}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {currentC}
      </Box>
    </Box>
  ) : (
    <></>
  );
};
