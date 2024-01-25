import React, {useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import walkPointData from "../../../mockups/prototypes/walkPoint.json";
import styles from "./@walk.module.css";
import Button from "@mui/material/Button";

const ProgressCircle = ({value, label}) => {
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress variant="determinate" value={value}/>
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography variant="caption" component="div" color="textPrimary">
					{`${Math.round(value)}%`}
				</Typography>
			</Box>
			<Typography variant="caption" component="div" color="textSecondary">
				{label}
			</Typography>
		</Box>
	);
};

const Walk = () => {
	const userId = localStorage.getItem("userId");
	const walkPoint = walkPointData [0]
	const percentage = (walkPoint?.dailySteps / walkPoint?.targetSteps) * 100;
	
	const pointsPerSteps = 100;
	const pointsEarned = Math.floor((walkPoint?.dailySteps / 1000) * pointsPerSteps);
	
	const [totalPoints, setTotalPoints] = useState(walkPoint?.currentPoints);
	
	const convertPoints = () => {
		const updatedTotalPoints = totalPoints + pointsEarned;
		
		simulateServerRequest(updatedTotalPoints);
	};
	
	const simulateServerRequest = (updatedTotalPoints) => {
		const today = new Date().toDateString();
		const lastConversionDate = localStorage.setItem("lastConversionDate", today);
		setTimeout(() => {
			const success = true; // 백엔드 서버가 없기 때문에 요청 성공 가정화
			
			if (success) {
				if ((lastConversionDate !== null) && (localStorage.getItem("lastConversionDate") === today)) {
					alert("오늘은 이미 포인트를 전환했습니다. 하루에 한 번만 가능합니다.");
					return;
				}
				setTotalPoints(updatedTotalPoints);
				alert(`포인트를 성공적으로 전환하였습니다. 현재 포인트: ${updatedTotalPoints}개`);
			} else {
				alert('서버 요청에 실패했습니다. 다시 시도해주세요.');
			}
		}, 1000);
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
		<div className={styles.walk_layer}>
			<div className={styles.walk_detail_layer}>
				<div className={styles.walk_detail_layer}>
					<h1>걷기 운동 카드</h1>
					<Button onClick={convertPoints}>포인트 전환하기 ({pointsEarned}걸음 당 {pointsPerSteps} 포인트)</Button>
					<Button onClick={shareData}>공유하기</Button>
				</div>
				<div className={styles.walk_detail_layer}>
					<p>목표 걸음 수: <span id="targetSteps">{walkPoint?.targetSteps}</span></p>
					<p>현재 걸음 수: <span id="dailySteps">{walkPoint?.dailySteps}</span></p>
					<p>1주 간 걸음 평균 수: <span id="averageSteps">{walkPoint?.averageWeeklySteps}</span></p>
				</div>
				<div className={styles.walk_detail_layer}>
					<p>현재 포인트: {totalPoints} POINT </p>
					<p>진행률: <span id="progress">{percentage.toFixed(2)}%</span></p>
					<p>상위 {walkPoint?.rankingPercent}% 걷기 : {userId}</p>
					<br/>
					<ProgressCircle value={percentage} label="일일 목표 달성률"/>
					&nbsp;<ProgressCircle value={walkPoint?.rankingPercent} label="상위 퍼센트"/>
				</div>
			</div>
		</div>
	);
}

export default Walk;
