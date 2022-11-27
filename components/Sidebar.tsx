import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    fontSize: 36
  },
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter()
  const user = useSelector((state: RootState) => state.userManagementState.user)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log(user.email)

  return (
    <Box className='relative h-full w-screen'sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className= 'absolute h-full bg-[#00703D]' position="fixed" open={open}>
        <Toolbar className='h-full'>
                
          <IconButton
            color="inherit"
            aria-label="open drawer"
            size='large'
            className='h-full mt-6 hover:bg-transparent transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' })}}
            >
            <MenuIcon className='h-4/5 w-4/5 md:h-4/5 md:w-4/5 lg:h-4/5 lg:w-4/5'/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            {/* if text is needed in the navbar */}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* if !user, show login and register options */}
      {!user.email ? 
      <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
        <DrawerHeader>
          <IconButton className='' onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Search Items Nearby'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['About Us'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/about')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Create An Account'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/register')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Login'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/login')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      : 

      <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
        <DrawerHeader>
          <IconButton className='' onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Search Items Nearby'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['About Us'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/about')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Log out'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push('/register')} className='hover:text-[#FF6B18] delay-150'>
                <ListItemIcon >
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      } 
    </Box>
  );
}