import React from 'react';
import styles from './form.module.css'

const Form = ({card, deleteCard, updateCard, FileInput}) => {
	const  onFileChange =(file)=>{
		console.log("chan" + file);
		updateCard({
			...card, 
			profile: file.name,
			profileUrl: file.url,
		})
	}

	const onChange = event =>{
		if(event.currentTarget == null){
			return;
		}
		event.preventDefault();
		updateCard({
			...card,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	}

	const onDeleteCard =(event)=>{
		event.preventDefault();
		deleteCard(card);
	}
	
	return	(
		<form className={styles.body}>
			<input type="text" name="name" className={styles.input} defaultValue={card.name} onChange={onChange}/>
			<input type="text" name="company" className={styles.input} defaultValue={card.company} onChange={onChange}/>
			<select id="" name="theme" className={styles.select} defaultValue={card.theme} onChange={onChange}>
				<option value="light" className={styles.light}>Light</option>
				<option value="black" className={styles.black}>Black</option>
				<option value="colorful" className={styles.colorful}>Colorful</option>
			</select>
			<input type="text" name="position" className={styles.input} defaultValue={card.position} onChange={onChange}/>
			<input type="text" name="email" className={styles.input} defaultValue={card.email} onChange={onChange}/>
			<textarea name="message"id="message" defaultValue={card.message} onChange={onChange} className={styles.textarea} rows="4"></textarea>
			
			<div className={styles.fileInput}>
				<FileInput onFileChange={onFileChange} profile={card.profile}/>
				{/* <input type="text" name="profile" className={styles.fileInput} defaultValue={card.profile} onChange={onChange}/> */}
			</div>
			<button className={styles.button} onClick={onDeleteCard}>Delete</button>
		</form>
	)
	
};

export default Form;