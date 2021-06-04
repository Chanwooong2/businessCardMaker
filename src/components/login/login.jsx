import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = (props) => {
	const history = useHistory();
	return (
		<section className={styles.login}>
			<div className={styles.header}>
				<img src="/images/logo.png" alt="logo" className={styles.logo} />
				<div>Business Card Maker</div>
			</div>
			<div className={styles.body}>
				<div>Login</div>
				<div className={styles.btnBox}>
					<button className={styles.btn} onClick={()=>{alert("github!");}}>GitHub</button>
					<button className={styles.btn} onClick={()=>{alert("google!");}}>Google</button>
				</div>
			</div>
			<div className={styles.footer}>Made by Chanwooong2</div>
		</section>
	)
};

export default Login;