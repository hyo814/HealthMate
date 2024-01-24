import React, {useEffect, useState} from 'react';

import {Button} from "@mui/material";
import walkPoint from "../../../mockups/prototypes/walkPoint.json";

const TopNavigationBar = () => {
	// 상태 변수를 정의하여 localStorage에서 가져온 값을 저장
	const [userId, setUserId] = useState('');
	
	// 컴포넌트가 마운트될 때 localStorage에서 값을 가져옴
	useEffect(() => {
		// localStorage에서 userId 가져오기
		const storedUserId = localStorage.getItem('userId');
		
		// 가져온 userId가 있다면 상태에 설정
		if (storedUserId) {
			setUserId(storedUserId);
		}
	}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행
	
	// 로그아웃 처리 함수
	const handleLogout = () => {
		localStorage.removeItem('userId'); // 토큰 제거
		localStorage.removeItem('token'); // 토큰 제거
		window.location.href = '/'; // 로그인 페이지로 이동
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
