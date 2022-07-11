import { Button, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

function Login() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				p: 1,
				m: 1,
				bgcolor: 'background.paper',
				borderRadius: 1,
			}}
		>
      <TextField
        label="Username"
        variant="outlined"
      />
			<Box p={2} />
			<TextField
        label="Password"
        variant="outlined"
      />
			<Button>Sign In</Button>
		</Box>
	)
}

export default Login;