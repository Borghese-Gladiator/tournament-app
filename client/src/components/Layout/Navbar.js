

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

// Custom
import Logo from '@/components/Logo';

const AppBarStyled = styled(AppBar)`
	z-index: 1100;
	top: 0px;
	left: auto;
	right: 0px;
	padding: 8px 16px;
	transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	box-shadow: none;
	backdrop-filter: blur(20px);
	border-style: solid;
	border-color: rgba(194, 224, 255, 0.08);
	border-width: 0px 0px thin;
	background: rgba(10, 25, 41, 0.7);
	color: rgb(160, 170, 180);
`

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <Toolbar>
					<Logo />
					<Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
}

export default Navbar;
