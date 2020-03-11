import React from 'react'
import classNames from 'classnames'

import "./FormHeader.scss";

const FormHeader = (props) => {
    const _content = {
        'sign-in': 'Sign in',
        'welcome': 'Welcome',
        'create-account' : 'Create account'
    },
    classList = classNames('row', props.classes || props.screenType);

    return (
       <div className={classList}>
	        <div className="col-xs-12">
	                { props.backIcon &&
		                <div className="pull-left passwordBack" onClick={props.backHandler} >
		                    <i  className='fa fa-chevron-left' />
		                </div>
		            }
	                <span className="">{_content[props.screenType]}</span>
	        </div>
	    </div>
    )
}

export default FormHeader;