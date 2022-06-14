import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/search";
import AppButton from "../Button";
import AppInput from "../Input";
import { ReactComponent as CloseSearchIcon } from "../../assets/icons/close.svg";

const PlayerSearch = ({ data }) => {
    const searchData = useContext(SearchContext)
    const [showCancelSearchBtn, setShowCancelSearchBtn] = useState(false)

    const onSearchTeam = (e) => {
        e.preventDefault()
        if (showCancelSearchBtn) {
            searchData?.setSearchValue("")
            setShowCancelSearchBtn(false)
            searchData?.setSearchedData(data)
        }
        else {
            setShowCancelSearchBtn(true)
            searchData?.setSearchedData(data?.filter((d) => {
                return d["Player Name"]?.includes(searchData?.searchValue)
                    || d?.Position?.includes(searchData?.searchValue)
            }))
        }
    };

    const handleSearchChange = (e) => {
        e.preventDefault();
        searchData?.setSearchValue(e.target.value);
    };

    useEffect(() => {
        searchData?.searchValue
            && setShowCancelSearchBtn(false)
    }, [searchData?.searchValue])

    useEffect(() => {
        const keyEscapeHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                searchData?.setSearchValue("")
                setShowCancelSearchBtn(false)
                searchData?.setSearchedData(data)
            }
        };

        document.addEventListener('keydown', keyEscapeHandler);
        return () => {
            document.removeEventListener('keydown', keyEscapeHandler);
        };
    }, [data, searchData]);

    return <form onSubmit={onSearchTeam}>
        <AppInput
            type="text"
            placeholder="Find Player"
            onChange={handleSearchChange}
            value={searchData?.searchValue}
            input_icon
            search_end_text={<AppButton
                button_type="submit"
                button_text={showCancelSearchBtn ? <CloseSearchIcon /> : "Search"}
                padding="0"
                button_background="transparent"
                button_textcolor="var(--primary-orange)"
                disabled={!searchData?.searchValue?.length}
            />}
            handleSearch={onSearchTeam}
        />
    </form>
}

export default PlayerSearch
