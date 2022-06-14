import React, { useContext, useEffect, useRef } from "react";
import WarningDialog from "../../components/Modals/WarningDialog";
import { TeamDataContext } from "../../context/data";
import TeamField from "../../components/TeamField";

const UsersLine = () => {
    const warningDialogRef = useRef()

    const data = useContext(TeamDataContext)
    const startersData = data?.teamData?.filter(starter => starter?.Starter === 'Yes');

    useEffect(() => {
        warningDialogRef?.current?.displayModal()
    }, [warningDialogRef, data?.teamData])

    return (
        <>
            {
                data?.teamData?.length && startersData?.length > 10 ?
                    <WarningDialog
                        warningModalRef={warningDialogRef}
                        title="There are too many starters"
                        message="Your team has too many starters for one or more of the positions in the 4-3-3 formation." /> :
                    data?.teamData?.length && startersData?.length < 10 ?
                        <WarningDialog
                            warningModalRef={warningDialogRef}
                            title="Not enough starters"
                            message="Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation" /> :
                        !data?.teamData?.length ?
                            <WarningDialog
                                warningModalRef={warningDialogRef}
                                title="No player data found"
                                message="Please importer your roster first" /> :
                            <TeamField data={data?.teamData} dataLength={startersData?.length} />

            }

        </>
    );
}

export default UsersLine;

