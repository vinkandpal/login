import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';
import InlineError from '../InlineError/InlineError';

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
    valid: PropTypes.bool,

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
    postdecorator: PropTypes.object,
    /**
    * Specifies boolean value to show the X to show the clear field.
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
    valid: false,
    onChange: () => { }
}

const TextField = ({
    label,
    labelClass,
    inputclass,
    containerClass,
    value,
    // defaultValue,
    type,
    large,
    showPassword,
    showClearField,
    error,
    errorMessage,
    warning,
    warningMessage,
    predecorator,
    postdecorator,
    id,
    valid,
    onChange,
    ...props }) => {
    let validClass = props.valid ? 'populated' : '';
    let _cnrClass = classNames(
       'custom-form',
        containerClass,
        large && 'tlarge',
        error && 'error',
        !error && warning && 'warning'
 )

    let _inputClass = classNames(
        'tfield-input',
        validClass,
        error && 'error',
        'form-control customInput',
        typeof inputclass === 'string' ? inputclass : inputclass.join(' ')
    )

    let _labelClass = classNames(
        'tfield-label',
        labelClass
    )

    let _decoClass = classNames('fas', postdecorator && postdecorator.icon)
    let message;
    if (error) {
        message = errorMessage
    } else if (warning) {
        message = warningMessage
    } else {
        message = ''
    }

    let [valueState, valueSetState] = useState({
        value: value ? value : ''
    })


    const updateTextField = (e) => {
       valueSetState({
            value: e.target.value
        });
        onChange(e, e.target.id);
        //props.handleInputChange(e)
    }

    useEffect((value) => {
        valueSetState({ "value": value })
    }, [value]);

    const restrictPasswordCopyPaste = function (e) {
        e.preventDefault();
    };

    const { allowCopyPaste, ...restProps } = props;
    let copyPasteProps = null;
    if (!allowCopyPaste) {
        copyPasteProps = {
            onCut: restrictPasswordCopyPaste.bind(this),
            onCopy: restrictPasswordCopyPaste.bind(this),
            onPaste: restrictPasswordCopyPaste.bind(this)
        }
    }


    return (
        <div className={_cnrClass}>
            
            <input                    
                    className={_inputClass}
                    id={id}
                    type={type ? type : 'text'}
                    value={valueState.value ? valueState.value : value}
                    onChange={updateTextField.bind(this)}
                    {...restProps}
                    {...copyPasteProps}
                    autoComplete="off"
                />
                {
                    (postdecorator && postdecorator.icon) &&
                    <span className="post-decorator">
                        <a onClick={postdecorator.action}>
                            <i className={_decoClass} />
                        </a>
                    </span>
                }
                <label className={_labelClass} htmlFor={id}>{label}</label>
                {
                    message &&
                    <InlineError message={message} />
                }
        </div>
    )
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;