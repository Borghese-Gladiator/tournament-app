import Navbar from './Navbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const RootBox = styled(Box)`
	display: flex;
	flex-flow: column;
	height: 100vh;
`
const SNavbar = styled(Navbar)`
	flex: 0 1 auto;
	/* The above is shorthand for:
	flex-grow: 0,
	flex-shrink: 1,
	flex-basis: auto
	*/
`
const SMain = styled("main")`
	flex: 1 1 auto;
`
const SFooter = styled("footer")`
	flex: 0 1 40px;
`

export default function Layout({ children }) {
  return (
    <RootBox>
      <SNavbar />
      <SMain>{children}</SMain>
			<SFooter>BLAH</SFooter>
    </RootBox>
  )
}

export const getLayout = page => <Layout>{page}</Layout>