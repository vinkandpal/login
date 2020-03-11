import React, { useState, Suspense } from 'react';

import classes from './Layout.scss';

import Navigator from '../../Navigator'
import Footer from '../../components/Footer/Footer';
import Spinner from "../../components/UI/Spinner/Spinner";

const Layout = (props) => { 
    const [routeName, setRouteName] = useState({routeName: props.route, data: {}});
    const  handleNavigatePress = (routeName, data) => {
        setRouteName(
          {routeName: routeName, data: data}
         );
      };
    return (
        <>
            <main className='main-wrapper'>
                <Suspense fallback={
                    <Spinner
                            id="largeSpinner"
                            name="someButtonName"
                            classes="aaa"
                            size="lg"
                          />
                    }>
                    <Navigator routeName={routeName.routeName} navigate={handleNavigatePress} data={routeName.data} />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default Layout;