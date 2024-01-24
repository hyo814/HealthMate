import React from "react";

import CardInfo from "../Card/CardInfo";
import supplement from "../../../mockups/prototypes/supplements.json";

const Supplement = () => {
	return (
		<>
			<CardInfo cardList={supplement} text={"영양 보조 식품 정보"}/>
		</>
	);
}

export default Supplement;
