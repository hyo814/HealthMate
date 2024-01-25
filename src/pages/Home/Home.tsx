import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

import BottomNavigation from "../../components/NavigationBar/BottomNavigation";
import TopNavigation from "../../components/NavigationBar/TopNavigation";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
	const router = useRouter();
	
	const [token, setToken] = useState<string | null>(null);
	
	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		setToken(storedToken);
		
		if (!storedToken) {
			router.push('/');
		}
	}, [token]);
	
	return (
		<>
			<TopNavigation/>
			<BottomNavigation/>
			<Footer/>
		</>
	
	);
};

export default Home;
