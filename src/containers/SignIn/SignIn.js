import React from 'react';

import UserName from './UserName/UserName';
import LinkNav from '../../components/LinkNav/LinkNav';

const SignIn = ( props ) => {
    let navigate = props.navigate;
    const createAccountHandler = (e)=>{
        e.preventDefault();
        navigate('createAccount');
    };

    return (
        <div className="signin-wrap">
            <UserName {...props} />
            <LinkNav preLinkContent='signin-footer' 
                    linkContent='signin-flink' 
                    clickHandler={createAccountHandler} 
            />
        </div>
    );
};

export default SignIn;