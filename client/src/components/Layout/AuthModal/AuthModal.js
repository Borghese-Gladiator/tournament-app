import { useState } from 'react';

// Components
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// Custom
import Login from './Login';
import Register from './Register';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

function ModalContent() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ maxWidth: 'sm'}}>
			<div>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label="Login" />
					<Tab label="Register" />
				</Tabs>
			</div>
			<TabPanel value={value} index={0}>
				<Login />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Register />
			</TabPanel>
		</Box>
	)
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Navbar() {
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="filled" color="secondary" onClick={handleOpen}>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
					<ModalContent />
        </Box>
      </Modal>
    </div>
  );
}

export default Navbar;