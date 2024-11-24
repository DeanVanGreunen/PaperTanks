# Overview

Simple 2D Game, with custom UI and internal Game Engine, Written in Typescript, with webpack as the bundler.

This is a passion project, which I will be working on from time to time.

You may make derivitive works however you may not sell these derivied works or this repo itself.

# License

NOT FOR: SALE, RESALE, REUSE (DERIVATIVES), AND/OR DISTRABUTION.
FOR EDUCATIONAL PURPOSES ONLY.
THIS IS BEEN ACTIVILY DEVELOPED AS A FULL GAME. THIS IS PURELY A DEMO OF MY GAME IDEA.

# Tech Used

- Typescript
- WebPack
- Canvas HTML Element
- Visual Code

# TODO List

Things to do.

- [ ] Hook into mouse position relative to the canvas, which is repositioned to the middle of the canvas, and mouse up/down events
- [ ] Hook into keyboard, press, up/down events
- [ ] Add Button Component (used for `Start Game`, and `"Multiplayer" <- Disabled` buttons)
- [ ] Add Game Component (this will contain, the entire game logic)
- [ ] Add Level Component (used for level selection and map logic)
- [ ] Add Player Entity (Tank component, with custom Player driven AI Agent)
- [ ] Add Base Enemy Entity (Thank component, with AI Agent)
- [ ] Add JSON parsing for level loading, such as `level_1.json`
- [ ] Add Viewport Navigation and tie to player position within the game world.
- [ ] Add `Game over`, `Match Won`, and `Match Lost` States (the latter 2 will be used in MP)
- [ ] Complete 2D Physics Engine (Collisions) 
- [ ] Provision time for R&D for Multiplayer Support


# Development

- Clone Repo
- Run `npm install`
- Start `npm run start`
- Load `index.html` via the `dist` folder
- actual js library is in `dist/bundler.js`
