
<!-- ABOUT THE PROJECT -->
## Koneksys test (Football Manager app)

### App deployed to vercel [click to view](https://koneksystest.vercel.app)

## About the app
This is a Football Manager app, where a team can be managed, players added, deleted or updated. And a view of the team’s formation is visible with the starters being shown in the field.

<!-- GETTING STARTED -->
## Getting Started

* Run npm install to get all libraries used
* Run npm start to run the project

<!-- GETTING STARTED -->
## Install NPM packages

* react-table: "^7.8.0"
* react-router-dom: "^6.3.0"
* classnames: "^2.3.1",

## App Expectations:

### Roster Details

1. Editable Team Name
    1. If the name has not been changed before, the edit icon should be *always visible;*
    2. After changing the name once, the icon should only be *visible when hovering the name;*
2. Search Field
    1. A search bar to filter players by name and/or position;
    2. The search could filter based on the complete name or a substring;
    3. It should handle keystrokes:
        1. `Enter`: Execute the search (same as clicking “search”);
        2. `Escape`(ESC): Cancel the search and clear the criteria;
    4. After searching, clicking `x` should remove the search (and criteria) and show all results;
3. Roster Importer
    1. Error handling:
        1. Make sure the file contains no empty values, if one is found, return an error to the user;
    2. Ensure only .csv files can be used;
    3. If a valid file is shared, show a summary of counting the total players and count of each positions that would be added if the user accepts;
    4. Once accepted, the contents of the file should be stored in the application state;
    5. If there is already a roster added, the import button should change to “Re-Import”
        1. If used, the state should be cleared and refreshed with the new import;
4. Roster Table
    1. The Table should contain the data from the application state
        1. If the state is empty, show a message instead of the table;
    2. Along with the player name, include the country flag for the player
        1. You’ll find a column named `Flag Image` with a path to the required image;
    3. For `Height` and `Weight`, you’ll need to use the numbers to display a more readable value 
        1. (i.e. 180 → 1.80 m);
    4. Each row should have a actions menu, when used there would be the option to edit or delete a players
        1. When editing, ensure all fields are filled before allowing an edit;
        2. When deleting, ask if the user is sure before deleting;

### Formation Overview

1. Formation Preview
    1. The 4-3-3 formation should be displayed on the field. Where the players are positioned accordingly.
        1. For each player, display a circle with their jersey number and the player name;
    2. The code should check the starters of each position available on the roster:
        1. Goalkeeper, of which **one** is required;
        2. Defender, of which **four** are required;
        3. Midfielder, of which **three** are required;
        4. Forward, of which **three** are required;
    3. There are three conditions to display the formation:
        1. There is a roster;
        2. There are enough starters;
        3. There aren’t too many starters;
    4. If any of the conditions above are not met, show a respective message instead of the preview
        1. See the messages in Figma;
2. Player Details
    1. The user should see details about the players in the formation, by default the goalkeeper should be shown;
    2. The user could then click on a player to see their details;
    3. In the player detail, show the information and stats related to the player;
        1. For Goalkeepers the stats are `Clean Sheets` and `Saves`
        2. For the other positions: `Goals` and `Assists`
        3. All positions have `Appearance` and `Minutes Played`
