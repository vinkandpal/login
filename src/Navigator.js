import React from 'react'

const SignIn = React.lazy(() => import('./containers/SignIn/SignIn'))
const CreateAccount = React.lazy(() => import('./containers/CreateAccount/CreateAccount'))
const PasswordComp = React.lazy(() => import('./containers/SignIn/Password/Password'))

const Navigator = ({ routeName, ...props}) => {

    let _routes = {
        'signIn': SignIn,
        'createAccount': CreateAccount,
        'Password' : PasswordComp
    }

    let Route = _routes[routeName]


    if(Route){
        return <Route {...props} />
    }

    return <div>404 Component not found</div>

}

export default Navigator