import React from "react";

// MUI UI/UX styles
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Footer = () => {
	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 5 }}
				py={{ xs: 5, sm: 5 }}
				bgcolor="text.secondary"
				color="white"
			>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={3}>
							<Box>
								<img src="/" alt="devprep-logo" />
							</Box>
						</Grid>
						<Grid item xs={12} sm={3} lineHeight={2}>
							<Box borderBottom={1}>ABOUT US</Box>
							<Box>
								<Link href="/" color="inherit">
									Our Story
								</Link>
							</Box>
							<Box>Team members</Box>
						</Grid>
						<Grid item xs={12} sm={3} lineHeight={2}>
							<Box borderBottom={1}>CONTACT</Box>
							<Box>Email: </Box>
							<Box>
								<Link href="https://github.com/DevPreps" color="inherit">
									Github
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={3} lineHeight={2}>
							<Box borderBottom={1}>HELP</Box>
							<Box>Support</Box>
							<Box>Terms</Box>
							<Box>Privary</Box>
						</Grid>
					</Grid>
					<Box
						textAlign="center"
						pt={{ xs: 5, sm: 5 }}
						pb={{ xs: 5, sm: 0 }}
						color="black"
					>
						Copyright &reg; {new Date().getFullYear()} Devprep, Inc.
					</Box>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
