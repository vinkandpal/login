import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './UserName.scss';
import Button from '../../../components/UI/Button/Button';
import Toast from '../../../components/UI/Toast/Toast';
import TextField from '../../../components/UI/Input/TextField'
import FormHeader from '../../../components/FormHeader/FormHeader';
import BaseService from '../../../app/services/BaseService';

import * as actions from '../../../store/actions/index';

const UserNameComp = ( {data, ...props} ) => {
    let btnStyle = { color: props.currentProvider },
        navigate = props.navigate,
        showToastMsg = data && data.accountCreated;

    const NextBtnHandler = ()=>{
        data.from = '';
        if(props.isAuthenticated.includes(props.userName)) {
            navigate('Password', {'Username':props.userName});
        } else {
            props.onUserAuth(props.userName);
        }
    };

    useEffect(()=>{
        if ( props.isAuthenticated.includes(props.userName) && !(data.from === 'pwd'|| data.from === 'createAcc')) {
            navigate('Password', {'Username': props.userName});
        }
    }, [ props.isAuthenticated ])

    const userNameHandler = (e)=>{
        let userName = e.target.value;
        props.onUserNameHandler(userName);
    };

    return (
        <>
            { showToastMsg && 
                <Toast content='signin-success' classes='signin-wrap__toast' />
            }
            <div className="signin-wrap__username-cont">
                <FormHeader screenType='sign-in' classes='signin-wrap__header' />
                <div className="row signin-wrap__username">
                    <div className="col-xs-12">
                            <TextField
                                label = {'Username'}
                                value={props.userName}
                                placeholder=''
                                inputclass = 'form-control'
                                id="userName"
                                aria-label="Email text field"
                                onChange={userNameHandler} 
                                autoFocus="autofocus" 
                                autoCorrect="off" 
                                autoCapitalize="off" 
                                data-val="true" 
                                data-val-required="Please enter an email" 
                                max-length="20"
                                tabIndex="1" 
                                valid={props.userName?true:false}
                                allowCopyPaste={true}
                                error={props.error}
                                errorMessage='The username is not recognized.'
                                />
                    </div>
                </div>
                <div className="row signin-wrap__next-btn">
                    <div className="col-xs-12">
                        <Button
                            style={btnStyle}
                            classes="btn btn-primary btn-lg btn-block"
                            size="md"
                            variant="primary"
                            fullWidth={true}
                            label={props.loading?'Verifying...':'Next'}
                            autoid="login-page-button-submit-button"
                            onClick={NextBtnHandler}
                            data-loading-text="Verifying..."
                            aria-label="Next button" 
                            id="verify_user_btn" 
                          ></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.users,
        userName: state.user.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUserAuth: (username) => dispatch( actions.auth(username) ),
        onUserNameHandler: (username) => dispatch( actions.setUsername(username))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(UserNameComp);