import React, { useRef } from 'react';
import styles from './imageFileInput.module.css'

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
	const inputRef = useRef();
	const onBtnClick =(event) =>{
		event.preventDefault();
		inputRef.current.click();
	}

	const onChange =(event)=>{

		// 마무리 필요
		imageUploader(event.target.files[0])
		.then(console.log());
	}

	return <div className={styles.contatiner}>
				<input 
					ref={inputRef}
					className={styles.input}
					type="file" 
					accept="image/*" 
					name="file" 
					onChange={onChange}
				/>
				<button className={styles.button} onClick={onBtnClick}>
					{name || 'No File'}
				</button>

			</div>
}
	

export default ImageFileInput;