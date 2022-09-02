import React, { useState, createContext, memo } from "react";

const TeamDataContext = createContext()

const TeamDataProvider = memo(({ children }) => {
    const [teamData, setTeamData] = useState(...new Set([]))
    const [searchValue, setSearchValue] = useState("");
    const [searchedData, setSearchedData] = useState(...new Set([]))
    const [loadedData, setLoadedData] = useState(...new Set([]))

    return (
        <TeamDataContext.Provider value={{
            teamData,
            setTeamData,
            searchValue,
            setSearchValue,
            searchedData,
            setSearchedData,
            loadedData,
            setLoadedData
        }}>
            {children}
        </TeamDataContext.Provider>
    )
})


export { TeamDataContext, TeamDataProvider }
