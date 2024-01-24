import React from "react";

import MainInfoCard from "../Card/MainInfoCard";
import MainCard from "../../style/image/RecomendTrends.png";
import dietList from "../../../mockups/prototypes/dietList.json";
import exerciseList from "../../../mockups/prototypes/exerciseList.json";

const Center = () => {
	return (
		<div style={{
			backgroundImage: `url(${MainCard?.src})`, // Background image
			backgroundSize: "cover", // Cover the entire viewport
			alignItems: "center",
			display: 'flex',
			color: "white",
			justifyContent: 'space-between',
			"padding": "20px"
		}}>
			<div style={{textAlign: "left"}}>
				<h3>다이어트, 이렇게 시작하세요!</h3>
				<h3>추천 영상 이미지를 클릭 해볼까요?</h3>
				<MainInfoCard cardList={dietList} text={"생생 운동 정보"}/>
			</div>
			<div style={{textAlign: "right"}}>
				<h3>운동 시작은 여기서부터!</h3>
				<h3>오늘부터 함께해요!</h3>
				<MainInfoCard cardList={exerciseList} text={"생생 식품 정보"}/>
			</div>
		</div>
	
	)
}

export default Center;
