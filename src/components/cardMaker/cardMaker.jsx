import React, { useEffect } from 'react';
import FormList from './formList/formList';
import PreviewList from './previewList/previewList';
import styles from './cardMaker.module.css'
import { useHistory } from 'react-router-dom';

const CardMaker = ({authService, dbService}) => {
	const history = useHistory();

	const onLogout = () =>{
		authService.logout();
	}

	useEffect (()=> {
		authService.onAuthChange(user => {
			if(!user){
				history.push('/');
			}
		})
	})

	return <>

		<div className={styles.header}>
			<img src="/images/logo.png" alt="logo" className={styles.logo} />
			<div>Business Card Maker</div>
		</div>

		<div className={styles.logout} onClick={onLogout}>Logout</div>

		<section className={styles.body}>
			<FormList dbService={dbService}/>
			<div className={styles.line}></div>
			<PreviewList />
		</section>

		
	</>	
}

export default CardMaker;