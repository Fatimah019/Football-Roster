import React, { useState, createContext } from "react";

const TeamDataContext = createContext()

const TeamDataProvider = ({ children }) => {
    const [teamData, setTeamData] = useState([])
    const [loadedData, setLoadedData] = useState(null)

    return (
        <TeamDataContext.Provider value={{ teamData, setTeamData, loadedData, setLoadedData }}>
            {children}
        </TeamDataContext.Provider>
    )
}


export { TeamDataContext, TeamDataProvider }
