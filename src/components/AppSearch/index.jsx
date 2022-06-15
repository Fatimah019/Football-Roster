import React, { useContext, useEffect, useState } from "react";
import { TeamDataContext } from "../../context";
import AppButton from "../Button";
import AppInput from "../Input";
import { ReactComponent as CloseSearchIcon } from "../../assets/icons/close.svg";

const PlayerSearch = ({ data }) => {
    const { setSearchedData, setSearchValue, searchValue
    } = useContext(TeamDataContext)
    const [showCancelSearchBtn, setShowCancelSearchBtn] = useState(false)

    const onSearchTeam = (e) => {
        e.preventDefault()
        if (showCancelSearchBtn) {
            setSearchValue("")
            setShowCancelSearchBtn(false)
            setSearchedData(data)
        }
        else {
            setShowCancelSearchBtn(true)
            setSearchedData(data?.filter((d) => {
                return d["Player Name"].toLowerCase()?.includes(searchValue)
                    || d?.Position?.toLowerCase()?.includes(searchValue)
            }))
        }
    };

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        searchValue
            && setShowCancelSearchBtn(false)
    }, [searchValue])

    useEffect(() => {
        const keyEscapeHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setSearchValue("")
                setShowCancelSearchBtn(false)
                setSearchedData(data)
            }
        };

        document.addEventListener('keydown', keyEscapeHandler);
        return () => {
            document.removeEventListener('keydown', keyEscapeHandler);
        };
    }, [data, setSearchValue, setSearchedData]);

    return <form onSubmit={onSearchTeam}>
        <AppInput
            type="text"
            placeholder="Find Player"
            onChange={handleSearchChange}
            value={searchValue}
            input_icon
            search_end_text={<AppButton
                button_type="submit"
                button_text={showCancelSearchBtn ? <CloseSearchIcon /> : "Search"}
                padding="0"
                button_background="transparent"
                button_textcolor="var(--primary-orange)"
                disabled={!searchValue?.length}
            />}
            handleSearch={onSearchTeam}
        />
    </form>
}

export default PlayerSearch
