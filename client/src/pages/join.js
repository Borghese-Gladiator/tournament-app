// Authenticate 
import { getLayout } from '@/components/Layout';
import JoinPage from 'features/join/JoinPage';

function Join() {
	return <JoinPage />
}

Join.getLayout = getLayout;

export default Join;
