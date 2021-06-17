import React from 'react';
import styles from './form.module.css'

const Form = ({dbService}) => {

	const insertDBTest=()=>{
		let user = {
			uid: 1,
			name: "chanwoong",
			email: "mcw0219@gmail.com",
			position: "Assistant",
			company: "WoongCompany",
			message: "Push the evelope",
			profile: "/resource/img/chanwoong.jpg",
			theme: "colorful"
		};
debugger;
		dbService.dbUpdate(user);
	}

	return(
		<form className={styles.body}>
			<input type="text" className={styles.input} defaultValue="test"/>
			<input type="text" className={styles.input} defaultValue="test"/>
			<select name="" id="" className={styles.select} defaultValue="light">
				<option value="light" className={styles.light}>Light</option>
				<option value="dark" className={styles.dark}>Dark</option>
				<option value="colorful" className={styles.colorful}>Colorful</option>
			</select>
			<input type="text" className={styles.input} defaultValue="test"/>
			<input type="text" className={styles.input} defaultValue="test"/>
			<textarea name="message" id="message" className={styles.textarea} rows="4"></textarea>
			
			{/* <div className={styles.fileInput}> */}
				<input type="text" className={styles.fileInput} defaultValue="test"/>
				<button className={styles.button} onClick={insertDBTest}>test</button>
			{/* </div> */}
		</form>
	)
};

export default Form;