import React from "react";

import MainInfoCard from "../Card/MainInfoCard";
import dietList from "../../../mockups/prototypes/dietList.json";
import exerciseList from "../../../mockups/prototypes/exerciseList.json";
import styles from "./@Center.module.css";

const Center = () => {
	return (
		<div className={styles.center}>
			<div style={{textAlign: "left"}}>
				<div>다이어트, 이렇게 시작하세요!</div>
				<div>추천 영상 이미지를 클릭 해볼까요?</div>
				<MainInfoCard cardList={dietList}/>
			</div>
			<div style={{textAlign: "right"}}>
				<div>운동 시작은 여기서부터!</div>
				<div>오늘부터 함께해요!</div>
				<MainInfoCard cardList={exerciseList}/>
			</div>
		</div>
	
	)
}

export default Center;
