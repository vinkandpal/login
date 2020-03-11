import React from 'react';
import classNames from 'classnames';

import './LinkNav.scss';
import Link from '../UI/Link/Link'

const LinkNav = ( props ) => {
    let _content = {
            'signin-footer': 'New to Autodesk? ',
            'create-acc-footer': 'Already have an account? '
         },
        _linkContent = {
            'signin-flink': 'Create account',
            'create-acc-flink': 'Sign in' 
        },
        __classList = classNames('row', props.classes);
    return (
        <div className="navigation-wrap">
            <div className={__classList}>
                <div className="col-xs-12 text-center navigation-wrap__content">
                    {_content[props.preLinkContent]} 
                    <Link clickHandler={props.clickHandler} 
                        value={_linkContent[props.linkContent]} 
                        classes='navigation-wrap__link' />
                </div>
            </div>
        </div>
    );
};

export default LinkNav;