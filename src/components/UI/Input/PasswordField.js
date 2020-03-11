import React, { useState } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'

import TextField from './TextField'

import "./TextField.scss";

const propTypes = {
    /**
    * Specifies input element id
    */
    id: PropTypes.string,
    /**
    * Specifies input element's value
    */
    value: PropTypes.string,
    /**
    * Specifies input element's default value
    */
    // defaultValue: PropTypes.string,
    /**
    * Specifies placeholder string
    */
    placeholder: PropTypes.string,
    /**
    * Specifies label of the textfield 
    */
    label: PropTypes.string,
    /**
    * Specifies custom class to be applied on the label
    */
    labelClass: PropTypes.string,
    /**
    * Specifies custom classes to be applied on the component's container
    */
    containerClass: PropTypes.string,
    /**
    * Specifies custom classes to be applied on the input
    */
    inputclass: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    /**
    * Specifies boolean property to render large textfield 
    *  @default (false)
    */
    large: PropTypes.bool,
    /**
    * Specifies boolean property to disable/enable the textfield
    * @default (false)
    */
    disabled: PropTypes.bool,
    /**
    * Specifies boolean property yo show error on the textfield
    * @default (false)
    */
    error: PropTypes.bool,
    /**
    * Specifies the error message to be displayed
    */
    errorMessage: PropTypes.string,
    /**
    * Specifies boolean property yo show warning on the textfield
    * @default (false)
    */
    warning: PropTypes.bool,
    /**
    * Specifies warning message to be displayed
    */
    warningMessage: PropTypes.string,
    /**
    * Specifies warning message to be displayed
    */
    onChange: PropTypes.func,
    /**
    * Specifies the configuration object for the icons to be displayed on the left side of input-text field
    * Predecorators does not support the action handler or and event binding.
    * @type (
    *           {
    *               icon : '',
    *           }
    *       )
    */
    predecorator: PropTypes.object,
    /**
    * Specifies the configuration object for the icons to be displayed on the right side of input-text field
    * @type (
    *           {
    *               icon : '',
    *               action : ()=>{}
    *           }
    *       )
    */
    showClearField: PropTypes.bool
}

const defaultProps = {
    id: '',
    value: '',
    // defaultValue: '',
    placeholder: '',
    label: '',
    labelClass: '',
    containerClass: '',
    inputclass: '',
    large: false,
    disabled: false,
    error: false,
    errorMessage: '',
    warning: false,
    warningMessage: '',
    onChange: () => { }
}

const PasswordField = ({ showPassword, ...props }) => {

    let [passwordState, passwordSetState] = useState({
        type: 'password'
    })

    const togglePassword = (params) => {
        passwordSetState({
            type: (passwordState.type === 'password' ? 'text' : 'password')
        })
    }

    return (
            <TextField
                type={passwordState.type}
                {...props}
                postdecorator={(showPassword && {
                    icon: (passwordState.type === 'password' ? 'fa-eye' : 'fa-eye-slash'),
                    action: togglePassword.bind(this)
                })}
            />
    )
}
export default PasswordField;
