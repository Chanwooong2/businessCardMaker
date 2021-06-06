import React from 'react';
import FormList from './formList/formList';
import PreviewList from './previewList/previewList';
import styles from './cardMaker.module.css'

const CardMaker = (props) => {
	return <>

		<div className={styles.header}>
			<img src="/images/logo.png" alt="logo" className={styles.logo} />
			<div>Business Card Maker</div>
		</div>

		<section className={styles.body}>
			<FormList />
			<PreviewList />
		</section>

		
	</>	
}

export default CardMaker;