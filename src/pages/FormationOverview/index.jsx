import React, { useContext, useEffect, useRef } from "react";
import WarningDialog from "../../components/Modals/WarningDialog";
import TeamField from "../../components/TeamField";
import { TeamDataContext } from "../../context";

const FormationOverview = () => {
    const warningDialogRef = useRef()

    const { searchedData } = useContext(TeamDataContext)
    const startersData = searchedData?.filter(starter => starter?.Starter === 'Yes');

    useEffect(() => {
        warningDialogRef?.current?.displayModal()
    }, [warningDialogRef, searchedData, startersData])

    return (
        <>
            <TeamField data={searchedData} dataLength={startersData?.length} />
            {
                searchedData?.length && startersData?.length > 11 ?
                    <WarningDialog
                        warningModalRef={warningDialogRef}
                        title="There are too many starters"
                        message="Your team has too many starters for one or more of the positions in the 4-3-3 formation." /> :
                    searchedData?.length && startersData?.length < 11 ?
                        <WarningDialog
                            warningModalRef={warningDialogRef}
                            title="Not enough starters"
                            message="Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation" /> :
                        !searchedData?.length ?
                            <WarningDialog
                                warningModalRef={warningDialogRef}
                                title="No player data found"
                                message="Please importer your roster first" /> : ""

            }

        </>
    );
}

export default FormationOverview;
