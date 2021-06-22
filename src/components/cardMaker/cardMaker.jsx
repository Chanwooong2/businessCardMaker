import React, { useEffect, useState } from 'react';
import FormList from './formList/formList';
import PreviewList from './previewList/previewList';
import styles from './cardMaker.module.css'
import { useHistory } from 'react-router-dom';

const CardMaker = ({authService, dbService}) => {
	const history = useHistory();

	const [cards, setCards] = useState([
		{
			uid: 1,
			name: "chanwoong1",
			email: "mcw0219@gmail.com",
			position: "Assistant1",
			company: "WoongCompany1",
			message: "Push the evelope1",
			profile: "/images/cat.png",
			theme: "light"
		},
		{
			uid: 2,
			name: "chanwoong2",
			email: "mcw0219@naver.com",
			position: "Assistant2",
			company: "WoongCompany2",
			message: "Push the evelope2",
			profile: "/images/woong2.jpg",
			theme: "black"
		},
		{
			uid: 3,
			name: "chanwoong3",
			email: "mcw0219@gmail.com",
			position: "Assistant3",
			company: "WoongCompany3",
			message: "Push the evelope3",
			profile: "/images/woong.png",
			theme: "colorful"
		}
	]);

	const onLogout = () =>{
		authService.logout();
	};

	useEffect (()=> {
		authService.onAuthChange(user => {
			if(!user){
				history.push('/');
			}
		})
	});

	const addCard = (card) =>{
		let newCards = [...cards, card];
		setCards(newCards);
	}

	const deleteCard = (card) => {
		let newCards = [...cards];
		setCards(newCards.filter(item => item.uid != card.uid));
	}

	return <>

		<div className={styles.header}>
			<img src="/images/logo.png" alt="logo" className={styles.logo} />
			<div>Business Card Maker</div>
		</div>

		<div className={styles.logout} onClick={onLogout}>Logout</div>

		<section className={styles.body}>
			<FormList 
				cards={cards}
				addCard={addCard}
				deleteCard={deleteCard}/>

			<div className={styles.line}></div>

			<PreviewList 
				cards={cards}/>
		</section>

		
	</>	
}

export default CardMaker;