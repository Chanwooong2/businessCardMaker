import React from 'react';
import styles from './formList.module.css'
import Form from './../form/form';
import AddForm from './../form/addForm';

const FormList = ({cards, addCard, updateCard, deleteCard, FileInput}) => {

	return <div className={styles.body}>
			<h1 className={styles.h1}>Card Maker</h1>
			{
				Object.keys(cards).map(key => {
					return <Form 
						key={key}
						card={cards[key]}
						updateCard={updateCard}
						deleteCard={deleteCard}
						FileInput={FileInput}/>
				})
			}
			<AddForm 
				addCard={addCard}
				FileInput={FileInput}/>
		</div>;
}
	


export default FormList;