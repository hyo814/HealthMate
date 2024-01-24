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
		setToken(storedToken); // 토큰 상태 업데이트
		
		if (!storedToken) {
			router.push('/');
		}
	}, [token]); // 의존성 배열에 token 추가
	
	return (
		<>
			<TopNavigation/>
			<BottomNavigation/>
			<Footer/>
		</>
	
	);
};

export default Home;
