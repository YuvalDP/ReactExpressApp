import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loader from './Loader';
import {connect} from 'react-redux';
import { users_auth } from '../actions/action_users';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log('Logging.',this.props.users_auth(this.state));
        this.props.users_auth(this.state).then(() => {
            console.log('submit for auth..', this.props);
            if(this.props.login_user_detail){
                this.props.history.push('/app/dashboard');
            }else{
                alert('Invalid credentials.');
            }

        });


    }

    handleOnChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="logincontent">
                    <div>
                        <Loader/>
                    </div>
                    <div className="loginheading">
                        LOGIN
                    </div>
                    <label htmlFor="txtUserName">
                        Email:</label>
                    <input type="text" placeholder="Enter email" id="txtUserName" name="txtUserName"
                           onChange={this.handleOnChange.bind(this)} required/>
                    <label htmlFor="txtPassword">
                        Password:</label>
                    <input type="password" id="txtPassword" placeholder="Enter password" name="txtPassword"
                           onChange={this.handleOnChange.bind(this)} required/>
                    <div className="loginremember">

                        <Link to="/app/registration" className="loginbtn"> Sign Up </Link>
                        <input type="submit" className="loginbtn" value="Sign In" id="btnSubmit"/>

                    </div>
                </div>

            </form>
        );

    }


}

function mapStateToProps(state) {
    return state.reducer_user;
}


export default connect(mapStateToProps, { users_auth })(Login);