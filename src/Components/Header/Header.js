import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Firebase } from '../../firebase/config'
import { authContext, productContext, allProductsContext } from '../../ContextStore'
import './Header.css'
import OlxLogo from '../../Common/OlxLogo'
import SearchIcon from '../../Common/SearchIcon'
import Arrow from '../../Common/Arrow'
import SellButton from '../../Common/SellButton'
import SellButtonPlus from '../../Common/SellButtonPlus'
import Search from '../Search/Search'

export default function Header() {
  const { allProducts } = React.useContext(allProductsContext)
  const { setProductInfo } = React.useContext(productContext)
  const history = useHistory()
  const [filteredData, setFilteredData] = React.useState([])
  const [wordEntered, setWordEntered] = React.useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = allProducts.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === "") setFilteredData([])
    else setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  const handleSelectedSearch = (value) => {
    setProductInfo(value)
    history.push("/view")
  }

  const handleEmptyClick = () => alert("No items found.., please search by product name")

  const { user } = React.useContext(authContext);
  
  const logoutHandler = () => Firebase.auth().signOut().then(() => history.push("/login"))

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <input type="text" 
          placeholder="Search specific product..."
          value={wordEntered}
          onChange={handleFilter}
        />
        
          { filteredData.length === 0 ? 
            <div onClick={handleEmptyClick}> <SearchIcon /> </div>
            : 
            <div id="clearBtn"  onClick={clearInput} > <Arrow></Arrow></div>
          }

          { filteredData.length !== 0 ?
            <div className="dataResult-header">
              { filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <div key={key} className="dataItem-header" onClick={() => handleSelectedSearch(value)}>
                      <p>{value.name} </p>
                    </div>
                  )
                })
              }
            </div>
            : null
          }   
        </div>

        <div className="productSearch"><Search /></div>
        <div className="language"><span> ENGLISH </span><Arrow></Arrow></div>
        <div className="loginPage">
          { user ? user.displayName : <Link to="/login"> <span>Login</span> </Link> }
          <hr />
        </div>
        { user ? <span onClick={logoutHandler} className="logout-span"> Logout </span> : null }
        
        <Link to="/create">
          {" "}
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
