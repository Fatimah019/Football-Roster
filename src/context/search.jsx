import React, { useState, createContext, memo } from "react";

const SearchContext = createContext()

const SearchProvider = memo(({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchedData, setSearchedData] = useState([])

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, searchedData, setSearchedData }}>
            {children}
        </SearchContext.Provider>
    )
})

export { SearchContext, SearchProvider }
