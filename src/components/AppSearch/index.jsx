import React, { useContext } from "react";
import { SearchContext } from "../../context/search";
import AppInput from "../Input";

const PlayerSearch = ({ data }) => {
    const searchData = useContext(SearchContext)

    const onSearchChange = () => {
        searchData?.setSearchedData(data?.filter((d) => {
            return d["Player Name"] === searchData?.searchValue || d?.Position === searchData?.searchValue
        }))
    };

    const handleSearchChange = (e) => {
        searchData?.setSearchValue(e.target.value);
    };
    return <AppInput
        type="text"
        placeholder="Find Player"
        onChange={handleSearchChange}
        value={searchData?.searchValue}
        input_icon
        search_end_text
        handleSearch={onSearchChange}
    />
}

export default PlayerSearch