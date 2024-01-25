import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'background.paper', p: 3 }} component="footer">
			<Typography variant="body2" color="text.secondary" align="center">
				© {new Date().getFullYear()} HEALTHYMATE
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				<Link color="inherit" href="www.healthymate.com/">
					www.healthymate.com
				</Link>
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Contact Us: https://github.com/hyo814
			</Typography>
		</Box>
	);
};

export default Footer;
