import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (    
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					MUI
				</Typography>
				
			</Toolbar>
		</AppBar>
  );
}

export default Footer;
