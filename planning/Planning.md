# NBA Starting Five Planning

## Why NBA Starting Five?

Our group initially discussed other public APIs, but after ten minutes, we landed on the NBA APIs located [here](https://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=0&LeagueID=00&Season=2017-18) and [here](https://stats.nba.com/stats/commonplayerinfo/?PlayerId=). The first link contains all of the NBA players that have ever played. Each player has a PlayerID. The second link contains a single player's stats. The player's PlayerID must be appended at the end of the link.

We mentioned how this would be useful and fun for NBA diehards. We hope that users would be able to show off and compare their various lineups with their friends.

## Basic flow for using the app

A user may attempt to go straight to creating a starting five. However, it is set up where a user first has to sign-up for an account and has to be logged-in in order to create a starting five. After a user logs-in, they go to a page where they name their starting five. This is followed by a page that allows them to search for players to be added into their starting five. Lastly, they press submit. The users can view their starting fives as well as all created starting fives.

## Initial Thought Process

Initially, we only had two models as seen in the "Whiteboard planning.jpg" in this directory. However, within a couple of hours (along with the advice of our instructors), we decided that it would make more sense to have a separate model for all of the players.

## Models and Categories

### User

-  username
-  full_name
-  email
-  password
-  starting_five []

### Starting Five

-  name
-  players []

### Player

-  career APG
-  career PPG
-  career RPG
-  playerID
-  playerImage
-  playerName
-  yearsActive
