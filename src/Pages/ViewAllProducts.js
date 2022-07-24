import React from 'react'
import Header from '../Components/Header/Header'
import ViewAllProducts from '../Components/ViewAllProducts/ViewAllProducts'

export default class ViewAllProductsPage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <ViewAllProducts/>        
            </>
        )
    }
}