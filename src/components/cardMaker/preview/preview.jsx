import React from 'react';
import styles from './preview.module.css';

const Preview = (props) => {
	return (
		<div className={`${styles.body} ${styles.light}`}>
			
			<img src="/images/cat.png" alt="" className={styles.img} />

			<div className={styles.content}>
				<div className={styles.title}>Chanwoong</div>
				<div className={styles.text}>Company</div>
				<div className={styles.line}></div>
				<div className={styles.text}>Software engineer</div>
				<div className={styles.text}>mcw0219@gmail.com</div>
				<div className={styles.text}>Push the envelope</div>
			</div>


		</div>

	)
};

export default Preview;