import React, {useState} from "react";

import walkPointData from "../../../mockups/prototypes/walkPoint.json";
import WalkSrc from "../../style/image/Walk.jpg";

const Walk = () => {
	const userId = localStorage.getItem("userId");
	const walkPoint = walkPointData [0]
	const percentage = (walkPoint?.dailySteps / walkPoint?.targetSteps) * 100;
	
	const pointsPerSteps = 100;
	const pointsEarned = Math.floor((walkPoint?.dailySteps / 1000) * pointsPerSteps);
	
	const [totalPoints, setTotalPoints] = useState(walkPoint?.currentPoints);
	
	const convertPoints = () => {
		const previousPoints = totalPoints;
		const newPoints = pointsEarned;
		const updatedTotalPoints = previousPoints + newPoints;
		
		// 실제 서버 요청 및 응답 처리를 시뮬레이션합니다.
		// 여기에서는 setTimeout을 사용하여 비동기적으로 처리합니다.
		simulateServerRequest(updatedTotalPoints);
	};
	
	const simulateServerRequest = (updatedTotalPoints) => {
		const today = new Date().toDateString();
		const lastConversionDate = localStorage.setItem("lastConversionDate", today);
		setTimeout(() => {
			// 서버 요청을 시뮬레이션하고 성공 또는 실패 여부에 따라 처리합니다.
			const success = true; // 가정: 요청 성공
			
			if (success) {
				if ((lastConversionDate !== null) && (localStorage.getItem("lastConversionDate") === today)) {
					alert("오늘은 이미 포인트를 전환했습니다. 하루에 한 번만 가능합니다.");
					return; // 이미 전환한 경우 더 이상 동작하지 않도록 종료
				}
				setTotalPoints(updatedTotalPoints); // 서버 응답이 성공한 경우, 클라이언트 상태를 업데이트합니다.
				alert(`포인트를 성공적으로 전환하였습니다. 현재 포인트: ${updatedTotalPoints}개`);
			} else {
				alert('서버 요청에 실패했습니다. 다시 시도해주세요.');
			}
		}, 1000); // 1초 후에 응답을 시뮬레이션합니다.
	};
	
	const shareData = () => {
		const shareText = `목표 걸음 수: ${walkPoint?.targetSteps}, 현재 걸음 수: ${walkPoint?.dailySteps}, 1주 간 걸음 평균 수: ${walkPoint?.averageWeeklySteps}, 상위 ${walkPoint?.rankingPercent}% 걷기 천재: hyo814`;
		
		if (navigator.share) {
			navigator.share({
				title: '걷기 운동 카드 공유',
				text: shareText,
			})
				.then(() => {
					console.log('데이터 공유 완료');
				})
				.catch((error) => {
					console.error('데이터 공유 실패:', error);
				});
		} else {
			const shareLink = document.createElement('a');
			shareLink.href = 'mailto:?subject=걷기 운동 카드 공유&body=' + encodeURIComponent(shareText);
			shareLink.click();
		}
	};
	
	return (
		<div style={{
			height: "100vh", // Full height
			width: "100vw", // Full width
			backgroundImage: `url(${WalkSrc?.src})`, // Background image
			backgroundSize: "cover", // Cover the entire viewport
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<div style={{
				margin: "5px",
				backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for the form
				padding: "40px",
				height: "400px",
				borderRadius: "57px"
			}}>
				<h1>걷기 운동 카드</h1>
				<p>목표 걸음 수: <span id="targetSteps">{walkPoint?.targetSteps}</span></p>
				<p>현재 걸음 수: <span id="dailySteps">{walkPoint?.dailySteps}</span></p>
				<p>1주 간 걸음 평균 수: <span id="averageSteps">{walkPoint?.averageWeeklySteps}</span></p>
				<p>진행률: <span id="progress">{percentage.toFixed(2)}%</span></p>
				<p>현재 포인트: {totalPoints} POINT </p>
				<button onClick={convertPoints}>포인트 전환하기 ({pointsEarned}걸음 당 {pointsPerSteps} 포인트)</button>
				<button onClick={shareData}>공유하기</button>
				<p>상위 {walkPoint?.rankingPercent}% 걷기 : {userId}</p>
			</div>
		</div>
	);
}

export default Walk;
