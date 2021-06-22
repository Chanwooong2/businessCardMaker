import React from 'react';
import styles from './formList.module.css'
import Form from './../form/form';

const FormList = ({cards, addCard, deleteCard}) => {

	return <div className={styles.body}>
		<h1 className={styles.h1}>Card Maker</h1>
		{
			cards.map(card => {
				return <Form 
					key={card.uid}
					card={card}
					deleteCard={deleteCard}/>
			})
		}
		<Form 
			card={null}
			addCard={addCard}/>

	</div>;
}
	


export default FormList;