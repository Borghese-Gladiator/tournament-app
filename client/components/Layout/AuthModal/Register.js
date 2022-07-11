import { TextField, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Register() {
	return (
		<>
      <TextField
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
			<TextField
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
		</>
	)
}

export default Register;