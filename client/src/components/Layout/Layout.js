import Navbar from './Navbar';
import Footer from './Footer';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const RootBox = styled(Box)`
	min-height: 100vh;
	display: flex;
	flex-flow: column;
`
const SMain = styled("main")`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export default function Layout({ children }) {
  return (
    <RootBox>
      <Navbar />
      <SMain>{children}</SMain>
			<Footer />
    </RootBox>
  )
}

export const getLayout = page => <Layout>{page}</Layout>