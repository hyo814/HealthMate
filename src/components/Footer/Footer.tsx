import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'background.paper', p: 3 }} component="footer">
			<Typography variant="body2" color="text.secondary" align="center">
				© {new Date().getFullYear()} HEALTHYMATE
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				<Link color="inherit" href="https://www.yourwebsite.com/">
					www.healthymate.com
				</Link>
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Contact Us: ggamjige8888@naver.com
			</Typography>
		</Box>
	);
};

export default Footer;
