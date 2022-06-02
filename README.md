# Reper2's ACNH Website
Reper2's ACNH Website is a NookPhone which includes a download link to Reper2's acnh album, DodoCodes.com profile link, Sprinkle order files, Nookazon profile link, Custom Designs, Island Preview, Happy Home Network gallery, ACNH Apps. The same hourly and evently music from ACNH plays here too!

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

# Modules
| Module | Description | Imports | Exports | Used By |
| :---: | :---: | :---: | :---: | :---: |
| [music.js](./scripts/modules/music.js) | Hourly and evently music just like in acnh. | `time` `con` `events` `hours` | | website_html
| [background.js](./scripts/modules/background.js) | Randomised backgrounds including evently backgrounds for some acnh events. | `time` `con` `events` `hours` `exclude` | | website_html
| [`time`](./scripts/modules/time.js) | Common time variables. | | { `today` `year` `month` `hour` `date` `time` `dateTime` `dateHour` } | [music.js](./scripts/modules/music.js), [background.js](./scripts/modules/background.js), [events.js](./scripts/modules/events.js), [hours.js](./scripts/modules/hours.js), [exclude.js](./scripts/modules/exclude.js)
| [`con`](./scripts/modules/console.js) | Variables for common console messages. | | { `curr` `tdy` `bgnum` } | [music.js](./scripts/modules/music.js), [background.js](./scripts/modules/background.js)
| [`events`](./scripts/modules/events.js) | Variables for ACNH event dates. | `time` | { `intlmuseumday` `mayday` `weddingseason` `bday` `halloween` `turkeyday` `toyday` `nye` `nye_1h` `nye_30m` `nye_10m` `nye_5m` `nye_happynewyear1` `nye_happynewyear2` `nye_midnight` } | [music.js](./scripts/modules/music.js), [background.js](./scripts/modules/background.js)
| [`exclude`](./scripts/modules/exclude.js) | Makes sure regular backgrounds don't intervene with event backgrounds. | `time` | `isNotExcluded` | [background.js](./scripts/modules/background.js)
| [`hours`](./scripts/modules/hours.js) | Variables for each hour of the day. | `time` | { `midnight` `am_one` `am_two` `am_three` `am_four` `am_five` `am_six` `am_seven` `am_eight` `am_nine` `am_ten` `am_eleven` `noon` `pm_one` `pm_two` `pm_three` `pm_four` `pm_five` `pm_six` `pm_seven` `pm_eight` `pm_nine` `pm_ten` `pm_eleven` } | [music.js](./scripts/modules/music.js), [background.js](./scripts/modules/background.js)

```mermaid
graph TD;
    time-->events;
    time-->exclude;
    time-->hours;
    time-->music.js;
    time-->background.js;

    con-->music.js;
    con-->background.js;

    events-->music.js;
    events-->background.js;

    exclude-->background.js;

    music.js-->website_html
    background.js-->website_html
```

# Normal Scripts
These are the regular scripts that make up the website without the imports or exports of modules.
- [acnhmsgbox.js](./scripts/acnhmsgbox.js) - Creates a message box like in acnh using [acnhmsgbox](https://npmjs.com/package/acnhmsgbox).
- [album.js](./scripts/album.js) - The `downloadAlbum()` function. When triggered, asks you to confirm you want to download the ginormous zip file that has my entire album of acnh screenshots and videos.
- [download.js](./scripts/download.js) - The `downloadFile(filename)` function. When triggered, asks you to confirm you want to download the file in context.
- [footer.js](./scripts/footer.js) - Appends the footer to the page.