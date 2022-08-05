
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';

function Logo() {
	return (
		<>
			<AdbIcon sx={{ mr: 1 }} />
			<Typography
				variant="h6"
				noWrap
				component="a"
				href="/"
				sx={{
					mr: 2,
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'inherit',
					textDecoration: 'none',
				}}
			>
				LOGO
			</Typography>
		</>
	)
}

export default Logo;
