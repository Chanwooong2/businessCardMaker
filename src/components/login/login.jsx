import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService}) => {
	const history = useHistory();
	const goToMaker = (uid) =>{
		history.push({
			pathname : '/cardMaker',
			state : { id : uid },
		});
	}

	const onLogin =(event)=>{
		authService	//
			.login(event.currentTarget.textContent)
			.then((data) => goToMaker(data.user.uid));
	}

	useEffect(()=>{
		authService
			.onAuthChange(user => {
				if(user != null){
					goToMaker(user.id);
				}
			})
	});

	return (
		<section className={styles.login}>
			<div className={styles.header}>
				<img src="/images/logo.png" alt="logo" className={styles.logo} />
				<div>Business Card Maker</div>
			</div>
			<div className={styles.body}>
				<div>Login</div>
				<div className={styles.btnBox}>
					<button className={styles.btn} onClick={onLogin}>Google</button>
					<button className={styles.btn} onClick={onLogin}>Github</button>
				</div>
			</div>
			<div className={styles.footer}>Made by Chanwooong2</div>
		</section>
	)
};

export default Login;