import React from 'react';
import { AuthContext, ProductContext, AllProductsContext } from './ContextStore';
import Routes from './Routes';

function App() {
  return (
    <>
      <AuthContext>
        <AllProductsContext>
          <ProductContext>
            <Routes />
          </ProductContext>
        </AllProductsContext>
      </AuthContext>
    </>
  )
}

export default App;
