# Reper2's ACNH Website
Reper2's ACNH Website is a NookPhone which includes Album, DodoCodes.com profile link, Sprinkle order files, Nookazon profile link, Custom Designs, Island Preview, Happy Home Network gallery, ACNH Apps. The same hourly and evently music from ACNH plays here too!

![Logo](metaimg.png)

# Features:
- 350+ backgrounds (that change to a different background every time you refresh the page)
- evently backgrounds for many events that are held in acnh
- hourly & evently music just like in the game
- message box like in acnh (using acnhmsgbox npm library)

# NookPhone Apps:
Some of these may still be under construction.
- Album: download the complete album of my acnh screenshots & videos
- DodoCodes Profile: my DodoCodes.com profile
- Sprinkle Order Files: download my Sprinkle order files
- ACNH Apps: Animal Crossing New Horizons Apps is a website with useful apps for you to use
- Nookazon Profile: my Nookazon profile
- GitHub Repository: link to this GitHub repository
- Custom Designs, Design Sets: my Custom Designs and Design Sets
- Island Preview: preview of my island
- Happy Home Network Gallery: my Happy Home Network gallery

# Dependencies & Submodules
These are the npm libraries that make up part of the website or are invloved in the development.
- [acnhmsgbox](https://npmjs.com/package/acnhmsgbox) - message box like in acnh
- [http-server](https://npmjs.com/package/http-server) - testing

You can also view dependencies in [package.json](./package.json).

# Scripts
These are the codes that make up the functions and features of the website.
- [acnhmsgbox.js](./scripts/acnhmsgbox.js) - Creates a message box like in acnh using [acnhmsgbox](https://npmjs.com/package/acnhmsgbox).
- [album.js](./scripts/album.js) - The `downloadAlbum()` function. When triggered, asks you to confirm you want to download the ginormus zip file that has my entire album of acnh screenshots and videos.
- [background.js](./scripts/background.js) - Randomised backgrounds including evently backgrounds for some acnh events.
- [download.js](./scripts/download.js) - The `downloadFile(filename)` function. When triggered, asks you to confirm you want to download the file in context.
- [footer.js](./scripts/footer.js) - Appends the footer to the page.
- [music.js](./scripts/music.js) - Hourly and evently music just like in acnh.