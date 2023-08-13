# Digital Dungeons and Dragons (DDND)
## By Taz Khallaf, David Musilek and Andrew Sernecky
### Introduction
Dungeons and Dragons (DD&D) is an app designed to optimize the gaming experience and convenience for players and Dungeon Masters (DM). The app seeks to establish seamless connectivity between multiple smartphones (players) and a central laptop (DM), facilitating efficient communication, data exchange, and collaboration during gameplay. The app will also integrate an online database to access official content and a local cache system for storing custom campaigns and homebrew content. This would also allow for a more streamlined experience as once the DM pulls data once, it will be stored onto the device until the campaign is finished. The app is meant to be a versatile tool for D&D enthusiasts as part of their ever-expanding arsenal.

### Objectives
The main objectives of this project include:
- Development of a user-friendly and intuitive interface for players and the DM, enabling smooth interaction during gameplay.
- Establishing a secure and real-time connection between smartphones and laptops, ensuring synchronized data transmission through Bluetooth or wifi.
- Integration of an online database, granting the DM access to official rules, monsters, items, and other game assets.
- Implementing a local cache system to store custom campaigns, homebrew content, and user-generated content alongside previously used official assets.
- Creating an enhanced and portable D&D experience catering to traveling parties.

### Features and Functionality
Key features encompass:
- Account creation
  - Users, including the DMs, can create accounts for campaigns and character management alongside notes for the DM.
- Campaign Management
  - DMs will have the ability to create, edit, and oversee campaigns
  - Players can participate in existing campaigns and create new characters on the spot
- Dice Roller
  - The app will include an integrated dice rolling system for simulating dice throws during gameplay.
- Online Database
  - Access to an online database comparing of official D*D content such as rules, monsters, items, and potential expansion to non-official content.
- Local Cache System
  - A mechanism to store custom campaigns, homebrew content, and user-generated assets for offline usage
  - An easy access system ensures that the app is not pulling the same information from the official database multiple times.
- Character Sheets
  - Players can conveniently manage digital character sheets, recording essential character stats, equipment, and notes the player takes.
- Maps and Asset Sharing
  - DMs can share maps, images, and other assets directly with players during gameplay.
- Turn to track
  - The app will feature a turn tracker, facilitating efficient management of the order of play during combat and other encounters.

 ### How to run?
 ***This part will be filled out eventually***

### Work Stack
The proposed DD&D app will most likely employ the following technologies:
- Front-end implementation of a modern framework (React Native) to develop the mobile app, catering to ONLY Android platforms
  - https://www.electronjs.org/
  - https://cordova.apache.org/
- Back-end utilization of a server-side application built on Node.js, along a robust database system to store user data and campaign information
  - https://www.mongodb.com/

### Coding Standards
For this project, we are going to be following the general JS coding standards in and https://google.github.io/styleguide/jsguide.html

#### TLDR
Use Prettier vsCode Extention
##### General
- Lines are to be no longer than 80 characters unless specified in
- Block comments are indented at the same level as the surrounding code
- Every method and function should have docstrings
- Be liberal with commenting
- DO NOT USE VAR WHEN DECLRAING VARIABLES
- Only declare one variable per line
- Give as descriptive a name as possible, within reason

##### Files and imports
- File names are all lowercase and only include underscores (_) or dashes (-) with no other additional punctuation
- Import statements must not be line wrapped and are therefore an exception to the 80-column limit
- The .js file extension is not optional in import paths and must always be included

##### vars, classes, methods and functions
- vars = lowerCamelCase
- Packages = lowerCamelCase
- Methods = lowerCamelCase
- Classes = UpperCamelCase
- Constant names use CONSTANT_CASE

### Resources and Credits
***This will be updated as packages are installed***

### Similar projects
- Roll20:
  - Roll20 is a virtual tabletop platform that lets players and DMs gather online and play D&D and other role-playing games. It provides video and voice chat features, a dice roller, character sheets, and tools for creating and sharing custom maps and assets.
- D&D Beyond
   - D&D Beyond is an official digital toolset provided by Wizards of the Coast, the creators of Dungeons and Dragons. It offers a comprehensive online database of official rules, monsters, items, and more. Players can create and manage their characters, access digital versions of rulebooks, and participate in campaigns through the platform.
- Fantasy Grounds
  - Fantasy Grounds is another virtual tabletop software designed for playing D&D and other tabletop games online. It offers various features like character management, automation of rules, a robust dice-rolling system, and integration with official D&D content.
- Astral Tabletop
  - Astral Tabletop is a virtual tabletop platform that offers a user-friendly interface for players and DMs to play D&D online. It includes features like map creation, character sheets, and integration with the D&D 5th Edition System Reference Document (SRD).
- Tabletop Simulator
  - Tabletop Simulator is a popular digital platform that brings the joy of tabletop gaming to the digital realm. Developed by Berserk Games, it offers a virtual environment where players can simulate and play board games, card games, and tabletop role-playing games (RPGs) like Dungeons and Dragons. With its powerful tools and flexible mechanics, Tabletop Simulator is a fantastic avenue for D&D enthusiasts to recreate the magic of their tabletop sessions in a digital space.
- Hero Lab
  - Hero Lab is a character creation and management tool that supports various role-playing systems, including Dungeons and Dragons. It allows players to create and customize characters using various options and rules.
- Kobold Fight Club
  - While not a full app or virtual tabletop, Kobold Fight Club is a web-based tool that helps DMs build and balance combat encounters for their D&D campaigns. It streamlines the process of creating challenging and balanced encounters for players.
- Dungeon Scrawl
  - Dungeon Scrawl is a web-based map-making tool allowing DMs to quickly and easily create custom maps for their D&D campaigns. It supports both grid-based and freehand drawing.
