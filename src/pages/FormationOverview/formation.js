import WarningDialog from "../../components/Modals/WarningDialog";

const RenderFormationView = (
  teamData,
  startersData,
  warningDialogRef,
  goalKeepersLength,
  forwardLength,
  midFieldersLength,
  defendersLength
) => {
  switch (true) {
    case !teamData?.length:
      return (
        <WarningDialog
          warningModalRef={warningDialogRef}
          title="No player data found"
          message="Please importer your roster first"
        />
      );
    case startersData?.length < 11:
      return (
        <WarningDialog
          warningModalRef={warningDialogRef}
          title="Not enough starters"
          message="Your team doesn’t have enough starters
                for one or more of the positions in the 4-3-3 formation"
        />
      );
    case startersData?.length > 11:
      return (
        <WarningDialog
          warningModalRef={warningDialogRef}
          title="There are too many starters"
          message="Your team has too many starters 
               for one or more of the positions in the 4-3-3 formation."
        />
      );
    case startersData?.length === 11 &&
      (midFieldersLength > 3 ||
        defendersLength > 4 ||
        goalKeepersLength > 1 ||
        forwardLength > 3):
      return (
        <WarningDialog
          warningModalRef={warningDialogRef}
          title="Invalid Formation"
          message={`Your team cannot have more than 
               ${
                 midFieldersLength > 3
                   ? "three mid fielders"
                   : defendersLength > 4
                   ? "four defenders"
                   : forwardLength > 3
                   ? "three forwards"
                   : "one goal keeper"
               }
                on the field`}
        />
      );
    default:
      return null;
  }
};

export const checkStarterLength = (data, position_key) => {
  return data?.filter(
    (team_member) =>
      team_member?.Starter === "Yes" && team_member?.Position === position_key
  ).length;
};

export default RenderFormationView;
