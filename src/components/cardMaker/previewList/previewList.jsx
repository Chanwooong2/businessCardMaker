import React from 'react';
import styles from './previewList.module.css'
import Preview from './../preview/preview';

const PreviewList = ({cards}) => {
		
	return <div className={styles.body}>
		<h1 className={styles.h1}>Card Preview</h1>
		{
			Object.keys(cards).map(key => {
				
				return <Preview 
					key={key}
					card={cards[key]}/>
			})
		}

	</div>;
};

export default PreviewList;