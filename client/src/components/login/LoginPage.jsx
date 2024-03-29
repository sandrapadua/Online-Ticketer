import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'

class LoginPage extends PureComponent {
    handleSubmit = (data) => {
        console.log("submit of login page")
		this.props.login(data.email, data.password)
    }
    
    render() {

        console.log("PROPS IN LOGIN PAGE",this.props)
		if (this.props.currentUser) return (
			<Redirect to="/" />
        )


		return (
			<div>
				<h1>Login</h1>

				<LoginForm onSubmit={this.handleSubmit} />
				{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
				</div>
		)
    }
}

    const mapStateToProps = function (state) {
        console.log('ERROR',state.login.error)
        return {
            currentUser: state.currentUser,
            error: state.login.error  
        }
    }

    export default connect(mapStateToProps, {login})(LoginPage)
