import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import "./Toast.scss";
 
const Toast = (props) => {
    const _classList = classNames(props.classes, 'text-center'),
    	  _content = {
    	  	'signin-success' : 'Account created successfully'
    	  };

    const [ toastContent, setToastContent ] = useState(_content[props.content]);

    useEffect(()=>{
        let toastTimer = setTimeout(()=>{
                  setToastContent('');
            }, 5000);
        return function(){ clearTimeout(toastTimer); }
    }, []);

    return (
        <>
        {
            toastContent && 
            <div className={_classList}>
                {toastContent}
            </div>
        }
        </>
    )
}

export default Toast;