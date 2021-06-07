import React from 'react';
import styles from './form.module.css'

const Form = (props) => {

	return(
		<form className={styles.body}>
			<input type="text" className={styles.input} value="test"/>
			<input type="text" className={styles.input} value="test"/>
			<select name="" id="" className={styles.select} value="light">
				<option value="light" className={styles.light}>Light</option>
				<option value="dark" className={styles.dark}>Dark</option>
				<option value="colorful" className={styles.colorful}>Colorful</option>
			</select>
			<input type="text" className={styles.input} value="test"/>
			<input type="text" className={styles.input} value="test"/>
			<textarea name="message" id="message" className={styles.textarea}></textarea>
			
			{/* <div className={styles.fileInput}> */}
				<input type="text" className={styles.fileInput} value="test"/>
				<button className={styles.button}>test</button>
			{/* </div> */}
		</form>
	)
};

export default Form;