import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Products from '../Components/Products/Products';
import Footer from '../Components/Footer/Footer';
import { Firebase } from '../firebase/config';
import { authContext } from '../ContextStore';

export default function Home() {
    const { setUser } = React.useContext(authContext)
    React.useEffect(() => Firebase.auth().onAuthStateChanged((user) => setUser(user)), [setUser])

    return (
        <>
            <Header/>
            <Banner/>
            <Products/>
            <Footer/>
        </>
    ) 
}

 
