import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from "@mui/material/CircularProgress";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import styles from "./@card.module.css";

const MainInfoCard = ({cardList}) => {
	return (
		<div className={styles.main_detail_layer}>
			{cardList.length === 0 ?
				<CircularProgress/>
				:
				<>
					<ImageList
						className={styles.main_image_list}>
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
