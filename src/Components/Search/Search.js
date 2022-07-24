import React from 'react'
import { useHistory } from 'react-router'
import { productContext, allProductsContext } from '../../ContextStore'
import SearchIcon from '../../Common/SearchIcon'
import CloseIcon from '../../Common/CloseIcon/CloseIcon'
import './Search.css'

export default function Search() {
    const { allProducts , setAllProducts} = React.useContext(allProductsContext)
    const { setProductInfo } = React.useContext(productContext)
    const history = useHistory()
    
  const [filteredData, setFilteredData] = React.useState([])
  const [wordEntered, setWordEntered] = React.useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = allProducts.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.category.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') setFilteredData([])
    else setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  const handleSelectedSearch = (item) => {
    setProductInfo(item)
    history.push("/view")
  }

  const handleSearchClick = () => {
    if(filteredData.length === 0) alert("No items found.., please search by product category or product name");
    else {
      setAllProducts(filteredData)
      history.push("/viewmore")
    } 
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Find Cars,Mobile,Motorcycles and more..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <div onClick={handleSearchClick}> <SearchIcon /> </div>
          { filteredData.length !== 0 && <div id="clearBtn"  onClick={clearInput} ><CloseIcon/></div> }
        </div>
      </div>
      { filteredData.length !== 0 && 
        <div className="dataResult">
          { filteredData.slice(0, 15).map((value, key) => {
              return (
                <div key={key} className="dataItem" onClick={()=>handleSelectedSearch(value)}>
                  <p>{value.name} </p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}
