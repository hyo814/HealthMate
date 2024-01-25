import React, {useEffect, useState} from 'react';

import {Button} from "@mui/material";
import walkPoint from "../../../mockups/prototypes/walkPoint.json";

const TopNavigationBar = () => {
	const [userId, setUserId] = useState<string>('');
	
	useEffect(() => {
		const storedUserId = localStorage.getItem('userId');
		
		if (storedUserId) {
			setUserId(storedUserId);
		}
	}, []);
	
	const handleLogout = () => {
		localStorage.removeItem('userId');
		localStorage.removeItem('token');
		window.location.href = '/';
	};
	
	const walkPointInfo = walkPoint.map((item, idx) => {
		return (
			<div key={idx}>
				<h2>{item.dailySteps} WALKS / {item.currentPoints} POINTS</h2>
			</div>
		);
	});
	
	return (
		<div style={{display: 'flex', justifyContent: 'space-between'}}>
  <span style={{flex: 1, textAlign: 'left'}}>
	  <h2> H.E.A.L.T.H.M.A.T.E: Customized Health Information </h2>
    <h3>{userId}님 환영합니다.</h3>
  </span>
			<span style={{flex: 1, textAlign: 'right'}}>
				<div>{walkPointInfo}</div>
				&nbsp;
				<Button onClick={handleLogout}><h3>LOGOUT</h3></Button>
  </span>
		</div>
	);
}

export default TopNavigationBar;
