import React from 'react';
import CreateProduct from '../Components/CreateProduct/CreateProduct';
import Login from '../Components/Login/Login';
import { authContext } from '../ContextStore';

export default function CreateProductPage() {
    const { user } = React.useContext(authContext);

    return (
        <React.Fragment>
            { user ? <CreateProduct/> 
            : 
            <>          
                { alert("You must login first") } 
                <Login/>
            </>
            }
        </React.Fragment>
    )  
}

