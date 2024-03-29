import React from 'react';
import './css/commoninput.css';

const CommonInput = ({ placeholderText = 'Input', value, onChange }) => {
	return (
		<input
			type="text"
			placeholder={placeholderText}
			value={value}
			onChange={onChange}
		/>
	);
};

export default CommonInput;
