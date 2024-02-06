import React from 'react';
import './css/ctabutton.css';

const CtaButton = ({ text = 'Get Started' }) => {
	return <button className="ctabutton">{text}</button>;
};

export default CtaButton;
