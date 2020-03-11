import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from './../Spinner/Spinner';
import "./Button.scss";

const propTypes = {
    /**
     * Specifies Custom CSS classes to be applied on top of component CSS
     */
    classes: PropTypes.string,

    /**
     * Specifies size of Button as small/medium/large
     * @type ('sm'|'lg')
     * @default ('md')
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),

    /**
     * Specifies variant of Button as primary/secondary/tertiary/danger/warning'
     * @type ('primary' | 'secondary' | 'tertiary' | 'danger' | 'warning')
     * @default ('primary')
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning']),
    
    
    /**
     * Specifies as true if button needs to be rendered full width
     * @default (false)
     */
    fullWidth: PropTypes.bool,    

    /**
     * Specifies as true if dark contrast is needed
     * @default (false)
     */
    reversed: PropTypes.bool,
    
    /**
     * Specifies if button is disabled
     * @default (false)
     */
    disabled: PropTypes.bool,
    
    /**
     * Specified state for button as loading
     * @default (false)
     */
    isLoading: PropTypes.bool,

    /**
     * Specifies OnClick Handler
     */
    onClick: PropTypes.func,
}

const defaultProps = {
    size: 'md',
    variant: 'primary',
    fullWidth: false,
    disabled: false,
    isLoading: false   
};

const btnClassprefix = 'btn';

const Button = (props) => {
    let {
        label,
        size,
        variant,
        reversed,
        fullWidth,
        classes,
        disabled,
        isLoading,
        onClick,
        ...attributes
    } = props;

    const classList = classNames(
        classes,
        `${btnClassprefix}-base`,
        size && `${btnClassprefix}-${size}`,
        variant && `${btnClassprefix}-${variant}`,
        variant && reversed && `${btnClassprefix}-${variant}-reversed`,
        fullWidth && `${btnClassprefix}-full`,
    );

    return (
        <button
            {...attributes}
            type="button"
            disabled={disabled}
            className={classList}
            onClick={onClick}>
            {isLoading ? 
                <Spinner size="sm"/> :
                label}
        </button>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;