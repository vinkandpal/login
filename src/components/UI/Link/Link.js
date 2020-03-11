import React from 'react'
import classNames from 'classnames'

import "./Link.scss";

const Link = (props) => {
    return (
        <a className={props.classes} onClick={props.clickHandler} href="#">
            {props.value}
        </a>
    )
}

export default Link;