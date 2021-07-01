import React, { useRef, useState } from 'react';
import styles from './form.module.css'

const AddForm = ({addCard, updateCard, FileInput}) => {
	const formRef = useRef();
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const positionRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	const [file, setFile]= useState({profile: null, profileUrl: null});

	const onFileChange = file =>{
		setFile({
			profile:file.name,
			profileUrl:file.url
		});
	}

	const onAddCard =(event)=>{
		event.preventDefault();
		const card = {
			uid: Date.now(),
			name : nameRef.current.value || '',
			company : companyRef.current.value || '',
			theme : themeRef.current.value || '',
			position : positionRef.current.value || '',
			email : emailRef.current.value || '',
			message : messageRef.current.value || '',
			profile : file.profile || '',
			profileUrl : file.profileUrl || '',
		}
		formRef.current.reset();

		setFile({
			profile:null,
			profileUrl:null
		});

		addCard(card);
	}

	return	(
		<form ref={formRef} className={styles.body}>
			<input ref={nameRef} name="name" type="text" className={styles.input} placeholder="Name"/>
			<input ref={companyRef} name="company" type="text" className={styles.input} placeholder="Company"/>
			<select ref={themeRef} name="theme" id="" className={styles.select} placeholder="light">
				<option value="light" className={styles.light}>Light</option>
				<option value="black" className={styles.black}>Black</option>
				<option value="colorful" className={styles.colorful}>Colorful</option>
			</select>
			<input ref={positionRef} name="position" type="text" className={styles.input} placeholder="Position"/>
			<input ref={emailRef} name="email" type="text" className={styles.input} placeholder="Email"/>
			<textarea ref={messageRef} name="message" id="message" placeholder="Your message" className={styles.textarea} rows="4"></textarea>
			
			<div className={styles.fileInput}>
				<FileInput profile={file.profile} onFileChange={onFileChange}/>
			</div>
			<button name="Add" className={styles.button} onClick={onAddCard}>Add</button>
		</form>
	)
};

export default AddForm;