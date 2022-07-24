import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CreateProduct from './Pages/CreateProduct'
import ViewProduct from './Pages/ViewProduct'
import ViewAllProducts from './Pages/ViewAllProducts'

export default class Routes extends React.Component {
    render() {
        return (
        <BrowserRouter>
            <Route exact path="/"><Home/></Route>
            <Route path="/signup"><Signup/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/create"><CreateProduct/></Route>
            <Route path="/view"><ViewProduct/></Route>
            <Route path="/viewmore"><ViewAllProducts/></Route>
        </BrowserRouter>
        )
    }
}
