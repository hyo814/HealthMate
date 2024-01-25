import React from "react";

import MainInfoCard from "../Card/MainInfoCard";
import dietList from "../../../mockups/prototypes/dietList.json";
import exerciseList from "../../../mockups/prototypes/exerciseList.json";
import styles from "./@Center.module.css";

const Center = () => {
	return (
		<div className={styles.center}>
			<div className={styles.center_text}>
				<div><b>다이어트, 이렇게 시작하세요!</b></div>
				<div><b>추천 영상 이미지를 클릭 해볼까요?</b></div>
				<MainInfoCard cardList={dietList}/>
			</div>
			<div className={styles.center_text}>
				<div><b>운동 시작은 여기서부터!</b></div>
				<div><b>오늘부터 함께해요!</b></div>
				<MainInfoCard cardList={exerciseList}/>
			</div>
		</div>
	
	)
}

export default Center;
