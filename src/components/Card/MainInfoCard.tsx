import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from "@mui/material/CircularProgress";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const MainInfoCard = ({cardList}) => {
	return (
		<div>
			{cardList.length === 0 ?
				<CircularProgress/>
				:
				<>
					<ImageList sx={{
						padding: "5%",
						width: "auto",
						height: "200px",
						overflowY: 'scroll', // 스크롤 가능하도록 설정
						'&::-webkit-scrollbar': {
							display: 'none' // Chrome, Safari, Opera용
						},
					}}>
						{cardList?.map((item, idx) => (
							<ImageListItem key={idx}>
								<img
									src={`${item.thumbnail}?w=200&fit=crop&auto=format`}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									position="top"
									title={item.title}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</>}
		</div>
	);
}

export default MainInfoCard;
