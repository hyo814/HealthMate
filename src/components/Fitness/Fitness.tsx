import React from "react";

import Card from "../Card/CardInfo";
import fitness from "../../../mockups/prototypes/fitness.json";

const Fitness = () => {
	return (
		<>
			<Card cardList={fitness} text={"피트니스 정보"}/>
		</>
	);
}

export default Fitness;
