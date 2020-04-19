import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends Component {
	// static contextType = LanguageContext;

	render() {
		return (
			<LanguageContext.Consumer>
				{(value) => (
					<button className='ui button primary'>
						{value.language === 'english' ? 'Submit' : 'Voorleggen'}
					</button>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default Button;
