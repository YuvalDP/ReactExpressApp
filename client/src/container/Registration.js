import React, {Component} from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import { add_user } from '../actions/action_users';
import { connect } from 'react-redux';

class Registration extends Component {

    handleField(field) {

        const { meta : { error, touched } } = field;
        const ClassUsed =`form-control ${touched && error ? 'is-invalid':'is-valid'}`;
        return (
            <div className="form-group is-invalid">
                <input type={field.type}
                       className={ClassUsed} placeholder={field.label}
                       {...field.input}
                /> <div style={{color:'red'}}>{touched ? error :''} </div>

            </div>
        )

    }

    onSubmit(values) {
        console.log(values);
        this.props.add_user(values);
        reset('RegistrationForm');

    }

    render() {


        const {handleSubmit} = this.props;

        return (
            <center>
                <div style={{width: '30%'}}>
                    <div className="alert alert-info Center"><h1>Registration</h1></div>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            type="text"
                            name="firstname"
                            label="Enter firstname"
                            component={this.handleField}
                        />
                        <Field
                            type="text"
                            name="lastname"
                            label="Enter lastName"
                            component={this.handleField}
                        />
                        <Field
                            type="email"
                            name="email"
                            label="Enter email"
                            component={this.handleField}
                        />
                        <Field
                            type="date"
                            name="dob"
                            label="Enter DOB"
                            component={this.handleField}
                        />
                        <Field
                            type="password"
                            name="password"
                            label="Enter password"
                            component={this.handleField}
                        />
                        <Field
                            type="password"
                            name="cpassword"
                            label="Enter Confirm Password"
                            component={this.handleField}
                        />
                        <div className="form-group">
                            <button type="submit" value="submit" className="form-control btn btn-primary">submit
                            </button>
                        </div>
                    </form>
                </div>
            </center>
        );
    }

}

function validate(values) {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = "Required!";
    }
    if (!values.lastname) {
        errors.lastname = "Required!";
    }
    if (!values.email) {
        errors.email = "Required!";
    }

    if(!values.passwd){
        errors.passwd = "Required!";
    }

    if (!values.dob) {
        errors.dob = "Required!";
    }

    if (!values.cpassword) {
        errors.cpassword = "Required!";
    } else {
        if (values.cpassword !== values.password) {
            errors.cpassword = "Password mismatch";
        }
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'RegistrationForm'
})(
    connect(null,({add_user}))(Registration)
);