import React from 'react';
import styles from './formList.module.css'
import Form from './../form/form';

const FormList = ({dbService}) => {

	return <div className={styles.body}>
		<h1 className={styles.h1}>Card Maker</h1>

		<Form dbService={dbService}/>

	</div>;
}
	


export default FormList;