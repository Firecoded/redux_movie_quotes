import React, { Component } from 'react';
import auth from '../hoc/auth';
import {connect} from 'react-redux';
import {getMovieQuote} from '../actions';

class MovieQuotes extends Component {
	componentDidMount() {
		this.props.getMovieQuote();
	}
	render() {

		return (
			<div>
				<h1 className = 'center'>Movies Quotes!</h1>
				<h3 className = 'center'>{this.props.quote}</h3>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		quote: state.movie.quote
	}
}

export default connect(mapStateToProps, {getMovieQuote})(auth(MovieQuotes, '/sign-up'));
