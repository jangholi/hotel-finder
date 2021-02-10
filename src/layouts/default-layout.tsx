import React from 'react';
import Header from './header/Header';

interface Props {
    children: JSX.Element
}

let DefaultLayout = ({children}: Props) => {
   return(
       <>
            <Header />
            <main>
                {children}
            </main>
       </>
   )
}

export default DefaultLayout