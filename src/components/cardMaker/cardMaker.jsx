import React, { useEffect, useState } from 'react';
import FormList from './formList/formList';
import PreviewList from './previewList/previewList';
import styles from './cardMaker.module.css'
import { useHistory } from 'react-router-dom';

const CardMaker = ({authService, cardRepository}) => {
	const history = useHistory();
	const historyState = history?.location?.state;
	
	const [userId, setUserId] = useState(historyState && historyState.id)
	const [cards, setCards] = useState({});


	const onLogout = () =>{
		authService.logout();
	};

	useEffect (()=> {
		authService.onAuthChange(user => {
			if(user){
				setUserId(user.uid);
			} else{
				history.push('/');
			}
		})
	});
	useEffect (()=> {
		if(!userId){
			return;
		}
		const stopSync = cardRepository.syncCards(userId, cards => {
			setCards(cards);
		})
		return () => { stopSync(); }
	}, [userId]);

	

	const addCard = (card) =>{
		setCards(cards => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		  });

		cardRepository.saveCard(userId, card);
	}

	const deleteCard = (card) => {
		setCards(cards => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		  });
		cardRepository.deleteCard(userId, card);
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
				updateCard={addCard}
				deleteCard={deleteCard}/>

			<div className={styles.line}></div>

			<PreviewList 
				cards={cards}/>
		</section>

		
	</>	
}

export default CardMaker;