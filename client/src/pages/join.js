// Authenticate 
import { getLayout } from '@/components/Layout';
import { Box, Container, Typography } from '@mui/material';

function yyyymmdd(date) {
	const mm = date.getMonth() + 1; // getMonth() is zero-based
	const dd = date.getDate();

	return [
		(mm > 9 ? '' : '0') + mm,
		(dd > 9 ? '' : '0') + dd,
		date.getFullYear(),
	].join('/');
};

function Join() {
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

Join.getLayout = getLayout;

export default Join;
