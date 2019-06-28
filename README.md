# NBA Starting Five API

## Audience

This API is intended to be used by an NBA Starting Five front-end found [HERE](https://github.com/dbudimir/nba-starting-five). Fans of the NBA would find this application both fun and resourceful. Every NBA fan, at one time or another, has had lively debates with fellow NBA fans about their opinions on which players would make the best overall line-up or the 5 best dunkers or the 5 best center and so forth. This application allows users to create a profile consisting of all the different 5-player lineups their heart desires.

## Technologies Used

-  API was created using Express, Mongoose, Node.js
-  Authentication using JSON Web Tokens
-  Testing completed on Postman
-  Deployed via Heroku
-  Hosted by MongoDB Atlas

## Dependencies

-  "body-parser": "^1.19.0",
-  "cors": "^2.8.5",
-  "express": "^4.17.1",
-  "jwt-simple": "^0.5.6",
-  "mongoose": "^5.6.0",
-  "mongoose-unique-validator": "^2.0.3",
-  "passport": "^0.4.0",
-  "passport-jwt": "^4.0.0"

## Project Approach

-  Prioritize planning state. White-boarded models and relations.
-  Commit early and often.
-  Split up back-end and front-end between two group members.
-  Freely communicate on Slack, but have side-by-side meetings at the start and end of the day and at least three times in between.
-  Create a controllers directory with appropriate files inside to set routes.
-  Create a db directory with appropriate files inside including seed file and connection file.
-  Create a models directory with appropriate files inside to set schemas.
-  Populate json files for User model.
-  Test that all routes are working on Postman.
-  Deploy using Heroku.

## Things We've Learned

-  Setting up JSON Web Tokens for sign-up and log-in.
-  Using a "unique validator plug-in" in Mongoose to prevent duplicates in Player model.
-  Populating principles, especially populating nested arrays and populating a full schema.

## Object Examples (with populated related models)

### User

```
{
    "starting_five": [
      {
        "players": [
          {
            "_id": "5d12740acdaeba0017f8cb46",
            "playerID": 2544,
            "playerName": "LeBron James",
            "careerPPG": 27.4,
            "careerAPG": 8.3,
            "careerRPG": 8.5,
            "yearsActive": 16,
            "playerImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lebron_wizards_2017_%28cropped%29.jpg/1200px-Lebron_wizards_2017_%28cropped%29.jpg",
            "__v": 0
          },
          {
            "_id": "5d12857a7174f100178a209c",
            "playerID": 431,
            "playerName": "Shawn Kemp",
            "careerPPG": 14.6,
            "careerAPG": 1.6,
            "careerRPG": 8.4,
            "yearsActive": 14,
            "playerImage": "https://i.ytimg.com/vi/ORLraUwreEA/hqdefault.jpg",
            "__v": 0
          },
          {
            "_id": "5d13cbe55600e70017b218df",
            "playerID": 892,
            "playerName": "Spud Webb",
            "careerPPG": 9.9,
            "careerAPG": 5.3,
            "careerRPG": 2.1,
            "yearsActive": 11,
            "playerImage": "http://cdn0.sbnation.com/entry_photo_images/5043703/Spud_Webb_large.jpg",
            "__v": 0
          },
          {
            "_id": "5d12740ecdaeba0017f8cb47",
            "playerID": 977,
            "playerName": "Kobe Bryant",
            "careerPPG": 25,
            "careerAPG": 4.7,
            "careerRPG": 5.2,
            "yearsActive": 19,
            "playerImage": "http://getwallpapers.com/wallpaper/full/3/6/e/1032338-new-kobe-bryant-wallpaper-hd-2018-2965x2064-pc.jpg",
            "__v": 0
          },
          {
            "_id": "5d1277ebcdaeba0017f8cb4c",
            "playerID": 893,
            "playerName": "Michael Jordan",
            "careerPPG": 30.1,
            "careerAPG": 5.3,
            "careerRPG": 6.2,
            "yearsActive": 14,
            "playerImage": "https://sineilleifer.files.wordpress.com/2013/01/1066.jpg?w=960",
            "__v": 0
          }
        ],
        "_id": "5d12860b7174f100178a209d",
        "name": "Dunk Champs",
        "__v": 0
      }
    ],
    "_id": "5d1273a9d2fa7300048bf875",
    "username": "edotrio",
    "full_name": "Ellison Rio",
    "email": "ellison@gmail.com",
    "__v": 0
  }
```

### Starting Five

```
{
    "players": [
      {
        "_id": "5d1285617174f100178a2098",
        "playerID": 317,
        "playerName": "John Starks",
        "careerPPG": 12.5,
        "careerAPG": 3.6,
        "careerRPG": 2.5,
        "yearsActive": 12,
        "playerImage": "http://media-cache-ak0.pinimg.com/736x/72/4c/f7/724cf745ab69d980696cf27c3ec3f4b6.jpg",
        "__v": 0
      },
      {
        "_id": "5d1285707174f100178a209b",
        "playerID": 891,
        "playerName": "Charles Oakley",
        "careerPPG": 9.7,
        "careerAPG": 2.5,
        "careerRPG": 9.5,
        "yearsActive": 18,
        "playerImage": "https://i.ytimg.com/vi/1jCyBEgg0-E/maxresdefault.jpg",
        "__v": 0
      },
      {
        "_id": "5d1285697174f100178a209a",
        "playerID": 164,
        "playerName": "Chris Childs",
        "careerPPG": 6.9,
        "careerAPG": 4.9,
        "careerRPG": 2.4,
        "yearsActive": 8,
        "playerImage": "https://uproxx.files.wordpress.com/2015/12/screen-shot-2015-12-16-at-10-39-51-pm-e1450323636977.jpg?quality=80&w=650",
        "__v": 0
      },
      {
        "_id": "5d1368ef9ebc400017d998e5",
        "playerID": 349,
        "playerName": "Mark Jackson",
        "careerPPG": 9.6,
        "careerAPG": 8,
        "careerRPG": 3.8,
        "yearsActive": 17,
        "playerImage": "http://www.thesportscol.com/wp-content/uploads/2015/12/mark-jackson.jpg",
        "__v": 0
      },
      {
        "_id": "5d13c0e45600e70017b218c1",
        "playerID": 2546,
        "playerName": "Carmelo Anthony",
        "careerPPG": 24,
        "careerAPG": 3,
        "careerRPG": 6.5,
        "yearsActive": 15,
        "playerImage": "http://images.performgroup.com/di/library/omnisport/15/d4/carmelo-anthony_cf4n02ry9peq1ommxbycpff85.jpg?t=-1507469017",
        "__v": 0
      }
    ],
    "_id": "5d1426ce750cab00176e4a10",
    "name": "Top 5 Knickerbockers",
    "__v": 0
  }
```

### Player

```
{
    "_id": "5d12740acdaeba0017f8cb46",
    "playerID": 2544,
    "playerName": "LeBron James",
    "careerPPG": 27.4,
    "careerAPG": 8.3,
    "careerRPG": 8.5,
    "yearsActive": 16,
    "playerImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lebron_wizards_2017_%28cropped%29.jpg/1200px-Lebron_wizards_2017_%28cropped%29.jpg",
    "__v": 0
  }
```

## Routes

### User

##### /api/users/signup

Allows a user to sign up.

##### /api/users/login

Allows a user to log in.

##### /api/users/

When set to "get", returns all users.

##### /api/users/:name

This path returns a single user by full name.

##### /api/users/id/:id

This path returns a single user by ID.

##### /api/users/new

This path allows a new user to be created.

##### /api/users/edit/:email

This path allows a user to be edited by their email.

##### /api/users/:name

When set to "delete", this path allows a user to be deleted by full name.

##### /api/users/id/:id

When set to "delete", this path allows a user to be deleted by ID.

### Starting Five

##### /api/startingfive/

When set to "get", returns all starting fives.

##### /api/startingfive/:name

This path returns a single starting five by name.

##### /api/startingfive/id/:id

This path returns a single starting five by ID.

##### /api/startingfive/new

This path allows a starting five to be created.

##### /api/startingfive/edit/:name

This path allows a starting five to be edited by name.

##### /api/startingfive/id/:id

This path allows a starting five to be edited by ID.

##### /api/startingfive/:name

When set to "delete", this path allows a starting five to be deleted by name.

##### /api/startingfive/id/:id

When set to "delete", this path allows a starting five to be deleted by ID.

### Player

##### /api/players/

When set to "get", returns all players.

##### /api/players/:name

This path returns a single player by name.

##### /api/players/new

This path allows a new player to be created.

##### /api/players/id/:id

This path allows a player to be edited by ID.

##### /api/players/:name

When set to "delete", this path allows a player to be deleted by name.

##### /api/players/id/:id

When set to "delete", this path allows a player to be deleted by ID.
