// Authenticate 
import { useState } from 'react';

import { getLayout } from '@/components/Layout';
import { Box, Container, InputLabel, OutlinedInput, InputAdornment, FormControl, Select, MenuItem } from '@mui/material';
import Logo from '@/components/Logo';

import SearchIcon from '@mui/icons-material/Search';

function Home() {
	const [filter, setFilter] = useState('');
	const [search, setSearch] = useState('');
	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	}
	return (
		<Container maxWidth="md">
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Logo />
				<Box mt={1} sx={{ display: 'flex' }}>
					<Select
						fullWidth
						displayEmpty
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						sx={{ minWidth: '150px' }}
					>
						<MenuItem value="">
							<em>All Sports</em>
						</MenuItem>
						<MenuItem value="Badminton">Badminton</MenuItem>
						<MenuItem value="Tennis">Tennis</MenuItem>
					</Select>
					<OutlinedInput
						placeholder={`Search for Player Profiles, Tournaments & More`}
						value={search}
						onChange={handleChange}
						endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
						sx={{ minWidth: '420px' }}
					/>
				</Box>
			</Box>
		</Container>
	)
}

Home.getLayout = getLayout;

export default Home;
