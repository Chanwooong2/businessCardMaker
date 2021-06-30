import React, { useRef } from 'react';
import styles from './form.module.css'

const Form = ({card, addCard, deleteCard, updateCard, FileInput}) => {

	const formRef = useRef();
	const nameRef = useRef();
	const companyRef = useRef();
	const themeRef = useRef();
	const positionRef = useRef();
	const emailRef = useRef();
	const profileRef = useRef();
	const messageRef = useRef();

	const onAddCard =(event)=>{
		event.preventDefault();
		const card = {
			uid: Date.now(),
			name : nameRef.current.value || '',
			company : companyRef.current.value || '',
			theme : themeRef.current.value || '',
			position : positionRef.current.value || '',
			email : emailRef.current.value || '',
			profile : profileRef.current.value || '',
			message : messageRef.current.value || '',
		}

		addCard(card);
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
	
	if(card != null){
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
					<FileInput />
					{/* <input type="text" name="profile" className={styles.fileInput} defaultValue={card.profile} onChange={onChange}/> */}
				</div>
				<button className={styles.button} onClick={onDeleteCard}>Delete</button>
			</form>
		)
	}else if(card == null){
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
					<FileInput />
					{/* <input ref={profileRef} name="profile" type="text" className={styles.fileInput} placeholder="test"/> */}
				</div>
				<button name="Add" className={styles.button} onClick={onAddCard}>Add</button>
			</form>
		)
		
	}
	
};

export default Form;