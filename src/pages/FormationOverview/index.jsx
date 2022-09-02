import React, { useContext, useEffect, useRef } from "react";
import TeamField from "../../components/TeamField";
import { TeamDataContext } from "../../context";
import { checkForDuplicateData } from "../../functions/fileCheck";
import RenderFormationView, { checkStarterLength } from "./formation";

const FormationOverview = () => {
    const warningDialogRef = useRef()
    const { teamData } = useContext(TeamDataContext)
    const data = checkForDuplicateData(teamData)

    const startersData = data?.filter(starter => starter?.Starter === 'Yes');

    useEffect(() => {
        warningDialogRef?.current?.displayModal()
    }, [warningDialogRef, teamData, startersData])

    return (
        <>
            <TeamField
                data={data}
                dataLength={startersData?.length}
            />
            {
                RenderFormationView(
                    data,
                    startersData,
                    warningDialogRef,
                    checkStarterLength(data, "Goalkeeper"),
                    checkStarterLength(data, "Forward"),
                    checkStarterLength(data, "Midfielder"),
                    checkStarterLength(data, "Defender")
                )
            }
        </>
    );
}

export default FormationOverview;
