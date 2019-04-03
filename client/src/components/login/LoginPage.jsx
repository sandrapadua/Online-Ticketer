import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'

class LoginPage extends PureComponent {
    handleSubmit = (data) => {
		this.props.login(data.email, data.password)
    }
    
    render() {
        console.log("CURRENT USER",this.props.currentUser)
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Login</h1>

				<LoginForm onSubmit={this.handleSubmit} />
				<p>{this.props.login.error}</p> 
				</div>
		)
    }
}

    const mapStateToProps = function (state) {
        return {
            currentUser: state.currentUser,
            // login: state.login.error  
        }
    }

    export default connect(mapStateToProps, {login})(LoginPage)
