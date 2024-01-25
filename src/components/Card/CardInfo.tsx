import React, {useState, useEffect} from 'react';
import Link from "next/link";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import styles from "./@card.module.css";
import favorite from "../../../mockups/prototypes/favoriteTable.json";

const CardInfo = ({cardList, text}) => {
	const [liked, setLiked] = useState(new Array(cardList.length).fill(false));
	const yourAuthToken = localStorage.getItem("token"); // 여기에 실제 토큰을 입력하거나 토큰을 가져오는 로직을 추가해야 합니다.
	const userId = localStorage.getItem("userId");
	
	useEffect(() => {
		fetch(`/api/favorites/${userId}`, {
			headers: {
				'Authorization': `Bearer ${yourAuthToken}`, // 인증 토큰 포함
			}
		})
			.then(response => {
				if (favorite.length !== 0) {
					return favorite;
				}
				if (!response.ok) {
					throw new Error('서버에서 찜한 아이템 목록을 불러오는데 문제가 발생했습니다.');
				}
				return response.json();
			})
			.then(data => {
				// 서버에서 받은 데이터를 사용하여 liked 상태를 업데이트합니다.
				const updatedLikes = cardList.map(item => data[0]?.favoriteItems.includes(item.id) ?? false);
				setLiked(updatedLikes);
			})
			.catch(error => {
				console.error('찜하기 목록 로딩 오류:', error);
				// 사용자에게 오류 메시지 표시
			});
	}, [userId, yourAuthToken, cardList]);
	
	// 찜하기 버튼 클릭 핸들러
	const handleLike = (item, event) => {
		event.stopPropagation(); // 링크 이동 방지
		event.preventDefault(); // 기본 이벤트 방지
		
		const newLiked = [...liked]; // 현재 찜하기 상태를 복사
		newLiked[item.id] = !newLiked[item.id]; // 클릭된 아이템의 찜하기 상태를 토글
		setLiked(newLiked); // 찜하기 상태 업데이트
		
		// 백엔드에 찜하기 상태를 업데이트하는 요청을 보냅니다.
		fetch('/api/favorites', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${yourAuthToken}`, // 인증 토큰 포함
			},
			body: JSON.stringify({userId, itemId: item.id, liked: newLiked[item.id]})
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('찜하기 상태를 업데이트하는데 문제가 발생했습니다.');
				}
			})
			.catch(error => {
				console.error('찜하기 업데이트 오류:', error);
				// 사용자에게 오류 메시지 표시
			});
	};
	
	return (
		<div className={styles.card_list}>
			{cardList?.length === 0 ?
				// 스켈레톤 처리 해보기
				<div>DATA IS LOADING NOW!</div>
				:
				<ImageList className={styles.image_list}>
					<ImageListItem key="Subheader" cols={2}>
						<ListSubheader component="div">{text}</ListSubheader>
					</ImageListItem>
					{cardList?.map((item) => (
						<Link href={item.link} passHref target="_blank" rel="noopener noreferrer">
							<ImageListItem key={item.id}
							               className={styles.image_item}
							>
								<img
									src={item.image}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									position="top"
									title={item.title}
									actionIcon={
										<IconButton
											className={styles.image_icon}
											aria-label={`info about ${item.title}`}
											onClick={(event) => handleLike(item, event)} // 찜하기 버튼 클릭 이벤트
										>
											{liked[item.id] ? '♥' : '♡'} {/* 찜한 상태에 따라 아이콘 변경 */}
										</IconButton>
									}
								/>
							</ImageListItem>
						</Link>
					))}
				</ImageList>
			}
		
		</div>
	);
}

export default CardInfo;
