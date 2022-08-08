import { Box, Container, Typography } from '@mui/material';
import { yyyymmdd } from 'utils';

export default function JoinPage() {
	const title = 'Boston Badminton Tournament 2022';
	const organizer = "Badminton World Federation";
	const location = "Kuala Lumpur, Malaysia";
	const startDate = new Date(2022, 11, 24);
	const endDate = new Date(2022, 11, 25);
	return (
		<Container maxWidth="md">
			<Typography variant="h4">{title}</Typography>
			<Box sx={{ display: 'flex' }}>
				<Typography variant="subtitle1">{organizer}</Typography>
				<Box m={2} />
				<Typography variant="subtitle1">{location}</Typography>
			</Box>
			<Typography variant="subtitle1">{yyyymmdd(startDate)} - {yyyymmdd(endDate)}</Typography>
		</Container>
	)
}