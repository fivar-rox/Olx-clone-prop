import React from 'react'
import Header from '../Components/Header/Header'
import ViewProduct from '../Components/ViewProduct/ViewProduct'

export default class ViewProductPage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <ViewProduct/>        
            </>
        )
    }
}