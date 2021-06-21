import React from 'react';
import styles from './formList.module.css'
import Form from './../form/form';

const FormList = ({dbService, cards}) => {

	return <div className={styles.body}>
		<h1 className={styles.h1}>Card Maker</h1>
		{
			cards.map(card => {
				return <Form 
					key={card.uid}
					dbService={dbService}
					card={card}/>
			})
		}
		<Form 
			dbService={dbService}
			card={null}/>

	</div>;
}
	


export default FormList;