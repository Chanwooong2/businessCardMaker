import React from 'react';
import styles from './previewList.module.css'
import Preview from './../preview/preview';

const PreviewList = (props) => {
		
	return <div className={styles.body}>
		<h1 className={styles.h1}>Card Preview</h1>

		<Preview></Preview>

	</div>;
};

export default PreviewList;