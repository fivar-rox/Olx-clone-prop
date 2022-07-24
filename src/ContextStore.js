import React from 'react'

export const authContext = React.createContext(null)
export function AuthContext ({children}) {
    const [user, setUser] = React.useState()
    return (
        <authContext.Provider value={{user, setUser}}>
            {children}
        </authContext.Provider>
    )
}

export const productContext = React.createContext(null)
export function ProductContext ({children}) {
    const [productInfo, setProductInfo] = React.useState([])
    return (
        <productContext.Provider value={{productInfo, setProductInfo}}>
            {children}
        </productContext.Provider>
    )
}

export const allProductsContext = React.createContext(null)
export function AllProductsContext ({children}) {
    const [allProducts, setAllProducts] = React.useState([])
    return (
        <allProductsContext.Provider value={{allProducts, setAllProducts}}>
            {children}
        </allProductsContext.Provider>
    )
}