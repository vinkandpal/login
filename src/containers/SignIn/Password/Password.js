import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import './Password.scss';
import PropTypes from "prop-types";
import PasswordField from '../../../components/UI/Input/PasswordField';
import Button from '../../../components/UI/Button/Button';
import FormHeader from '../../../components/FormHeader/FormHeader';
import BaseService from '../../../app/services/BaseService';

import * as actions from '../../../store/actions/index';

const PasswordComp = ( {data, ...props} ) => {
    const userPasswordHandler = (e)=>{
        let userPassword = e.target.value;
        props.onUserPasswordHandler(userPassword);
    };

    const submitHandler = (e)=>{
        e.preventDefault();
        props.onPasswordAuth(data.Username, props.userPassword);
    };

    const backHandler = ()=>{
        props.navigate('signIn', {from: 'pwd'});
    };

    useEffect(()=>{
        if (props.success) {
            alert('You are successfully logged in.')
        }
    }, [ props.success ])

    const userNameHandler = (e)=>{
        let userName = e.target.value;
        props.onUserNameHandler(userName);
    };
    
    return (
        <div className='welcome-wrap'>
            <FormHeader screenType='welcome' classes='welcome-wrap__header text-center' backIcon backHandler={backHandler} />
            <div className="welcome-wrap__user text-center">{data.Username}</div>
            <div className="row welcome-wrap__password">
                <div className="col-xs-12 password">
                    <PasswordField
                        label = {'Password'}
                        value={props.userPassword}
                        placeholder=''
                        inputclass = 'form-control'
                        id="password"
                        aria-label="Email text field"
                        onChange={userPasswordHandler} 
                        autoFocus="autofocus" 
                        autoCorrect="off" 
                        autoCapitalize="off" 
                        data-val="true" 
                        data-val-required="Please enter an email" 
                        max-length="20"
                        tabIndex="1" 
                        valid={props.userPassword?true:false}
                        showPassword={true} 
                        error={props.error}
                        errorMessage='The entered password is incorrect.'
                        />
                </div>
            </div>
            <div className="row welcome-wrap__sign-btn">
                <div className="col-xs-12">
                    <Button
                        classes="btn btn-primary btn-lg btn-block"
                        size="md"
                        variant="primary"
                        fullWidth={true}
                        label='Sign in'
                        autoid="login-page-button-submit-button"
                        onClick={submitHandler}
                        data-loading-text="Verifying..."
                        aria-label="Next button" 
                        id="verify_user_btn" 
                      ></Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        userPassword: state.password.password,
        success: state.auth.success
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPasswordAuth: (user, pwd) => dispatch( actions.authPwd(user, pwd) ),
        onUserPasswordHandler: (password) => dispatch( actions.setPassword(password))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(PasswordComp);