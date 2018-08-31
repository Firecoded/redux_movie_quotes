import React, { Component } from 'react';
import auth from '../hoc/auth';

class MovieQuotes extends Component {
	render() {
		console.log('movieprops', this.props)
		return (
			<div>
				<h1 className = 'center'>Movies Quotes!</h1>
				<p className = 'center'>Life uh... finds a way</p>
			</div>
		);
	}
}

export default auth(MovieQuotes);
