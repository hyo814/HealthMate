import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Nutrient from "../Nutrient/Nutrient";
import Supplement from "../Supplement/Supplement";
import Center from "../Center/Center";
import Fitness from "../Fitness/Fitness";
import Walk from "../Walk/Walk";

const BottomNavigationBar = () => {
	const [tabIndex, setTabIndex] = useState<number>(2);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		
		handleResize();
		
		window.addEventListener('resize', handleResize);
		
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	const renderTabContent = () => {
		switch (tabIndex) {
			case 0:
				return <Nutrient/>;
			case 1:
				return <Supplement/>;
			case 2:
				return <Center/>;
			case 3:
				return <Fitness/>;
			case 4:
				return <Walk/>;
			default:
				return <div>선택된 탭이 없습니다.</div>;
		}
	};
	
	return (
		<div>
			{isMobile ?
				<>
					{renderTabContent()}
					<Box sx={{width: "auto"}}>
						<BottomNavigation
							showLabels
							value={tabIndex}
							onChange={(event, newValue) => {
								setTabIndex(newValue);
							}}
						>
							<BottomNavigationAction label="영양제"/>
							<BottomNavigationAction label="영양보조식품"/>
							<BottomNavigationAction label="나"/>
							<BottomNavigationAction label="피트니스"/>
							<BottomNavigationAction label="걷기카드"/>
						</BottomNavigation>
					</Box>
				</>
				:
				<>
					<Box sx={{width: "auto"}}>
						<BottomNavigation
							showLabels
							value={tabIndex}
							onChange={(event, newValue) => {
								setTabIndex(newValue);
							}}
						>
							<BottomNavigationAction label="영양제"/>
							<BottomNavigationAction label="영양보조식품"/>
							<BottomNavigationAction label="나"/>
							<BottomNavigationAction label="피트니스"/>
							<BottomNavigationAction label="걷기카드"/>
						</BottomNavigation>
					</Box>
					{renderTabContent()}
				</>
			}
		</div>
	);
}

export default BottomNavigationBar;
