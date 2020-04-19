import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
	static contextType = LanguageContext;

	render() {
		return (
			<div className='ui field'>
				<label htmlFor='name'>
					{this.context.language === 'english' ? 'Name' : 'Naam'}
				</label>
				<input type='text' name='name' id='name' />
			</div>
		);
	}
}
 