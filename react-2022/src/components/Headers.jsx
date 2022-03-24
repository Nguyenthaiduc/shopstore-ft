import React, { useState } from 'react'
import Modal from './Modal'
import SearchForm from './SearchForm'
import FilterForm from './FilterForm'
const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  return (
    <header className="header">
      <nav>
        <p>Home</p>
        <p>Create Product</p>
        <p onClick={() => setOpenSearch(true)}>Search</p>
        <p onClick={() => setOpenFilter(false)}>Filter</p>
      </nav>
      {
        openSearch &&
        <Modal titleTxt="Search" setOpen={setOpenSearch}>
          <SearchForm />
        </Modal>
      }

      {
        openFilter &&
        <Modal titleTxt="Search" setOpen={setOpenFilter}>
        <FilterForm />
      </Modal>
      }
      {/* <Modal titleTxt="Search">
        <SearchForm />
        <FilterForm />
      </Modal> */}
    </header>
  )
}

export default Header