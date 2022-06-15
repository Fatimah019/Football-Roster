import React, { useState, createContext, memo } from "react";

const TeamDataContext = createContext()

const TeamDataProvider = memo(({ children }) => {
    const [teamData, setTeamData] = useState([])
    const [searchValue, setSearchValue] = useState("");
    const [searchedData, setSearchedData] = useState([])
    const [loadedData, setLoadedData] = useState(null)

    return (
        <TeamDataContext.Provider value={{ teamData, setTeamData, searchValue, setSearchValue, searchedData, setSearchedData, loadedData, setLoadedData }}>
            {children}
        </TeamDataContext.Provider>
    )
})


export { TeamDataContext, TeamDataProvider }
