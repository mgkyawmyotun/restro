import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import type { FC } from 'react';
import { logout } from '../firebase/auth';
import styles from '../scss/dashboard.module.scss';
interface NavBarProps {
  open: boolean;
  drawerWidth: number;
  handleDrawerOpen: () => void;
}
export const NavBar: FC<NavBarProps> = ({
  open,
  drawerWidth,
  handleDrawerOpen,
}) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }: { theme?: any; open: any }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  return (
    <AppBar position="fixed" open={open} className={styles.navbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          I dont Know What I am Doing
        </Typography>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ marginLeft: 'auto' }}
          onClick={logout}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
