import React, { useState, createContext } from "react";

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchedData, setSearchedData] = useState([])

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, searchedData, setSearchedData }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }
