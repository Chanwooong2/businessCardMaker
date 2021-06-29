import React from 'react';
import styles from './formList.module.css'
import Form from './../form/form';

const FormList = ({cards, addCard, updateCard, deleteCard}) => {

	return <div className={styles.body}>
		<h1 className={styles.h1}>Card Maker</h1>
		{
			Object.keys(cards).map(key => {
				
				return <Form 
					key={key}
					card={cards[key]}
					updateCard={updateCard}
					deleteCard={deleteCard}/>
			})
		}
			<Form 
				card={null}
				addCard={addCard}/>
		</div>;
}
	


export default FormList;