import React from "react";

import CardInfo from "../Card/CardInfo";
import nutrients from "../../../mockups/prototypes/nutrients.json";

const Nutrient = () => {
	return (
		<>
			<CardInfo cardList={nutrients} text={"영양제 정보"}/>
		</>
	);
}

export default Nutrient;
