import React from 'react';
import styles from './form.module.css'

const Form = ({dbService, card}) => {

	const insertDBTest=()=>{
		let user = {
			uid: 1,
			name: "chanwoong2",
			email: "mcw0219@gmail.com",
			position: "Assistant",
			company: "WoongCompany",
			message: "Push the evelope",
			profile: "/resource/img/chanwoong.jpg",
			theme: "colorful"
		};

		dbService.dbUpdate(user);
	}

	if(card != null){
		return	(
			<form className={styles.body}>
				<input type="text" className={styles.input} defaultValue={card.name}/>
				<input type="text" className={styles.input} defaultValue={card.company}/>
				<select name="" id="" className={styles.select} defaultValue={card.theme}>
					<option value="light" className={styles.light}>Light</option>
					<option value="black" className={styles.black}>Black</option>
					<option value="colorful" className={styles.colorful}>Colorful</option>
				</select>
				<input type="text" className={styles.input} defaultValue={card.position}/>
				<input type="text" className={styles.input} defaultValue={card.email}/>
				<textarea name="message" id="message" defaultValue={card.message} className={styles.textarea} rows="4"></textarea>
				
				{/* <div className={styles.fileInput}> */}
					<input type="text" className={styles.fileInput} defaultValue={card.profile}/>
					<button className={styles.button} onClick={insertDBTest}>Delete</button>
				{/* </div> */}
			</form>
		)
	}else if(card == null){
		return	(
			<form className={styles.body}>
				<input type="text" className={styles.input} placeholder="Name"/>
				<input type="text" className={styles.input} placeholder="Company"/>
				<select name="" id="" className={styles.select} placeholder="light">
					<option value="light" className={styles.light}>Light</option>
					<option value="black" className={styles.black}>Black</option>
					<option value="colorful" className={styles.colorful}>Colorful</option>
				</select>
				<input type="text" className={styles.input} placeholder="Position"/>
				<input type="text" className={styles.input} placeholder="Email"/>
				<textarea name="message" id="message" placeholder="Your message" className={styles.textarea} rows="4"></textarea>
				
				{/* <div className={styles.fileInput}> */}
					<input type="text" className={styles.fileInput} placeholder="test"/>
					<button className={styles.button} onClick={insertDBTest}>Add</button>
				{/* </div> */}
			</form>
		)
		
	}
	
};

export default Form;