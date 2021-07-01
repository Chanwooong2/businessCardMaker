import React, { useRef } from 'react';
import styles from './imageFileInput.module.css'

const ImageFileInput = ({ imageUploader, profile, onFileChange }) => {
	const inputRef = useRef();
	const onBtnClick =(event) =>{
		event.preventDefault();
		inputRef.current.click();
	}

	const onChange = async (event) =>{
		const uploaded = await imageUploader.upload(event.target.files[0]);

		console.log(uploaded);
		onFileChange({
			name: uploaded.original_filename,
			url: uploaded.url
		});
	}

	return <div className={styles.contatiner}>
				<input 
					ref={inputRef}
					className={styles.input}
					type="file" 
					accept="image/*" 
					name={profile}
					onChange={onChange}
				/>
				<button className={styles.button} onClick={onBtnClick}>
					{profile || 'No File'}
				</button>

			</div>
}
	

export default ImageFileInput;