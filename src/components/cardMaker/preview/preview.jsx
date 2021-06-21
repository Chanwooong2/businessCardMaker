import React from 'react';
import styles from './preview.module.css';

const Preview = ({card}) => {

	return (
		<div className={`${styles.body} ${styles[card.theme]}`}>
			
			<img src={card.profile} alt={card.profile} className={styles.img} />

			<div className={styles.content}>
				<div className={styles.title}>{card.name}</div>
				<div className={styles.text}>{card.company}</div>
				<div className={styles.line}></div>
				<div className={styles.text}>{card.position}</div>
				<div className={styles.text}>{card.email}</div>
				<div className={styles.text}>{card.message}</div>
			</div>
		</div>

	)
};

export default Preview;