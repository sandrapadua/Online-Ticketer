import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

class SignupPage extends PureComponent {
	handleSubmit = (data) => {
		console.log('signup request  to action')
		this.props.postSignup(data.email, data.password)
	}

	render() {
		console.log("signup page props" ,this.props.signUp)
		if (this.props.signUp.success) return (
			<Redirect to="/login" />
		)

		return (
			<div>
				<h3>Sign up</h3>

				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signUp.error }</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signUp: state.signUp
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
