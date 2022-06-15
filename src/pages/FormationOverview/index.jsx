import React, { useContext, useEffect, useRef } from "react";
import WarningDialog from "../../components/Modals/WarningDialog";
import TeamField from "../../components/TeamField";
import { SearchContext } from "../../context/search";

const FormationOverview = () => {
    const warningDialogRef = useRef()

    const data = useContext(SearchContext)
    const startersData = data?.searchedData?.filter(starter => starter?.Starter === 'Yes');

    useEffect(() => {
        warningDialogRef?.current?.displayModal()
    }, [warningDialogRef, data?.searchedData])

    return (
        <>
            <TeamField data={data?.searchedData} dataLength={startersData?.length} />
            {
                data?.searchedData?.length && startersData?.length > 11 ?
                    <WarningDialog
                        warningModalRef={warningDialogRef}
                        title="There are too many starters"
                        message="Your team has too many starters for one or more of the positions in the 4-3-3 formation." /> :
                    data?.searchedData?.length && startersData?.length < 11 ?
                        <WarningDialog
                            warningModalRef={warningDialogRef}
                            title="Not enough starters"
                            message="Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation" /> :
                        !data?.searchedData?.length ?
                            <WarningDialog
                                warningModalRef={warningDialogRef}
                                title="No player data found"
                                message="Please importer your roster first" /> : ""

            }

        </>
    );
}

export default FormationOverview;

